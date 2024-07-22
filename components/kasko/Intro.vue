<template>
    <div class="minikasko-intro">
        <div class="minikasko-container">
            <div>
                <h1
                    style="font-weight: bold"
                    class="h2 pb-4"
                    :class="{ 'text-left': br.smAndDown }"
                >
                    КАСКО агентам с
                    <span style="color: #ab54ff">комиссией до 38%</span>
                </h1>
                <h4
                    :class="{ 'mt-10': br.mdAndUp, 'mb-3': !br.mdAndUp }"
                    style="
                        font-family: 'Montserrat';
                        font-style: normal;
                        font-weight: 700;
                    "
                    :style="{ 'font-size': br.mdAndUp ? '24px' : '20px' }"
                    v-html="'КАСКО на любой вкус'"
                />
                <h5
                    class="mb-8"
                    v-html="description"
                    :class="{ 'mt-3': br.mdAndUp }"
                    style="line-height: 1.3"
                    :style="{ 'font-size': br.mdAndUp ? '20px' : '16px' }"
                />
                <zond-btn v-text="'Зарегистрироваться'" />
            </div>
              <v-img
                    class="minikasko-intro-bg"
                    :src="bg"
                    :alt="imgAltAttr"
                    style="width: 100%"
                />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Inject } from "vue-property-decorator";

@Component
export default class Intro extends Vue {
    @Inject("imgAltAttr") readonly imgAltAttr: string;

    bg = require("images/kasko/bg.png");
    description =
        "Онлайн сервис для заработка на продаже полисов КАСКО для агентов, брокеров и вебмастеров по всей России. Восемнадцать страховых компаний, высокая комиссия, высокий процент одобрения СК";

    get br() {
        return this.$vuetify.breakpoint;
    }
}
</script>

<style lang="scss">
.minikasko-intro {
    padding: 45px 0;
    background: linear-gradient(
        268.37deg,
        #f3f3f8 6.73%,
        rgba(249, 249, 252, 0.4) 98.42%
    );
    @media (max-width: $w-sm) {
        padding: 40px 0;
    }
    @media (max-width: $w-xs) {
        padding: 30px 0 20px;
    }

    .minikasko-container {
        display: grid;
        grid-template-columns: minmax(400px, 500px) minmax(300px, 1fr);
        grid-gap: 40px;
        align-items: center;
        justify-content: center;
        @media (max-width: $w-md) {
            grid-template-columns: minmax(300px, 700px);
        }
        @media (max-width: $w-sm) {
            grid-template-columns: 1fr;
        }
    }
}
</style>
