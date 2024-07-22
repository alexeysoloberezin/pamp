<template>
  <div class="cpa-banner">
    <div class="cpa-banner-info">
      <h1 class="cpa-h1">Начни Лить
        <span class="text-color1">трафик в плюс</span>
        вместе с Пампаду
      </h1>
      <p class="cpa-banner-text">Выиграй MacBook, Iphone и другие ценные призы</p>
      <a href="#" @click.prevent="scrollToSection('cpaForm')" class="cpa-btn cpa-btn-fill">Зарегистрироваться</a>
    </div>

    <div class="cpa-banner-img1"><img :src="require('@/assets/images/cpa/img1.webp')" alt=""></div>
    <div class="cpa-banner-img2"><img :src="require('@/assets/images/cpa/img2.webp')" alt=""></div>
    <div class="cpa-banner-img3"><img :src="require('@/assets/images/cpa/img3.webp')" alt=""></div>
    <div class="cpa-banner-img4"><img :src="require('@/assets/images/cpa/img4.webp')" alt=""></div>

    <div class="cpa-banner-img6"><img :src="require('@/assets/images/cpa/mobItems.webp')" alt=""></div>
    <div class="cpa-banner-img7"><img :src="require('@/assets/images/cpa/mobItemsL.webp')" alt=""></div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import {scrollToSectionHandler} from "~/model/entities/webtools/cpa/cpaMenu";


@Component
export default class Banner extends Vue {
  @Prop({required: true}) isDesktop: boolean;

  scrollToSection(sectionId) {
    scrollToSectionHandler(sectionId)
  }
}
</script>

<style lang="scss">
.cpa-banner {
  position: relative;

  @media (min-width: 901px) {
    min-height: 800px;
  }
  @media (max-width: 900px) {
    padding: 0 0 70px 0;
  }

  &-info {
    position: relative;
    z-index: 10;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 162px 0;
    height: 100%;
    @media (max-width: 1200px) {
      padding: 90px 0;
    }
    @media (max-width: 900px) {
      padding: 80px 0;
    }
  }

  &-text {
    text-align: center;
    font-size: 32px;
    font-weight: 300;
    max-width: 400px;
    margin: 45px auto 62px;
    @media (max-width: 1200px) {
      margin: 25px auto 35px;
      font-size: 24px;
    }
    @media (max-width: 900px) {
      font-size: 16px;
      margin: 14px auto 28px;
      max-width: 195px;
    }
  }
  @media (max-width: 900px) {
    &-img1, &-img2, &-img3, &-img4 {
      display: none;
    }
  }
  @media (min-width: 901px) {
    &-img6,
    &-img7 {
      display: none;
    }
    &-img1, &-img2, &-img3, &-img4 {
      left: 50%;
      transform: translateX(-50%);
    }
  }
  &-img1, &-img2, &-img3, &-img4, &-img5, &-img6, &-img7 {
    position: absolute;
    pointer-events: none;
    @media (max-width: 1300px) {
      @media (min-width: 901px) {
        transform: scale(0.7);
      }
    }
  }



  &-img7 {
    left: 0;
    top: 85px;
  }

  &-img6 {
    right: 0;
    top: 0;
  }

  &-img5 {
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: 325px;
    transform: translateX(-50%);
  }

  &-img1 {
    bottom: 83px;
    z-index: 3;
    margin-left: -430px;
    transform-origin: left;
    @media (max-width: 1300px) {
      bottom: 110px;
      margin-left: -474px;
    }
  }

  &-img2 {
    transform-origin: right;
    top: -75px;
    margin-left: 450px;
    @media (max-width: 1300px) {
      top: -75px;
      margin-left: 150px;
    }
  }

  &-img3 {
    transform-origin: left;
    z-index: 2;
    top: -92px;
    margin-left: -520px;
    @media (max-width: 1300px) {
      margin-left: -679px;
    }
  }

  &-img4 {
    transform-origin: right;
    bottom: -55px;
    margin-left: 483px;
    @media (max-width: 1300px) {
      bottom: -37px;
      margin-left: -101px;
    }
  }
}
</style>
