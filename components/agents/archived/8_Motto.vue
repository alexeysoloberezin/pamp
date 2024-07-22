<template>
    <div class="motto">
        <div class="motto-inner">
            <div class="motto-card" v-for="motto in mottos" :key="motto.title">
                <img class="motto-img" :src="motto.img" />
                <span class="motto-title" v-text="motto.title" />
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class Motto extends Vue {
    mottos = [
        {
            img: require("~/assets/images/bl8/magic.svg"),
            title: "Дорожим репутацией"
        },
        {
            img: require("~/assets/images/bl8/darts.svg"),
            title: "Избегаем серости и скуки"
        },
        {
            img: require("~/assets/images/bl8/book.svg"),
            title: "Исповедуем открытость"
        }
    ];
}
</script>
<style lang="scss">
.motto {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f9f9fc;
}
.motto-inner {
    padding: 100px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1142px;
    width: 100%;
    @media (max-width: $w-sm) {
        padding: 60px 0;
        // flex-flow: column;
        max-width: 742px;
        align-items: center;
        margin-top: 0px;
        margin-bottom: 0px;
    }
    @media (max-width: $w-xs) {
        flex-flow: column;
        align-items: center;
        margin-top: 0px;
        margin-bottom: 0px;
    }
}
.motto-card {
    display: flex;
    align-items: center;
    margin: 20px 10px;
    font-family: Montserrat;
    font-weight: 600;
    color: #000000;
    font-size: 26px;
    line-height: 33px;
    @media (max-width: $w-sm) {
        font-size: 18px;
        line-height: 22px;
    }
}
.motto-img {
    object-fit: contain;
    width: 80px;
    max-width: 80px;
    margin-right: 26px;
    @media (max-width: $w-sm) {
        width: 46px;
        max-width: 46px;
    }
}
.motto-title {
    width: 100%;
    max-width: 226px;
    @media (max-width: $w-sm) {
        max-width: 160px;
    }
}
</style>
