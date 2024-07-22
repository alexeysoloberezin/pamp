/**
 * @param {boolean} hideInHeader - Используется для скрытия ссылки в Header.
 * */


import {partnerPages} from "../model/entities/ic-partner";
import {cityPages} from "../model/entities/city";

export type HeaderLink = {
  url: string;
  title: string;
  hideInHeader?: boolean;
  hashnav?: { title: string; code: string }[];
};

export type HeaderLinkWithChild = {
  url: string;
  title: string;
  children: HeaderLink[]
}

export type HeaderMenu = { title: string; children: (HeaderLink | HeaderLinkWithChild)[] };
export type AppPages = Array<HeaderLink | HeaderMenu>;

export class Pages {
  static headerPages: AppPages = [
    {
      url: "/",
      title: "Агентам",
      hashnav: [
        {code: "ai", title: "Что это"},
        {code: "awi", title: "Для кого"},
        {code: "ap", title: "Продукты"},
        {code: "ahiw", title: "Как работает"},
        {code: "ael", title: "Функции"},
        {code: "ate", title: "О нас"},
        {code: "faq", title: "Вопросы"},
      ],
    },
    {
      title: "Риэлторам",
      url: "/realtors/",
    },
    {
      url: "/webtools/",
      title: "Вебмастерам",
      hashnav: [
        {code: "whiw", title: "Как работает"},
        {code: "wwu", title: "Почему мы "},
        {code: "htw", title: "Как следить "},
        {code: "pft", title: "Какой доход"},
        {code: "mm", title: "О нас пишут"},
        {code: "wt", title: "API"},
        {code: "faq", title: "Вопрос-ответ"},
      ],
    },
    {
      url: "/partners/",
      title: "Партнерам",
      hashnav: [
        {code: "padder", title: "Маркетплейс "},
        {code: "fw", title: "Для кого"},
        {code: "wwd", title: "Что делаем"},
        {code: "phiw", title: "Как работает"},
        {code: "pwu", title: "Почему мы "},
        {code: "mm", title: "О нас пишут"},
      ],
    },
    {
      title: "Продукты",
      children: [
        {
          title: "Страхование",
          url: "/",
          children: [
            {url: "/osago/", title: "ОСАГО"},
            {url: "/kasko/", title: "КАСКО"},
            {url: "/minikasko/", title: "Мини-КАСКО"},
            {url: "/strahovanie-ipoteki/", title: "Ипотека"},
          ]
        },
        {
          title: "Фин.офферы",
          url: "/finance/",
          children: [
            {title: "Дебетовые карты", url: "/affiliate-program/debit-cards/"},
            {title: "Кредитные карты", url: "/creditcards/"},
            {title: "Кредит наличными", url: "/affiliate-program/cash-loan/"},
            {title: "Вклады", url: "/affiliate-program/bank-deposits/"},
            {title: "Ипотека", url: "/affiliate-program/mortgage/"},
            {title: "Банки", url: "/affiliate-program/banks/"},
            {title: "РКО", url: "/rko/"},
            {title: "МФО", url: "/affiliate-program/mfo/"},
          ]
        },
        {
          url: "/hr-offers/",
          title: "Подбор персонала",
        },
        {
          title: "Реферальная программа",
          url: "/referalnaya-programma"
        },
      ],
    },
    {
      title: "О нас",
      children: [
        {url: "/reviews/", title: "Отзывы"},
        {url: "/jobs/", title: "Вакансии"},
        {url: "/contacts/", title: "Контакты"},
      ],
    },

  ]
  static partnerPages = partnerPages
  static cityPages = cityPages
  static readonly list: AppPages = [
    ...this.headerPages,
    {
      title: "Страховые компании",
      children: this.partnerPages,
    },
    {
      title: "Города",
      children: this.cityPages,
    },
    {
      title: "Отзывы",
      url: "/reviews/",
    },
    {
      title: "Карьера",
      url: "/jobs/",
    },
    {
      title: "Контакты",
      url: "/contacts/",
    },
    {
      title: "Риэлторам",
      url: "/realtors/",
    },
  ];

  static readonly insurance: AppPages = [
    {url: "/osago/", title: "ОСАГО"},
    {url: "/kasko/", title: "КАСКО"},
    {url: "/minikasko/", title: "Мини-КАСКО"},
    {url: "/strahovanie-ipoteki/", title: "Ипотека"},
  ]

  static getAll() {
    return [...this.list];
  }

  static getInsurance(){
    return [...this.insurance]
  }

  static getHeaderPages() {
    return [...this.headerPages];
  }

  static getCityPages() {
    return [...this.cityPages]
  }

  static getProducts() {
    const {children} = this.list.find(
      (page) => page.title === "Продукты"
    ) as HeaderMenu;
    return children;
  }
}

export function isHeaderLink(page: HeaderLink | HeaderMenu): page is HeaderLink {
  return (page as HeaderLink).url !== undefined;
}

export function isHeaderMenu(page: HeaderLink | HeaderMenu): page is HeaderMenu {
  return (page as HeaderMenu).children !== undefined;
}

