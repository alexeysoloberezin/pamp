<template>
  <div class="credit-cards-intro">
    <div class="credit-cards-container">
      <div>
        <h1 style="font-weight: bold" class="h2 intro-heading" :class="{'text-left' : br.smAndDown}">
          <span style="color: #6A2BE3">Кредитные карты:</span>
           партнерские программы и офферы
        </h1>
        <h5 class="my-8 intro-description" v-html="description"/>
        <zond-btn v-text="'Зарегистрироваться'"/>
      </div>
      <v-img class="credit-cards-intro-bg" alt="credit-card-bg" :src="bg" style="width: 100%"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component
export default class Intro extends Vue {

  bg = require('images/creditCards/intro/bg.png');
  description = 'Мы подобрали для вас самые выгодные офферы по кредитным картам от проверенных банков. Зарегистрируйтесь и получите доступ к витрине всех финансовых офферов';

  get br(){
    return this.$vuetify.breakpoint
  }

}
</script>

<style lang="scss">
.credit-cards-intro {
  padding: 10px 0;
  background: linear-gradient(268.37deg, #F3F3F8 6.73%, rgba(249, 249, 252, 0.4) 98.42%);
  @media (max-width: $w-md){
    padding: 40px 0;
  }
  @media (max-width: $w-xs){
    padding: 30px 0 20px;
  }

  .credit-cards-container {
    display: grid;
    grid-template-columns: minmax(400px,570px) minmax(300px,440px);
    grid-gap: 40px;
    align-items: center;
    justify-content: space-between;
    @media (max-width: $w-sm){
      grid-template-columns: 1fr;
    }

    .intro-heading {
      @media (max-width: $w-sm){
        max-width: 400px;
      }
      @media (max-width: $w-xs){
        max-width: 270px;
      }
    }
    .intro-description {
      max-width: 550px;
      font-weight: 400;
      font-size: 20px;
      line-height: 23px;
      @media (max-width: $w-xs){
        margin-top: 12px !important;
        font-size: 16px;
        line-height: 23px;
        max-width: 280px;
      }
    }
  }
}
</style>
