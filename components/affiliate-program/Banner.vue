<template>
  <section class="affiliate-program-banner">
    <div class="generic-container-1260">
      <v-img class="banner-pimp" max-width="193" max-height="193" :src="require('images/creditCards/banner/pimp.webp')"/>
      <div>
        <h2 class="affiliate-program-banner-title" v-html="title"/>
        <div class="banner-btn">
          <zond-btn class="inverted" v-text="'Зарегистрироваться'"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator"

@Component({})
export default class Banner extends Vue {
  @Prop() bank: string;
  @Prop() hideName: boolean;
  @Prop() mfoOffers: boolean;

  get title(){
    return  this.bank === 'Banks' || this.hideName ?
      'Зарегистрируйтесь, чтобы получить доступ к полному списку офферов банков' :
      `Зарегистрируйтесь, чтобы получить доступ к полному списку офферов банка <br/> «${this.bank}»` || this.mfoOffers ? 'Зарегистрируйтесь, чтобы получить доступ к полному списку офферов МФО' : ''
  }
}
</script>

<style lang="scss">
.affiliate-program-banner {
  padding: 40px 0 40px;
  background: #8E68FF;
  @media (max-width: $w-md){
    padding: 17px 0 25px;
  }
  .generic-container-1260 {
    display: flex;
    @media (min-width: $w-sm) {
      align-items: center;
    }
    @media (max-width: $w-sm){
      flex-direction: column;
    }
  }
  .affiliate-program-banner-title {
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
