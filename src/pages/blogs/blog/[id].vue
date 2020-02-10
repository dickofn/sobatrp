<template>
  <Layout class="blog" v-if="this.blog">
    <b-container>
      <div class="blog__title">
        <div class="back-container">
          <g-link to="/blogs">
            <div class="btn btn-primary">
              <b-icon-chevron-left></b-icon-chevron-left>BACK
            </div>
          </g-link>
        </div>
        <h1 class="title text-title">{{ blog.content.title }}</h1>
      </div>
      <div class="blog__img">
        <img :src="blog.content.image" alt="Blog entry's image" />
      </div>
      <div class="blog__body">
        <Richtext :text="blog.content.content"></Richtext>
      </div>
    </b-container>
  </Layout>
</template>

<script>
import Richtext from "~/components/Richtext.vue";

export default {
  metaInfo() {
    return {
      title: this.title
    };
  },
  data() {
    return {
      title: "Blog",
      blog: null
    };
  },
  components: {
    Richtext
  },
  async created() {
    const id = this.$route.params.id;
    const sb = this.$store.state.storyblok;    
    this.$store.dispatch("toogleLoading", true);    
    try {
      const res = await sb.get("cdn/stories/" + id);
      this.blog = res.data.story;
      this.title = this.blog.content.title;
      this.$store.dispatch("toogleLoading", false);
    } catch (e) {
      console.log(e);
      alert("Something wrong please refresh the page");
      this.$store.dispatch("toogleLoading", false);
    }
  }
};
</script>

<style lang="scss" scoped>
.layout.blog {
  & .blog__title {
    position: relative;
    padding: 5rem 6rem;

    @media (max-width: 768px) {
      padding: 5rem 0;
    }

    .back-container {
      position: absolute;
      left: 0;
      bottom: 0;
      top: 0;
      display: flex;
      align-items: center;

      @media (max-width: 768px) {
        position: relative;
        margin-bottom: 5rem;
      }
    }

    .title {
      margin-bottom: 0;
    }
  }

  & .blog__img {
    width: 100%;
    text-align: center;
    margin: 5rem 0;

    img {
      max-width: 100%;
      max-height: 50vh;
    }
  }

  & .blog__body {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
}
</style>
