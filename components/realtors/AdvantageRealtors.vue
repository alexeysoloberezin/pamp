<template>
  <section class="generic-container-1260">
    <div class="advantage-realtors">
      <div class="advantage-realtors-content">
        <h2 class="advantage-realtors-title">Выгодно и вам, и клиенту</h2>
        <div class="advantage-realtors-description">
          <strong>97%</strong>
          ипотечных заёмщиков покупают страховку в банке и <strong>переплачивают до 50% стоимости полиса.</strong>
        </div>
        <div class="advantage-realtors-description">
          <strong>Клиент покупает полис дешевле, а вы зарабатываете до 60% от его стоимости,</strong>
          которые вам платит страховая компания за привлечённого клиента.
        </div>
        <p class="advantage-realtors-description">
          Таким образом, создаётся ситуация <br/>Выигрыш — Выигрыш.
        </p>
      </div>
      <div class="advantage-realtors-img">
        <img style="max-width: 100%" :src="img" alt="conditions">
      </div>

    </div>
    <div>
    </div>
  </section>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"

@Component({})
export default class AdvantageRealtors extends Vue {
  get br() {
    return this.$vuetify.breakpoint;
  }

  get img() {
    return this.br.mdAndUp ? require('images/ipoteka/conditions/bg.png') : require('images/ipoteka/conditions/bg-sm.png');
  }
}
</script>

<style lang="scss">
.advantage-realtors {
  padding: 68px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: $w-sm) {
    padding: 25px 0;
    flex-direction: column;
  }

  &-content {
    flex: 0 1 480px;
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
    flex: 0 1 611px;
    position: relative;
    @media (max-width: $w-sm) {
      flex: auto;
    }
  }
}
</style>
