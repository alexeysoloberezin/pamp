<template>
  <div>
    <HeaderSub :block-links="blocks" />
    <IntroMultiAgent />
    <NewSourceIncome />
    <BannerAgent />

    <ImageText
      :image="require('@/assets/images/multi-agent/textWithImg/img1.webp')"
      :text="{
        subtitle: 'Мы хотим, чтобы пользователи Пампаду.ру зарабатывали больше и повышали качество своей жизни. Не зацикливайтесь только на страховых продуктах, предлагайте финансовые продукты своим клиентам и знакомым. Становитесь суперменами среди агентов!',
        title: 'Расширяйте продуктовую линейку'
      }"
      :text-no-center="true"
      :mobileImgFirst="true"
      reverse
    />
    <ImageText
      :image="require('@/assets/images/multi-agent/textWithImg/img2.webp')"
      :text="{
        subtitle: 'У каждого страхового агента есть пул клиентов, которые ему доверяют и оформляют страховые полисы не 1 год подряд, также есть близкий круг знакомых и родственников. Предлагайте банковские продукты как бесплатный доп, который не только поможет вам заработать, но и существенно сэкономит клиенту деньги. Подбирайте выгодный для клиента банковский продукт и зарабатывайте больше!',
        title: 'Предлагайте действующим клиентам'
      }"
      :text-no-center="true"
      :mobileImgFirst="true"
    />
    <Profit />

    <HowItWorksCardsV1 subtitle="Начните зарабатывать на фин.офферах уже через 5 минут" />
    <OurProducts :force-tab="1"/>
    <Slider />

    <RegnowBanner
      container-class="generic-container-1260"
      btn-text="Зарегистрироваться"
      btn-inverted
    >
      <template #title>
        Зарегистрируйтесь и бесплатно оцените все возможности заработка на финансовых офферах Пампаду
      </template>
    </RegnowBanner>
    <ImageTextFinance />

    <Faq :page="faqPages.Mortgage" />

    <RegnowBannerV4 />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HeaderSub from "~/components/common/HeaderSub.vue";
import Profit from "~/components/common/products/Profit.vue";
import Faq, { FaqPages } from "~/components/common/Faq.vue";
import IntroMultiAgent from "~/components/multi-agent/IntroMultiAgent.vue";
import NewSourceIncome from "~/components/multi-agent/NewSourceIncome.vue";
import BannerAgent from "~/components/multi-agent/bannerAgent.vue";
import HowItWorksCardsV1 from "~/components/common/products/HowItWorksCardsV1.vue";
import OurProducts from "~/components/common/OurProducts.vue";
import OurPartners from "~/components/agents/OurPartners.vue";
import RegnowBanner from "~/components/common/regnow/RegnowBanner.vue";
import ImageTextFinance from "~/components/offers/ImageTextFinance.vue";
import RegnowBannerV4 from "~/components/common/regnow/RegnowBannerV4.vue";
import ImageText from "~/components/offers/ImageText.vue";
import Products from "~/components/creditcards/Products.vue";
import Slider from "~/components/ipoteka/Slider.vue";
import ApiHelper from "~/utils/ApiHelper";
import {Meta} from "~/utils/meta";
import {createJsonLd} from "~/utils/createJSON_LD";

@Component({
  components: {
    Slider,
    Products,
    ImageText,
    RegnowBannerV4,
    ImageTextFinance,
    RegnowBanner,
    OurPartners,
    OurProducts,
    HowItWorksCardsV1,
    BannerAgent,
    NewSourceIncome,
    IntroMultiAgent,
    HeaderSub,
    Profit,
    Faq,
  },
})

export default class MultiAgent extends Vue {
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
      title: "Стань мульти-агентом и зарабатывай в 3 раза больше",
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
            "Продавай банковские продукты дополнительно к страховым и увеличь свой доход в 3 раза!",
        },
        Meta.generateOgUrl(this.$route),
      ],
      script: [
        createJsonLd([
          {
            name: "Мульти-агент",
            path: "multi-agent"
          }
        ]),
      ],
    };
  }

  faqPages = FaqPages;
}
</script>
