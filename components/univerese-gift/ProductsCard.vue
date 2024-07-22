<template>
  <div class="product-gift-card" :style="'--color:' + color">
    <div class="product-gift-card-type" :class="getType"><span>{{ product.type }}</span></div>
    <div class="product-gift-card-wrp">
      <div class="product-gift-card-box">
        <span>Необходимое кол-во продаж для участия в розыгрыше</span>
        <div v-html="product.numberOfSales"></div>
      </div>
      <div class="product-gift-card-box">
        <span>Кол-во<br/>призов</span>
        <div v-html="product.countGifts"></div>
      </div>
      <div class="product-gift-card-name" v-html="product.name"></div>
    </div>
    <div class="product-gift-card-img">
      <v-img :src="product.img.data" contain
           :alt="product.name"
           :style="{width: product.img.width + 'px' || '', height: product.img.height + 'px' || ''}"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from "vue-property-decorator";
import {getEnumKeyByEnumValue, GiftProduct, ProductType} from "@/components/univerese-gift/data";
import data from "~/components/univerese-gift/data"; // Update this import path according to your project structure

@Component
export default class ProductsCard extends Vue {
  @Prop({required: true, type: Object}) product!: GiftProduct;
  @Prop({required: true, type: String}) color!: string;

  get getType() {
    return getEnumKeyByEnumValue(this.product.type)
  }
}
</script>

<style lang="scss">
.product-gift-card {
  position: relative;
  border-radius: 5px;
  border: 1px solid rgba(125, 141, 147, 0.2);
  padding: 15px 13px;
  grid-gap: 28px;
  display: grid;
  font-family: 'Montserrat', sans-serif;
  grid-template-columns: 58px 1fr 150px;
  min-height: 157px;
  @media (max-width: $w-xs) {
    grid-template-columns: 44px 1fr;
    grid-gap: 23px;
    padding-bottom: 20px;
  }
  &-img{
    display: flex;
    justify-content: center;
    min-height: 144px;

    @media (max-width: $w-xs) {
      height: fit-content;
      min-height: initial;
      justify-content: center;
      pointer-events: none;
      position: absolute;
      bottom: 10px;
      right: 10px;
      z-index: 1;
      min-width: 140px;
      max-height: 135px;
      img{
        max-width: 135px;
        max-height: 100%;
        object-fit: contain;
      }
    }
  }
  &-wrp {
    @media (min-width: $w-xs) {
      display: grid;
      grid-template-columns:  2fr 1fr;
    }
  }
  &-name{
    grid-column: 1/3;
    font-size: 18px;
    color: var(--color);
    font-weight: 700;
    margin-top: 5px;
    @media (max-width: $w-xs) {
      margin-left: -65px;
      font-size: 16px;
      padding-right: 140px;
    }
  }

  &-box {
    div{
      font-size: 22px;
      font-weight: 700;
      @media (max-width: $w-xs) {
        margin: 5px 0 15px 0;
        font-size: 18px;
      }
    }
    span {
      color: #7D8D93;
      display: block;
      font-size: 12px;
      line-height: 1.3;
      font-weight: 500;
      @media (max-width: $w-xs) {
        br{
          display: none;
        }
      }
    }
  }

  &-type {
    border-radius: 4px;
    color: #000;
    text-align: center;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    max-height: 128px;
    @media (max-width: $w-sm) {
      font-size: 15px;
      height: 125px;
    }

    span {
      transform: rotate(-90deg);
      display: block;
    }

    &.Diamond {
      background: linear-gradient(136deg, #E9EEFF 0%, #F5F7FF 100%);
      color: #35426B;
    }

    &.Bronze {
      background: linear-gradient(136deg, #E5C695 0%, #F0E3B1 100%);
    }

    &.Gold {
      background: linear-gradient(136deg, #FFDB44 0%, #FFA412 100%);
    }

    &.Copper {
      background: #EFC6C6;
    }

    &.Silver {
      background: linear-gradient(60deg, #E5E9FF, #F5F6FF, #FFFFFF);
      color: #646464;
    }

    &.GoodStart {
      background: #E6D8F4;
    }
  }
}
</style>
