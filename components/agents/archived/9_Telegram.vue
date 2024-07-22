<template>
    <div class="tg-block">
        <img
            alt="telegram"
            :class="$vuetify.breakpoint.mdAndUp ? 'mr-4' : ''"
            src="~/assets/images/bl9/img.png"
            srcset="
                @/assets/images/bl9/img.png    1x,
                @/assets/images/bl9/img-2x.png 2x
            "
        />
        <div
            class="tg-content"
            :class="$vuetify.breakpoint.mdAndUp ? 'ml-4' : 'text-xs-center'"
        >
            <div
                class="tg-h"
                :class="$vuetify.breakpoint.mdAndUp ? 'mb-3' : ''"
            >
                <span v-text="'Зарегистрируйтесь и получите '" />
                <b v-text="'доступ к закрытому Telegram каналу'" />
                <span v-text="', на который уже '" />
                <b v-text="'подписано больше 3000 '" />
                <span v-text="'активных страховых агентов и брокеров'" />
            </div>
            <zond-btn
                class="btn mt-4 px-5"
                :class="$vuetify.breakpoint.mdAndUp ? 'mt-4' : 'mt-2'"
                v-text="'Присоединяюсь'"
            />
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
@Component({ components: {} })
export default class Telegram extends Vue {}
</script>
<style lang="scss">
.tg-block {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
    @media (max-width: $w-md) {
        margin: 0 60px;
    }
    @media (max-width: $w-sm) {
        margin: 0 20px;
        flex-flow: column-reverse;
        img {
            object-fit: contain;
            max-width: 340px;
            width: 100%;
            margin: 40px 15px;
        }
    }
}
.tg-h {
    max-width: 489px;
    font-family: Montserrat, sans-serif;
    // font-weight: bold;
    font-size: 30px;
    line-height: 40px;
    text-align: left;
    color: #000;
    @media (max-width: $w-sm) {
        font-size: 16px;
        line-height: 28px;
        text-align: center;
    }
}
.tg-content {
    @media (max-width: $w-sm) {
        display: flex;
        flex-flow: column;
        align-items: center;
    }
}
</style>
