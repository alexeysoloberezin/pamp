<template>
  <div class="agents-hiw">
    <ScrollAnchor id="ahiw"/>
    <div class="agents-container">
      <h2 v-html="'Как это работает?'" class="hiw-title"/>
      <h3 class="hiw-desc mt-5">
        Мы напрямую подключили компании в личный кабинет Пампаду, чтобы вы могли оформить страховой полис, финансовый продукт или оставить заявку и после успешной продажи или целевого действия получить денежное вознаграждение
      </h3>
      <div :style="{marginTop: $vuetify.breakpoint.lgAndUp ? '-40px' : '10px'}">
        <v-img :contain="$vuetify.breakpoint.smAndDown" :src="bg" style="width: 100%;max-width: 100%;display: block" alt="hiw-bg"/>
      </div>
      <div>
        <div class="steps-title mb-5">
          <span style="font-weight: bold">4 шага</span> до первого заработка
        </div>
        <div class="hiw-steps">
          <div class="hiw-step">
            <div class="step-number">1</div>
            <div class="step-text"><span style="color: #7245FF;cursor: pointer" @click="register">Зарегистрируйтесь</span> и получайте доступ ко всем продуктам и предложениям</div>
          </div>
          <div class="hiw-step">
            <div class="step-number">2</div>
            <div class="step-text">Смотрите обучающие видео, читайте статьи и общайтесь с куратором</div>
          </div>
          <div class="hiw-step">
            <div class="step-number">3</div>
            <div class="step-text">Оформляйте продукты себе, клиентам или привлекайте трафик</div>
          </div>
          <div class="hiw-step">
            <div class="step-number">4</div>
            <div class="step-text">Получаете выплаты за все продажи на карту или счёт юр. лица</div>
          </div>
        </div>
      </div>
    </div>
    <zond-btn ref="zond" v-show="false"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Ref } from "vue-property-decorator"
import ScrollAnchor from "~/components/common/ScrollAnchor.vue";

@Component({
  components: {ScrollAnchor}
})
export default class HowItWorks extends Vue {
  get bg(){
    return this.$vuetify.breakpoint.mdAndUp ? require('@/assets/images/agents/hiw/bg.webp') : require('@/assets/images/agents/hiw/bg-sm.webp')
  }
  @Ref('zond') zondBtn;
  register(){
    this.zondBtn.$el.click();
  }
}
</script>

<style lang="scss">
.agents-hiw {
  padding: 83px 0 112px;
  position: relative;
  image-rendering: -webkit-optimize-contrast;
  @media (max-width: $w-md){
    padding: 40px 0 60px;
  }
  &:before {
      position: absolute;
      content: url("@/assets/images/agents/hiw/decor-left.svg");
      left: 50px;
      top: 55%;
      @media (max-width: $w-md){
        display: none;
      }
  }
  &:after {
      position: absolute;
      content: url("@/assets/images/agents/hiw/decor-right.svg");
      right: 100px;
      top: 35%;
      @media (max-width: $w-md){
        display: none;
      }
  }

  .hiw-title {
    font-family: Montserrat,sans-serif;
    font-weight: bold;
    font-size: 35px;
    line-height: 40px;
    color: #000000;
    @media (max-width: $w-md){
      font-size: 19px;
      line-height: 23px;
    }
  }
  .hiw-desc {
    max-width: 714px;
    font-weight: normal;
    font-size: 16px;
    line-height: 27px;
    @media (max-width: $w-md){
      font-size: 14px;
      line-height: 21px;
    }
  }

  .steps-title {
    font-family: Montserrat,sans-serif;
    font-size: 30px;
    line-height: 40px;
    @media (max-width: $w-md){
      font-size: 17px;
      line-height: 21px;
      margin-top: 50px;
    }
  }
  .hiw-steps {
    display: flex;
    @media (max-width: $w-md){
      justify-content: space-between;
      flex-wrap: wrap;
    }
    @media (max-width: $w-xs){
      flex-direction: column;
    }
  }
  .hiw-step {
    display: flex;
    background: #F9F9FC;
    border-radius: 5px;
    padding: 24px 20px;
    @media (max-width: $w-md){
      flex-basis: calc(50% - 10px);
    }
    &:not(:last-child){
      margin-right: 12px;
      @media (max-width: $w-md){
        margin-right: unset;
        margin-bottom: 7px;
      }
    }
  }
  .step-number {
    margin-right: 20px;
    font-family: Montserrat,sans-serif;
    font-weight: bold;
    font-size: 25px;
    line-height: 30px;
  }
  .step-text {
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    @media (max-width: $w-md){
      font-size: 14px;
    }
  }
}
</style>
