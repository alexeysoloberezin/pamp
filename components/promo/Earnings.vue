<template>
  <div style="background-color: #F2F5FF;" :style="{paddingBottom: br.lgAndUp ? '70px' : '25px'}">
    <div class="promo-container">
      <div>
        <h2 class="promo-earnings-title first" v-html="'Страхование ипотеки - отличная&nbsp;возможность для&nbsp;заработка'"/>
        <div class="promo-earnings-bg">
          В 2021 году двадцатка крупнейших банков выдала рекордные 1,&nbsp;9 млн ипотечных кредитов на 5,6 трлн рублей и темпы сохраняются,
          а это значит, что спрос на страхование ипотеки только увеличивается
        </div>
      </div>

      <h2 class="promo-earnings-title second" v-html="'Выгодно всем'"/>
      <div class="promo-earnings-benefits">
        <div class="promo-earnings-benefit" v-for="item in benefits">
          <div class="promo-benefit-title" v-html="item.title"/>
          <div class="promo-benefit-desc" v-html="item.description"/>
        </div>
      </div>
      <v-img
        class="promo-summary"
        max-height="38"
        max-width="100%"
        :src="require('@/assets/images/ipoteka/profit/summary.svg')" alt="summary"
      />
      <div class="promo-earnings-tip" v-html="tip"/>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"

@Component({})
export default class Earnings extends Vue {
  benefits = [
    {title: '<span style="color: #4578FF">3.7 млн</span> клиентов', description: 'уже сейчас обязательно страхуют ипотеку каждый год'},
    {title: 'Не нужно быть <span style="color: #A356F3">экспертом</span>', description: 'чтобы оформить полис&nbsp;онлайн и начать зарабатывать'},
    {
      title: '<span style="color: #D863E0">Самое высокое</span> вознаграждение',
      description: 'среди всех страховых продуктов, а с нашей субсидией ещё больше!'
    },
  ]
  tip = '<span style="color: #6A2BE3;">Клиенты получают у вас полис дешевле</span>, чем в банке, <br v-if="$rs.br.lgAndUp"/> а <span style="color: #6A2BE3;">вы зарабатываете до 50% от его стоимости</span>. <br v-if="$rs.br.lgAndUp"/> Лёгкое онлайн оформление в едином кабинете или с помощью наших менеджеров'

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
    let nodes = this.$el.querySelectorAll(".promo-earnings-benefit");
    let observer = new IntersectionObserver(callbackFunc, options);
    nodes.forEach(x => observer.observe(x));
  }
}
</script>

<style lang="scss">
.promo-container {
  .promo-earnings-title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 35px;
    line-height: 43px;
    margin: 0 auto;
    text-align: center;
    color: #050505;
    @media (max-width: $w-md){
      font-size: 28px;
      line-height: 34px;
    }
    @media (max-width: $w-sm){
      font-size: 19px;
      line-height: 23px;
    }
    &.first {
      max-width: 933px;
    }

    &.second {
      margin: 58px auto 0;
      @media (max-width: $w-md){
        margin: 40px auto 0;
      }
      @media (max-width: $w-xs){
        margin: 25px auto 0;
      }
    }
  }

  .promo-earnings-benefits {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    @media (max-width: $w-md){
      margin-top: 25px;
      flex-direction: column;
      align-items: center;
    }
  }

  .promo-earnings-benefit {
    flex: 0 1 340px;
    text-align: center;
    opacity: 0;
    transform: translateX(-30px);
    transition: .3s;

    &.visible {
      opacity: 1;
      transform: translateX(0);
    }

    @media (max-width: $w-md){
      flex-basis: auto;
      max-width: 275px;
      &:not(:first-child){
        margin-top: 25px;
      }
    }
    @media (max-width: $w-sm){
      transform: translateX(-20px);
    }
  }
  .promo-benefit-title {
    font-family: 'Montserrat',sans-serif;
    font-weight: 700;
    font-size: 28px;
    line-height: 34px;
    margin: 0 auto;
    max-width: 240px;
    @media (max-width: $w-md){
      font-size: 22px;
      line-height: 26px;
      max-width: 200px;
    }
    @media (max-width: $w-sm){
      font-size: 17px;
      line-height: 20px;
      max-width: 150px;
    }
  }
  .promo-benefit-desc {
    margin-top: 10px;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    @media (max-width: $w-md){
      font-size: 18px;
      line-height: 23px;
    }
    @media (max-width: $w-sm){
      font-size: 16px;
      line-height: 22px;
    }
  }

  .promo-summary {
    margin-top: 50px;
    @media (max-width: $w-md){
      margin: 25px auto 0;
    }
  }

  .promo-earnings-tip {
    padding: 32px 62px;
    background: #FFFFFF;
    box-shadow: 0 2px 14px rgba(114, 69, 255, 0.12);
    border-radius: 14px;
    margin: 37px auto 0;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
    text-align: center;
    @media (max-width: $w-md){
      font-size: 18px;
      line-height: 24px;
    }
    @media (max-width: $w-sm){
      font-size: 15px;
      line-height: 21px;
    }
    @media (max-width: $w-xs){
      padding: 13px 21px;
    }
  }

  .promo-earnings-bg {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 31px;
    color: #FFFFFF;
    margin-top: 22px;
    padding: 169px 22px 37px 37px;
    background: linear-gradient(360deg, rgba(0, 0, 0, 0.664) 30.38%, rgba(0, 0, 0, 0) 100%), url('../../assets/images/promo/earnings/bg.jpg');
    background-size: cover;
    border-radius: 36px;
    @media (max-width: $w-md){
      font-size: 17px;
      line-height: 23px;
    }
    @media (max-width: $w-sm){
      font-size: 14px;
      line-height: 19px;
    }
    @media (max-width: $w-xs){
      padding: 133px 6px 34px 18px;
      border-radius: 23px;
      background-position-x: -320px;
    }
  }
}
</style>
