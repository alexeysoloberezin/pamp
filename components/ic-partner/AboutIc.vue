<template>
  <div class="about-ic">
    <div class="generic-container-1260">
      <div class="ic-wrapper">
        <h2 class="heading">
          О компании
          <span :style="{display: $vuetify.breakpoint.lgAndUp ? 'block':''}"
                v-text="`«${isAlfa ? 'Альфа Страхование' : ic.name}»`"/>
        </h2>
        <div v-if="ic.aboutTitle || ic.aboutDescription" class="subheading">
          <h3 v-text="ic.aboutTitle" class="ic-title"/>
          <h3 style="margin-top: 25px" class="ic-subtitle" v-text="ic.aboutDescription"/>
          <h3 class="mt-4" v-html="aboutText"/>
        </div>
      </div>
      <v-layout :column="$vuetify.breakpoint.mdAndDown" :style="{marginTop:$vuetify.breakpoint.lgAndUp ? '100px' : ''}"
                class="ic-stats">
        <v-flex :style="{margin: $vuetify.breakpoint.mdAndDown ? '10px 0' : ''}" class="ic-item">
          Уставный капитал:
          <span class="item-stat" style="display: block" v-text="ic.capital"/>
        </v-flex>
        <v-flex :style="{margin: $vuetify.breakpoint.mdAndDown ? '10px 0' : ''}" class="ic-item">
          Рейтинг надежности:
          <span class="item-stat" style="display: block" v-text="ic.rating"/>
        </v-flex>
        <v-flex :style="{margin: $vuetify.breakpoint.mdAndDown ? '10px 0' : ''}" class="ic-item">
          Прогноз:
          <span class="item-stat" style="display: block" v-text="ic.prediction"/>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { IcModel } from "~/model/entities/ic-partner";
import { IcUrl } from "~/urls";

@Component
export default class AboutIc extends Vue {
  @Prop(Object) ic: IcModel;

  get isAlfa() {
    return this.ic.url === IcUrl.AlfaStrahovanie;
  }

  get aboutText() {
    const icText = {
      [IcUrl.Reso] : `Хотите стать участником СК «РЕСО»? Регистрируйтесь на нашей платформе и оформляйте полисы этой и других компаний сразу после регистрации.`,
      [IcUrl.Vsk] : `Хотите стать агентом СК «ВСК»? Регистрируйтесь на нашей платформе и оформляйте полисы сразу после регистрации.`    }

    const defaultText = `Хотите стать агентом СК «${this.ic.name}»? Регистрируйтесь на нашей платформе и оформляйте полисы этой и других страховых компаний сразу после регистрации.`
    return icText[this.ic.url] ?? defaultText;
  }
}
</script>
<style lang="scss">
.about-ic {
  background: linear-gradient(0deg, #965CF5 0%, #8E68FF 100%);
  position: relative;
  color: white;
  padding: 100px 0;
  @media (max-width: $w-md) {
    padding: 35px 0;
  }

  &:after {
    content: url("~@/assets/images/partnerPage/aboutIc/triangle1.svg");
    position: absolute;
    top: 40%;
    left: 15%;
    transform: translateX(-53%);
    z-index: 0;
  }

  &:before {
    content: url("~@/assets/images/partnerPage/aboutIc/triangle2.svg");
    position: absolute;
    top: 50%;
    right: 10%;
    z-index: 0;
  }

  .ic-wrapper {
    display: grid;
    grid-template-columns: minmax(300px, 400px) 1fr;
    grid-gap: 25px;
    @media (max-width: $w-md) {
      grid-template-columns: 1fr;
      grid-gap: 10px;
    }

    .heading {
      font-size: 40px;
      font-family: Montserrat, sans-serif;
      font-weight: 700;
      line-height: 45px;
      @media (max-width: $w-md) {
        text-align: center;
        font-size: 30px;
        line-height: 30px;
      }
      @media (max-width: $w-sm) {
        text-align: left;
        font-size: 23px;
        line-height: normal;
      }
    }

    .subheading {
      font-size: 25px;
      @media (max-width: $w-md) {
        text-align: center;
        font-size: 14px;
        margin: 15px auto;
        max-width: 500px;
      }
      @media (max-width: $w-sm) {
        text-align: left;
        margin: 15px 0;
      }
    }
  }

  .ic-stats {
    display: flex;
    justify-content: space-between;

    .ic-item {
      line-height: 40px;
      font-size: 20px;
      font-weight: 400;
      opacity: .9;
      @media (max-width: $w-md) {
        text-align: center;
        font-size: 12px;
      }
      @media (max-width: $w-sm) {
        text-align: left;
      }

      .item-stat {
        font-size: 50px;
        font-family: Montserrat, sans-serif;
        line-height: 40px;
        font-weight: 700;
        @media (max-width: $w-md) {
          font-size: 30px;
          line-height: 20px;
        }
      }
    }
  }
}
</style>
