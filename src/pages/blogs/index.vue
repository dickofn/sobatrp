<template>
  <Layout class="blogs">
    <b-container>
      <b-row class="blogs-cards">
        <b-col class="card-container" sm="12" lg="6" v-for="blog in blogs" :key="blog.full_slug">
          <g-link :to="`blogs/blog/${blog.id}`">
            <b-card no-body class="overflow-hidden card">
              <b-row no-gutters class="content-container">
                <b-col sm="12" md="6" class="card__img-container">
                  <b-card-img
                    :src="blog.content.image"
                    class="rounded-0 card__img card__img--cover"
                  ></b-card-img>
                  <b-card-img
                    :src="blog.content.image"
                    class="rounded-0 card__img card__img--contain"
                  ></b-card-img>
                </b-col>
                <b-col sm="12" md="6">
                  <b-card-body class="card__body">
                    <b-card-text class="card__text">{{ blog.content.title }}</b-card-text>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </g-link>
        </b-col>
      </b-row>
    </b-container>

    <!-- <ul>
        <li v-for="blog in blogs" :key="blog.full_slug">
          <g-link :to="`blogs/blog/${blog.id}`">{{ blog.content.title }}</g-link>
        </li>
    </ul>-->
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Blogs"
  },
  data() {
    return {
      blogs: null,
      page: 1
    };
  },
  methods: {
    async getBlogs(page) {
      const sb = this.$store.state.storyblok;
      this.$store.dispatch("toogleLoading", true);
      try {
        const res = await sb.get("cdn/stories", {
          per_page: 10,
          page: page,
          sort_by: "created_at:desc"
        });
        this.blogs = res.data.stories;
        this.$store.dispatch("toogleLoading", false);
      } catch (e) {
        console.log(e);
        alert("Something wrong please refresh the page");
        this.$store.dispatch("toogleLoading", false);
      }
    }
  },
  created() {
    this.getBlogs(1);
  }
};
</script>

<style lang="scss" scoped>
.layout.blogs {
  & .blogs-cards {
    padding-top: 10rem;
    padding-bottom: 10rem;
  }

  & .card-container {
    height: 22rem;
    margin-bottom: 5rem;

    @media (max-width: 768px) {
      height: 100%;
    }

    .card {
      height: 100%;
      background-color: transparent;
      transition: all 0.2s;

      .content-container {
        height: 100%;

        & > * {
          height: 100%;
        }

        .card__img {
          &-container {
            position: relative;

            @media (max-width: 768px) {
              height: 20rem;
            }
          }
          &--cover {
            height: 100%;
            width: 100%;
            object-fit: cover;
            object-position: center;
            transition: all 0.6s;
          }
          &--contain {
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
            height: 100%;
            width: 100%;
            object-fit: contain;
            object-position: center;
          }
        }

        .card__body {
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;

          .card__text {
            padding: 0 1rem;
            font-size: 2rem;
            font-weight: 700;
            text-align: right;
          }
        }
      }
    }

    &:hover {
      a:hover {
        text-decoration: none;
      }

      .card {
        transform: translateY(-1rem);
        box-shadow: 0 1rem 2rem #000;

        .card__img {
          &--cover {
            opacity: 0;
          }
        }
      }
    }
  }
}
</style>