<template>
  <div>
    <HeaderSub :block-links="blocks"/>
    <IntroOsago/>
    <div class="py-10">
      <h2
        class="h2 mx-auto mb-4 text-center px-4"
        v-text="'17 страховых компаний на выбор по ОСАГО'"
      />
      <SliderWrapper/>
      <div style="text-align: center" class="my-4">
        <zond-btn style="width: 200px" v-text="'Начать работу'"/>
      </div>
    </div>
    <WhatIsOsago/>
    <AdvantagesOsago/>
    <VideoPresentation/>
    <Profit/>
    <WhoCanRegister/>
    <WhosNeed
      title="Кто уже зарабатывает на&nbsp;ОСАГО&nbsp;через Пампаду?"
      show-zond
      bg-color="transparent"
    />
    <OurServicesOsago/>
    <HowItWorksCardsV2/>
    <Conditions :show-second-slide="false"/>
    <WorkWithUs/>
    <Reviews show-ratings product="osago" btn="reviews"/>
    <Telegram/>
    <Faq :page="faqPages.Osago"/>
    <MassMedia title="О нас пишут"/>
    <Articles :posts="posts" title="Статьи и новости из сферы страхования"/>
    <Enjoy/>
  </div>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import HeaderSub from "~/components/common/HeaderSub.vue";
import Conditions from "~/components/osago/Conditions.vue";
import Profit from "~/components/common/products/Profit.vue";
import AboutUs from "~/components/common/AboutUs.vue";
import MassMedia from "~/components/common/MassMedia.vue";
import Faq, {FaqPages, faqs} from "~/components/common/Faq.vue";
import Enjoy from "~/components/common/Enjoy.vue";
import Telegram from "~/components/common/Telegram/Telegram.vue";
import Reviews from "~/components/common/Reviews/Reviews.vue";
import Articles from "~/components/common/blog/Articles.vue";
import WorkWithUs from "~/components/osago/WorkWithUs.vue";
import HowItWorksCardsV2 from "~/components/common/products/HowItWorksCardsV2.vue";
import OurServicesOsago from "~/components/osago/OurServicesOsago.vue";
import WhatIsOsago from "~/components/osago/WhatIsOsago.vue";
import WhosNeed from "~/components/common/products/WhosNeed.vue";
import WhoCanRegister from "~/components/osago/WhoCanRegister.vue";
import AdvantagesOsago from "~/components/osago/AdvantagesOsago.vue";
import VideoPresentation from "~/components/osago/VideoPresentation.vue";
import SliderWrapper from "~/components/common/slider/SliderWrapper.vue";
import IntroOsago from "~/components/osago/IntroOsago.vue";
import ApiHelper from "~/utils/ApiHelper";
import {createJsonLd, generateFAQJSONLD} from "~/utils/createJSON_LD";
import {Meta} from "~/utils/meta";
import PostsService from "~/services/PostsService";

@Component({
  components: {
    Telegram,
    MassMedia,
    AboutUs,
    Conditions,
    HeaderSub,
    Profit,
    Faq,
    Enjoy,
    Reviews,
    Articles,
    WorkWithUs,
    HowItWorksCardsV2,
    OurServicesOsago,
    WhatIsOsago,
    WhosNeed,
    WhoCanRegister,
    AdvantagesOsago,
    VideoPresentation,
    SliderWrapper,
    IntroOsago,
  },

  async asyncData() {
    const posts = await PostsService.getPosts();
    return { posts }
  }
})

export default class Osago extends Vue {
  posts = []
  blocks = [
    {code: "oi", title: "Что это"},
    {code: "own", title: "Для кого"},
    {code: "op", title: "Сколько заработаете"},
    {code: "oos", title: "Функции"},
    {code: "ofp", title: "Преимущества"},
    {code: "ow", title: "Вебмастеру"},
    {code: "moa", title: "О нас"},
  ];

  head() {
    return {
      title: "Стать страховым агентом ОСАГО на дому онлайн",
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
            "Стань страховым агентом ОСАГО онлайн, зарегистрируйся чтобы получать комиссионное вознаграждение  до 38% и выводить деньги в любое время.",
        },
        Meta.generateOgUrl(this.$route),
      ],
      script: [
        createJsonLd([
          {
            name: "Осаго",
            path: "osago"
          }
        ]),
        generateFAQJSONLD(faqs.get(FaqPages.Osago)),
      ],
    };
  }

  faqPages = FaqPages;
}
</script>
