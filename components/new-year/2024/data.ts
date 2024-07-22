interface imgObj {
  data: string;
  width: number;
  height: number;
}

export interface GiftProduct {
  img: imgObj;
  bankImg?: string;
  type: ProductType;
  countGifts: number | string;
  name: string;
  nameSec?: string;
  chance?: string[];
  bg?: string;
  numberOfSales?: string;
  val?: string;
}


export interface dataObj {
  products: GiftProduct[];
  type: ProductVersion;
  title: string;
  subtitle?: string;
  text: string;
  color: string;
}
export enum ProductVersion {
  Base = 'base',
  Version = 'Version',
  Mortgage='Mortgage',
  Bank = "Bank"
}
export enum ProductType {
  Diamond = 'Алмазная',
  Gold = 'Золотая',
  Silver = 'Серебряная',
  Bronze = 'Бронзовая',
  Copper = 'Медная',
  GoodStart = 'Хороший старт',
  // other types
}

export enum GiftProductsTabs {
  Osago = "osago",
  Ipoteka = "ipoteka",
  BankProducts = "bankProducts",
}


const data: dataObj[] = [
  {
    title: 'ОСАГО и КАСКО',
    type: ProductVersion.Base,
    text: '',
    color: '#4578FF',
    products: [
      {
        img: {
          data: require('~/assets/images/new-year/2024/lg55.webp'),
          width: 136,
          height: 100
        },
        type: ProductType.Diamond,
        countGifts: 1,
        name: '55" Телевизор <br/>LG',
        numberOfSales: '40 и более'
      },
      {
        img: {
          data: require('~/assets/images/universe-gift/leaders/leaders7.webp'),
          width: 135,
          height: 115
        },
        type: ProductType.Gold,
        countGifts: 6,
        name: 'Яндекс.Станция<br>Мини',
        numberOfSales: '10-40'
      },
      {
        img: {
          data: require('~/assets/images/new-year/2024/money1.webp'),
          width: 140,
          height: 117
        },
        type: ProductType.Silver,
        countGifts: 60,
        bg: '#EBEDEF',
        nameSec: "Первые 60 человек, оформивших <span>больше всех полисов пролонгации</span> через АльфаСтрахование",
        name: `По 3 000 <br/>рублей`,
      },
      {
        img: {
          data: require('~/assets/images/new-year/2024/xiamoiAir.png'),
          width: 55,
          height: 99
        },
        type: ProductType.Bronze,
        countGifts: 50,
        name: 'Увлажнитель воздуха <br/>Xiaomi',
        numberOfSales: '10-19'
      },
    ]
  },
  {
    title: 'Ипотечного страхования',
    type: ProductVersion.Mortgage,
    text: '',
    color: '#7245FF',
    products: [
      {
        img: {
          data: require('~/assets/images/new-year/2024/money2.webp'),
          width: 230,
          height: 138
        },
        bankImg: require('~/assets/images/new-year/2024/renesans.png'),
        type: ProductType.Bronze,
        countGifts: 'infinite',
        name: `<span>За каждый 3-й полис</span> Ипотеки через Ренессанс: Сбербанк Имущество`,
        val: '1 000'
      },
    ]
  },
  {
    title: 'Банковских продуктов',
    type: ProductVersion.Bank,
    text: '',
    color: '#A657EE',
    products: [
      {
        img: {
          data: require('~/assets/images/new-year/2024/pc.webp'),
          width: 345,
          height: 237
        },
        bankImg: require('~/assets/images/new-year/2024/renesans.png'),
        type: ProductType.Bronze,
        countGifts: 1,
        name: `Apple <br/>MacBook Air 15''`,
        val: '1 000',
        chance: ['50', '1']
      },
    ]
  },
]

export function getEnumKeyByEnumValue(enumValue) {
  let keys = Object.keys(ProductType).filter(x => ProductType[x] == enumValue);
  return keys.length > 0 ? keys[0] : null;
}

export default data;

