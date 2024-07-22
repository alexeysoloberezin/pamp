<template>
  <div>
    <HeaderSub :block-links="blocks"/>
    <Intro type="fin"/>
    <Benefits
      :items="[
                'Минимальная сумма<br>на вывод <b>750 руб</b>.',
                'Быстрые выплаты сразу после подтверждения заявки',
                'Удобный онлайн-подборщик финансовых продуктов',
            ]"
    />
    <WhosNeed
      title="Кто уже зарабатывает на продаже банковских офферов с Пампаду?"
      page="finoffers"
    />
    <Profit type="fin"/>
    <HowItWorksCardsV1 type="fin" subtitle="фин. офферах"/>
    <RegnowBanner
      primary
      container-class="generic-container-1260"
      btn-text="Зарегистрироваться и узнать!"
    >
      <template #title>
        Зарегистрируйся сейчас<br/>
        и начни зарабатывать на финансовых продуктах
      </template>
    </RegnowBanner>
    <OurProducts :force-tab="1"/>
    <OurPartners/>
    <RegnowBanner
      container-class="generic-container-1260"
      btn-text="Зарегистрироваться"
      :subtitle="bannerText"
      btn-inverted
    >
      <template #title>
        Зарегистрируйтесь и бесплатно оцените все возможности заработка
        на финансовых офферах Пампаду
      </template>
    </RegnowBanner>
    <SeoText :text="seoText" />
    <ImageTextFinance/>
    <WebmasterTools/>
    <RegnowBanner
      container-class="generic-container-1260"
      btn-text="Зарегистрироваться"
      btn-inverted
    >
      <template #title>
        Зарегистрируйте и бесплатно оцените инструменты для веб-мастеров на Пампаду
      </template>
    </RegnowBanner>
    <Faq :page="faqPages.FinOffers"/>
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
import Conditions from "~/components/osago/Conditions.vue";
import Profit from "~/components/common/products/Profit.vue";
import AboutUs from "~/components/common/AboutUs.vue";
import MassMedia from "~/components/common/MassMedia.vue";
import Faq, {FaqPages} from "~/components/common/Faq.vue";
import Webtools from "~/components/osago/archived/Webtools.vue";
import HowItWorksCardsV1 from "~/components/common/products/HowItWorksCardsV1.vue";
import OurProducts from "~/components/common/OurProducts.vue";
import Banks from "~/components/finance/Banks.vue";
import OurPartners from "~/components/agents/OurPartners.vue";
import WebmasterTools from "~/components/finance/WebmasterTools.vue";
import ImageTextFinance from "~/components/offers/ImageTextFinance.vue";
import SeoText from "~/components/common/SeoText.vue";
import ApiHelper from "~/utils/ApiHelper";
import {Meta} from "~/utils/meta";
import {createJsonLd} from "~/utils/createJSON_LD";

@Component({
  components: {
    SeoText,
    ImageTextFinance,
    WebmasterTools,
    OurPartners,
    Webtools,
    MassMedia,
    AboutUs,
    Conditions,
    FirstPolis,
    RegnowBanner,
    OurServices,
    WhosNeed,
    Benefits,
    HeaderSub,
    Intro,
    Profit,
    Faq,
    HowItWorksCardsV1,
    OurProducts,
    Banks,
  },
})
export default class FinOffers extends Vue {
  blocks = [
    {code: "oi", title: "Что это"},
    {code: "own", title: "Для кого"},
    {code: "op", title: "Сколько заработаете"},
    {code: "hiw", title: "Как это работает"},
    {code: "moa", title: "О нас"},
  ];

  head() {
    return {
      title: "Партнерские программы банков - зарабатывайте на финансовых офферах",
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
            "Сервис Pampadu для заработка на продаже на финансовых офферов для агентов, брокеров и вебмастеров по всей России.",
        },
        Meta.generateOgUrl(this.$route),
      ],
      script: [
        createJsonLd([
          {
            name: "Фин. Продукты",
            path: "finance"
          }
        ]),
      ],
    };
  }

  faqPages = FaqPages;

  seoText = `<div><h4>Партнерские программы от банков</h4> – это соглашение между организацией и партнером. Став участником партнерской программы, вы сможете зарабатывать на продаже банковских продуктов (офферов) и приглашении новых клиентов.</div>
<div><h4>Финансовый оффер</h4> – любой банковский продукт, который вы сможете предложить своим знакомым или клиентам. Это кредитная или дебетовая карта, оформление ипотечного или потребительского кредита, ценные бумаги, сберегательный счет, и т.п.
</div>
Заработок подойдет:
<ul>
<li>страховым и финансовым посредникам;</li>
<li>кредитным брокерам;</li>
<li>вебмастерам, блогерам;</li>
<li>каждому, кто заинтересован в дополнительном доходе и работе на дому.</li>
</ul>
Средний доход с продажи финансового продукта – 1 200 ₽, максимальный – 12 000 ₽. Итого, с Pampadu вы сможете ежемесячно зарабатывать от 22 000 до 824 000 ₽.
<h6>Преимущества партнерской программы Пампада</h6>
<ul>
<li><b>Быстрая регистрация.</b> Время регистрации – 5 минут. Минимальная сумма вывода – 750 ₽, на карты Visa, Mastercard, МИР или на счет юридического лица.  Выплаты доступны сразу после подтверждения заявки.</li>
<li><b>Доступность.</b> Работайте в качестве физлица, ИП или самозанятого. Зарабатывайте из любой точки РФ без заключения договоров с банками и оформляйте все документы онлайн.</li>
<li><b>Подробное описание офферов.</b> Под каждым продуктом вы найдете подробное описание и необходимую информацию для работы. За каждый оффер указан размер вознаграждения и условия по оформлению. Например, за продажу кредитной карты вы получите от 1 680 до 8 550 ₽, за оформление ипотеки – от 2 200 до 16 000 ₽.</li>
<li><b>Гибкие способы продвижения и удобные инструменты.</b> Воспользуйтесь виджетами для индивидуального оформления витрины с продуктами. Настройте собственную аналитику с помощью постбеков. Также вы сможете отслеживать онлайн-заявки от клиентов и вести отчетность по продажам. И всё это – на одном сайте!</li>
</ul>
И всё это – на одном сайте!
Pampadu – онлайн-платформа для заработка на партнерских программах от 15 российских банков. К нам присоединилось более 22 тыс. партнеров, которые получили вознаграждение свыше 556 млн рублей.
Сотрудничаем с компаниями: Тинькофф-Страхование, Росгосстрах, «Согласие», Страховой Дом ВСК, и другими.
Зарегистрируйтесь в программе прямо сейчас – получите бесплатный доступ ко всем инструментами и откройте для себя новый вид заработка.
`
}
</script>
