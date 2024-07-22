<template>
    <div class="py-10 generic-container-1260 text-center">
        <h2
            class="h2 my-6 mx-auto"
            style="max-width: 650px"
            v-text="'Преимущества продажи Е-ОСАГО через платформу Пампаду'"
        />
        <v-layout wrap justify-space-between>
            <div
                class="osago-advantage-item"
                v-for="(item, i) in items"
                :key="i"
            >
                <v-img
                    class="mb-4 mx-auto"
                    width="90"
                    max-height="90"
                    :src="item.img"
                />
                <div class="osago-advantage-text" v-text="item.text" />
            </div>
        </v-layout>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class AdvantagesOsago extends Vue {
    items = [
        {
            img: require("@/assets/images/osago/advantages/car.svg"),
            text: "Высокая проходимость одобрения полисов ОСАГО — до 76%",
        },
        {
            img: require("@/assets/images/osago/advantages/hand.svg"),
            text: "Одно их самых высоких на рынке комиссионных вознаграждений за продажу полиса и быстрые стабильные выплаты",
        },
        {
            img: require("@/assets/images/osago/advantages/file.svg"),
            text: "Возможность оформить полис для любого водителя, региона и автомобиля кат. A, B, C, D",
        },
    ];
}
</script>
<style lang="scss">
.osago-advantage-item {
    padding: 30px;
    @media (min-width: $w-sm + 1px) {
        max-width: 370px;
        width: 33%;
    }
    width: 100%;
    @media (max-width: $w-md) {
        padding: 10px 0 25px;
    }
}
.osago-advantage-text {
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 16px;
    line-height: 23px;
    @media (max-width: $w-md) {
        font-size: 14px;
        line-height: 19px;
    }
}
</style>
