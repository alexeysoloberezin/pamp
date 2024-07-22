<template>
  <div class="income-bg">
    <div class="income-content generic-container-1260">
      <DecoSpot
        :right="$vuetify.breakpoint.lgAndUp ? '100' : '-50'"
        :top="$vuetify.breakpoint.lgAndUp ? '100' : '50'"
        :diameter="$vuetify.breakpoint.lgAndUp ? '250':'200'"
        blur="100"
      />
      <h2 class="heading" style="font-weight: bold;text-align: center">
        Сколько зарабатывают страховые агенты
        <span
          :style="{display: $vuetify.breakpoint.lgAndUp ? 'block' : ''}"
          v-text="ic.url === ics.Sogaz ? `в cтраховой компании «${ic.name}»` : `в «${ic.name}»`"
        />
      </h2>
      <h3 class="subheading" style="text-align: center;margin: 25px 0;opacity: 0.5">
        <span v-html="subheading"/>
        <span :style="{display: $vuetify.breakpoint.lgAndUp ? 'block' : ''}"
              v-text="'Расчет индивидуален в каждом отдельном случае.'"/>
      </h3>
      <v-layout :column="$vuetify.breakpoint.mdAndDown">
        <v-spacer/>
        <v-flex
          :style="{margin: $vuetify.breakpoint.mdAndDown ? '25px auto' : '',maxWidth: $vuetify.breakpoint.mdAndDown ? '500px' : ''}"
          class="chart-wrapper">
          <div class="chart" v-for="(circle,i) in circles" :key="i">
            <div class="single-chart">
              <svg viewBox="0 0 36 36" class="circular-chart">
                <path class="circle-bg"
                      d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path class="circle"
                      :stroke-dasharray="[circle.percent, 100]"
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="15" y="15.35" class="percentage">до</text>
                <text x="15" y="25.35" class="percentage-title" v-text="`${circle.percent}%`"/>
              </svg>
            </div>
            <span class="chart-title" v-text="circle.title"/>
          </div>
        </v-flex>
        <v-flex sm12 md4>
          <div class="description-wrapper" :style="{margin: $vuetify.breakpoint.mdAndDown ? '0 auto' : ''}">
            <div class="ic-description">
              <p style="position: relative;z-index: 1" v-html="icDescription"/>
            </div>
          </div>
        </v-flex>
      </v-layout>
      <div
        v-if="ic.url === ics.Sogaz"
        style="max-width: 800px"
        class="mt-4"
        v-html="'В страховой компании «СОГАЗ» вам будет доступно как оформление одного полиса онлайн, так&nbsp;и&nbsp;проведение сделок по крупным автопаркам и компаниям'"/>
    </div>
  </div>
</template>
<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import DecoSpot from "~/components/common/deco/DecoSpot.vue";
import {IcModel} from "~/model/entities/ic-partner";
import { IcUrl } from "~/urls";

@Component({
  components: {
    DecoSpot,
  }
})
export default class Intro extends Vue {
  @Prop(Object) ic: IcModel;
  ics = IcUrl;
  circles = [
    {
    title: 'Е-ОСАГО',
    percent: '25',
  }, {
    title: 'КАСКО',
    percent: '35',
  }, {
    title: 'Ипотека',
    percent: '45',
  }, {
    title: 'Имущество',
    percent: '50',
  }, {
    title: 'Юридические лица',
    percent: '60',
  }, {
    title: 'ДМС',
    percent: '20',
  }]

  get subheading(){
    const subheadings = {
        [IcUrl.Sogaz]: "Указан приблизительный размер комиссионного вознаграждения от&nbsp;стоимости&nbsp;полиса,&nbsp;которое&nbsp;получают&nbsp;брокеры",
        [IcUrl.Vsk]: "Указан приблизительный размер комиссионного вознаграждения от&nbsp;стоимости&nbsp;полиса, которое&nbsp;получают&nbsp;брокеры&nbsp;страховой&nbsp;компании&nbsp;ВСК",
    }
    const defaultSubheading = "Указан приблизительный размер комиссионного вознаграждения от стоимости полиса, которое получают агенты"

    return subheadings[this.ic.url] ?? defaultSubheading
  }

  get icDescription(){
    const descriptions = {
      [IcUrl.Reso]: `В СК&nbsp;«РЕСО» вам будет доступно как оформление одного полиса онлайн, так и проведение сделок по крупным автопаркам и&nbsp;компаниям`,
    }
    const defaultDescription = `В СК&nbsp;«${this.ic.name}» вам будет доступно как оформление одного полиса онлайн, так и проведение сделок по крупным автопаркам и&nbsp;компаниям`
    return descriptions[this.ic.url] ?? defaultDescription
  }

  created() {
    if (this.ic.url === this.ics.Tinkoff) {
      this.circles.find(item => item.title === 'Е-ОСАГО').percent = '10';
    }
  }
}
</script>
<style lang="scss">
.income-bg {
  padding: 60px 0;
  position: relative;
  @media (max-width: $w-md) {
    padding: 45px 0;
  }

  &:before {
    content: url("~@/assets/images/partnerPage/income/triangle-left.svg");
    position: absolute;
    bottom: 35%;
    left: 10%;
    z-index: 0;
    @media (max-width: $w-sm) {
      display: none;
    }
  }
;

  .income-content {
    .heading {
      font-size: 40px;
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
      background: #F2F5FF;
      border-radius: 20px;
      max-width: 390px;
      padding: 42px 42px 0 42px;
      position: relative;
      overflow: hidden;
      min-height: 380px;
      font-size: 20px;
      @media (max-width: $w-md) {
        padding: 18px 18px 0 30px;
        font-size: 14px;
        min-height: 180px;
      }
      @media (max-width: $w-xs) {
        padding: 18px 64px 0 30px;
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
    ;

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
    ;
    }
  }
}

.chart-wrapper {
  display: flex;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;

  .chart {
    display: flex;
    flex-flow: column;
    flex-basis: 33.333333%;
    padding: 10px;

    .chart-title {
      margin: 5px 0;
      @media (max-width: $w-sm) {
        font-size: 12px;
      }
    }

    @media (max-width: $w-md) {
      padding: 0;
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
      stroke: #4578FF;
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

      &-title {
        transform: translateX(3px);
        font-size: 0.6em;
        text-anchor: middle;
        font-weight: bold;
      }
    }
  }
}


</style>
