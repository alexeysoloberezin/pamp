<template>
  <div>
    <HeaderSub :block-links="blocks"/>
    <Intro/>
    <MinikaskoBenefit/>
    <WhatIs/>
    <Programs/>
    <WhyWe/>
    <WhosNeedMinikasko/>
    <MinikaskoHiw/>
    <MinikaskoEasyToLearn/>
    <MinikaskoReviews/>
    <PersonalOptions/>
    <MinikaskoFaq/>
    <Telegram/>
    <MinikaskoWebtools/>
    <AboutUs/>
    <MassMedia/>
    <MinikaskoRegnowBanner/>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Provide } from "vue-property-decorator";
import HeaderSub from "~/components/common/HeaderSub";
import Intro from "~/components/minikasko/Intro";
import WhatIs from "~/components/common/products/WhatIs";
import Programs from "~/components/minikasko/Programs";
import WhyWe from "~/components/minikasko/WhyWe";
import WhosNeedMinikasko from "~/components/minikasko/WhosNeedMinikasko";
import PersonalOptions from "~/components/minikasko/PersonalOptions";
import Faq from "~/components/common/Faq";
import Telegram from "~/components/common/Telegram/Telegram";
import AboutUs from "~/components/common/AboutUs";
import MassMedia from "~/components/common/MassMedia";
import MinikaskoWebtools from "~/components/minikasko/MinikaskoWebtools";
import MinikaskoRegnowBanner from "~/components/minikasko/MinikaskoRegnowBanner";
import MinikaskoHiw from "~/components/minikasko/MinikaskoHiw";
import MinikaskoBenefit from "~/components/minikasko/MinikaskoBenefit";
import MinikaskoEasyToLearn from "~/components/minikasko/MinikaskoEasyToLearn";
import MinikaskoReviews from "~/components/minikasko/MinikaskoReviews";
import MinikaskoFaq from "~/components/minikasko/MinikaskoFaq.vue";
import ApiHelper from "~/utils/ApiHelper";
import {createJsonLd, generateFAQJSONLD} from "~/utils/createJSON_LD";
import {FaqPages, faqs} from "~/components/common/Faq.vue";
import {Meta} from "~/utils/meta";


@Component({
  components: {
    MinikaskoFaq,
    MinikaskoReviews,
    MinikaskoEasyToLearn,
    MinikaskoBenefit,
    MinikaskoHiw,
    MinikaskoRegnowBanner,
    MassMedia,
    AboutUs,
    MinikaskoWebtools,
    Telegram,
    PersonalOptions,
    WhosNeedMinikasko,
    WhyWe,
    Programs,
    WhatIs,
    HeaderSub,
    Intro,
  },
})
export default class Minikasko extends Vue {
  blocks = [
    {code: "moi", title: "Что это"},
    {code: "own", title: "Для кого"},
    {code: "mpr", title: "Сколько заработаете"},
    {code: "mpo", title: "Функции"},
    {code: "mww", title: "Преимущества"},
    {code: "mwt", title: "Вебмастеру"},
    {code: "moa", title: "О нас"},
  ];

  head() {
    return {
      title: "Стать страховым агентом Мини-КАСКО на дому онлайн",
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
          content: "Стань страховым агентом мини-КАСКОЙ онлайн, зарегистрируйся чтобы получать комиссионное вознаграждение  до 38% и выводить деньги в любое время.",
        },
        Meta.generateOgUrl(this.$route),
      ],
      script: [
        createJsonLd([
          {
            name: "Мини-каско",
            path: "minikasko"
          }
        ]),
        generateFAQJSONLD(faqs.get(FaqPages.Minikasko)),
      ],
    };
  }

  @Provide('imgAltAttr') imgAltAttr = 'Мини-КАСКО'
}
</script>

<style lang="scss">
.minikasko-container {
  max-width: 1260px;
  margin: 0 auto;
  padding: 0 25px;
  @media (max-width: $w-md){
    max-width: 800px;
  }
  @media (max-width: $w-sm){
    max-width: 600px;
    padding: 0 15px;
  }


  .minikasko-h2 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 35px;
    line-height: 40px;
    @media (max-width: $w-sm){
      font-size: 19px;
      line-height: 23px;
    }
  }
}
</style>
