<template>
  <div class="pricePer">
    <div class="pricePer-main">
      <span>
        {{ price || '33 400₽' }}
      </span>
      <span>
        {{ per || 'за месяц' }}
      </span>
    </div>
    <div class="pricePer-text">
      {{ subText || 'Для участия в реферальной программе делитесь реферальной ссылкой, привлекая новых пользователей на Пампаду' }}
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";

@Component({})
export default class PricePer extends Vue {
  @Prop(String) price: string;
  @Prop(String) per: string;
  @Prop(String) subText: string;
}
</script>

<style lang="scss">
.pricePer{
  width: fit-content;
  display: flex;
  border-radius: 15px;
  background: #FFF;
  max-width: 602px;
  @media (max-width: 1000px) {
      max-width: 475px;
  }
  @media (max-width: 450px) {
    flex-direction: column;
  }
  &-main{
    border-radius: 15px;
    background: #4578FF;
    display: flex;
    flex-direction: column;
    padding: 6px 20px;
    justify-content: center;
    color: #FFF;
    @media (max-width: 1000px) {
      padding-top: 13px;
    }
    span:nth-child(1){
      white-space: nowrap;
      line-height: 1;
      font-family: 'Montserrat', sans-serif;
      font-size: 60px;
      font-weight: 700;
      @media (max-width: 1000px) {
        font-size: 30px;
      }
    }
    span:nth-child(2){
      font-size: 20px;
      font-family: 'Montserrat', sans-serif;
      font-weight: 600;
      @media (max-width: 1000px) {
        font-size: 15px;
      }
    }
  }
  &-text{
    font-size: 15px;
    padding: 18px 13px 18px 27px;
    font-weight: 400;
    @media (max-width: 1000px) {
      font-size: 13px;
      padding: 14px 19px;
      line-height: 1.25;
    }
  }
}
</style>
