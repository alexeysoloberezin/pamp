<template>
  <div class="common-appstore-links">
    <h2 class="appstore-links-title">Скачивай приложение Пампаду и начни зарабатывать с помощью своего мобильного
      телефона</h2>
    <div class="download-appstore-links" :style="rootStyle">
      <div style="display: flex;align-items: center;flex: 0 1 360px">
        <div class="app-code-wrapper">
          <v-img class="appstore-links-code" :src="qrCode" max-width="87" alt="code"/>
        </div>
        <div class="appstore-links-header">
          <h4 class="appstore-links-description">
            Для установки наведите камеру&nbsp;телефона на QR-код.
          </h4>
        </div>
      </div>
      <div style="display: flex;align-items: center" :class="{'mt-3': $br.mdAndDown}">
        <a :href="appLink" target="_blank" class="mr-3">
          <v-img :src="googleplay" :max-width="imgMaxWidth" alt="googlePlay"/>
        </a>
        <a :href="appLink" target="_blank" class="mr-3">
          <v-img :src="appStore" :max-width="imgMaxWidth" alt="appStore"/>
        </a>
      </div>
      <v-img class="appstore-links-phone" :src="phone" max-width="374" alt="phone"/>
    </div>
  </div>
</template>
<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";

@Component
export default class AppstoreLinksCommon extends Vue {
  @Prop(Boolean) transparent: boolean;
  qrCode = require('~/assets/images/common/appStoreLinks/code.webp');
  appStore = require('~/assets/images/common/appStoreLinks/appstore.svg');
  googleplay = require('~/assets/images/common/appStoreLinks/googleplay.svg');
  phone = require('~/assets/images/common/appStoreLinks/phone.webp')
  appLink = 'https://onelink.to/w9d9dq';
  headerTitle = 'Скачать приложение'

  get $br() {
    return this.$vuetify.breakpoint;
  }

  get imgMaxWidth() {
    return this.$br.mdAndUp ? '165' : '135'
  }

  get rootStyle() {
    return {
      background: this.transparent ? '' : '#F9F9FC'
    };
  }
}
</script>

<style lang="scss">
.common-appstore-links {
  position: relative;
  bottom: -10px;
  z-index: 1;
  padding: 10px 0 0;
  @media (max-width: $w-md){
    bottom: unset;
  }
  .appstore-links-title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 26px;
    line-height: 36px;
    color: #000000;
    max-width: 625px;
    text-align: left;
    @media (max-width: $w-sm) {
      font-size: 19px;
      line-height: 23px;
    }
  }

  .download-appstore-links {
    border-radius: 6px;
    padding: 15px;
    display: flex;
    margin: 40px 0 50px;

    @media (max-width: $w-sm) {
      margin: 20px 0;
      padding: 0;
      background: unset !important;
    }

    .app-code-wrapper {
      margin-right: 15px;
      border: 5px solid white;
      @media (max-width: $w-sm) {
        display: none;
      }
    }

    .appstore-links-header {
      flex: 0 1 195px;
      margin-right: 15px;
      @media (max-width: $w-sm) {
        display: none;
      }
    }

    .appstore-links-description {
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      color: #000000;
    }
  }

  .appstore-links-phone {
    image-rendering: -webkit-optimize-contrast;
    position: absolute;
    right: -50px;
    top: 0;
    @media (max-width: $w-md) {
      display: none;
    }
  }
}
</style>
