<template>
  <div>
    <HeaderSub :block-links="blocks"/>
    <Intro/>
    <WhatIs/>
    <AgentsAppstoreLinks v-if="false"/>
    <OurPartners/>
    <WhosNeed/>
    <OurProducts show-regnow/>
    <HowItWorks/>
    <Income/>
    <EasyToLearn/>
    <Reviews/>
    <OurTeam/>
    <Telegram/>
    <MassMedia :page="massMedia" title="О нас пишут"/>
    <Articles :posts="posts" title="Регулярно пишем на тему страхования"/>
    <Faq :page="faq" transparent-bg/>
    <Enjoy/>
  </div>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import HeaderSub from "~/components/common/HeaderSub.vue";
import Intro from "~/components/agents/Intro.vue";

import AnalyticsService from "~/core/Analytics/Analytics";
import WhatIs from "~/components/agents/WhatIs.vue";
import WhosNeed from "~/components/agents/WhosNeed.vue";
import OurProducts from "~/components/common/OurProducts.vue";
import HowItWorks from "~/components/agents/HowItWorks.vue";
import OurTeam from "~/components/agents/OurTeam.vue";
import MassMedia from "~/components/common/MassMedia.vue";
import Faq, {FaqPages, faqs} from "~/components/common/Faq.vue";
import Reviews from "~/components/agents/Reviews.vue";
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
import PostsService from "~/services/PostsService";

@Component({
  components: {
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
  async asyncData() {
    const posts = await PostsService.getPosts();
    return { posts }
  }
})
export default class AgentsMain extends Vue {
  posts = [];
  faq = FaqPages.Agents;
  massMedia = Pages.Agents;
  blocks = [
    {code: "ai", title: "Что это"},
    {code: "awi", title: "Для кого"},
    {code: "ap", title: "Продукты"},
    {code: "ahiw", title: "Как работает"},
    {code: "ael", title: "Функции"},
    {code: "ate", title: "О нас"},
    {code: "faq", title: "Вопросы"},
  ];

  created() {
    if (typeof window !== "undefined") AnalyticsService.visitAgents();
  }

  head() {
    return {
      title: "Пампаду - онлайн платформа №1 для заработка на страховых и банковских продуктах",
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
            "С Пампаду можно удаленно зарабатывать на продаже и оформлении страховых и банковских продуктов, а компаниям - увеличивать продажи и получать целевых клиентов.",
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

</style>
