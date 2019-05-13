<template>
  <div>
    <h3>{{ category }}</h3>

    <ul>
      <li v-for="{ node } in books" :key="node.title">
        <a :href="node.url">{{ node.title }} by {{ node.author }}</a>
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
