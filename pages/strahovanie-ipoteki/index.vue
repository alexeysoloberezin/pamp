<template>
  <div>
    <HeaderSub :block-links="blocks"/>
    <Intro/>
    <Benefit :items="benefits"/>
    <EarnImmediately/>
    <Conditions/>
    <Profit/>
    <Proccess/>
    <MortgageAppstoreLinks v-if="false"/>
    <Slider/>
    <HowItWorks/>
    <WhosNeed/>
    <Reviews product="mortgage"/>
    <System/>
    <Faq :page="faqPages.Mortgage"/>
    <Telegram/>
    <AdditionalMortgage/>
    <AvailableWebtools/>
    <AboutUs/>
    <MassMedia/>
    <Articles :posts="posts" title="Регулярно пишем на тему страхования"/>
    <RegnowBanner btn-inverted>
      <template #title>
        <div
          style="max-width: 650px"
          :style="{
                        lineHeight: $vuetify.breakpoint.mdAndUp
                            ? '38px'
                            : '21px',
                    }"
        >
          Зарегистрируйтесь и уже через
          <span style="color: #b5fff6">7 дней</span> заработайте
          <span style="color: #b5fff6">первые 15 тыс руб.</span> на
          страховании ипотеки
        </div>
      </template>
      <template #description>
        <div
          style="max-width: 320px"
          :style="{
                        textAlign:
                            $vuetify.breakpoint.lgAndUp ||
                            $vuetify.breakpoint.xsOnly
                                ? 'left'
                                : 'center',
                    }"
        >
          Вам поможет личный куратор и подробная база знаний!
        </div>
      </template>
    </RegnowBanner>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import HeaderSub from "~/components/common/HeaderSub.vue";
import Intro from "~/components/ipoteka/Intro.vue";
import Benefit from "~/components/common/Benefit.vue";
import Profit from "~/components/ipoteka/Profit.vue";
import Proccess from "~/components/ipoteka/Proccess.vue";
import HowItWorks from "~/components/ipoteka/HowItWorks.vue";
import WhosNeed from "~/components/common/WhosNeed.vue";
import RegnowBanner from "~/components/common/regnow/RegnowBanner.vue";
import MassMedia from "~/components/common/MassMedia.vue";
import AvailableWebtools from "~/components/common/AvailableWebtools.vue";
import AboutUs from "~/components/common/AboutUs.vue";
import Reviews from "~/components/common/Reviews/Reviews.vue";
import Faq from "@/components/common/Faq.vue";
import Telegram from "~/components/common/Telegram/Telegram.vue";
import Slider from "~/components/ipoteka/Slider.vue";
import {FaqPages, faqs} from "~/components/common/Faq.vue";
import MortgageAppstoreLinks from "~/components/ipoteka/MortgageAppstoreLinks.vue";
import EarnImmediately from "~/components/ipoteka/EarnImmediately";
import System from "~/components/ipoteka/System";
import Conditions from "~/components/ipoteka/Conditions";
import AdditionalMortgage from "~/components/ipoteka/AdditionalMortgage.vue";
import ApiHelper from "~/utils/ApiHelper";
import {createJsonLd, generateFAQJSONLD} from "~/utils/createJSON_LD";
import {Meta} from "~/utils/meta";
import Articles from "~/components/common/blog/Articles.vue";
import PostsService from "~/services/PostsService";
import {postsTags, postsTagsForRequest} from "~/model/Article";

@Component({
  components: {
    Articles,
    AdditionalMortgage,
    System,
    EarnImmediately,
    Conditions,
    MortgageAppstoreLinks,
    Slider,
    Telegram,
    AboutUs,
    AvailableWebtools,
    MassMedia,
    RegnowBanner,
    WhosNeed,
    HowItWorks,
    Proccess,
    Profit,
    Benefit,
    HeaderSub,
    Intro,
    Reviews,
    Faq,
  },
  async asyncData() {
    const posts = await PostsService.getPosts(postsTagsForRequest[postsTags.Mortgage])
    return {
      posts
    };
  }
})
export default class StrahovanieIpoteki extends Vue {
  posts = []
  blocks = [
    {code: "moi", title: "Что это"},
    {code: "mop", title: "Сколько заработаете"},
    {code: "mos", title: "Партнеры"},
    {code: "moh", title: "Как работает"},
    {code: "mow", title: "Для кого"},
    {code: "mor", title: "Отзывы"},
    {code: "faq", title: "Вопросы"},
    {code: "moa", title: "О нас"},
  ];
  faqPages = FaqPages;

  head() {
    return {
      title: "Ипотечный центр - партнерская программа страхования ипотеки для риэлторов и брокеров",
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
          content: "Получите выгоду до 60% на партнерской программе ипотечного страхования. Выбирайте лучший вариант для вашего клиента и зарабатывайте комиссию с каждой продажи.",
        },
        Meta.generateOgUrl(this.$route),
      ],
      script: [
        createJsonLd([
          {
            name: "Ипотека",
            path: "strahovanie-ipoteki",
          }
        ]),
        generateFAQJSONLD(faqs.get(FaqPages.Mortgage)),
      ],
    };
  }

  benefits = [
    {
      icon: require("@/assets/images/ipoteka/benefit/bag.svg"),
      title: "Заплатим вам <b>до&nbsp;60%&nbsp;вознаграждения</b> от&nbsp;стоимости&nbsp;полиса",
    },
    {
      icon: require("@/assets/images/ipoteka/benefit/coin.svg"),
      title: "Комиссия начисляется&nbsp;сразу",
    },
    {
      icon: require("@/assets/images/ipoteka/benefit/clock.svg"),
      title: "Оформление занимает&nbsp;<b>10&nbsp;минут</b>",
    },
  ];
}
</script>
