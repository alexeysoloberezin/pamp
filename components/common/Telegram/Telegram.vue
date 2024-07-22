<template>
    <div style="max-width: 1770px; margin: 0 auto" class="telegram-container" :style="styles">
        <div
            v-if="$vuetify.breakpoint.xsOnly"
            class="telegram-text"
            style="
                background: linear-gradient(0deg,rgb(182 206 249),rgb(201 221 255));
            "
        >
            <TelegramText />
        </div>
        <v-img
            :src="bg"
            :cover="$vuetify.breakpoint.xsOnly"
            :contain="!$vuetify.breakpoint.xsOnly"
            class="telegram-img"
            alt="telegram"
            position="bottom"
            style="position: relative"
            :style="$vuetify.breakpoint.xsOnly ? 'height: 166vw;' : ''"
        >
            <div
                v-if="!$vuetify.breakpoint.xsOnly"
                style="position: absolute"
                class="telegram-text"
            >
                <TelegramText />
            </div>
        </v-img>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import TelegramText from "~/components/common/Telegram/TelegramText";
@Component({
    components: { TelegramText },
})
export default class Telegram extends Vue {
  @Prop({type: String, default: () => ''}) styles;
    get bg() {
        return this.$vuetify.breakpoint.xs
            ? require("~/assets/images/common/telegram/bg-sm.webp")
            : require("~/assets/images/common/telegram/bg.webp");
    }
}
</script>

<style lang="scss">
.telegram-container {
    .telegram-text {
        top: 22.5%;
        left: 45%;
        height: 8.15%;
        width: auto;
        padding: 20px;
        @media (max-width: $w-sm) {
            top: 10px;
        }
        @media (max-width: $w-xs) {
            left: 0;
        }
    }
    .telegram-title {
        font-size: 30px;
        font-family: Montserrat, sans-serif;
        @media (max-width: $w-md) {
            font-size: 24px;
        }
        @media (max-width: $w-sm) {
            font-size: 16px;
            text-align: left !important;
        }
        @media (max-width: $w-xs) {
            font-size: 20px;
            text-align: left !important;
        }
    }
}
</style>
