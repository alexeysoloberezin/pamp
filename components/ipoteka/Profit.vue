<template>
    <div class="ipoteka-profit">
        <div style="position: absolute; top: -120px" id="mop" />
        <div
            style="
                background-color: #f9f9fc;
                position: absolute;
                top: 0;
                width: 100%;
                z-index: 0;
            "
            :style="{ height: $vuetify.breakpoint.smAndUp ? '490px' : '860' }"
        />
        <div class="generic-container-1260">
            <h2
                class="h2"
                style="text-align: center"
                v-text="'Сколько можно заработать на ипотечном страховании?'"
            />
            <h3
                style="
                    text-align: center;
                    opacity: 0.5;
                    font-family: Montserrat, sans-serif;
                "
                class="h5 mt-5"
                v-text="'Попробуйте наш калькулятор'"
            />
            <v-card style="background: #ffffff" class="profit-card mt-10">
                <div :class="[$vuetify.breakpoint.mdAndUp ? 'px-10' : 'px-3']">
                    <v-layout
                        justify-space-between
                        :column="$vuetify.breakpoint.smAndDown"
                    >
                        <v-flex
                            xs3
                            lg2
                            :class="[$vuetify.breakpoint.mdAndUp ? '' : 'mt-2']"
                            style="
                                display: flex;
                                flex-flow: column;
                                justify-content: space-between;
                            "
                        >
                            <div
                                class="font-weight-bold calc-label"
                                v-text="'Количество полисов'"
                            />
                            <div class="card-polis px-5">
                                <v-layout justify-space-between>
                                    <img
                                        @click="polisCountDec"
                                        style="cursor: pointer"
                                        src="@/assets/images/ipoteka/profit/minus.svg"
                                        alt="minus-icon"
                                    />
                                    <v-slide-x-transition
                                        leave-absolute
                                        mode="out-in"
                                    >
                                        <div
                                            class="px-4 input-value text-center"
                                            :key="polisCount"
                                            v-text="polisCount"
                                            style="min-width: 52px"
                                        />
                                    </v-slide-x-transition>
                                    <img
                                        @click="polisCountInc"
                                        style="cursor: pointer"
                                        src="@/assets/images/ipoteka/profit/plus.svg"
                                        alt="plus-icon"
                                    />
                                </v-layout>
                            </div>
                        </v-flex>
                        <v-flex
                            md4
                            :class="[
                                $vuetify.breakpoint.mdAndUp ? 'px-3' : 'mt-2',
                            ]"
                            style="
                                display: flex;
                                flex-flow: column;
                                justify-content: space-between;
                            "
                        >
                            <div
                                class="font-weight-bold calc-label"
                                v-text="'Размер ипотечного кредита'"
                            />
                            <div class="card-credit">
                                <v-layout
                                    justify-space-between
                                    class="px-7 input-value"
                                >
                                    <span v-text="credit.toLocaleString()" />
                                    <span v-text="'руб.'" />
                                </v-layout>
                                <v-slider
                                    ref="slider-credit"
                                    style="
                                        position: absolute;
                                        bottom: -15px;
                                        width: 100%;
                                    "
                                    hide-details
                                    v-model="credit"
                                    max="15000000"
                                    min="0"
                                    step="50000"
                                />
                            </div>
                        </v-flex>
                        <v-flex
                            md4
                            :class="[$vuetify.breakpoint.mdAndUp ? '' : 'mt-2']"
                            style="
                                display: flex;
                                flex-flow: column;
                                justify-content: space-between;
                            "
                        >
                            <div
                                class="font-weight-bold calc-label"
                                v-text="'Банк'"
                            />
                            <div
                                class="card-bank px-7"
                                @click.self="openBankSelect"
                            >
                                <v-select
                                    append-icon="ppd-chevron-down"
                                    class="bank-select input-value"
                                    id="bank-select"
                                    :items="banks"
                                    v-model="currentBank"
                                    placeholder="'Выберите из списка'"
                                />
                            </div>
                        </v-flex>
                    </v-layout>
                    <v-layout
                        class="my-10"
                        :align-center="$vuetify.breakpoint.mdAndUp"
                        :column="$vuetify.breakpoint.mdAndDown"
                    >
                        <v-flex shrink>
                            <div
                                class="font-weight-bold h5 polis-type-title"
                                :class="{
                                    'text-center':
                                        $vuetify.breakpoint.smAndDown,
                                }"
                                v-text="'Тип полиса — Что страхуем?'"
                            />
                        </v-flex>
                        <v-layout
                            :class="{ 'mt-5': $vuetify.breakpoint.mdOnly }"
                            justify-end
                            wrap
                        >
                            <v-flex
                                :xs6="index !== 0"
                                :xs12="index === 0"
                                :md3="
                                    (index === 1 &&
                                        $vuetify.breakpoint.lgAndUp) ||
                                    (index === 2 && $vuetify.breakpoint.lgAndUp)
                                "
                                :md4="
                                    index === 0 && $vuetify.breakpoint.lgAndUp
                                "
                                v-for="(item, index) in polisTypes"
                                :key="item.code"
                                :class="[
                                    $vuetify.breakpoint.lgAndUp
                                        ? 'px-2'
                                        : 'mt-3',
                                    $vuetify.breakpoint.mdAndDown && index === 1
                                        ? 'pr-3'
                                        : '',
                                ]"
                            >
                                <div
                                    class="insurance-item"
                                    :class="{
                                        active: selectedType === item.code,
                                    }"
                                    @click="selectedType = item.code"
                                >
                                    <img
                                        :src="item.icon"
                                        alt="insuranceType"
                                        class="mr-3"
                                    />
                                    <div
                                        v-text="item.type"
                                        class="primary--text"
                                        :style="{
                                            fontWeight:
                                                selectedType === item.code
                                                    ? 'bold'
                                                    : '',
                                        }"
                                    />
                                    <v-fade-transition>
                                        <img
                                            v-if="selectedType === item.code"
                                            :src="
                                                require('@/assets/images/ipoteka/profit/selected.svg')
                                            "
                                            alt="insurance-selected"
                                            style="
                                                position: absolute;
                                                top: -5px;
                                                right: -5px;
                                            "
                                        />
                                    </v-fade-transition>
                                </div>
                            </v-flex>
                        </v-layout>
                    </v-layout>
                </div>
                <v-layout
                    class="card-regnow"
                    :column="$vuetify.breakpoint.mdAndDown"
                >
                    <v-flex
                        xs12
                        sm6
                        :align-self-center="$vuetify.breakpoint.mdAndUp"
                        :class="[
                            $vuetify.breakpoint.mdAndUp ? 'pl-10' : 'pl-3',
                            $vuetify.breakpoint.mdAndDown ? 'py-2' : '',
                        ]"
                    >
                        <div
                            class="card-regnow-left h3"
                            :class="{ 'pb-5': $vuetify.breakpoint.smAndDown }"
                            :key="profit"
                            style="font-weight: bold"
                            v-text="
                                `Ваш доход: ${
                                    displayNumber
                                        ? displayNumber.toLocaleString()
                                        : profit.toLocaleString()
                                } руб.`
                            "
                        />
                    </v-flex>
                    <v-flex>
                        <div
                            class="card-regnow-right font-weight-bold"
                            :class="{ 'px-3': $vuetify.breakpoint.mdAndDown }"
                        >
                            <div
                                :style="{
                                    maxWidth: $vuetify.breakpoint.lgAndUp
                                        ? '250px'
                                        : '',
                                }"
                                style="font-family: Montserrat, sans-serif"
                                v-html="
                                    'Зарегистрируйтесь и&nbsp;начните зарабатывать уже&nbsp;сегодня'
                                "
                            />
                            <zond-btn
                                style="max-width: 300px"
                                v-text="'Зарегистрироваться'"
                                class="inverted"
                                :class="{
                                    'mt-5': $vuetify.breakpoint.mdAndDown,
                                }"
                            />
                        </div>
                    </v-flex>
                </v-layout>
            </v-card>
            <h2
                class="h2 text-center"
                :class="[$vuetify.breakpoint.mdAndUp ? 'mt-15' : 'mt-10']"
                v-text="'Выбирайте варианты, выгодные вам и клиентам'"
            />
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
                <div class="mt-5">
                    <img
                        style="width: 100%"
                        src="@/assets/images/ipoteka/profit/summary.svg"
                        alt="summary"
                    />
                </div>
            </div>
            <div class="mt-7 profit-title">
                3.7 млн клиентов
                <span style="color: black">обязательно страхуют ипотеку</span>
                каждый год
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Ref } from "vue-property-decorator";
import { getIcLogo } from "@/model/entities/ic-partner/index";
import { IcUrl } from "~/urls";
import {
    Bank,
    getBankName,
    getBankLogo,
    getBankCoefficient,
    PolisType,
    PolisCode,
    InsuranceVariant,
} from "~/model/entities/bank/index";
@Component
export default class Profit extends Vue {
    credit = 1_000_000;
    maximumPolisCount = 20;
    displayNumber = 0;
    interval: number;
    @Ref("slider-credit") sliderCredit;
    @Watch("profit")
    creditTransition(val, oldVal) {
        window.clearInterval(this.interval);
        if (oldVal === val) return;
        this.interval = window.setInterval(() => {
            if (Math.abs(this.displayNumber - this.profit) <= 1)
                this.displayNumber = this.profit;
            else if (this.displayNumber != this.profit) {
                let change = (this.profit - this.displayNumber) / 5;
                change = change >= 0 ? Math.ceil(change) : Math.floor(change);
                this.displayNumber = this.displayNumber + change;
            }
        }, 20);
    }

    openBankSelect(e) {
        let slot = e.target.querySelector(".v-input__slot");
        slot.click();
    }

    getBankName(bank: Bank) {
        return getBankName(bank);
    }
    getBankLogo(bank: Bank) {
        return getBankLogo(bank);
    }
    getIcLogo(ic: IcUrl) {
        return getIcLogo(ic);
    }
    polisCount = this.maximumPolisCount;
    polisTypes: PolisType[] = [
        {
            type: "Квартира + Жизнь",
            icon: require("@/assets/images/ipoteka/profit/first-aid-kit.svg"),
            code: PolisCode.kit,
        },
        {
            type: "Жизнь",
            icon: require("@/assets/images/ipoteka/profit/health.svg"),
            code: PolisCode.health,
        },
        {
            type: "Квартира",
            icon: require("@/assets/images/ipoteka/profit/home.svg"),
            code: PolisCode.home,
        },
    ];
    selectedType = PolisCode.kit;

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
    currentBank = Bank.Sberbank;

    insuranceVariants: InsuranceVariant[] = [
        {
            bank: Bank.Vtb,
            price: 15000,
            commission: 5250,
            ic: IcUrl.Zetta,
        },
        {
            bank: Bank.Raiff,
            price: 15050,
            commission: 1800,
            ic: IcUrl.AlfaStrahovanie,
        },
        {
            bank: Bank.Gazprom,
            price: 27170,
            commission: 3530,
            ic: IcUrl.Pari,
        },
        {
            bank: Bank.Sberbank,
            price: 14100,
            commission: 4900,
            ic: IcUrl.Absolut,
        },
    ];
    get currentCoefficient() {
        return getBankCoefficient(this.currentBank);
    }
    get profit() {
        const currentBankMultiplier: 1 | 1.3 =
            this.currentBank === Bank.Sberbank ? 1 : 1.3;
        return (
            this.polisCount *
            currentBankMultiplier *
            (this.currentCoefficient[this.selectedType] * this.credit)
        );
    }

    polisCountInc() {
        if (this.polisCount == this.maximumPolisCount) return;
        this.polisCount += 1;
    }
    polisCountDec() {
        if (this.polisCount == 1) return;
        this.polisCount -= 1;
    }

    mounted() {
        let options = {
            root: null,
            rootMargin: "0px",
            threshold: 1,
        };
        let callbackFunc = (entries, observer) => {
            entries.forEach((entry: IntersectionObserverEntry) => {
                if (entry.isIntersecting) {
                    observer.unobserve(entry.target);
                    this.credit = 5_000_000;
                }
            });
        };
        let observer = new IntersectionObserver(callbackFunc, options);
        observer.observe(this.sliderCredit.$el);
    }
}
</script>

<style lang="scss">
.ipoteka-profit {
    padding: 60px 0;
    position: relative;
  @media (max-width: $w-sm) {
    padding: 36px 0 !important;
  }

    .profit-title {
        color: #4578ff;
        font-weight: bold;
        font-size: 30px;
        line-height: 36px;
        max-width: 750px;
        text-align: center;
        margin: 0 auto;
        font-family: Montserrat, sans-serif;
        @media (max-width: $w-sm) {
            font-size: 18px;
            line-height: 21px;
        }
    }
    .profit-card {
        padding: 60px 0 0;
        border-radius: 14px !important;
        position: relative;
        .v-slider {
            cursor: pointer;
        }
        @media (max-width: $w-md) {
            max-width: 800px;
            margin: 0 auto;
        }
        @media (max-width: $w-sm) {
            padding: 20px 0 0;
        }
        &:before {
            position: absolute;
            content: url("@/assets/images/ipoteka/profit/bg-left.svg");
            left: -7%;
            top: 5%;
            @media (max-width: $w-sm) {
                display: none;
            }
        }
        &:after {
            position: absolute;
            content: url("@/assets/images/ipoteka/profit/bg-right.svg");
            right: -10%;
            top: 45%;
            @media (max-width: $w-sm) {
                display: none;
            }
        }

        .card-polis,
        .card-credit,
        .card-bank {
            background-color: #edf1f6;
            position: relative;
            height: 65px;
            border-radius: 2px;
            margin-top: 10px;
        }
        .card-polis,
        .card-credit {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .card-credit {
            .v-slider--horizontal {
                margin: 0 1px;
            }
        }
        .card-bank {
            cursor: pointer;
        }
        .card-regnow {
            background: #f9f9fc;
            overflow: hidden;
            border-bottom-right-radius: 14px;
            border-bottom-left-radius: 14px;
            border-top: 1px solid #d0bdf3;
            @media (max-width: $w-sm) {
                border: unset;
                background: unset;
            }
            &-left {
                background: #f9f9fc;
                @media (max-width: $w-sm) {
                    font-size: 16px;
                    background: unset;
                }
            }
            &-right {
                display: flex;
                padding: 20px;
                background: linear-gradient(0deg, #965cf5 0%, #8e68ff 100%);
                box-shadow: 0px 5px 25px rgba(203, 207, 216, 0.28);
                color: #ffffff;
                align-items: center;
                @media (max-width: $w-md) {
                    flex-flow: column;
                }
                @media (max-width: $w-sm) {
                    align-items: flex-start;
                }
            }
        }
        .polis-type-title {
            font-size: 19px;
            @media (max-width: $w-sm) {
                font-size: 16px;
            }
        }
        .calc-label {
            font-size: 19px;
            @media (max-width: $w-sm) {
                font-size: 16px;
            }
        }
        .input-value {
            font-size: 17px !important;
            @media (max-width: $w-sm) {
                font-size: 15px !important;
            }
        }

        .insurance-item {
            display: flex;
            align-items: center;
            position: relative;
            justify-content: center;
            border: 1px solid #cfd7e0;
            font-size: 18px;
            border-radius: 5px;
            transition: 0.3s;
            padding: 18px 25px;
            cursor: pointer;
            @media (max-width: $w-sm) {
                padding: 14px 16px;
            }

            &:hover {
                border: 1px solid #6c4ad0;
            }

            &.active {
                border: 1px solid #6138da;
            }
        }
    }
    .profit-insurance-variants {
        display: grid;
        grid-template-columns: minmax(200px, 800px);
        justify-content: center;
        margin-top: 65px;
        grid-gap: 10px;
        @media (max-width: $w-sm) {
            margin-top: 25px;
            grid-template-columns: minmax(200px, 80%);
        }
        @media (max-width: $w-xs) {
            grid-gap: 9px;
            grid-template-columns: minmax(0, 350px);
        }
        .insurance-variant {
            background: #ffffff;
            padding: 17px 12px 17px 50px;
            box-shadow: 0px 2px 14px rgba(217, 217, 217, 0.5);
            border-radius: 3px;
            display: grid;
            grid-template-columns: minmax(0, 130px) repeat(3, 1fr) minmax(
                    0,
                    75px
                );
            grid-gap: 30px;
            align-items: flex-start;
            transition: 0.3s;
            @media (max-width: $w-sm) {
                padding: 17px 12px;
                grid-template-columns: 1.4fr 1fr 0.5fr;
                grid-gap: 15px;
                align-items: flex-start;
            }
            &:hover {
                box-shadow: 0px 5px 15px rgba(203, 207, 216, 0.88) !important;
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
            font-size: 22px;
            @media (max-width: $w-sm) {
                font-size: 16px;
            }
        }
    }
}
#list-22 {
    padding: 0;
}
</style>
