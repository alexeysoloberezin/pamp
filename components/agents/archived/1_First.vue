<template>
    <div class="first-bg">
        <div class="first-content">
            <h1 class="h4 first-headline">
                Оформляйте договоры страхования&nbsp;и получайте&nbsp;до
                <b>35%&nbsp;вознаграждения</b> за&nbsp;каждый полис уже
                <b>через 5&nbsp;минут после регистрации</b>
            </h1>
            <div class="img-block">
                <img
                    class="mr-3 bounce"
                    style="width: 43px; height: 43px; object-fit: contain"
                    src="~/assets/images/bl1/coin.svg"
                    alt="coin"
                />
                <h5 class="h5" style="max-width: 400px">
                    Вывод комиссии сразу после продажи полиса быстро и
                    официально
                </h5>
            </div>
            <client-only>
                <div class="first-login">
                    <zond-btn v-text="'Зарегистрироваться'" />
                    <a
                        class="inverted"
                        :href="`https://agents.pampadu.ru/#/auth${$root.query}`"
                        style="margin: auto 15px; padding: 10px 15px"
                        v-text="'Войти'"
                    />
                </div>
            </client-only>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
@Component
export default class First extends Vue {}
</script>
<style lang="scss">
.first-bg {
    .first-content {
        position: relative;
        z-index: 1;
        padding: 85px 0;
        margin-left: 100px;
        @media (max-width: $w-md) {
            padding: 85px 0 50px;
        }

        width: 40%;
        @media (max-width: $w-sm) {
            padding: 28px 0 20px;
            margin-left: 20px;
            margin-right: 20px;
            width: auto;
        }
    }
    .img-block {
        align-items: center;
        img.bounce {
            height: 31px;
            margin: auto 0;
            animation-name: bounce;
            animation-duration: 1200ms;
            animation-iteration-count: infinite;
            // animation-timing-function: linear;
            animation-timing-function: cubic-bezier(0.28, 0.84, 0.42, 1);
        }
        margin-top: 25px;
        @media (max-width: $w-sm) {
            margin-top: 20px;
        }
        display: flex;
        @media (max-width: $w-sm) {
            h5 {
                font-size: 14px;
            }
        }
    }
    .first-login {
        margin-top: 30px;
        display: flex;
        justify-content: flex-start;
        font-weight: 700;
        font-size: 16px;
        @media (max-width: $w-sm) {
            a {
                font-size: 14px;
            }
        }
    }
    .first-headline {
        @media (max-width: $w-md) {
            font-size: 20px;
            line-height: 28px;
        }
        @media (max-width: $w-sm) {
            font-size: 18px !important;
            line-height: 24px !important;
        }
    }
    .first-bg {
        max-width: 1920px;
        margin: auto;
        position: relative;
        min-height: 475px;
        background-image: url("~@/assets/images/bl1/orig.jpg");
        background-position: right top;
        background-repeat: no-repeat;
        background-size: 55%;
        &:after {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            background: linear-gradient(
                90deg,
                rgba(255, 255, 255, 1) 46%,
                rgba(255, 255, 255, 0) 70%
            );
            top: 0;
            z-index: 0;
        }
        @media (min-width: $w-lg) {
            background-position: right 30%;
            &:after {
                background: linear-gradient(
                    90deg,
                    rgba(255, 255, 255, 1) 45%,
                    rgba(255, 255, 255, 0) 70%
                );
            }
        }
        @media (max-width: $w-md) {
            min-height: 350px;
        }
        @media (max-width: $w-sm) {
            &:after {
                background: linear-gradient(
                    90deg,
                    rgba(255, 255, 255, 1) 45%,
                    rgba(255, 255, 255, 0) 150%
                );
            }
            background-position: 50% top;
            background-size: cover;
            min-height: unset;
        }
    }
    @keyframes bounce {
        0% {
            transform: scale(1, 1) translateY(0);
        }
        10% {
            transform: scale(1.1, 0.9) translateY(0);
        }
        30% {
            transform: scale(0.9, 1.1) translateY(-10px);
        }
        50% {
            transform: scale(1.05, 0.95) translateY(0);
        }
        57% {
            transform: scale(1, 1) translateY(-2px);
        }
        64% {
            transform: scale(1, 1) translateY(0);
        }
        100% {
            transform: scale(1, 1) translateY(0);
        }
    }
}
</style>
