<template>
  <Layout>
    <component
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
      :is="story.content.component"
    />
  </Layout>
</template>

<page-query>
query StoryblokEntry ($id: ID) {
  storyblokEntry (id: $id) {
    id
    slug
    content
  }
}
</page-query>
  
<script>
export default {
  name: "StoryblokEntryTemplate",
  computed: {
    story() {
      return this.$page.storyblokEntry;
    }
  }
};
</script>
