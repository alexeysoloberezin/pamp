<template>
    <div class="deco-spot" :style="styles" />
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class DecoSpot extends Vue {
    @Prop({ default: null }) diameter;
    @Prop({ default: null }) right;
    @Prop({ default: null }) left;
    @Prop({ default: null }) top;
    @Prop({ default: null }) bottom;
    @Prop({ default: null }) blur;
    get styles() {
        return {
            width: `${this.diameter}px`,
            height: `${this.diameter}px`,
            left: `${this.left}px` ?? "unset",
            right: `${this.right}px` ?? "unset",
            top: `${this.top}px` ?? "unset",
            bottom: `${this.bottom}px` ?? "unset",
            filter: this.blur ? `blur(${this.blur}px)` : 'blur(200px)'
        };
    }
}
</script>
<style lang="scss">
.deco-spot {
    position: absolute;
    border-radius: 50%;
    background: linear-gradient(205.99deg, #8E68FF 22.09%, rgba(208, 73, 255, 0.3) 66.03%);
    opacity: 0.7;
}
</style>
