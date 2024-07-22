<template>
  <div class="income-bg">
    <div class="income-content generic-container-1260 city-container">
      <DecoSpot
        :right="'-50'"
        :top="$vuetify.breakpoint.lgAndUp ? '100' : '50'"
        :diameter="$vuetify.breakpoint.lgAndUp ? '250' : '200'"
        blur="100"
      />
      <h2
        class="heading"
        style="font-weight: bold; text-align: center"
        v-text="`Сколько зарабатывают страховые агенты в ${city.title}`"
      />
      <h3
        class="subheading"
        style="
                   text-align: center;
                    opacity: 0.5;
                    color: black;
                    max-width: 950px;
                    margin: 10px auto;
                "
      >
        Указан приблизительный размер комиссионного вознаграждения от
        стоимости полиса.
        <span
          :style="{
                        display: $vuetify.breakpoint.mdAndUp ? 'block' : '',
                    }"
          v-text="'Индивидуален в каждом отдельном случае.'"
        />
      </h3>
      <v-layout>
        <v-flex class="chart-wrapper">
          <div class="chart" v-for="(circle, i) in circles" :key="i">
            <div class="single-chart">
              <svg viewBox="0 0 36 36" class="circular-chart">
                <path
                  class="circle-bg"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  class="circle"
                  :stroke-dasharray="[circle.percent, 100]"
                  d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="15" y="15.35" class="percentage">
                  до
                </text>
                <text
                  x="15"
                  y="25.35"
                  class="percentage-title"
                  v-text="`${circle.percent}%`"
                />
              </svg>
            </div>
            <span class="chart-title" v-text="circle.title"/>
          </div>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>
<script lang="ts">
import {Vue, Component, Prop} from "vue-property-decorator";
import DecoSpot from "~/components/common/deco/DecoSpot.vue";
import {CityModel} from "~/model/entities/city";

@Component({
  components: {
    DecoSpot,
  },
})
export default class Intro extends Vue {
  @Prop(Object) city: CityModel;
  circles = [
    {
      title: "Е-ОСАГО",
      percent: "25",
    },
    {
      title: "КАСКО",
      percent: "35",
    },
    {
      title: "Ипотека",
      percent: "45",
    },
    {
      title: "Имущество",
      percent: "50",
    },
    {
      title: "Юридические лица",
      percent: "60",
    },
    {
      title: "ДМС",
      percent: "20",
    },
  ];
}
</script>
<style lang="scss">
.income-bg {
  padding: 60px 0;
  position: relative;
  @media (max-width: $w-md) {
    padding: 45px 0;
  }
  @media (max-width: $w-sm) {
    padding: 25px 0;
  }

  &:before {
    content: url("~@/assets/images/city/income/bg-left.svg");
    position: absolute;
    bottom: 15%;
    left: 5%;
    z-index: 0;
    @media (max-width: $w-sm) {
      display: none;
    }
  }

  .income-content {
    .heading {
      font-size: 35px;
      font-family: Montserrat, sans-serif;
      @media (max-width: $w-md) {
        font-size: 19px;
      }
    }

    .subheading {
      font-size: 20px;
      font-family: Montserrat, sans-serif;
      @media (max-width: $w-md) {
        font-size: 14px;
      }
    }

    .description-wrapper {
      position: relative;
      width: fit-content;

      &:before {
        content: url("~@/assets/images/partnerPage/income/triangle-right.svg");
        position: absolute;
        bottom: 20%;
        right: -20%;
        z-index: 0;
      }
    }

    .ic-description {
      background: #f2f5ff;
      border-radius: 20px;
      max-width: 390px;
      padding: 42px 77px 0 41px;
      position: relative;
      overflow: hidden;
      min-height: 380px;
      font-size: 20px;
      @media (max-width: $w-md) {
        padding: 18px 67px 0 30px;
        font-size: 14px;
        min-height: 220px;
      }

      &:before {
        content: url("~@/assets/images/partnerPage/income/rectangle.svg");
        position: absolute;
        bottom: 5%;
        left: 55%;
        transform: translate(-50%);
        z-index: 0;
        @media (max-width: $w-md) {
          left: 65%;
          content: url("~@/assets/images/partnerPage/income/rectangleSm.svg");
        }
      }

      &:after {
        content: url("~@/assets/images/partnerPage/income/bgMd.png");
        position: absolute;
        bottom: 0;
        left: 65%;
        transform: translate(-50%, 12%);
        z-index: 0;
        @media (max-width: $w-md) {
          left: 75%;
          content: url("~@/assets/images/partnerPage/income/bgSm.png");
        }
      }
    }
  }
}

.city-container {
  .chart-wrapper {
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 50px;

    @media (max-width: $w-md) {
      margin: 25px auto;
      max-width: 800px;
    }
    @media (max-width: $w-sm) {
      max-width: 600px;
    }
    @media (max-width: $w-xs) {
      flex-wrap: wrap;
    }

    .chart {
      display: flex;
      flex-flow: column;
      flex-basis: calc(100% / 6);
      padding: 10px;
      @media (max-width: $w-md) {
        flex-basis: calc(100% / 3);
      }
      @media (max-width: $w-xs) {
        padding: 0;
      }

      .chart-title {
        margin: 5px 0;
        @media (max-width: $w-sm) {
          font-size: 12px;
        }
      }
    }

    .circular-chart {
      display: flex;
      height: 115px;
      overflow: hidden;
      margin: 0 auto;
      @media (max-width: $w-sm) {
        height: 77px;
      }

      .circle-bg {
        fill: none;
        stroke: rgba(123, 55, 232, 0.08);
        stroke-width: 2;
      }

      .circle {
        fill: none;
        stroke: #4578ff;
        stroke-width: 1.5;
        stroke-linecap: round;
        animation: progress 1s ease-out forwards;
      }

      .percentage {
        fill: #000000;
        font-size: 0.5em;
        text-anchor: middle;
        font-weight: normal;
        font-family: Montserrat, sans-serif;
        @media (max-width: $w-sm) {
          font-size: 0.4em;
        }

        &-title {
          transform: translateX(3px);
          font-size: 0.6em;
          text-anchor: middle;
          font-weight: bold;
          @media (max-width: $w-sm) {
            font-size: 0.5em;
          }
        }
      }
    }
  }
}
</style>
