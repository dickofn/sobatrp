// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuex from "vuex";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import VueScrollTo from "vue-scrollto";

import StoryblokVue from "storyblok-vue";
import StoryblokClient from "storyblok-js-client";

import "~/assets/scss/custom.scss";

import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { router, head, isClient, appOptions }) {
  Vue.use(BootstrapVue);
  Vue.use(IconsPlugin);
  Vue.use(VueScrollTo, {
    easing: "ease",
    duration: 800
  });
  Vue.use(StoryblokVue);
  Vue.use(Vuex);

  Vue.component("Layout", DefaultLayout);

  head.script.push({
    src: "//app.storyblok.com/storyblok-latest.js"
  });

  appOptions.store = new Vuex.Store({
    state: {
      storyblok: null,
      isLoading: false
    },
    mutations: {
      UPDATE_STORYBLOK(state, payload) {
        state.storyblok = payload;
      },
      UPDATE_LOADING_STATUS(state, payload) {
        state.isLoading = payload;
      }
    },
    actions: {
      storyblokInit({ commit }, token) {
        const sb = new StoryblokClient({
          accessToken: token,
          cache: {
            clear: "auto",
            type: "memory"
          }
        });
        commit("UPDATE_STORYBLOK", sb);
      },
      toogleLoading({ commit }, status) {
        commit("UPDATE_LOADING_STATUS", status);
      }
    }
  });

  router.beforeEach((to, from, next) => {
    if (to.path.includes("/blog")) {
      appOptions.store.dispatch("storyblokInit", "0D8o2iqjb60Xv3V2z7uimwtt");
    }
    next();
  });
}
