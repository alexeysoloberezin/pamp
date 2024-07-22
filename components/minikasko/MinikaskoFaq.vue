<template>
  <Faq class="minikasko-faq" :page="faqPages.Minikasko"/>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import {FaqPages} from "~/components/common/Faq.vue";
import Faq from "~/components/common/Faq.vue";

@Component({
  components: {
    Faq,
  }
})
export default class MinikaskoFaq extends Vue {
  faqPages = FaqPages;
}
</script>

<style lang="scss">
.minikasko-faq {
  .faq-container {
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;
  }
  .v-expansion-panel {
    max-width: 440px;
  }
}
</style>
