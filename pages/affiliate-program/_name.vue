<template>
  <div v-if="currentProgram">
    <Intro :block="currentProgram.blocks.intro"/>
    <Benefit :items="benefitItems"/>
    <Offers :block="currentProgram.blocks.offers" :offers="offers" :hideShowMoreBtn="isMain"/>
    <Banner :bank="currentProgram.name" :hideName="isMain" :mfoOffers="mfoOffers"/>
    <Partner v-if="!isMain" :block="currentProgram.blocks.partner"/>
    <AboutProgram
      v-if="currentProgram.blocks.aboutProgram"
      :type="currentProgram.type"
      :name="currentProgram.name"
      :block="currentProgram.blocks.aboutProgram"
    />
    <Rating v-if="!isMain && !mfoOffers" :bank="currentProgram.name"/>
    <HowItWorksCardsV1 type="fin" title="Как начать зарабатывать?"
                       subtitle="РКО и прочих финансовых офферах лучших банков"/>
    <OurProducts v-if="isMain || mfoOffers" :title="currentProgram.blocks?.ourProducts?.title" :force-tab="1"/>
    <Partner v-if="isMain || mfoOffers" :block="currentProgram.blocks.partner"/>

    <template v-if="isMain || mfoOffers">
      <ImageText
        v-for="(item, idx) in aboutProduct"
        :key="idx"
        :text="item.text"
        :image="item.image"
        :register="item.register"
        :reverse="item.reverse"
      />
    </template>

    <WebmasterTools v-if="isMain || mfoOffers"/>
    <AboutUs/>

    <template v-if="!isMain && !mfoOffers">
      <PampaduBenefit/>
      <Showcase/>
      <PartnersSlider/>
      <Reviews product="affiliateProgram"/>
    </template>
    <ICSlider v-if="mfoOffers" :page="Pages.mfoOffers" :type="currentProgram.type"/>
    <Faq :page="faqPage"/>
    <Articles :posts="posts" title="Регулярно пишем на тему финансовых офферов"/>
    <Enjoy/>
  </div>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import Offers from "~/components/affiliate-program/Offers";
import Showcase from "~/components/affiliate-program/Showcase";
import About from "~/components/affiliate-program/About";
import Intro from "~/components/affiliate-program/Intro";
import Partner from "~/components/affiliate-program/Partner";
import Banner from "~/components/affiliate-program/Banner";
import Articles from "~/components/common/blog/Articles";
import Enjoy from "~/components/common/Enjoy";
import HowItWorksCardsV1 from "~/components/common/products/HowItWorksCardsV1";
import Benefit from "~/components/common/products/Benefit.vue";
import {getProgram, mfoZoom, ModelTypes, OfferCategories, ProgramModel} from "~/model/entities/affiliateProgramm";
import {ProgramUrl} from "~/urls";
import PampaduBenefit from "~/components/affiliate-program/PampaduBenefit.vue";
import WhyWe from "~/components/affiliate-program/WhyWe.vue";
import AboutProgram from "~/components/affiliate-program/AboutProgram.vue";
import AboutUs from "~/components/common/AboutUs.vue";
import PartnersSlider from "~/components/common/slider/PartnersSlider.vue";
import Reviews from "~/components/common/Reviews/Reviews.vue";
import Faq, {FaqPages} from "~/components/common/Faq.vue";
import Rating from "~/components/affiliate-program/Rating.vue";
import OurProducts from "~/components/common/OurProducts.vue";
import ImageText from "~/components/offers/ImageText.vue";
import WebmasterTools from "~/components/finance/WebmasterTools.vue";
import ICSlider from "~/components/common/slider/ICSlider.vue";
import {Pages} from "~/model/entities/pages";
import ApiHelper from "~/utils/ApiHelper";
import {Meta} from "~/utils/meta";
import Axios, {axiosUrls} from "~/infrastructure/Axios";
import {createJsonLd} from "~/utils/createJSON_LD";
import {pageName} from "~/model/entities/affiliateProgramm/AffiliateOffer";
import PostsService from "~/services/PostsService";
import {postsTags, postsTagsForRequest} from "~/model/Article";
import OffersService from "~/services/OffersService";
import {filterBanks, filterOffers} from "~/model/entities/offer";

@Component({
  computed: {
    Pages() {
      return Pages
    }
  },
  components: {
    ICSlider,
    WebmasterTools,
    ImageText,
    OurProducts,
    Rating,
    Faq,
    Reviews,
    PartnersSlider,
    AboutUs,
    AboutProgram,
    WhyWe,
    PampaduBenefit,
    Partner,
    Benefit,
    Intro,
    Showcase,
    About,
    Articles,
    Enjoy,
    Offers,
    HowItWorksCardsV1,
    Banner
  },


  head(this: AffiliateProgram): object {
    const canonicalLink = {
      rel: 'canonical',
      hid: 'canonical',
      href: ApiHelper.origin + this.$route.path
    };

    return {
      title: this.currentProgram?.meta.title + Meta.addPageNumberMetaText(this.$route.query?.page),
      link: [canonicalLink],
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.currentProgram?.meta.description + Meta.addPageNumberMetaText(this.$route.query?.page)
        },
        Meta.generateOgUrl(this.$route),
      ],
      script: [
        createJsonLd([
          {
            name: this.currentProgram?.blocks.intro.title,
            path: `affiliate-program/${this.currentProgram?.url}`
          },
        ])
      ]
    };
  },

  async asyncData({params, redirect}) {
    const name = params.name.toLowerCase() as ProgramUrl

    if(name === 'ekspobank'){
      redirect('/affiliate-program/banks/');
    }

    let find = null
    let namePage = null

    let program = getProgram(name)

    let offers = null
    namePage = pageName(params.name)

    if (program.type === ModelTypes.MfoZoom) {
      try {
        offers = await OffersService.getOffers(OfferCategories.MicroCredit, namePage)

        find = offers.find(item =>
          item.title.toLowerCase().includes(namePage.toLowerCase()) || item.content.toLowerCase().includes(namePage.toLowerCase())
        )

        if (find) {
          find = mfoZoom({url:params.name, name: namePage, logo: find.icon, content: find.content})
        }
      } catch (err) {
        console.error(err)
      }
    }else if(program.name === 'Banks'){
      offers = await OffersService.getOffers()
      offers = filterBanks(offers)
      if(offers.length){
        find = OffersService.getBlockOffers(
          {program, offersLength: offers.length, descriptionPrice: offers[0].commission})
      }
    }else{
      offers = await OffersService.getOffers(program.blocks.offers?.apiCategory, namePage)
      if(offers.length){
        find = OffersService.getBlockOffers(
          {program, offersLength: offers.length, descriptionPrice: offers[0].commission})
      }
    }

    const posts = await PostsService.getPosts(postsTagsForRequest[postsTags.webMaster])

    return {
      program: name,
      programModel: find,
      offers,
      posts
    }
  },

  middleware:
    "isAffiliateProgramExists",
})
export default class AffiliateProgram extends Vue {
  posts = []
  offers = []
  program: ProgramUrl = null;
  programModel: ProgramModel = null

  get faqPage(): FaqPages {
    return this.currentProgram?.blocks.faq || FaqPages.FinOffers
  }

  get currentProgram(): ProgramModel {
    if(this.programModel) {
      return this.programModel
    }

    return getProgram(this.program);
  }

  get isMain(): boolean {
    const program = getProgram(this.program)
    return program && program.type === 'main'
  }

  get mfoOffers(): boolean {
    const program = getProgram(this.program)
    return program && program.type === 'mfoOffer'
  }

  benefitItems = [
    'Минимальная сумма<br>на вывод <b>750 руб</b>.',
    'Быстрые выплаты сразу после&nbsp;подтверждения заявки',
    'Удобный онлайн-подборщик финансовых продуктов',
  ]

  aboutProduct = [
    {
      text: {
        title: 'Современный интерфейс и удобный подборщик',
        subtitle: 'Получите релевантные предложения по продуктам за 5 минут исходя из потребностей ваших клиентов'
      },
      image: require("@/assets/images/offers/fin-1.webp"),
    },
    {
      text: {
        title: 'Все материалы по продукту на одной странице',
        subtitle: 'Обучение, ответы на частые вопросы, подсказки и материалы в вашем распоряжении сразу после регистрации!'
      },
      reverse: true,
      register: true,
      image: require("@/assets/images/offers/fin-2.webp"),
    },
  ]
}
</script>

<style lang="scss">
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
