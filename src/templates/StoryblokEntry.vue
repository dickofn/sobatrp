<template>
  <Layout>
    {{ $page.post.content.title }}
    <br />
    <Richtext :text="$page.post.content.content"></Richtext>
  </Layout>
</template>

<page-query>
query StoryblokEntry ($id: ID) {
  post: storyblokEntry (id: $id) {
    id
    slug
    content
  }
}
</page-query>
  
<script>
import Richtext from "~/components/Richtext.vue";

export default {
  metaInfo() {
    return {
      title: this.$page.post.content.title
    };
  },
  components: {
    Richtext
  }
};
</script>
