<template>
  <div>
    <!-- <HeaderSub :block-links="blocks" /> -->
    <Intro/>
    <div class="minikasko-benefits">
      <div class="minikasko-container">
        <Benefit :items="benefits"/>
      </div>
    </div>
    <ICSlider :page="3"/>
    <WhatIs product="kasko"/>
    <HowItWorksCardsV2 page="kasko" :display-subtitle="false"/>
    <KaskoTypes/>
    <WhosNeed
      page="minikasko"
      title="Кто уже зарабатывает на страховании<br>КАСКО через Пампаду?"
    />
    <Profit type="kasko"/>
    <Reviews product="kasko"/>
    <Faq :page="FaqPages.Kasko"/>
    <Telegram/>
    <AvailableWebtools product="kasko"/>
    <AboutUs/>
    <MassMedia/>
    <RegnowBanner primary btn-text="Присоединиться">
      <template #title>
        Зарегистрируйтесь, чтобы выводить комиссионное вознаграждение
        <span style="color: #7936e7"
        >в любое время и&nbsp;без длительного ожидания</span
        >
      </template>
    </RegnowBanner>
  </div>
</template>
<script lang="ts">
import {Component, Vue, Provide} from "vue-property-decorator";
import HeaderSub from "~/components/common/HeaderSub";
import Intro from "~/components/kasko/Intro";
import Reviews from "~/components/common/Reviews/Reviews";
import Telegram from "~/components/common/Telegram/Telegram";
import AboutUs from "~/components/common/AboutUs";
import MassMedia from "~/components/common/MassMedia";
import Faq from "~/components/common/Faq";
import {FaqPages, faqs} from "~/components/common/Faq.vue";
import Profit from "~/components/common/products/Profit.vue";
import WhosNeed from "~/components/common/products/WhosNeed";
import AvailableWebtools from "~/components/common/AvailableWebtools";
import HowItWorksCardsV2 from "~/components/common/products/HowItWorksCardsV2.vue";
import ICSlider from "~/components/common/slider/ICSlider.vue";
import RegnowBanner from "~/components/common/regnow/RegnowBanner.vue";
import WhatIs from "~/components/common/products/WhatIs";
import KaskoTypes from "~/components/kasko/KaskoTypes.vue";
import Benefit from "~/components/common/Benefit";
import ApiHelper from "~/utils/ApiHelper";
import {createJsonLd, generateFAQJSONLD} from "~/utils/createJSON_LD";
import {Meta} from "~/utils/meta";

@Component({
  components: {
    MassMedia,
    AboutUs,
    Telegram,
    Reviews,
    HeaderSub,
    Intro,
    Faq,
    Profit,
    WhosNeed,
    AvailableWebtools,
    HowItWorksCardsV2,
    ICSlider,
    RegnowBanner,
    WhatIs,
    KaskoTypes,
    Benefit,
  },
})
export default class Kasko extends Vue {
  FaqPages = FaqPages;
  blocks = [
    // { code: "moi", title: "Что это" },
    // { code: "own", title: "Для кого" },
    // { code: "mpr", title: "Сколько заработаете" },
    // { code: "mpo", title: "Функции" },
    // { code: "mww", title: "Преимущества" },
    // { code: "mwt", title: "Вебмастеру" },
    // { code: "moa", title: "О нас" },
  ];

  faqPages = FaqPages;
  benefits = [
    {
      icon: require("images/ipoteka/benefit/bag.svg"),
      title: "Вознаграждение <b>до&nbsp;38% от&nbsp;стоимости</b> полиса",
    },
    {
      icon: require("images/ipoteka/benefit/coin.svg"),
      title: "Начисление комиссии каждую неделю",
    },
    {
      icon: require("images/ipoteka/benefit/clock.svg"),
      title: "Оформление от нескольких часов",
    },
  ];

  head() {
    return {
      title: "Стать страховым агентом КАСКО на дому онлайн",
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
          content: "Стань страховым агентом КАСКО онлайн, зарегистрируйся чтобы получать комиссионное вознаграждение  до 38% и выводить деньги в любое время.",
        },
        Meta.generateOgUrl(this.$route),
      ],
      script: [
        createJsonLd([
          {
            name: "Каско",
            path: "kasko"
          }
        ]),
        generateFAQJSONLD(faqs.get(FaqPages.Kasko)),
      ],
    };
  }

  @Provide("imgAltAttr") imgAltAttr = "КАСКО";
}
</script>

<style lang="scss">
.minikasko-container {
  max-width: 1260px;
  margin: 0 auto;
  padding: 0 25px;
  @media (max-width: $w-md) {
    max-width: 800px;
  }
  @media (max-width: $w-sm) {
    max-width: 600px;
    padding: 0 15px;
  }

  .minikasko-h2 {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 35px;
    line-height: 40px;
    @media (max-width: $w-sm) {
      font-size: 19px;
      line-height: 23px;
    }
  }
}
</style>
