<template>
    <div class="wio">
        <div id="wio" style="position: absolute; top: -100px" />

        <DecoSpot
            v-if="decoCoords"
            style="z-index: 3"
            :[decoCoords.hor]="'100'"
            :[decoCoords.vert]="$vuetify.breakpoint.lgAndUp ? '25' : '50'"
            :diameter="$vuetify.breakpoint.lgAndUp ? '250' : '200'"
            blur="60"
        />

        <div
            class="generic-container-1260"
            style="position: relative"
            :style="{
                'z-index': 3,
                display: 'flex',
                'flex-flow': 'column',
            }"
        >
            <h2
                class="h1 text-center"
                v-text="'Преимущества работы с Пампаду'"
            />
            <v-layout
                wrap
                class="generic-cards text-center"
                :column="$vuetify.breakpoint.smAndDown"
                :style="{ order: order == 'items-first' ? 1 : 2 }"
            >
                <div
                    class="generic-card-wrapper mt-10"
                    v-for="(item, i) in items"
                    :key="i"
                >
                    <img :src="item.icon" />
                    <div
                        class="mt-2"
                        style="font-size: 17px; line-height: 20px"
                        v-html="item.text"
                    />
                </div>
            </v-layout>
            <div
                class="another-generic-card-number85 mt-10"
                :style="{ order: order == 'items-first' ? 2 : 1 }"
            >
                <div
                    class="another-generic-card-number85-title"
                    v-text="
                        'Пампаду — технологичная платформа, предоставляющая доступ к витрине финансовых офферов - дебетовых и кредитных карт, РКО, ипотеке, вкладов и микрозаймов.'
                    "
                />
                <div>
                    <div
                        class="another-generic-card-number85-line"
                        v-for="(line, i) in lines"
                        :key="i"
                        v-html="line"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class ItemsAndCard extends Vue {
    @Prop({ default: () => [] }) items: { icon: string; text: string }[];
    @Prop({ default: () => [] }) lines: string[];
    @Prop({ default: "items-first" }) order: "items-first" | "card-first";
    decoCoords = null;
    created() {
        const itemsFirst = this.order == "items-first";
        this.decoCoords = {
            hor: itemsFirst ? "left" : "right",
            vert: itemsFirst ? "bottom" : "top",
        };
    }
}
</script>
<style lang="scss">
.another-generic-card-number85 {
    background: #ffffff;
    box-shadow: 0px 5px 19px rgba(203, 207, 216, 0.31);
    border-radius: 5px;
    padding: 44px;
    display: grid;
    grid-template-columns: 362px 1fr;
    grid-gap: 40px;
    @media (max-width: $w-sm) {
        grid-template-columns: minmax(300px, 600px);
        grid-gap: 20px;
        justify-content: center;
    }
    &-title {
        font-family: "Montserrat";
        font-weight: 700;
        font-size: 20px;
        line-height: 28px;
    }
    &-line {
        font-size: 17px;
        line-height: 32px;
        padding-left: 6px;
        @media (max-width: $w-sm) {
            display: flex;
            font-size: 15px;
            line-height: 18px;
            margin-bottom: 12px;
        }
        &:before {
            content: "";
            background-image: url("~@/assets/images/widgets/adv/check.svg");
            min-width: 20px;
            min-height: 20px;
            display: inline-block;
            background-size: contain;
            transform: translate(-6px, 4px);
            @media (max-width: $w-sm) {
                display: block;
                transform: translate(-6px, 1px);
            }
        }
    }
}
</style>
