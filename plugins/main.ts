import "../utils/headHook";
import Vue from "vue";

import "@/types/Date";
import "@glidejs/glide/dist/css/glide.core.min.css";

import VueYoutube from "vue-youtube";
Vue.use(VueYoutube);
import Vue2TouchEvents from "vue2-touch-events";
Vue.use(Vue2TouchEvents, {
  namespace: "ppd-touch",
});
import ZondBtn from "@/components/ZondBtn.vue";
Vue.component("zond-btn", ZondBtn);
import DecoSpot from "~/components/common/deco/DecoSpot.vue";
Vue.component("DecoSpot", DecoSpot);
import DecoTri from "~/components/common/deco/DecoTri.vue";
Vue.component("DecoTri", DecoTri);
