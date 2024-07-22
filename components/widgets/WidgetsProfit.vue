<template>
    <div style="position: relative">
        <div id="pft" style="position: absolute; top: -180px" />
        <div>
            <h2
                class="h2 w-p-title"
                v-text="'Сколько вы заработаете с каждой покупки через виджет?'"
            />
            <div class="w-p-content">
                <v-divider style="border-color: #cdd4f0" />
                <div class="w-p-top-row">
                    <div class="w-p-top-accent">5-32%</div>
                    <div class="w-p-top-text">
                        от стоимости полиса. Размер зависит от региона
                        покупателя и ряда других факторов
                    </div>
                </div>
                <!-- <v-divider style="border-color:#CDD4F0" /> -->
                <div class="w-profit-lg" v-if="$vuetify.breakpoint.mdAndUp">
                    <div
                        v-for="(dbl, i) in doubles"
                        :key="i"
                        class="w-profit-row"
                    >
                        <div class="w-profit-row-inner">
                            <div class="w-profit-cell">
                                <div class="w-profit-percent">
                                    <span v-text="dbl.left[0].percent" />
                                    <span v-text="'%'" />
                                </div>
                                <div class="w-p-imgs">
                                    <img
                                        style="
                                            width: 84px;
                                            height: 30px;
                                            object-fit: contain;
                                        "
                                        v-for="(ic, ii) in dbl.left"
                                        :key="ii"
                                        :src="ic.img"
                                    />
                                </div>
                            </div>
                            <div class="w-profit-cell">
                                <div class="w-profit-percent">
                                    <span v-text="dbl.right.percent" />
                                    <span v-text="'%'" />
                                </div>
                                <div class="w-p-imgs">
                                    <img
                                        style="
                                            width: 84px;
                                            height: 30px;
                                            object-fit: contain;
                                        "
                                        :src="dbl.right.img"
                                    />
                                </div>
                            </div>
                        </div>
                        <!-- <v-divider style="border-color:#CDD4F0" /> -->
                    </div>
                    <v-divider style="border-color: #cdd4f0" />
                </div>
                <div class="w-profit-sm" v-else>
                    <div
                        v-for="(ics, percent, i) in percents"
                        :key="i"
                        class="w-profit-row"
                    >
                        <div class="w-profit-row-inner">
                            <div class="w-profit-cell">
                                <div class="w-profit-percent">
                                    <span v-text="percent" />
                                    <span v-text="'%'" />
                                </div>
                                <div class="w-p-imgs">
                                    <img
                                        v-for="(ic, ii) in ics"
                                        :key="ii"
                                        style="
                                            width: 84px;
                                            height: 40px;
                                            object-fit: contain;
                                        "
                                        :src="ic.img"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <v-divider style="border-color: #cdd4f0" />
                </div>
            </div>
        </div>
        <div class="w-p-advice">
            Зарегистируйтесь и узнайте размер вознаграждения по каждой компании
            и региону
        </div>
        <zond-btn
            style="display: block; margin-top: 30px; width: 200px; margin: auto"
            v-text="'Узнать'"
        />
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class WidgetsProfit extends Vue {
    ics = {
        rgs: { img: require("@/assets/images/ics/rgs-2x.png"), percent: 16 },
        av: { img: require("@/assets/images/ics/av-2x.png"), percent: 22 },
        vsk: { img: require("@/assets/images/ics/vsk-2x.png"), percent: 24 },
        gaide: { img: require("@/assets/images/ics/g-2x.png"), percent: 24 },
        abs: { img: require("@/assets/images/ics/abs-2x.png"), percent: 25 },
        euroins: {
            img: require("@/assets/images/ics/euroins-2x.png"),
            percent: 25,
        },
        sogl: { img: require("@/assets/images/ics/sog-2x.png"), percent: 25 },
        asko: { img: require("@/assets/images/ics/asko-2x.png"), percent: 26 },
        ren: { img: require("@/assets/images/ics/ren-2x.png"), percent: 26 },
        ing: { img: require("@/assets/images/ics/ing-2x.png"), percent: 27 },
        sogaz: {
            img: require("@/assets/images/ics/sogaz-2x.png"),
            percent: 28,
        },
        alfa: { img: require("@/assets/images/ics/alfa-2x.png"), percent: 32 },
    };
    get percents() {
        let ics = Object.values(this.ics);
        const groupByPercent = groupBy("percent");
        return groupByPercent(ics);
    }
    get doubles() {
        return [
            {
                left: [this.ics.av],
                right: this.ics.ing,
            },
            {
                left: [this.ics.vsk, this.ics.gaide],
                right: this.ics.sogaz,
            },
            {
                left: [this.ics.abs, this.ics.euroins, this.ics.sogl],
                right: this.ics.alfa,
            },
            {
                left: [this.ics.asko, this.ics.ren],
                right: this.ics.rgs,
            },
        ];
    }
}
const groupBy = (key) => (array) =>
    array.reduce((objectsByKeyValue, obj) => {
        const value = obj[key];
        objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
        return objectsByKeyValue;
    }, {});
</script>
<style lang="scss">
.w-p-title.h2 {
    max-width: 702px;
    text-align: center;
    margin: 40px auto;
    padding: 0 20px;
}
.w-p-content {
    margin: auto;
    max-width: 1200px;
    padding: 0 20px;
}
.w-p-top-row {
    font-family: Montserrat;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    @media (max-width: $w-sm) {
        flex-flow: column;
        align-items: flex-start;
        padding: 16px 20px;
        max-width: 640px;
        margin: auto;
    }
}
.w-p-top-accent {
    font-weight: bold;
    font-size: 48px;
    color: #7746d3;
    @media (max-width: $w-sm) {
        font-size: 40px;
        line-height: 35px;
        margin-top: 20px;
        margin-bottom: 12px;
    }
}
.w-p-top-text {
    margin-left: 20px;
    max-width: 620px;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    color: #000000;
    @media (max-width: $w-sm) {
        margin-left: 0px;
        font-size: 18px;
        line-height: 22px;
        margin-bottom: 12px;
    }
}
.w-profit-row {
    padding: 20px 0;
    border-top: 1px solid #cdd4f0;
    @media (max-width: $w-sm) {
        padding: 0;
    }
}
.w-profit-row-inner {
    display: flex;
    max-width: 880px;
    margin: auto;
}
.w-profit-percent {
    font-family: Montserrat;
    font-weight: bold;
    margin-right: 40px;
    span {
        font-size: 36px;
        & + span {
            font-size: 20px;
        }
    }
}
.w-p-imgs {
    flex: 1;
    justify-content: flex-start;
    display: flex;
    img {
        margin: 0 16px;
    }
    @media (max-width: $w-sm) {
        flex-flow: column;
    }
}
.w-profit-cell {
    display: flex;
    align-items: center;
    flex: 4;
    & + .w-profit-cell {
        flex: 3;
    }
    @media (max-width: $w-sm) {
        padding: 0px 20px;
        max-width: 240px;
        height: 120px;
        margin: auto;
    }
}
.w-p-advice {
    font-family: Montserrat;
    font-weight: bold;
    font-size: 20px;
    line-height: 25px;
    text-align: center;
    max-width: 640px;
    padding: 0 20px;
    margin: 50px auto 20px;
}
</style>