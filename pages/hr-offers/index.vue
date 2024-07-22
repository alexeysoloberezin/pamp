<template>
  <div>
    <HeaderSub :block-links="blocks"/>
    <Intro type="hr"/>
    <Benefits
      :items="[
                'Вознаграждение на Пампаду в среднем <b>на 20% больше</b>.',
                'Быстрые выплаты сразу после подтверждения работодателем',
                'Удобный онлайн-подборщик вакансий',
            ]"
    />
    <WhosNeed
      title="Кто уже зарабатывает на&nbsp;HR&nbsp;офферах с Пампаду?"
      page="hr"
    />
    <Profit type="hr"/>
    <HowItWorksCardsV1 type="hr" subtitle="HR офферах"/>
    <RegnowBanner
      primary
      container-class="generic-container-1260"
      btn-text="Зарегистрироваться и узнать!"
    >
      <template #title>
        Зарегистрируйся сейчас<br/>
        и начни зарабатывать на HR офферах Пампаду
      </template>
    </RegnowBanner>

    <ImageText :image="image[0]" :text="texts[0]"/>
    <ImageText :image="image[1]" :text="texts[1]" reverse register/>
    <Faq :page="faqPages.HROffers"/>
    <AboutUs
      background="transparent"
      shaded
      container-class="generic-container-1260"
    />
    <MassMedia/>
    <RegnowBanner
      primary
      container-class="generic-container-1260"
      btn-text="Присоединиться"
    >
      <template #title>
        Начните зарабатывать на финансовых офферах вместе с командой
        профессионалов
      </template>
    </RegnowBanner>
  </div>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import Intro from "~/components/offers/Intro.vue";
import HeaderSub from "~/components/common/HeaderSub.vue";
import Benefits from "~/components/common/products/Benefit.vue";
import WhosNeed from "~/components/common/products/WhosNeed.vue";
import OurServices from "~/components/common/OurServices.vue";
import RegnowBanner from "~/components/common/regnow/RegnowBanner.vue";
import FirstPolis from "~/components/osago/archived/FirstPolis.vue";
import AvailableRegions from "~/components/osago/archived/AvailableRegions.vue";
import Conditions from "~/components/osago/Conditions.vue";
import Profit from "~/components/common/products/Profit.vue";
import AboutUs from "~/components/common/AboutUs.vue";
import MassMedia from "~/components/common/MassMedia.vue";
import Faq, {FaqPages} from "~/components/common/Faq.vue";
import Webtools from "~/components/osago/archived/Webtools.vue";
import HowItWorksCardsV1 from "~/components/common/products/HowItWorksCardsV1.vue";
import ImageText from "~/components/offers/ImageText.vue";
import ApiHelper from "~/utils/ApiHelper";
import {Meta} from "~/utils/meta";
import {createJsonLd} from "~/utils/createJSON_LD";

@Component({
  components: {
    HowItWorksCardsV1,
    Webtools,
    MassMedia,
    AboutUs,
    Conditions,
    AvailableRegions,
    FirstPolis,
    RegnowBanner,
    OurServices,
    WhosNeed,
    Benefits,
    HeaderSub,
    Intro,
    Profit,
    Faq,
    ImageText,
  },
})
export default class HROffers extends Vue {
  blocks = [
    {code: "oi", title: "Что это"},
    {code: "own", title: "Для кого"},
    {code: "op", title: "Сколько заработаете"},
    {code: "hiw", title: "Как это работает"},
    {code: "moa", title: "О нас"},
  ];

  head() {
    return {
      title: "Партнерские программы HR офферов  - монетизация job-трафика",
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
            "Сервис для заработка на партнерской программе HR офферов, белые HR-офферы крупнейших работодателей страны на сайте Pampadu.",
        },
        Meta.generateOgUrl(this.$route),
      ],
      script: [
        createJsonLd([
          {
            name: "Подбор персонала",
            path: "hr-offers"
          }
        ]),
      ],
    };
  }

  faqPages = FaqPages;

  image = [
    require("@/assets/images/offers/hr-1.png"),
    require("@/assets/images/offers/hr-2.png"),
  ];
  texts = [
    {
      title: "Современный интерфейс и умный подбор вакансий",
      subtitle:
        "Получите релевантные предложения по вакансиям для потенциальных соискателей, используя фильтры",
    },
    {
      title: "Все материалы по продукту на одной странице",
      subtitle:
        "Обучение, ответы на частые вопросы, подсказки и материалы в вашем распоряжении сразу после регистрации!",
    },
  ];
}
</script>
