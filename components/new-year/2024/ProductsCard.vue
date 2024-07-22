<template>
  <div class="product-year-card" :style="`--color: ${color};background: ${product.bg}`">
    <div class="product-year-card-type" :class="getType"><span>{{ product.type }}</span></div>

    <div>
      <v-row>
        <v-col md="4" cols="12">
          <div class="product-year-card-img">
            <v-img :src="product.img.data" contain
                   :alt="product.name"
                   :style="{width: product.img.width + 'px' || '', height: product.img.height + 'px' || ''}"
            />
          </div>
        </v-col>
        <v-col md="5" cols="12" class="d-flex align-center pt-0 pt-md-3">
          <div class="product-year-card-name text-center text-md-left" v-html="product.name"></div>
        </v-col>
        <v-col md="3" cols="12" class="d-flex align-center items-center justify-sm-center pl-4 pl-sm-0 pt-0">
          <div class="product-year-card-box ml-0 ml-sm-3 ml-md-0">
            <span>Кол-во<br/>призов</span>
            <svg v-if="product.countGifts === 'infinite'" class="mt-1" width="20" height="10" viewBox="0 0 20 10"
                 fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.8327 9.464C13.9967 9.464 13.2707 9.33933 12.6547 9.09C12.0534 8.84067 11.5254 8.51067 11.0707 8.1C10.6307 7.68933 10.242 7.242 9.9047 6.758C9.56736 6.274 9.2447 5.79 8.9367 5.306C8.64336 4.80733 8.33536 4.35267 8.0127 3.942C7.69003 3.53133 7.32336 3.20867 6.9127 2.974C6.50203 2.72467 6.0107 2.6 5.4387 2.6C5.01336 2.6 4.63203 2.70267 4.2947 2.908C3.95736 3.09867 3.69336 3.35533 3.5027 3.678C3.31203 4.00067 3.2167 4.37467 3.2167 4.8C3.2167 5.21067 3.31203 5.58467 3.5027 5.922C3.69336 6.24467 3.95736 6.50867 4.2947 6.714C4.63203 6.90467 5.01336 7 5.4387 7C6.0107 7 6.50203 6.88267 6.9127 6.648C7.32336 6.39867 7.69003 6.06867 8.0127 5.658C8.33536 5.24733 8.64336 4.8 8.9367 4.316C9.2447 3.832 9.56736 3.348 9.9047 2.864C10.242 2.36533 10.6307 1.91067 11.0707 1.5C11.5254 1.08933 12.0534 0.759333 12.6547 0.51C13.2707 0.260666 13.9967 0.135999 14.8327 0.135999C15.7274 0.135999 16.5267 0.341333 17.2307 0.751999C17.9347 1.148 18.492 1.698 18.9027 2.402C19.3134 3.09133 19.5187 3.88333 19.5187 4.778C19.5187 5.67267 19.3134 6.472 18.9027 7.176C18.492 7.88 17.9347 8.43733 17.2307 8.848C16.5267 9.25867 15.7274 9.464 14.8327 9.464ZM5.1967 9.464C4.30203 9.464 3.49536 9.25867 2.7767 8.848C2.0727 8.43733 1.50803 7.88 1.0827 7.176C0.672029 6.472 0.466695 5.68 0.466695 4.8C0.466695 3.90533 0.672029 3.106 1.0827 2.402C1.50803 1.698 2.0727 1.148 2.7767 0.751999C3.49536 0.341333 4.30203 0.135999 5.1967 0.135999C6.04736 0.135999 6.77336 0.260666 7.3747 0.51C7.9907 0.759333 8.5187 1.08933 8.9587 1.5C9.3987 1.91067 9.78736 2.358 10.1247 2.842C10.462 3.326 10.7774 3.81733 11.0707 4.316C11.364 4.8 11.672 5.24733 11.9947 5.658C12.3174 6.06867 12.684 6.39867 13.0947 6.648C13.5054 6.88267 13.9967 7 14.5687 7C14.994 7 15.3754 6.90467 15.7127 6.714C16.05 6.50867 16.314 6.24467 16.5047 5.922C16.6954 5.58467 16.7907 5.20333 16.7907 4.778C16.7907 4.36733 16.6954 4.00067 16.5047 3.678C16.314 3.34067 16.05 3.07667 15.7127 2.886C15.3754 2.69533 14.994 2.6 14.5687 2.6C13.9967 2.6 13.5054 2.72467 13.0947 2.974C12.684 3.20867 12.3174 3.53133 11.9947 3.942C11.672 4.35267 11.364 4.8 11.0707 5.284C10.7774 5.768 10.462 6.25933 10.1247 6.758C9.78736 7.242 9.3987 7.68933 8.9587 8.1C8.5187 8.51067 7.9907 8.84067 7.3747 9.09C6.77336 9.33933 6.04736 9.464 5.1967 9.464Z"
                fill="black"/>
            </svg>
            <div v-else class="mt-3 mt-sm-1" v-html="product.countGifts"></div>
          </div>
        </v-col>
      </v-row>
      <!--    skip-->
      <div v-if="product?.nameSec" v-html="product.nameSec" class="product-year-card-nameSec">
      </div>
      <div v-else class="product-year-card-wrp">
        <div v-if="product.numberOfSales" class="product-year-card-box d-flex align-center">
          <span class="d-block py-1">Необходимое кол-во продаж для&nbsp;участия в&nbsp;розыгрыше</span>
          <div v-html="product.numberOfSales" style="white-space: nowrap"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from "vue-property-decorator";
import {getEnumKeyByEnumValue, GiftProduct} from "~/components/new-year/2024/data";

@Component
export default class ProductsCard extends Vue {
  @Prop({required: true, type: Object}) product!: GiftProduct;
  @Prop({required: true, type: String}) color!: string;
  @Prop({required: false, type: String}) version!: string;

  withBank = false

  get getType() {
    return getEnumKeyByEnumValue(this.product.type)
  }
}
</script>

<style lang="scss">
.product-year-card {
  position: relative;
  border-radius: 5px;
  border: 1px solid rgba(125, 141, 147, 0.2);
  padding: 15px 13px;
  grid-column-gap: 28px;
  display: grid;
  font-family: 'Montserrat', sans-serif;
  grid-template-columns: 58px 1fr;
  min-height: 100px;
  @media (max-width: $w-sm) {
    grid-template-columns: 1fr;
    grid-gap: 10px;
    padding-bottom: 20px;
  }
  &-nameSec{
    color: #000;
    font-size: 16px;
    margin-top: 9px;
    max-width: 447px;
    line-height: 20px;
    font-weight: 700;
    span{
      color: #7245FF;
    }
  }
  &-val {
    color: var(--rgb, #7245FF);
    font-size: 24px;
    white-space: nowrap;
    font-weight: 700;
  }

  &-img {
    display: flex;
    justify-content: flex-start;
    min-height: 110px;
    width: fit-content;

    @media (max-width: $w-xs) {
      height: fit-content;
      min-height: initial;
      justify-content: center;
      pointer-events: none;
      width: 100%;
      z-index: 1;
      .v-image{
        max-width: 100%;
        width: initial !important;
      }
      img {
        object-fit: contain;
      }
    }
  }

  &-wrp {
    @media (min-width: $w-sm) {
      display: grid;
      grid-template-columns:  2fr 1fr;
    }
  }

  &-name {
    grid-column: 1/3;
    font-size: 18px;
    color: var(--color);
    font-weight: 700;
    line-height: 22px;
    margin-top: 5px;

    @media (max-width: $w-xs) {
      font-size: 16px;
      line-height: 20px;
      width: 100%;

    }
  }

  &-box {
    gap: 10px;
    @media (max-width: $w-sm) {
      width: 100%;
      br{
        display: none;
      }
      display: flex;
      align-items: center;
      gap: 10px;
      justify-content: space-between;
    }
    div {
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
        br {
          display: none;
        }
      }
    }
  }

  &-type {
    border-radius: 4px;
    color: #000;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    height: 45px;
    font-size: 15px;

    @media (min-width: $w-sm) {
      height: 127px;
      font-size: 18px;
      span {
        transform: rotate(-90deg);
        display: block;
      }
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
