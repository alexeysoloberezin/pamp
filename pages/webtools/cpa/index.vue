<template>
  <div class="cpa-page">
    <div class="cpa-banner-img5"><img :src="require('@/assets/images/cpa/bg3.webp')" alt=""></div>
    <div class="cpa-page-wrp">
      <CpaHeader :isDesktop="isDesktop"/>
      <Banner :isDesktop="isDesktop"/>
      <CpaOffer :isDesktop="isDesktop"/>
      <AreWorking :isDesktop="isDesktop"/>
      <TopOffers :isDesktop="isDesktop"/>
      <HowStart :isDesktop="isDesktop"/>
      <CpaForm :isDesktop="isDesktop"/>
      <CpaContacts :isDesktop="isDesktop"/>
      <CpaFooter :isDesktop="isDesktop"/>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import ApiHelper from "~/utils/ApiHelper";
import {Meta} from "~/utils/meta";
import CpaHeader from "~/components/cpa/CpaHeader.vue";
import Banner from "~/components/cpa/Banner.vue";
import AreWorking from "~/components/cpa/AreWorking.vue";
import TopOffers from "~/components/cpa/TopOffers.vue";
import HowStart from "~/components/cpa/HowStart.vue";
import CpaForm from "~/components/cpa/CpaForm.vue";
import CpaContacts from "~/components/cpa/CpaContacts.vue";
import CpaFooter from "~/components/cpa/CpaFooter.vue";
import CpaOffer from "~/components/cpa/cpaOffer.vue";

@Component({
  components: {CpaOffer, CpaFooter, CpaContacts, CpaForm, HowStart, TopOffers, AreWorking, Banner, CpaHeader},
  layout: 'emptyLayout'
})

export default class CpaPage extends Vue {
  isDesktop = true
  styleTag = null

  mounted() {
    this.isDesktop = window.innerWidth >= 900

    window.addEventListener('resize', this.handleResize);

    const styleElement = document.createElement('style');
    styleElement.textContent = '#carrotquest-messenger-collapsed-container { display: none !important; }';
    document.head.appendChild(styleElement);
    this.styleTag = styleElement;
  }

  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);

    if (this.styleTag) {
      this.styleTag.remove();
    }
  }

  handleResize() {
    this.isDesktop = window.innerWidth >= 900; // Измените пороговое значение на свой вкус
  }

  head() {
    return {
      title: "Лей на финансовые офферы в плюс - CPA партнерка Пампаду",
      link: [
        {
          rel: 'canonical',
          hid: 'canonical',
          href: ApiHelper.origin + this.$route.path
        }
      ],
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Начни лить трафик на финансовые офферы Пампаду и получи эксклюзивные премиум ставки до конца года. Выигрывай Iphone 15 и другие ценные призы в акции Яблочный джем. Регистрируйся онлайн",
        },
        Meta.generateOgUrl(this.$route),
      ],
    }
  }
}
</script>

<style lang="scss">

@font-face {
  font-family: 'EuropeExt';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('~/static/fonts/europeext.woff2') format('woff2');
}

$cpaFont: 'EuropeExt', sans-serif;
$cpaColor1: #C688FF;
$cpaColor2: #F41D77;

#__nuxt .cpa-page {
  position: relative;
  background: #1B1B38;
  min-height: 100vh;
  overflow: hidden;
  color: #fff;

  .container {
    max-width: 1310px;
    padding: 0 15px;
    margin: 0 auto;
  }

  &-wrp {
    position: relative;
    z-index: 5;
    @media (min-width: 901px) {
      padding-top: 50px;
    }
    @media (min-width: 1201px) {
      padding-top: 123px;
    }
  }

  &:after {
    content: '';
    width: 100vw;
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    height: auto;
    min-height: 133vw;
    background: url('~/assets/images/cpa/bg.webp') top/cover no-repeat;
  }

  &:before {
    content: '';
    width: 100vw;
    height: 300px;
    display: block;
    z-index: 2;
    position: absolute;
    top: calc(133vw - 300px);
    left: 0;
    background: linear-gradient(to top, #1B1B38, rgba(27, 27, 56, 0));
  }

  *, a {
    color: #fff;
  }

  .text-color1 {
    &, * {
      color: $cpaColor1 !important;
    }

  }

  .text-color2 {
    &, * {
      color: $cpaColor2 !important;
    }
  }

  .text-color3 {
    &, * {
      color: #000000 !important;
    }
  }

  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }

  .cpa-h1 {
    text-align: center;
    font-family: $cpaFont;
    font-size: 50px;
    line-height: 1;
    font-weight: 700;
    text-transform: uppercase;
    max-width: 710px;
    @media (max-width: 1000px) {
      font-size: 38px;
      max-width: 540px;
    }
    @media (max-width: 900px) {
      font-size: 25px;
      max-width: 287px;
    }
  }

  .cpa-h2 {
    width: fit-content;
    font-family: $cpaFont;
    line-height: 1.08;
    font-size: 45px;
    font-weight: 700;
    text-transform: uppercase;
    @media (max-width: 900px) {
      font-size: 20px;
    }

    b {
      display: block;
    }

    .pl-3 {
      transform: translateX(45px);
      @media (max-width: 900px) {
        transform: translateX(25px);
      }
    }
  }

  .cpa-btn {
    border-radius: 30px;
    display: inline-flex;
    height: 56px;
    padding: 9px 47px;
    justify-content: center;
    text-align: center;
    font-family: $cpaFont;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    align-items: center;
    grid-gap: 5px;
    flex-shrink: 0;

    @media (max-width: 900px) {
      font-size: 14px;
      height: 44px;
    }

    &.cpa-btn-fill {
      color: #FFF !important;
      background: #F07;
      background: color(display-p3 0.9569 0.1137 0.4667);
      box-shadow: 0px 13px 34px 0px rgba(255, 0, 119, 0.86);
      transition: .4s;

      &:hover {
        color: #FFF !important;
        box-shadow: 0px 13px 50px 0px rgba(255, 0, 119, 0.86);
      }
    }
  }

  .cpa-btn-red-outlined {
    border: 1px solid #F07;
    color: #fff !important;
    transition: .4s;
    font-family: 'Roboto', sans-serif;
    font-size: 17px;
    height: 46px;
    width: 100%;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: 400;

    &:hover {
      color: #fff !important;
      background: #F07;
      background: color(display-p3 0.9569 0.1137 0.4667);
      box-shadow: 0px 13px 34px 0px rgba(255, 0, 119, 0.86);
    }
  }
}

.v-application .cpa-page a {
  color: #fff;
}
</style>
