<template>
  <div class="generic-container-1260">
    <div class="banks-slider">
      <h2 class="banks-title">Партнерские программы банков</h2>
      <div class="mt-8" style="position: relative">
        <div class="arrow arrow-disabled arrow-prev">
          <img :src="arrowLeft" alt="arrow-left"/>
        </div>
        <div class="banks-wrapper">
          <div v-for="item in banks" class="banks-item" :style="{cursor: item.link ? 'pointer' : ''}" @click="goToBank(item.link)">
            <img :src="item.img" alt="bank" style="width: 100%;height: 100%"/>
          </div>
        </div>
        <div class="arrow arrow-disabled arrow-next">
          <img :src="arrowRight" alt="arrow-right"/>
        </div>
      </div>
      <div style="margin-top: 35px;display: flex;justify-content: center">
        <nuxt-link :to="{name: 'bank-agent'}" class="banks-conditions-link" style="color: #7A49D2 !important;">Подробнее
          об условиях для банковских агентов
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"

@Component
export default class Banks extends Vue {
  banks = [
    {link: 'gazprombank', img: require(`@/assets/images/common/slider/banks/gazprom.jpg`)},
    {img: require(`@/assets/images/common/slider/banks/open.jpg`)},
    {link: 'affiliate-program/rosbank', img: require(`@/assets/images/common/slider/banks/ros.jpg`)},
    {link: 'affiliate-program/vtb', img: require(`@/assets/images/common/slider/banks/vtb.jpg`)},
  ]

  arrowLeft = require('images/finance/arrow-left.svg');
  arrowRight = require('images/finance/arrow-right.svg');


  goToBank(link){
    if (!link) return;
    this.$router.push(link);
  }
}
</script>

<style lang="scss">
.banks-slider {
  padding: 40px 0;
  .banks-title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 35px;
    line-height: 43px;
    text-align: center;
    @media (max-width: $w-sm){
      font-size: 19px;
      line-height: 23px;
    }
  }
  .banks-wrapper {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 20px;
    margin-top: 30px;
    @media (max-width: $w-sm){
      grid-template-columns: repeat(2,1fr);
      grid-gap: 10px;
    }
  }
  .banks-item {
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.25));
  }
  .arrow {
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    transition: 0.3s;
    @media (max-width: $w-md) {
      display: none;
    }

    &-prev {
      left: -30px;
    }

    &-next {
      right: -30px;
    }

    &-disabled {
      pointer-events: none;
    }

    &:hover {
      color: #954bef;
    }
  }
  .banks-conditions-link {
    font-family: 'Montserrat', sans-serif;
    font-style: italic;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    border-bottom: 1px dashed #7A49D2;
    @media (max-width: $w-sm){
      font-size: 16px;
      line-height: 20px;
      border-bottom: unset;
      text-align: center;
      text-decoration: underline;
    }
  }
}


</style>
