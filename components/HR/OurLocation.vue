<template>
    <div class="hr-indents" style="position: relative;">
        <div id="cond" style="position: absolute;left:0;top:-90px;" />
        <div class="ol-container">
            <div style="flex: 61;">
                <div
                    class="hr-h1"
                    v-text="'Что предлагаем?'"
                    style="margin-bottom: 50px;"
                />
                <div
                    class="hr-text"
                    style="font-size: 20px; line-height: 28px; max-width: 460px;"
                >
                    Работайте в офисе или удаленно. В Пампаду не надо
                    увольнятся, чтобы месяц пожить на Бали или Алтае. Сейчас 60%
                    сотрудников работают удаленно, а остальные наслаждаются
                    прекрасным офисом.
                </div>
            </div>
            <div class="office-cards" style="flex: 55;">
                <div class="office-card" v-for="(card, i) in cards" :key="i">
                    <img
                        style="max-width: 90px; height: auto;"
                        :src="card.img"
                    />
                    <div class="office-card-title" v-text="card.title" />
                    <div class="office-card-text" v-text="card.text" />
                </div>
            </div>
        </div>
        <!--<div class="d-flex" style="margin-top: 60px;">
            <a
                @click="dialog = true"
                class="btn"
                style="height: 60px; padding-top: 17px; margin: auto;width: 320px;text-align: center;font-weight: bold; font-size: 18px;"
                v-text="'Посмотреть видео об офисе'"
            />
            <v-dialog v-model="dialog">
                <v-card v-if="dialog" class="pa-4 d-flex">
                    <v-icon
                        @click="dialog = false"
                        class="c-pointer"
                        style="position: absolute; right: 4px; top: 4px;"
                        v-text="mdiClose"
                    />
                    <iframe
                        class="ma-4"
                        width="100%"
                        height="100%"
                        style="min-height: 80vh"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    />
                </v-card>
            </v-dialog>
        </div>-->
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { mdiClose } from "@mdi/js";
@Component
export default class OurLocation extends Vue {
    mdiClose = mdiClose;
    dialog = false;
    cards = [
        {
            img: require("@/assets/images/hr/office/sport.png"),
            title: "Фитнес после первой недели работы",
            text: "Поощряем здоровый и активный образ жизни."
        },
        {
            img: require("@/assets/images/hr/office/breakfast.png"),
            title: "Бесплатные завтраки",
            text: "Для тех, кто любит приходить в офис пораньше."
        },
        {
            img: require("@/assets/images/hr/office/relax.png"),
            title: "Зоны для релакса",
            text: "Кикер, VR, сонная комната, библиотека."
        }
    ];
}
</script>
<style lang="scss">
$office-breakpoint: 750px;
.office-cards {
    @media (max-width: $w-md) and (min-width: $w-sm +1px) {
        padding-left: 40px;
    }
    @media (max-width: $w-sm) {
        display: flex;
        justify-content: space-between;
    }

    @media (max-width: $office-breakpoint) {
        flex-flow: column;
    }
}
.office-card {
    margin-top: 26px;
    @media (max-width: $w-sm) and (min-width: $office-breakpoint) {
        max-width: 30%;
    }
    @media (max-width: $office-breakpoint) {
        text-align: center;
    }
}
.office-card-title {
    margin-top: 16px;
    font-family: Montserrat;
    font-weight: bold;
    font-size: 25px;
    line-height: 30px;
    color: #000000;
}
.office-card-text {
    margin-top: 4px;
    font-size: 18px;
    line-height: 30px;
    color: #000000;
}
.ol-container {
    display: flex;
    @media (max-width: $w-sm) {
        flex-flow: column;
    }
}
</style>