<template>
  <div class="promo-why-we">
    <div class="promo-container">
      <h2 class="why-we-title">Почему <span style="color: rgba(106, 43, 227, 1)">Pampadu.ru?</span></h2>
      <v-fade-transition group class="why-we-items">
        <div class="why-we-item" v-for="(item,index) in items" :key="index">
          <v-img class="why-we-item-icon" max-width="65" :src="item.icon"/>
          <div class="why-we-item-title" v-html="item.title"/>
          <div class="why-we-item-desc" v-html="item.desc"></div>
        </div>
      </v-fade-transition>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"

@Component({})
export default class WhyWe extends Vue {
  items = [
    {
      icon: require('@/assets/images/promo/whyWe/case.svg'),
      title: '34 страховых компании&nbsp;и&nbsp;банка',
      desc: 'Только надёжные и аккредитованные партнёры, позволяющие застраховать ипотеку в большинстве банков России!'
    },
    {
      icon: require('@/assets/images/promo/whyWe/list.svg'),
      title: 'Любые типы ипотечного&nbsp;полиса',
      desc: 'Можно застраховать всё: жизнь, имущество, титул. А также комбинированные полисы: жизнь + имущество и титул + имущество'
    },
    {
      icon: require('@/assets/images/promo/whyWe/cog.svg'),
      title: 'Единый онлайн кабинет и&nbsp;наша&nbsp;поддержка',
      desc: 'Оформление полиса занимает 10 минут. Вам будут помогать: личный куратор, база знаний и служба поддержки!'
    },
    {
      icon: require('@/assets/images/promo/whyWe/money.svg'),
      title: 'Моментальные выплаты',
      desc: 'Выводите деньги за 2 минуты. Не нужно ждать конца месяца чтобы вывести заработанные деньги'
    },
  ]

  get br(){
    return this.$vuetify.breakpoint;
  }

  mounted(){
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 1
    };
    let callbackFunc = (entries, observer) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    };
    let nodes = this.$el.querySelectorAll(".why-we-item");
    let observer = new IntersectionObserver(callbackFunc, options);
    nodes.forEach(x => observer.observe(x));
  }
}
</script>

<style lang="scss">
.promo-why-we {
  padding: 75px 0;
  @media (max-width: $w-md){
    padding: 25px 0;
  }
  .promo-container {
    .why-we-items {
      margin-top: 45px;
      display: flex;
      justify-content: space-between;
      @media (max-width: $w-md){
        flex-direction: column;
        align-items: center;
      }
      @media (max-width: $w-sm){
        margin-top: 25px;
      }
      .why-we-item {
        flex: 0 1 285px;
        opacity: 0;
        transition: 0.3s;
        &.visible {
          opacity: 1;
        }
        &:hover {
          .why-we-item-icon {
            transform: translateY(-5px);
          }
        }
        @media (max-width: $w-md){
          max-width: 320px;
          flex-basis: auto;
          &:not(:first-child){
            margin-top: 20px;
          }
        }
        &-icon {
          margin: 0 auto;
          transition: .3s;
        }
        &-title {
          max-width: 269px;
          margin: 32px auto 0;
          text-align: center;

          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 20px;
          line-height: 24px;
          color: #000000;
          @media (max-width: $w-md){
            margin: 10px auto 0;
          }
          @media (max-width: $w-xs){
            font-size: 16px;
            line-height: 20px;
            max-width: 280px
          }
        }
        &-desc {
          text-align: center;
          margin: 30px auto 0;
          font-weight: 400;
          font-size: 16px;
          line-height: 22px;
          color: #7D8D93;
          @media (max-width: $w-md){
            margin: 10px auto 0;
          }
          @media (max-width: $w-xs){
            font-size: 14px;
            line-height: 21px;
          }
        }
      }
    }
  }
  .why-we-title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 35px;
    line-height: 43px;
    text-align: center;
    color: #000000;
    @media (max-width: $w-md){
      font-size: 28px;
      line-height: 34px;
    }
    @media (max-width: $w-sm){
      font-size: 19px;
      line-height: 23px;
    }
  }
}

</style>
