<template>
    <div
        :style="{
            position: 'absolute',
            transform: `rotate(${this.tri.rotate ? this.tri.rotate : '0deg'})`,
            left: this.tri.left ? this.tri.left : 'unset',
            right: this.tri.right ? this.tri.right : 'unset',
            top: this.tri.top ? this.tri.top : 'unset',
            bottom: this.tri.bottom ? this.tri.bottom : 'unset',
            width: this.tri.size + 'px',
            height: this.tri.size + 'px'
        }"
    >
        <div :class="{ hollow: tri.hollow }" :style="styles" class="deco-tri" />
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class DecoTri extends Vue {
    @Prop({ default: null }) tri: Triangle;

    get color() {
        return this.tri.color ?? "#F2F5FF";
    }
    get styles() {
        return {
            backgroundColor: this.tri.hollow ? "transparent" : this.color,
            borderColor: this.color,
            width: this.tri.size + "px",
            height: this.tri.size + "px",
            opacity: this.tri.opacity
        };
    }
}
export class Triangle {
    color: string;
    size: number;
    hollow?: boolean;
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
    opacity?: number;
    rotate: string;
}
</script>
<style lang="scss">
.deco-tri {
    position: relative;
    text-align: left;
}
.deco-tri:before,
.deco-tri:after {
    content: "";
    position: absolute;
    background-color: inherit;
}
.deco-tri:before,
.deco-tri:after {
    width: inherit;
    height: inherit;
}
.deco-tri,
.deco-tri:before,
.deco-tri:after {
    border-top-right-radius: 62%;
}
.deco-tri {
    transform: rotate(-60deg) skewX(-30deg) scale(1, 0.866);
    &:before {
        transform: rotate(-135deg) skewX(-45deg) scale(1.414, 0.707)
            translate(0, -50%);
    }
    &:after {
        transform: rotate(135deg) skewY(-45deg) scale(0.707, 1.414)
            translate(50%);
    }
    &.hollow {
        border-top: 3px solid;
        border-right: 3px solid;
        &:before {
            transform: rotate(-135deg) skewX(-45deg) scale(1.414, 0.707)
                translate(0, -50%) translate(3px, 3px);
            border-top: 3px solid;
            border-right: 3px solid;
            border-color: inherit;
        }
        &:after {
            transform: rotate(135deg) skewY(-45deg) scale(0.707, 1.414)
                translate(calc(50% + -3px));
            border-top: 3px solid;
            border-right: 3px solid;
            border-color: inherit;
        }
    }
}
</style>