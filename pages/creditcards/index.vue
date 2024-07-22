<template>
  <span>
    <Intro/>
    <Benefit/>
    <Offers :block="program" :offers="offers" />
    <Banner/>
    <Specific/>
    <Profit
      title-override="Калькулятор вознаграждения"
      type="fin"
    />
    <OurProducts :force-tab="1"/>
    <Articles :posts="posts" title="Регулярно пишем на тему финансовых офферов"/>
    <Enjoy/>
  </span>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
import PopularCards from "~/components/creditcards/PopularCards";
import Intro from "~/components/creditcards/Intro";
import Specific from "~/components/creditcards/Specific";
import Profit from "~/components/common/products/Profit";
import Articles from "~/components/common/blog/Articles";
import Enjoy from "~/components/common/Enjoy";
import Benefit from "~/components/creditcards/Benefit";
import Banner from "~/components/creditcards/Banner";
import OurProducts from "~/components/common/OurProducts.vue";
import {OfferType} from "~/model/entities/offer";
import Offers from "~/components/affiliate-program/Offers.vue";
import ApiHelper from "~/utils/ApiHelper";
import {OfferCategories} from "~/model/entities/affiliateProgramm";
import {Meta} from "~/utils/meta";
import {createJsonLd} from "~/utils/createJSON_LD";
import PostsService from "~/services/PostsService";
import {postsTags, postsTagsForRequest} from "~/model/Article";
import OffersService from "~/services/OffersService";

@Component({
  components: {Offers, OurProducts, Banner, Benefit, Enjoy, Articles, Profit, Specific, Intro, PopularCards},
  async asyncData() {
    const posts = await PostsService.getPosts(postsTagsForRequest[postsTags.webMaster])

    let program = {
      title: 'Кто уже зарабатывает<br> на продаже офферов кредитных карт с Пампаду?',
      description: 'Размер вознаграждения по финансовым офферам зависит от продукта. Например, вознаграждение по кредитным картам в 3-5 раз больше, чем по дебетовым. \n',
      cards: [],
      apiCategory: OfferCategories.FinOffersCredit
    }

    const offers = await OffersService.getOffers(program.apiCategory)
    if(offers.length){
      program = OffersService.getBlockOffers(
        {program, offersLength: offers.length, descriptionPrice: offers[0].commission})
    }

    return {
      posts,
      offers,
      program
    };
  }
})
export default class CreditCards extends Vue {
  posts = []
  program = null
  offers: any = []

  head() {
    return {
      title: "Партнерские программы кредитных карт- зарабатывайте на офферах кредитных карт CPA" + Meta.addPageNumberMetaText(this.$route.query?.page),
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
          content: "Партнерские программы кредитных карт: каталог офферов кредитных карт от проверенных банков, особенности работы с этим направлением в финансовой вертикали. Прочие финансовые офферы на платформе Пампаду" + Meta.addPageNumberMetaText(this.$route.query?.page),
        },
        Meta.generateOgUrl(this.$route),
      ],
      script: [
        createJsonLd([
          {
            name: "Кредитные карты: партнерские программы и офферы",
            path: "creditcards"
          }
        ]),
      ],
    };
  }

  dataOffers = {
    title: 'Кто уже зарабатывает<br> на продаже офферов кредитных карт с Пампаду?',
    description: 'Размер вознаграждения по финансовым офферам зависит от продукта. Например, вознаграждение по кредитным картам в 3-5 раз больше, чем по дебетовым. \n',
    cards: [],
    apiCategory: OfferCategories.FinOffersCredit
  }

}
</script>

<style lang="scss">
.credit-cards-container {
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


  .credit-cards-h2 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 35px;
    line-height: 40px;
    @media (max-width: $w-sm) {
      font-size: 19px;
      line-height: 23px;
    }
  }
}

.affiliate-program-h2 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 35px;
  line-height: 105%;
  @media (max-width: $w-sm) {
    font-size: 19px;
    line-height: 23px;
  }
}
</style>
