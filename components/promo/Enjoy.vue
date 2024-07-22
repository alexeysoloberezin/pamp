<template>
  <div class="promo-enjoy">
    <div class="enjoy-bg">
      <div class="promo-container">
        <div class="text-wrapper">
          <h2 class="enjoy-title">
            Продавай полисы ипотеки на Пампаду и зарабатывай
            <span style="color: #ab54ff">от 55.000 рублей в месяц!</span>
          </h2>
          <h3 class="mt-5 enjoy-description" style="max-width: 536px">
            Не откладывайте на завтра, начните уже сегодня получать дополнительный доход с нашей помощью.
            Присоединяйтесь и мы расскажем подробнее!
          </h3>
          <zond-btn
            v-text="'Зарегистрироваться'"
            class="mt-8"
            style="min-width: 213px"
          />
        </div>
      </div>
      <v-img
        :src="bg"
        v-if="$vuetify.breakpoint.smAndDown"
        class="mt-5"
        style="max-width: 100%; margin: 0 auto"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Enjoy extends Vue {
  bg = require("@/assets/images/promo/enjoy/bg-sm.jpg");
}
</script>

<style lang="scss">
.promo-enjoy {
  .enjoy-bg {
    padding: 100px 0;
    background-image: url("@/assets/images/promo/enjoy/bg.jpg");
    background-size: cover;
    background-position: center;
    @media (max-width: $w-sm) {
      background: #FFFFFF;
      padding: 26px 0 0;
    }
  }

  .enjoy-title {
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    font-size: 35px;
    line-height: 42px;
    @media (max-width: $w-md) {
      font-size: 19px;
      line-height: 23px;
    }
  }

  .enjoy-description {
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    @media (max-width: $w-md) {
      font-size: 14px;
      line-height: 20px;
    }
  }
  .text-wrapper {
    max-width: 660px;
    @media (max-width: $w-md) {
      max-width: 375px;
    }
  }
}
</style>

