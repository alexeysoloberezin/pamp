<template>
  <div>
    <HeaderSub :block-links="blocks"/>
    <GenericIntro
      h1="Партнерская программа для&nbsp;заработка на&nbsp;РКО"
      h2="Зарегистрируйтесь в&nbsp;личном кабинете и&nbsp;зарабатывайте на&nbsp;открытии счетов для бизнеса не&nbsp;выходя из&nbsp;дома"
      reg-btn-text="Стать партнёром"
      :img-src="introImg"
    />
    <Benefit :items="benefits"/>

    <Offers :block="program" :offers="offers"   :affDetailProgramName="affDetailProgramName"/>

    <ItemsAndCard
      :items="textIconItems"
      :lines="[
                'Отправляйте заявки сразу в несколько банков из единого окна',
                'Оперативно получайте статус по каждому привлеченному лиду',
                'Выплачиваем до 10 тыс. руб. за каждый открытый расчетный счет для бизнеса',
                'Получите гарантированный результат',
            ]"
      order="items-first"
    />
    <HowItWorksCardsV1
      class="mt-10"
      type="rko"
      title="Как работает партнерская программа по РКО?"
      subtitle="Начните зарабатывать на РКО и прочих финансовых офферах лучших банков уже через 5 минут"
    />
    <div class="py-10" style="position: relative;">
      <ScrollAnchor id="rko-banks"/>
      <h2
        class="h2 mx-auto mb-4 text-center px-4"
        v-text="'Работаем с банками, которые приятно рекомендовать'"
      />
      <SliderWrapper type="bank"/>
    </div>
    <WhosNeed
      title="Кому подходит агентская программа банков?"
      page="finoffers"
      bgColor="transparent"
      show-zond
    />
    <ImgTextHalf class="py-10 mb-10" order="img-first" :img-src="imgSrc">
      <h2 class="rko-half-h2">
        Постоянно улучшаем возможности партнерской программы для
        заработка на РКО и других банковских продуктах, чтобы вы
        максимально легко и быстро получали вознаграждение за открытие
        расчетных счетов для бизнеса.
      </h2>
      <div
        v-for="(item, i) in textItems"
        :key="i"
        class="rko-half-container"
      >
        <div class="rko-half-title" v-html="item.title"/>
        <div class="rko-half-text" v-html="item.text"/>
      </div>
    </ImgTextHalf>
    <AboutUs/>
    <Articles :posts="posts" title="Пишем на темы финансовых продуктов и РКО"/>
    <Enjoy/>
  </div>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import HeaderSub from "~/components/common/HeaderSub.vue";
import Enjoy from "~/components/common/Enjoy.vue";
import Articles from "~/components/common/blog/Articles.vue";
import WhosNeed from "~/components/common/products/WhosNeed.vue";
import HowItWorksCardsV1 from "~/components/common/products/HowItWorksCardsV1.vue";
import SliderWrapper from "../../components/common/slider/SliderWrapper.vue";
import ImgTextHalf from "../../components/common/ImgTextHalf.vue";
import Benefit from "../../components/common/products/Benefit.vue";
import RegnowBannerV3 from "../../components/common/regnow/RegnowBannerV3.vue";
import GenericIntro from "../../components/common/GenericIntro.vue";
import ItemsAndCard from "../../components/common/products/ItemsAndCard.vue";
import ScrollAnchor from "~/components/common/ScrollAnchor.vue";
import AboutUs from '~/components/common/AboutUs.vue';
import Offers from "~/components/affiliate-program/Offers.vue";
import ApiHelper from "~/utils/ApiHelper";
import {getProgram, OfferCategories, OfferProgram} from "~/model/entities/affiliateProgramm";
import {Meta} from "~/utils/meta";
import {createJsonLd} from "~/utils/createJSON_LD";
import PostsService from "~/services/PostsService";
import {postsTags, postsTagsForRequest} from "~/model/Article";
import {ProgramUrl} from "~/urls";
import OffersService from "~/services/OffersService";

@Component({
  components: {
    Offers,
    HeaderSub,
    Articles,
    Enjoy,
    WhosNeed,
    HowItWorksCardsV1,
    SliderWrapper,
    ImgTextHalf,
    RegnowBannerV3,
    Benefit,
    GenericIntro,
    ItemsAndCard,
    ScrollAnchor,
    AboutUs
  },
  async asyncData() {
    let program = {
      title: 'Более 15 офферов РКО<br> для зарегистрированных партнеров Пампаду',
      description: 'Зарегистрируйтесь и получите доступ к финансовым офферам надежных банков с выплатами до 12 000 рублей за целевое действие',
      cards: [],
      apiCategory: OfferCategories.SettlementCash
    }

    const offers = await OffersService.getOffers(program.apiCategory)
    if(offers.length){
      program = OffersService.getBlockOffers(
        {program, offersLength: offers.length, descriptionPrice: offers[0].commission})
    }

    const posts = await PostsService.getPosts(postsTagsForRequest[postsTags.webMaster])
    return {
      posts,
      offers,
      program
    };
  }
})
export default class RKOOffer extends Vue {
  posts = []
  program = null
  blocks = [
    {code: "hiw", title: "Как работает?"},
    {code: "rko-banks", title: "Банки-партнеры"},
    {code: "own", title: "Для кого"},
  ];
  offers: any = []
  affDetailProgramName: string = ''

  head() {
    return {
      title: "Партнерская программа РКО -  работа с лучшими банками" + Meta.addPageNumberMetaText(this.$route.query?.page),
      link: [
        {
          rel: 'canonical',
          hid: 'canonical',
          href: ApiHelper.origin + this.$route.path
        },
        Meta.generateOgUrl(this.$route),
      ],
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Начните зарабатывать на партнерской программа РКО, получая до 12 000 ₽ за каждый открытый расчетный счет в банках-партнерах" + Meta.addPageNumberMetaText(this.$route.query?.page),
        },
      ],
      script: [
        createJsonLd([
          {
            name: "РКО",
            path: "rko",
          }
        ]),
      ],
    };
  }

  introImg = "";
  imgSrc = "";

  created() {
    this.introImg = require("@/assets/images/rko/Intro.webp");
    this.imgSrc = require("@/assets/images/rko/selection.webp");
  }

  benefits = [
    "Минимальная сумма на вывод <b>750&nbsp;руб.</b>",
    "Быстрые выплаты сразу после подтверждения заявки",
    "Удобный онлайн-подборщик финансовых продуктов",
  ];
  textIconItems = [
    {
      icon: require("@/assets/images/common/advantages/note.svg"),
      text: "Подбирайте клиенту открытие счётов сразу в&nbspнескольких банках",
    },
    {
      icon: require("@/assets/images/common/advantages/briefcase.svg"),
      text: "Получайте в&nbspонлайне статусы по&nbspвсем заявкам и&nbspлидам",
    },
    {
      icon: require("@/assets/images/common/advantages/clock.svg"),
      text: "Экономьте время оставляя заявки на&nbspРКО из&nbspединого окна",
    },
    {
      icon: require("@/assets/images/common/advantages/hand-percent.svg"),
      text: "Получайте гарантированное вознаграждения с&nbsp;каждого открытого счета",
    },
  ];
  regnowLines = [
    "Удобная регистрация в личном кабинете",
    "Работа из любой точки мира",
    "Личный куратор и онлайн поддержка",
    "Бонусные мотивации от площадки и банков",
    "Полностью электронный документооборот",
  ];
  textItems = [
    {
      title: "Удобство",
      text: "Интуитивно понятный личный кабинет с&nbsp;простым подборщиком продуктов и&nbspонлайн статистикой по&nbspвсем вашим заявкам/лидам.",
    },
    {
      title: "Поддержка",
      text: "Онлайн ответы на&nbspваши вопросы в&nbspчате поддержки, личный куратора и&nbspобучение в&nbspвашем распоряжении сразу после&nbspрегистрации.",
    },
    {
      title: "Высокий доход",
      text: "Добиваемся для&nbspсвоих пользователей высоких вознаграждений на&nbspРКО&nbsp;за&nbspсчёт работы напрямую с&nbsp;банками и&nbspбольшого объёма продаж.",
    },
  ];
}
</script>
<style lang="scss">
.rko-regnow-text {
  font-family: "Roboto";
  font-size: 16px;
  line-height: 36px;

  div {
    position: relative;
  }

  div:before {
    content: "";
    position: absolute;
    left: -26px;
    width: 16px;
    height: 1px;
    top: calc(50% - 1px);
    background: linear-gradient(243.77deg, #a356f3 -7.35%, #6a2be3 107.02%);
  }
}

.rko-half-h2 {
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 17px;
  line-height: 24px;
  color: #000000;
}

.rko-half-container {
  margin-top: 32px;
}

.rko-half-title {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #7936e7;
  margin-bottom: 4px;
}

.rko-half-text {
  font-family: "Roboto";
  font-size: 15px;
  line-height: 21px;
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
