<template>
  <div class="layout">
    <header id="headerNav">
      <b-navbar class="nav" toggleable="lg" type="light" variant="white" fixed="top">
        <b-container>
          <b-navbar-brand href="/">
            <g-image class="nav__logo-img" src="~/assets/img/logo.png" alt="Logo" immediate="true" />
          </b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <b-nav-item class="nav__item" href="/" :active="$route.path == '/'">Home</b-nav-item>

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

              <b-nav-item
                class="nav__item"
                href="/contact"
                :active="$route.path == '/contact'"
              >Contact</b-nav-item>

              <b-nav-item class="nav__item" href="/blogs" :active="$route.path == '/blogs'">Blogs</b-nav-item>

              <b-nav-item-dropdown class="nav__item" right>
                <template v-slot:button-content>
                  <g-image class="nav__logo-img" src="~/assets/img/flag-en.png" alt="EN" />
                  <span class="sr-only">Language</span>
                </template>
                <b-dropdown-item class="text-center bg-primary">
                  <g-image class="nav__logo-img" src="~/assets/img/flag-en.png" alt="EN" />
                </b-dropdown-item>
                <b-dropdown-item class="text-center bg-primary">
                  <g-image class="nav__logo-img" src="~/assets/img/flag-id.png" alt="ID" />
                </b-dropdown-item>
              </b-nav-item-dropdown>
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
      <div class="footer__bottom">&copy; {{thisYear}} SOBATRP All Rights Reserved.</div>
    </footer>
  </div>
</template>

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
    height: 4rem;
    width: auto;
  }

  & &__item {
    font-weight: 800;
    text-transform: uppercase;
    padding: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1200px) {
      padding: 1rem;
    }
  }
}

.body {
  margin-top: 7.4rem;

  @media (max-width: 992px) {
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
  & &__bottom {
    padding-top: 2rem;
    padding-bottom: 2rem;
    text-align: center;
    background-color: var(--secondary);
    color: #232323;
  }
}
</style>
