export default class ValidationRules {
  static requiredRule = (v: any) =>
    !!v || v === 0 || v === undefined || "Введите данные";
  static isUrl = (v: string) =>
    !v || v.includes("http") || "Укажите в формате http://website.ru";
  static isPhone = (v: string) =>
    !v ||
    /(^.{3}\d{3}.\d{3}.\d{2}.\d{2}$)|(^\d{11}$)/.test(v) ||
    "Неверный телефон";
  static isEmail = (v: string) =>
    !v ||
    (!v.includes("@mail.pampadu.com") &&
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        v
      )) ||
    "Email введен неверно";
}
