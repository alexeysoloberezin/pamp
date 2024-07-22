<template>
  <div class="osago-profit">
    <div id="op" style="position: absolute; top: -100px"/>
    <div class="generic-container-1260">
      <h2 class="osago-profit-title mb-4" v-text="title"/>
      <div v-if="type == 'osago'" class="osago-profit-description">
        За многолетнюю практику наш сервис выплатил
        <b>более&nbsp;500&nbsp;млн рублей</b>! Большую часть из них наши
        агенты заработали на продаже полисов ОСАГО. Комиссионное
        вознаграждение зависит от продаваемого продукта и рассчитывается
        индивидуально в каждом отдельном случае.<br/>Мы выплачиваем
        <b>90% от суммы комиссии</b>, получаемой нами со&nbsp;сделки
      </div>
      <div v-if="type == 'kasko'" class="osago-profit-description">
        Стоимость полиса КАСКО начинается от 10-20&nbsp;тысяч, может доходить
        до 200-300&nbsp;тыс.&nbsp;руб. Среднее вознаграждение агента за 1&nbsp;полис
        КАСКО - 11&nbsp;тысяч. Самое крупное КВ по&nbsp;КАСКО на&nbsp;Пампаду - 62&nbsp;500&nbsp;руб.
      </div>
      <div class="profit-wrapper" style="position: relative; z-index: 1">
        <div class="osago-calc">
          <div class="calc-header">
            <v-layout wrap>
              <v-flex
                xs6
                style="
                                    display: flex;
                                    flex-flow: column;
                                    justify-content: space-between;
                                "
              >
                <div
                  v-text="`Количество ${itemPlural}`"
                  class="header-title"
                />
                <div
                  style="display: flex; align-items: center"
                  class="mt-3"
                >
                  <img
                    class="mr-3"
                    src="@/assets/images/osago/profit/file.svg"
                    alt="file"
                  />
                  <div
                    style="font-weight: bold"
                    v-text="polisCount"
                    class="header-count"
                    :key="polisCount"
                  />
                </div>
              </v-flex>
              <v-spacer/>
              <v-flex
                xs6
                style="
                                    display: flex;
                                    flex-flow: column;
                                    justify-content: space-between;
                                "
              >
                <div
                  v-text="'Ваш доход'"
                  class="header-title"
                />
                <div
                  class="mt-3"
                  style="display: flex; align-items: flex-end"
                >
                  <div
                    style="font-weight: bold"
                    v-text="yourProfit"
                    class="header-profit"
                    :key="yourProfit"
                  />
                  <span
                    v-html="'&nbsp;руб.'"
                    style="font-weight: bold"
                    :style="{
                                            margin: $vuetify.breakpoint.mdAndUp
                                                ? '5px 0'
                                                : '',
                                        }"
                  />
                </div>
              </v-flex>
              <v-flex
                xs12
                :class="{ 'mt-8': $vuetify.breakpoint.smAndUp }"
              >
                <v-slider
                  hide-details
                  v-model="polisCount"
                  :max="sliderMaxCount"
                  :min="sliderMinCount"
                  :step="sliderStep"
                  ref="slider"
                />
                <!--                <img style="max-width: 100%;width: 100%" src="@/assets/images/osago/profit/switcher.svg" alt="switcher">-->
              </v-flex>
            </v-layout>
          </div>
          <div class="calc-regnow">
            <div
              v-text="
                                'Зарегистрируйтесь и начните зарабатывать уже сегодня'
                            "
              class="regnow-title"
            />
            <zond-btn
              v-text="'Зарегистрироваться'"
              class="inverted mt-3"
            />
          </div>
        </div>
        <DecoSpot
          style="z-index: 0"
          :left="'250'"
          :top="$vuetify.breakpoint.lgAndUp ? '200' : '50'"
          :diameter="$vuetify.breakpoint.lgAndUp ? '250' : '200'"
          blur="60"
        />
        <div class="profit-sale-items">
          <h3
            class="profit-title"
            v-html="profitTitle"
            :style="`top: -${titleOffset}px; max-width: ${titleMaxWidth}px;`"
          />
          <div
            class="polis-wrapper"
            :class="{ 'mt-5': $vuetify.breakpoint.smAndDown }"
          >
            <div
              v-for="(polis, index) in saleItems"
              :key="index"
              class="osago-polis"
            >
              <img
                style="max-width: 100%"
                class="profit-icon"
                :src="polis.icon"
                alt="polis"
              />
              <div>
                <div
                  class="font-weight-bold mb-3 polis-title"
                  v-text="polis.title"
                />
                <v-layout
                  justify-space-between
                  :column="$vuetify.breakpoint.smAndDown"
                >
                  <div>
                    <div
                      v-text="
                                                `${localePrice(
                                                    polis.profit.max
                                                )} руб.`
                                            "
                      style="
                                                color: #ab54ff;
                                                font-weight: bold;
                                            "
                      class="polis-price"
                    />
                    <div
                      class="polis-description"
                      style="
                                                font-family: Roboto, sans-serif;
                                            "
                      v-text="'максимальный'"
                    />
                  </div>
                  <div
                    :class="{
                                            'mt-3': $vuetify.breakpoint
                                                .smAndDown,
                                            'ml-2': $vuetify.breakpoint.mdAndUp,
                                        }"
                  >
                    <div
                      class="polis-price"
                      v-text="
                                                `${localePrice(
                                                    polis.profit.average
                                                )} руб.`
                                            "
                      style="
                                                color: #000000;
                                                font-weight: bold;
                                            "
                    />
                    <div
                      class="polis-description"
                      v-text="'средний'"
                      style="
                                                color: #4e7eff;
                                                font-family: Roboto, sans-serif;
                                            "
                    />
                  </div>
                </v-layout>
              </div>
            </div>
          </div>
          <div
            class="mt-10"
            style="display: flex;flex-flow: column;align-items: center;"
          >
            <div
              style="font-family: Roboto, sans-serif;font-size: 20px;"
              v-text="'Вывод на карту или счет юр.лица'"
            />
            <img
              class="mt-3"
              style="max-width: 100%; height: 42px"
              src="@/assets/images/osago/profit/cards.png"
              alt="cards"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Ref, Prop} from "vue-property-decorator";

@Component({})
export default class Profit extends Vue {
  @Prop({default: "osago"}) type: "osago" | "fin" | "hr" | "kasko";
  @Prop({default: null}) titleOverride: string;

  get title() {
    if (this.titleOverride) return this.titleOverride;
    if (this.type === "osago") return "Сколько зарабатывают агенты?";
    return "Сколько можно зарабатывать?";
  }

  presets = {
    osago: {
      title: "Вознаграждение по ОСАГО зависит от региона и страховой компании",
      titleOffset: "80",
      titleMaxWidth: "450",
      saleProfit: 1200,
      saleAverage: 1200,
      saleMax: 9100,
      saleText: "Доход с одного полиса",
      partnerAverage: 22000,
      partnerMax: 824_000,
      itemPlural: "полисов",

      sliderMinCount: 1,
      sliderMaxCount: 20,
      sliderStep: 1,
    },
    fin: {
      title: "Размер вознаграждения по финансовым офферам зависит от продукта.<br> Например, вознаграждение по кредитным картам в 3-5 раз больше, чем по дебетовым.",
      titleOffset: "130",
      titleMaxWidth: "600",
      saleProfit: 2000,
      saleAverage: 1200,
      saleMax: 12000,
      saleText: "Доход с продажи одного банковского продукта",
      partnerAverage: 22000,
      partnerMax: 824_000,
      itemPlural: "продаж",

      sliderMinCount: 2,
      sliderMaxCount: 80,
      sliderStep: 2,
    },
    hr: {
      title: "Размер вознаграждения по HR офферам зависит от типа целевого действия и вакансии. Выше оплачиваются действия «Выход на работу»",
      titleOffset: "100",
      titleMaxWidth: "auto",
      saleProfit: 2000,
      saleAverage: 1200,
      saleMax: 12000,
      saleText: "Доход с выхода на работу одного курьера",
      partnerAverage: 22000,
      partnerMax: 824_000,
      itemPlural: "продаж",
      sliderMinCount: 1,
      sliderMaxCount: 20,
      sliderStep: 1,
    },
    kasko: {
      title: "Вознаграждение по КАСКО зависит от страховой компании",
      titleOffset: "100",
      titleMaxWidth: "auto",
      saleProfit: 11000,
      saleAverage: 11100,
      saleMax: 150500,
      saleText: "Доход с одного полиса",
      partnerAverage: 33000,
      partnerMax: 231_000,
      itemPlural: "продаж",
      sliderMinCount: 1,
      sliderMaxCount: 20,
      sliderStep: 1,
    },
  };

  polisCount: number = 1;

  sliderMinCount = 1;
  sliderMaxCount = 20;
  sliderStep = 1;

  saleProfit: number = 1200;
  profitTitle: string =
    "Вознаграждение по ОСАГО зависит от региона и страховой компании";
  itemPlural: string = "полисов";
  titleOffset = "80";
  titleMaxWidth = "450";

  get yourProfit() {
    return this.localePrice(this.polisCount * this.saleProfit);
  }

  saleItems: SaleItem[] = [
    {
      title: "Доход с одного полиса",
      icon: require("@/assets/images/osago/profit/polis.svg"),
      profit: {max: 9100, average: this.saleProfit},
    },
    {
      title: "Доход партнера в месяц",
      icon: require("@/assets/images/osago/profit/calendar.svg"),
      profit: {max: 842_000, average: 22_000},
    },
  ];

  created() {
    const saleSingle = this.saleItems[0];
    const salePartner = this.saleItems[1];
    const currPreset = this.presets[this.type];
    saleSingle.title = currPreset.saleText;
    saleSingle.profit.max = currPreset.saleMax;
    saleSingle.profit.average = currPreset.saleAverage;
    salePartner.profit.max = currPreset.partnerMax;
    salePartner.profit.average = currPreset.partnerAverage;
    this.saleProfit = currPreset.saleProfit;
    this.profitTitle = currPreset.title;
    this.titleOffset = currPreset.titleOffset;
    this.titleMaxWidth = currPreset.titleMaxWidth;
    this.itemPlural = currPreset.itemPlural;
    this.sliderMaxCount = currPreset.sliderMaxCount
    this.sliderMinCount = currPreset.sliderMinCount
    this.sliderStep = currPreset.sliderStep
  }

  @Ref("slider") slider;

  mounted() {
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };
    let callbackFunc = (entries, observer) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          this.increment();
        }
      });
    };
    let observer = new IntersectionObserver(callbackFunc, options);
    observer.observe(this.slider.$el);
  }

  increment() {
    let intervalId = setInterval(() => {
      if (this.polisCount === 12) return clearInterval(intervalId);
      this.polisCount += 1;
    }, 50);
  }

  localePrice(price: number) {
    return price.toLocaleString('ru');
  }
}
type SaleItem = {
  title: string;
  icon: string;
  profit: {
    max: number;
    average: number;
  };
};
</script>

<style lang="scss">
.osago-profit {
  padding: 70px 0;
  position: relative;
  font-family: Montserrat, sans-serif;
  @media (max-width: $w-sm) {
    padding: 25px 0;
  }

  .osago-profit-title {
    text-align: center;
    font-weight: bold;
    font-family: Montserrat, sans-serif;
    font-size: 35px;
    @media (max-width: $w-sm) {
      font-size: 19px;
    }
  }

  .profit-title {
    width: 105%;
    margin: auto;
    left: 50%;
    transform: translateX(-50%);
    font-size: 22px;
    line-height: 1.3;
    font-weight: bold;
    font-family: Montserrat, sans-serif;
    text-align: center;
    position: absolute;
    @media (max-width: $w-sm) {
      position: static;
      font-size: 19px;
      transform: unset;
    }
  }

  .profit-icon {
    @media (max-width: $w-sm) {
      height: 58px;
    }
  }

  .osago-profit-description {
    text-align: center;
    font-family: Montserrat, sans-serif;
    font-size: 20px;
    font-weight: 500;
    max-width: 1140px;
    @media (max-width: $w-sm) {
      font-size: 15px;
      line-height: 21px;
      margin-top: 10px;
    }
  }

  .profit-wrapper {
    display: grid;
    grid-template-columns: minmax(0, 440px) minmax(0, 590px);
    justify-content: flex-start;
    grid-gap: 70px;
    margin-top: 150px;
    @media (max-width: $w-sm) {
      margin-top: 80px;
      grid-template-columns: minmax(0, 500px);
      justify-content: center;
    }
  }

  .osago-calc {
    box-shadow: 0px 5px 25px rgba(203, 207, 216, 0.28);
    border-radius: 14px;
    display: flex;
    flex-flow: column;
    position: relative;
    z-index: 1;
    background: #ffffff;

    &:before {
      position: absolute;
      content: url("@/assets/images/osago/profit/pampadovich.png");
      left: 50%;
      transform: translateX(-50%);
      top: -80px;
      @media (max-width: $w-sm) {
        top: -50px;
        content: url("@/assets/images/osago/profit/pampadovich-sm.png");
      }
    }

    &:after {
      position: absolute;
      content: url("@/assets/images/osago/profit/bg-left.svg");
      left: -100px;
      top: -200px;
    }

    .calc-header {
      padding: 175px 55px 30px 45px;

      .v-slider {
        cursor: pointer;
      }

      .v-slider__thumb {
        position: relative;

        &:before {
          display: none;
        }

        &:after {
          position: absolute;
          z-index: 1;
          content: url("@/assets/images/osago/profit/thumb.svg");
          left: 50%;
          top: 5px;
        }
      }

      @media (max-width: $w-sm) {
        padding: 60px 22px 10px;
      }
    }

    .calc-regnow {
      margin-top: auto;
      padding: 25px 55px 25px 45px;
      background: linear-gradient(0deg, #965cf5 0%, #8e68ff 100%);
      border-radius: 0 0 14px 14px;
      @media (max-width: $w-sm) {
        padding: 20px 22px;
      }
    }

    .regnow-title {
      color: #ffffff;
      font-weight: bold;
    }
  }

  .polis-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }

  .osago-polis {
    padding: 35px 40px 25px;
    display: grid;
    grid-template-columns: 73px 1fr;
    grid-gap: 40px;
    align-items: center;
    box-shadow: 0 5px 25px rgba(203, 207, 216, 0.28);
    border-radius: 14px;
    transition: 0.3s;
    outline: 2px solid transparent;
    background: #ffffff;

    .polis-title {
      font-size: 18px;
      max-width: 262px;
      line-height: 1.3;
      @media (max-width: $w-sm) {
        font-size: 15px;
      }
    }

    .polis-price {
      font-size: 27px;
      @media (max-width: $w-sm) {
        font-size: 20px;
      }
    }

    .polis-description {
      font-size: 15px;
      @media (max-width: $w-sm) {
        font-size: 13px;
      }
    }

    @media (max-width: $w-md) {
      align-items: flex-start;
      padding: 25px 30px 25px;
      grid-gap: 20px;
    }
    @media (max-width: $w-sm) {
      padding: 15px 20px 20px;
    }

    &:hover {
      outline: 2px solid #447eff;
    }
  }

  .header-title {
    color: #7d8d93;
    font-size: 15px;
    font-family: Roboto, sans-serif;
    @media (max-width: $w-sm) {
      font-size: 12px;
    }
  }

  .profit-sale-items {
    position: relative;

    &:after {
      position: absolute;
      content: url("@/assets/images/osago/profit/bg-right.svg");
      right: -100px;
      bottom: -50px;
    }
  }

  .header-count,
  .header-profit {
    font-size: 27px;
    font-family: Montserrat, sans-serif;
    @media (max-width: $w-sm) {
      font-size: 21px;
    }
  }
}
</style>
