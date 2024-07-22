<template>
  <div class="credit-cards-banner">
    <div class="credit-cards-container">
      <v-img class="banner-pimp" max-width="193" max-height="193" :src="require('images/creditCards/banner/pimp.webp')"/>
      <div>
        <h2 class="credit-banner-title">Зарегистрируйтесь, чтобы получить доступ к полному списку офферов кредитных карт и других финансовых продуктов</h2>

        <div class="banner-btn">
          <zond-btn class="inverted" v-text="'Зарегистрироваться'"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"

@Component({})
export default class Banner extends Vue {
}
</script>

<style lang="scss">
.credit-cards-banner {
  padding: 34px 0 50px;
  background: #8E68FF;
  @media (max-width: $w-md){
    padding: 17px 0 25px;
  }
  .credit-cards-container {
    display: flex;
    @media (max-width: $w-sm){
      flex-direction: column;
    }
  }
  .credit-banner-title {
    font-family: 'Montserrat', sans-serif;
    max-width: 800px;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 38px;
    color: #FFFFFF;
    @media (max-width: $w-md){
      font-size: 24px;
      line-height: 28px;
    }
    @media (max-width: $w-sm){
      text-align: center;
      margin-top: 15px;
      font-size: 20px;
      line-height: 24px;
    }
    @media (max-width: $w-xs){
      text-align: left;
    }
  }
  .banner-pimp {
    margin: 0 85px 0 45px;
    @media (max-width: $w-sm){
      margin: 0 auto;
    }
    @media (max-width: $w-xs){
      width: 88px;
    }
  }
  .banner-btn {
    margin-top: 29px;
    color: black !important;
    @media (max-width: $w-md){
      margin-top: 15px;
    }
    @media (max-width: $w-sm){
      text-align: center;
    }
    @media (max-width: $w-xs){
      text-align: unset;
    }
  }
}
</style>
