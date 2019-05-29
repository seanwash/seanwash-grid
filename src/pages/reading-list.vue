<template>
  <Layout>
    <div class="post-title">
      <h1 class="post-title__text">{{ title }}</h1>
    </div>

    <div class="content-box">
      <p>
        Reading is a habit that I've always admired about others, but something
        that I frequently lack the discipline to do. For me it seems to be about
        momentum, and this list is my attempt to steer that momentum in hopes
        that it keeps going.
      </p>

      <BookList category="Finished" :books="$page.booksFinished.edges" />

      <BookList
        v-if="$page.booksInProgress.edges.length"
        category="In Progress"
        :books="$page.booksInProgress.edges"
      />

      <BookList
        v-if="$page.booksToRead.edges.length"
        category="To Read"
        :books="$page.booksToRead.edges"
      />

      <h3>How I Read</h3>

      <p>
        I'm open to suggestions! If you've really enjoyed a book in the past,
        feel free to send me a recommendation.
      </p>

      <p>
        I used to try to read at night on my iPhone when I couldn't sleep but I
        found that it had a pretty significant impact on the quality of my sleep
        and that I'd often get distracted by a push notification or another app.
        These days I'm reading on a
        <a href="https://us.kobobooks.com/collections/ereaders">Kobo eReader</a
        >. I find that the display is much easier on my eyes, and since it's
        just an eReader I'm not tempted to drift off into Twitter or Reddit.
      </p>
    </div>

    <Author />
  </Layout>
</template>

<page-query>
  query {
    booksFinished: allBooks(
      filter: { status: { eq: "finished"}}
    ) {
      edges {
        node {
          title
          author
          url
        }
      }
    }

    booksInProgress: allBooks(
      filter: { status: { eq: "in_progress"}}
    ) {
      edges {
        node {
          title
          author
          url
        }
      }
    }

    booksToRead: allBooks(
      filter: { status: { eq: "to_read"}}
    ) {
      edges {
        node {
          title
          author
          url
        }
      }
    }
  }
</page-query>

<script>
import Author from '~/components/Author.vue'
import BookList from '~/components/BookList'

export default {
  components: {
    BookList,
    Author,
  },

  metaInfo: {
    title: 'My Reading List',
  },

  data() {
    return {
      title: 'My Reading List',
    }
  },
}
</script>

<style lang="scss">
.post-title {
  padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
  text-align: center;
}

.post-author {
  margin-top: calc(var(--space) / 2);
}
</style>
