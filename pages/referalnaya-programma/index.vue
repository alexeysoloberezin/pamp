<template>
  <div>
    <HeaderSub :block-links="blocks"/>
    <Intro/>
    <WePay/>
    <Referal :show-how-it-work="false">
      <template #text>
        <span class="primary--text">3,5 млн ₽ в месяц получают пользователи</span>, которые просто порекомендовали Пампаду своим знакомым агентам,
        риэлторам, брокерам и вебмастерам или разместили информацию о нас в своём блоге / сайте / сообществе
      </template>
    </Referal>
    <RefImagesText/>
    <RegnowBannerV4 btn-text="Зарегестрироваться" :classes="'pr-8'">
      <template #title>
        Зарегистрируйся сейчас, советуй Пампаду<br/>
        и получай пассивный доход со всех их продаж
      </template>
    </RegnowBannerV4>
    <ExampleGetMoney/>
    <Reviews product="ref"/>
    <OurTeam/>
    <Telegram :styles="'max-width: 100%'"/>
    <MassMedia :page="massMedia" title="О нас пишут"/>
    <Faq :page="faq" transparent-bg/>
    <Enjoy/>
  </div>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import HeaderSub from "~/components/common/HeaderSub.vue";
import Intro from "~/components/refferal-program/Intro.vue";
import Reviews from "~/components/common/Reviews/Reviews.vue";
import AnalyticsService from "~/core/Analytics/Analytics";
import WhatIs from "~/components/agents/WhatIs.vue";
import WhosNeed from "~/components/agents/WhosNeed.vue";
import OurProducts from "~/components/common/OurProducts.vue";
import HowItWorks from "~/components/agents/HowItWorks.vue";
import OurTeam from "~/components/agents/OurTeam.vue";
import MassMedia from "~/components/common/MassMedia.vue";
import Faq, {FaqPages, faqs} from "~/components/common/Faq.vue";
import OurPartners from "~/components/agents/OurPartners.vue";
import EasyToLearn from "~/components/agents/EasyToLearn.vue";
import Enjoy from "~/components/common/Enjoy.vue";
import {Pages} from "~/model/entities/pages";
import Income from "~/components/agents/Income.vue";
import Telegram from "~/components/common/Telegram/Telegram.vue";
import AppstoreLinks from "~/components/common/appStoreLinks/AppStoreLinks.vue";
import AgentsAppstoreLinks from "~/components/agents/AgentsAppsotreLinks.vue";
import ApiHelper from "~/utils/ApiHelper";
import {createJsonLd, generateFAQJSONLD} from "~/utils/createJSON_LD";
import {Meta} from "~/utils/meta";
import Articles from "~/components/common/blog/Articles.vue";
import WePay from "~/components/refferal-program/WePay.vue";
import Referal from "~/components/widgets/Referal.vue";
import RefImagesText from "~/components/refferal-program/RefImagesText.vue";
import RegnowBannerV4 from "~/components/common/regnow/RegnowBannerV4.vue";
import ExampleGetMoney from "~/components/refferal-program/ExampleGetMoney.vue";

@Component({
  components: {
    ExampleGetMoney,
    RegnowBannerV4,
    RefImagesText,
    Referal,
    WePay,
    Articles,
    AgentsAppstoreLinks,
    AppstoreLinks,
    Telegram,
    Income,
    Enjoy,
    EasyToLearn,
    OurPartners,
    Reviews,
    MassMedia,
    OurTeam,
    HowItWorks,
    OurProducts,
    WhosNeed,
    WhatIs,
    HeaderSub,
    Intro,
    Faq,
  },
})
export default class AgentsMain extends Vue {
  faq = FaqPages.Refferal;
  massMedia = Pages.Agents;
  blocks = [
    {code: "ai", title: "Что это"},
    {code: "wepay", title: "Платим вам"},
    {code: "wir", title: "Программа"},
    {code: "ael", title: "Заработок"},
    {code: "mor", title: "Отзывы"},
    {code: "ate", title: "О нас"},
    {code: "faq", title: "Вопросы"},
  ];

  created() {
    if (typeof window !== "undefined") AnalyticsService.visitAgents();
  }

  head() {
    return {
      title: "Реферальная программа от Пампаду ",
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
            "Зарабатывай на реферальной программе Пампаду от 30 000 рублей в месяц! Для участия в реферальной программе делитесь реферальной ссылкой, привлекая новых пользователей на Пампаду. ",
        },
        Meta.generateOgUrl(this.$route),
      ],
      script: [
        createJsonLd(),
        generateFAQJSONLD(faqs.get(FaqPages.Agents)),
      ],
    };
  }
}
</script>

<style lang="scss">
.ref-title-h2 {
  color: #000;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 35px;
  font-weight: 700;
  line-height: 40px; /* 114.286% */
  @media (max-width: 1000px) {
    font-size: 24px;
    line-height: 1.2;
  }
}
</style>
