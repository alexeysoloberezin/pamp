<template>
    <div class="generic-container-1260">
        <h2
            class="h2 text-center"
            :class="[$vuetify.breakpoint.mdAndUp ? 'mt-10' : 'mt-5']"
            style="max-width: 800px; margin: 0 auto"
        >
            Вам будут доступны все инструменты для комфортной и успешной работы
        </h2>
        <div class="common-available-webtools">
            <div
                v-for="{ icon, title } in genericItems"
                :key="title"
                style="display: flex; align-items: center"
                class="webtools-item"
            >
                <img :src="icon" alt="webtools" class="mr-2" />
                <div v-html="title" class="webtool-title" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { WebtoolItem } from "~/model/Webtools";

@Component({})
export default class AvailableWebtools extends Vue {
    @Prop({ default: "" }) product: "" | "kasko";

    genericItems: WebtoolItem[] = [
        {
            title: "Выводите деньги в любое время без ограничений",
            icon: require("@/assets/images/common/availableWebtools/card.svg"),
        },
        {
            title: "Отправляйте SMS и письма клиенту из личного кабинета",
            icon: require("@/assets/images/common/availableWebtools/mail.svg"),
        },
        {
            title: "Работайте с мобильных устройств ",
            icon: require("@/assets/images/common/availableWebtools/mobile.svg"),
        },
        {
            title: "Используйте виджеты продаж и&nbsp;баннеры для сайта",
            icon: require("@/assets/images/common/availableWebtools/banner.svg"),
        },
        {
            title: "Анализируйте статистику в&nbsp;личном&nbsp;кабинете",
            icon: require("@/assets/images/common/availableWebtools/stats.svg"),
        },
    ];
    created() {
      let secondaryProduct = "КАСКО"
      if (this.product == "kasko") secondaryProduct = "ипотеку"
      let item = {
            title: `Оформляйте другие виды страховок: ОСАГО, ${secondaryProduct} и другие`,
            icon: require("@/assets/images/common/availableWebtools/insurance.svg"),
        };
      this.genericItems.push(item)
    }
}
</script>

<style lang="scss">
.common-available-webtools {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
    justify-content: center;
    grid-gap: 25px;
    margin-top: 50px;
    position: relative;
    @media (max-width: $w-sm) {
        grid-gap: 10px;
    }
    &:before {
        position: absolute;
        content: url("@/assets/images/common/availableWebtools/bg-left.svg");
        left: -10%;
        top: -10%;
        @media (max-width: $w-sm) {
            display: none;
        }
    }
    &:after {
        position: absolute;
        content: url("@/assets/images/common/availableWebtools/bg-right.svg");
        right: -10%;
        top: -14%;
        @media (max-width: $w-sm) {
            display: none;
        }
    }
    .webtools-item {
        box-shadow: 0px 5px 25px rgba(203, 207, 216, 0.28);
        border-radius: 7px;
        padding: 20px;
        transition: 0.3s;
        .webtool-title {
            @media (max-width: $w-sm) {
                font-size: 14px;
            }
        }
        &:hover {
            box-shadow: 0px 2px 14px rgba(114, 69, 255, 0.25) !important;
        }
    }
}
</style>
