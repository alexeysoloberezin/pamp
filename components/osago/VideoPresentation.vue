<template>
    <div class="generic-container-1260">
        <h2
            class="h2"
            :class="{
                'mb-10': !$vuetify.breakpoint.mdAndDown,
                'mb-4': $vuetify.breakpoint.mdAndDown,
            }"
            v-text="'Видео по работе с нашей платформой'"
            :style="{ textAlign: $vuetify.breakpoint.mdAndDown ? 'left' : 'match-parent' }"
        />
        <div
            class="iframe-container-16by9"
            :class="{
                'mb-4': $vuetify.breakpoint.mdAndDown,
            }"
        >
            <iframe
                style="position: absolute"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Y2SUowu6xyY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            />
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class VideoPresentation extends Vue {}
</script>
<style lang="scss">
.iframe-container-16by9 {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
    @media (max-width: $w-md) {
        border-radius: 10px;
        overflow: hidden;
    }
}
</style>
