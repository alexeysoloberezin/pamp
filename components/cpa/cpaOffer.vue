<template>
  <div class="cpa-offer">
    <h2 class="cpa-h2 mx-auto">Получи<br>
      <b class="text-color1">
        <b class="pl-3">Эксклюзивные</b>
        ставки
      </b>
    </h2>
    <div class="cpa-offer-wrp">
      <div class="cpa-offer-mobItem">
        <img :src="require('@/assets/images/cpa/formImg/bgItem3.webp')" alt="">
      </div>
      <div class="cpa-offer-img mx-auto">
        <img :src="require('@/assets/images/cpa/pampaden.webp')" alt="">
      </div>
      <div class="cpa-offer-list">
        <div class="cpa-offer-item active">
          <span class="text-color2">Эксклюзивные<br/>
          ставки<br/></span>
          до конца года
        </div>
        <div class="cpa-offer-item">
          <div class="text-color1">Сокращаем холд</div>
          для веб-мастеров
        </div>
        <div class="cpa-offer-item">
          Личный <span class="text-color1">affiliate-<br/>менеджер</span>
        </div>
        <div class="cpa-offer-item">
          <div class="text-color1">Моментальные</div>
          выплаты
        </div>
      </div>

      <div class="cpa-offer-timer">
        <a href="#" @click.prevent="scrollToSection('cpaForm')" class="cpa-btn cpa-btn-fill">Зарегистрироваться</a>
        <TimerCpa/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Timer from "components/univerese-gift/Timer.vue";
import TimerCpa from "~/components/cpa/TimerCpa";
import {Component, Vue} from "vue-property-decorator";
import {scrollToSectionHandler} from "~/model/entities/webtools/cpa/cpaMenu";


@Component({
  components: {TimerCpa, Timer},
})

export default class CpaOffer extends Vue {
  scrollToSection(sectionId) {
    scrollToSectionHandler(sectionId)
  }
}
</script>

<style lang="scss">
.cpa-offer {
  margin-top: -66px;

  &-list {
    position: absolute;
    top: 0;
    align-items: flex-start;
    z-index: 2;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 1280px;
    @media (min-width: 901px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-row-gap: 82px;
      top: 67px;
    }
  }
  @media (max-width: 900px) {
      .cpa-offer-mobItem{
        position: absolute;
        bottom: -19px;
        right: 0;
        transform: scale(0.7) translateX(174px);
        filter: blur(7px);
      }
  }
  @media (min-width: 901px) {
    .cpa-offer-mobItem {
      display: none;
    }
  }

  &-item {
    border-radius: 72px;
    background: rgba(26, 26, 50, 0.28);
    background: color(display-p3 0.102 0.102 0.1882 / 0.28);
    backdrop-filter: blur(24px);
    line-height: 1.23;
    padding: 36px 78px;
    font-family: 'EuropeExt', sans-serif;
    width: fit-content;
    font-size: 20px;
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
    @media (max-width: 1200px) {
      padding: 12px 20px;
      font-size: 16px;
    }
    @media (max-width: 900px) {
      width: calc(100% - 40px);
      margin: 0 0 5px 20px;
      &:nth-child(2) {
        margin-bottom: 240px;
      }
    }

    &.active {
      border: 1px solid #F07;
      border: 1px solid color(display-p3 0.9569 0.1137 0.4667);
      background: rgba(26, 26, 50, 0.28);
      background: color(display-p3 0.102 0.102 0.1882 / 0.28);
      backdrop-filter: blur(24px);
      font-size: 24px;
      padding: 28px 67px 20px;
      @media (max-width: 1200px) {
        font-size: 16px;
        padding: 12px 20px;
      }
    }

    @media (min-width: 901px) {
      &:nth-child(2) {
        margin-left: auto;
        margin-right: 110px;
      }

      &:nth-child(3) {
        margin-left: 123px;
      }

      &:nth-child(4) {
        margin-left: auto;
        margin-right: 34px;
      }
    }

  }

  &-wrp {
    position: relative;
    margin-top: 20px;
    @media (max-width: 1000px) {
      height: 670px;
    }
  }

  &-img {
    width: fit-content;
    @media (max-width: 900px) {
      height: 225px;
      padding-top: 145px;
      width: 280px;
      img {
        max-width: 100%;
      }
    }
  }

  &-timer {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 420px;
    background: #2D1B48;
    border-radius: 40px 40px 0 0;
    padding: 15px 30px;
    @media (max-width: 900px) {
      width: calc(100% - 30px);
      .cpa-btn {
        width: 100%;
      }
    }

  }
}
</style>
