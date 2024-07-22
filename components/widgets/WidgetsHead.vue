<template>
  <section  style="background-color: #F9F9FC" :style="{padding: $vuetify.breakpoint.mdAndUp ? '50px 0' : '29px 0 0 0'}" >
    <div class="widgets-head">
      <v-carousel>
        <v-carousel-item v-for="(slide, i) in slides" :key="i" class="widgets-head-slider__wrapper">
                         <div class="widgets-head-slider" >
                           <div class="widgets__text">
                             <h1
                               class="hr-od-card-text widgets-title"
                               v-html="slide.text"
                             />
                             <h5 class="widgets-subtitle">
                               Установите за 5 минут и зарабатывайте на онлайн-продаже
                               страховок с помощью white-label, баннеров или реферальных ссылок
                             </h5>
                             <div>
                               <zond-btn class="btn widgets-button" v-text="'Попробовать'" />
                             </div>
                             <div class="widgets-head__icons-desktop">
                               <WidgetsHeadIcons />
                             </div>
                           </div>
                             <img class="widgets-slide-image" :src="slide.image" alt="img"/>
                           <div class="widgets-head__icons-mobile">
                             <WidgetsHeadIcons />
                           </div>
                         </div>
        </v-carousel-item>
      </v-carousel>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import WidgetsHeadIcons from "./WidgetsHeadIcons.vue";

@Component({ components: { WidgetsHeadIcons } })
export default class  extends Vue {
  slides = [
    {
      image: require("@/assets/images/webtools/widgetsHead/calcOsago.webp"),
      text: `Инструменты для монетизации сайта, приложения или социальной сети на продаже <span style='color: #9065FD'>страховых продуктов</span>`,
    },
    {
      image: require("@/assets/images/webtools/widgetsHead/best11.png"),
      text: `Инструменты, чтобы зарабатывать через сайт, приложение или социальную сеть на продаже <span style='color: #9065FD'>банковских продуктов</span>`,
    },
  ];

}
</script>
<style lang="scss">
.widgets-head {
  max-width: 1400px;
  margin: auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  position: relative;
  .widgets-button{
    padding: 10px 40px;
    margin: 40px 0;
    @media (max-width: $w-sm) {
      margin: 20px 0;
    }
  }
  .enum-block {
    display: inline-flex;
    align-items: center;
    border: 1px solid #dbdbdb;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 10px 30px;
    justify-content: space-between;
    @media (max-width: $w-sm) {
      flex-direction: column;
      display: flex;
      max-width: 300px;
      padding: 10px;
      margin: 20px;
    }
    @media (max-width: $w-xs) {
      margin-bottom: 25px;
      max-width: 100%;
      justify-content: space-around;
    }
  }
  .enum-title {
    transition: 0.1s color;
    margin-left: 10px;
    @media (max-width: $w-md) {
      margin-left: 5px;
    }
  }
  .enum-title-outer {
    @media (max-width: $w-sm) {
      margin-top: 25px;
    }
  }
  .enum-title,
  .enum-title-outer,
  .enum-title-inner {
    font-family: Roboto,sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: #7f7f7f;
    max-width: 116px;
    @media (max-width: $w-md){
      max-width: unset;
    }
  }
  .enum-title-inner {
    margin-right: 15px;
  }
  .enum-title-outer,
  .enum-img path {
    transition: 0.1s fill;
  }
  .enum-card {
    display: flex;
    flex-flow: row;
    align-items: center;
    margin-right: 10px;
    justify-content: space-between;
    >svg{
      @media (max-width: $w-md) {
        width: 16px !important;
      }
    }
    @media (max-width: $w-md) {
      margin: 5px;
    }

    &:hover {
      .enum-title {
        color: #7231e6;
      }
      .enum-img path {
        fill: #7231e6;
      }
    }
  }
  &-inner {
    position: relative;
    z-index: 1;
    padding: 20px 0;
    margin-left: 100px;
    width: 43%;
    @media (max-width: $w-sm) {
      width: auto;
      margin: 0 25px;
    }
  }
  &__icons-desktop{
    display: block;
    @media (max-width: $w-sm) {
      display: none;
    }
  }
  &__icons-mobile{
    display: none;
    @media (max-width: $w-sm) {
      display: block;
      margin-top: 40px;
    }
  }
  .v-responsive__content{
    display: flex;
    justify-content: center;
    height: 100%;
    @media (max-width: $w-md) {
      display: block;
    }
  }
  .widgets-offers-slider .v-carousel__item{
    max-height: 700px !important;
    height: 100% !important;
  }
  .v-carousel__controls{
    background: unset;
  }
  .v-window.v-carousel{
    height: 614px !important;
    @media (max-width: $w-sm) {
      height: 700px !important;
    }
  }
  .widgets-head-slider__wrapper>div{
    height: 614px !important;
    @media (max-width: $w-sm) {
      height: 700px !important;
    }
  }
  .v-carousel__controls__item {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    color: #FFFFFF;
  }
  .v-btn--active{
    color: #AB54FF !important;
  }
  .v-carousel__controls__item .v-icon{
    opacity: unset;
  }
  .v-window__next, .v-window__prev{
    background: #FFFFFF;
    border: 1px solid #F4EBFF;
    box-shadow: 0 2px 15px rgba(149, 75, 239, 0.257649);
    .v-btn__content{
      color: #954BEF;
    }
    @media (max-width: $w-sm) {
      margin-top: 325px;
      z-index: 2;
    }
  }
  .v-btn--ico {
    font-size: 33px;
  }
  .mdi-chevron-right::before {
    content: url('~assets/images/widgets/arrowRigth.svg');
    font: unset;
    width: 8px;
    height: 39px;
  }
  .mdi-chevron-left::before {
    transform: rotate(180deg);
    content: url('~assets/images/widgets/arrowRigth.svg');
    font: unset;
    width: 8px;
    height: 39px;
  }
  .v-carousel__item{
    height: 100%;
  }
  .od-carousel-btn-container {
    position: absolute;
    top: 35%;
    width: 109%;
    justify-content: space-between;
    left: -55px;
    @media (max-width: $w-sm) {
      top: 73%;
      width: 100%;
      left: 0;
    }
  }
  .widgets__text{
    padding-left: 80px;
    @media (max-width: $w-md) {
      padding-left: 0;
    }
  }

  .v-carousel__controls{
    background: unset;
    .v-item-group{
      >button{
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: #FFFFFF;
        border: 1px solid #ADB8DA;
      }
      .v-btn--active{
        background: #AB54FF;
      }
    }
  }
  .widgets-head-slider{
    display: flex;
    @media (max-width: $w-md) {
      display: block;
    }
  }
  .widgets-slide__text{
    max-width: 491px;
    width: 100%;
    margin-right: 40px;
    @media (max-width: $w-sm) {
      margin-right: 0;
    }
  }
  .widgets-slide-image{
    max-width: 773px;
    width: 100%;
    @media (max-width: $w-md) {
      max-width: 300px;
      width: 100%;
      display: flex;
      margin: auto;
    }
  }
  .widgets-title {
    font-family: Montserrat, sans-serif;
    font-weight: bold;
    font-size: 35px;
    line-height: 45px;
    @media (max-width: $w-md) {
      font-size: 25px;
      line-height: 30px;
    }
  }
  .widgets-subtitle {
    margin-top: 20px;
    font-size: 20px;
    line-height: 28px;
    @media (max-width: $w-md) {
      font-size: 16px;
      line-height: 23px;
      margin-top: 10px;
    }
  }
}
</style>
