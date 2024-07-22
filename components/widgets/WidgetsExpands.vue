<template>
    <v-expansion-panels v-model="panels" class="wwu-panels" accordion>
        <v-expansion-panel v-for="(item, i) in items" :key="i">
            <v-expansion-panel-header
                disable-icon-rotate
                :expand-icon="svgPath"
                :class="color"
            >
                <div>
                    <div v-text="item.title" />
                    <v-expand-transition>
                        <div
                            v-if="i != panels"
                            class="wwu-panel-sub"
                            v-text="'Подробнее...'"
                        />
                    </v-expand-transition>
                </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                <div>
                    <div v-text="item.text" />
                    <v-icon
                        class="wwu-panel-close"
                        @click="panels = null"
                        v-text="mdiClose"
                        size="16"
                    />
                    <div
                        class="wwu-panel-sub"
                        @click="panels = null"
                        v-text="'Скрыть'"
                    />
                </div>
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>
</template>
<script lang="ts">
import { mdiClose } from "@mdi/js";
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class WidgetsExpands extends Vue {
    @Prop({ default: null }) items: { title: string; text: string };
    panels = null;
    mdiClose = mdiClose;
    @Prop({ default: "check" }) icon: "check" | "cancel";
    get color() {
        if (this.icon == "check") return "green-icon";
        else return "red-icon";
    }
    get svgPath() {
        if (this.icon == "check") return this.checkSvg;
        else return this.cancelSvg;
    }
    checkSvg =
        "M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z M16.9999 7.66656L8.99992 15.6666L5.33325 11.9999L6.27325 11.0599L8.99992 13.7799L16.0599 6.72656L16.9999 7.66656Z";
    cancelSvg =
        "M5.598 4.316l-.618-.618-1.235 1.236.618.618 1.235-1.236zM16.77 17.958l.617.618 1.236-1.235-.618-.618-1.235 1.235zM11 21.874c6.005 0 10.874-4.869 10.874-10.874h-1.748A9.126 9.126 0 0111 20.126v1.748zM21.874 11C21.874 4.995 17.005.126 11 .126v1.748A9.126 9.126 0 0120.126 11h1.748zM11 .126C4.995.126.126 4.995.126 11h1.748A9.126 9.126 0 0111 1.874V.126zM.126 11c0 6.005 4.869 10.874 10.874 10.874v-1.748A9.126 9.126 0 011.874 11H.126zm4.237-5.448L16.77 17.958l1.235-1.235L5.598 4.316 4.363 5.552z";
}
</script>
<style lang="scss">
.wwu-panel-sub {
    font-size: 12px;
    line-height: 20px;
    color: #4e7eff;
    cursor: pointer;
}
.wwu-panel-close:not(#ovrd) {
    position: absolute;
    top: 0;
    right: 0;
}
.wwu-panels {
    .v-expansion-panel {
        margin-bottom: 15px;
        border-radius: 4px;
        box-shadow: 0px 5px 25px rgba(203, 207, 216, 0.5) !important;
        transition: box-shadow 100ms;
        &:hover {
            box-shadow: 0px 5px 15px rgba(203, 207, 216, 0.88) !important;
        }
        &:before {
            box-shadow: none !important;
        }
        &:after {
            border-top: 0 !important;
        }
    }
    .v-expansion-panel-header {
        font-size: 16px;
        line-height: 20px;
        padding: 11px 24px;
        min-height: 80px;
        @media (max-width: $w-sm) {
            font-size: 14px;
            line-height: 18px;
        }
        &.red-icon {
            .v-icon {
                color: #f83737 !important;
            }
        }
        &.green-icon {
            .v-icon {
                color: #7ec275 !important;
            }
        }
    }
    .v-expansion-panel-header__icon {
        order: -1;
        margin-left: -8px !important;
        margin-right: 24px;
        .v-icon {
            // font-size: 34px;
            // color: #7ec275 !important;
            // width: 14px;
            .v-icon_svg {
                height: 34px;
                width: 34px;
            }
            @media all and (-ms-high-contrast: none),
                (-ms-high-contrast: active) {
                // ie10-11 fix
                width: 34px;
                margin: 0 -12px;
            }
        }
    }
    .v-expansion-panel-content__wrap {
        border-top: 2px solid #f6f6f8;
        padding: 20px 40px;
        text-align: left;
        position: relative;
    }
}
</style>