<template>
  <div>
    <Intro :city="currentCity"/>
    <AboutPampadu :city="currentCity"/>
    <Services :city="currentCity"/>
    <Regnow :city="currentCity"/>
    <Income :city="currentCity"/>
    <Commission :city="currentCity"/>
    <Slider :city="currentCity"/>
    <TryIt :city="currentCity"/>
    <Regions/>
  </div>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import HeaderSub from "@/components/common/HeaderSub.vue";
import Footer from "@/components/common/Footer.vue";
import Intro from "@/components/city/Intro.vue";
import AboutPampadu from "@/components/city/AboutPampadu.vue";
import Services from "@/components/city/Services.vue";
import Regnow from "@/components/city/Regnow.vue";
import Income from "@/components/city/Income.vue";
import Commission from "@/components/city/Commission.vue";
import Slider from "@/components/city/Slider.vue";
import TryIt from "@/components/city/TryIt.vue";
import Regions from "@/components/city/Regions.vue";
import {CityModel, getCity} from "~/model/entities/city";
import {CityUrl} from "~/urls";
import ApiHelper from "~/utils/ApiHelper";
import {Meta} from "~/utils/meta";
import {createJsonLd} from "~/utils/createJSON_LD";

@Component({
  components: {
    TryIt,
    Commission,
    HeaderSub,
    Footer,
    Intro,
    AboutPampadu,
    Regnow,
    Services,
    Income,
    Slider,
    Regions,
  },
  head(this: CityMain): object {
    return {
      title: `Работа страховым агентом в ${this.currentCity?.title}. Зарабатывайте на страховании`,
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
          content: `Работайте страховым агентом в ${this.currentCity?.title} уже сегодня и дистанционно зарабатывайте на всех видах страхования. От ОСАГО до корпоративных видов.`,
        },
        Meta.generateOgUrl(this.$route),
      ],
      script: [
        createJsonLd([
          {
            name: this.currentCity?.name,
            path: `city/${this.selectedCity}`
          }
        ]),
      ],
    };
  },
  fetch(this: CityMain): Promise<void> | void {
    let name = this.$route.params.name;
    this.selectedCity = name.toLowerCase();
  },
  middleware: "isCityExists",
})
export default class CityMain extends Vue {
  blocks = [];
  //Используется для выбора шаблона города
  selectedCity = "";

  get currentCity(): CityModel {
    return getCity(this.selectedCity as CityUrl);
  }
}
</script>
<style lang="scss">
.city-container {
  @media (max-width: $w-xs) {
    padding: 0 18px;
  }
}
</style>
