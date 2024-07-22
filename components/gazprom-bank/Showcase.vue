<template>
  <div style="background-color: #F2F5FF">
    <div class="generic-container-1260">
      <div class="affiliate-program-showcase">
        <h2 class="affiliate-program-h2" v-html="'Для вас — удобный личный кабинет'"/>
        <h3 class="affiliate-program-showcase-subtitle" v-html="'Витрина финансовых продуктов'"/>
        <p class="affiliate-program-showcase-text" v-html="'Удобный подбор партнерских программ банков'"/>
        <div class="affiliate-program-showcase-img">
          <img :src="img" style="max-width: 100%;" alt="showcase">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({})
export default class Showcase extends Vue {
  img = require('images/gazprom/showcase.jpg')
}
</script>

<style lang="scss">
.affiliate-program-showcase {
  padding: 63px 0 90px;
  &-subtitle {
    margin-top: 35px;

    font-family: 'Montserrat',sans-serif;
    font-weight: 600;
    font-size: 26px;
    line-height: 140%;
  }
  &-text {
    margin-top: 9px;

    font-family: 'Roboto',sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 105%;
  }
  &-img {
    margin-top: 30px;
    position: relative;
    &:after {
        position: absolute;
        content: url("images/gazprom/decor.svg");
        right: -100px;
        bottom: -60px;
    }

  }

  @media (max-width: $w-sm){
    padding: 25px 0;
    &-subtitle {
      margin-top: 15px;
      font-size: 18px;
      line-height: 140%;
    }
  }
}
</style>
