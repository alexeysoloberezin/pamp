import { OfferType } from "~/model/entities/offer";
import {IcUrl, ProgramUrl} from "~/urls";

export enum TrafficSources {
  Allowed,
  Forbidden,
  ByAgreement,
}

export type TrafficSource = {
  title?: string;
  icon?: string;
  color: string;
  type: TrafficSources;
  sources?: string[];
};

export const trafficSources: Omit<TrafficSource, "sources">[] = [
  {
    type: TrafficSources.Allowed,
    title: "Разрешенный",
    color: "#329F25",
    icon: require("images/affiliate-program/trafficSource/allow.svg"),
  },
  {
    type: TrafficSources.Forbidden,
    title: "Запрещенный",
    color: "#9B0000",
    icon: require("images/affiliate-program/trafficSource/disallow.svg"),
  },
  {
    type: TrafficSources.ByAgreement,
    title: "По согласованию",
    color: "#25899F",
    icon: require("images/affiliate-program/trafficSource/attention.svg"),
  },
];

export class AffiliateOffer {
  title?: string;
  type: OfferType;
  icon?: string;
  imageWithoutBg?: boolean;
  conditionsLink?: string;
  contractRulesLink?: string;
  keyAdvantages?: string[];
  commission?: number;
  disclaimer?: string;
  trafficSources?: Omit<TrafficSource, "icon" | "title" | "color">[];
  regText?: string;
  attention?: string;
  basicLink?:string;
}

export const MfoPagesUrl = [
  { name: 'Забирай', link: 'zabiray' },
  { name: 'Creditter', link: 'creditter' },
  { name: 'AliZaim', link: 'alizaim' },
  { name: 'Viva', link: 'viva-dengi' },
  { name: 'АДеньги', link: 'adengi' },
  { name: 'Moneza', link: 'moneza' },
  { name: 'Pay P.S.', link: 'pay-ps' },
  { name: 'Отличные наличные', link: 'otlichnye-nalichnye' },
  { name: 'Krediska', link: 'krediska' },
  { name: 'Vivus', link: 'vivus' },
  { name: 'Joymoney', link: 'joymoney' },
  { name: 'Желдорзайм', link: 'zheldorzaym' },
  { name: 'ЭкспрессДеньги', link: 'ekspressdengi' },
  { name: 'МигКредит', link: 'migkredit' },
  { name: 'Деньга', link: 'dengа' },
  { name: 'LIME', link: 'lime' },
  { name: 'Займер', link: 'zaymer' },
  { name: 'ДоброЗайм', link: 'dobrozaym' },
  { name: 'BelkaCredit', link: 'belkacredit' },
  { name: 'Займ Экспресс', link: 'zaym-ekspress' },
  { name: 'Срочно деньги', link: 'srochno-dengi' },
  { name: 'FastMoney', link: 'fastmoney' },
  { name: 'Надо денег', link: 'nado-deneg' },
  { name: 'Финмолл', link: 'finmoll' },
  { name: 'Займы.рф', link: 'zaimy-rf' },
  { name: 'Boostra', link: 'boostra-zaem' },
  { name: 'Credit7', link: 'credit7' },
  { name: 'Турбозайм', link: 'turbozaim' },
  { name: 'MoneyMan', link: 'moneyman' },
  { name: 'Credit Plus', link: 'credit-plus' },
  { name: 'Быстроденьги', link: 'bystrodenegi' },
  { name: 'ДеньгиСразу', link: 'dengisrazu' },
  { name: 'ГринМани', link: 'greenmani' },
  { name: 'Zaymigo', link: 'zaymigo' },
  { name: 'Ракета Деньги', link: 'raketa-dengi' },
  { name: '495 Кредит', link: '495-kredit' },
  { name: 'ПЛИСКОВ', link: 'pliskov' },
  { name: 'Profi Credit', link: 'profi-credit' },
  { name: 'До Зарплаты', link: 'do-zarplaty' },
  { name: 'OneClickMoney', link: 'oneclickmoney' },
  { name: 'Микроклад', link: 'mikroklad' },
  { name: 'Ваш кредит', link: 'vash-kredit' },
  { name: 'Банки.ру', link: 'banki.ru' },
  { name: 'СМС Финанс', link: 'sms-finans' },
  { name: 'Kviku', link: 'kviku' },
  { name: 'Max.Credit', link: 'max.credit' },
  { name: 'Webbankir', link: 'webbankir' },
  { name: 'Умные Наличные', link: 'umnue-nalichnye' },
  { name: 'Деньги на дом', link: 'deneg-na-dom' },
  { name: 'Честное слово', link: 'chestnoe-slovo' },
  { name: 'Космикзайм', link: 'kosmikzaym' },
  { name: 'Ezaem', link: 'ezaem' },
  { name: 'Центрофинанс', link: 'centrofinans' },
  { name: 'BeriBeru', link: 'beriberu' },
  { name: 'Главфинанс', link: 'glavfinans' },
  { name: 'Konga', link: 'konga' },
  { name: 'Фин5', link: 'fin5' },
  { name: 'Kredito24', link: 'kredito24' },
  { name: 'Деньги в долг', link: 'deneg-v-dolg' },
  { name: 'Кнопка деньги', link: 'knopka-dengi' },
  { name: 'CashDrive', link: 'cashdrive' },
  { name: 'КэшПоинт', link: 'kashpoint' },
  { name: 'Рубль.ру', link: 'rubl.ru' },
  { name: 'Целевые финансы', link: 'tselevye-finansy' },
  { name: 'Финтерра', link: 'finterra' },
  { name: 'Веб-займ', link: 'veb-zaym' },
  { name: 'МИР Денег', link: 'mir-deneg' },
  { name: 'CashToYou', link: 'cashtoyou' }
];

export const AffiliateBanks = [
  { name: 'Credit.club', link: 'affiliate-program/' + ProgramUrl.CreditClub },
  { name: 'Газпром', link: 'gazprombank' },
  { name: 'Банк Открытие', link: 'affiliate-program/' + ProgramUrl.Otkrytie },
  { name: 'ЛокоБанк', link: 'affiliate-program/' + ProgramUrl.Lokobank },
  { name: 'ВТБ', link: 'affiliate-program/' + ProgramUrl.Vtb },
  { name: 'УБРиР', link: 'affiliate-program/' + ProgramUrl.Ubrir },
  { name: 'Альфа', link: 'affiliate-program/' + ProgramUrl.AlfaBank },
  { name: 'Уралсиб', link: 'affiliate-program/' + ProgramUrl.Uralsib },
  { name: 'Почта', link: 'affiliate-program/' + ProgramUrl.PochtaBank },
  { name: 'Тинькофф', link: 'affiliate-program/' + ProgramUrl.Tinkoff },
  { name: 'Ренессанс', link: 'affiliate-program/' + IcUrl.Renessans },
  { name: 'Хоум', link: 'affiliate-program/' + ProgramUrl.HomeKreditBank },
  { name: 'МТС', link: 'affiliate-program/' + ProgramUrl.MTS },
  { name: 'АТБ', link: 'affiliate-program/' + ProgramUrl.ATB },
  { name: 'Совкомбанк', link: 'affiliate-program/' + ProgramUrl.Sovkombank },
  { name: 'Металлинвестбанк', link: 'affiliate-program/' + ProgramUrl.Metallinvestbank },
  { name: 'Ак Барс', link: 'affiliate-program/' + ProgramUrl.AkBars },
  { name: 'Банк Санкт-Петербург', link: 'affiliate-program/' + ProgramUrl.SanktPetersburg },
  { name: 'Европа Банк', link: 'affiliate-program/' + ProgramUrl.KreditEvropaBank },
  { name: 'фора-Банк', link: 'affiliate-program/' + ProgramUrl.Forabank },
]

const getMfoPagesUrl = () => MfoPagesUrl.map(item => {
  return {...item, link: 'affiliate-program/' + item.link}
})

const basicLinksArray = [
  ...AffiliateBanks,
  ...getMfoPagesUrl()
];

export const pageName = (url: string): string | null => {
  url = url.replace(/^\/|\/$/g, "");

  let find = basicLinksArray.find(item => item.link === url)

  if(find && find.name){
    return find.name
  }

  find = basicLinksArray.find(item => item.link.toLowerCase().includes(url.toLowerCase()))

  if(find && find.name){
    return find.name
  }

  return null
}


export const getBasicLinkByName = (title: string, content: string): string => {
  const find = basicLinksArray.find(item =>
    title.toLowerCase().includes(item.name.toLowerCase()) || content.toLowerCase().includes(item.name.toLowerCase())
  )
  if(find) return '/' + find.link + '/'
  console.warn('Link not found for: ' + title)
  return 'https://pampadu.ru/finance/'
}
