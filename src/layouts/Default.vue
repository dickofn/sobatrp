<template>
  <div class="layout">
    <header>
      <b-navbar class="nav" toggleable="lg" type="light" variant="white" fixed="top">
        <b-container>
          <b-navbar-brand href="/">
            <g-image class="nav__logo-img" src="~/assets/img/logo.jpeg" alt="Logo" />
          </b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <b-nav-item class="nav__item" href="/" :active="$route.path == '/'">{{$static.metadata.siteName}}</b-nav-item>
              <b-nav-item class="nav__item" href="/blogs" :active="$route.path == '/blogs'">Blogs</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-container>
      </b-navbar>
    </header>
    <div class="body">
      <slot />
    </div>
    <footer class="footer">
      <div class="footer__top">
        <b-container>
          <b-row>
            <b-col sm="12" md="6" class="top__col">
              <div class="text">Untuk informasi lebih lanjut hubungi kami.</div>
              <div class="socials text"></div>
              <div class="text">
                PT. Lentera Adhya Investama - Sentral Senayan 2, 20th Floor
                <br />Jl. Asia Afrika No. 8 Jakarta 10270
                <br />+6221 5795 4022 ext. 105
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
    }
  },
  created(){
    console.log(this.$route);
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
