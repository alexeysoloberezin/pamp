<template>
  <section class="generic-container-1260">
    <div class="easy">
      <div class="easy-content">
        <h2 class="easy-title">Легко и удобно</h2>
        <div class="easy-description">
          Вам не нужно заключать прямые агентские договора со страховыми компаниями.
        </div>
        <p class="easy-description">
          <strong>Зарегистрируйтесь на Пампаду.ру за 2 минуты</strong>
          и получите доступ сразу к 9 страховым компаниям. Выберите лучшее предложение, отправьте ссылку на оплату клиенту и выведите вознаграждение моментально.
        </p>
      </div>
      <div class="easy-img">
        <div class="profit-insurance-variants">
          <div
            v-for="(variant, index) in insuranceVariants"
            :key="index"
            class="insurance-variant"
          >
            <div class="bank-logo">
              <img
                style="max-width: 100%"
                :src="getBankLogo(variant.bank)"
                alt="bank-logo"
              />
            </div>
            <v-layout column class="insurance-bank">
              <div
                class="insurance-bank-title"
                v-text="'В каком банке ипотека'"
              />
              <div
                class="insurance-bank-description"
                v-text="getBankName(variant.bank)"
                v-if="$vuetify.breakpoint.mdAndUp"
              />
            </v-layout>
            <v-layout column class="insurance-price">
              <div
                class="insurance-price-title"
                v-text="'Стоимость полиса'"
              />
              <div class="insurance-price-description">
                            <span
                              v-text="variant.price.toLocaleString()"
                              style="font-weight: bold"
                            />
                руб.
              </div>
            </v-layout>
            <v-layout column class="insurance-commission">
              <div
                class="insurance-commission-title"
                v-text="'Ваша комиссия'"
              />
              <div class="insurance-commission-description">
                            <span
                              v-text="variant.commission.toLocaleString()"
                              style="font-weight: bold"
                            />
                руб.
              </div>
            </v-layout>
            <div class="ic-logo">
              <img
                style="width: 100%"
                :src="getIcLogo(variant.ic)"
                alt="ic-logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
    </div>
  </section>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
import {Bank, InsuranceVariant, getBankLogo,getBankName } from "~/model/entities/bank";
import {IcUrl} from "~/urls";
import { getIcLogo } from "@/model/entities/ic-partner/index";


@Component({})
export default class Easy extends Vue {
  get br() {
    return this.$vuetify.breakpoint;
  }

  get img() {
    return  require('images/realtors/advantage/PassiveIncome.webp');
  }
  getBankLogo(bank: Bank) {
    return getBankLogo(bank);
  }
  getBankName(bank: Bank) {
    return getBankName(bank);
  }
  getIcLogo(ic: IcUrl) {
    return getIcLogo(ic);
  }

  banks = [
    { text: "Сбербанк", value: Bank.Sberbank },
    { text: "ВТБ", value: Bank.Vtb },
    { text: "Райффайзенбанк", value: Bank.Raiff },
    { text: "Банк Возрождение", value: Bank.Vozrozhdenie },
    { text: "Примсоцбанк", value: Bank.Primsoc },
    { text: "СМП Банк", value: Bank.Smp },
    { text: "Энергобанк", value: Bank.Energo },
    { text: "Севергазбанк", value: Bank.Sever },
    { text: "РостФинанс", value: Bank.Rost },
    { text: "Банк ИПБ", value: Bank.Ipb },
    { text: "КОШЕЛЕВ-БАНК", value: Bank.Koshelev },
    { text: "Банк АВЕРС", value: Bank.Avers },
    { text: "Челябинвестбанк", value: Bank.Chelab },
    { text: "ТАТСОЦБАНК", value: Bank.Tat },
    { text: "УРАЛПРОМБАНК", value: Bank.UralProm },
    { text: "Урал ФД", value: Bank.UralFd },
    { text: "Юникредит банк", value: Bank.Unicredit },
    { text: "Газпромбанк", value: Bank.Gazprom },
    { text: "Банк ДОМ.РФ", value: Bank.DomRf },
    { text: "Московский кредитный банк", value: Bank.Mkb },
    { text: "Банк Санкт-Петербург", value: Bank.Spb },
    { text: "Промсвязьбанк", value: Bank.Promsvyaz },
  ];
  insuranceVariants: InsuranceVariant[] = [
    {
      bank: Bank.Vtb,
      price: 14960,
      commission: 2244,
      ic: IcUrl.Zetta,
    },
    {
      bank: Bank.Raiff,
      price: 15050,
      commission: 1505,
      ic: IcUrl.AlfaStrahovanie,
    },
    {
      bank: Bank.Gazprom,
      price: 27100,
      commission: 2710,
      ic: IcUrl.Pari,
    },
    {
      bank: Bank.Sberbank,
      price: 14100,
      commission: 7755,
      ic: IcUrl.Absolut,
    },
  ];
}
</script>

<style lang="scss">
.easy {
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: $w-sm) {
    flex-direction: column;
  }

  &-content {
    padding: 74px 0;
    flex: 0 1 458px;
    margin-right: 15px;
    position: relative;
    @media (max-width: $w-sm) {
      flex: auto;
      padding: 0;
    }
  }

  &-title {
    @include title;
    max-width: 440px;
    width: 100%;
    @media (max-width: $w-sm) {
      max-width: 240px;
      width: 100%;
    }
  }

  &-description {
    font-family: 'Roboto', sans-serif;
    margin-top: 27px;
    font-weight: 400;
    font-size: 22px;
    line-height: 34px;
    @media (max-width: $w-sm) {
      margin-top: 12px;
      font-size: 17px;
      line-height: 24px;
    }
  }

  &-img {
    flex: 0 1 634px;
    position: relative;
    @media (max-width: $w-sm) {
      margin: 20px -10px;
      flex: auto;
    }
  }
  .insurance-bank-description{
    font-size: 14px;
    line-height: 16px;
    font-weight: bold;
    @media (max-width: $w-sm) {
      font-size: 12px;
    }
  }
  .profit-insurance-variants {
    display: grid;
    grid-template-columns: minmax(200px, 800px);
    justify-content: center;
    grid-gap: 10px;
    @media (max-width: $w-sm) {
      grid-template-columns: minmax(200px, 80%);
    }
    @media (max-width: $w-xs) {
      grid-gap: 9px;
      grid-template-columns: minmax(0, 350px);
    }
    .insurance-variant {
      background: #ffffff;
      padding: 9px 8px 8px 20px;
      box-shadow: 0 2px 14px rgba(217, 217, 217, 0.5);
      border-radius: 3px;
      display: grid;
      grid-template-columns: minmax(0, 130px) repeat(3, 1fr) minmax(
                    0,
          75px
                );
      grid-gap: 20px;
      align-items: flex-start;
      transition: 0.3s;
      @media (max-width: $w-sm) {
        padding: 17px 12px;
        grid-template-columns: 1.4fr 1fr 0.5fr;
        grid-gap: 10px;
        align-items: flex-start;
      }
      &:hover {
        box-shadow: 0 5px 15px rgba(203, 207, 216, 0.88) !important;
      }
    }
    .insurance-price-description {
      min-width: 110px;
    }
    .insurance-commission-description {
      min-width: 86px;
    }

    .bank-logo {
      align-self: center;
      @media (max-width: $w-sm) {
        grid-column: span 2;
        max-width: 150px;
      }
      @media (max-width: $w-xs) {
        max-width: 110px;
        margin-top: -10px;
      }
    }
    .insurance-bank {
      @media (max-width: $w-sm) {
        grid-row: 1;
        margin-top: 0;
      }
    }
    .ic-logo {
      max-width: 55px;
      @media (max-width: $w-sm) {
        max-width: 45px;
      }
    }
    .insurance-bank-title,
    .insurance-price-title,
    .insurance-commission-title {
      font-size: 12px;
      color: #7d8d93;
      @media (max-width: $w-sm) {
        max-width: 85px;
      }
    }
    .insurance-price-description,
    .insurance-commission-description {
      >span{
        font-size: 22px;
        @media (max-width: $w-sm) {
          font-size: 16px;
        }
      }
      font-size: 12px;
      @media (max-width: $w-sm) {
        font-size: 10px;
      }
    }

  }
}
</style>
