<template>
  <div>
    <HeaderSub :block-links="blocks"/>
    <IntroRealtors/>
    <AdvantageRealtors/>
    <PassiveIncome/>
    <Easy/>
    <Calculator/>
    <Proccess/>
    <MortgageAppstoreLinks v-if="false"/>
    <HowItWorks/>
    <CasesRealtors/>
    <Faq :page="faqPages.Mortgage"/>
    <StartRealtorsBanner/>
    <Articles :posts="posts" title="Регулярно пишем на тему страхования"/>
    <Slider/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import HeaderSub from "~/components/common/HeaderSub.vue";
import IntroRealtors from "~/components/realtors/IntroRealtors.vue";
import HowItWorks from "~/components/ipoteka/HowItWorks.vue";
import Faq from "@/components/common/Faq.vue";
import Slider from "~/components/ipoteka/Slider.vue";
import {FaqPages} from "~/components/common/Faq.vue";
import MortgageAppstoreLinks from "~/components/ipoteka/MortgageAppstoreLinks.vue";
import AdvantageRealtors from "~/components/realtors/AdvantageRealtors.vue";
import PassiveIncome from "~/components/realtors/PassiveIncome.vue";
import Easy from "~/components/realtors/Easy.vue";
import Calculator from '~/components/realtors/Сalculator.vue';
import StartRealtorsBanner from '~/components/realtors/StartRealtorsBanner.vue';
import Proccess from '~/components/ipoteka/Proccess.vue';
import CasesRealtors from "~/components/realtors/CasesRealtors.vue";
import ApiHelper from "~/utils/ApiHelper";
import {Meta} from "~/utils/meta";
import {createJsonLd} from "~/utils/createJSON_LD";
import PostsService from "~/services/PostsService";
import {postsTags, postsTagsForRequest} from "~/model/Article";
import Articles from "~/components/common/blog/Articles.vue";

@Component({
  components: {
    Articles,
    CasesRealtors,
    StartRealtorsBanner,
    Easy,
    PassiveIncome,
    AdvantageRealtors,
    MortgageAppstoreLinks,
    Slider,
    HowItWorks,
    Proccess,
    Calculator,
    HeaderSub,
    IntroRealtors,
    Faq,
  },
  async asyncData() {
    const posts = await PostsService.getPosts(postsTagsForRequest[postsTags.Mortgage])
    return {
      posts
    };
  }
})
export default class Realtors extends Vue {
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
      title: "Партнерская программа страхования ипотеки: риэлторам и агенствам",
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
            "Единый личный кабинет для продажи страхования ипотеки - 34 банка и страховых компаний. Выбирайте выгодный вариант для вашего клиента и зарабатывайте комиссию до 60% с каждой продажи."
        },
        Meta.generateOgUrl(this.$route),
      ],
      script: [
        createJsonLd([
          {
            name: "Риэлторам",
            path: "realtors",
          }
        ]),
      ],
    };
  }
}
</script>
