<template>
  <section class="generic-container-1260">
    <div class="passive-income">
      <div class="passive-income-img">
        <img style="max-width: 100%" :src="img" alt="conditions">
      </div>
      <div class="passive-income-content">
        <h2 class="passive-income-title">Пассивный заработок риэлтора</h2>
        <div class="passive-income-description">
          Купив полис дешевле, клиент захочет экономить на страховке каждый год. Это значит, что он будет возвращаться к вам на постоянной основе в течение всего периода ипотечного займа. 5-10-20-30 лет.
        </div>
        <p class="passive-income-description">
          <strong>Сформируйте клиентскую базу и обеспечьте себе пассивный денежный поток.</strong>
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"

@Component({})
export default class PassiveIncome extends Vue {
  get br() {
    return this.$vuetify.breakpoint;
  }

  get img() {
    return  require('images/realtors/advantage/PassiveIncome.webp');
  }
}
</script>

<style lang="scss">
.passive-income {
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: $w-sm) {
    flex-direction: column-reverse;
  }

  &-content {
    flex: 0 1 580px;
    margin-right: 15px;
    position: relative;
    @media (max-width: $w-sm) {
      flex: auto;
    }
  }

  &-title {
    @include title;
    max-width: 440px;
    @media (max-width: $w-sm) {
      max-width: 240px;
    }
  }

  &-description {
    font-family: 'Roboto', sans-serif;
    margin-top: 27px;
    font-weight: 400;
    font-size: 22px;
    line-height: 34px;
    @media (max-width: $w-sm) {
      margin-top: 12px;
      font-size: 17px;
      line-height: 24px;
    }
  }

  &-img {
    flex: 0 1 452px;
    position: relative;
    @media (max-width: $w-sm) {
      margin: 20px -10px;
      flex: auto;
    }
  }
}
</style>
