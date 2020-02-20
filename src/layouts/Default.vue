<template>
  <div class="layout">
    <header id="headerNav">
      <b-navbar class="nav" toggleable="lg" type="light" variant="white" fixed="top">
        <b-container>
          <b-navbar-brand href="/">
            <g-image class="nav__logo-img" src="~/assets/img/logo.png" alt="Logo" />
          </b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <b-nav-item
                class="nav__item"
                href="/"
                :active="$route.path == '/'"
              >{{$static.metadata.siteName}}</b-nav-item>

              <b-nav-item
                class="nav__item"
                href="/products"
                :active="$route.path == '/products'"
              >Products</b-nav-item>

              <b-nav-item
                class="nav__item"
                href="/portofolio"
                :active="$route.path == '/portofolio'"
              >Portofolio</b-nav-item>

              <b-nav-item
                class="nav__item"
                href="/simulation"
                :active="$route.path == '/simulation'"
              >Simulation</b-nav-item>

              <b-nav-item class="nav__item" v-scroll-to="'#footerContact'">Contact</b-nav-item>

              <b-nav-item class="nav__item" href="/blogs" :active="$route.path == '/blogs'">Blogs</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-container>
      </b-navbar>
    </header>
    <div class="body">
      <div class="loading" v-if="isLoading">
        <b-spinner class="loading__spinner" label="Loading..." variant="primary"></b-spinner>
      </div>
      <slot />
    </div>
    <footer class="footer" id="footerContact">
      <div class="footer__top">
        <b-container>
          <b-row>
            <b-col sm="12" md="6" class="top__col">
              <div class="text">
                <b>Untuk informasi lebih lanjut hubungi kami.</b>
              </div>
              <div class="socials text"></div>
              <div class="text">
                PT. Lentera Adhya Investama
                <br />Sentral Senayan 2, 20th Floor
                <br />Jl. Asia Afrika No. 8 Jakarta 10270
                <br />+62 21 5795 4022 ext. 105
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <div class="footer__bottom">&copy; {{thisYear}} SOBATRP All Rights Reserved.</div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  computed: {
    thisYear() {
      const dt = new Date();
      return dt.getUTCFullYear();
    },
    isLoading() {
      return this.$store.state.isLoading;
    }
  }
};
</script>

<style lang="scss">
.nav {
  & &__logo-img {
    max-height: 4rem;
    width: auto;
  }

  & &__item {
    font-weight: 800;
    text-transform: uppercase;
    padding: 1.5rem;
  }
}

.body {
  margin-top: 7.4rem;

  @media (max-width: 768px) {
    margin-top: 5.4rem;
  }

  .loading {
    min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .loading__spinner {
      height: 10rem;
      width: 10rem;
    }
  }
}

.footer {
  & &__top {
    padding-top: 5rem;
    padding-bottom: 5rem;
    background-color: var(--primary);
    color: #f7f7f7;

    .top__col {
      height: auto;
    }
  }

  & &__bottom {
    padding-top: 2rem;
    padding-bottom: 2rem;
    text-align: center;
    background-color: var(--secondary);
    color: #232323;
  }
}
</style>
