<template>
  <div class="generic-container-1260">
    <div class="affiliate-program-about">
      <div class="affiliate-program-about-text">
        <h2 class="affiliate-program-h2" v-html="'О партнерской программе'"/>
        <p class="affiliate-program-about-desc"/>
        <p class="affiliate-program-about-desc"/>
      </div>
      <div class="affiliate-program-about-img">
        <img :src="img" alt="about" style="max-width: 100%;width: 100%">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({})
export default class About extends Vue {
  img = require('images/gazprom/about.jpg')
}
</script>

<style lang="scss">
.affiliate-program-about {
  padding: 75px 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  &-text {
    flex: 0 1 547px;
  }
  .affiliate-program-h2 {
    max-width: 425px;
  }
  &-desc {
    margin-top: 25px;
  }
  &-img {

  }

  @media (max-width: $w-sm) {
    padding: 25px 0;
    flex-direction: column;
    &-text {
      flex: auto;
    }
    &-desc {
      margin-top: 15px;
      font-size: 14px;
      line-height: 120%;
    }
  }
}
</style>
