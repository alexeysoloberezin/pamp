import {AffiliateBanks, getBasicLinkByName} from "~/model/entities/affiliateProgramm/AffiliateOffer";

export enum OfferType {
  Debit = 1,
  Credit,
  Microloan,
  Cashloan,
  Hr,
  Rko,
  Deposit,
  Mortgage,
  Universal,
  Basic

}

type TOfferText = {
  type: OfferType;
  title?: string;
  commission: string;
  conditions?: string;
  expander?: string;
  btnText?: string;
  btnLink?: string;
  basicLink?: string;
};

const offerText: TOfferText[] = [
  {
    type: OfferType.Debit,
    title: "Дебетовая карта",
    commission: "Комиссия за выданную карту",
    conditions: "Все условия по карте",
    expander: "Подробнее о карте",
    btnText: "Больше офферов дебетовых карт",
    btnLink: "https://agents.pampadu.ru/#/app/offer/fin",
  },
  {
    type: OfferType.Credit,
    title: "Кредитная карта",
    commission: "Комиссия за выданную карту",
    conditions: "Все условия по карте",
    expander: "Подробнее о карте",
    btnText: "Больше офферов кредитных карт",
    btnLink: "https://agents.pampadu.ru/#/app/offer/credit",
  },
  {
    type: OfferType.Microloan,
    title: "Микрозайм",
    commission: "Комиссия за выданный займ",
    conditions: "Все условия по займу",
    expander: "Подробнее о займе",
    btnText: "Больше офферов микрозаймов",
    btnLink: "https://agents.pampadu.ru/#/app/offer/microloan",
  },
  {
    type: OfferType.Cashloan,
    title: "Кредит наличными",
    commission: "Комиссия за выданный кредит",
    conditions: "Все условия по кредиту",
    expander: "Подробнее о кредите",
    btnText: "Больше офферов кредитов наличными",
    btnLink: "https://agents.pampadu.ru/#/app/offer/cashloan",
  },
  {
    type: OfferType.Rko,
    title: "РКО",
    commission: "Комиссия за открытый счет",
    conditions: "Все условия по РКО",
    expander: "Подробнее о счете",
    btnText: "Больше офферов РКО",
    btnLink: "https://agents.pampadu.ru/#/app/offer/rko",
  },
  {
    type: OfferType.Deposit,
    title: "Вклад",
    commission: "Комиссия за открытый вклад",
    conditions: "Все условия по вкладу",
    expander: "Подробнее о вкладе",
    btnText: "Больше офферов по вкладам",
    btnLink: "https://agents.pampadu.ru/#/app/offer/deposit",
  },
  {
    type: OfferType.Mortgage,
    title: "Ипотека",
    commission: "Комиссия за выданную ипотеку",
    conditions: "Все условия по ипотеке",
    expander: "Подробнее о ипотеке",
    btnText: "Больше офферов по ипотеке",
    btnLink: "https://agents.pampadu.ru/#/app/offer/mortgage",
  },
  {
    type: OfferType.Universal,
    commission: "Комиссия",
    conditions: "Все условия",
    expander: "Подробнее",
    btnText: "Больше офферов",
    btnLink: "https://agents.pampadu.ru/#/app/offer/mortgage",
  },
  {
    type: OfferType.Basic,
    commission: "Комиссия",
    btnText: "Больше офферов",
    basicLink: "link"
  },
];

export const getOfferText = (offerType: OfferType) =>
  offerText.find((text) => text.type === offerType);


export function filterOffers({offers, affDetailProgramName}) {
  let data = []
  if (!Array.isArray(offers)) return data

  data = offers

  if (affDetailProgramName) {
    data = getOffersByContent(offers, affDetailProgramName)
  }

  data = sortByGoals(data)
  data = offersInBlock(data, affDetailProgramName)

  return data
}

export const getOffersByContent = (array, name) => {
  const filteredArray = array.filter(item =>
    item.title.toLowerCase().includes(name.toLowerCase()) || item.content.toLowerCase().includes(name.toLowerCase())
  )
  return Array.isArray(filteredArray) && filteredArray.length > 0 ? filteredArray : []
}

export const filterBanks = (array) => {
  let res = []
  // const
  AffiliateBanks.map(bank => {
    const name = bank.name
    let banksInArray = getOffersByContent(array, name)
    banksInArray = sortByGoals(banksInArray)
    if(Array.isArray(banksInArray) && banksInArray.length){
      res.push(banksInArray[0])
    }
  })

  res = res.sort((a, b) =>  b.commission - a.commission)

  return res
}

function sortByGoals(arr) {
  return arr.sort((a, b) => {
    const profitA = (a.goals && a.goals[0]) ? a.goals[0].profit || 0 : 0;
    const profitB = (b.goals && b.goals[0]) ? b.goals[0].profit || 0 : 0;
    return profitB - profitA;
  })
}

function offersInBlock(offers, affDetailProgramName = null){
  console.log('offersInBlock',offers[0])
  return  offers.map(item => {
    return {
      type: OfferType.Basic,
      commission: (item.goals && item.goals[0]) ? item.goals[0]?.profit : 0,
      icon: item.logo,
      title: item.title,
      content: item.content,
      basicLink: affDetailProgramName ? 'https://agents.pampadu.ru/#/register/' : getBasicLinkByName(item.title, item.content)
    }
  })
}
