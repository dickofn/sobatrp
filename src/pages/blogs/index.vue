<template>
  <Layout class="blogs">
    <div class="construction">
      <g-image src="~/assets/img/construction-board.png" alt class="construction-img"></g-image>
    </div>

    <div>
      <ul>
        <li v-for="post in $page.posts.edges" :key="post.node.id">
          <g-link :to="post.node.full_slug">{{ post.node.content.title }}</g-link>
        </li>
      </ul>
    </div>
  </Layout>
</template>

<page-query>
query AllStoryblokEntry {
  posts: allStoryblokEntry {
    totalCount
    edges {
      node {
        id
        full_slug
        content
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Blogs"
  }
};
</script>
