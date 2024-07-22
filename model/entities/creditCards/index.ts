export enum Banks {
  All,
  Alfa,
  Tinkoff,
  Gazprom,
  Vtb,
  Mts,
  Sovcom,
  Uralsib,
  Open,
}

export type Card = {
  title: string;
  commission: number;
  img: string;
  bank: Banks;
};
export type Button = {
  title: string;
  value: Banks;
};

export const Buttons: Button[] = [
  {
    title: "Все банки",
    value: Banks.All,
  },
  {
    title: "Альфа-Банк",
    value: Banks.Alfa,
  },
  {
    title: "Тинькофф",
    value: Banks.Tinkoff,
  },
  {
    title: "Газпромбанк",
    value: Banks.Gazprom,
  },
  {
    title: "ВТБ",
    value: Banks.Vtb,
  },
  {
    title: "МТС",
    value: Banks.Mts,
  },
  {
    title: "Совкомбанк",
    value: Banks.Sovcom,
  },
  {
    title: "Уралсиб",
    value: Banks.Uralsib,
  },
  {
    title: "Открытие",
    value: Banks.Open,
  },
];
export const Cards: Card[] = [
  {
    title: "Кредитная карта Газпромбанк «Удобная карта»",
    commission: 8_550,
    img: require("assets/images/creditCards/popularCards/card0.png"),
    bank: Banks.Gazprom,
  },
  {
    title: 'ВТБ - Кредитная карта "Возможностей"',
    commission: 5_320,
    img: require("assets/images/creditCards/popularCards/card1.png"),
    bank: Banks.Vtb,
  },
  {
    title: "Кредитная Альфа-карта 365 дней без %",
    commission: 4_000,
    img: require("assets/images/creditCards/popularCards/card2.png"),
    bank: Banks.Alfa,
  },
  {
    title: "Кредитная карта 120 дней без % - УРАЛСИБ",
    commission: 2_900,
    img: require("assets/images/creditCards/popularCards/card3.png"),
    bank: Banks.Uralsib,
  },
  {
    title: "Кредитная карта Тинькофф Platinum",
    commission: 3_630,
    img: require("assets/images/creditCards/popularCards/card4.png"),
    bank: Banks.Tinkoff,
  },
  {
    title: "Кредитная карта МТС Банк - Деньги Zero",
    commission: 4_000,
    img: require("assets/images/creditCards/popularCards/card5.png"),
    bank: Banks.Mts,
  },
  {
    title: "Карта рассрочки Халва МИР - Совкомбанк",
    commission: 2_100,
    img: require("assets/images/creditCards/popularCards/card6.png"),
    bank: Banks.Sovcom,
  },
  {
    title: "Кредитная карта Travel от Альфа-Банка",
    commission: 3_500,
    img: require("assets/images/creditCards/popularCards/card7.png"),
    bank: Banks.Alfa,
  },
  {
    title: "Кредитная карта Тинькофф Drive",
    commission: 2_600,
    img: require("assets/images/creditCards/popularCards/card8.png"),
    bank: Banks.Tinkoff,
  },
  {
    title: "Кредитная карта Газпромбанк 180 дней без %",
    commission: 7_600,
    img: require("assets/images/creditCards/popularCards/card9.png"),
    bank: Banks.Gazprom,
  },
  {
    title: "Кредитная карта МТС банк - Деньги Weekend",
    commission: 2_800,
    img: require("assets/images/creditCards/popularCards/card10.png"),
    bank: Banks.Mts,
  },
  {
    title: "Кредитная карта МТС банк - CashBack МИР",
    commission: 2_800,
    img: require("assets/images/creditCards/popularCards/card11.png"),
    bank: Banks.Mts,
  },

  {
    title: "Кредитная карта Открытие - 120 дней без %",
    commission: 2_800,
    img: require("assets/images/creditCards/popularCards/card12.png"),
    bank: Banks.Open,
  },
  {
    title: "Кредитная карта Открытие - Все что надо",
    commission: 2_800,
    img: require("assets/images/creditCards/popularCards/card13.png"),
    bank: Banks.Open,
  },
  {
    title: "Кредитная карта Открытие - Opencard",
    commission: 2_800,
    img: require("assets/images/creditCards/popularCards/card14.png"),
    bank: Banks.Open,
  },
];
