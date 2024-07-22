<template>
  <div class="affiliate-program-why-we">
    <div class="generic-container-1260">
      <div class="why-we-content">
        <div>
          <h2 class="h2" style="max-width: 425px">Почему стоит выбрать нас?</h2>
          <div v-for="item in items" class="why-we-item">
            <v-img max-width="34" class="mr-4" :src="item.icon"/>
            <div v-html="item.title"/>
          </div>
        </div>
        <v-img max-width="625" :src="bg" alt="Почему стоит выбрать нас?"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"

@Component({})
export default class WhyWe extends Vue {
  bg = require('images/affiliate-program/why-we/bg.png')
  items = [
    {icon: require('~/assets/images/icons/coin.svg'), title: 'Быстрые выплаты сразу после подтверждения заявки'},
    {icon: require('~/assets/images/icons/segment.svg'), title: 'Удобный онлайн-подборщик финансовых продуктов'},
    {icon: require('~/assets/images/icons/human-smile.svg'), title: '22+ тыс. партнеров уже зарабатывают с Пампаду'},
    {icon: require('~/assets/images/icons/bag.svg'), title: 'Минимальная сумма на вывод 750 руб.'},
  ]
}
</script>

<style lang="scss">
.affiliate-program-why-we {
  padding: 56px 0 90px;
  .why-we-content {
    display: flex;
    justify-content: space-between;
    padding-left: 55px;
  }
  .why-we-item {
    margin: 25px 0 0 35px;
    max-width: 280px;
    display: flex;
    align-items: flex-start;
  }

  @media (max-width: $w-md){
    padding: 50px 0;

    .why-we-content {
      padding-left: unset;
      flex-direction: column;
    }
  }
  @media (max-width: $w-sm){
    .h2 {
      text-align: left;
    }
    .why-we-item {
      margin: 15px 0 0 0;

    }
  }
}
</style>
