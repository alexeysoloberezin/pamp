<template>
  <div class="agents-whos-need">
    <div class="agents-container">
      <h2 class="whos-need-title" v-text="'Кто и как зарабатывает с нами?'"/>
      <div class="items-wrapper mt-8">
        <div class="whos-need-item" v-for="item in items">
          <div class="mt-2 item-title" :class="{'mt-0': $vuetify.breakpoint.mdAndDown,'mb-5': $vuetify.breakpoint.lgAndUp}" v-html="item.title"/>
          <v-img height="54" :src="item.icon" alt="icon" contain/>
          <div class="mt-5 item-desc" :class="{'mt-0': $vuetify.breakpoint.mdAndDown}" v-html="item.description"/>
        </div>
      </div>
      <div class="text-center">
        <zond-btn v-text="'Присоединиться'" :class="[$vuetify.breakpoint.mdAndUp ? 'mt-10' : 'mt-5']"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"

@Component
export default class WhosNeed extends Vue {
  items = [
    {
      icon: require('@/assets/images/agents/whosNeed/agents.svg'),
      title: 'Страховые агенты, брокеры&nbsp;и&nbsp;кураторы',
      description: 'Продавайте разные страховые продукты и развивайте агентские сети в любом регионе России',
    },
    {
      icon: require('@/assets/images/agents/whosNeed/income.svg'),
      title: 'Ищущие дополнительный заработок',
      description: 'Временная или постоянная работа онлайн с быстрыми выплатами, даже для тех у кого нет опыта',
    },
    {
      icon: require('@/assets/images/agents/whosNeed/case.svg'),
      title: 'Бизнесы любых размеров',
      description: 'Расширьте список услуг и продуктов для ваших клиентов, получив новый источник дохода',
    },
    {
      icon: require('@/assets/images/agents/whosNeed/web.svg'),
      title: 'Вебмастера и арбитражники',
      description: 'Монетизруйте свой трафик, используя реферальные ссылки, виджеты и баннеры',
    },
    {
      icon: require('@/assets/images/agents/whosNeed/bloger.svg'),
      title: 'Блогеры и лидеры мнений',
      description: 'Получайте доход со всех продаж, осуществившихся по вашей рекомендации',
    },
  ]
}
</script>

<style lang="scss">
.agents-whos-need {
  padding: 70px 0;
  position: relative;
  @media (max-width: $w-sm) {
    padding: 35px 0;
  }
  .whos-need-title {
    text-align: center;
    font-size: 35px;
    line-height: 40px;
    font-weight: bold;
    @media (max-width: $w-md){
      font-size: 19px;
      line-height: 23px;
    }
  }
  .items-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    align-items: stretch;
    justify-content: center;
    position: relative;
    @media (max-width: $w-md){
      gap: 10px;
    }
    &:before {
      position: absolute;
      content: url("@/assets/images/decor/rect.svg");
      left: -7%;
      top: 50%;
      z-index: 0;
      @media (max-width: $w-sm) {
        display: none;
      }
    }
    &:after {
      position: absolute;
      content: url("@/assets/images/decor/rect1.svg");
      right: -7%;
      top: 95px;
      z-index: 0;
      @media (max-width: $w-sm) {
        display: none;
      }

    }
  }
  .whos-need-item {
    flex: 1 0 375px;
    padding: 20px;
    border: 1px solid #E5E5E5;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: #F9F9FC;
    border-radius: 5px;
    justify-content: space-between;
    @media (max-width: $w-md) {
      padding: 15px;
      gap: 10px;
      flex-basis: calc(50% - 10px);
    }
    @media (max-width: $w-xs){
      flex-basis: 100%;
    }
  }
  .item-title {
    max-width: 320px;
    font-weight: bold;
    font-family: Montserrat, sans-serif;
    font-size: 20px;
    line-height: 26px;
    color: #4578FF;
    @media (max-width: $w-md){
      font-size: 16px;
      line-height: 20px;
    }
  }
  .item-desc {
    max-width: 380px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    @media (max-width: $w-md){
      font-size: 14px;
      line-height: 20px;
    }
  }
}

</style>
