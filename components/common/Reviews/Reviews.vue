<template>
  <div class="common-reviews">
    <div style="position: absolute; top: -120px" id="mor"/>
    <div class="generic-container-1260">
      <h2
        class="h2 font-weight-bold text-center reviews-title"
        v-html="'Отзывы тех, кто&nbsp;уже&nbsp;попробовал'"
      />
      <h3
        class="h5 text-center mx-auto mt-3 mb-8 reviews-subtitle"
        style="max-width: 750px; font-family: Montserrat, sans-serif"
        v-text="subtitle"
      />
      <v-layout
        :column="$vuetify.breakpoint.smAndDown"
        align-center
        justify-center
        v-if="showRatings"
      >
        <a
          href="https://g.page/Pampadu?share"
          class="ma-2"
          target="_blank"
        >
          <img
            src="@/assets/images/reviews/googleReviews.webp"
            alt="google"
          />
        </a>
        <iframe
          class="ma-2"
          src="https://yandex.ru/sprav/widget/rating-badge/195939798581"
          width="150"
          height="50"
          frameborder="0"
        ></iframe>
      </v-layout>
      <div
        class="reviews-wrapper"
        :style="`--review-column-count: ${columnCount}`"
      >
        <template v-if="$vuetify.breakpoint.mdAndUp">
          <ReviewItem
            v-for="(review, index) in reviewsData"
            :key="index"
            :review="review"
            :index="index"
          />
        </template>
        <v-slide-x-reverse-transition group leave-absolute v-else>
          <ReviewItem
            v-for="(review, index) in reviewsData"
            :key="`${index}${currentSlide}`"
            :review="review"
            :index="index"
          />
        </v-slide-x-reverse-transition>
      </div>
      <div
        v-if="$vuetify.breakpoint.smAndDown"
        style="width: 100%"
        class="mt-10"
        key="carousbtns"
      >
        <div class="au-carousel-btn-container">
          <div
            @click="goBack()"
            class="au-carousel-btn"
            :class="{ disabled: currentSlide === 0 }"
          >
            <img
              src="@/assets/images/bl2/arrow-dir.svg"
              alt="arrow-left"
            />
          </div>
          <div
            @click="goForward()"
            class="au-carousel-btn"
            :class="{ disabled: isForwardDisabled }"
          >
            <img
              style="transform: rotate(180deg)"
              src="@/assets/images/bl2/arrow-dir.svg"
              alt="arrow-right"
            />
          </div>
        </div>
      </div>
      <v-layout class="my-10" justify-center>
        <zond-btn
          v-if="btn == 'zond'"
          style="min-width: 183px"
          v-text="'Попробовать'"
        />

        <div
          v-else
          @click="$router.push('/reviews/')"
          style="
                        min-width: 184px;
                        text-align: center;
                        border-radius: 2px !important;
                    "
          class="btn"
          v-text="'Больше отзывов'"
        />
      </v-layout>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from "vue-property-decorator";
import ReviewItem from "~/components/common/Reviews/ReviewItem";
import ScrollAnchor from "~/components/common/ScrollAnchor.vue";

@Component({components: {ScrollAnchor, ReviewItem}})
export default class Reviews extends Vue {
  @Prop({default: () => "mortgage"}) product:
    | "mortgage"
    | "osago"
    | "minikasko"
    | "affiliateProgram"
    | "ref"
    | "kasko";
  @Prop({default: () => "zond"}) btn: "zond" | "reviews";
  @Prop(Boolean) showRatings: boolean;
  reviewsMortgage = [
    {
      name: "Светлана",
      text: `
        <p class="review-text">
          До этого оформляла в основном только ОСАГО и иногда КАСКО, после того как на Пампаду появилась ипотека попробовала и её, разобралась быстро.
          Оказалось все гораздо проще, почти тоже самое, как оформить ОСАГО, а главное — также обязательно, поэтому продавать очень легко.
          Клиентов нашла, обзвонив свою базу и рассказав о новой услуге.
        </p>
        <p class="review-text">
          На удивление, почти у каждого шестого есть ипотека, сразу попались те, кому надо было уже совсем скоро продлевать полис.
          В результате три сделки, с одной из них моя комиссия была 30% или аж 11 тыс. ₽. Страховка была от Альфы для Сбера. Жду появления новых банков и страховых.
        </p>
        <p class="review-text">
            Удобно, что почти нет сегментации и доступна вся Россия. Работаю как самозанятая, деньги сразу на карту с продажи поступают.
        </p>
      `,
      person: "Страховой агент",
      profileImage: require("@/assets/images/ipoteka/reviews/1.png"),
      location: "Москва",
    },
    {
      name: "Марина",
      text: `
        <p class="review-text">
          Работаю на  юге  России, у  нас  бурно тут  растёт рынок, все  скупают как  раз  в  ипотеку. Раньше все  страховки через  банк клиенту делали, теперь часть оформляю в  Пампаду.
          Банк конечно свои продвигает, но  они  гораздо дороже выходят, поэтому там, где получается, оформляем дешевле тут.
        </p>
        <p class="review-text">
          До  этого все,  что  было, отдавала знакомому страховому агенту, думала все  сложно, да  и  деньги казались маленькие, ан  нет!
          Оказалось очень быстро и  удобно, сразу разобралась, на  несколько вопросов помогли с ответами в  поддержке)
        </p>
        <p class="review-text">
          Делаю самостоятельно, с  полиса 2–5  тыс.  ₽  выходит, все  зависит от  суммы долга. В  месяц теперь дополнительно 25–30  тыс. без  напряга.
          Рекомендую риэлторам пообщаться с  прошлогодними клиентами, они  как  раз  будут продлевать страхование, а  вы  им дешевле сделаете, да  и  сами заработаете.
        </p>
      `,
      person: "Риэлтор",
      profileImage: require("@/assets/images/ipoteka/reviews/2.png"),
      location: "Краснодар",
    },
    {
      name: "Андрей",
      text: `
        <p class="review-text">
          У меня сайт небольшой по недвижимости, постоянно думаю как   монетизировать, CPA офферы подключал, трафик   лил.
          Попробовал виджет страхования ипотеки, настроил за   5   минут, цвет как   мой   сайт, клиенты думают, что   рассчитывают и   покупают у   меня.
        </p>
        <p class="review-text">
          После   установки пошли расчёты и   редкие покупки. Вся   статистика, расчёты и   покупки есть   в   личном кабинете.
          Заметил, что   для   юзера удобный пользовательский путь, быстрый предварительный расчёт. Позже начал лить платный трафик по запросам страхования ипотеки,
          добился ROI 1,3,   что   считаю неплохо. Надо,   конечно, рекламные кампании докрутить, не   все   банки пока доступны, но   на   Сбере хорошо конвертится.
        </p>
        <p class="review-text">
            Для   приложений и   сайтов нужной тематики полезный инструмент монетизации.
        </p>
      `,
      person: "Вебмастер",
      profileImage: require("@/assets/images/ipoteka/reviews/3.png"),
      location: "Санкт-Петербург",
    },
    {
      name: "София",
      text: `
        <p class="review-text">
          Мы занимаемся подбором ипотечных займов, работаем почти со всеми банками. В сторону страхования особо не смотрели, всегда казалось — сложно, долго и не интересно.
          Вместо того, чтобы самим делать, отдавали кому-то.
        </p>
        <p class="review-text">
          Коллеги порекомендовали попробовать пару продаж сделать в Пампаду.
          Прочитав одну статью, поняли, что ничего сложного. Быстрый расчет, сравниваем цены, наша комиссия видна по каждой страховой, что удобно.
          Раздали доступы менеджерам, теперь в обязательном порядке и страховки считаем. К каждой сделке добавили 5-15 тыс. руб. За месяц хорошая надбавка получается.
        </p>
        <p class="review-text">
            Чаще всего оформляем для Сбера и ВТБ. Выплаты все вовремя, работаем в качестве ИП.
        </p>
      `,
      person: "Ипотечный брокер",
      profileImage: require("@/assets/images/ipoteka/reviews/4.png"),
      location: "Санкт-Петербург",
    },
  ];
  reviewsOsago = [
    {
      name: "Андрей",
      text: `
                <p class="review-text">
                Хорошая платформа, сайт работает без ошибок. Если появляются вопросы служба поддержки всегда поможет. (Вопросы появляются как правило не по самой платформе, а в результате сбоев еаисто и т.д) работают быстрые выплаты для физ.лиц и самозанятых, было бы интересно запустить какие-нибудь программы обучающие по привлечение клиентов для агентов
                </p>
            `,
      person: "Самозанятый на платформе более года",
      profileImage: require("@/assets/images/reviews/data/1.jpg"),
      location: "Москва",
    },
    {
      name: "Светлана",
      text: `
                <p class="review-text">
                Очень удобная и понятная платформа, Доступен поиск по рег.номеру данных, удобно заполнять поля. Хорошая тех. Поддержка оперативно отвечают на вопросы, Высокое КВ Очень удобно отправлять ссылки на оплату, выплаты без задержки
                </p>
            `,
      person: "Физ.лицо на&nbsp;платформе 1,5&nbsp;года",
      profileImage: require("@/assets/images/reviews/data/2.jpg"),
      location: "Киров",
    },
    {
      name: "Василий",
      text: `
                <p class="review-text">
                На площадке хорошая проходимость. Удобный интерфейс. Полюса приходят без задержек на электронную почту. Комиссия тоже хорошая, рекомендую этот агрегатор всем, кто зарабатывает на ОСАГО! Комиссия приходит в 20-тых числах без задержек.
                </p>
            `,
      person: "ИП на&nbsp;платформе 2&nbsp;года",
      profileImage: require("@/assets/images/reviews/data/3.jpg"),
      location: "Астрахань",
    },
  ];
  reviewsMinikasko = [
    {
      name: "Алина",
      text: `
                  <p class="review-text">
                      Все очень удобно. Расчеты можно получить, указав только стоимость и год выпуска авто. Поэтому считаю прямо в ходе общения с клиентом, тут же озвучиваю ему цены, консультирую по условиям. Разобраться в этом тоже было не сложно, выручила сравнительная таблица из раздела помощи.
                  </p>
                  <p class="review-text">
                    Занимаюсь страхованием ОСАГО уже 9 лет, мини-КАСКО раньше продавала не часто. А сейчас нередко клиенты спрашивают страховку от бесполисных, и сама предлагаю некоторым.
                    Стараюсь оформлять через вашу платформу, хотя у меня есть прямые договоры с Альфой, Ренессансом, Ингосстрахом, Рессо, РГС. Во-первых, комиссию вы начисляете в тот же день, а не спустя месяц. Во-вторых, у вас есть ВСК и Согласие. ВСК берет на страхование авто до 15 лет, а у Согласия программа почти как обычное КАСКО.
                  </p>
              `,
      person: "Страховой агент",
      profileImage: require("@/assets/images/reviews/data/alina.png"),
      location: "Уфа",
    },
    {
      name: "Олег",
      text: `
                  <p class="review-text">Оформляю полисы мини-КАСКО по запросам знакомых и все чаще для клиентов. </p>
                  <p class="review-text">В последнее время какой-то всплеск ДТП, когда виновник без полиса. Мне не сложно просудиться, но взыскать порой муторно. Виновник может быть безработным или получать до 15 тысяч. Вы не получите с него ничего, если он не пенсионер и не имеет движимого имущества. Да и в случае с имуществом — не факт. Не хотят приставы работать или не могут. Будет у вас в госуслугах пометка, что возбуждено исполнительное производство, и все. Оно может длиться 3 года и потом возвращается. И хотя через полгода вы имеете право возобновить производство, ситуация вряд ли изменится. Поэтому всем советую оформлять мини-КАСКО. Пусть с учетом износа, но живые деньги вы получите. Проще заплатить и спать спокойно.</p>
              `,
      person: "Юрист по страховым спорам",
      profileImage: require("@/assets/images/reviews/data/oleg.png"),
      location: "Москва",
    },
  ];
  reviewsRef = [
    {
      name: "Марина",
      text: `
                  <p class="review-text">
                   Пампаду современная платформа, на ней имеется большое количество офферов от ведущих банков, страховых компаний, а также крупнейших работодателей!
                  </p>
                  <p class="review-text"> Работаю в разных направлениях. Это не сложно, на сайте можно отследить всю необходимую информацию, хорошая процентная ставка и своевременные выплаты! А также не плохая партнерская программа, по ней также идут начисления, а говорить о платформе одно удовольствие, так как все честно.</p>
              `,
      person: "Страховой агент",
      profileImage: require("@/assets/images/reviews/data/marina.png"),
      location: "Уфа",
    },
    {
      name: "Кирилл",
      text: `
                  <p class="review-text">Сам я перестал активно продавать, но получаю доход по реферальной программе. Порадовало, что обновили программу.
                  Я увидел уведомление, что Пампаду начали начислять по рефералам и за карты, кредиты, разные финансовые офферы и за найм, стало гораздо проще поддерживать уровень пассивного дохода.
                  </p>
                  <p class="review-text">Раньше тоже начисляли бонус за рефералов, но только по ОСАГО, а у меня мало знакомых агентов было.
                   А сейчас разместил ссылку у себя в нескольких пабликах на тему заработка, пошли регистрации и продажи, я доволен и с радостью рекомендую площадку!</p>
              `,
      person: "Страховой агент",
      profileImage: require("@/assets/images/reviews/data/kirill.png"),
      location: "Москва",
    },
  ];
  reviewsKasko = [
    {
      name: "Марина",
      text: `
                  <p class="review-text">
                      Понравилось работать через платформу, приведу случай из практики по КАСКО. Клиент очень настаивал на пролонгации в своей СК, при этом я в данной ситуации я почти не получила бы КВ. Обратилась к менеджеру Пампаду, мне сделали перерасчет в другой СК, на условиях намного лучше, чем пролонгация у клиента. Меня подробно проконсультировали, я смогла донести до клиента все преимущества этого предложения, он согласился, и мы оформили полис. Всё оперативно, отвечали многочисленные вопросы, были на связи. Обязательно обращусь ещё.
                  </p>
              `,
      person: "Страховой агент",
      profileImage: require("@/assets/images/reviews/data/marina.png"),
      location: "Уфа",
    },
    {
      name: "Кирилл",
      text: `
                  <p class="review-text">Я хотел бы выразить отдельную благодарность менеджеру Пампаду Светлане, которая помогла оформить КАСКО важному мне клиенту в срок. Те, кто сталкивался с оформлением КАСКО, знают, что для оформления полиса может понадобиться осмотр автомобиля. Несмотря на ошибки со стороны страховой и накладки с экспертом, мы смогли выпустить полис за 180 тысяч, клиент остался доволен, я получил свое КВ. Спасибо за сопровождение, пришлось вызывать другого эксперта и успокаивать клиента, но всё завершилось успешно! Хоть КАCКО и непростой продукт, полученное КВ того стоит)</p>
              `,
      person: "Страховой агент",
      profileImage: require("@/assets/images/reviews/data/kirill.png"),
      location: "Москва",
    },
  ];
  reviewsAffiliateProgram = [
    {
      name: "Марина",
      text: `
        <p class="review-text">
         Зарегистрировалась за 2 минуты. Сразу бросилось в глаза большой выбор банковских продуктов и достойные вознаграждения.
        </p>
        <p class="review-text">
          Начинала с 2 продаж, как только вывела первые деньги решила масштабироваться. Сейчас оформляю около 8-10 карт в неделю, что существенно увеличило мой доход в целом. (Дополнительно работаю на основной работе).
        </p>
        <p class="review-text">
          Больших проблем ещё не встречала, любой вопрос решается быстро через службу поддержки. Выплаты на карту получаю моментально. Отличный сервис! Главное, держите планку)
        </p>
      `,
      person: "Риэлтор",
      profileImage: require("@/assets/images/ipoteka/reviews/2.png"),
      location: "Краснодар",
    },
    {
      name: "София",
      text: `
        <p class="review-text">
         Пампаду лучшие! Работаю страховым агентом, в основном продавала ОСАГО и ипотечное страхование. Как только появились фин. продукты начала предлагать их своим клиентам.
        </p>
        <p class="review-text">
         Радует большой выбор. Почти каждому клиенту можно подобрать выгодную для него карту, благодаря которой он будет экономить, да ещё и заработать с этого больше, чем получается со страхования.
        </p>
        <p class="review-text">
            Ежемесячный доход вырос на 35% и продолжает расти. Рекомендую данную платформу.
        </p>
      `,
      person: "Страховой агент",
      profileImage: require("@/assets/images/ipoteka/reviews/4.png"),
      location: "Санкт-Петербург",
    },
  ]

  get reviews() {
    return {
      mortgage: this.reviewsMortgage,
      osago: this.reviewsOsago,
      minikasko: this.reviewsMinikasko,
      kasko: this.reviewsKasko,
      affiliateProgram: this.reviewsAffiliateProgram,
      ref: this.reviewsRef,
    }[this.product];
  }

  get columnCount() {
    return {
      mortgage: 2,
      osago: 3,
      minikasko: 2,
      kasko: 2,
      affiliateProgram: 2,
      ref: 2,
    }[this.product];
  }

  get subtitle() {
    return {
      mortgage:
        "Мы попросили рассказать о своем опыте: сомнениях, первой сделке, откуда клиенты и сколько удается зарабатывать",
      osago: "почему агенты выбирают продажи ОСАГО через Пампаду",
      minikasko:
        "почему агенты выбирают продажи мини-КАСКО через Пампаду",
      kasko:
        "почему агенты выбирают продажи КАСКО через Пампаду",
      affiliateProgram: "Мы попросили рассказать о своем опыте: сомнениях, первой сделке, откуда клиенты и сколько удается зарабатывать",
      ref: "почему агенты выбирают реферальную программу Пампаду",
    }[this.product];
  }

  currentSlide = 0;

  goBack() {
    if (this.currentSlide > 0) this.currentSlide--;
  }

  goForward() {
    if (!this.isForwardDisabled) this.currentSlide++;
  }

  @Watch("currentSlide")
  showReadMoreBtn() {
    // this.$refs["read-more"][0].style.display = "block";
  }

  get isForwardDisabled() {
    return this.currentSlide == this.reviews.length - 1;
  }

  get reviewsData() {
    return this.$vuetify.breakpoint.mdAndUp
      ? this.reviews
      : this.reviews.slice(this.currentSlide, this.currentSlide + 1);
  }
}
</script>

<style lang="scss">
.common-reviews {
  padding: 75px 0;
  position: relative;
  @media (max-width: $w-sm) {
    padding: 35px 0;
  }

  .reviews-title {
    position: relative;

    &:before {
      position: absolute;
      content: url("@/assets/images/ipoteka/reviews/right-bg.svg");
      right: -120px;
      top: -30px;
      @media (max-width: $w-xs) {
        display: none;
      }
    }
  }

  .reviews-wrapper {
    display: grid;
    grid-template-columns: repeat(var(--review-column-count), 1fr);
    grid-gap: 25px;
    margin-top: 40px;
    justify-content: center;
    @media (max-width: $w-sm) {
      grid-template-columns: minmax(200px, 500px);
    }
  }

  .common-review {
    box-shadow: 0px 33px 26px -19px rgba(170, 142, 255, 0.18) !important;
    border: 1px solid #e2e6f4;
    border-radius: 15px;

    .review-header {
      padding: 20px 30px;
      background: #f2f5ff;
      @media (max-width: $w-sm) {
        padding: 20px 20px 15px 15px;
      }
    }

    .review-content {
      padding: 20px 25px 35px;
      @media (max-width: $w-sm) {
        padding: 20px 20px 15px 15px;
        .review-text {
          @media (max-width: $w-sm) {
            font-size: 13px;
          }
        }
        .review-text:not(:first-child) {
          display: none;
        }
      }
    }
  }

  .au-carousel-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0px 2px 14px rgba(214, 214, 214, 0.33);
    transition: box-shadow 150ms;

    img {
      width: 7px;
    }

    &:not(.disabled) {
      cursor: pointer;
      box-shadow: 0px 2px 14px rgba(149, 75, 239, 0.26);

      &:hover {
        box-shadow: 0px 2px 10px rgba(214, 214, 214, 0.53);
      }

      img {
        filter: grayscale(100%) brightness(100%) sepia(100%) hue-rotate(-150deg) saturate(500%) contrast(0.8);
      }
    }
  }

  .au-carousel-btn-container {
    display: flex;
    justify-content: space-between;
    width: 90px;
    margin: 0 auto;
    max-width: 90px;
    @media (max-width: $w-sm) {
      width: 90px;
    }
  }
}
</style>
