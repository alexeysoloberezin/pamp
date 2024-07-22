export enum Products {
  Insurance,
  Finance,
}

export type Item = {
  icon: string;
  title: string;
  description: string;
  commission: string;
  link: string;
  //Route name
  productPage?: string;
  disabled: boolean;
  new?: boolean;
  dialog: {
    title: string;
    description: string;
    list: string[];
  };
};
export type Product = {
  title: string;
  type: Products;
  items: Item[];
  disabled: boolean;
};

const icon = (name) =>
  require(`@/assets/images/agents/ourProducts/${name}.svg`);

export const ourProducts: Product[] = [
  {
    title: "Страховые",
    type: Products.Insurance,
    items: [
      {
        icon: icon("osago"),
        title: "ОСАГО B&nbsp;кат.",
        productPage: "osago",
        description: "Обязательная страхование автотранспорта",
        commission: "5-35%",
        link: "/osago/",
        disabled: false,
        dialog: {
          title: "Страхование автогражданской ответственности",
          description:
            "ОСАГО - это обязательный полис, который должен быть у всех транспортных средств, допущенных для движения.",
          list: [
            "Страхуется ответственность собственника транспортного средства перед третьими лицами.",
            "Лимит ответственности на ущерб по имуществу до&nbsp;—&nbsp;400 тыс. руб.",
            "Лимит ответственности на ущерб жизни и здоровью — до 500 тыс. руб.",
            "Вознаграждение за продажу начисляется на баланс сразу после оплаты.",
            "Оплата за полис напрямую на сайте страховой компании.",
            "Загружать документы НЕ&nbsp;нужно",
            "Время оформления —&nbsp;10&nbsp;минут.",
            "Категории A, C, D можно оформить через систему Е-Гарант.",
          ],
        },
      },
      {
        icon: icon("mortgage"),
        title: "Ипотека",
        description: "Обязательный полис ипотечного страхование",
        commission: "6-50%",
        productPage: "strahovanie-ipoteki",
        link: "/strahovanie-ipoteki/",
        disabled: false,
        dialog: {
          title: "Страхование имущества, жизни и&nbsp;здоровья при ипотеке",
          description:
            "Обязательный полис для всех заемщиков ипотеки. Оформляется ежегодно в период действия кредита. Гарантирует финансовую защиту при повреждении имущества, а также обезопасит застрахованного и его наследников от претензий банка при потере трудоспособности и смерти",
          list: [
            "Банки-партнеры: Сбербанк, ВТБ, Газпромбанк, Московский кредитный банк, Райффайзенбанк и др.",
            "Доступен выбор страховки: отдельно по имуществу и жизни/здоровью или комплексно.",
            "Вознаграждение за продажу начисляется на баланс сразу после оплаты.",
            "Оплата за полис напрямую на сайте страховой компании.",
            "Загружать документы не&nbsp;нужно.",
            "Время оформления —&nbsp;7&nbsp;минут.",
          ],
        },
      },
      {
        icon: icon("corp"),
        title: "Корпоративное страхование",
        description: "Все виды для юридических лиц",
        commission: "0-25%",
        link: "",
        disabled: false,
        dialog: {
          title: "Страхование юрлиц",
          description:
            "Помогаем согласовать и оформить любые виды корпоративного страхования для ваших клиентов",
          list: [
            "Автопарки от 10 авто",
            "Имущество юридических лиц",
            "ДМС",
            "Любые виды ответственности",
            "Строительно-монтажные риски",
            "Все другие виды",
          ],
        },
      },
      {
        icon: icon("mini"),
        title: "КАСКО",
        description: "Водителям авто",
        commission: "10-27%",
        link: "/kasko/",
        productPage: "kasko",
        disabled: false,
        dialog: {
          title: "Страхование автомобилей от ущерба, хищения или угона",
          description:
            "КАСКО — добровольный вид страхования. Гарантирует финансовую защиту при повреждении автомобиля, хищении и угоне.",
          list: [
            "Расчёт в 22 страховых компаниях",
            "Время подачи заявки —&nbsp;3&nbsp;минуты",
            "Комиссионное вознаграждение&nbsp;за продажу до&nbsp;20%",
            "Приём заявок для ТС всех категорий возрастом не более 10&nbsp;лет",
            "Начисление комиссии на&nbsp;баланс&nbsp;раз в месяц",
            "Партнёрское сопровождение заявки до оплаты",
          ],
        },
      },
      {
        icon: icon("mini"),
        title: "Мини КАСКО",
        description: "Водителям авто: защита при ДТП по чужой вине",
        commission: "20-30%",
        link: "/minikasko/",
        productPage: "minikasko",
        disabled: false,
        dialog: {
          title: "Страхование мини-КАСКО",
          description:
            "Страхование мини-КАСКО — недорогой полис, который защитит в случае ДТП по вине третьих лиц и даже угона. Рекомендуется в первую очередь опытным автовладельцам, которые уверены в своих навыках вождения.",
          list: [
            "Страхуется ущерб, полная конструктивная гибель ТС при угоне или ДТП по вине третьих лиц, в том числе бесполисных.",
            "Доступен выбор программ страхования по фиксировано низкой цене от ведущих компаний.",
            "Лимит ответственности на ущерб — до 100% стоимости авто, но не более&nbsp;2,4&nbsp;млн&nbsp;руб.",
            "Оплата за полис напрямую на сайте страховой компании.",
            "Вознаграждение за продажу начисляется на баланс сразу после оплаты.",
            "Оформление полностью онлайн: без осмотра ТС.",
            "Загружать документы не&nbsp;нужно.",
            "Время оформления —&nbsp;10&nbsp;минут.",
          ],
        },
      },
      {
        icon: icon("house"),
        title: "Недвижимость",
        description: "Владельцам квартир и других объектов",
        commission: "no data",
        link: "",
        disabled: true,

        dialog: {
          title: "",
          description: "",
          list: [],
        },
      },
      {
        icon: icon("luggage"),
        title: "Путешествие",
        description: "Туристам в поездках по России и за границу",
        commission: "no data",
        link: "",
        disabled: true,

        dialog: {
          title: "",
          description: "",
          list: [],
        },
      },
      {
        icon: icon("muscles"),
        title: "От несчастного случая",
        description: "Спортсменам. Детям в лагерь.",
        commission: "no data",
        link: "",
        disabled: true,

        dialog: {
          title: "",
          description: "",
          list: [],
        },
      },
    ],
    disabled: false,
  },
  {
    title: "Финансовые",
    type: Products.Finance,
    items: [
      {
        icon: icon("debitcards"),
        title: "Дебетовые карты",
        description: "Зарабатывайте на оформлении дебетовых карт",
        commission: "710 ₽ — 2 600 ₽",
        link: "/affiliate-program/debit-cards/",
        productPage: "debit-cards",
        disabled: false,
        dialog: {
          title: "Дебетовые карты",
          description:
            "Дебетовая карта — обычная пластиковая карта для оплаты услуг и товаров, получения наличных денег и снятия их в банкомате. Для получения вознаграждения, карта должна быть активирована покупкой от 500 рублей.",
          list: [
            "Время оформления – 7&nbsp;минут",
            "Обслуживание и выпуск от 0&nbsp;рублей",
            "Оформление на сайте банка",
            "Кешбэк за топливо до&nbsp;10%",
            "Высокий %&nbsp;выдач",
            "До 7% на остаток по&nbsp;счету",
          ],
        },
      },
      {
        icon: icon("debitcards"),
        title: "Кредитные карты",
        description: "Кредитные карты с льготным периодом до 1 года",
        commission: "1 680 ₽ — 8 550 ₽",
        link: '/creditcards/',
        disabled: false,
        dialog: {
          title: "Кредитные карты",
          description:
            "Кредитная карта – карта с деньгами на счету, которыми можно оплачивать товары и услуги. Как правило банки позволяют использовать доступные на карте средства без комиссии в пределах льготного периода. Для получения вознаграждения, карта должна быть активирована покупкой от 500 рублей или оплатой годового обслуживания. ",
          list: [
            "Кредитный лимит до  70&nbsp;000&nbsp;руб.",
            "Время оформления – 7&nbsp;минут",
            "Кешбэк за топливо до&nbsp;10%",
            "Оформление на сайте банка",
            "Льготный период от&nbsp;50 до&nbsp;365&nbsp;дней",
            "Платное ежегодное обслуживание",
            "Ставка по кредитам от&nbsp;24,9%",
          ],
        },
      },
      {
        icon: icon("money"),
        title: "Микрозаймы",
        description: "Кредит на любые цели клиента",
        commission: "650 ₽ — 14 000 ₽",
        link: "/affiliate-program/mfo/",
        disabled: false,
        dialog: {
          title: "Микрозаймы",
          description:
            "Микрозаймы - это микрокредиты для физ.лиц, которые выдают юридические лица с соответствующей лицензией под высокий %.",
          list: [
            "Высокая скорость выдачи заемных средств",
            "Займы одобряются даже с плохой кредитной историей",
            "Возможность возврата долга без %",
            "Высокая стоимость кредита, от 150% годовых",
            "Большие штрафы за просрочку платежей",
            "Долг может быть продан коллекторам",
          ],
        },
      },
      {
        icon: icon("bank"),
        title: "Кредит наличными",
        description: "Кредит на любые цели клиента",
        commission: "1 860 ₽ — 18 140 ₽",
        link: "/affiliate-program/cash-loan/",
        productPage: "cash-loan",
        disabled: false,
        dialog: {
          title: "Кредит наличными",
          description:
            "Кредит наличными - лучший способ получить крупную сумму заемных средств от банка по низкой ставке на длительный срок.",
          list: [
            "Возможность рефинансирования",
            "Относительно не высокий %",
            "Заранее согласованный график платежей",
            "Большая сумма на расходы по собственному усмотрению",
            "Высокое вознаграждение для агентов",
          ],
        },
      },
      {
        icon: icon("cashregister"),
        productPage: "rko",
        title: "РКО",
        description: "Зарабатывай на открытых счетах для бизнеса",
        commission: "1 330 ₽ — 12 000 ₽",
        link: "/rko/",
        disabled: false,

        dialog: {
          title: "РКО",
          description:
            "Расчетно-кассовое обслуживание — пакет услуг, который банки предлагают для физических лиц, ведущих деятельность в качестве ИП, и организаций. Не все понимают, как выбрать обслуживающий банк, чтобы не переплачивать за РКО и получить необходимый пакет услуг.",
          list: [
            "Возможность открыть счет дистанционно",
            "Офферы с бесплатной бухгалтерией",
            "Офферы с бесплатным обслуживанием расчетного счета",
          ],
        },
      },
      {
        icon: icon("piggiebank"),
        title: "Вклады и счета",
        description: "Лучший способ защитить сбережения от инфляции",
        commission: "1 070 ₽ — 4 000 ₽",
        link: "/affiliate-program/bank-deposits/",
        productPage: "bank-deposits",
        disabled: false,
        new: true,
        dialog: {
          title: "Вклады и счета",
          description:
            "Вклад (депозит) — сумма средств, которую банк принимает от клиента на определенный или неопределенный срок. Согласно Гражданскому кодексу, банк обязуется возвратить сумму вклада и выплатить проценты на нее на условиях и в порядке, предусмотренных договором. ",
          list: [
            "Возможность открыть вклад онлайн",
            "Высокие % ставки",
            "Вклады защищены государством",
            "Достойное вознаграждение для агентов",
          ],
        },
      },
      {
        icon: icon("house"),
        title: "Ипотека",
        description: "На строящееся или готовое жилье",
        commission: "2 200 ₽ — 16 000 ₽",
        link: "/affiliate-program/mortgage/",
        productPage: "mortgage",
        disabled: false,
        new: true,
        dialog: {
          title: "Ипотека",
          description: "Ипотека (ипотечный кредит) — это залог недвижимости. То есть ипотечный кредит означает, что вы берете у банка деньги под процент (кредит), а гарантией того, что вы вернете эти деньги, становится залог вашего недвижимого имущества: дома, квартиры, земельного участка. Ипотеку обычно воспринимают как кредит на приобретение жилья.",
          list: [
            "Возможность оформить онлайн",
            "Высокий % одобрения ",
            "Низкие % ставки с господдержкой от государства",
            "Достойное вознаграждение для агентов",
          ],
        },
      },
    ],
    disabled: false,
  },
];