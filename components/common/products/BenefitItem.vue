<template>
    <div class="benefit-item">
        <img
            :src="item.icon"
            alt="benefit"
            class="mr-5 benefit-icon"
            :class="{ bounce: bouncing.includes(index) }"
        />
        <div v-html="item.title" class="benefit-title" />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class BenefitItem extends Vue {
    //Массив индексов, которые должны быть анимированы
    @Prop({ default: () => [1] }) bouncing: number[];
    @Prop({ required: true }) index: number;

    @Prop({ required: true }) item: Benefit;
}
type Benefit = {
    icon: string;
    title: string;
};
</script>

<style lang="scss">
.common-benefit {
    display: grid;
    grid-template-columns: minmax(0, 400px) repeat(2, 1fr);
    grid-gap: 40px;
    @media (max-width: $w-md) {
        grid-template-columns: minmax(300px, 600px);
        grid-gap: 20px;
        justify-content: center;
    }
    .benefit-item {
        display: flex;
        flex: 0 0 auto;
        align-items: center;
        justify-content: center;
        padding-right: 40px;
        position: relative;
        @media (max-width: $w-md) {
            justify-content: flex-start;
            padding-right: 0;
        }
        &:not(:last-child):before {
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            content: url("@/assets/images/ipoteka/benefit/dots.svg");
            @media (max-width: $w-md) {
                display: none;
            }
        }
        .benefit-title {
            line-height: 25px;
        }
    }
    .bounce {
        animation-name: bounce;
        animation-duration: 1200ms;
        animation-iteration-count: infinite;
        animation-timing-function: cubic-bezier(0.28, 0.84, 0.42, 1);
    }
    @keyframes bounce {
        0% {
            transform: scale(1, 1) translateY(0);
        }
        10% {
            transform: scale(1.1, 0.9) translateY(0);
        }
        30% {
            transform: scale(0.9, 1.1) translateY(-10px);
        }
        50% {
            transform: scale(1.05, 0.95) translateY(0);
        }
        57% {
            transform: scale(1, 1) translateY(-2px);
        }
        64% {
            transform: scale(1, 1) translateY(0);
        }
        100% {
            transform: scale(1, 1) translateY(0);
        }
    }
}
</style>
