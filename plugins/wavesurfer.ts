import Vue from 'vue';
import WaveSurfer from 'wavesurfer.js';
Vue.prototype.$wavesurfer = WaveSurfer;
declare module 'vue/types/vue' {
  interface Vue {
    $wavesurfer: WaveSurfer
  }
}
