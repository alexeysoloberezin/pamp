<template>
    <section class="generic-container-1260" style="position: relative" :style="{padding: $vuetify.breakpoint.mdAndUp ? '79px 0' : '42px 20px'}" >
        <ScrollAnchor id="hiw" />
        <h2 class="product-step-title" v-text="title" />
        <h2
            class="product-step-subtitle"
            v-text="subtitle"
        />
        <div class="product-step-items">
            <div class="product-step-item" v-for="(item, i) in steps" :key="i">
                <img
                    style="z-index: 2; width: 43px; height: 43px"
                    :src="icons[i]"
                    alt=""
                />
                <span class="product-step-number" v-text="i + 1" />
                <div class="product-step-text" v-html="item" />
            </div>
        </div>

        <zond-btn ref="zond" v-show="false" />
    </section>
</template>
<script lang="ts">
import { Component, Prop, Ref, Vue } from "vue-property-decorator";
import ScrollAnchor from "~/components/common/ScrollAnchor.vue";
import {
  finHIWCards,
  hrHIWCards,
  rkoHIWCards, rkoHIWCardsWebtools,
} from "~/model/HowItWorksCardsV1";
@Component({ components: { ScrollAnchor } })
export default class HowItWorksCardsV1 extends Vue {
    @Prop({ default: () => "fin" }) type: "fin" | "hr" | "rko" | "rkoWebtools";
    @Prop({ default: () => "Как это работает?" }) title: string;
    @Prop({ default: () => "фин. офферах" }) subtitle: string;

    created() {
        this.steps = { fin: finHIWCards, hr: hrHIWCards, rko: rkoHIWCards, rkoWebtools: rkoHIWCardsWebtools }[
            this.type
        ];
    }
    steps = [];
    icons = [
        require("@/assets/images/offers/list.svg"),
        require("@/assets/images/offers/settings.svg"),
        require("@/assets/images/offers/mail.svg"),
        require("@/assets/images/offers/bag.svg"),
    ];

    mounted() {
        document
            .querySelector("#step1-reg-link")
            ?.addEventListener?.("click", this.register);
    }
    @Ref("zond") zondBtn;
    register() {
        this.zondBtn.$el.click();
    }
}
</script>
<style lang="scss">
$steps-count: 4;
$steps-count-md: 2;
$margin: 20px;
.product-step-title {
    text-align: center;
    font-weight: bold;
    font-family: Montserrat, sans-serif;
    font-size: 35px;
    @media (max-width: $w-sm) {
        font-size: 19px;
    }
}
.product-step-subtitle {
    font-size: 16px;
    line-height: 28px;
    text-align: center;
}
.product-step-items {
    display: flex;
    margin-top: 50px;
    margin-left: #{-$margin/2};
    margin-right: #{-$margin/2};
    @media (max-width: $w-md) {
        flex-wrap: wrap;
        margin-right: 0;
    }
}
.product-step-text {
    font-size: 16px;
    line-height: 24px;
    z-index: 2;
    margin-top: 24px;
}
.product-step-item {
    display: flex;
    flex-flow: column;
    margin: 20px;
    flex: 1 0 calc(100% / #{$steps-count} - #{$margin} * #{$steps-count - 1});
    position: relative;

    border-radius: 5px;
    overflow: hidden;
    padding: 26px;
    @media (max-width: $w-md) {
        flex: 1 0
            calc(
                100% / #{$steps-count-md} - #{$margin} * #{$steps-count-md - 1}
            );
    }
    @media (max-width: $w-xs) {
        flex: 1 0 calc(100% - #{$margin});
    }
    &:after {
        content: "";
        position: absolute;
        width: 1100%;
        height: 1100%;
        top: 30px;
        right: -500%;
        background: #f9f9fc;
        transform-origin: 53.75% 0;
        transform: rotate(45deg);
        z-index: 1;
    }
}
.product-step-number {
    position: absolute;
    right: 0;
    top: 0;
    font-weight: 800;
    font-size: 37px;
    line-height: 1;
}
</style>
