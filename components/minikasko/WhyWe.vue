<template>
  <div style="position: relative">
    <ScrollAnchor id="mww"/>
    <div class="minikasko-why-we-wrapper">
      <div class="minikasko-container">
        <div class="minikasko-why-we">
          <div>
            <h2 class="why-we-title minikasko-h2">Почему мини-КАСКО выгодно клиенту и легко продавать кроссом к ОСАГО?</h2>
            <div class="why-we-items">
              <div class="why-we-item" v-for="item in items">
                <v-img class="why-we-item-icon" :src="item.icon" max-width="88"/>
                <div class="why-we-item-text" v-html="item.text"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import ScrollAnchor from "~/components/common/ScrollAnchor";

@Component({
  components: {ScrollAnchor}
})
export default class WhyWe extends Vue {
  items = [
    {
      icon: require('images/minikasko/whyWe/car.svg'),
      text: '<span style="font-weight: bold">3 млн водителей</span> по всей стране ездят с поддельным ОСАГО или вовсе без него. С повышением цен на ОСАГО <span style="font-weight: bold">количество бесполисных только&nbsp;растёт</span>.'},
    {
      icon: require('images/minikasko/whyWe/accident.svg'),
      text: '<span style="font-weight: bold">Авария с бесполисными — ремонт за свой счёт и нервы в суде</span>. Выигранное дело не даст гарантию возмещения, если у виновника нет официального высокого дохода.'},
    {
      icon: require('images/minikasko/whyWe/protect.svg'),
      text: '<span style="font-weight: bold">ОСАГО + Мини-КАСКО — полная защита на дорогах</span>. Гарантия возмещения ущерба в ДТП с бесполисными и не только. <span style="font-weight: bold">Покрытие от 400 тыс.&nbsp;до 2 млн рублей</span> .'},
  ]
}
</script>

<style lang="scss">
.minikasko-why-we-wrapper {
  padding: 55px 0;
  .minikasko-why-we {
    .why-we-title {
      text-align: center;
      max-width: 870px;
      margin: 0 auto;
    }
    .why-we-items {
      margin-top: 50px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 20px;
      @media (max-width: $w-md){
        margin-top: 20px;
        grid-template-columns: 1fr;
      }
    }
    .why-we-item {
      padding: 49px 22px 60px 22px;
      background: #F2F5FF;
      border-radius: 5px;
      @media (max-width: $w-md){
        padding: 24px 16px 42px;
      }
    }
    .why-we-item-icon {
      margin: 0 auto;
    }
    .why-we-item-text {
      margin-top: 33px;
      font-family: 'Montserrat',sans-serif;
      font-size: 20px;
      line-height: 24px;
      text-align: center;
      @media (max-width: $w-sm){
        margin-top: 10px;
        font-size: 14px;
        line-height: 17px;
      }
    }
  }
}
</style>
