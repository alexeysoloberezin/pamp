<template>
  <div style="position: relative">
    <div class="credit-cards-container specific-container">
      <div class="specific-text">
        <h2 class="credit-cards-h2 specific-title">Особенности работы с офферами кредитных карт</h2>
        <div class="specific-description">
          Когда вы работаете с офферами кредитных карт необходимо учитывать высокую конкурентность этого направления финансовой вертикали.
          Следовательно, опытными арбитражниками уже занято большинство ниш, так как они давно выработали удобные профитные схемы для слива трафика.
          Нужно отметить  довольно высокую привередливость аудитории.
          Популярные креативы, которые предлагают рекламодатели, не новы и действуют довольно редко.
          Для выхода на необходимый уровень доходного слива трафика, важно сегментировать аудиторию
          и подобрать индивидуально для каждой группы клиентов свои интересные, свежие и уникальные креативные идеи.
        </div>
        <div class="specific-register">
          <div class="specific-register-title">
            Зарегистрированные партнёры Пампаду имеют доступ к обучающим материалам по работе с финансовыми офферами,
            личного куратора и онлайн чат поддержки.
            <p class="ma-0 mt-3">Присоединяйтесь, и начните зарабатывать прямо сейчас!</p>
          </div>
          <zond-btn class="specific-register-btn" v-text="'Зарегистрироваться'"/>
        </div>
      </div>
      <div class="specific-bg"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({})
export default class Specific extends Vue {
}
</script>

<style lang="scss">
.credit-cards-container {
  &.specific-container {
    display: flex;
    padding-top: 75px;
    @media (max-width: $w-md){
      flex-direction: column;
    }
    @media (max-width: $w-sm){
      padding-top: 35px;
    }
  }
  .specific-text {
    flex: 0 1 700px;
    @media (max-width: $w-md){
      flex: 0 1 auto;
    }
  }
  .specific-title {
    @media (max-width: $w-xs){
      max-width: 269px;
    }
  }
  .specific-description {
    margin-top: 22px;
    font-weight: 400;
    font-size: 14px;
    line-height: 23px;

    @media (max-width: $w-xs){
      line-height: 21px;
    }
  }
  .specific-register {
    margin-top: 22px;
    background: #F2F5FF;
    border-radius: 11px;
    padding: 24px 56px 29px 28px;
    @media (max-width: $w-xs){
      padding: 24px 30px 25px 18px;
    }
  }
  .specific-register-title {
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    @media (max-width: $w-xs){
      font-size: 14px;
      line-height: 125%;
    }
  }
  .specific-register-btn {
    margin-top: 22px;
  }
  .specific-bg {
    position: absolute;
    right: 0;
    width: 550px;
    top: 100px;
    height: 500px;
    background-repeat: no-repeat;
    background-image: url('assets/images/creditCards/specific/bg.png');
    @media (max-width: $w-md){
      position: static;
      background-image: url('assets/images/creditCards/specific/bg-md.png');
      flex: 0 1 370px;
      background-position: center;
      margin: 0 auto;
      transform: translateX(25%);
    }
    @media (max-width: $w-sm){
      background-image: url('assets/images/creditCards/specific/bg-md.png');
      flex-basis: 350px;
    }
    @media (max-width: $w-xs){
      margin: 0 auto;
      background-image: url('assets/images/creditCards/specific/bg-sm.png');
      flex-basis: 188px;
      transform: unset;
      width: 300px;
    }
  }
}
</style>
