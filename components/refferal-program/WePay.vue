<template>
  <div class="wePay">
    <ScrollAnchor id="wepay" />

    <div class="generic-container-1260">
      <h2 class="ref-title-h2 text-center">Мы платим вам:</h2>
      <v-row>
        <v-col cols="12" md="5" class="wePay-item">
          <div class="wePay-val">5%</div>
          <div class="wePay-text">с каждой продажи банковского<br/>
            и HR-продукта приглашенного вами реферала</div>
        </v-col>
        <v-col cols="12" md="4" class="wePay-item">
          <div class="wePay-val">1%</div>
          <div class="wePay-text">от стоимости<br/> ипотечного полиса</div>
        </v-col>
        <v-col cols="12" md="3" class="wePay-item">
          <div class="wePay-val">50₽</div>
          <div class="wePay-text">за полис <br/> ОСАГО</div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import ScrollAnchor from "~/components/common/ScrollAnchor.vue";

@Component({
  components: {ScrollAnchor}
})
export default class WePay extends Vue {

}
</script>

<style lang="scss">
.wePay{
  background: #F9F9FC;
  padding-bottom: 35px;
  position: relative;
  .ref-title-h2{
    margin-bottom: 32px;
    @media (max-width: 1000px) {
      margin-bottom: 18px;
    }
  }
  &-item{
    display: flex;
    align-items: center;
    gap: 16px;
    @media (max-width: 1000px) {
        gap: 7px;
    }
  }
  &-val{
    color: #4578FF;
    font-family: 'Montserrat', sans-serif;
    font-size: 50px;
    font-weight: 700;
    @media (max-width: 1000px) {
      font-size: 40px;
      min-width: 74px;
    }
  }
  &-text{
    font-size: 15px;
    font-weight: 400;
    line-height: 16.5px; /* 110% */
    @media (max-width: 1000px) {
      font-size: 14px;
    }
  }
}
</style>
