<template>
  <div class="minikasko-container">
    <EasyToLearnBanner/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import EasyToLearnBanner from "~/components/common/EasyToLearnBanner";

@Component({
  components: {EasyToLearnBanner}
})
export default class MinikaskoEasyToLearn extends Vue {}
</script>

<style lang="scss">
.minikasko-container {
  .hiw-title {
    @media (max-width: $w-sm){
      line-height: 1.3;
    }
  }
  .easy-to-learn-banner {
    @media (max-width: $w-sm){
      margin-bottom: 10px !important;
    }
  }
}
</style>
