<template>
    <section class="our-products">
        <div class="webtools-container">
            <h2 class="h2 text-center our-products-title">
              Доступные инструменты для монетизации трафика
            </h2>
            <div class="our-products-wrapper">
                <div class="our-products-webtools">
                    <v-layout
                        column
                        align-center
                        justify-center
                        v-for="{ title, icon } in webtoolsItems"
                        :key="title"
                    >
                        <v-img
                            contain
                            :height="$vuetify.breakpoint.mdAndUp ? '60' : '40'"
                            :src="icon"
                            alt="webtool"
                        />
                        <div
                            class="mt-4 webtool-title"
                            style="font-weight: bold"
                            v-text="title"
                        />
                    </v-layout>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class WidgetsProducts extends Vue {

    webtoolsItems: WebtoolsItem[] = [
        { title: "Виджеты/Витрины", icon: require("@/assets/images/tools/widgetProducts.svg") },
        {
            title: "API сервисы",
            icon: require("@/assets/images/tools/apiProducts.svg"),
        },
         {title: "Реферальные ссылки",
            icon: require("@/assets/images/tools/linksProduct.svg"),
        },
        { title: "Постбеки", icon: require("@/assets/images/tools/postbackProduct.svg") },
        { title: "Реферальная программа", icon: require("@/assets/images/tools/refProgramProduct.svg") },
    ];
}

type WebtoolsItem = {
    title: string;
    icon: string;
};
</script>

<style lang="scss">
.our-products {
    padding: 22px 0;
    position: relative;
  @media (max-width: $w-sm) {
    padding: 15px 20px;
  }
  .webtools-container{
    background-color: $bg-color;
    border-radius: 9px;
    padding: 37px;
    @media (max-width: $w-sm) {
      padding: 12px 0;
    }
  }
    .webtools-container:before {
        position: absolute;
        content: url("@/assets/images/webtools/ourProducts/bg-left.svg");
        top: 20%;
        left: -10%;
      @media (max-width: $w-sm) {
        display: none;
      }
    }

    &-title {
        max-width: 720px;
        margin: 0 auto !important;
    }
    &-wrapper {
        margin-top: 60px;
      @media (max-width: $w-sm) {
        margin-top: 30px;
      }
    }
    &-item.v-card {
        padding: 26px 14px;
        background: #ffffff;
        box-shadow: 0 2px 14px rgba(114, 69, 255, 0.12) !important;
        border-radius: 5px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
        transition: 0.3s;
        &:hover {
            box-shadow: 0 2px 14px rgba(114, 69, 255, 0.25) !important;
        }
    }
    .item-title {
        font-family: Montserrat, sans-serif;
        font-size: 18px;
    }
    .item-title,
    .item-percent {
        color: #7245ff;
        font-weight: bold;
    }
    .item-description {
        font-weight: 500;
        font-size: 14px;
    }
    .item-percent {
        display: block;
        text-align: center;
        font-size: 22px;
    }
    .item-reward-description {
        font-size: 12px;
        font-weight: 300;
    }
    &-webtools {
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        justify-content: space-between;
        gap: 50px;
      >div{
        flex: 1 0 121px;
      }
        @media (max-width: $w-xs) {
            font-size: 13px;
          gap: 20px;
        }
        .webtool-title {
            font-size: 18px;
            font-family: Montserrat, sans-serif;
            @media (max-width: $w-sm) {
                font-size: 13px;
                max-width: 132px;
            }
        }
    }
}
</style>
