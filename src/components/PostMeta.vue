<template>
  <div class="post-meta">Posted {{ post.published_at }}.</div>
</template>

<script>
export default {
  props: ['post'],
}
</script>

<style lang="scss">
.post-meta {
  font-size: 0.8em;
  opacity: 0.8;
}
</style>
