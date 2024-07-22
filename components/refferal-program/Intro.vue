<template>

  <div>
    <ScrollAnchor id="ai" />

    <div class="ref-intro">
      <v-img :src="require('images/referalnaya-programma/Polygon.svg')" class="ref-intro-bgitem" alt=""></v-img>
      <div class="generic-container-1260 ref-intro-wrp">
        <div class="ref-intro-info">
          <h1>В среднем <span style="color: #7245FF">1 участник</span> реферальной программы зарабатывает</h1>

          <PricePer class="mb-md-8 mb-5"/>
          <zond-btn
            v-text="'Присоединиться'"
            :style="{ width: $vuetify.breakpoint.xs ? '100%' : '217px' }"
          />
        </div>
        <div class="ref-intro-img">
          <v-img :src="require('images/referalnaya-programma/refIntro.webp')" alt="refferal-program"></v-img>
        </div>
      </div>
    </div>
    <div class="ref-statistics-box">
      <div class="ref-statistics mx-auto">
        <div
          v-for="(item, index) in statistics"
          class="ref-statistics-item"
          :key="index"
        >
          <v-img class="promo-statistic-icon" :src="item.icon"/>
          <p v-html="item.title" class="mb-0 promo-statistic-text"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import PricePer from "~/components/refferal-program/PricePer.vue";
import ScrollAnchor from "~/components/common/ScrollAnchor.vue";

@Component({
  components: {ScrollAnchor, PricePer}
})
export default class IntroRef extends Vue {
  statistics = [
    {
      title: `возможность заработка по разным направлениям: <span style="color: #9065FD">страховое, финансовое, HR</span>`,
      icon: require('images/referalnaya-programma/refIcon1.svg')
    },
    {
      title: `начисление на баланс бонусов <span style="color: #9065FD">в&nbsp;день продажи реферала</span>`,
      icon: require('images/referalnaya-programma/refIcon2.svg')
    },
    {
      title: `постоянный <span style="color: #9065FD">пассивный доход</span>`,
      icon: require('images/referalnaya-programma/refIcon3.svg')
    },
  ];
}
</script>

<style lang="scss">
.ref-statistics {
  padding: 23px 36px;
  display: grid;
  grid-template-columns: 1.9fr 1.4fr 1fr;
  width: 100%;
  max-width: 1162px;
  border-radius: 64px;
  background: #FFF;
  transform: translateY(-50%);
  gap: 53px;
  box-shadow: 0px 5px 31px 0px rgba(114, 78, 251, 0.18);
  @media (max-width: 1200px) {
    width: 100%;
    max-width: calc(100% - 30px);
    gap: 20px;
    padding: 25px 30px;
    border-radius: 30px;
  }
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  &-box {
    background: #F9F9FC;
    @media (max-width: 1000px) {
      margin-top: 60px;
      margin-bottom: -40px;
    }
  }

  &-item {
    display: flex;
    align-items: center;
    border-right: 1px dashed rgba(0, 0, 0, 0.2);
    padding-right: 40px;
    padding-top: 12px;
    padding-bottom: 12px;

    gap: 15px;

    @media (max-width: 1400px) {
        gap: 0;
      padding-right: 20px;
    }
    @media (max-width: 1000px) {
      border-bottom: 1px dashed rgba(0, 0, 0, 0.2);
      border-right: none;
      padding-bottom: 10px;
      padding-top: 0 ;
      padding-right: 0;
      gap: 5px;
    }
    &:last-child {
      border: none;
    }
  }

  .promo-statistic-icon {
    max-width: 25px;
  }
}

.ref-intro {
  position: relative;
  overflow: hidden;
  background: linear-gradient(1deg, rgba(161, 182, 255, 0.20) -3.61%, rgba(246, 248, 255, 0.11) 99.3%), #F6F8FF;

  .generic-container-1260 {
    position: relative;
  }

  &-wrp {
    width: 100%;
    display: flex;
    min-height: 527px;
    align-items: center;
    @media (max-width: 1000px) {
      flex-direction: column;
      align-items: start;
    }
  }

  &-info {
    position: relative;
    z-index: 2;
    padding-bottom: 30px;
  }

  h1 {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 22px;
    line-height: 1.2;
    max-width: 574px;
    @media (max-width: 1000px) {
      font-size: 28px;
      margin-top: 25px;
      margin-bottom: 15px;
    }
  }

  &-bgitem {
    position: absolute;
    top: 40%;
    filter: blur(10px);
    transform: translateY(-50%);
    left: 0;
  }

  &-img {
    max-width: calc(100vw - 50px);
    @media (max-width: 1000px) {
      margin-top: -30px;
    }
    @media (min-width: 1000px) {
      position: absolute;
      top: 46%;
      right: -65px;
      transform: translateY(-50%);
      @media (max-width: 1200px) {
        right: -140px;
        transform: translateY(-50%) scale(0.8);
      }
    }
  }
}
</style>
