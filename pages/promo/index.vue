<template>
  <div>
    <Intro/>
    <Earnings/>
    <WhyWe/>
    <Cases/>
    <Enjoy/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
import Intro from "~/components/promo/Intro.vue";
import Earnings from "~/components/promo/Earnings.vue";
import WhyWe from "~/components/promo/WhyWe.vue";
import Cases from "~/components/promo/Cases.vue";
import Enjoy from "~/components/promo/Enjoy.vue";
import ApiHelper from "~/utils/ApiHelper";
import {Meta} from "~/utils/meta";
import {createJsonLd} from "~/utils/createJSON_LD";

@Component({
  components: {Enjoy, Cases, WhyWe, Earnings, Intro}
})
export default class Promo extends Vue {
  head() {
    return {
      title: "Поднимаем вознаграждения - оформляй полисы ипотечного страхования с КВ до 55%!",
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
          content: "Доплачиваем из собственных средств за полисы ипотеки, чтобы повысить заработок агентов до рекордных 55% за каждый оформленный полис!",
        },
        Meta.generateOgUrl(this.$route),
      ],
      script: [
        createJsonLd([
          {
            name: "Промо",
            path: "promo",
          }
        ]),
      ],
    };
  }
}
</script>

<style lang="scss">
.promo-container {
  max-width: 1260px;
  margin: 0 auto;
  padding: 0 25px;
  @media (max-width: $w-md) {
    max-width: 800px;
  }
  @media (max-width: $w-sm) {
    max-width: 600px;
    padding: 0 15px;
  }
}
</style>
