<template>
    <div class="p-ics">
        <h2 class="p-ics-title">
            Страховые компании-партнеры
        </h2>
        <div class="p-ics-subtitle">
            Интегрированы в наш сервис и продают каждый день
        </div>
        <div class="p-ics-card">
            <div class="dashed-ics">
                <img
                    v-for="(img, i) in images"
                    :key="i"
                    class="ics-img"
                    :src="img"
                />
            </div>
            <img
                v-if="$vuetify.breakpoint.xsOnly"
                class="p-ics-angle"
                src="@/assets/images/partners/angle-h.svg"
            />
            <img
                v-else
                class="p-ics-angle"
                src="@/assets/images/partners/angle.svg"
            />
            <div class="p-ics-content">
                <div class="p-ics-sells">
                    <v-progress-circular
                        :size="$vuetify.breakpoint.xsOnly ? 90 : 130"
                        color="#002587"
                        value="75"
                        width="8"
                        rotate="-90"
                    >
                        <span class="p-ics-percent" v-text="'75%'" />
                    </v-progress-circular>
                    <div
                        class="p-ics-text"
                        v-html="
                            `Большой список компаний повышает конверсию в&nbsp;успешную продажу на&nbsp;75%`
                        "
                    />
                </div>
                <div class="p-ics-accent">
                    ОДНА ОТДЕЛЬНАЯ СТРАХОВАЯ КОМПАНИЯ НЕ МОЖЕТ ПОКРЫТЬ 100% ВСЕХ
                    РЕГИОНОВ РФ И ПОРТРЕТОВ КЛИЕНТОВ
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class PartnersInsurances extends Vue {
    images = [
        require("@/assets/images/ics/alfa-2x.png"),
        require("@/assets/images/ics/ing-2x.png"),
        require("@/assets/images/ics/rgs-2x.png"),
        require("@/assets/images/ics/ren-2x.png"),
        require("@/assets/images/ics/sogaz-2x.png"),
        require("@/assets/images/ics/reso-2x.png"),
        require("@/assets/images/ics/abs-2x.png"),
        require("@/assets/images/ics/euroins-2x.png"),
        require("@/assets/images/ics/makc-2x.png"),
        require("@/assets/images/ics/vsk-2x.png"),
        require("@/assets/images/ics/sog-2x.png"),
        require("@/assets/images/ics/tin-2x.png")
    ];
}
</script>
<style lang="scss">
.p-ics {
    padding: 40px 0;
    display: flex;
    flex-flow: column;
    background-color: #f9f9fc;
    align-items: center;
}
.p-ics-title {
    padding: 0 30px;
    font-family: Montserrat;
    font-size: 25px;
    font-weight: bold;
    text-align: center;

    color: #000000;
    @media (max-width: $w-xs) {
        font-size: 20px;
        line-height: 25px;
        text-align: left;
    }
}
.p-ics-subtitle {
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    max-width: 360px;
    margin: auto;
    @media (max-width: $w-xs) {
        order: 5;
    }
}
.ics-img {
    margin: 24px 10px;
    width: 100%;
    object-fit: contain;
    max-width: 100px;
    @media (max-width: $w-sm) {
        // max-width: 60px;
        margin: 14px 8px;
    }
    @media (max-width: 814px) {
        max-width: 30%;
        margin: 12px 6px;
    }
    @media (max-width: $w-xs) {
        max-width: 100px;
    }
}
.p-ics-card {
    margin: 74px auto;
    max-width: 1200px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    @media (max-width: $w-xs) {
        flex-flow: column;
        margin: 24px auto;
        padding: 0 32px;
    }
}
$dash-length: 21px;
$dash-width: 2px;
.dashed-ics {
    padding: 20px 0;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    max-width: 588px;
    width: 100%;
    border-radius: 2px;
    background-image: repeating-linear-gradient(
            to right,
            #c0c2cc 0%,
            #c0c2cc 66%,
            transparent 66%,
            transparent 100%
        ),
        repeating-linear-gradient(
            to right,
            #c0c2cc 0%,
            #c0c2cc 66%,
            transparent 66%,
            transparent 100%
        ),
        repeating-linear-gradient(
            to bottom,
            #c0c2cc 0%,
            #c0c2cc 66%,
            transparent 66%,
            transparent 100%
        ),
        repeating-linear-gradient(
            to bottom,
            #c0c2cc 0%,
            #c0c2cc 66%,
            transparent 66%,
            transparent 100%
        );
    // order: top bottom left right
    // beware: bugged when served locally
    background-position: calc(#{$dash-length} * 0.75) 0,
        calc(#{$dash-length} * 0.75) 100%, 0 calc(#{$dash-length} * 0.75),
        100% calc(#{$dash-length} * 0.75);
    background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
    background-size: #{$dash-length} #{$dash-width},
        #{$dash-length} #{$dash-width}, #{$dash-width} #{$dash-length},
        #{$dash-width} #{$dash-length};
}
.p-ics-angle {
    margin: 0 28px;
    width: 30px;
    height: 100%;
    @media (max-width: $w-xs) {
        margin: 25px 0;
        order: -1;
        height: 30px;
        width: 100%;
    }
}
.p-ics-content {
    margin-left: 30px;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    @media (max-width: $w-sm) {
        margin-left: 0;
    }
    @media (max-width: $w-xs) {
        order: -2;
    }
}
.p-ics-percent {
    font-family: Montserrat;
    font-weight: bold;
    font-size: 36px;
    color: #0020a9;

    @media (max-width: $w-xs) {
        font-size: 30px;
    }
}
.p-ics-sells {
    display: flex;
    align-items: center;
}
.p-ics-text {
    margin-left: 30px;
    flex: 1 0 0;
    font-size: 16px;
    line-height: 18px;
    max-width: 230px;
    min-width: 180px;
    @media (max-width: $w-xs) {
        font-size: 14px;
        line-height: 18px;
        margin-left: 17px;
        min-width: 0;
    }
}
.p-ics-accent {
    margin-top: 30px;
    background: #0020a9;
    box-shadow: 0px 5px 25px rgba(203, 207, 216, 0.5);
    border-radius: 2px;
    color: #fff;
    max-width: 400px;
    padding: 20px 28px;
    font-family: Montserrat;
    font-weight: bold;
    font-size: 14px;
    line-height: 22px;
    text-transform: uppercase;
}
</style>