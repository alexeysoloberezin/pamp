<template>
    <div
        style="position: relative; background-color: transparent"
        class="partners-slider-gen2"
    >
        <div class="arrow arrow-prev" @click="prev">
            <SliderBtn direction="left" />
        </div>
        <v-fade-transition mode="out-in">
            <component
                :is="sliderComponent"
                :no-controls="$vuetify.breakpoint.lgAndUp"
                ref="slider"
            />
        </v-fade-transition>
        <div class="arrow arrow-next" @click="next">
            <SliderBtn direction="right" />
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Ref, Vue } from "vue-property-decorator";
import ICSlider from "./ICSlider.vue";
import SliderBtn from "./SliderBtn.vue";
import BankSlider from './BankSlider.vue';
@Component({ components: { ICSlider, BankSlider, SliderBtn } })
export default class SliderWrapper extends Vue {
    @Prop({ default: "ic" }) type: "ic" | "bank";
    sliderComponent = "ICSlider";
    created() {
        this.sliderComponent = {
            ic: "ICSlider",
            bank: "BankSlider",
        }[this.type];
    }
    @Ref("slider") slider;
    next() {
        this.slider.next();
    }
    prev() {
        this.slider.prev();
    }
}
</script>