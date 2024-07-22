<template>
  <div>
    <div class="credit-cards-container">
      <Benefit :items="benefits"/>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
import Benefit from "~/components/common/Benefit";

@Component({
  components: {Benefit}
})
export default class CreditCardsBenefit extends Vue {
  benefits = [
    {
      icon: require("images/ipoteka/benefit/bag.svg"),
      title: "Минимальная сумма на&nbsp;вывод&nbsp;<b>750 руб.</b>",
    },
    {
      icon: require("images/ipoteka/benefit/coin.svg"),
      title: "Быстрые выплаты сразу после&nbsp;подтверждения заявки",
    },
    {
      icon: require('~/assets/images/icons/segment.svg'),
      title: "Удобный онлайн-подборщик финансовых продуктов",
    },
  ];
}
</script>

<style lang="scss">
.credit-cards-container {
  .generic-container-1260 {
    padding: 0;
  }
  .common-benefit {
    @media (min-width: $w-md) {
      grid-template-columns: minmax(0, 360px) repeat(2, 1fr);
    }
    @media (max-width: $w-xs){
      font-size: 16px;
      line-height: 23px;
    }
  }
}
</style>
