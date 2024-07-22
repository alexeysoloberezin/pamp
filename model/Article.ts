type Author = {
  img: string;
  name: string;
};

export const authors: Record<string, Author> = {
  slava: {
    img: require("@/assets/images/common/blogLinks/author-none.jpg"),
    name: "Вячеслаш Билаш",
  },
  sergey: {
    img: require("@/assets/images/common/blogLinks/author-sergey.png"),
    name: "Сергей Локтев",
  },
  janna: {
    img: require("@/assets/images/common/blogLinks/author-none.jpg"),
    name: "Жанна Шмелева",
  },
  aurika: {
    img: require("@/assets/images/common/blogLinks/author-aurika.png"),
    name: "Аурика Дороничева",
  },
};

const get160KAMonth = {
  tags: ["#Фин_офферы"],
  image: require("@/assets/images/common/blogLinks/rko-2.jpg"),
  title: "Как стать банковским агентом и получать до 160 тысяч рублей в месяц?",
  preview:
    "Агент банка — сравнительно новая профессия в России, с помощью которой можно зарабатывать до 160 тысяч рублей. Специального образования для этого не нужно. Проходить курсы тоже не требуется. Для заработка агентом и развития своего бизнеса, вам нужно будет распространять финансовые продукты банка. Если ваш клиент оформит кредит, карту, страховку или другой продукт банка через вас, за это получите вознаграждение.",
  author: authors.slava,
  creationDate: new Date("2022-09-23"),
  views: 383,
  href: "https://pampadu.ru/blog/1736-kak-stat-bankovskim-agentom-i-poluchat-do-160-tysyach-rublej-v-mesyats/",
};
const bankPartnerPrograms = {
  tags: ["#Фин_офферы"],
  image: require("@/assets/images/common/blogLinks/rko-3.jpg"),
  title: "Партнерские программы банков",
  preview:
    "Банк распространяет свои продукты среди пользователей и готов платить за привлечение новых клиентов. Получается, если привести нового вкладчика, то за это полагается выплата. Но возникает вопрос, как начать зарабатывать с помощью партнерских программ? Сервис «Пампаду» упрощает эту задачу, потому что собрал на сайте ведущие программы разных финансовых компаний. Благодаря этому у каждого появляется возможность для заработка.",
  author: authors.slava,
  creationDate: new Date("2022-09-23"),
  views: 106,
  href: "https://pampadu.ru/blog/1726-partnerskie-programmy-bankov-2/",
};
const alfaBankPartner = {
  tags: ["#обучение", "#Фин_офферы"],
  image: require("@/assets/images/common/blogLinks/rko-5.jpg"),
  title:
    "Альфа банк: партнерская программа: что это, офферы, как подключиться и заработать?",
  preview:
    "Альфа-банк — крупный банк в РФ, который входит в десятку лучших кредитно-финансовых компаний страны. Ежегодно компании достаются высокие рейтинги согласном международным независимым исследованиям. Альфа-банк зарабатывает сам, и дает возможность получать прибыль другим. Внештатные сотрудники привлекают клиентов для банка, поэтому за каждое такое целевое действие организация выплачивает своим партнерам вознаграждение. Вы знали, что каждый может стать внештатным сотрудником Альфа-банка и начать зарабатывать?",
  author: authors.slava,
  creationDate: new Date("2022-07-10"),
  views: 160,
  href: "https://pampadu.ru/blog/1817-alfa-bank-partnerskaya-programma-chto-eto-offery-kak-podklyuchitsya-i-zarabotat/",
};
const insuranceBroker = {
  tags: ["#агенту", "#обучение"],
  image: require("@/assets/images/common/blogLinks/osago-4.jpg"),
  title: "Как стать страховым брокером",
  preview:
    "Страховой брокер по ОСАГО – одна из наиболее востребованных профессий в сфере страховых услуг. Партнеры компании Пампаду получают одно из самых высоких комиссионных вознаграждений — до 35% от итоговой стоимости полиса автострахования. ",
  author: authors.aurika,
  creationDate: new Date("2022-07-27"),
  views: 69,
  href: "https://pampadu.ru/blog/1526-kak-stat-strahovym-brokerom/",
};
const creditBroker = {
  tags: ["#обучение", "#Фин_офферы"],
  image: require("@/assets/images/common/blogLinks/credit-1.jpg"),
  title: "Свой бизнес: как стать кредитным брокером?",
  preview:
    "Если вы собираетесь стать кредитным брокером, вам нужно досконально изучить эту нишу, проанализировать партнерские программы. Необходимо научиться анализировать условия кредиторов, а также понадобится организовать поток клиентов. Люди берут кредиты для решения финансовых вопросов, поэтому задача кредитного брокера — подобрать максимально выгодные условия. Если будет предлагать низкие процентные ставки по займам и лояльные условия оформления, увеличите поток посетителей.",
  author: authors.aurika,
  creationDate: new Date("2022-09-29"),
  views: 1298,
  href: "https://pampadu.ru/blog/1761-svoj-biznes-kak-stat-kreditnym-brokerom/",
};

export type ArticlePage = keyof typeof articles;

export interface InterfaceArticle {
  image: string;
  emphasis?: boolean;
  tags: string[];
  title: string;
  preview: string;
  author: {
    img: string;
    name: string;
  };
  creationDate?: Date | null;
  views: number;
  href: string;
}

export const articles = {
  osago: [
    {
      tags: ["#агенту", "#обучение"],
      image: require("@/assets/images/common/blogLinks/osago-1.jpg"),
      title: "Как успешно продавать страховку",
      preview:
        "Проблема, актуальная и для матерых страховщиков, и, особенно для тех, кто только хочет начать свой путь в этой сфере.  Чем отличается продажа страховых продуктов от продаж в принципе. Из каких составляющих складывается этот процесс, как стать успешным продавцом на рынке страхования.",
      author: authors.aurika,
      creationDate: new Date("2022-07-27"),
      views: 139,
      href: "https://pampadu.ru/blog/1530-kak-uspeshno-prodavat-strahovku/",
    },
    {
      tags: ["#агенту", "#обучение"],
      image: require("@/assets/images/common/blogLinks/osago-2.jpg"),
      title: "Как искать клиентов страховому агенту",
      preview:
        "Без чего нельзя продать ни один товар? Правильно. Без покупателей. Страхование не исключение. Сегодня говорим о том, где их искать  страховщику, и кто является его основной целевой группой",
      author: authors.aurika,
      creationDate: new Date("2022-07-27"),
      views: 75,
      href: "https://pampadu.ru/blog/1518-kak-iskat-klientov-strahovomu-agentu/",
    },
    {
      tags: ["#агенту", "#обучение", "#ОСАГО"],
      image: require("@/assets/images/common/blogLinks/osago-3.jpg"),
      title: "Сколько зарабатывает страховой агент",
      preview:
        "«Какая зарплата у страхового агента?» — вопрос, который волнует всех, кто пробует себя на этом поприще. Оклада у агентов нет, поэтому новичкам в первое время приходится нелегко. Как и в любом другом бизнесе. Разбираемся, сколько можно заработать, какие достоинства и недостатки есть у этой профессии.",
      author: authors.aurika,
      creationDate: new Date("2022-07-27"),
      views: 63,
      href: "https://pampadu.ru/blog/1521-skolko-zarabatyvaet-strahovoj-agent-2/",
    },
    insuranceBroker,
  ],
  rko: [
    {
      tags: ["#обучение", "#Фин_офферы"],
      image: require("@/assets/images/common/blogLinks/rko-1.jpg"),
      title: "Партнерская программа РКО и как на ней заработать",
      preview:
        "Рассказываем как начать зарабатывать на РКО до 7000 р. за открытый счет! РКО — это расчетный счет для бизнеса, который необходим любому предпринимателю или компании для полноценной деятельность.",
      author: authors.sergey,
      creationDate: new Date("2022-10-05"),
      views: 175,
      href: "https://pampadu.ru/blog/1804-partnerskaya-programma-rko-i-kak-na-nej-zarabotat/",
    },
    get160KAMonth,
    bankPartnerPrograms,
    {
      tags: ["#обучение", "#Фин_офферы"],
      image: require("@/assets/images/common/blogLinks/rko-4.jpg"),
      title: "МФО и микрозаймы — офферы в партнерских программах",
      preview:
        "Любой желающий может начать зарабатывать на офферах МФО. Микрофинансовые компании предлагают заемщикам оформить заем под процент. Чем больше придет клиентов, тем выше будет доход. С целью привлечения клиентов финансовые компании предлагают заработок на партнерских программах. Если заемщик перейдет на сайт по ссылке агента и оформить заем, посредник получит процент. МФО много и у каждой своя партнерская программа.",
      author: authors.slava,
      creationDate: new Date("2022-09-29"),
      views: 194,
      href: "https://pampadu.ru/blog/1750-mfo-i-mikrozajmy-offery-v-partnerskih-programmah/",
    },
  ],
  bankAgent: [
    get160KAMonth,
    bankPartnerPrograms,
    alfaBankPartner,
    insuranceBroker,
  ],
  creditCards: [
    insuranceBroker,
    get160KAMonth,
    {
      tags: ["#Фин_офферы"],
      image: require("@/assets/images/common/blogLinks/credit-3.jpg"),
      title: "Партнерские программы банков",
      preview:
        "Банк распространяет свои продукты среди пользователей и готов платить за привлечение новых клиентов. Получается, если привести нового вкладчика, то за это полагается выплата. Но возникает вопрос, как начать зарабатывать с помощью партнерских программ?",
      author: authors.slava,
      creationDate: new Date("2022-09-23"),
      views: 341,
      href: "https://pampadu.ru/blog/1726-partnerskie-programmy-bankov-2/",
    },
    {
      tags: ["обучение", "#Фин_офферы"],
      image: require("@/assets/images/common/blogLinks/credit-4.jpg"),
      title: "МФО и микрозаймы — офферы в партнерских программах",
      preview:
        "Любой желающий может начать зарабатывать на офферах МФО. Микрофинансовые компании предлагают заемщикам оформить заем под процент. Чем больше придет клиентов, тем выше будет доход.",
      author: authors.slava,
      creationDate: new Date("2022-09-29"),
      views: 469,
      href: "https://pampadu.ru/blog/1750-mfo-i-mikrozajmy-offery-v-partnerskih-programmah/",
    },
  ],
  gazpromBank: [
    insuranceBroker,
    get160KAMonth,
    bankPartnerPrograms,
    {
      tags: ["#обучение", "#Фин_офферы"],
      image: require("@/assets/images/common/blogLinks/rko-4.jpg"),
      title: "МФО и микрозаймы — офферы в партнерских программах",
      preview:
        "Любой желающий может начать зарабатывать на офферах МФО. Микрофинансовые компании предлагают заемщикам оформить заем под процент. Чем больше придет клиентов, тем выше будет доход. С целью привлечения клиентов финансовые компании предлагают заработок на партнерских программах. Если заемщик перейдет на сайт по ссылке агента и оформить заем, посредник получит процент. МФО много и у каждой своя партнерская программа.",
      author: {
        img: require("@/assets/images/common/blogLinks/author-none.jpg"),
        name: "Вячеслаш Билаш",
      },
      creationDate: new Date("2022-09-29"),
      views: 194,
      href: "https://pampadu.ru/blog/1750-mfo-i-mikrozajmy-offery-v-partnerskih-programmah/",
    },
  ],
  affiliateProgram: [
    get160KAMonth,
    bankPartnerPrograms,
    alfaBankPartner,
    creditBroker,
  ],
};

export class Article {
  tags: string[];
  image: string;
  title: string;
  preview: string;
  author: { img: string; name: string };
  views: number;
  creationDate?: Date = null;
  emphasis?: boolean;
}

export enum postsTags {
  Osago='ОСАГО',
  Stock="Акции",
  Mortgage="Ипотека",
  Ref_program="реф_программа",
  CASCO="КАСКО",
  HR='HR_офферы',
  Agent="Агенту",
  finOffers="Фин_офферы",
  webMaster="Вебмастеру",
  News="Новости",
}
export const postsTagsById: Record<string, string> = {
  '19': postsTags.Stock,
  '10': postsTags.Mortgage,
  '38': postsTags.HR,
  '42': postsTags.Ref_program,
  '35': postsTags.CASCO,
  '37': postsTags.finOffers,
  '12': postsTags.webMaster,
  '11': postsTags.Agent,
  '20': postsTags.News,
  '8': postsTags.Osago,
};

export interface PostsTagsForRequest {
  [postsTags.Osago]: string;
  [postsTags.webMaster]: string;
  [postsTags.Mortgage]: string;
  [postsTags.News]: string;
}

export const postsTagsForRequest: PostsTagsForRequest = {
  [postsTags.Osago]: '8',
  [postsTags.News]: '8,35,20',
  [postsTags.webMaster]: '12,37',
  [postsTags.Mortgage]: '10',
};

