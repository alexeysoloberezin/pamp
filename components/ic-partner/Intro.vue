<template>
  <div class="partner-intro-bg" :style="{ backgroundImage: background }">
    <div class="generic-container-1260">
      <div class="intro-content">
        <h1
          class="h1 first-headline"
          style="font-weight: bold"
          v-html="`Стать страховым агентом в СК «${ic.name}»`"
        />
        <h3
          class="h5"
          style="max-width: 460px; margin: 36px 0"
          v-text="icDescription"
        />
        <v-layout class="intro-login">
          <zond-btn
            :style="{
                            marginRight: $vuetify.breakpoint.lgAndUp
                                ? '25px'
                                : '8px',
                        }"
            v-text="'Присоединиться'"
          />
          <div style="display: flex; align-items: center">
            <img class="ic-logo" :src="icLogo" alt="icLogo"/>
          </div>
        </v-layout>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {Vue, Component, Prop} from "vue-property-decorator";
import {IcModel} from "~/model/entities/ic-partner";

@Component
export default class Intro extends Vue {
  @Prop(Object) ic: IcModel;

  get icLogo(): string {
    return require(`@/assets/images/partnerPage/intro/logo/${this.ic.url}.png`);
  }

  get background(): string {
    return `url(${require(`@/assets/images/partnerPage/intro/background/${this.ic.url}.webp`)})`;
  }

  get icDescription(): string {
    return this.ic.description ?? 'И зарабатывать на продаже полисов ОСАГО и других видах в едином личном кабинете агента'
  }
}
</script>
<style lang="scss">
.partner-intro-bg {
  max-width: 1920px;
  margin: auto;
  position: relative;
  min-height: 475px;
  background-position: right top;
  background-repeat: no-repeat;
  background-size: 60%;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 1) 40%,
        rgba(255, 255, 255, 0) 70%
    );
    top: 0;
    z-index: 0;
    @media (min-width: $w-lg + 1px) {
      background: linear-gradient(
          90deg,
          rgba(255, 255, 255, 1) 0%,
          rgba(255, 255, 255, 1) 48%,
          rgba(255, 255, 255, 0) 72%
      );
    }
    @media (min-width: $w-md + 1px) and (max-width: $w-lg) {
      background: linear-gradient(
          90deg,
          rgba(255, 255, 255, 1) 0%,
          rgba(255, 255, 255, 1) 43%,
          rgba(255, 255, 255, 0) 77%
      );
    }
    @media (max-width: $w-xs) {
      background: linear-gradient(
          0,
          rgba(#F9F9FC, 1) 62%,
          rgba(#F9F9FC, 0) 100%
      );
    }
  }

  @media (max-width: $w-md) {
    min-height: 350px;
  }
  @media (max-width: $w-sm) {
    min-height: 390px;
    background-size: contain;
    background-position: right 30%;
  }
  @media (max-width: $w-xs) {
    background-position: top;
  }

  .intro-login {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: 700;
    font-size: 16px;
    @media (max-width: $w-sm) {
      a {
        font-size: 14px;
      }
    }
  }

  .intro-content {
    position: relative;
    z-index: 1;
    padding: 85px 0;
    @media (max-width: $w-md) {
      padding: 85px 0 50px;
    }
    @media (max-width: $w-sm) {
      max-width: 300px;
    }
    @media (max-width: $w-xs) {
      padding-top: 200px;

    }

    .ic-logo {
      width: 100%;
      max-width: 140px;
      @media (max-width: $w-md) {
        max-width: 100px;
        object-fit: cover;
      }
    }
  }

  .ic-container {
    .first-headline {
      max-width: 650px;
      font-size: 45px;
      line-height: 60px;
      @media (max-width: $w-md) {
        font-size: 20px;
        line-height: 28px;
      }
      @media (max-width: $w-sm) {
        text-align: left;
        font-size: 18px !important;
        line-height: 24px !important;
      }
    }
  }
}

</style>
