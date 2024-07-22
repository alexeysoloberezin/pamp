<template>
  <div class="affiliate-program-intro">
    <div class="generic-container-1260">
      <div>
        <h1 style="font-weight: bold" class="affiliate-program-h2" :class="{'text-left' : br.smAndDown}">Партнерская программа Газпромбанк</h1>
        <h5 class="affiliate-program-intro-text">
          Присоединяйтесь к партнёрской программе Газпромбанка и получайте агентскую комиссию до 16 000 ₽ за выданные кредитные и дебетовые карты, кредит наличными, РКО
        </h5>
        <zond-btn v-text="'Зарегистрироваться'"/>
      </div>
      <div>
        <img :src="img" alt="affiliate-intro" style="width: 100%">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Inject, Vue} from "vue-property-decorator"

@Component({})
export default class Intro extends Vue {
  img = require('images/gazprom/intro.png')
  get br(){
    return this.$vuetify.breakpoint;
  }
}
</script>

<style lang="scss" scoped>
.affiliate-program-intro {
  padding: 25px 0;
  .generic-container-1260 {
    display: grid;
    grid-template-columns: minmax(400px,504px) minmax(300px,515px);
    grid-gap: 40px;
    align-items: center;
  }
  &-text {
    margin: 39px 0;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
  }

  @media (max-width: $w-sm){
    padding: 20px 0 0;

    .generic-container-1260 {
      grid-template-columns: minmax(auto,700px);
    }
    .affiliate-program-h2 {
      font-size: 23px;
      line-height: 30px;
    }
    &-text {
      margin: 8px 0 15px;
      font-size: 16px;
      line-height: 23px;
    }
  }

}
</style>
