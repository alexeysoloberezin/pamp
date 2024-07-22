<template>
  <div class="giftProducts">
    <div class="generic-container-1260">
      <div class="giftProducts-tabs">
        <div v-for="(tab, index) in tabs" :key="tab.key"
             class="giftProducts-tabs-item"
             @click="scrollToElement('giftProductsToScrollTo' + index)"
             :class="activeTab === tab.key ? 'active' : ''"
        >
          {{ tab.name }}
        </div>
      </div>
    </div>
    <img src="@/assets/images/universe-gift/shapes/shape1.webp" alt="" class="shapes v3">

    <div v-for="(item, index) in getData"
         class="giftProducts-block"
         :class="item.type === ProductVersion.Version ? 'version' : ''"
         :ref="'giftProductsToScrollTo' + index"
    >
      <img v-if="index === 2" src="@/assets/images/universe-gift/shapes/shape4.webp" alt="" class="shapes v4">
      <img v-if="index === 0" src="@/assets/images/universe-gift/shapes/shape5.png" alt="" class="shapes v5">

      <div v-if="item.subtitle" class="giftProducts-block-subtitle">{{ item.subtitle }}</div>

      <div class="giftProducts-block-container">
        <h2 class="h2 mb-6">Лидеры <span v-html="item.title" :style="'color:' + item.color"></span>
        </h2>
        <div class="giftProducts-box">
          <ProductsCard
            v-for="product in item.products"
            :key="product.title"
            :product="product"
            :color="item.color"
            :class="'order-product-'+ getOrderNumber(product.type)"
          />
        </div>
      </div>
      <img class="giftProducts-arrow mx-auto mt-3 mb-1 d-block" src="@/assets/images/universe-gift/arrowDown.svg"
           alt="">
      <div class="giftProducts-txt" v-html="item.text"></div>

    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import data, {GiftProduct, GiftProductsTabs, ProductType, ProductVersion} from "~/components/univerese-gift/data";
import ProductsCard from "~/components/univerese-gift/ProductsCard.vue";

@Component({
  components: {ProductsCard}
})
export default class Products extends Vue {
  tabs = [
    {name: 'ОСАГО и КАСКО', key: GiftProductsTabs.Osago},
    {name: 'Ипотека', key: GiftProductsTabs.Ipoteka},
    {name: 'Фин. продукты', key: GiftProductsTabs.FinProducts},
    {name: 'Реферальная программа', key: GiftProductsTabs.RefProgram},
  ]
  activeTab = GiftProductsTabs.Osago
  ProductVersion = ProductVersion

  getData = data

  getOrderNumber(type){
    const types = Object.values(ProductType)

    const index = types.indexOf(type);
    return index
  }

  scrollToElement(ref: string) {
    let elementRef = this.$refs[ref] as Vue | Element | (Vue | Element)[];

    if (Array.isArray(elementRef)) {
      elementRef = elementRef[0];
    }

    (elementRef as Element).scrollIntoView({behavior: 'smooth'});
  }
}
</script>

<style lang="scss">

.giftProducts {
  position: relative;
  @media (max-width: $w-xs) {
    .h2{
      text-align: left;
    }
  }
  &-txt {
    text-align: center;
    font-size: 20px;
    font-family: 'Montserrat', sans-serif;
    font-style: italic;
    font-weight: 500;
    @media (max-width: $w-xs) {
      font-size: 15px;
      padding: 0 15px;
    }
  }
  &-arrow{
    max-width: 100%;
  }
  &-block {
    padding: 100px 30px 0 ;
    position: relative;
    @media (max-width: $w-sm) {
      padding: 40px 10px 0;
    }
    &-container {
      max-width: 1280px;
      margin-left: auto;
      margin-right: auto;
    }
    &-subtitle{
      font-size: 25px;
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
      text-align: center;
      margin-bottom: 30px;
      line-height: 1.88;
      @media (max-width: $w-md) {
        font-size: 21px;
        margin-bottom: 20px;
        line-height: 1.4;
      }
    }
    @media (max-width: $w-sm) {
      .product-gift-card{
        max-width: calc(100vw - 20px);
      }
    }
    &.version {
      background: #F2F5FF;
      padding-top: 30px;
      padding-bottom: 65px;
      margin-top: 100px;
      .giftProducts-block-container{
        background: #fff;
        padding: 30px 50px 50px 50px;
        border-radius: 10px;
        box-shadow: 0px 2px 14px 0px rgba(114, 69, 255, 0.12);
        max-width: calc(1280px + 100px);
      }
      @media (max-width: $w-sm) {
        padding-left: 0;
        padding-right: 0;
        .giftProducts-block-container{
          padding: 17px 10px;
          max-width: 100vw;
        }
        .product-gift-card{
          max-width: calc(100vw - 20px);
        }
        .h2{
          padding-left: 15px;
        }
      }
    }
  }

  &-tabs {
    @media (min-width: $w-sm) {
      display: flex;
      justify-content: space-between;
    }
    &-item {
      color: #9065FD;
      font-size: 23px;
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
      cursor: pointer;
      line-height: 1.73;
      transition: .2s;
      border-bottom: 2px dashed rgba(144, 101, 253, 0.5);
      @media (max-width: $w-md) {
        font-size: 19px;
      }
      @media (max-width: $w-sm) {
        font-size: 16px;
        display: block;
        width: fit-content;
        margin: 0 auto 20px;
      }
      &:hover {
        color: #000;
        border-bottom-color: transparent;
      }
    }
  }

  &-box {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    @media (max-width: $w-sm) {
      grid-template-columns: 1fr;
      grid-gap: 10px;

      @for $i from 0 through 7 {
        .product-gift-card.order-product-#{$i} {
          order: $i;
        }
      }
    }
  }
}
</style>
