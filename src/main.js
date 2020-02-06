// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import VueScrollTo from "vue-scrollto";

import "~/assets/scss/custom.scss";

import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { router, head, isClient }) {
  Vue.use(BootstrapVue);
  Vue.use(VueScrollTo, {
    easing: "ease",
    duration: 800
  });

  Vue.component("Layout", DefaultLayout);
}
