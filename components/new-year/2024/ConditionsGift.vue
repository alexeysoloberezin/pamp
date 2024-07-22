<template>
  <div class="conditionsGift">
    <div class="generic-container-1260">
      <h2 class="h2 text-center" v-html="'Условия акции'"></h2>
      <div class="conditionsGift-wrp">
        <div class="conditionsGift-box">
          <div>
            <span>Название:</span>
            <div  class="conditionsGift-subtitle" v-html="'Время чудес на Пампаду'"></div>
          </div>
          <div>
            <span>Организатор: </span>
            <div  class="conditionsGift-subtitle" v-html="'ООО “Страховые Партнеры”'"></div>
          </div>
        </div>
        <div class="conditionsGift-box">
          <div>
            <span>Условия акции:</span>
            <div  class="conditionsGift-subtitle" v-html="'С 28.11.2023 по 31.12.2023 в номинациях Лидеры ОСАГО, КАСКО и ипотеки. С 01.12.2023 по 31.12.2023 в Лидерах Банковских продуктов'"></div>
          </div>
          <div>
            <span>Сроки объявления победителей: </span>
            <div  class="conditionsGift-subtitle" v-html="'До 15.01.2024'"></div>
          </div>
        </div>
        <div class="conditionsGift-box">
          <div>
            <span>Сроки отправки призов: </span>
            <div  class="conditionsGift-subtitle" v-html="'До 14 дней с момента объявления победителей'"></div>
          </div>
        </div>
      </div>

      <div class="conditionsGift-block">
        <div class="conditionsGift-block-item" v-for="block in blocks">
          <div class="conditionsGift-block-title" v-html="block.title"></div>
          <ul>
            <li v-for="item in block.details" v-html="item"></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component({})
export default class ConditionsGift extends Vue {
  blocks = [
    {
      title: 'ОСАГО и КАСКО',
      details: [
        'К учёту принимаются продажи полисов ОСАГО и полного КАСКО',
        'К учёту продаж не принимаются полисы с вознаграждением 0 ₽, кроме тех, которые оформлены с кросс продуктом. Полисы перестраховочного пула с кросс продуктом учитываются',
      ],
    },
    {
      title: 'Ипотека',
      details: [
       '1000 рублей начисляются за каждый третий полис страхования ипотеки Ренессанс: имущество для Сбербанка.',
       'Комбинированные полисы, включающие имущество также участвуют в подсчете',
       'Начисление будет происходить 1 раз в неделю в пн-среду, идущую за отчетной неделей.',
      ]
    },
    {
      title: 'Банковские продукты',
      details: [
        'Учитываются заявки на момент подсчёта результатов до <span>до 15.01.2024</span>, оставленные в период акции с <span>01.12.2023 по 31.12.2023</span>',
        'За каждые 50 заявок в период проведения акции вы получаете +1 шанс/билет в розыгрыше главного приза Mac Book air 15'
      ]
    },
    {
      title: 'Общие условия',
      details: [
        'Организатор в праве несущественно поменять сроки проведения, начисления бонусов, выдачи призов.',
        'Внешний вид призов может отличаться от указанных на странице. Не является оффертой.',
      ]
    }
  ]
}
</script>

<style lang="scss">

.conditionsGift{
  margin: 0 0 60px 0;
  .generic-container-1260{
    padding: 0 10px;
  }
  .h2{
    margin-bottom: 40px;
    @media (max-width: $w-md) {
      margin-bottom: 10px;
    }
  }
  &-wrp{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
    @media (max-width: $w-md) {
      grid-template-columns: 1fr;
    }
  }
  &-ps{
    text-align: center;
    font-size: 14px;
    font-style: normal;
    max-width: 744px;
    margin: 17px auto;
    line-height: 20px;
    &:before{
      content: '*';
      color: #6c4ad0;
      font-weight: 700;
      margin-right: 6px;
    }
    @media (max-width: $w-md) {
      font-size: 12px;
    }
  }
  &-block{
    display: grid;
    grid-template-columns:  1fr 1fr;
    grid-gap: 16px;
    margin-top: 22px;
    @media (max-width: $w-md) {
      grid-template-columns: 1fr;
      grid-gap: 10px;
      margin-top: 10px;
    }
    &-item{
      border: 1px solid rgba(125, 141, 147, 0.3);
      @media (min-width: $w-md) {
        padding: 28px;
        border-radius: 20px;
      }
      @media (max-width: $w-md) {
        padding: 15px 20px;
        border-radius: 10px;
      }
      ul{
        padding-left: 0;
      }
      li{
        position: relative;
        margin-bottom: 15px;
        font-size: 14px;
        line-height: 20px;
        padding-left: 25px;
        list-style: none;
        @media (max-width: $w-md) {
          font-size: 12px;
          line-height: 17px;
          padding-left: 17px;
        }
        span{
          display: inline-block;
          font-weight: 600;
        }
        &:before{
          content: '';
          border-radius: 8px;
          background: #9065FD;
          width: 8px;
          height: 8px;
          flex-shrink: 0;
          position: absolute;
          top: 5px;
          left: 0;
          @media (max-width: $w-md) {
            top: 3px;
          }
        }
      }
    }
    &-title{
      font-size: 19px;
      font-family: 'Montserrat', sans-serif;
      font-weight: 600;
      margin-bottom: 15px;
      @media (max-width: $w-md) {
        font-size: 16px;
        margin-bottom: 10px;
      }
    }
  }

  &-box{
    border-radius: 20px;
    background: rgba(242, 245, 255, 0.28);
    padding: 20px 30px;
    span{
      display: block;
      color: #7D8D93;
      font-size: 14px;
      line-height: 26px;
      @media (max-width: $w-md) {
        font-size: 12px;
        line-height: 20px;
      }
    }

    display: flex;
    flex-direction: column;
    grid-gap: 21px;
    @media (max-width: $w-md) {
      grid-gap: 10px;
      padding: 17px;
    }
  }
  &-subtitle{
    font-size: 17px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    line-height: 1.5;
    @media (max-width: $w-md) {
      font-size: 13px;
    }
  }

}
</style>
