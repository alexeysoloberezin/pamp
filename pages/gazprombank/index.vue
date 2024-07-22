<template>
  <div>
    <Intro/>
    <Benefit
      :items="[
                'Минимальная сумма<br>на вывод <b>750 руб</b>.',
                'Быстрые выплаты сразу после&nbsp;подтверждения заявки',
                'Удобный онлайн-подборщик финансовых продуктов',
            ]"
    />
    <Offers :offers="offers" :block="block" :hideShowMoreBtn="true"/>
    <Banner/>
    <Partner/>
    <HowItWorksCardsV1 type="fin" title="Как начать зарабатывать?"
                       subtitle="РКО и прочих финансовых офферах лучших банков"/>
    <About/>
    <Showcase/>
    <Articles :posts="posts" title="Регулярно пишем на тему финансовых офферов"/>
    <Enjoy/>
  </div>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import Articles from "~/components/common/blog/Articles";
import Enjoy from "~/components/common/Enjoy";
import HowItWorksCardsV1 from "~/components/common/products/HowItWorksCardsV1";
import About from "~/components/gazprom-bank/About";
import Showcase from "~/components/gazprom-bank/Showcase";
import Intro from "~/components/gazprom-bank/Intro";
import Benefit from "~/components/common/products/Benefit.vue";
import Partner from "~/components/gazprom-bank/Partner.vue";
import Banner from "~/components/gazprom-bank/Banner.vue";
import ApiHelper from "~/utils/ApiHelper";
import {Meta} from "~/utils/meta";
import {createJsonLd} from "~/utils/createJSON_LD";
import Axios, {axiosUrls} from "~/infrastructure/Axios";
import Offers from "~/components/affiliate-program/Offers";
import PostsService from "~/services/PostsService";
import {postsTags, postsTagsForRequest} from "~/model/Article";
import {ProgramUrl} from "~/urls";
import {pageName} from "~/model/entities/affiliateProgramm/AffiliateOffer";
import {getProgram, OfferProgram, ProgramModel} from "~/model/entities/affiliateProgramm";
import OffersService from "~/services/OffersService";

@Component({
  components: {Partner, Benefit, Intro, Showcase, About, Articles, Enjoy, Offers, HowItWorksCardsV1, Banner},
  async asyncData() {
    const namePage = pageName('gazprombank')
    let data = []
    let find = null

    const dataOffers = {
      title: 'Более 0 офферов Газпромбанка для зарегистрированных партнеров Пампаду',
      description: 'Зарегистрируйтесь и получите доступ к финансовым офферам Газпромбанка с выплатами до 12 000 рублей за целевое действие',
      cards: [],
    }

    try {
      data = await OffersService.getOffers(null, namePage)
      if(data.length){
        find = OffersService.getBlockOffers(
          {program: dataOffers, offersLength: data.length, descriptionPrice: data[0].commission, notAffilProgramm: true})
      }
    } catch (err) {
      console.error(err)
    }

    const posts = await PostsService.getPosts(postsTagsForRequest[postsTags.webMaster])

    return {
      offers: data,
      block: find,
      posts
    };
  },
})
export default class GazpromBank extends Vue {
  posts = []
  block = null
  offers = []
  head() {
    return {
      title: "Партнерская программа Газпромбанк – офферы дебетовой и кредитной карт, кредитов, финансовых услуг",
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
            "Регистрируйтесь на платформе Пампаду, присоединяйтесь к партнерской программе Газпромбанка и получайте комиссионные вознаграждения за каждый проданный финансовый продукт.",
        },
        Meta.generateOgUrl(this.$route),
      ],
      script: [
        createJsonLd([
          {
            name: "Партнерская программа Газпромбанк",
            path: "gazprombank"
          }
        ]),
      ],
    };
  }


}
</script>

<style lang="scss">
.affiliate-program-h2 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 35px;
  line-height: 45px;
  @media (max-width: $w-sm) {
    font-size: 19px;
    line-height: 23px;
  }
}
</style>
