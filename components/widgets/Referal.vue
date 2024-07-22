<template>
  <div class="webtools-referal">
    <div style="position: absolute;top: -100px" id="wir"/>
    <div class="webtools-container">
      <h2 class="h2 referal-title my-5 font-weight-bold text-center" style="max-width: 800px;margin: 0 auto"
           v-text="'Используйте нашу реферальную программу'"/>
      <div class="referal-banner font-weight-bold">
        <h3 class="banner-text" style="max-width: 800px">
          <slot name="text">
            <span class="primary--text">6,5 млн ₽ в месяц получают пользователи</span>, которые просто порекомендовали
            Пампаду своим знакомым агентам, вебмастерам или разместили информацию о нас в своём блоге / сайте / сообществе
          </slot>
        </h3>
      </div>
      <HowItWorksBlock v-if="showHowItWork" class="webtools-hiw" :items="howItWorkItems"/>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator"
import HowItWorksBlock from "~/components/common/HowItWorksV1.vue";

@Component({
  components: {HowItWorksBlock}
})
export default class Referal extends Vue {
  @Prop({ default: true }) showHowItWork!: boolean;

  howItWorkItems = [
    {
      title: 'Oтправьте реферальную ссылку или опубликуйте её на своём сайте, блоге, ютуб-канале',
      img: require(`@/assets/images/webtools/referal/step.png`)
    },
    {
      title: 'После регистрации все приглашённые появятся в Вашем кабинете, далее мы будем их самостоятельно курировать',
      img: require(`@/assets/images/webtools/referal/step.png`)
    },
    {
      title: 'Получайте вознаграждение со всех их продаж на протяжении всего времени работы с нами',
      img: require(`@/assets/images/webtools/referal/step.png`)
    },
  ]
}
</script>

<style lang="scss">
.webtools-referal {
  padding: 75px 0 0;
  position: relative;
  @media (max-width: $w-sm) {
    padding: 0;
  }
  .referal-banner {
    border: 2px dotted #7245FF;
    padding: 25px 250px 40px 60px;
    border-radius: 5px;
    position: relative;
    text-align: center;
    font-size: 22px;
    font-family: Montserrat, sans-serif;
    @media (max-width: $w-sm) {
      padding: 40px 20px 15px;
      max-width: 500px;
      margin: 100px auto 0;
      font-size: 14px;
    }
    &:before {
      position: absolute;
      content: url("@/assets/images/webtools/referal/pampadovich.png");
      right: 10px;
      bottom: -25%;
      @media (max-width: $w-sm) {
        top: -75px;
        left: 50%;
        right: unset;
        transform: translateX(-50%);
        content: url("@/assets/images/webtools/referal/pampadovich-sm.png");
        bottom: unset;
      }
    }
  }

  .webtools-hiw {
    margin-top: 50px;
    .hiw-switcher-container {
      flex: 0 1 490px;
      @media (max-width: $w-sm) {
        flex: 0 1 auto;
      }
    }
    .hiw-desc-container {
      flex: 0 1 630px;
      @media (max-width: $w-md){
        flex: auto;
      }
    }
    .hiw-switch.active .sw-num:after {
      top: 60px;
      left: -65px;
    }
    .hiw-switch {
      margin: 0 0 40px;
        @media (max-width: $w-sm) {
          margin-bottom: 10px;
        }
      padding: 15px;
      border-radius: 4px;
      transition: .3s;
      &.active {
        background: white;
        box-shadow: 0 4px 30px rgba(49, 49, 49, 0.0902262);
        border-radius: 4px;
      }
      .sw-text {
        font-family: Montserrat, sans-serif;
        font-weight: 600;font-size: 16px;
        color: rgba(69, 120, 255, 1);
      }
    }
    .hiw-content__inner {
      margin: 0;
      min-height: unset;
      justify-content: space-between;
    }

    .hiw-desc-container {
      min-height: 200px;
    }
  }

}
</style>
