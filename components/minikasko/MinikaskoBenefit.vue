<template>
  <div class="minikasko-benefits">
    <div class="minikasko-container">
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
export default class MinikaskoBenefit extends Vue {
  benefits = [
    {
      icon: require("images/ipoteka/benefit/bag.svg"),
      title: "Заплатим вам <b>до&nbsp;30% вознаграждения</b> от&nbsp;стоимости&nbsp;полиса",
    },
    {
      icon: require("images/ipoteka/benefit/coin.svg"),
      title: "Комиссия начисляется&nbsp;сразу",
    },
    {
      icon: require("images/ipoteka/benefit/clock.svg"),
      title: "Оформление занимает&nbsp;<b>10&nbsp;минут</b>",
    },
  ];
}
</script>

<style lang="scss">
.minikasko-benefits {

  .generic-container-1260 {
    @media (max-width: $w-md) {
      padding: 0;
    }
  }
  .generic-benefits {
    @media (max-width: $w-xs) {
      padding: 20px 0;
    }
  }
  .benefit-title {
    @media (max-width: $w-xs) {
      font-size: 18px;
    }
  }

}
</style>
