<template>
    <div class="common-hiw-v1">
        <h2
            v-if="title"
            class="mb-10 font-weight-bold text-center h2"
            style="max-width: 900px; margin: 0 auto"
            v-text="title"
        />
        <div class="hiw-v1-content__inner">
            <div class="hiw-v1-switcher-container">
                <div class="hiw-v1-switcher">
                    <div
                        v-for="(item, index) in items"
                        :key="index"
                        @click="selected = { ...item }"
                        class="hiw-v1-switch"
                        :class="selected.title == item.title ? 'active' : ''"
                    >
                        <div class="sw-num" v-text="index + 1" />
                        <span class="sw-text" v-text="item.title" />
                    </div>
                </div>
            </div>
            <v-fade-transition mode="out-in">
                <div
                    :key="disableImageFade ? 0 : selected.text"
                    class="hiw-v1-desc-container mb-5"
                    :style="{
                        order: $vuetify.breakpoint.smAndDown ? '-1' : '',
                    }"
                >
                    <img
                        style="width: 100%"
                        class="root"
                        :src="selected.img"
                        :alt="selected.alt ? selected.alt : 'picture1'"
                    />
                    <span
                        style="
                            max-width: 600px;
                            margin: 0 auto;
                            text-align: center;
                        "
                        v-text="selected.text"
                    />
                </div>
            </v-fade-transition>
        </div>
        <slot />
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class HowItWorksV1 extends Vue {
    @Prop(String) title;
    @Prop(Array) items: SelectedItem[];
    @Prop(Boolean) disableImageFade;
    selected: SelectedItem | {} = {};
    mounted() {
        this.selected = this.items[0];
    }
}
type SelectedItem = {
    title: string;
    text: string;
    img: string;
    alt?: string;
};
</script>
<style lang="scss">
.common-hiw-v1 {
    .hiw-v1-subtitle {
        @media (max-width: $w-sm) {
            width: 230px;
            margin: auto;
            font-size: 15px !important;
            line-height: 24px !important;
            text-align: center;
        }
    }
    .hiw-v1-regnow {
        display: flex;
        max-width: 754px;
        margin: 0px auto 150px;
        position: relative;
        overflow: hidden;
        // display: none;
        z-index: 1;
        img {
            object-fit: contain;
        }
        @media (max-width: $w-sm) {
            flex-flow: column;
            margin: 0px auto 30px;
            img {
                width: 144px;
                margin: auto;
            }
        }
        .hiw-v1-regnow__inner {
            padding-top: 8px;
            margin-left: 80px;
            @media (max-width: $w-sm) {
                margin: 0 16px;
                text-align: center;
                h2 {
                    max-width: 260px;
                    margin: auto;
                    line-height: 24px;
                }
            }
        }
        .subtitle {
            font-size: 16px;
            line-height: 29px;
            margin: 2px 0 16px;
            @media (max-width: $w-sm) {
                max-width: 280px;
                margin-left: auto;
                margin-right: auto;
                margin-top: 12px;
                font-size: 14px;
                line-height: 21px;
                text-align: center;
            }
        }
    }
    .hiw-v1-content__inner {
        display: flex;
        justify-content: center;
        margin: 0 10px 0 40px;
        min-height: 646px;
        @media (max-width: $w-md) {
            min-height: 556px;
        }
        @media (max-width: $w-sm) {
            flex-flow: column;
            margin: 0px 25px 40px;
        }
        @media (max-width: $w-xs) {
            margin: 0 25px 20px;
        }
    }
    .hiw-v1-switcher-container {
        flex: 0 1 465px;
        z-index: 1;
        margin-right: 25px;
        @media (max-width: $w-md) {
            margin: 30px 50px 0;
            flex: 0 1 465px;
        }
        @media (max-width: $w-sm) {
            margin: 0;
            flex: 0 1 auto;
            margin-bottom: 24px;
        }
        & > span {
            display: block;
            margin-top: 8px;
            font-size: 18px;
        }
    }
    .hiw-v1-switcher {
        margin-right: 20px;
        @media (max-width: $w-sm) {
            margin-right: 0px;
        }
    }
    .hiw-v1-switch {
        display: flex;
        align-items: center;
        padding: 8px;
        margin: 0 -8px;
        cursor: pointer;
        @media (max-width: $w-sm) {
            margin: 0 6px;
            width: auto;
        }
        &:not(:last-child) {
            .sw-num:after {
                content: url("~@/assets/images/arrow-next.svg");
                position: absolute;
                top: 45px;
                left: -60px;
                transform: scale(0) rotate(90deg);
                opacity: 0;
                transition: opacity 150ms, transform 150ms;
                @media (max-width: $w-sm) {
                    top: 40px;
                    left: -40px;
                }
            }
            &.active .sw-num:after {
                transform: scale(1.2) rotate(90deg);
                opacity: 0.5;
                @media (max-width: $w-sm) {
                    transform: scale(0.7) rotate(90deg);
                }
            }
        }
        .sw-num {
            display: flex;
            flex: 0 0 auto;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: #fff;
            box-shadow: 0px 5px 25px rgba(203, 207, 216, 0.28);
            width: 52px;
            height: 52px;
            font-family: Roboto, sans-serif;
            font-weight: 500;
            font-size: 25px;
            color: #447eff;
            transition: color 150ms, background-color 150ms;
            position: relative;
            @media (max-width: $w-sm) {
                width: 35px;
                height: 35px;
                font-size: 18px;
            }
        }
        .sw-text {
            margin-left: 24px;
            font-weight: 500;
            font-size: 18px;
            line-height: 24px;
            color: #7f7f7f;
            transition: color 300ms;
            @media (max-width: $w-sm) {
                margin-left: 12px;
                font-size: 15px;
                line-height: 22px;
            }
        }
        &.active .sw-num {
            color: #fff;
            background-color: #447eff;
        }
        &.active,
        &:hover {
            .sw-text {
                color: #447eff;
            }
        }
    }
    .hiw-v1-desc-container {
        position: relative;
        display: flex;
        flex-flow: column;
        flex: 1 1 auto;
        margin-top: 0px;
        max-width: 900px;
        margin-left: -50px;
        min-height: 700px;
        @media (max-width: $w-sm) {
            flex: 1 1 auto;
        }
        @media (max-width: $w-md) {
            margin-right: -0%;
            margin-left: -4%;
            min-height: unset !important;
        }
        & > span {
            height: 100%;
        }
        .hiw-v1-fade {
            display: flex;
            flex-flow: column;
            position: absolute;
            top: 0;
            opacity: 0;
            transition: opacity 0ms;
            transition-delay: 0ms;
            &.active {
                opacity: 1;
                transition: opacity 150ms;
                transition-delay: 150ms;
                @media (max-width: $w-md) {
                    position: relative;
                }
            }
            .img-container .root {
                width: 100%;
                z-index: 1;
                position: relative;
            }
        }
        .img-container {
            position: relative;
            text-align: center;
            margin-bottom: -11.5%;
        }
        .img-container:after {
            content: "";
            position: absolute;
            top: 0;
            left: 50%;
            width: 80%;
            height: 70%;
            box-shadow: 0px 3px 89px rgba(162, 162, 162, 0.5);
            transform: translateX(-50%);
            border-radius: 4px;
        }

        ul {
            columns: 2;
            column-gap: 40px;
            text-align: left;
            margin: 70px 70px 0;
            z-index: 2;
            @media (max-width: $w-md) {
                margin: 70px 10px 0;
            }
            @media (max-width: $w-sm) {
                display: flex;
                flex-flow: column;
            }
            li {
                list-style-type: none;
                max-width: 300px;
                padding-left: 10px;
                margin: auto;
                position: relative;
                @media (max-width: $w-sm) {
                    margin: 0;
                }
                &:after {
                    display: inline-block;
                    width: 9px;
                    height: 2px;
                    background-color: #7130e5;
                    content: "";
                    position: absolute;
                    left: -19px;
                    top: 11px;
                }
                span {
                    font-size: 14px;
                    line-height: 19px;
                    text-align: left;
                    color: #7f7f7f;
                    @media (max-width: $w-sm) {
                        font-size: 13px;
                        line-height: 19px;
                        text-align: left;
                    }
                }
            }
        }
    }
}
</style>
