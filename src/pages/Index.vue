<template>
  <Layout :show-logo="false">
    <!-- Author intro -->
    <Author :show-title="true" />

    <!-- List posts -->
    <div class="posts">
      <PostCard
        v-for="edge in $page.posts.edges"
        :key="edge.node.id"
        :post="edge.node"
      />
    </div>
  </Layout>
</template>

<page-query>
{
  posts: allGhostPost(sortBy: "published_at", order: DESC) {
    edges {
      node {
        id
        title
        path
        tags {
          id
          name
          path
        }
        published_at (format: "D. MMMM YYYY")
        excerpt
        ...on GhostPost {
            id
            title
            path
        }
      }
    }
  }
}
</page-query>

<script>
import Author from '~/components/Author.vue'
import PostCard from '~/components/PostCard.vue'

export default {
  components: {
    Author,
    PostCard,
  },
  metaInfo: {
    title: 'Sean Washington - Programmer in California.',
  },
}
</script>
