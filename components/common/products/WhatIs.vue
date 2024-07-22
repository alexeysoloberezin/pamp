<template>
  <div class="minikasko-container">
    <div class="minikasko-what-is-container">
      <ScrollAnchor id="moi"/>
      <div class="minikasko-what-is" :class="product">
        <h2
          class="what-is-title minikasko-h2"
          v-html="`Что такое ${blockData.productName}?`"
        />
        <h3 class="what-is-desc" v-html="blockData.subtitle"/>
        <div class="what-is-options">
          <div
            class="what-is-option"
            :class="`col${blockData.colSize}`"
            v-for="(option, i) in blockData.options"
            :key="i"
          >
            <v-img
              class="option-check"
              max-width="38"
              :alt="imgAltAttr"
              :src="checkIcon"
            />
            <div class="option-desc" v-html="option"/>
          </div>
        </div>
        <div class="what-is-disclaimer-container">
          <div
            class="what-is-disclaimer"
            v-html="blockData.footerText"
          />
          <div>
            <zond-btn
              style="width: 200px"
              v-if="blockData.displayZondBtn"
              v-text="'Подобрать'"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Inject, Prop, Vue} from "vue-property-decorator";
import ScrollAnchor from "~/components/common/ScrollAnchor";

@Component({
  components: {ScrollAnchor},
})
export default class WhatIs extends Vue {
  @Inject("imgAltAttr") readonly imgAltAttr: string;
  @Prop({default: () => "minikasko"}) product: "minikasko" | "kasko";

  checkIcon = require("images/minikasko/whatIs/check.svg");
  minikasko = {
    productName: "мини-КАСКО",
    subtitle:
      "Это бюджетная страховка собственного автомобиля от наиболее востребованных рисков:",
    options: [
      "ДТП с&nbsp;бесполисными",
      "ДТП по чужой или&nbsp;обоюдной&nbsp;вине",
      "Угон и&nbsp;хищение",
      "Тотальная гибель",
      "Стихийные бедствия",
      "Повреждения животными",
      "Техногенная авария",
    ],
    footerText:
      "Подбирайте подходящий вариант <span>по привлекательной цене — от 1950 рублей</span>",
    displayZondBtn: false,
    colSize: 25,
  };
  kasko = {
    productName: "КАСКО",
    subtitle:
      "КАСКО - это полис добровольного автострахования, который гарантирует финансовую защиту в случае:",
    options: [
      "ущерба или тотальной гибели при ДТП (в т.ч. с незастрахованным виновником)",
      "хищения или угона транспортного средства",
      "стихийного бедствия",
      "техногенной аварии",
      "повреждения животными",
      "и других событий, предусмотренных условиями страхования",
    ],
    footerText:
      "Подберите вашему клиенту <span>подходящий вариант страхования</span>",
    displayZondBtn: true,
    colSize: 33,
  };

  get blockData() {
    return this[this.product];
  }
}
</script>

<style lang="scss">
.minikasko-what-is-container {
  padding: 40px 0;
  position: relative;

  &:before {
    content: url("@/assets/images/minikasko/whatIs/bg1.svg");
    position: absolute;
    left: -90px;
    @media (max-width: $w-md) {
      display: none;
    }
    @media (max-width: $w-md) {
      z-index: 1;
      display: block;
      top: -20px;
      left: -30px;
    }
  }

  &:after {
    content: url("@/assets/images/minikasko/whatIs/bg2.svg");
    position: absolute;
    left: 60%;
    transform: translateX(-60%);
    bottom: 0;
    @media (max-width: $w-md) {
      display: none;
    }
    @media (max-width: $w-md) {
      display: block;
      transform: unset;
      bottom: -20px;
      left: 45%;
    }
  }

  .minikasko-what-is {
    padding: 42px 70px 49px 73px;
    border-radius: 10px;
    position: relative;
    &:after {
      content: url("@/assets/images/minikasko/whatIs/bg3.svg");
      position: absolute;
      top: 100px;
      right: -90px;
      @media (max-width: $w-md) {
        display: none;
      }
    }

    &.minikasko {
      background: rgba(239, 242, 252, 1) url("images/minikasko/whatIs/bg.png") no-repeat right 7px;
    }

    &.kasko {
      background: rgba(239, 242, 252, 1) url("images/minikasko/whatIs/car.png") no-repeat right 7px;
    }

    @media (max-width: $w-sm) {
      padding: 38px 51px 33px 27px;
      background-position: right 85%;
      background-size: 70%;
    }

    .what-is-desc {
      margin-top: 10px;
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      @media (max-width: $w-sm) {
        font-size: 16px;
        line-height: 19px;
      }
    }

    .what-is-disclaimer-container {
      margin-top: 50px;
      display: flex;
      @media (max-width: $w-sm) {
        flex-flow: column;
        .btn {
          margin-top: 12px;
        }
      }
    }

    .what-is-disclaimer {
      font-family: "Montserrat", sans-serif;
      font-weight: 600;
      font-size: 23px;
      line-height: 30px;
      max-width: 580px;

      & > span {
        color: rgba(94, 53, 220, 1);
      }

      @media (max-width: $w-sm) {
        margin-top: 10px;
        font-size: 17px;
        line-height: 21px;
      }
    }

    .what-is-options {
      margin-top: 40px;
      display: flex;
      flex-wrap: wrap;
      row-gap: 25px;
      @media (max-width: $w-sm) {
        margin-top: 20px;
        row-gap: 10px;
      }
    }

    .what-is-option {
      @media (min-width: $w-md + 1px) {
        &.col25 {
          flex: 0 1 25%;
        }
        &.col33 {
          flex: 0 1 33%;
        }
      }
      display: flex;
      align-items: center;
      @media (max-width: $w-md) {
        flex: 1 1 50%;
      }
      @media (max-width: $w-sm) {
        flex: 1 1 100%;
      }
    }

    .option-check {
      margin-right: 18px;
    }

    .option-desc {
      // max-width: 110px;
      padding-right: 20px;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      @media (max-width: $w-sm) {
        font-size: 15px;
        line-height: 17px;
        max-width: unset;
      }
    }
  }

  @media (max-width: $w-sm) {
    padding: 10px 0 20px 0;
  }
}
</style>
