<template>
  <div class="generic-container-1260">
    <div class="ipoteka-system">
      <h2 class="system-title">Лучше один раз увидеть…</h2>
      <h3 class="system-description">Хотите не сложности, а просто получить заработок? Оцените выгоду на наглядной системе</h3>
      <div class="system-wrapper">
        <div class="system-item" v-for="(item,index) in items">
          <v-img class="system-item-img" max-height="93" :src="item.img"/>
          <p class="system-item-title" v-html="item.title"/>
          <div v-if="item.description" class="system-item-description" v-html="item.description"/>
          <div v-if="item.commissionTitle" class="system-item-commission-title" v-html="item.commissionTitle"/>
          <div class="system-item-commission" :class="{'highlighted': index === 2}" v-html="formatCommission(item.commission)"/>
          <div v-if="item.commissionTip" class="system-item-commission-tip" v-html="item.commissionTip"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({})
export default class System extends Vue {
  items = [
    {
      img: require('images/ipoteka/system/bank.svg'),
      title: 'Банк',
      description: 'До подписания кредитного договора, банк выполняет расчёт&nbsp;в своей страховой компании.',
      commissionTitle: 'Например, по расчёту клиенту:',
      commission:  20_000,
      commissionTip: '',
    },
    {
      img: require('images/ipoteka/system/scales.svg'),
      title: 'Клиент',
      commissionTitle: 'Вы делаете расчет клиенту через&nbsp;Пампаду',
      commission:  10_000,
      commissionTip: 'Все риски идентичны страховой банка.',
    },
    {
      img: require('images/ipoteka/system/human.svg'),
      title: 'Вы - партнер',
      description: 'В день оплаты полиса клиентом мы перечислим вам <span style="color: rgba(171, 84, 255, 1)">комиссию за&nbsp;продажу:</span>',
      commission:  5_500,
      commissionTip: '',
    },
  ]

  formatCommission(commission: number){
    return commission.toLocaleString('ru', {
      style: 'currency',
      currency: 'rub',
      minimumFractionDigits: 0,
    });
  }
}
</script>

<style lang="scss">
.ipoteka-system {
  padding: 50px 0;
  @media (max-width: $w-sm){
    padding: 25px 0;
  }
  .system-wrapper {
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 31px;
    @media (max-width: $w-sm){
      max-width: 400px;
      margin: 28px auto;
      grid-template-columns: 1fr;
      grid-gap: 15px;
    }
  }
  .system-title {
    font-family: 'Montserrat',sans-serif;
    font-weight: 700;
    font-size: 35px;
    line-height: 40px;
    text-align: center;
    @media (max-width: $w-sm){
      font-size: 19px;
      line-height: 23px;
    }
  }
  .system-description {
    margin-top: 25px;
    font-family: 'Montserrat',sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    @media (max-width: $w-sm){
      margin-top: 10px;
      font-size: 15px;
      line-height: 21px;
    }
  }
  .system-item {
    background: #FFFFFF;
    border: 1px solid #E5E5E5;
    border-radius: 5px;
    padding: 33px 51px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    @media (max-width: $w-sm){
      padding: 15px 20px;
    }
    &-img {
      max-width: 93px;
      @media (max-width: $w-sm){
        max-width: 50px;
      }
    }
    &-title {
      margin-top: 25px;
      font-family: 'Montserrat',sans-serif;
      font-weight: 700;
      font-size: 25px;
      line-height: 40px;
      @media (max-width: $w-sm){
        margin: 15px 0 0;
        font-size: 20px;
        line-height: 24px;
      }
    }
    &-description {
      margin-top: 12px;
      @media (max-width: $w-sm){
        margin-top: 10px;
        font-size: 14px;
        line-height: 18px;
      }
    }
    &-commission {
      margin-top: 8px;
      padding: 12px 20px;
      background: #F2F5FF;


      font-weight: 400;
      font-size: 25px;
      line-height: 23px;
      &-title {
        margin-top: 12px;
        font-weight: 700;
        font-size: 16px;
        line-height: 23px;
        color: #AB54FF;
        @media (max-width: $w-sm){
          margin-top: 10px;
          font-size: 14px;
          line-height: 18px;
        }
      }
      &-tip {
        max-width: 220px;
        margin-top: 10px;
        font-style: italic;
        font-weight: 400;
        font-size: 16px;
        line-height: 23px;
        text-align: center;
        @media (max-width: $w-sm){
          max-width: unset;
          font-size: 14px;
          line-height: 18px;
        }
      }
      &.highlighted {
        color: #AB54FF;
      }
    }
  }
}
</style>
