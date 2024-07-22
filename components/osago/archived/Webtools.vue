<template>
    <div class="osago-webtools">
        <div id="ow" style="position: absolute; top: -120px" />
        <div class="generic-container-1260">
            <h2
                class="osago-webtools-title"
                :class="[$vuetify.breakpoint.smAndDown ? 'mb-5' : 'mb-10']"
                v-text="'Все инструменты для вебмастеров и арбитражных команд'"
            />
            <div class="osago-products-wrapper">
                <div>
                    <img
                        class="osago-webtools-bg"
                        style="width: 100%; max-width: 100%; max-height: 100%"
                        src="@/assets/images/osago/webtools/bg.png"
                        alt="webtools-bg"
                    />
                    <p
                        style="text-align: center"
                        v-text="
                            'Пример виджета ОСАГО - White Label для вашего сайта'
                        "
                    />
                </div>
                <div class="osago-products-webtools">
                    <v-layout
                        column
                        align-center
                        justify-center
                        v-for="{ title, icon } in webtoolsItems"
                        :key="title"
                    >
                        <img height="60" :src="icon" alt="webtool" />
                        <div
                            class="mt-4"
                            style="font-weight: bold; text-align: center"
                            v-text="title"
                        />
                    </v-layout>
                    <div style="margin: 0 auto; grid-column: 1/-1">
                        <nuxt-link
                            class="btn"
                            :to="{ name: 'webtools', query: $route.query }"
                            style="
                                font-family: Roboto;
                                min-width: 220px;
                                text-align: center;
                            "
                            v-text="'Подробнее'"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Webtools extends Vue {
    webtoolsItems = [
        { title: "Виджеты", icon: require("@/assets/images/tools/widget.svg") },
        { title: "Api", icon: require("@/assets/images/tools/api.svg") },
        {
            title: "Интерактивные баннеры",
            icon: require("@/assets/images/tools/banner.svg"),
        },
        {
            title: "Реферальные ссылки",
            icon: require("@/assets/images/tools/links.svg"),
        },
    ];
}
</script>

<style lang="scss">
.osago-webtools {
    background: #f9f9fc;
    padding: 65px 0;
    position: relative;
    @media (max-width: $w-sm) {
        padding: 20px 0;
    }
    .osago-webtools-bg {
      image-rendering: -webkit-optimize-contrast;
    }
    .osago-webtools-title {
        font-family: Montserrat, sans-serif;
        font-size: 35px;
        font-weight: bold;
        max-width: 900px;
        margin: 0 auto;
        text-align: center;
        @media (max-width: $w-sm) {
            font-size: 19px;
        }
    }
    .osago-products-wrapper {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-content: center;
        grid-gap: 40px;
        @media (max-width: $w-sm) {
            grid-template-columns: minmax(0, 550px);
        }
    }
    .osago-products-webtools {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 25px;
        font-family: Montserrat, sans-serif;
    }
}
</style>
