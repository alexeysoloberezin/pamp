<template>
  <div>
    <div class="registry-bg">
      <div class="generic-container-1260">
        <v-layout justify-space-between wrap :column="$vuetify.breakpoint.smAndDown">
          <v-flex sm12 md6 align-self-center order-xs1 order-md-0>
            <div class="regions-card" :class="{'my-5': $vuetify.breakpoint.smAndDown}">
              <div class="card-title" v-text="'Агенты / Брокеры'"/>
              <v-layout align-center style="margin: 25px 0">
                <div class="card-select" v-text="'Физические лица'" :style="{opacity: isJuridical ? '0.4' : ''}"/>
                <v-switch v-model="isJuridical" aria-label="Выбор типа агента" hide-details :ripple="false" style="margin: 0 15px !important;"/>
                <div class="card-select" v-text="'Юридические лица'" :style="{opacity: isJuridical ? '' : '0.4'}"/>
              </v-layout>
              <input class="card-input" placeholder="ФИО / Наименование агента"/>
              <zond-btn :juridical="isJuridical" class="card-btn" v-text="'Зарегистрироваться'"/>
              <div class="mt-3" v-if="ic.url === ics.Ingosstrah">
                  Нужна помощь с регистрацией? Свяжитесь с агентами нашей поддержки пользователей в
                  <span @click="openChat" class="open-chat">чате на сайте</span>,
                  и мы обязательно вам поможем! Наши консультанты сделают всё, чтобы проблема была решена в этот же день
              </div>
            </div>
          </v-flex>
          <v-flex sm12 md6 order-xs-0 order-md1>
            <h2 class="heading" :style="{textAlign: $vuetify.breakpoint.md ? 'center' : ''}" v-html="icText.heading"/>
            <h3 class="subheading" v-html="icText.subheading"/>
          </v-flex>
        </v-layout>
      </div>
    </div>
    <div class="regions-bg">
      <div class="generic-container-1260">
        <v-layout class="regions-description">
          <v-flex>
            <h2 class="description-title" v-html="icText.regionsTitle"/>
            <h3 class="description-subtitle" v-if="ic.url === ics.Sogaz">
              На Пампаду можно работать <span style="font-weight: bold" v-text="'из любого региона России'"/>
              и оформлять полисы для клиентов почти со всей России
            </h3>
            <h3 class="description-subtitle" v-if="ic.url === ics.Vsk">
              На Пампаду можно работать <span style="font-weight: bold" v-text="'из любого региона России'"/>
              и оформлять ОСАГО и другие полисы для клиентов почти со всей России
            </h3>
            <h3 class="description-subtitle" v-else>
              На Пампаду можно работать <span style="font-weight: bold" v-text="'из любого региона России как агент'"/>
              и оформлять полисы для клиентов почти со всей России
            </h3>
          </v-flex>
          <Map :ic="ic" class="map"/>
        </v-layout>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {Vue, Component, Prop} from "vue-property-decorator";
import {IcModel} from "~/model/entities/ic-partner";
import { IcUrl } from "~/urls";

import Map from "@/components/ic-partner/Map.vue";

type RegionsText = {
  heading: string;
  subheading: string;
  regionsTitle: string;
}

@Component({components: {Map}})
export default class Regions extends Vue {
  @Prop(Object) ic: IcModel;
  isJuridical = false;
  ics = IcUrl;

  get icText(): RegionsText {
    const ics = {
      [IcUrl.Reso]: {
        heading: `Где проверить реестр СК&nbsp;«РЕСО»?`,
        subheading: `На сайте СК&nbsp;«РЕСО» доступна обязательная проверка по реестру действующих страховых агентов и брокеров`,
        regionsTitle: `В каких регионах работает СК&nbsp;«РЕСО»`,
      },
      [IcUrl.Ingosstrah]: {
        heading: `Где проверить реестр страховых агентов СПАО&nbsp;«${this.ic.name}»?`,
        subheading: `На сайте СК&nbsp;«${this.ic.name}» доступна обязательная проверка по реестру действующих страховых агентов и брокеров`,
        regionsTitle: `В каких регионах работает СПАО&nbsp;«Ингосстрах»`
      },
      [IcUrl.Sogaz] : {
        heading: `Где проверить реестр СК&nbsp;«${this.ic.name}»?`,
        subheading: `На сайте страховой компании «${this.ic.name}» доступна обязательная проверка по реестру действующих страховых агентов и брокеров`,
        regionsTitle: `В каких регионах работает страховая&nbsp;компания&nbsp;«${this.ic.name}»`
      },
      [IcUrl.Vsk] : {
        heading: `Где проверить реестр СК&nbsp;«${this.ic.name}»?`,
        subheading: `На сайте страховой компании «${this.ic.name}» доступна обязательная проверка по реестру действующих страховых агентов и брокеров`,
        regionsTitle: `В каких регионах работает СК&nbsp;«${this.ic.name}»`
      },
    }
    const defaultText = {
      heading: `Где проверить реестр СК&nbsp;«${this.ic.name}»?`,
      subheading: `На сайте СК&nbsp;«${this.ic.name}» доступна обязательная проверка по реестру действующих страховых агентов и брокеров`,
      regionsTitle: `В каких регионах работает СК&nbsp;«${this.ic.name}»`,
    }
    return ics[this.ic.url] ?? defaultText;
  }

  openChat() {
    (window as any).carrotquest?.open();
  }
}
</script>
<style lang="scss">
.registry-bg {
  background: #F9F9FC;
  padding: 85px 0 50px 0;
  position: relative;
  max-height: 255px;
  z-index: 1;

  .heading {
    font-size: 35px;
    font-weight: bold;
    line-height: 40px;
    font-family: Montserrat, sans-serif;
    max-width: 530px;
    @media (max-width: $w-md) {
      font-size: 19px;
      line-height: 23px;
      text-align: left;
      margin: 0 auto;
    }
    @media (max-width: $w-xs) {
      text-align: left;
    }
  }

  .subheading {
    font-size: 18px;
    max-width: 530px;
    margin-top: 100px;
    @media (max-width: $w-md) {
      font-size: 14px;
      padding: 10px 0;
      text-align: center;
      margin: 0 auto;
    }
    @media (max-width: $w-xs) {
      text-align: left;
    }
  }

  .regions-card {
    padding: 40px;
    box-shadow: 0px 5px 25px rgba(203, 207, 216, 0.28);
    border-radius: 16px;
    max-width: 560px;
    background: #FFFFFF;

    .v-input--switch:not(#ovrd) {
      .v-input--selection-controls__input {
        margin-right: 0px;
        height: 18px;
      }

      label {
        padding-left: 8px;
        font-size: 14px;
        line-height: 1;
        color: #000000;
      }

      &.v-input--is-disabled {
        .v-input--switch__track {
          filter: grayscale(1);
        }
      }

      &.dim-background {
        &.v-input--is-dirty {
          .v-input--switch__track {
            box-shadow: inset 0px 0px 0px 0px #cac5d6;
            background-position: 0% 50%;
          }
        }

        .v-input--switch__track {
          background-size: 300%;
          background: linear-gradient(35deg, #bbbbbb 0%, #c7c7c7 25%, #e9e9e9 50%, #fff 65%, #fff 100%) 100% 50%;
        }
      }

      .v-input--switch__track {
        top: calc(50% - 9px);
        width: 32px;
        height: 18px;
        background-size: 300%;
        background-position: 100% 50%;
        box-shadow: inset 0px 0px 0px 1px #cac5d6;
        box-sizing: border-box;
        border-radius: 2px;
        opacity: 1;
        transition: background-color 0.3s, box-shadow 0.3s,
        background-position 0.3s;
      }

      .v-input--switch__thumb {
        width: 20px;
        height: 20px;
        background: #ffffff;
        border: 1px solid #b9b4c4;
        box-sizing: border-box;
        box-shadow: 0px 2px 4px rgba(217, 217, 217, 0.5);
        border-radius: 2px;
        top: calc(50% - 10px);
        transition: transform 0.3s, width 0.3s, height 0.3s, border-color 0.3s,
        top 0.3s;
      }
    }

    .v-input--is-dirty:not(#ovrd) {
      .v-input--switch__thumb {
        width: 16px;
        height: 16px;
        background: #ffffff;
        border: 1px solid #7d8d93;
        box-sizing: border-box;
        border-radius: 2px;
        top: calc(50% - 8px);
        transform: translate(17px, 0);
      }

      .v-input--switch__track {
        box-shadow: inset 0px 0px 0px 0px #cac5d6;
        background-position: 0% 50%;
      }
    }

    @media (max-width: $w-sm) {
      padding: 17px 17px 30px 17px;
    }

    .card-select {
      font-size: 18px;
      font-weight: 500;
      transition: .3s;
      @media (max-width: $w-sm) {
        font-size: 14px;
      }
    }

    .card-title {
      font-family: Montserrat, sans-serif;
      font-weight: bold;
      font-size: 28px;
      @media (max-width: $w-sm) {
        font-size: 19px;
      }
    }

    .open-chat {
      text-decoration: underline;
      cursor: pointer;
      color: #8E68FF;
      font-weight: bold;
    }

    .card-input {
      width: 100%;
      padding: 12px 18px;
      background: #F9F9FC;
      @media (max-width: $w-sm) {
        font-size: 13px;
      }
    }

    .card-btn {
      margin-top: 15px;
      @media (max-width: $w-xs) {
        width: 100%;
      }
    }

  }

  &:before {
    content: url("~@/assets/images/partnerPage/registry/triangle.svg");
    position: absolute;
    top: 10%;
    left: 10%;
    transform: translate(-50%);
    z-index: 0;
    @media (max-width: $w-md) {
      content: none;
    }
  }

  @media (max-width: $w-md) {
    padding: 37px 0 25px 0;
  }
  @media (max-width: $w-sm) {
    max-height: 110px;
  }
}

.regions-bg {
  background: white;
  position: relative;
  padding: 300px 0 100px;
  @media (max-width: $w-md) {
    padding: 150px 0 100px;
  }
  @media (max-width: $w-sm) {
    padding: 425px 0 20px 0;
  }

  .regions-description {
    .description-title {
      font-family: Montserrat, sans-serif;
      font-size: 35px;
      font-weight: 700;
      max-width: 520px;
      line-height: 40px;
      position: relative;

      &:before {
        position: absolute;
        content: url("~@/assets/images/partnerPage/registry/bg-left.svg");
        left: -20%;
        bottom: -80%;
        @media (max-width: $w-sm) {
          display: none;
        }
      }

      @media (max-width: $w-md) {
        text-align: center;
        margin: 0 auto;
      }
      @media (max-width: $w-sm) {
        font-size: 19px;
      }
      @media (max-width: $w-xs) {
        line-height: 23px;
        text-align: left;
      }
    }

    .description-subtitle {
      font-family: Montserrat, sans-serif;
      font-size: 20px;
      margin-top: 40px;
      max-width: 450px;
      @media (max-width: $w-md) {
        text-align: center;
        margin: 10px auto;
      }
      @media (max-width: $w-sm) {
        font-size: 14px;
      }
      @media (max-width: $w-xs) {
        margin-top: 20px;
        text-align: left;
      }
    }
  }

  .map {
    position: absolute;
    right: 0;
    bottom: -10%;
    @media (max-width: $w-md) {
      bottom: -50px;
      opacity: 0.1;
      width: 500px;
      height: 500px;
    }
    @media (max-width: $w-xs) {
      right: -150px;
      bottom: -150px;
    }
  }
}
</style>
