<template>
    <div class="partners-first">
        <h1 class="partners-first-title">
            Маркетплейс по продаже полисов ОСАГО под вашим брендом
        </h1>
        <div class="partners-first-subtitle">
            Быстрый запуск дополнительной монетизации клиентов с помощью виджета
            обязательного страхования
        </div>
        <div class="partners-first-accent">
            Наши партнеры уже продали более 180 тыс. полисов на 1 млрд рублей
            через техническое решение «Пампаду»
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class PartnersFirst extends Vue {}
</script>
<style lang="scss">
.partners-first {
    max-width: 1440px;
    margin: auto;
    position: relative;
    min-height: 475px;
    background-image: url("~@/assets/images/partners/partners-bg-3x.jpg");
    background-position: left top;
    background-repeat: no-repeat;
    background-size: contain;
    padding: 70px 40px 0 50%;
    display: flex;
    flex-flow: column;
    @media (min-width: $w-lg) {
        padding-left: 820px;
    }
    @media (max-width: $w-md) {
        padding-top: 45px;
        padding-left: 55%;
    }
    @media (max-width: $w-sm) {
        background-size: contain;
        background-position: left top;
        padding: 20px 40px 0 40%;
        &:after {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: 0;
            background-color: rgba(255, 255, 255, 0.6)
        }
    }
    @media (max-width: $w-xs) {
        padding: 20px 20px 0;
        min-height: 0;
        background-size: cover;
    }
}
.partners-first-title,
.partners-first-subtitle,
.partners-first-accent {
    z-index: 1;
}
.partners-first-title {
    font-family: Montserrat;
    font-weight: bold;
    font-size: 35px;
    line-height: 39px;
    max-width: 521px;
    margin-bottom: 20px;
    @media (max-width: $w-sm) {
        font-size: 25px;
        line-height: 30px;
    }
}
.partners-first-subtitle {
    font-size: 20px;
    line-height: 24px;
    max-width: 437px;
    margin-bottom: 30px;
    @media (max-width: $w-sm) {
        font-size: 16px;
        line-height: 20px;
    }
}
.partners-first-accent {
    margin-top: auto;
    background: #4578aa;
    max-width: 365px;
    font-family: Roboto;
    font-size: 18px;
    line-height: 22px;
    color: #ffffff;
    padding: 34px 46px;
    @media (max-width: $w-sm) {
        font-size: 12px;
        line-height: 16px;
        padding: 12px 20px;
    }
    @media (max-width: $w-xs) {
        margin-top: 0;
    }
}
</style>