<template>
    <div class="wwd">
        <div id="wwd" style="position: absolute; top: -150px;" />
        <h2 class="h2 text-center px-6" v-text="'Что мы делаем?'" />
        <div class="wwd-inner">
            <div class="wwd-items">
                <div class="wwd-card partner">
                    <div class="wwd-card-title" v-text="'ДЛЯ ПАРТНЕРОВ'" />
                    <div class="wwd-card-text">
                        Позволяем быстро начать зарабатывать на продаже полисов
                        обязательного страхования Е-ОСАГО, расширив список
                        онлайн-услуг.
                    </div>
                </div>
                <div class="wwd-card client">
                    <div class="wwd-card-title" v-text="'ДЛЯ ИХ КЛИЕНТОВ'" />
                    <div
                        class="wwd-card-text"
                        v-html="
                            `Расчет, сравнение и покупка полиса от десятка страховых
                        компаний в одном месте — у&nbsp;партнера.`
                        "
                    />
                </div>
            </div>
            <div
                :style="
                    $vuetify.breakpoint.smAndDown
                        ? 'order: -1; margin: auto'
                        : 'margin-left: 40px'
                "
            >
                <v-img
                    style="width: 100%;max-width: 420px;object-fit: contain"
                    :src="require('@/assets/images/partners/wwd/wwd-2x.png')"
                />
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
.wwd {
    padding: 40px 0;
    position: relative;
}
.wwd-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1216px;
    margin: 40px auto 0;
    padding: 0 20px;
    @media (max-width: $w-sm) {
        margin: 0 auto;
        flex-flow: column;
    }
}
.wwd-items {
    @media (max-width: $w-sm) {
        margin: 0 7px;
    }
}
.wwd-card {
    width: 100%;
    max-width: 660px;
    min-height: 256px;
    padding-left: 300px;
    padding-right: 30px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    background-size: contain;
    background-position: center left;
    background-repeat: no-repeat;
    border-radius: 2px;
    background-color: #f9f9fc;
    position: relative;
    margin: 12px 0;
    @media (max-width: $w-md) {
        padding-left: 44%;
        // padding-right: 20px;
    }
    @media (max-width: $w-xs) {
        max-width: 400px;
        background-position: top center;
        background-size: 100%;
        padding-left: 22px;
        padding-top: 245px;
        padding-bottom: 20px;
        box-shadow: 0px 5px 31px rgba(203, 207, 216, 0.6);
    }
    &.partner {
        background-image: url("~@/assets/images/partners/wwd/for-partners-2x.png");
    }
    &.client {
        background-image: url("~@/assets/images/partners/wwd/for-clients-2x.png");
    }
    &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            -90deg,
            #f9f9fc 61%,
            rgba(255, 255, 255, 0) 68%
        );
        top: 0;
        left: 0;
        z-index: 0;
        @media (max-width: $w-xs) {
            background: linear-gradient(
                180deg,
                rgba(255, 255, 255, 0) 180px,
                #fafafd 220px
            );
        }
    }
}
.wwd-card-title,
.wwd-card-text {
    z-index: 1;
}
.wwd-card-title {
    font-family: Montserrat;
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 20px;
    @media (max-width: $w-xs) {
        font-size: 18px;
        margin-bottom: 8px;
    }
}
.wwd-card-text {
    font-size: 16px;
    line-height: 23px;
    @media (max-width: $w-xs) {
        font-size: 14px;
        line-height: 23px;
    }
}
</style>
