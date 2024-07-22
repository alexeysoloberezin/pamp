<template>
    <div class="py-4 primary white--text" style="position: relative">
        <DecoTri
            :tri="{
                top: '55%',
                right: '128px',
                color: '#FFF',
                opacity: 0.2,
                rotate: '-157deg',
                size: 22
            }"
        />
        <DecoTri
            :tri="{
                top: '44%',
                left: '260px',
                color: '#FFF',
                opacity: 0.2,
                rotate: '-113deg',
                size: 24,
                hollow: true
            }"
        />
        <div class="hr-title-text-block">
            <div class="hr-h1 hr-wwd-h1">
                Что мы
                <br v-if="!$vuetify.breakpoint.smAndDown" />
                делаем?
            </div>
            <div class="hr-text" style="line-height: 28px;">
                Разрабатываем продуктовые решения, которые помогают партнерам
                продавать страховки на собственном сайте, в приложении, личном
                кабинете или через инструменты вебмастера. Наши клиенты — это
                страховые агенты, брокеры, вебмастера, банки и все, кто хотят
                зарабатывать на продаже страховых полисов.
            </div>
        </div>
        <div class="hr-indents wwd-info-container">
            <div class="wwd-info-block">
                <div class="wwd-info-block-title">390 000</div>
                <div class="wwd-info-block-text">
                    автомобилей застраховано
                    <br v-if="$vuetify.breakpoint.smAndDown" />
                    через&nbsp;Pampadu
                </div>
            </div>
            <div class="wwd-info-block accented-size">
                <div class="wwd-info-block-title">
                    2&nbsp;500&nbsp;000&nbsp;000&nbsp;₽
                </div>
                <div class="wwd-info-block-text">
                    привлекли в бюджет страховых компаний
                </div>
            </div>
            <div class="wwd-info-block">
                <div class="wwd-info-block-title">топ&nbsp;3</div>
                <div class="wwd-info-block-text">
                    агрегаторов по продаже
                    <br v-if="$vuetify.breakpoint.smAndDown" />
                    ОСАГО в&nbsp;РФ
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class WhatWeDo extends Vue {}
</script>
<style lang="scss">
.hr-wwd-h1 {
    min-width: 400px;
    @media (max-width: $w-md) {
        min-width: 250px;
    }
}
.wwd-info-container {
    display: flex;
    @media (min-width: $w-sm + 1px) {
        justify-content: space-between;
    }
    @media (max-width: $w-sm) {
        flex-flow: column;
    }
}
.wwd-info-block {
    @media (min-width: $w-sm + 1px) {
        &:not(:first-child) {
            margin-left: 32px;
            @media (max-width: $w-md) {
                margin-left: 24px;
            }
        }
        &:not(:last-child) {
            margin-right: 32px;
            @media (max-width: $w-md) {
                margin-right: 24px;
            }
        }
        &.accented-size {
            flex-basis: 656px;
            min-width: 428px;
            @media (max-width: $w-md) {
                min-width: 350px;
                flex-basis: 350px;
            }
        }
    }
    @media (max-width: $w-sm) {
        text-align: center;
        &:not(:last-child) {
            margin-bottom: 40px;
        }
    }
    &-title {
        font-family: Montserrat;
        font-weight: bold;
        font-size: 50px;
        line-height: 40px;
    }
    &-text {
        margin-top: 20px;
        font-size: 20px;
        line-height: 28px;
        opacity: 0.9;
    }
    @media (max-width: $w-md) {
        &-title {
            font-size: 40px;
            line-height: 30px;
        }
        &-text {
            margin-top: 16px;
            font-size: 16px;
            line-height: 20px;
        }
    }
    @media (max-width: $w-sm) {
        &-title {
            font-size: 45px;
            line-height: 40px;
        }
        &-text {
            margin-top: 16px;
            font-size: 20px;
            line-height: 28px;
        }
    }
    @media (max-width: $w-xs) {
        &-title {
            font-size: 35px;
            line-height: 40px;
        }
    }
}
</style>