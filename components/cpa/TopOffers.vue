<template>
  <div class="cpa-topoffers" id="cpaTopOffers">
    <div class="container">
      <div class="cpa-topoffers-head">
        <h2 class="cpa-h2">Топ
          <b class="text-color1 pl-3">офферы</b>
        </h2>
        <div class="cpa-topoffers-tabs">
          <div v-for="tab in tabs"
               :key="tab.key"
               class="cpa-topoffers-tabs-item"
               :class="{'active': activeTab === tab.key}"
               @click="changeTab(tab.key)"
          >
            {{ tab.name }}
          </div>
        </div>
      </div>

      <div :key="activeTab" class="glide " ref="slider">
        <div class="glide__track" data-glide-el="track">
          <ul
            class="glide__slides"
            :style="{ paddingBottom: noControls ? '15px' : 'none' }"
          >
            <li
              v-for="(ic, i) in ics"
              :key="i"
            >
              <div class="cpa-topoffers-logobox">
                <img v-if="ic.logo" class="cpa-topoffers-logo" :src="ic.logo" alt="">
                <div v-else>{{ ic.name }}</div>
              </div>
              <div class="cpa-topoffers-grid">
                <div class="cpa-topoffers-list">
                  <div class="cpa-topoffers-it">Холд: 7 дней</div>
                  <div v-if="ic.cd" class="cpa-topoffers-it">ЦД: {{ ic.cd }}</div>
                  <div v-if="ic.ar" class="cpa-topoffers-it">AR: {{ ic.ar }}</div>
                  <div v-if="ic.eps" class="cpa-topoffers-it">EPС: {{ ic.eps }}</div>
                </div>
                <div>
                  <div>
                    <div class="cpa-topoffers-subtt">{{ titleByKey[activeTab] }}</div>
                    <div class="cpa-topoffers-name">{{ ic.name }}</div>
                  </div>
                  <div>
                    <div class="cpa-topoffers-subtt">Ваша ставка</div>
                    <div class="cpa-topoffers-price">{{ ic.price }} ₽</div>
                  </div>
                </div>
              </div>
              <a @click.prevent.stop="scrollToSection('cpaForm')" class="cpa-btn-red-outlined">Получить +10% к ставке</a>
            </li>
          </ul>
        </div>
        <div
          v-show="!noControls"
          class="slider-carousel-btn-container"
          data-glide-el="controls"
        >
          <div ref="prevBtn" data-glide-dir="<" class="carousel-btn">
            <svg style="transform: rotate(180deg)" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="white" style="stroke:white;stroke:white;stroke-opacity:1;"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div ref="nextBtn" data-glide-dir=">" class="carousel-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="white" style="stroke:white;stroke:white;stroke-opacity:1;"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Prop, Ref} from 'vue-property-decorator';
import {Pages} from "~/model/entities/pages";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import { scrollToSectionHandler} from "~/model/entities/webtools/cpa/cpaMenu";

enum tabKeys {
  Mirco = 'micro',
  Debit = 'debit',
  Credit = 'credit'
}


@Component
export default class TopOffers extends Vue {
  @Prop(Boolean) noControls: boolean;
  @Ref("slider") slider;

  carousel = null
  tabs = [
    {name: 'Микрозаймы', key: tabKeys.Mirco},
    {name: 'Дебетовые карты', key: tabKeys.Debit},
    {name: 'Кредитные карты', key: tabKeys.Credit}
  ]

  titleByKey = {
    [tabKeys.Debit]: 'Дебетовая карта',
    [tabKeys.Credit]: 'Кредитная карта',
    [tabKeys.Mirco]: 'Микрозайм',
  }

  activeTab: string = tabKeys.Mirco

  mounted() {
    this.renderSlider()
  }

  changeTab(tab: tabKeys) {
    this.activeTab = tab
    console.log(this.carousel)

    setTimeout(() => {
      this.carousel.mount();
    }, 100)
  }

  scrollToSection(sectionId) {
    console.log('ss', sectionId)
    scrollToSectionHandler(sectionId)
  }

  renderSlider() {
    this.carousel = new Glide(".glide", {
      type: "carousel",
      gap: 20,
      perView: 3,
      breakpoints: {
        1200: {
          perView: 2,
        },
        600: {
          perView: 1,
        },
      },
    });
    this.carousel.on("run.before", (evt) => {
      const scrollSteps = (this as any).$vuetify.breakpoint.smAndDown
        ? 1
        : 3;

      evt.steps = evt.direction === ">" ? -scrollSteps : scrollSteps;
    });
    this.carousel.mount();
  }

  get ics() {
    const ics = {
      [tabKeys.Debit]: [
        {
          logo: require('@/assets/images/affiliate-program/banks/gazprombank.svg'),
          name: "МИР Supreme Газпромбанк ",
          price: 2960,
          cd: 'Активированная карта',
          ar: '27%',
          eps: '51 р.'
        },
        {
          logo: require('@/assets/images/affiliate-program/banks/gazprombank.svg'),
          name: "UnionPay Газпромбанк",
          price: 2600,
          cd: 'Активированная карта',
          ar: '26%',
          eps: '29 р.'
        },
        {
          logo: require('@/assets/images/affiliate-program/banks/alfaBanks.svg'),
          name: "Альфа Premium",
          price: 2000,
          cd: 'Активированная карта',
          ar: '19',
          eps: '72 р.'
        },
        {
          logo: require('@/assets/images/affiliate-program/banks/uralsibBank.svg'),
          name: "УРАЛСИБ - Прибыль",
          price: 1455,
          cd: 'Активированная карта',
          ar: '32%',
          eps: '75 р.'
        },
        {
          logo: require('@/assets/images/affiliate-program/banks/mkb.jpg'),
          name: "Московский кредитный банк",
          price: 1000,
          cd: 'Активированная карта',
          ar: '15%',
          eps: '55 р.'
        },

      ],
      [tabKeys.Credit]: [
        {
          logo: require('@/assets/images/affiliate-program/banks/gazprombank.svg'),
          name: "Газпромбанк 180 дней без %",
          price: 10_000,
          cd: 'Выданная карта',
          ar: '14%',
          eps: '76 р.'
        },
        {
          logo: require('@/assets/images/affiliate-program/banks/gazprombank.svg'),
          name: "Газпромбанк UnionPay дней без %",
          price: 7500,
          cd: 'Выданная карта',
          ar: '20%',
          eps: '95 р.'
        },
        {
          logo: require('@/assets/images/affiliate-program/banks/alfaBanks.svg'),
          name: "Альфа банк 365 дней без %",
          price: 4000,
          cd: 'Выданная карта',
          ar: '26%',
          eps: '100 р.'
        },
        {
          logo: require('@/assets/images/affiliate-program/banks/tinkoffBank.svg'),
          name: "Тинькофф Платинум",
          price: 4_200,
          cd: 'Выданная карта',
          ar: '11%',
          eps: '70 р.'
        },
        {
          logo: require('@/assets/images/cpa/topOffers/renesans.webp'),
          name: "Ренессанс кредит банк -  2 года без %",
          price: 3600,
          cd: 'Выданная карта',
          ar: '10%',
          eps: '175 р.'
        },
        {
          logo: require('@/assets/images/cpa/topOffers/rosbank.webp'),
          name: "Росбанк - #120наВСЁ Плюс ",
          price: 5600,
          cd: 'Выданная карта',
          ar: '10%',
          eps: '68 р.'
        },
      ],
      [tabKeys.Mirco]: [
        {
          logo: require('@/assets/images/affiliate-program/mfo/DengiSrazu_1.webp'),
          name: "ДеньгиСразу",
          price: 2860,
          cd: 'Выдача займа',
          ar: '28%',
          eps: '100 р.'
        },
        {
          logo: require('@/assets/images/cpa/topOffers/moneza.webp'),
          name: "Moneza",
          price: 1100,
          cd: 'Выдача займа',
          ar: '18%',
          eps: '9  р.'
        },
        {
          logo: require('@/assets/images/cpa/topOffers/oneclickmoney.webp'),
          name: "OneClickMoney",
          price: 1610,
          cd: 'Онлайн займ',
          ar: '22%',
          eps: '50 р.'
        },
        {
          logo: require('@/assets/images/cpa/topOffers/ezaem.webp'),
          name: "Ezaem",
          price: 1760,
          cd: 'Выдача займа',
          ar: '22%',
          eps: '64 р.'
        },
        {
          logo: require('@/assets/images/affiliate-program/mfo/Webbankir.webp'),
          name: "Webbankir",
          price: 2400,
          cd: 'Выдача займа',
          ar: '28%',
          eps: '100 р.'
        },
        {
          logo: require('@/assets/images/cpa/topOffers/creditseven.svg'),
          name: "Credit7",
          price: 1930,
          cd: 'Выдача займа',
          ar: '20%',
          eps: '40 р.'
        },
      ],
    };
    return ics[this.activeTab];
  }

  next() {
    (this.$refs.nextBtn as any).click();
  }

  prev() {
    (this.$refs.prevBtn as any).click();
  }

  carouserInterval = null;
  carouselScroll = 0;


}
</script>

<style lang="scss">
.cpa-topoffers {
  padding: 50px 0 0;
  @media (min-width: 901px) {
    padding: 70px 0 0;
  }

  .cpa-btn {
  }

  &-logo {
    max-width: 150px;
    object-fit: contain;
    max-height: 75px;
    @media (max-width: 1000px) {
      max-height: 65px;
      max-width: 130px;
    }
    img{
      border-radius: 5px;
    }
  }

  &-list {
    padding-top: 4px;
  }

  &-logobox {
    display: flex;
    align-items: center;
    min-height: 75px;
    margin-bottom: 8px;
  }

  &-head {
    display: flex;
    flex-direction: column;
    grid-gap: 40px;
    @media (min-width: 1201px) {
      flex-direction: row;
      justify-content: space-between;
    }
    @media (max-width: 900px) {
      grid-gap: 20px;
    }
  }

  &-subtt {
    color: #6C6CC3 !important;
    font-size: 12px;
    margin-bottom: 2px;
  }

  &-name {
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    margin-bottom: 27px;
    white-space: normal;
    @media (max-width: 900px) {
      font-size: 15px;
      line-height: 1.2;
    }
  }

  .cpa-btn-red-outlined {
    margin-top: 30px;
    @media (max-width: 900px) {
      margin-top: 13px;
    }
  }

  &-price {
    font-size: 36px;
    font-weight: 400;
    @media (max-width: 1000px) {
      font-size: 25px;
    }
  }

  &-grid {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    grid-gap: 20px;
  }

  &-it {
    color: #FFF;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.2;
    display: flex;
    margin-bottom: 8px;
    align-items: center;
    @media (max-width: 900px) {
      font-size: 12px;
    }

    &:before {
      content: '';
      display: block;
      border-radius: 50%;
      width: 6px;
      margin-right: 10px;
      height: 6px;
      background: #F41D77;
    }
  }

  &-tabs {
    grid-gap: 15px;
    margin-top: -10px;
    @media (min-width: 901px) {
      display: flex;
    }

    &-item {
      border-radius: 30px;
      min-width: 266px;
      color: #fff;
      background: #1A1A33;
      background: color(display-p3 0.102 0.102 0.1922);
      display: flex;
      height: 56px;
      padding: 9px 30px;
      border: 1px solid transparent;
      cursor: pointer;
      font-family: 'EuropeExt', sans-serif;
      justify-content: center;
      text-transform: uppercase;
      align-items: center;
      gap: 10px;
      flex-shrink: 0;
      transition: .3s;
      @media (max-width: 900px) {
        margin-bottom: 7px;
        font-size: 13px;
        height: 37px;
      }

      @media (min-width: 901px) {
        &:hover {
          color: #C66BFF;
          background: transparent;
          border-color: #C66BFF;
        }
      }

      &.active {
        pointer-events: none;
        color: #fff;
        background: #B251F6;
        background: color(display-p3 0.651 0.3412 0.9333);
        box-shadow: 0px 13px 34px 0px rgba(178, 81, 246, 0.86);
        box-shadow: 0px 13px 34px 0px color(display-p3 0.651 0.3412 0.9333 / 0.86);
      }
    }
  }
}

.cpa-topoffers {
  @media (max-width: 1000px) {
    .carousel-btn:not(.ignore-sm){
      width: 50px !important;
      height: 50px !important;
    }
  }
  .glide__arrow--disabled{
    opacity: 0.5;
    pointer-events: none;
  }
  .glide {
    position: relative;
    $slider-track-to-btns-padding: 50px;

    .glide__track {
      overflow-y: visible;
    }

    .glide__slides {
      overflow-y: visible;
      padding: 30px 0 23px;

      li {
        border-radius: 8px;
        background: #181830;
        padding: 15px 35px 33px 35px;
        transition: .45s;
        @media (min-width: 901px) {
          min-height: 338px;

          &:hover {
            background: #1B1B3A;
            background: color(display-p3 0.1059 0.1059 0.2196);
            box-shadow: 0px 30px 50px -38px rgba(0, 0, 0, 0.43);
            box-shadow: 0px 30px 50px -38px color(display-p3 0 0 0 / 0.43);
          }
        }
      }
    }

    .glide__slide {
      background: #B251F6;
      display: block;
    }

    .slider-carousel-btn-container {
      display: flex;
      justify-content: space-between;
      margin: auto;
      width: 128px;
      padding: 0 0 #{$slider-track-to-btns-padding};

      .carousel-btn {
        margin: 0;
        background: #B251F6;
        @media (min-width: 1000px) {
          position: absolute;
          margin-top: -50px;
          top: 50%;
          &:nth-child(1) {
            left: 0;
            transform: translate(-50%, -50%);
          }

          &:nth-child(2) {
            right: 0;
            transform: translate(50%, -50%);
          }
        }
        z-index: 10;


      }
    }

    @media (max-width: $w-sm) {
      .glide__slides {
        padding: 20px 0 25px;
      }
      .slider-carousel-btn-container {
        width: 135px;
        padding: 0;
      }
    }
  }
}

</style>
