<template>
  <div class="agents-easy-learn">
    <ScrollAnchor id="ael"/>
    <div class="agents-container">
      <h2 class="easy-learn-title" v-text="'Интуитивно простой и функциональный личный кабинет'"/>
      <div class="easy-learn-content" v-if="selected">
        <div class="switch-container">
          <div @click="selected = item" class="learn-switch" :class="selected === item? 'active' : '' "
               v-for="item in items">
            <img class="check" alt="checkmark" v-if="selected === item" src="~/assets/images/bl6/circle_checkmark.svg"/>
            <img class="check" alt="checkmark" v-else src="~/assets/images/bl6/circle.svg"/>
            <div class="sc-switch__inner">
              <h4 class="switch-title mb-2" v-html="item.title"/>
              <span class="switch-description" v-html="item.description"/>
              <nuxt-link style="display: block;text-decoration: underline;width: fit-content" class="mt-2 primary--text" :to="item.link" v-text="'Подробнее'" v-if="item.link"/>
            </div>
          </div>
        </div>
        <div class="learn-img">
          <v-fade-transition mode="out-in">
            <div class="img-container" :key="selected.title">
              <v-img
                max-width="100%"
                width="530"
                height="366"
                class="root"
                :src="selected.img"
                alt="root"
              >
              </v-img>
            </div>
          </v-fade-transition>
        </div>
      </div>
      <div style="text-align: center" class="mt-10">
        <zond-btn v-text="'Зарегистрироваться'"/>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from "vue-property-decorator";
import ScrollAnchor from "~/components/common/ScrollAnchor.vue";

@Component({
  components: {ScrollAnchor}
})
export default class EasyToLearn extends Vue {
  selected: ShowcaseItem = null;
  items: ShowcaseItem[] = [
    {
      title: 'Возможность оформлять и привлекать клиентов на&nbsp;разные&nbsp;продукты',
      description: 'Доступ к нескольким видам страхования, финансовым продуктам и рекламным предложениям с максимальным доходом',
      img: require('~/assets/images/bl6/1.webp'),
    },
    {
      title: 'Контроль продаж и выплат',
      description: 'Подробная статистика о всех ваших продажах, расчётах, выплатах вознаграждения, договорах, пролонгациях. Все максимально просто и прозрачно',
      img: require('~/assets/images/bl6/2.webp'),
    },
    {
      title: 'Возможность развивать агентскую сеть',
      description: 'Добавляйте агентов, развивайте свою сеть и зарабатывайте дополнительное вознаграждение со всех продаж',
      img: require('~/assets/images/bl6/3.webp'),
    },
    {
      title: 'Инструменты для вебмастеров арбитражных команд',
      description: 'Используйте виджеты, реферальные ссылки и white labels, чтобы монетизировать свои сайты, приложения и аудитории',
      img: require('~/assets/images/bl6/4.webp'),
      link: '/webtools',
    },
  ]

  mounted() {
    this.selected = this.items[0];
  }

}

type ShowcaseItem = {
  title: string,
  description: string,
  img: string,
  link?: string,
}
</script>
<style lang="scss">
.agents-easy-learn {
  padding: 75px 0;
  position: relative;
  image-rendering: -webkit-optimize-contrast;
  @media (max-width: $w-md) {
    padding: 40px 0 60px;
  }

  &:after {
    position: absolute;
    content: url("@/assets/images/agents/easyToLearn/decor1.svg");
    right: 50px;
    bottom: 10%;
    @media (max-width: $w-sm) {
      display: none;
    }
  }

  &:before {
    position: absolute;
    content: url("@/assets/images/agents/easyToLearn/decor2.svg");
    right: 150px;
    bottom: -20px;
    @media (max-width: $w-sm) {
      display: none;
    }
  }


  .easy-learn-title {
    font-family: Montserrat, sans-serif;
    font-weight: bold;
    font-size: 35px;
    line-height: 40px;
    margin: 0 auto;
    max-width: 800px;
    text-align: center;
    @media (max-width: $w-md) {
      font-size: 19px;
      line-height: 23px;
    }
  }

  .easy-learn-content {
    display: flex;
    align-items: center;
    margin-top: 40px;
    @media (max-width: $w-md) {
      margin-top: 20px;
      flex-direction: column;
    }
  }

  .switch-container {
    flex: 0 1 560px;
    margin-right: 25px;
    @media (max-width: $w-md) {
      flex: 0 1 auto;
      margin-right: unset;
    }
  }

  .learn-switch {
    display: flex;
    align-items: flex-start;
    position: relative;
    column-gap: 20px;
    cursor: pointer;
    border-radius: 4px;
    padding: 15px 30px 20px 10px;
    @media (max-width: $w-md) {
      padding: 15px 15px 20px 10px;
    }

    &.active {
      background: #FFFFFF;
      box-shadow: 0px 4px 30px rgba(49, 49, 49, 0.0902262);
    }

    &:not(:last-child):after {
      content: "";
      position: absolute;
      height: calc(100% / 3 - 20px);
      border-left: 1px dashed #979797;
      left: 22.5px;
      top: 50px;
      transform: scaleY(3);
      transform-origin: top;
      opacity: 0;
      transition: opacity 150ms;
      @media (max-width: $w-md) {
        left: 26px;
      }
      @media (max-width: $w-sm) {
        left: 26px;
      }
    }

    &:not(.active):after {
      opacity: 1;
    }
  }

  .switch-title {
    font-family: Montserrat, sans-serif;
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
    color: #4578FF;
  }

  .switch-description {
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #7F7F7F;
  }

  .learn-img {
    flex: 0 1 530px;
    @media (max-width: $w-md) {
      margin-top: 35px;
      flex: 0 1 auto;
      .v-image{
        max-width: 90vw !important;
        height: auto !important;
      }
    }
  }
}
</style>
