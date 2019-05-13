// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios')

const READING_LIST_URL = `https://spreadsheets.google.com/feeds/list/${
  process.env.GRIDSOME_READING_LIST_SHEET_ID
}/${process.env.GRIDSOME_READING_LIST_SHEET_PAGE}/public/values?alt=json`

module.exports = function(api) {
  api.loadSource(store => {
    // Use the Data store API here: https://gridsome.org/docs/data-store-api

    api.loadSource(async store => {
      const { data } = await axios.get(READING_LIST_URL)
      const entries = data.feed.entry

      const contentType = store.addContentType({
        typeName: 'Books',
      })

      for (const item of entries) {
        contentType.addNode({
          title: item['gsx$title']['$t'],
          author: item['gsx$author']['$t'],
          url: item['gsx$url']['$t'],
          status: item['gsx$status']['$t'],
        })
      }
    })
  })
}
