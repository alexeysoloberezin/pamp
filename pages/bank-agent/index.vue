<template>
  <div>
    <!-- <HeaderSub :block-links="blocks" /> -->
    <GenericIntro
      h1=""
      h2="Зарегистрируйтесь в&nbsp;едином личном кабинете и&nbsp;зарабатывайте на&nbsp;продаже финансовых продуктов от&nbsp;ведущих банков с&nbsp;агентской комиссией до&nbsp;12&nbsp;000&nbsp;₽"
      reg-btn-text="Вход в личный кабинет"
      :img-src="introImg"
    >
      <template #h1>
        <div style="position: relative">
          <h1
            class="intro-title"
            style="font-size: 45px"
            v-html="'Станьте агентом банка'"
          />
          <v-slide-x-transition mode="out-in">
            <div
              class="rko-h1-accent"
              v-text="bankName"
              :key="bankName"
            />
          </v-slide-x-transition>
        </div>
      </template>
    </GenericIntro>
    <Benefit :items="benefits"/>
    <ItemsAndCard
      :items="textIconItems"
      :lines="[
                'Отправляйте заявки сразу в несколько банков из единого окна',
                'Оперативно получайте статус по каждому привлеченному лиду',
                'Экономьте свое время с помощью удобного автоматизированного ЛК',
                'Получите гарантированный результат',
            ]"
      order="card-first"
    />
    <HowItWorksCardsV1
      class="mt-10"
      type="rko"
      subtitle="Начните зарабатывать на РКО и прочих финансовых офферах лучших банков уже через 5 минут"
    />
    <div class="py-10">
      <h2
        class="h2 mx-auto mb-4 text-center px-4"
        v-text="'Более 10 надежных и проверенных банков'"
      />
      <SliderWrapper type="bank"/>
    </div>
    <OurProducts :force-tab="1"/>
    <WhosNeed
      title="Кто уже зарабатывает на&nbsp;открытии счетов для&nbsp;бизнеса?"
      page="finoffers"
      bgColor="transparent"
      show-zond
    />
    <RegnowBanner primary btnText="Стать агентом">
      <template #title>Хочешь стать агентом?</template>
      <template #description>
        <div class="pb-4" style="font-family: Roboto">
          Зарегистрируйся сейчас и начни зарабатывать на финансовых
          продуктах
        </div>
      </template>
    </RegnowBanner>
    <Profit type="fin" title-override="Калькулятор вознаграждения"/>
    <Articles
      :posts="posts"
      title="Полезные статьи для банковских агентов"
    />
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
import GenericIntro from "../../components/common/GenericIntro.vue";
import ItemsAndCard from "../../components/common/products/ItemsAndCard.vue";
import Profit from "../../components/common/products/Profit.vue";
import RegnowBanner from "../../components/common/regnow/RegnowBanner.vue";
import OurProducts from "../../components/common/OurProducts.vue";
import ApiHelper from "~/utils/ApiHelper";
import {Meta} from "~/utils/meta";
import {createJsonLd} from "~/utils/createJSON_LD";
import PostsService from "~/services/PostsService";
import {postsTags, postsTagsForRequest} from "~/model/Article";

@Component({
  components: {
    HeaderSub,
    Articles,
    Enjoy,
    WhosNeed,
    HowItWorksCardsV1,
    SliderWrapper,
    ImgTextHalf,
    Benefit,
    GenericIntro,
    ItemsAndCard,
    Profit,
    RegnowBanner,
    OurProducts,
  },
  async asyncData() {
    const posts = await PostsService.getPosts(postsTagsForRequest[postsTags.webMaster])
    return {
      posts
    };
  }
})
export default class BankAgent extends Vue {
  posts = []
  blocks = [
    {code: "oi", title: "Что это"},
    {code: "own", title: "Для кого"},
    {code: "op", title: "Сколько заработаете"},
    {code: "hiw", title: "Как это работает"},
    {code: "moa", title: "О нас"},
  ];

  head() {
    return {
      title: "Станьте агентом банка, партнерские программы проверенных банков",
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
            "Станьте агентом надежного банка-партнера на платформе Пампаду и зарабатывайте комиссионные вознаграждения до 12 000 ₽ за сделку. Альфа Банк, Тинькофф, Сбер, ВТБ, Газпромбанк.",
        },
        Meta.generateOgUrl(this.$route),
      ],
      script: [
        createJsonLd([
          {
            name: "Станьте агентом банка",
            path: `bank-agent`
          }
        ]),
      ],
    };
  }

  introImg = "";

  created() {
    this.introImg = require("@/assets/images/rko/intro-2.png");
  }

  mounted() {
    this.rotateBanks();
  }

  bankName = "Тинькофф";

  rotateBanks() {
    const bankList = [
      "ВТБ",
      "Райффайзен банк",
      "Газпромбанк",
      "Сбербанк",
      "Тинькофф",
    ];
    let i = 0;
    setInterval(() => {
      this.bankName = bankList[i % bankList.length];
      i++;
    }, 5000);
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

.rko-h1-accent {
  background: #4578ff;
  border-radius: 4px;
  padding: 10px 22px;
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 45px;
  line-height: 1;
  color: #ffffff;
  margin-top: 13px;
  display: inline-block;
}
</style>
