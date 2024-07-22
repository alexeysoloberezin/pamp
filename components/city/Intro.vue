<template>
    <div class="city-intro-bg" :style="{ backgroundImage: background }">
        <div class="generic-container-1260 city-container">
            <div class="intro-content">
                <h1
                    class="h1 first-headline"
                    style="font-weight: bold"
                    :style="{
                        textAlign: $vuetify.breakpoint.smAndDown ? 'left' : '',
                    }"
                    v-text="`Работа страховым агентом в ` + city.title"
                />
                <h3
                    class="h5"
                    v-html="
                        `
                    Начните работу страховым агентом в&nbsp;${city.title} и
                    <strong>зарабатывайте с каждого полиса до 35% </strong>
                    сразу после регистрации
                    `
                    "
                />
                <v-layout wrap class="intro-login">
                    <zond-btn
                        style="margin-right: 8px"
                        v-text="'Зарегистрироваться'"
                    />
                </v-layout>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { CityModel } from "~/model/entities/city";

@Component
export default class Intro extends Vue {
    @Prop(Object) city: CityModel;
    get background(): string {
        return `url(${require(`@/assets/images/city/intro/background/${this.city.url}.webp`)})`;
    }
}
</script>
<style lang="scss">
.city-intro-bg {
    max-width: 1920px;
    margin: auto;
    position: relative;
    min-height: 475px;
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
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 1) 48%,
            rgba(255, 255, 255, 0) 72%
        );
        top: 0;
        z-index: 0;
        @media (max-width: $w-xs) {
            background: linear-gradient(
                0,
                rgba(#f9f9fc, 1) 62%,
                rgba(#f9f9fc, 0) 80%
            );
        }
    }
    @media (min-width: $w-lg) {
        background-position: right 30%;
        &:after {
            background: linear-gradient(
                90deg,
                rgba(255, 255, 255, 1) 52%,
                rgba(255, 255, 255, 0) 70%
            );
        }
    }
    @media (max-width: $w-md) {
        min-height: 350px;
    }
    @media (max-width: $w-sm) {
        min-height: 390px;
        background-size: contain;
    }
    .intro-login {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-weight: 700;
        font-size: 16px;
        @media (max-width: $w-sm) {
            a {
                font-size: 14px;
            }
        }
    }
    .intro-content {
        position: relative;
        z-index: 1;
        padding: 85px 0;
        .h5 {
            max-width: 460px;
            margin: 36px 0;
            @media (max-width: $w-xs) {
                font-size: 16px;
                line-height: 23px;
                margin: 12px 0 28px;
            }
        }
        .h1.first-headline {
            font-size: 45px;
            max-width: 700px;
            line-height: 60px;
            @media (max-width: $w-md) {
                max-width: 600px;
            }
            @media (max-width: $w-sm) {
                max-width: unset;
                font-size: 25px;
                line-height: 30px;
            }
        }
        @media (max-width: $w-md) {
            padding: 85px 0 50px;
        }
        @media (max-width: $w-sm) {
            max-width: 50%;
        }
        @media (max-width: $w-xs) {
            padding-top: 200px;
            max-width: unset;
        }
    }
}
</style>
