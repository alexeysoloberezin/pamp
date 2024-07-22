<template>
    <div class="agents-enjoy">
        <div class="enjoy-bg">
            <div class="agents-container">
                <div class="text-wrapper">
                    <h2 class="enjoy-title">
                        Присоединяйтесь к тысячам пользователей, которые
                        <span style="color: #ab54ff">уже&nbsp;зарабатывают</span>
                        с&nbsp;Пампаду
                    </h2>
                    <h3 class="mt-5 enjoy-description" style="max-width: 536px">
                        Не откладывайте на завтра, начните уже сегодня получать
                        дополнительный доход с нашей помощью. Присоединяйтесь и
                        мы расскажем подробнее!
                    </h3>
                    <zond-btn
                        v-text="'Присоединиться'"
                        class="mt-8"
                        style="min-width: 213px"
                    />
                </div>
            </div>
            <v-img
                :src="bg"
                v-if="$vuetify.breakpoint.smAndDown"
                class="mt-5"
                style="max-width: 100%; margin: 0 auto"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Enjoy extends Vue {
    bg = require("@/assets/images/agents/enjoy/bg-sm.webp");
}
</script>

<style lang="scss">
.agents-enjoy {
    .enjoy-bg {
        padding: 60px 0;
        background-image: url("@/assets/images/agents/enjoy/bg.webp");
        background-size: cover;
        background-position: center;
        @media (max-width: $w-sm) {
            background: #f2f5ff;
            padding: 26px 0 0;
        }
    }

    .enjoy-title {
        font-family: Montserrat, sans-serif;
        font-weight: 600;
        font-size: 35px;
        line-height: 42px;
        @media (max-width: $w-md) {
            font-size: 19px;
            line-height: 23px;
        }
    }

    .enjoy-description {
        font-weight: normal;
        font-size: 18px;
        line-height: 24px;
        @media (max-width: $w-md) {
            font-size: 14px;
            line-height: 20px;
        }
    }
    .text-wrapper {
        max-width: 660px;
        @media (max-width: $w-md) {
            max-width: 375px;
        }
    }
}
</style>
