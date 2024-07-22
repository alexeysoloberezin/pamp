<template>
  <div class="get-money generic-container-1260">
    <ScrollAnchor id="ael" />

    <h2 class="ref-title-h2 text-center" v-text="title"></h2>
    <div class="get-money__wrp">
      <div v-for="block in blocks" :key="block.t1" class="get-money__table" :style="`--tableColor: ${block.color}`">

        <div class="get-money__table-row">
          <div class="get-money__table-it">{{ block.t1 }}</div>
          <div class="get-money__table-it">{{ block.t2 }}</div>
        </div>

        <div v-for="tableIt in block.array" class="get-money__table-row">
          <div  class="get-money__table-it">
            {{ tableIt.title }}
          </div>
          <div  class="get-money__table-it">
            {{ tableIt.got }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import ScrollAnchor from "~/components/common/ScrollAnchor.vue";

@Component({
  components: {ScrollAnchor}
})
export default class ExampleGetMoney extends Vue {
  @Prop({type: String, default: () => 'Примеры заработка'}) title;

  blocks = [
    {
      t1: 'Ваш реферал получил за фин. продукты',
      t2: "Ваш доход",
      color: "#A657EE",
      array: [
        {
          title: '50 полисов ОСАГО',
          got: '2 500 руб.'
        },
        {
          title: '100 полисов ОСАГО',
          got: '5 000 руб.'
        },
        {
          title: '200 полисов ОСАГО',
          got: '10 000 руб.'
        },
      ]
    },
    {
      t1: 'Ваш реферал получил за фин. продукты',
      t2: "Ваш доход",
      color: "#0E5EA6",
      array: [
        {
          title: '30 000 руб.',
          got: '1 500 руб.'
        },
        {
          title: '90 000 руб.',
          got: '4 000 руб.'
        },
        {
          title: '150 000 руб.',
          got: '7 500 руб.'
        },
      ]
    },
    {
      t1: 'Ваш реферал оформил полисы ипотеки на сумму премий',
      t2: "Ваш доход",
      color: "#4578FF",
      array: [
        {
          title: '200 000 руб. (≈25 полисов)',
          got: '2 000 руб.'
        },
        {
          title: '500 000 руб. (≈65 полисов)',
          got: '5 000 руб.'
        },
        {
          title: '1 000 000 руб. (≈135 полисов)',
          got: '10 000 руб.'
        },
      ]
    },
  ]
}
</script>

<style lang="scss">
.get-money{
  position: relative;
  margin-bottom: 72px;
  .ref-title-h2{
    margin-bottom: 32px;
    @media (max-width: 1000px) {
      margin-bottom: 18px;
    }
  }
  &__wrp{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 9px;
    @media (max-width: 1100px) {
      grid-template-columns: 1fr;
    }
  }

  &__table{
    background: #F2F5FF;
    border-radius: 11px;
    overflow: hidden;
    --tableColor: #A657EE;
    *{
      font-family: 'Montserrat', sans-serif;
    }
    &-it{
      line-height: 1.2;
      &:first-child{
        padding: 14px 23px ;
        color: #000;
        font-size: 14px;
        font-weight: 500;
        border-right: 2px solid rgba(255, 255, 255, 0.4);
        @media (max-width: 1000px) {
          font-size: 13px;
          padding: 7px 12px ;
        }
      }
      &:nth-child(2){
        color: var(--tableColor);
        font-size: 17px;
        font-weight: 600;
        padding: 14px 15px ;
        @media (max-width: 1000px) {
          font-size: 13px;
          padding: 7px 12px;
        }
      }
    }
    &-row{
      display: grid;
      align-items: center;
      grid-template-columns: 2fr 1fr;
      border-bottom: 2px solid rgba(255, 255, 255, 0.4);
      @media (max-width: 1100px) {
        grid-template-columns: 1.6fr 1fr;
      }
      &:first-child{
        align-items: start;
        border-bottom: none;
        background: var(--tableColor);
        .get-money__table-it{
          padding-bottom: 14px;
          color: #FFF !important;
          font-size: 15px !important;
          font-weight: 600 !important;

          @media (min-width: 1100px) {
            min-height: 95px;
            padding-top: 27px;
          }
          @media (max-width: 1100px) {
            padding-top: 12px;
            font-size: 13px !important;
            padding-bottom: 12px;
          }
        }
      }
    }
  }
}
</style>
