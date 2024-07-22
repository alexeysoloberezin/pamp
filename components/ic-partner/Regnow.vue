<template>
  <div class="ic-regnow">
      <div class="generic-container-1260">
        <v-layout :align-center="$vuetify.breakpoint.lgAndUp" :column="$vuetify.breakpoint.mdAndDown">
          <v-spacer/>
          <v-flex>
              <h2
                  class="h3 ic-regnow-title"
                  v-text="icText.title"
              />
          </v-flex>
          <v-flex :style="{marginTop: $vuetify.breakpoint.mdAndDown ? '25px' : ''}">
            <zond-btn
                style="min-width: 45px;min-height: 44px;filter: drop-shadow(0px 2px 25px #6243BF);"
                class="btn inverted ic-regnow-btn"
                v-text="'Попробовать'"
            />
          </v-flex>
        </v-layout>
      </div>
  </div>
</template>
<script lang="ts">
import {Vue, Component, Prop} from "vue-property-decorator";
import {IcModel} from "~/model/entities/ic-partner";
import { IcUrl } from "~/urls";

type RegnowText = {
  title: string;
}


@Component
export default class Regnow extends Vue {
  @Prop({default: () => {}}) ic: IcModel;

  get icText(): RegnowText {
    const ics = {
      [IcUrl.Reso] : {
        title: `Используйте наш сервис и начните зарабатывать на страховании уже сегодня!`,
      },
      [IcUrl.Ingosstrah] : {
        title: 'Попробуйте воспользоваться нашим сервисом и начните зарабатывать на страховании уже сегодня!'
      },
      [IcUrl.Vsk] : {
        title: `Используйте наш сервис и начните зарабатывать на страховании уже сегодня!`,
      },
    }
    const defaultText: RegnowText = {
      title: `Попробуйте и начните зарабатывать на страховании уже сегодня!`
    }
    return ics[this.ic.url] ?? defaultText;
  }
}
</script>
<style lang="scss">
.ic-regnow {
  background: #8E68FF;
  padding: 27px 0;
  position: relative;
  overflow: hidden;
  @media (max-width: $w-md) {
    max-width: 600px;
    margin: 0 auto;
    height: 380px;
  }
  @media (max-width: $w-sm) {
    min-height: 300px;
    padding: 17px 0;
  }
  @media (max-width: $w-xs) {
    min-height: 420px;
  }
  &:before {
    content: url("~@/assets/images/partnerPage/regnow/bg.png");
    position: absolute;
    left: 8%;
    z-index: 0;
    transform: translateY(-5px);
    @media (max-width: $w-md) {
      left: 0;
      bottom: 0;
      transform: translateY(10px);
    }
  }
  &:after {
    content: url("~@/assets/images/partnerPage/regnow/bg-left.svg");
    position: absolute;
    left: 23%;
    top: 20%;
    z-index: 0;
    @media (max-width: $w-sm) {
      content: url("~@/assets/images/partnerPage/regnow/bg-right-sm.svg");
      right: 5%;
      top: 5%;
      left: unset;
    }
  }
  &-title {
    margin: 0 20px 0 auto !important;
    font-size: 30px;
    font-family: Montserrat, sans-serif;
    color: white;
    max-width: 600px;
    @media (max-width: $w-md) {
      text-align: left;
      margin: 0 !important;
    }
    @media (max-width: $w-sm) {
      font-size: 19px !important;
    }
    @media (max-width: $w-sm) and (min-width: ($w-xs + 1px)) {
      margin: auto;
    }
    @media (max-width: $w-xs) {
      margin-right: 0;
      text-align: left;
    }
  }
}
</style>
