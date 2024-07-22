import { IcUrl } from "~/urls";

export type PolisType = {
  type: string;
  icon: string;
  code: PolisCode;
};
export type InsuranceVariant = {
  bank: Bank;
  price: number;
  commission: number;
  ic: IcUrl;
};

export enum PolisCode {
  kit,
  health,
  home,
}
export enum Bank {
  Sberbank,
  Vtb,
  Raiff,
  Vozrozhdenie,
  Primsoc,
  Smp,
  Energo,
  Sever,
  Rost,
  Ipb,
  Finans,
  Koshelev,
  Avers,
  Chelab,
  Tat,
  UralProm,
  UralFd,
  Unicredit,
  Gazprom,
  DomRf,
  Mkb,
  Spb,
  Promsvyaz,
}
export const getBankName = (bank: Bank) => {
  const bankNames: Record<number, string> = {
    [Bank.Vtb]: "ВТБ",
    [Bank.Raiff]: "Райффайзен банк",
    [Bank.Gazprom]: "Газпромбанк",
    [Bank.Sberbank]: "Сбербанк",
  };
  return bankNames[bank];
};
export const getBankLogo = (bank: Bank) => {
  const logos: Record<number, string> = {
    [Bank.Vtb]: require("~/assets/images/ipoteka/profit/vtb.png"),
    [Bank.Raiff]: require("~/assets/images/ipoteka/profit/raif.png"),
    [Bank.Gazprom]: require("~/assets/images/ipoteka/profit/gazprom.png"),
    [Bank.Sberbank]: require("~/assets/images/ipoteka/profit/sberbank.png"),
  };
  return logos[bank];
};
export const getBankCoefficient = (bank: Bank) => {
  let banks: Record<number, Record<PolisCode, number>> = {
    [Bank.Sberbank]: {
      [PolisCode.kit]: 0.00121,
      [PolisCode.health]: 0.00079,
      [PolisCode.home]: 0.00042,
    },
    [Bank.Vtb]: {
      [PolisCode.kit]: 0.00027,
      [PolisCode.health]: 0.00018,
      [PolisCode.home]: 0.00009,
    },
    [Bank.Raiff]: {
      [PolisCode.kit]: 0.00027,
      [PolisCode.health]: 0.00018,
      [PolisCode.home]: 0.00009,
    },
    [Bank.Vozrozhdenie]: {
      [PolisCode.kit]: 0.00027,
      [PolisCode.health]: 0.00018,
      [PolisCode.home]: 0.00009,
    },
    [Bank.Primsoc]: {
      [PolisCode.kit]: 0.00027,
      [PolisCode.health]: 0.00018,
      [PolisCode.home]: 0.00009,
    },
    [Bank.Smp]: {
      [PolisCode.kit]: 0.00027,
      [PolisCode.health]: 0.00018,
      [PolisCode.home]: 0.00009,
    },
    [Bank.Energo]: {
      [PolisCode.kit]: 0.00027,
      [PolisCode.health]: 0.00018,
      [PolisCode.home]: 0.00009,
    },
    [Bank.Sever]: {
      [PolisCode.kit]: 0.00027,
      [PolisCode.health]: 0.00018,
      [PolisCode.home]: 0.00009,
    },
    [Bank.Rost]: {
      [PolisCode.kit]: 0.00027,
      [PolisCode.health]: 0.00018,
      [PolisCode.home]: 0.00009,
    },
    [Bank.Ipb]: {
      [PolisCode.kit]: 0.00027,
      [PolisCode.health]: 0.00018,
      [PolisCode.home]: 0.00009,
    },
    [Bank.Koshelev]: {
      [PolisCode.kit]: 0.00027,
      [PolisCode.health]: 0.00018,
      [PolisCode.home]: 0.00009,
    },
    [Bank.Avers]: {
      [PolisCode.kit]: 0.00025,
      [PolisCode.health]: 0.00017,
      [PolisCode.home]: 0.00008,
    },
    [Bank.Chelab]: {
      [PolisCode.kit]: 0.00025,
      [PolisCode.health]: 0.00017,
      [PolisCode.home]: 0.00008,
    },
    [Bank.Tat]: {
      [PolisCode.kit]: 0.00025,
      [PolisCode.health]: 0.00017,
      [PolisCode.home]: 0.00008,
    },
    [Bank.UralProm]: {
      [PolisCode.kit]: 0.00025,
      [PolisCode.health]: 0.00017,
      [PolisCode.home]: 0.00008,
    },
    [Bank.UralFd]: {
      [PolisCode.kit]: 0.00025,
      [PolisCode.health]: 0.00017,
      [PolisCode.home]: 0.00008,
    },
    [Bank.Unicredit]: {
      [PolisCode.kit]: 0.00025,
      [PolisCode.health]: 0.00017,
      [PolisCode.home]: 0.00008,
    },
    [Bank.Gazprom]: {
      [PolisCode.kit]: 0.00045,
      [PolisCode.health]: 0.00027,
      [PolisCode.home]: 0.00018,
    },
    [Bank.DomRf]: {
      [PolisCode.kit]: 0.00036,
      [PolisCode.health]: 0.00024,
      [PolisCode.home]: 0.00012,
    },
    [Bank.Mkb]: {
      [PolisCode.kit]: 0.00036,
      [PolisCode.health]: 0.00024,
      [PolisCode.home]: 0.00012,
    },
    [Bank.Spb]: {
      [PolisCode.kit]: 0.00031,
      [PolisCode.health]: 0.00022,
      [PolisCode.home]: 0.00009,
    },
    [Bank.Promsvyaz]: {
      [PolisCode.kit]: 0.0001,
      [PolisCode.health]: 0.00007,
      [PolisCode.home]: 0.00003,
    },
  };
  return banks[bank];
};
