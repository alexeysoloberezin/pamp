<template>
  <div>
    <HeaderSub :block-links="blocks"/>
    <WidgetsHead/>
    <WidgetsProducts/>
    <OurProducts show-regnow/>
    <WidgetsOffersSlider/>
    <HowItWorksCardsV1 type="rkoWebtools" title="Как это работает?"
                       subtitle="Начните зарабатывать на страховых, финансовых и HR офферах"/>
    <WhosNeed/>
    <WidgetsHeadSub/>
    <Referal/>
    <RegnowBanner
      text-color="#000000"
      bg-color="transparent"
      no-shadow
      container-class="webtools-container"
    >
      <template #title>
                <span style="letter-spacing: -0.25px; line-height: 1.2">
                    Зарегистрируйтесь, чтобы посоветовать Пампаду и&nbsp;начать
                    пассивно зарабатывать со всех их продаж
                </span>
      </template>
    </RegnowBanner>
    <Faq widgets class="webtools-faq"/>
    <MassMedia/>
    <RegnowBanner btn-inverted container-class="webtools-container">
      <template #title>
        <div style="line-height: 1.2">
          Зарегистрируйтесь и запустите онлайн продажи и монетизацию
          своего трафика уже&nbsp;сегодня
        </div>
      </template>
      <template #description>
        <h3
          :style="{
                        textAlign: $vuetify.breakpoint.mdOnly ? 'center' : '',
                    }"
        >
          Все размеры вознаграждений указаны
          в&nbsp;личном&nbsp;кабинете
        </h3>
      </template>
    </RegnowBanner>
  </div>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import WidgetsHead from "@/components/widgets/WidgetsHead.vue";
import Faq from "@/components/common/Faq.vue";
import MassMedia from "@/components/common/MassMedia.vue";
import HeaderSub from "@/components/common/HeaderSub.vue";
import WidgetsHeadSub from "@/components/widgets/WidgetsHeadSub.vue";
import WidgetsHowItWorks from "@/components/widgets/WidgetsHowItWorks.vue";
import AnalyticsService from "@/core/Analytics/Analytics";
import WidgetsProducts from "~/components/widgets/WidgetsProducts.vue";
import WidgetsOffersSlider from '~/components/widgets/WidgetsOffersSlider.vue'
import WhosNeed from "~/components/widgets/WhosNeed.vue";
import Regnow from "~/components/widgets/Regnow.vue";
import RegnowBanner from "~/components/common/regnow/RegnowBanner.vue";
import Referal from "~/components/widgets/Referal.vue";
import OurProducts from "~/components/common/OurProducts.vue";
import HowItWorksCardsV1 from "~/components/common/products/HowItWorksCardsV1.vue";
import ApiHelper from "~/utils/ApiHelper";
import {createJsonLd, generateFAQJSONLD} from "~/utils/createJSON_LD";
import {FaqPages, faqs} from "~/components/common/Faq.vue";
import {Meta} from "~/utils/meta";

@Component({
  components: {
    WidgetsOffersSlider,
    HowItWorksCardsV1,
    OurProducts,
    Referal,
    RegnowBanner,
    Regnow,
    WhosNeed,
    WidgetsProducts,
    HeaderSub,
    Faq,
    MassMedia,
    WidgetsHead,
    WidgetsHeadSub,
    WidgetsHowItWorks,
  },
})
export default class WidgetsMain extends Vue {
  blocks = [
    {code: "widh", title: "Что это"},
    {code: "widop", title: "Инструменты и продукты"},
    {code: "widwn", title: "Кому подходит"},
    {code: "whiw", title: "Как работает"},
    {code: "wir", title: "Партнерка"},
    {code: "mm", title: "О нас"},
  ];

  created() {
    if (typeof window !== "undefined") AnalyticsService.visitWidgets();
  }

  head() {
    return {
      title: "Монетизация страхового и финансового трафика",
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
            "Готовое CPA решение для монетизации страхового и финансового трафика. Виджеты, реф. ссылки по ОСАГО, Ипотечному страхованию и финансовым офферам - платим больше 25 млн. руб. партнерам каждый месяц!",
        },
        Meta.generateOgUrl(this.$route),
      ],
      script: [
        createJsonLd([
          {
            name: "Вебмастерам",
            path: "webtools",
          },
        ]),
        generateFAQJSONLD(faqs.get(FaqPages.Widgets)),
      ],
    };
  }
}
</script>

<style lang="scss">
.webtools-container {
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
}

.webtools-faq {
  .faq-container {
    .v-expansion-panel-header {
      font-size: 18px;
      @media (max-width: $w-sm) {
        font-size: 15px;
      }
    }
  }
}
</style>
