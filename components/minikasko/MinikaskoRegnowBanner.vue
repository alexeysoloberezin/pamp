<template>
  <RegnowBanner
    primary
    container-class="minikasko-container"
    btn-text="Присоединиться"
  >
    <template #title>
      Зарегистрируйтесь, чтобы выводить комиссионное вознаграждение <span style="color: #7936E7">в любое время и&nbsp;без длительного ожидания</span>
    </template>
  </RegnowBanner>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

import RegnowBanner from "~/components/common/regnow/RegnowBanner";

@Component({
  components: {
    RegnowBanner,
  }

})
export default class MinikaskoRegnowBanner extends Vue {
}
</script>

<style lang="scss">
.minikasko-container {
  .regnow-banner {
    @media (max-width: $w-sm){
      grid-template-columns: 1fr;
    }
  }
  .banner-title {
    @media (max-width: $w-md){
      font-size: 20px;
      line-height: 1.2;
      text-align: center;
    }
    @media (max-width: $w-sm){
      font-size: 18px;
      line-height: 20px;
      text-align: center;
    }
  }
  .regnow-banner-text {
    @media (max-width: $w-md){
      text-align: center;
    }
  }
}
</style>
