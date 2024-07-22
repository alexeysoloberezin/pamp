<template>
    <div class="wio">
        <div id="wio" style="position: absolute; top: -100px" />
        <div class="wio-bg" />
        <DecoSpot
            style="z-index: 3"
            :left="'150'"
            :bottom="$vuetify.breakpoint.lgAndUp ? '-30' : '50'"
            :diameter="$vuetify.breakpoint.lgAndUp ? '250' : '200'"
            blur="60"
        />
        <div
            class="generic-container-1260"
            style="position: relative; z-index: 3"
        >
            <v-layout wrap class="generic-cards">
                <v-flex xs12 sm6 md8 class="generic-card-wrapper">
                    <h2
                        class="h2 mb-5 mt-4 text-left"
                        v-text="'Страхование автогражданской ответственности'"
                    />
                    <h3
                        class="h5"
                        style="font-family: Montserrat"
                        v-html="
                            '<b>ОСАГО — это обязательный полис,</b> который должен быть у всех транспортных средств, допущенных для движения'
                        "
                    />
                </v-flex>
                <v-flex
                    xs12
                    sm6
                    md4
                    v-for="(item, i) in items"
                    :key="i"
                    class="generic-card-wrapper"
                >
                    <div class="wio-item">
                        <div class="wio-checkmark">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 16 16"
                                width="16"
                                height="16"
                            >
                                <path
                                    stroke="#4578FF"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="3"
                                    d="M13.3 4 6 11.3 2.7 8"
                                />
                            </svg>
                        </div>
                        <div class="wio-text" v-text="item" />
                    </div>
                </v-flex>
            </v-layout>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class WhatIsOsago extends Vue {
    items = [
        "Страхуется ответственность собственника транспортного средства перед третьими лицами",
        "Лимит ответственности на ущерб по имуществу до — 400 тыс. ₽",
        "Вознаграждение за продажу начисляется на баланс сразу после оплаты",
        "Загружать документы НЕ нужно",
        "Лимит ответственности на ущерб жизни и здоровью — до 500 тыс. ₽",
        "Оплата за полис напрямую на сайте страховой компании",
        "Время оформления — 10 минут",
    ];
}
</script>

<style lang="scss">
.wio {
    position: relative;
    padding-top: 64px;
    padding-bottom: 64px;
    &-bg,
    &:before,
    &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
    }
    &:before {
        background-color: #ffffff;
        mix-blend-mode: soft-light;
        opacity: 0.86;
        z-index: 3;
        @media (max-width: $w-sm) {
            opacity: 1;
        }
    }
    &:after {
        z-index: 1;
        background: linear-gradient(180deg, #e5e8f2 0%, #d2d5df 100%);
    }
    &-bg {
        background-image: url("@/assets/images/osago/advantages/bg.webp");
        background-size: 600px;
        background-position-x: right;
        background-position-y: top;
        z-index: 2;
        @media (max-width: $w-md) {
            background-position-x: 80px;
        }
        @media (max-width: $w-sm) {
            background-size: 500px;
            background-position-x: 116px;
            background-position-y: 32px;
        }
    }
}
.wio-item {
    background-color: #fff;
    border-radius: 11px;
    display: flex;
    flex-flow: column;
    align-items: center;
    padding: 40px;
    height: 100%;
    transition: color 0.15s, background-color 0.15s;
    @media (max-width: $w-md) {
        padding: 19px 16px;
    }
    &:hover {
        background-color: #4578ff;
        color: #fff;
    }
}
.wio-checkmark {
    width: 40px;
    height: 40px;
    background-color: #f9f9fc;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 24px;
}
.wio-text {
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    @media (max-width: $w-md) {
        font-size: 14px;
        line-height: 18px;
    }
}
</style>
