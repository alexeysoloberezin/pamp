<template>
    <div class="p-fw">
        <div id="fw" style="position: absolute; top: -130px;" />
        <div
            class="p-fw-title"
            v-html="'Для кого актуально в&nbsp;первую очередь?'"
        />
        <div class="p-fw-cards">
            <div class="p-fw-card hover-outline" v-for="(item, i) in items" :key="i">
                <img class="p-fw-img" :src="item.img" />
                <span class="p-fw-text" v-text="item.text" />
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class ForWho extends Vue {
    items = [
        {
            img: require("@/assets/images/partners/icons/bank.svg"),
            text: "Банки и финансовые сервисы"
        },
        {
            img: require("@/assets/images/partners/icons/link.svg"),
            text: "Приложения и порталы для автомобилистов"
        },
        {
            img: require("@/assets/images/partners/icons/site.svg"),
            text: "Сайты и личные кабинеты с высоким MAU"
        },
        {
            img: require("@/assets/images/partners/icons/web.svg"),
            text: "Агрегаторы услуг и сервисов"
        }
    ];
}
</script>
<style lang="scss">
.p-fw {
    position: relative;
    padding: 48px 0;
    background-color: #f9f9fc;
}
.p-fw-title {
    font-family: Montserrat;
    font-weight: bold;
    font-size: 25px;
    line-height: 30px;
    text-align: center;
    color: #000000;
    margin-bottom: 20px;
}
.p-fw-cards {
    display: flex;
    flex-wrap: wrap;
    max-width: 1160px;
    margin: auto;
}
.p-fw-card {
    padding: 18px;
    margin: 18px;
    flex: 1 0 200px;
    background: #ffffff;
    box-shadow: 0px 5px 25px rgba(203, 207, 216, 0.5);
    border-radius: 5px;
    display: flex;
    align-items: center;
    @media (max-width: $w-sm) {
        flex: 1 0 40%;
        margin: 14px;
    }
    @media (max-width: $w-xs) {
        flex: 1 0 250px;
        margin: 8px 28px;
        padding: 22px 18px;
    }
}
.p-fw-img {
    max-width: 40px;
    max-height: 40px;
    width: 100%;
    object-fit: contain;
    margin-right: 18px;
    flex: 1 0 auto;
}
.p-fw-text {
    font-size: 14px;
    line-height: 16px;
    color: #4578ff;
    flex: 0 1 auto;
}
</style>