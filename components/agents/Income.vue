<template>
  <div class="agents-income">
    <div class="agents-container">
      <div class="income-content">
        <div class="income-img">

          <img v-if="false" :src="bg" style="width: 100%;max-width: 100%;display: block" >
          <v-img
            v-else
            :src="bg"
            width="705"
            height="562"
            contain
            alt="income"
            max-width="100%"
          >

          </v-img>
        </div>
        <div class="income-text">
          <h2 class="income-title">Зарабатывайте даже если&nbsp;нет опыта</h2>
          <h3 class="mt-5 income-description">Наша платформа позволяет успешно зарабатывать как начинающим, которые делают первые шаги в онлайн работе, так и крупным компаниям и партнёрам. Проходите обучение и читайте статьи, смотрите видео, а личный куратор и онлайн чат поддержки помогут и подскажут в любой ситуации. </h3>
          <zond-btn v-text="'Давайте попробуем!'" class="mt-8"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"

@Component({})
export default class Income extends Vue {
  get bg(){
    return this.$vuetify.breakpoint.smAndDown ? require('@/assets/images/agents/income/bg-sm.webp') : require('@/assets/images/agents/income/bg.webp');
  }
}
</script>

<style lang="scss">
.agents-income {
  padding: 10px 0 0;
  background: #F9F9FC;
  position: relative;
  image-rendering: -webkit-optimize-contrast;
  @media (max-width: $w-md){
    padding: 10px 0 30px;
  }
  &:before {
      position: absolute;
      content: url("@/assets/images/agents/income/decor.svg");
      right: 150px;
      top: 20%;
  }
  .income-title {
    font-family: Montserrat, sans-serif;
    font-weight: bold;
    font-size: 35px;
    line-height: 40px;
    @media (max-width: $w-md){
      font-size: 19px;
      line-height: 23px;
    }
  }

  .income-description {
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    @media (max-width: $w-md){
      font-size: 14px;
      line-height: 21px;
    }
  }

  .income-content {
    display: flex;
    align-items: center;
    @media (max-width: $w-md){
      flex-direction: column;
    }
  }
  .income-img {
    flex: 1 1 682px;
    transform: translate(-120px,30px);
    @media (max-width: $w-md){
      transform: unset;
      flex: 0 1 auto;
      .v-image{
        max-width: 100vw !important;
        height: auto !important;
      }
    }
  }
  .income-text {
    flex: 0 1 505px;
    @media (max-width: $w-md){
      flex: 0 1 auto;
    }
  }
}
</style>
