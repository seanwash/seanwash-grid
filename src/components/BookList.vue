<template>
  <div>
    <h3>{{ category }}</h3>

    <ul>
      <li
        v-for="book in books"
        :key="book.name"
      >
        <a :href="book.url">{{ book.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BookList',
  props: {
    category: {
      type: String,
      required: true,
    },
    books: {
      type: Array,
      required: true,
    },
  },
}
</script>
