<template>
  <section class="widgets-offers-slider-wrapper">
    <div class="widgets-offers-slider">
      <v-carousel>
            <v-carousel-item
              v-for="(slide, i) in slides"
              :key="i"
            >
              <div>
                <img class="widgets-offers-slide-image" :src="slide.image" alt="img"/>
                <div>
                  <h1
                    class="widgets-offers-title"
                    v-text="`${slide.title}`"
                  />
                  <h5
                    class="widgets-offers-description"
                    v-text="`${slide.description}`"
                  />
                </div>
              </div>
            </v-carousel-item >
      </v-carousel>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import WidgetsHeadIcons from "./WidgetsHeadIcons.vue";
@Component({ components: { WidgetsHeadIcons } })
export default class WidgetsOffersSlider extends Vue {
  slides = [
    {
      image: require("@/assets/images/webtools/widgetsHead/slide1.webp"),
      title: 'Банковские офферы',
      description: `Создавайте витрины или виджеты с любыми банковскими продуктами, которые легко устанавливаются на ваш сайт или в приложение и отслеживайте статистику продаж онлайн в личном кабинете`,
    },
    {
      image: require("@/assets/images/webtools/widgetsHead/slide22.png"),
      title: "Партнерская программа ОСАГО",
      description: `Виджет покупки обязательного полиса ОСАГО от 16 компаний. Настраивайте внешний вид под любой сайт или приложение и получайте 10-25% от стоимости купленного полиса. Автозаполнение данных, сохранение расчетов, догоняющие письма и многое другое.`,
    },
    {
      image: require("@/assets/images/webtools/widgetsHead/slide3.webp"),
      title: "Партнерская программа ипотечного страхования",
      description: `Виджет ипотечного страхования, который позволит клиенту онлайн купить полис дешевле чем в банке, сравнив предложения от 10 компания, а вам получить до 60% от его стоимости. Точный предварительный расчет и гибко настраиваемый внешний вид.`,
    },
  ];
}
</script>
<style lang="scss">
.widgets-offers-slider{
  max-width: 1400px;
  margin: auto;
  align-items: center;
  min-height: 400px;
  position: relative;
  padding: 0 30px;
  .v-window__container{
    height: 690px !important;
    @media (max-width: $w-sm) {
      max-height: 430px !important;
    }
  }
  &-wrapper{
    background-color: #F9F9FC;
    padding: 20px 0;
  }
  .v-responsive__content{
    display: flex;
    justify-content: center;
  }
  .v-window.v-item-group.v-carousel{
    max-height: 700px !important;
    height: 100% !important;
    @media (max-width: $w-sm) {
      max-height: 430px !important;
    }
  }
  .v-carousel__item{
    max-height: 700px !important;
    height: 100% !important;
    @media (max-width: $w-sm) {
      max-height: 430px !important;
    }
  }
  .v-carousel__controls{
    background: unset;
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
    @media (max-width: $w-sm) {
      margin-top: 190px;
      z-index: 2;
    }
  }
  .v-carousel__controls__item {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    color: #FFFFFF;
    border: 0.5px solid #ADB8DA;
  }
  .v-btn--active{
    color: #AB54FF !important;
  }
  .v-carousel__controls__item .v-icon{
    opacity: unset;
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
}
.widgets-offers-title {
  @include title;
  text-align: center;
  margin-top: 26px;
  @media (max-width: $w-sm){
    margin-top: 17px;
  }
}
.widgets-offers-description{
  @include description;
  text-align: center;
  max-width: 779px;
  width: 100%;
  margin: 13px auto;
  @media (max-width: $w-sm){
    margin: 7px auto;
  }
}
.widgets-offers-slide-image{
  max-width: 1035px;
  width: 100%;
  max-height: 410px;
  height: 100%;
  @media (max-width: $w-sm) {
    max-height: 160px;
  }
}
</style>
