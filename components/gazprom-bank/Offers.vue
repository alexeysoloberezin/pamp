<template>
  <div class="affiliate-program-offers">
    <div class="generic-container-1260">

      <h2 class="affiliate-program-h2" v-html="'7 офферов Газпромбанка для зарегистрированных партнеров Пампаду'"/>

      <div class="affiliate-program-offers-wrapper">
        <Offer :offer="offer" :key="index" v-for="(offer,index) in cards"/>
      </div>

      <div class="affiliate-program-offers-register">
        <zond-btn class="affiliate-program-offers-register-btn" v-text="'Смотреть все офферы'"
                  href="https://agents.pampadu.ru/#/app/offer/fin"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
import Offer from "~/components/gazprom-bank/Offer";
import {AffiliateOffer, TrafficSources} from "~/model/entities/affiliateProgramm/AffiliateOffer";
import {OfferType} from "~/model/entities/offer";


@Component({
  components: {Offer}
})
export default class Offers extends Vue {
  cards: AffiliateOffer[] = [
    {
      title:
        "Партнерская программа кредита&nbsp;наличными Газпромбанка от&nbsp;4,4%",
      type: OfferType.Cashloan,
      icon: require("images/gazprom/card1.png"),
      conditionsLink: "https://drive.google.com/file/d/13qwNJe49xQ-VMdiSYVG8ODmqymOOcmtn/view",
      contractRulesLink: "https://help.pampadu.ru/article/7350",
      keyAdvantages: [
        "Оформите кредит на ремонт, оплату образования, приобретение техники и любые другие покупки",
        "Авторизуйтесь через Госуслуги и получите возможность оформления заявки до 5 млн ₽ по одному паспорту",
        "Получите кредит до 2 млн ₽ не выходя из дома в городах, где есть доставка. До 5 млн ₽ для Москвы и Новосибирска.",
        "Получите кредит на «Умную карту» с бесплатным обслуживанием и кешбэком до 10%. Карта выдаётся моментально",
      ],
      commission: 18_140,
      disclaimer:
        "Кредит наличными. Ставка (годовых) при оформлении личного страхования заемщика: 4,4%. Сумма от 300 тыс. до 7 млн руб., срок от 13 до 84 мес. Надбавка: 20-24 п.п. для клиентов без личного страхования, в зависимости от суммы кредита. Подробнее на gazprombank.ru. Тел. 8-800-300-60-90. Не оферта. Банк ГПБ (АО). Ген. лицензия ЦБ РФ № 354. Реклама. 01.10.2022.",
      trafficSources: [
        {
          type: TrafficSources.Allowed,
          sources: [
            "SEO трафик",
            "Контекстная реклама (YandexDirect, Google Adwords, Begun)",
            "Реклама в социальных сетях (VK, Oдноклассники)",
            "PopUp Реклама",
            "Тизерная сеть",
            "E-mail рассылка",
            "SMS рассылка",
            "Брокерский трафик",
            "Баннерная реклама",
            "Cashback (кэшбэк)",
            "Видеореклама",
          ],
        },
        {
          type: TrafficSources.Forbidden,
          sources: [
            "Публичные страницы/группы/сообщества в социальных сетях",
            "Приложения/игры в социальных сетях",
            "Дорвейный трафик",
            "Мотивированный (стимулирующий) трафик",
            "E-mail спам",
            "SMS спам",
            "Adult / Порно-трафик",
            "ClickUnder",
            "Push – реклама",
            "Toolbar – реклама",
            "Гиперконтекстная реклама",
            "Реклама на бренд",
            "Приложения и игры",
            "Корегистрация",
            "Контекстная реклама на бренд",
            "PopUnder",
            "Партизанский маркетинг",
            "RichMedia",
            "Сообщества / паблики в соцсетях от имени бренда",
            "Мимикрирование сайта вебмастера под бренд и домены рекламодателя",
          ],
        },
      ],
      regText: "Зарегистрируйтесь, чтобы увидеть все офферы Газпромбанка",
    },
    {
      title: "Партнерская программа кредитной карты Газпромбанк «Удобная карта»",
      type: OfferType.Credit,
      icon: require("images/gazprom/card2.png"),
      conditionsLink: "https://drive.google.com/file/d/1CYneJYkAdgwepl9jcbCqSus5Mt8ch8rt/view",
      contractRulesLink: "https://help.pampadu.ru/article/7350",
      keyAdvantages: [
        "От 90 до 180 дней без %",
        "Кредитный лимит до 600 000 р.",
        "Бесплатная доставка по указанным городам",
        "Быстрое решение",
        "Кешбек до 50% за покупки у партнеров",
      ],
      commission: 8_550,
      disclaimer:
        "Акция. Для физ. лиц. с 01.11.2022 по 31.12.2022. Обслуживание 0₽ и льготный период до 180 дней на весь срок действия. Ставка за снятие/перевод — 21,9% – 69,9%, ставка за пользование кредит. средствами — 11,9% – 41,9%. Организатор: Банк ГПБ (АО). Подробнее об акции на gazprombank.ru и по тел. 8-800-300-60-90. Информация на 01.11.2022. Ген. лиц. ЦБ РФ № 354. Реклама.",
      trafficSources: [
        {
          type: TrafficSources.Allowed,
          sources: [
            "SEO трафик",
            "Контекстная реклама (YandexDirect, Google Adwords, Begun)",
            "Реклама в социальных сетях (VK, Oдноклассники)",
            "PopUp Реклама",
            "Тизерная сеть",
            "E-mail рассылка",
            "SMS рассылка",
            "Брокерский трафик",
            "Баннерная реклама",
            "Cashback (кэшбэк)",
            "Видеореклама",
          ],
        },
        {
          type: TrafficSources.Forbidden,
          sources: [
            "Публичные страницы/группы/сообщества в социальных сетях",
            "Приложения/игры в социальных сетях",
            "Дорвейный трафик",
            "Мотивированный (стимулирующий) трафик",
            "E-mail спам",
            "SMS спам",
            "Adult / Порно-трафик",
            "ClickUnder",
            "Push – реклама",
            "Toolbar – реклама",
            "Гиперконтекстная реклама",
            "Реклама на бренд",
            "Приложения и игры",
            "Корегистрация",
            "Контекстная реклама на бренд",
            "PopUnder",
            "Партизанский маркетинг",
            "RichMedia",
            "Сообщества / паблики в соцсетях от имени бренда",
            "Мимикрирование сайта вебмастера под бренд и домены рекламодателя",
          ],
        },
      ],
      regText: "Зарегистрируйтесь, чтобы увидеть все офферы Газпромбанка",
    },
    {
      title: "Партнерская программа расчетного счета для бизнеса Газпромбанка",
      type: OfferType.Rko,
      icon: require("images/gazprom/card3.png"),
      conditionsLink: "https://drive.google.com/file/d/1Y05LqsqZbo154bnLybnVmrEZQ81f_O6s/view",
      contractRulesLink: "https://help.pampadu.ru/article/7350",
      keyAdvantages: [
        "Открытие и ведение счета – бесплатно",
        "Скидки при оплате на 6 и 12 месяцев",
        "Мобильный банк включен в стоимость каждого пакета",
        "Открытие счета за 1 день, реквизиты за 5 минут",
      ],
      commission: 8_000,
      disclaimer:
        "Тарифные планы для юридических лиц — некредитных организаций, индивидуальных предпринимателей и физических лиц, занимающихся в установленном законодательством Российской Федерации порядке частной практикой Малого и среднего бизнеса. Четыре тарифных плана: «Только необходимое» (550 ₽ / месяц*), «Развитие» (1 890 ₽ / месяц*), «Максимальный» (7 990 ₽ / месяц*), «ВЭД» (9 990 ₽ / месяц*). Подробнее на www.gazprombank.ru и по телефону 8-800-100-11-89 (бесплатный звонок на территории РФ). Информация на 28.03.2022. Не оферта. Банк ГПБ (АО). Генеральная лицензия Банка России №354. Реклама.",
      trafficSources: [
        {
          type: TrafficSources.Forbidden,
          sources: [
            "Контекст на бренд",
            "Брокерский траффик",
            "Любой вид мотивации пользователя (офферы, через конкурсы и т.д.)",
            "Скидочные и купонные агрегаторы SPAM в любом виде",
            "Redirect (pop-up, clickunder и другие форматы рекламы, в которых просмотр сайта осуществляется без прямого участия (согласия) пользователя)",
            "Adult",
          ],
        },
      ],
      regText: "Зарегистрируйтесь, чтобы увидеть все офферы Газпромбанка",
      attention:
        "ВНИМАНИЕ! Банк вправе оставить за собой отказ по выплатам за заявки признанные фродом (систематическое введение в заблуждение клиента, кукистаффинг, а так же передача недействительных персональных данных и др.) при условии если они не были оплачены, и отключать веб-мастеров привлекающим заявки с фродом. В том числе в случае обнаружения использования запрещённых видов траффика.",
    },
    {
      title: "Партнерская программа премиальной дебетовой карты Газпромбанка",
      type: OfferType.Debit,
      icon: require("images/gazprom/card4.png"),
      conditionsLink: "https://drive.google.com/file/d/1hF1t1fyCEBMuGMdPqjhbbBq8gkGMdVrU/view",
      contractRulesLink: "https://help.pampadu.ru/article/7350",
      keyAdvantages: [
        "Цифровая карта UnionPay - бесплатно",
        "Кешбэк до 15% на категорию максимальных покупок",
        "Бесплатная доставка",
        "Возможность совершать переводы за рубеж",
        "Переводы без комиссии через СБП до 100 000 ₽ в месяц",
      ],
      commission: 2_600,
      disclaimer:
        "Дебетовая банковская карта Opencard (Открытая карта). Кэшбэк (cash-back) — возврат средств. Максимальный размер начислений бонусных рублей – 2% и зависит от выполнения следующих условий в отчетном календарном месяце: 1,5% за все покупки при оплате картой; 0,5% при поддержании статуса «Плюс». Ежемесячный лимит начисления: от 150 до 3000 бонусных рублей/до 5000 бонусных рублей при поддержании статуса «Плюс». Стоимость выпуска - 500 руб. Бонусные рубли не начисляются на категории: квази-кэш, денежные переводы, брокерские операции. Полные условия оформления и использования карт – в Сборнике тарифов банка на open.ru. ПАО Банк «ФК Открытие». Ген. лицензия Банка России № 2209 от 24. 11. 2014. 115114, г. Москва, ул. Летниковская, д. 2, стр. 4.",
      trafficSources: [
        {
          type: TrafficSources.Allowed,
          sources: [
            "SEO трафик",
            "Контекстная реклама (YandexDirect, Google Adwords, Begun)",
            "Реклама в социальных сетях (VK, Oдноклассники)",
            "PopUp Реклама",
            "Тизерная сеть",
            "E-mail рассылка",
            "SMS рассылка",
            "Брокерский трафик",
            "Баннерная реклама",
            "Cashback (кэшбэк)",
            "Видеореклама",
          ],
        },
        {
          type: TrafficSources.Forbidden,
          sources: [
            "Публичные страницы/группы/сообщества в социальных сетях",
            "Приложения/игры в социальных сетях",
            "Дорвейный трафик",
            "Мотивированный (стимулирующий) трафик",
            "E-mail спам",
            "SMS спам",
            "Adult / Порно-трафик",
            "ClickUnder",
            "Push – реклама",
            "Toolbar – реклама",
            "Гиперконтекстная реклама",
            "Реклама на бренд",
            "Приложения и игры",
            "Корегистрация",
            "Контекстная реклама на бренд",
            "PopUnder",
            "Партизанский маркетинг",
            "RichMedia",
            "Сообщества / паблики в соцсетях от имени бренда",
            "Мимикрирование сайта вебмастера под бренд и домены рекламодателя",
          ],
        },
      ],
      regText: "Зарегистрируйтесь, чтобы увидеть все офферы Газпромбанка",
    },
  ];

}
</script>

<style lang="scss">
.affiliate-program-offers {
  padding: 55px 0 75px;
  background: #F2F5FF;

  &-title {
    text-align: center;
  }

  &-wrapper {
    display: flex;
    margin: 35px -5px 0;
  }

  &-register {
    margin: 20px auto 0;
    width: 500px
  }

  &-register-btn {
    color: #7245FF !important;
    width: 100%;
    background: unset;
    font-weight: 400;
    text-decoration-line: underline;
  }

  .affiliate-program-h2 {
    max-width: 880px;
  }

  .affiliate-program-offers-wrapper {
    margin-top: 40px;
    display: flex;
    flex-direction: column;

  }

  .affiliate-offer {
    padding: 19px;
    box-shadow: 0 2px 14px rgba(114, 69, 255, 0.12);
    border-radius: 14px;
    background: #FFFFFF;

    &:not(:first-child) {
      margin-top: 12px;
    }

    &-content-wrapper {
      display: flex;

      &:not(:first-child) {
        margin-top: 15px;
      }
    }

    &-left-side {
      flex: 0 0 230px;
    }

    &-right-side {
      flex: 0 1 auto;
      padding-left: 40px;
    }

    &-title {
      flex: 0 1 500px;
      font-weight: 700;
      font-size: 25px;
      line-height: 30px;
    }

    &-content {
      display: flex;
    }

    &-commission {
      font-weight: 400;
      font-size: 36px;
      line-height: 42px;
    }

    &-commission-tooltip {
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      color: #7D8D93;
    }

    &-description {
      flex: 0 0 280px;
      display: flex;
      flex-direction: column;
    }

    &-more {
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: #6138DA;
      cursor: pointer;
      user-select: none;
    }

    &-link {
      color: #6138DA !important;

      &:first-child {
        margin-top: 25px;
      }
    }

    &-advantages {
      margin-top: 25px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    &-advantage {
      margin-bottom: 20px;
      flex: 0 1 calc(50% - 4px);
      display: flex;
      align-items: flex-start;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      color: #474747;
    }

    &-disclaimer {
      margin-top: 20px;
      padding-right: 140px;
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      color: #7D8D93;
    }

    &-footer {
      margin-top: 30px;
      display: flex;
      justify-content: space-between;

      &-text {
        flex: 50%;

        max-width: 337px;

        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        color: #474747;
      }

      &-btn {
        flex: 0 1 50%;
      }
    }

    &-source {
      margin-top: 30px;
    }

    &-attention {
      margin-top: 35px;
      border: 1px solid #FDE126;
      border-radius: 4px;
      padding: 10px 120px 14px 20px;

      display: flex;
      align-items: flex-start;
      font-size: 12px;
      line-height: 14px;
    }

    .traffic-source {
      margin-top: 15px;

      &-title {
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 18px;
      }
    }

    .traffic-sources {
      margin-top: 12px;

      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      @media (max-width: $w-sm) {
        flex-direction: column;
      }

      .source {
        flex: 0 1 calc(50% - 4px);

        font-weight: 400;
        font-size: 12px;
        line-height: 150%;
        color: #7D8D93;
      }
    }
  }

  @media (max-width: $w-md) {
    &-register-btn {
      font-size: 12px;
    }
    &-wrapper {
      flex-wrap: wrap;
    }
  }
  @media (max-width: $w-sm) {
    padding: 35px 0 40px;

    &-wrapper {
      margin: 20px -3px 0;
    }
    &-register {
      max-width: 100%;
    }
    .affiliate-program-offers-wrapper {
      max-width: 450px;
      margin: 20px auto 0;
    }
    .affiliate-offer {
      &-content-wrapper {
        flex-direction: column;
      }

      &-left-side {
        flex: auto;
      }

      &-right-side {
        flex-direction: column;
        padding-left: unset;
      }

      &-title {
        flex: auto;
        font-size: 18px;
        line-height: 21px;
      }

      &-link {
        font-size: 14px;
        line-height: 16px;
        margin-top: 10px;

        &:first-child {
          margin-top: unset;
        }
      }

      &-content {
        margin-top: 19px;
      }

      &-description {
        flex: auto;
        margin-top: 19px;
      }

      &-commission {
        margin-top: 5px;
      }

      &-more {
        margin-top: 5px;
      }

      &-advantages {
        margin-top: 15px;
        flex-direction: column;
      }

      &-advantage {
        font-size: 12px;
        line-height: 16px;
        margin-bottom: 15px;
      }

      &-disclaimer {
        margin-top: 0;
        padding-right: 20px;
      }

      &-footer {
        flex-direction: column;
      }

      &-footer-text {
        max-width: unset;
        font-size: 14px;
        line-height: 17px;
      }

      &-footer-btn {
        margin-top: 14px;
        font-size: 13px;
        line-height: 15px;
      }

      .traffic-source-title {
        font-size: 15px;
        line-height: 105%;
      }
    }
  }
}
</style>
