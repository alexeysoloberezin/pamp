interface imgObj {
  data: string;
  width: number;
  height: number;
}

export interface GiftProduct {
  img: imgObj;
  type: ProductType;
  countGifts: number;
  name: string;
  numberOfSales: string;
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
  FinProducts = "finProducts",
  RefProgram = "refProgram",
}


export const data: dataObj[] = [
  {
    title: 'ОСАГО и КАСКО',
    type: ProductVersion.Base,
    text: 'Суммируются все продажи ОСАГО и полного КАСКО',
    color: '#4578FF',
    products: [
      {
        img: {
          data: require('@/assets/images/universe-gift/leaders/leaders1.webp'),
          width: 147,
          height: 126
        },
        type: ProductType.Diamond,
        countGifts: 1,
        name: 'Смартфон <br>Apple iPhone 12',
        numberOfSales: '80 и более'
      },
      {
        img: {
          data: require('@/assets/images/universe-gift/leaders/leaders2.webp'),
          width: 108,
          height: 126
        },
        type: ProductType.Bronze,
        countGifts: 1,
        name: 'Смарт-часы <br>Xiaomi Watch S1 Active',
        numberOfSales: '10-19'
      },
      {
        img: {
          data: require('@/assets/images/universe-gift/leaders/leaders3.webp'),
          width: 147,
          height: 120
        },
        type: ProductType.Gold,
        countGifts: 1,
        name: 'Планшет <br>Samsung Galaxy Tab S6 Lite',
        numberOfSales: '40-79'
      },
      {
        img: {
          data: require('@/assets/images/universe-gift/leaders/leaders4.webp'),
          width: 101,
          height: 126
        },
        type: ProductType.Copper,
        countGifts: 3,
        name: 'Фитнес-браслет <br>HUAWEI Band 8',
        numberOfSales: '5-9'
      },
      {
        img: {
          data: require('@/assets/images/universe-gift/leaders/leaders5.webp'),
          width: 122,
          height: 142
        },
        type: ProductType.Silver,
        countGifts: 1,
        name: 'Смартфон <br>HUAWEI nova 9 SE 128',
        numberOfSales: '20-39'
      },
      {
        img: {
          data: require('@/assets/images/universe-gift/leaders/leaders6.webp'),
          width: 144,
          height: 106
        },
        type: ProductType.GoodStart,
        countGifts: 5,
        name: 'Сертификат DNS',
        numberOfSales: '3 и более'
      },
    ]
  },
  {
    title: 'Ипотечного страхования',
    type: ProductVersion.Base,
    text: 'Суммируются все онлайн и офлайн продажи ипотечного страхования',
    color: '#9065FD',
    products: [
      {
        img: {
          data: require('@/assets/images/universe-gift/leaders/leaders1.webp'),
          width: 147,
          height: 126
        },
        type: ProductType.Diamond,
        countGifts: 1,
        name: 'Смартфон <br>Apple iPhone 12',
        numberOfSales: '15 и более'
      },
      {
        img: {
          data: require('@/assets/images/universe-gift/leaders/leaders7.webp'),
          width: 135,
          height: 115
        },
        type: ProductType.Silver,
        countGifts: 2,
        name: 'Яндекс.Станция<br>Мини',
        numberOfSales: '5-9'
      },
      {
        img: {
          data: require('@/assets/images/universe-gift/leaders/leaders8.webp'),
          width: 107,
          height: 117
        },
        type: ProductType.Gold,
        countGifts: 1,
        name: 'Смартфон <br>Samsung Galaxy A54',
        numberOfSales: '10-14'
      },
      {
        img: {
          data: require('@/assets/images/universe-gift/leaders/leaders9.webp'),
          width: 121,
          height: 139
        },
        type: ProductType.Bronze,
        countGifts: 5,
        name: 'Фитнес-браслет <br>Xiaomi Mi Smart Band 8',
        numberOfSales: '1-4'
      }
    ]
  },
  {
    title: 'Финансовых продуктов',
    type: ProductVersion.Base,
    text: 'Участвуют в акции все подтвержденные продажи за Июль и Август',
    color: '#D863E0',
    products: [
      {
        img: {
          data: require('@/assets/images/universe-gift/leaders/leaders1.webp'),
          width: 147,
          height: 126
        },
        type: ProductType.Diamond,
        countGifts: 1,
        name: 'Смартфон <br>Apple iPhone 12',
        numberOfSales: '30 и более'
      },
      {
        img: {
          data: require('@/assets/images/universe-gift/leaders/leaders10.webp'),
          width: 127,
          height: 144
        },
        type: ProductType.Silver,
        countGifts: 1,
        name: 'Яндекс.Станция 2',
        numberOfSales: '10-14'
      },
      {
        img: {
          data: require('@/assets/images/universe-gift/leaders/leaders11.webp'),
          width: 129,
          height: 129
        },
        type: ProductType.Gold,
        countGifts: 1,
        name: 'Беспроводные наушники Apple AirPods Pro 2',
        numberOfSales: '15-29'
      },
      {
        img: {
          data: require('@/assets/images/universe-gift/leaders/leaders4.webp'),
          width: 101,
          height: 126
        },
        type: ProductType.Bronze,
        countGifts: 5,
        name: 'Фитнес-браслет <br>HUAWEI Band 8',
        numberOfSales: '3-9'
      }
    ]
  },
  {
    title: 'Реферальной программы',
    subtitle: 'Рассказывай о Пампаду, получай пассивный доход и забирай призы',
    text: 'Участвуют в акции продажи рефералов, приглашенных в Июле и Августе',
    type: ProductVersion.Version,
    color: '#994EF0',
    products: [
      {
        img: {
          data: require('@/assets/images/universe-gift/leaders/leaders1.webp'),
          width: 147,
          height: 126
        },
        type: ProductType.Diamond,
        countGifts: 1,
        name: 'Смартфон <br>Apple iPhone 12',
        numberOfSales: '40 и более'
      },
      {
        img: {
          data: require('@/assets/images/universe-gift/leaders/leaders12.webp'),
          width: 150,
          height: 113
        },
        type: ProductType.Silver,
        countGifts: 1,
        name: 'Портативная колонка<br>JBL Flip 5',
        numberOfSales: '10-19'
      },
      {
        img: {
          data: require('@/assets/images/universe-gift/leaders/leaders11.webp'),
          width: 129,
          height: 129
        },
        type: ProductType.Gold,
        countGifts: 1,
        name: 'Беспроводные наушники Apple AirPods 3',
        numberOfSales: '20-39'
      },
      {
        img: {
          data: require('@/assets/images/universe-gift/leaders/leaders13.webp'),
          width: 121,
          height: 139
        },
        type: ProductType.Bronze,
        countGifts: 5,
        name: 'Яндекс.Станция<br>Лайт',
        numberOfSales: '5-9'
      }
    ]
  }
]

export function getEnumKeyByEnumValue(enumValue) {
  let keys = Object.keys(ProductType).filter(x => ProductType[x] == enumValue);
  return keys.length > 0 ? keys[0] : null;
}

export default data;
