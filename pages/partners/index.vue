<template>
  <div>
    <HeaderSub :block-links="blocks"/>
    <PartnersFirst/>
    <ForWho/>
    <WhatWeDo/>
    <PartnersHowItWorks/>
    <PartnersInsurances/>
    <WhyNeeded/>
    <PartnersAdvantages/>
    <Tech/>
    <PartnersWidget/>
    <MassMedia/>
    <Webtools/>
    <ContactUs/>
  </div>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import PartnersFirst from "@/components/partners/PartnersFirst.vue";
import ForWho from "@/components/partners/ForWho.vue";
import WhatWeDo from "@/components/partners/WhatWeDo.vue";
import PartnersHowItWorks from "@/components/partners/PartnersHowItWorks.vue";
import PartnersInsurances from "@/components/partners/PartnersInsurances.vue";
import WhyNeeded from "@/components/partners/WhyNeeded.vue";
import PartnersAdvantages from "@/components/partners/PartnersAdvandages.vue";
import Tech from "@/components/partners/Tech.vue";
import PartnersWidget from "@/components/partners/PartnersWidget.vue";
import ContactUs from "@/components/partners/ContactUs.vue";
import MassMedia from "@/components/common/MassMedia.vue";
import Webtools from "@/components/common/Webtools.vue";
import HeaderSub from "@/components/common/HeaderSub.vue";
import Footer from "@/components/common/Footer.vue";
import AnalyticsService from "~/core/Analytics/Analytics";
import ApiHelper from "~/utils/ApiHelper";
import {Meta} from "~/utils/meta";
import {createJsonLd} from "~/utils/createJSON_LD";

@Component({
  components: {
    PartnersFirst,
    ForWho,
    WhatWeDo,
    PartnersHowItWorks,
    PartnersInsurances,
    WhyNeeded,
    PartnersAdvantages,
    Tech,
    PartnersWidget,
    ContactUs,
    MassMedia,
    Webtools,
    HeaderSub,
    Footer,
  },
})
export default class PartnersMain extends Vue {
  blocks = [
    {code: "padder", title: "Маркетплейс "},
    {code: "fw", title: "Для кого"},
    {code: "wwd", title: "Что делаем"},
    {code: "phiw", title: "Как работает"},
    {code: "pwu", title: "Почему мы "},
    {code: "mm", title: "О нас пишут"},
  ];

  created() {
    if (typeof window !== "undefined")
      AnalyticsService.visitPartners();
  }

  head() {
    return {
      title: "Маркетплейс по продаже полисов ОСАГО для партнерских сайтов и приложений",
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
          content: "Готовое решение по запуску маркетплейса ОСАГО под вашим брендом в приложении или на сайте. Ваши клиенту смогут расчитать, сравнить и купить полис ОСАГО, а вы получить комиссию.",
        },
        Meta.generateOgUrl(this.$route),
      ],
      script: [
        createJsonLd([
          {
            name: "Партнерам",
            path: "partners",
          }
        ]),
      ],
    };
  }
}
</script>
