<template>
    <div>
        <div class="hr-title-text-block">
            <div
                class="hr-h1"
                style="min-width: 600px;"
                v-html="'Над чем работаем<br>сейчас'"
            />
            <div
                class="hr-text"
                style="max-width: 670px; font-size: 20px; line-height: 28px;"
            >
                Мы не работаем по наитию. Мы ставим себе четкие цели и стремимся
                их достигать.
            </div>
        </div>
        <div class="hr-indents hr-pl-cards">
            <div class="hr-pl-card" v-for="(card, i) in cards" :key="i">
                <div class="hr-pl-card-img-container">
                    <img
                        class="hr-pl-card-img"
                        :style="`width: ${card.img.width}px`"
                        :src="card.img.src"
                    />
                </div>
                <div class="hr-pl-card-content">
                    <div class="hr-pl-card-title" v-text="card.title" />
                    <div class="hr-pl-card-text" v-text="card.text" />
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class OurPlans extends Vue {
    cards = [
        {
            img: {
                src: require("@/assets/images/hr/plans/rocket.png"),
                width: 212
            },
            title: "Запускаем все страховые продукты",
            text: `Хотим, чтобы наши клиенты могли продавать через наш сервис
                    любые виды страховок.`
        },
        {
            img: {
                src: require("@/assets/images/hr/plans/card.png"),
                width: 180
            },
            title: "Готовим первые финансовые продукты",
            text: `Чтобы расширить продуктовую линейку, начнем работать с
                    кредитами и банковскими картами.`
        },
        {
            img: {
                src: require("@/assets/images/hr/plans/cup.png"),
                width: 166
            },
            title: "Станем резидентами Сколково",
            text: `И получим бонусы для дальнейшего развития проекта.`
        }
    ];
}
</script>
<style lang="scss">
.hr-pl-cards {
    display: flex;
    margin: 0 -20px;
    @media (max-width: $w-sm) {
        flex-flow: column;
    }
    @media (max-width: $w-xs) {
        margin: 0;
    }
}
.hr-pl-card {
    flex: 1;
    margin: 0 20px;
    background: #f9f9fc;
    border-radius: 20px;
    text-align: center;
    display: flex;
    flex-flow: column;
    padding-bottom: 24px;
    @media (max-width: $w-md) {
        margin: 0 10px;
    }
    @media (max-width: $w-sm) {
        margin: 10px 0;
    }
    @media (max-width: $w-sm) and (min-width: $w-xs + 1px) {
        padding-bottom: 0;
        flex-flow: row;
    }
}
.hr-pl-card-content {
    @media (max-width: $w-sm) and (min-width: $w-xs + 1px) {
        margin-top: auto;
        margin-bottom: auto;
        text-align: start;
    }
}
.hr-pl-card-img-container {
    height: 264px;
    display: flex;
    @media (max-width: $w-sm) and (min-width: $w-xs + 1px) {
        min-width: 180px;
        height: auto;
        max-height: 180px;
    }
}
.hr-pl-card-img {
    margin: auto;
    // padding-top: 30px;
    // padding-bottom: 20px;
    max-height: 264px;
    @media (max-width: $w-sm) and (min-width: $w-xs + 1px) {
        min-width: 180px;
        max-height: unset;
        max-height: 180px;
        padding: 10px 0;
    }
}
.hr-pl-card-title {
    font-family: Montserrat;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
    padding: 0 12px;
    margin-bottom: 12px;
    @media (max-width: $w-sm) and (min-width: $w-xs + 1px) {
        padding: 0;
    }
}
.hr-pl-card-text {
    padding: 0 30px;
    font-size: 20px;
    line-height: 28px;
    color: #000000;
    @media (max-width: $w-sm) and (min-width: $w-xs + 1px) {
        padding: 0;
    }
    @media (max-width: $w-xs) {
    padding: 0 10px;
    }
}
</style>