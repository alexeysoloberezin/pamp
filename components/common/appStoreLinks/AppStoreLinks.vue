<template>
  <div class="footer-download-appstore-links" :style="rootStyle">
    <v-layout justify-space-between :column="$br.mdAndDown">
      <v-layout align-center>
        <div class="app-code-wrapper" style="border: 10px solid white">
          <v-img class="appstore-links-code" :src="qrCode" max-width="113" max-height="113"/>
        </div>
        <div class="appstore-links-header">
          <h2 class="appstore-links-title" v-html="headerTitle"/>
          <h4 class="appstore-links-description">
            Все сервисы и продукты Пампаду в доступны в вашем телефоне по одному касанию.
            Для установки наведите камеру телефона на QR-код.
          </h4>
        </div>
      </v-layout>
      <div class="appstore-links-img" :class="{'mt-3': $br.mdAndDown}">
        <a :href="appGalleryLink" aria-label="Скачать приложение в AppGallery" target="_blank" class="mr-3">
          <v-img :src="appGallery" :max-width="imgMaxWidth"/>
        </a>
        <a :href="googlePlayLink" aria-label="Скачать приложение в GooglePlay" target="_blank" class="mr-3">
          <v-img :src="googlePlay" :max-width="imgMaxWidth"/>
        </a>
        <a :href="appStoreLink" aria-label="Скачать приложение в AppStore" target="_blank">
          <v-img :src="appStore" :max-width="imgMaxWidth"/>
        </a>
      </div>
    </v-layout>
  </div>
</template>
<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";

@Component
export default class AppstoreLinks extends Vue {
  @Prop(Boolean) transparent: boolean;
  qrCode = require('~/assets/images/common/appStoreLinks/code.webp');
  appStore = require('~/assets/images/common/appStoreLinks/appstore.svg');
  googlePlay = require('~/assets/images/common/appStoreLinks/googleplay.svg');
  appGallery = require('~/assets/images/common/appStoreLinks/appgallery.svg');
  headerTitle = 'Скачать приложение'


  googlePlayLink = 'http://bit.ly/3R1PCXM'
  appStoreLink = 'https://apple.co/3wsAqcx'
  appGalleryLink = 'https://appgallery.huawei.com/app/C108060123?sharePrepath=ag&channelId=pampadu.ru&id=45dd9ee477ce4351b51cda0d8b640aca&s=151BE48F692BBA7CFB1833282CC89F11AB4C9DAF3B20EF1761E5184FFD46DAC7&detailType=0&v=&callType=AGDLINK&installType=0000&shareTo=qrcode'

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
.footer-download-appstore-links {
  max-width: 1180px;
  width: 100%;
  @media (max-width: $w-sm) {
   padding: 0 20px;
  }

  .app-code-wrapper {
    margin-right: 15px;
    @media (max-width: $w-sm) {
      display: none;
    }
  }

  .appstore-links-header {
    flex: 0 1 495px;
    margin-right: 15px;
  }

  .appstore-links-title {
    font-weight: 700;
    font-size: 19px;
    line-height: 22px;
    color: #000000;
  }

  .appstore-links-description {
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #7D8D93;
    margin-top: 15px;
    @media (max-width: $w-sm) {
      display: none;
    }
  }
  .appstore-links-img{
    display: flex;
    align-items: center;
    @media (max-width: $w-sm) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      max-width: calc(120px * 3);
      .v-image{
        max-width: 120px !important;
      }
    }
    @media (max-width: 420px) {
      max-width: calc(95px * 3);
      .v-image{
        max-width: 95px !important;
      }
      &>a{
        margin-right: 5px !important;
      }
    }
  }
}
</style>
