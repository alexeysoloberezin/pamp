import Vue from 'vue';
import Masonry from "masonry-layout";
Vue.prototype.$masonry = Masonry;
declare module 'vue/types/vue' {
  interface Vue {
    $masonry: Masonry
  }
}
