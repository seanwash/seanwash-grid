<template>
  <Layout>
    <div class="post-title">
      <h1 class="post-title__text">{{ title }}</h1>
    </div>

    <div class="content-box">
      <p>
        Reading is habit that I've always admired about others, but something
        that I frequently lack the discipline to do. For me it seems to be about
        momentum, and this list is my attempt to steer that momentum in hopes
        that it keeps going.
      </p>

      <BookList
        category="Finished"
        :books="books.finished"
      />

      <BookList
        v-if="books.inProgress.length"
        category="In Progress"
        :books="books.inProgress"
      />

      <BookList
        category="To Read"
        :books="books.toRead"
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
        <a href="https://us.kobobooks.com/collections/ereaders">Kobo eReader</a>. I find that the display is much easier on my eyes, and since it's
        just an eReader I'm not tempted to drift off into Twitter or Reddit.
      </p>
    </div>

    <Author />
  </Layout>
</template>

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
      books: {
        finished: [
          {
            name: 'Quiet by Susan Cain',
            url:
              'https://www.goodreads.com/book/show/8520610-quiet?ac=1&from_search=true',
          },
          {
            name: 'The Power of Habit by Charles Duhigg',
            url:
              'https://www.goodreads.com/book/show/12609433-the-power-of-habit?from_search=true',
          },
          {
            name: 'Imagine: How Creativity Works by Jonah Lehrer',
            url: 'https://www.goodreads.com/book/show/12987640-imagine',
          },
          {
            name: 'Anything You Want - Derek Sivers',
            url:
              'https://www.goodreads.com/book/show/11878168-anything-you-want?from_search=true',
          },
        ],
        inProgress: [
          {
            name: 'Mastering Modular JavaScript by Nicolas Bevacqua',
            url:
              'https://www.amazon.com/Mastering-Modular-JavaScript-Nicolas-Bevacqua/dp/1491955686',
          },
        ],
        toRead: [
          {
            name: 'Thinking, Fast and Slow by Daniel Kahneman',
            url:
              'https://www.goodreads.com/book/show/11468377-thinking-fast-and-slow?from_search=true',
          },
          {
            name: 'Shoe Dog by Phil Knight',
            url: 'https://www.kobo.com/us/en/ebook/shoe-dog-1',
          },
          {
            name: 'Elon Musk by Ashlee Vance',
            url: 'https://www.kobo.com/us/en/ebook/elon-musk-1',
          },
          {
            name: 'Astrophysics for People in a Hurry by Neil deGrasse Tyson',
            url:
              'https://www.kobo.com/us/en/ebook/astrophysics-for-people-in-a-hurry',
          },
        ],
      },
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
