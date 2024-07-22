<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="83"
        height="83"
        fill="none"
        :transform="`rotate(${degrees})`"
    >
        <g filter="url(#a)">
            <path
                fill="#fff"
                fill-rule="evenodd"
                d="M41.5 66a26.5 26.5 0 1 0 0-53 26.5 26.5 0 0 0 0 53Z"
                clip-rule="evenodd"
            />
        </g>
        <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="2.4"
            d="m45 31-6.8 8c-.3.3-.3.7 0 1l6.8 8"
        />
        <defs>
            <filter
                id="a"
                width="83"
                height="83"
                x="0"
                y="0"
                color-interpolation-filters="sRGB"
                filterUnits="userSpaceOnUse"
            >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="7.5" />
                <feColorMatrix
                    values="0 0 0 0 0.584314 0 0 0 0 0.294118 0 0 0 0 0.937255 0 0 0 0.257649 0"
                />
                <feBlend
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1211_4775"
                />
                <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1211_4775"
                    result="shape"
                />
            </filter>
        </defs>
    </svg>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class SliderBtn extends Vue {
    @Prop({ default: () => "right" }) direction: "left" | "right";
    get degrees() {
        return { left: 0, right: 180 }[this.direction];
    }
}
</script>