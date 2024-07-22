<template>
    <div class="generic-container-1260" style="position: relative">
        <div
            class="generic-half sm-order-reverse"
            :class="`generic-half-${order}`"
        >
            <div
                :class="`generic-half-${
                    order == 'text-first' ? 'first' : 'last'
                }`"
                :style="{ order: order == 'text-first' ? 'unset' : '-1' }"
            >
                <div class="generic-half-text-container">
                    <slot />
                </div>
            </div>
            <div
                :class="`generic-half-${
                    order == 'text-first' ? 'last' : 'first'
                }`"
            >
                <v-img class="w-100" :src="imgSrc" />
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class ImgTextHalf extends Vue {
    @Prop({ default: () => null }) imgSrc: string;
    @Prop({ default: "text-first" }) order: "img-first" | "text-first";
}
</script>

<style lang="scss">
// $generic-half-breakpoint: 800px;
.generic-half {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &-img-first {
        flex-flow: row-reverse;
    }
    @media (max-width: $w-sm) {
        margin: auto;
        max-width: 550px;
        flex-flow: column-reverse;
        // &.sm-order-reverse {
        //     flex-flow: column;
        // }
        img {
            margin-bottom: 40px;
            padding: 0 40px;
            @media (max-width: $w-sm) {
                padding: 0 20px;
            }
        }
    }
}
@media (max-width: $w-sm) {
    .generic-half-first {
        align-items: center;
        display: flex;
    }
}
@media (min-width: $w-sm + 1px) {
    .generic-half-first {
        max-width: 50%;
        flex: 1;
        margin-right: 40px;
        .generic-half-text-container {
            padding-left: 100px;
            @media (max-width: $w-sm) {
                padding-left: 40px;
            }
        }
    }

    .generic-half-last {
        margin-left: 40px;
        max-width: 50%;
        flex: 1;
        .generic-half-text-container {
            padding-right: 60px;
            @media (max-width: $w-sm) {
                padding-right: 20px;
            }
        }
    }
}
.generic-half-text-container {
    display: flex;
    flex-flow: column;
}
</style>
