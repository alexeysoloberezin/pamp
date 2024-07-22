<template>
    <div class="ipoteka-about-us" :style="{ background: background }">
        <div style="position: absolute; top: -120px" id="moa" />
        <div :class="containerClass">
            <h2
                class="h2 text-center"
                :class="[$vuetify.breakpoint.smAndDown ? 'mb-5' : 'mb-10']"
                v-text="'О нас'"
            />
            <div class="about-us-items">
                <div class="about-us-item outlined" :class="{ shaded: shaded }">
                    <div
                        style="color: #7d39e9"
                        class="accented"
                        v-text="'22+ тыс.'"
                    />
                    <div
                        style="max-width: 275px"
                        v-html="'партнеров уже зарабатывают с&nbsp;Пампаду'"
                    />
                </div>
                <div class="outlined">
                    <v-img
                        style="max-width: 100%"
                        :src="require('@/assets/images/common/aboutUs/first.png')"
                        alt="about-us"
                    />
                </div>
                <div class="about-us-item outlined" :class="{ shaded: shaded }">
                    <div v-html="'Мы выплатили им&nbsp;вознаграждений свыше'" />
                    <div
                        class="accented"
                        style="color: #4578ff"
                        v-text="'556 млн рублей'"
                    />
                </div>
                <div class="outlined">
                    <v-img
                        style="max-width: 100%"
                        :src="require('@/assets/images/common/aboutUs/second.png')"
                        alt="about-us"
                    />
                </div>
                <div class="about-us-item outlined" :class="{ shaded: shaded }">
                    <div v-text="'Они оформили'" />
                    <div
                        class="accented"
                        style="color: #d863e0"
                        v-text="'840+ тыс.'"
                    />
                    <div
                        style="max-width: 240px"
                        v-html="'страховых полисов для&nbsp;своих клиентов'"
                    />
                </div>
                <div class="outlined">
                    <v-img
                        style="max-width: 100%"
                        :src="require('@/assets/images/common/aboutUs/third.png')"
                        alt="about-us"
                    />
                </div>
                <div class="about-us-partner">
                    <v-layout
                        :column="$vuetify.breakpoint.mdAndDown"
                        :align-center="$vuetify.breakpoint.lgAndUp"
                        align-start
                    >
                        <v-flex xs4 md3 lg2 class="d-flex">
                            <div style="margin: auto">
                                <v-img
                                    :height="
                                        $vuetify.breakpoint.lgAndUp
                                            ? '100'
                                            : '70'
                                    "
                                    :width=" $vuetify.breakpoint.lgAndUp
                                            ? '77'
                                            : '70'"
                                    style="max-width: 100%"
                                    src="@/assets/images/common/aboutUs/skolkovo.png"
                                    alt="skolkovo"
                                />
                            </div>
                        </v-flex>
                        <v-flex>
                            <div
                                class="h4 partner-title"
                                :class="{
                                    'px-4': $vuetify.breakpoint.lgAndUp,
                                    'my-2': $vuetify.breakpoint.mdAndDown,
                                }"
                            >
                                Пампаду — резиденты научно-технологического
                                инновационного центра&nbsp;Сколково
                            </div>
                        </v-flex>
                        <v-flex class="d-flex">
                            <zond-btn
                                style="min-width: 260px; margin: auto"
                                v-text="'Стать партнером'"
                            />
                        </v-flex>
                    </v-layout>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class AboutUs extends Vue {
    @Prop({ type: String, default: () => "#F9F9FC" }) background;
    @Prop(Boolean) shaded;
    @Prop({ type: String, default: () => "generic-container-1260 " }) containerClass;
}
</script>

<style lang="scss" scoped>
.ipoteka-about-us {
    padding: 75px 0;
    position: relative;
    @media (max-width: $w-sm) {
        padding: 30px 0;
    }
    .about-us-items {
        font-family: Montserrat, sans-serif;
        font-size: 18px;
        line-height: 1.5;
        font-weight: 600;
        .accented {
            font-size: 48px;
            line-height: 1.25;
            font-weight: bold;
        }
        display: grid;
        grid-template-columns: repeat(3, minmax(290px, 1fr));
        grid-gap: 35px;
        justify-content: center;
        @media (max-width: $w-md) {
            grid-template-columns: repeat(2, minmax(250px, 350px));
        }
        @media (max-width: $w-xs) {
            grid-template-columns: 1fr;
            grid-auto-rows: minmax(160px, auto);
        }
        .about-us-item {
            background: #ffffff;
            display: flex;
            align-items: flex-start;
            flex-flow: column;
            justify-content: center;
            text-align: left;
            padding: 0 50px;
            min-height: 100%;
            border-radius: 10px;
            &.shaded {
                box-shadow: 0 5px 25px rgba(203, 207, 216, 0.28);
            }
            @media (max-width: $w-md) {
                padding: 0 20px;
            }
        }
        .about-us-partner {
            grid-column: span 3;
            @media (max-width: $w-md) {
                grid-column: span 2;
            }
            @media (max-width: $w-xs) {
                grid-column: span 1;
            }
        }
        .outlined {
            transition: 0.3s;
            outline: 2px solid transparent;
            border-radius: 10px;
            overflow: hidden;
            display: flex;
            box-shadow: 0 0 0 2px transparent;
            &:hover {
                box-shadow: 0 0 0 2px #447eff;
                // outline: 2px solid #447eff; ios safari ignores border-radius for outline
            }
            img {
                object-fit: cover !important;
                height: 100%;
            }
        }
    }
    .about-us-partner {
        padding: 50px 30px;
        box-shadow: 0 5px 31px rgba(203, 207, 216, 0.6);
        border-radius: 11px;
        @media (max-width: $w-sm) {
            padding: 25px 15px;
        }
    }
    .partner-title {
        max-width: 590px;
        font-size: 30px;
        line-height: 1.25;
        font-family: Montserrat, sans-serif;
        @media (max-width: $w-sm) {
            font-size: 18px;
        }
    }
}
</style>
