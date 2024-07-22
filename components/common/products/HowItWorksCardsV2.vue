<template>
    <div style="background-color: #f9f9fc" class="hiw-container">
        <div class="generic-container-1260">
            <h2
                class="h2 text-center mx-auto"
                :class="$vuetify.breakpoint.lgAndUp ? 'mt-10 pt-10' : 'mt-3'"
            >
                Как это работает?
            </h2>
            <h3
                class="h5 text-center mx-auto mt-3"
                style="
                    font-family: Montserrat, sans-serif;
                    position: relative;
                    z-index: 1;
                "
                v-if="displaySubtitle"
            >
                Мы приложили много усилий, чтобы каждому агенту было удобно и
                комфортно пользоваться нашим сервисом. Зайдите в личный кабинет
                и оформите первый полис <b>уже через 5 минут</b>
            </h3>
            <v-layout class="mt-8 generic-cards">
                <div
                    class="generic-card-wrapper"
                    v-for="(card, i) in cards"
                    style="display: flex"
                    :key="i"
                >
                    <div class="hiw-item">
                        <img
                            style="max-width: 100%"
                            :src="card.img"
                            alt="our-service"
                        />
                        <div class="hiw-item-step" v-html="i + 1" />
                        <div v-text="card.title" class="hiw-item-title" />
                        <div class="hiw-item-lines" v-if="card.lines">
                            <div
                                v-for="(line, i) in card.lines"
                                :key="i"
                                style="display: flex; align-items: flex-start"
                                class="hiw-item-line"
                            >
                                <img
                                    height="14"
                                    width="14"
                                    :src="
                                        require('@/assets/images/osago/howItWorks/triangle.svg')
                                    "
                                    alt="triangle"
                                />
                                <div v-html="line" />
                            </div>
                        </div>
                    </div>
                </div>
            </v-layout>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { osagoItems, kaskoItems } from "~/model/HowItWorksCardsV2";

@Component
export default class HowItWorksCardsV2 extends Vue {
    @Prop({ default: "osago" }) page: "osago" | "kasko";
    @Prop({ default: true }) displaySubtitle: boolean;
    cards = null;
    created() {
        this.cards = { osago: osagoItems, kasko: kaskoItems }[this.page];
    }
}
</script>

<style lang="scss">
.hiw-container {
    padding-bottom: 50px;

    .generic-cards {
        @media (max-width: $w-md) {
            flex-wrap: wrap;
        }
    }
    .generic-card-wrapper {
        @media (max-width: $w-md) {
            flex: 50%;
        }
        @media (max-width: $w-sm) {
            flex: 100%;
        }
    }
}

.hiw-item {
    background: #ffffff;
    padding: 28px 22px 34px 32px;
    flex: 1;
    position: relative;
    overflow: hidden;
    @media (max-width: $w-md) {
        margin-bottom: 20px !important;
    }
    @media (max-width: $w-sm) {
        padding: 28px 22px 34px 13px;
        display: flex;
        flex-wrap: wrap;
    }
    &:after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        width: 90px;
        height: 90px;
        transform: rotate(45deg) translate(0px, -70px);
        background: rgb(249, 249, 252);
        @media (max-width: $w-md) {
            width: 60px;
            height: 40px;
            transform: rotate(45deg) translate(10px, -20px);
        }
    }
}
.hiw-item-title {
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 16px;
    color: #000000;
    line-height: 21px;
    margin-top: 25px;
    @media (max-width: $w-sm) {
        margin-top: 0;
        margin-left: 4px;
        width: calc(100% - 15px - 44px);
        font-size: 14px;
        line-height: 21px;
    }
}

.hiw-item-lines {
    @media (max-width: $w-sm) {
        width: 100%;
        margin-left: 12px;
    }
    margin-top: 24px;
}
.hiw-item-line {
    font-size: 14px;
    line-height: 16px;
    color: #000000;
    > div {
        margin-left: 12px;
        opacity: 0.6;
    }
    &:not(:last-child) {
        margin-bottom: 16px;
    }
}

.hiw-item-step {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    font-weight: 800;
    font-size: 37px;
    line-height: 43px;
    text-align: center;
    color: #000000;
}
</style>
