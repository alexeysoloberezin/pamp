<template>
    <div class="generic-intro">
        <div style="position: absolute; top: 0" id="intro" />
        <div class="generic-container-1260">
            <div>
                <slot name="h1">
                    <h1
                        class="intro-title"
                        :class="{ 'text-left': $vuetify.breakpoint.smAndDown }"
                        v-html="h1"
                    />
                </slot>
                <slot name="h2">
                    <h2 class="intro-subtitle my-8" v-html="h2" />
                </slot>
                <zond-btn v-text="regBtnText" />
            </div>
            <div>
                <v-img
                    :src="imgSrc"
                    alt="Изображение личного кабинета"
                    style="width: 100%"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class GenericIntro extends Vue {
    @Prop({ default: "" }) h1;
    @Prop({ default: "" }) h2;
    @Prop({ default: "Зарегистрироваться" }) regBtnText;

    @Prop({ default: "" }) imgSrc;
}
</script>

<style lang="scss">
.generic-intro {
    padding: 15px 0;
    background: linear-gradient(
        268.37deg,
        #f3f3f8 6.73%,
        rgba(249, 249, 252, 0.4) 98.42%
    );
    @media (max-width: $w-sm) {
        padding: 40px 0;
    }
    .generic-container-1260 {
        display: grid;
        grid-template-columns: minmax(400px, 570px) minmax(300px, 1fr);
        grid-gap: 40px;
        align-items: center;
        justify-content: center;
        @media (max-width: $w-sm) {
            grid-template-columns: minmax(300px, 700px);
        }
    }

    .intro-title {
        font-weight: bold;
        font-family: Montserrat, sans-serif;
        font-size: 35px;
        @media (min-width: $w-md) {
            line-height: 45px;
        }
        @media (max-width: $w-sm) {
            font-size: 19px;
        }
    }

    .intro-subtitle {
        font-size: 20px;
        line-height: 23px;
        @media (max-width: $w-sm) {
            font-size: 14px;
        }
    }
}
</style>
