<template>
  <div class="productsYear">
    <div class="generic-container-1260">
      <v-row class="productsYear-tabs">
        <v-col v-for="(tab, index) in tabs"
               :key="tab.key"
               class="d-flex justify-center productsYear-tabs-item-box py-1"
        >
          <div
            class="productsYear-tabs-item"
            @click="scrollToElement('productsYearToScrollTo' + index)"
            :class="activeTab === tab.key ? 'active' : ''"
          >
            {{ tab.name }}
          </div>
        </v-col>
      </v-row>
    </div>

    <div v-for="(item, index) in getData"
         class="productsYear-block "
         :ref="'productsYearToScrollTo' + index"
    >
      <div
        :class="item.type === ProductVersion.Mortgage
             ? 'productsYear-block-mortagage'
             : ''
          ">
        <div v-if="item.subtitle" class="productsYear-block-subtitle">{{ item.subtitle }}</div>

        <div class="productsYear-block-container">
          <h2 class="h2 mb-6">Лидеры <span v-html="item.title" :style="'color:' + item.color"></span>
          </h2>
          <div v-if="item.type === ProductVersion.Base" class="productsYear-box">
            <ProductsCard
              v-for="product in item.products"
              :key="product.title"
              :product="product"
              :version="item.type"
              :color="item.color"
              :class="'order-product-'+ getOrderNumber(product.type)"
            />
          </div>
          <div v-else-if="item.type === ProductVersion.Mortgage">
            <div v-for="product in item.products" class="productsYear-card-mortgage">
              <div class="productsYear-card-mortgage-img">
                <v-img :src="product.img.data"
                       :alt="product.name"
                       :style="{width: product.img.width + 'px' || '', height: product.img.height + 'px' || ''}"
                ></v-img>
              </div>
              <svg class="productsYear-card-mortgage-plus" width="24" height="24" style="flex-shrink: 0"
                   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#7245FF"/>
                <path d="M11.25 16V7H12.75V16H11.25ZM8 12.3219V10.6986H16V12.3219H8Z" fill="white"/>
              </svg>
              <div class="productsYear-card-mortgage-price">
                <div>рублей</div>
                <div style="white-space: nowrap"> {{ product.val }}</div>
              </div>
              <div class="productsYear-card-mortgage-name" v-html="product.name">
              </div>
              <div class="productsYear-card-mortgage-bankImg">
                <v-img width="86px" height="86px" contain :src="product.bankImg"></v-img>
              </div>
            </div>
          </div>
          <div v-else>
            <div v-for="product in item.products" class="productsYear-bank-card">
              <div class="productsYear-bank-card-img">
                <v-img :src="product.img.data" :alt="product.name" contain
                       :style="{width: product.img.width + 'px' || '', height: product.img.height + 'px' || ''}"></v-img>
              </div>
              <div class="productsYear-bank-card-info">
                <v-row class="align-center">
                  <v-col sm="10" cols="12">
                    <div class="productsYear-bank-card-name" v-html="product.name"></div>
                  </v-col>
                  <v-col sm="2" cols="12" class="py-sm-2 py-0">
                    <div class="product-year-card-box text-center ">
                      <span>Кол-во<br/>призов</span>
                      <div class="mt-1" v-html="product.countGifts"></div>
                    </div>
                  </v-col>
                </v-row>
                <div class="d-flex align-center productsYear-bank-card-wrp">
                  <div>
                    <div class="productsYear-bank-card-txt">За каждые <br/><span>{{ product.chance[0] }} заявок</span>
                    </div>
                  </div>
                  <div>
                    <div class="productsYear-bank-card-chance pt-1">
                      <svg width="98" height="43" viewBox="0 0 98 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_65_47377)">
                          <rect x="0.136719" y="0.78125" width="97" height="42" fill="#A657EE"/>
                          <rect x="13.4224" y="-5.21875" width="6.03896" height="10.8" rx="3.01948" fill="white"/>
                          <rect x="13.4224" y="9.18115" width="6.03896" height="10.8" rx="3.01948" fill="white"/>
                          <rect x="13.4224" y="23.5813" width="6.03896" height="10.8" rx="3.01948" fill="white"/>
                          <rect x="13.4224" y="37.9812" width="6.03896" height="10.8" rx="3.01948" fill="white"/>
                          <path
                            d="M8.5913 21.7812C8.5913 25.4262 4.80607 28.3812 0.13675 28.3812C-4.53257 28.3812 0.136827 25.4262 0.136827 21.7812C0.136827 18.1361 -4.53257 15.1812 0.13675 15.1812C4.80607 15.1812 8.5913 18.1361 8.5913 21.7812Z"
                            fill="white"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_65_47377">
                            <rect x="0.136719" y="0.78125" width="97" height="42" rx="5" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                      <div class="productsYear-bank-card-chance-val">+{{ product.chance[1] }} шанс</div>
                    </div>
                  </div>
                  <div>
                    <div class="productsYear-bank-card-txt">к выигрышу</div>
                  </div>
                </div>
              </div>
              <div class="productsYear-bank-card-img-man">
                <v-img
                  :src="require('~/assets/images/new-year/2024/pampaduMenNewYear.webp')"
                  width="328px"
                  height="320px"
                  contain
                ></v-img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import data, {GiftProduct, GiftProductsTabs, ProductType, ProductVersion} from "~/components/new-year/2024/data";
import ProductsCard from "~/components/new-year/2024/ProductsCard.vue";

@Component({
  components: {ProductsCard}
})
export default class Products extends Vue {
  tabs = [
    {name: 'ОСАГО и КАСКО', key: GiftProductsTabs.Osago},
    {name: 'Ипотека', key: GiftProductsTabs.Ipoteka},
    {name: 'Банковские продукты', key: GiftProductsTabs.BankProducts},
  ]
  activeTab = GiftProductsTabs.Osago
  ProductVersion = ProductVersion

  getData = data

  getOrderNumber(type) {
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
.productsYear {
  position: relative;


  @media (max-width: $w-xs) {
    .h2 {
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

  &-bank-card {
    position: relative;
    border: 1px solid rgba(125, 141, 147, 0.2);
    display: flex;
    border-radius: 5px;
    align-items: center;
    padding: 5px 370px 10px 30px;
    justify-content: space-between;
    @media (max-width: 1200px) {
      padding-right: 20px;
      padding-left: 10px;
    }
    @media (max-width: 900px) {
      flex-direction: column;
    }

    &-info {
      width: 100%;
      padding-left: 35px;
      @media (max-width: 900px) {
        padding-left: 0;
        margin-top: 20px;
      }
    }

    &-wrp {
      gap: 15px;
      margin-top: 30px;
      @media (max-width: 800px) {
        margin-top: 0;
      }
    }

    &-chance {
      position: relative;
      @media (max-width: 800px) {
        transform: scale(0.7);
        transform-origin: center;
        margin: 0 -20px;
      }

      &-val {
        color: #fff;
        font-size: 15px;
        font-weight: 700;
        position: absolute;
        top: 48%;
        right: 12px;
        transform: translateY(-50%);
        z-index: 2;
        font-family: "Montserrat", sans-serif;
      }
    }

    &-txt {
      color: #000;
      font-family: 'Montserrat', sans-serif;
      font-size: 18px;
      font-weight: 700;
      line-height: 22px;

      span {
        color: #A657EE;
      }

      @media (max-width: 700px) {
        font-size: 13px;
        line-height: 1.3;
      }
    }

    &-img {
      max-width: 100%;

      .v-image {
        max-width: 100%;

        .v-image__image--cover {
          object-fit: contain !important;
        }
      }

      &-man {
        position: absolute;
        bottom: 0;
        right: 0;
        @media (max-width: 1200px) {
          display: none;
        }
      }
    }

    &-name {
      color: #000;
      font-family: 'Montserrat', sans-serif;
      font-size: 33px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      @media (max-width: 1000px) {
        font-size: 23px;
      }
    }
  }

  &-card-mortgage {
    display: flex;
    align-items: center;
    border: 1px solid rgba(125, 141, 147, 0.2);
    border-radius: 5px;
    padding: 10px 40px 10px 25px;
    @media (max-width: 1000px) {
      flex-wrap: wrap;
    }
    @media (max-width: 600px) {
      flex-direction: column;
      align-items: start;
      padding: 15px;
    }

    &-img {

    }

    &-plus {
      margin: 0 -5px 0 -15px;
      @media (max-width: 1000px) {
        display: none;
      }
    }

    &-bankImg {
      max-width: 60px;
    }

    &-price {
      color: #2B1D58;
      margin-left: 20px;
      @media (max-width: 1000px) {
        margin: 10px 0;
      }

      div:nth-child(1) {
        font-family: 'Roboto', sans-serif;
        font-size: 13px;
        margin-left: auto;
        text-align: right;
        font-weight: 400;
      }

      div:nth-child(2) {
        font-size: 67px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        line-height: 0.9;
        @media (max-width: $w-md) {
          font-size: 40px;
        }
        @media (max-width: $w-sm) {
          font-size: 32px;
        }
      }
    }

    &-name {
      color: #000;
      font-size: 28px;
      font-weight: 700;
      line-height: 31px;
      margin: 0 30px 0 75px;

      span {
        color: #7245FF;
      }

      @media (max-width: $w-md) {
        font-size: 23px;
        margin-left: 40px;
        margin-right: 20px;
      }
      @media (max-width: 1000px) {
        margin-left: 0;
        width: 100%;
        margin-bottom: 00px;
        font-size: 21px;
        line-height: 1.2;
      }
    }
  }

  &-arrow {
    max-width: 100%;
  }

  &-block {
    padding: 100px 00px 0;
    position: relative;
    @media (max-width: $w-sm) {
      padding: 40px 10px 0;
    }
    @media (max-width: $w-md) {
      padding-left: 20px;
      padding-right: 20px;
    }

    &-container {
      max-width: 1280px;
      margin-left: auto;
      margin-right: auto;
    }

    &-subtitle {
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
      .product-gift-card {
        max-width: calc(100vw - 20px);
      }
    }

    &-mortagage {
      background: #F2F5FF;
      padding: 50px 0 60px;
      @media (max-width: $w-md) {
        padding-left: 20px;
        padding-right: 20px;
        margin-left: -20px;
        width: calc(100vw);
      }
    }

    &.version {
      background: #F2F5FF;
      padding-top: 30px;
      padding-bottom: 65px;
      margin-top: 100px;

      .productsYear-block-container {
        background: #fff;
        padding: 30px 50px 50px 50px;
        border-radius: 10px;
        box-shadow: 0px 2px 14px 0px rgba(114, 69, 255, 0.12);
        max-width: calc(1280px + 100px);
      }

      @media (max-width: $w-sm) {
        padding-left: 0;
        padding-right: 0;
        .productsYear-block-container {
          padding: 17px 10px;
          max-width: 100vw;
        }
        .product-gift-card {
          max-width: calc(100vw - 20px);
        }
        .h2 {
          padding-left: 15px;
        }
      }
    }
  }

  &-tabs {
    @media (max-width: 750px) {
      flex-direction: column;
    }

    &-item-box {
      @media (min-width: 751px) {
        border-right: 1px solid rgba(125, 141, 147, 0.29);
        &:last-child {
          border-right: none;
        }
      }
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
        margin: 0 auto 10px;
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
      grid-gap: 10px;

      @for $i from 0 through 7 {
        .product-gift-card.order-product-#{$i} {
          order: $i;
        }
      }
    }
    @media (max-width: 750px) {
      grid-template-columns: 1fr;

    }
  }
}
</style>
