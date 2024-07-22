<template>
  <div class="newYear-banner">
    <v-img :src="require('~/assets/images/new-year/2024/banner.webp')" class="newYear-banner-img"/>
    <div class="generic-container-1260">
      <div class="newYear-banner-info">
        <h1>
          <span>Время чудес на Пампаду!</span><br/>
          Продавай в декабре <br/>и получай
        </h1>
        <div class="newYear-banner-info-box">
          <v-img class="newYear-banner-info-box-el1" :src="require('~/assets/images/new-year/2024/el1.webp')"
                 width="115px" height="79px" alt="Веточка"/>
          <v-img class="newYear-banner-info-box-el2" :src="require('~/assets/images/new-year/2024/el2.webp')"
                 width="153px" height="139px" alt="Веточка"/>
          <div class="newYear-banner-info-box-name">
            гарантированные<br/> призы номиналом
          </div>
          <div class="newYear-banner-info-box-price">
            <div class="newYear-banner-info-box-txt">свыше</div>
            <div class="newYear-banner-info-box-val">500 000</div>
            <div class="newYear-banner-info-box-txt ml-auto w-fit">рублей</div>
          </div>
        </div>
        <div class="newYear-banner-gifts">
          <div class="newYear-banner-gifts-item">
            <div class="d-flex">
              <div class="productsYear-price-box">
                <div class="productsYear-price-lb ml-auto w-fit">рублей</div>
                <div class="d-flex align-center">
                  <svg class="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="12" fill="#7245FF"/>
                    <path d="M11.25 17V8H12.75V17H11.25ZM8 13.3219V11.6986H16V13.3219H8Z" fill="white"/>
                  </svg>
                  <div class="productsYear-price">
                    1 000
                  </div>
                </div>
              </div>
            </div>
            <div class="newYear-banner-gifts-item-label">
              за каждый 3-й полис ипотечного страхования Ренессанс Сбербанк&nbsp;имущество
            </div>
          </div>
          <div class="newYear-banner-gifts-item">
            <div class="productsYear-price-box">
              <div class="productsYear-price-lb ml-auto w-fit">рублей</div>
              <div class="d-flex align-center">
                <div class="productsYear-price">
                  180 000
                </div>
              </div>
            </div>
            <div class="newYear-banner-gifts-item-label">
              разделим среди оформивших больше всех пролонгаций ОСАГО АльфаСтрахование в&nbsp;декабре
            </div>
          </div>
          <div class="newYear-banner-gifts-item">
            <div class="productsYear-price-box pt-3">
              <div class="d-flex align-center ">
                <div class="productsYear-price">
                  57
                </div>
                <div class="productsYear-price-lb2 ml-2">
                  ценных
                  призов
                </div>
              </div>
            </div>
            <div class="newYear-banner-gifts-item-label">
              разыграем среди лидеров ОСАГО и КАСКО
            </div>
          </div>
        </div>
        <Timer/>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import Timer from "~/components/univerese-gift/Timer.vue";

@Component({
  components: {Timer}
})
export default class Banner extends Vue {

}
</script>

<style lang="scss">
.productsYear-price {
  color: #2B1D58;
  font-family: 'Montserrat', sans-serif;
  font-size: 55px;
  font-weight: 700;
  line-height: 0.85;
  white-space: nowrap;

  @media (max-width: 1000px) {
    font-size: 35px;
  }
  @media (max-width: 600px) {
    font-size: 28px;
  }
  &-box {
    min-height: 75px;
    width: fit-content;
    @media (max-width: 1000px) {
      min-height: 55px;
      margin-bottom: 5px;
    }
    @media (max-width: 600px) {
        min-height: 45px;
    }

  }

  &-lb {
    color: #2B1D58;
    width: fit-content;
    font-size: 13px;
    font-weight: 500;
  }

  &-lb2 {
    color: #2B1D58;
    font-family: 'Roboto', sans-serif;
    font-size: 17px;
    line-height: 20px;
    font-weight: 500;
  }
}

.newYear {
  &-banner {
    position: relative;
    min-height: calc(45vw);
    width: 100%;
    max-width: 100vw;
    @media (max-width: 600px) {
      background: #f5f7ff;
      padding-bottom: 20px;
    }

    .w-fit {
      width: fit-content;
    }

    &-gifts {
      display: grid;
      grid-template-columns: 1.4fr 2fr 1.2fr;
      margin-top: 13px;
      margin-bottom: 50px;
      gap: 5px;
      @media (max-width: 600px) {
        grid-template-columns: 1fr;
        margin-top: 5px;
      }
      @media (max-width: 600px) {
        margin-bottom: 20px;
      }

      &-item {
        background: #fff;
        border-radius: 12px;
        padding: 10px 20px;
        @media (max-width: 600px) {
            box-shadow: 0 2px 6px rgba(96, 61, 61, 0.17);
        }
        &-label {
          font-size: 12px;
          font-weight: 500;
          line-height: 15.5px; /* 129.167% */
        }
      }
    }

    &-info {
      position: relative;
      padding-top: 105px;
      z-index: 10;
      max-width: 780px;
      @media (max-width: 1600px) {
        padding-top: 65px;
      }
      @media (max-width: 1000px) {
        padding-top: 30px;
        max-width: 400px;
      }

      h1 {
        color: #000;
        font-family: 'Montserrat', sans-serif;
        font-size: 35px;
        font-weight: 700;
        line-height: 45px;
        margin-bottom: 18px;

        span {
          color: #7245FF;
        }

        @media (max-width: 1000px) {
          font-size: 24px;
          line-height: 1.3;
        }
        @media (max-width: 600px) {
          max-width: 233px;
        }
      }

      &-box {
        background: #7245FF;
        position: relative;
        border-radius: 12px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px 50px 15px 30px;
        color: #fff;
        font-family: 'Montserrat', sans-serif;

        @media (max-width: 1000px) {
          flex-direction: column;
          gap: 10px;
          align-items: start;
        }

        &-txt {
          @media (max-width: 1000px) {
            font-size: 14px;
          }
        }

        &-name {
          position: relative;
          z-index: 5;
          font-size: 31px;
          font-weight: 700;
          line-height: 33px;
          @media (max-width: 1000px) {
            font-size: 24px;
            line-height: 1;
          }
          @media (max-width: 600px) {
            font-size: 18px;
          }
        }

        &-val {
          font-size: 70px;
          font-weight: 800;
          margin: 5px 0;
          line-height: 44.5px;
          text-transform: uppercase;
          white-space: nowrap;
          @media (max-width: 1000px) {
            font-size: 40px;
            line-height: 0.55;
          }
        }

        &-price {
          position: relative;
          z-index: 5;
        }

        &-el2, &-el1 {
          position: absolute;
          z-index: 1;
          pointer-events: none;
        }

        &-el1 {
          left: 0;
          bottom: 0;
        }

        &-el2 {
          right: 0;
          top: 0;
        }
      }
    }

    &-img {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 2;
      width: 1920px;
      min-height: 620px;
      max-width: 100vw;
      height: auto;
      object-fit: cover;
      transform-origin: top right;
      @media (max-width: 1600px) {
        width: 1520px;
      }
      @media (max-width: 600px) {
        right: -33px;
        transform: scale(0.8);
      }
    }
  }
}
</style>
