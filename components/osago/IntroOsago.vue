<template>
    <div style="background: #e9eeff">
        <ScrollAnchor id="ai" />
        <v-layout
            class="generic-container-1260 osago-intro-gen2"
            :column="br.mdAndDown"
        >
            <v-flex xs12 sm6 :class="{ 'px-4': br.mdAndDown }">
                <h1 v-html="block.title" class="intro-title" />
                <p v-html="block.description" class="mt-5 intro-subtitle" />
                <zond-btn v-text="'Зарегистрироваться'" />
            </v-flex>
            <v-flex xs12 sm6>
                <v-img
                    style="max-width: 100%"
                    :src="require('~/assets/images/osago/intro/intro-bg-2x.webp')"
                    alt="osago-intro"
                    type="image/webp"
                />
            </v-flex>
        </v-layout>
        <div style="background: #f9f9fc; padding-bottom: 20px">
            <div class="generic-container-1260">
                <div class="intro-statistics">
                    <div
                        v-for="(item, index) in statistics"
                        class="intro-statistic"
                        :key="index"
                    >
                        <p v-html="item.title" class="mb-0 statistic-heading" />
                        <p
                            v-html="item.description"
                            class="mb-0 statistic-subheading"
                        />
                    </div>
                </div>
                <div class="intro-skolkovo">
                    <v-img
                        class="skolkovo-logo"
                        max-width="47"
                        style="border-radius: 5px"
                        :src="skolkovo.logo"
                        alt="skolkovo-logo"
                    />
                    <div>
                        <p
                            class="mb-0 skolkovo-title"
                            v-html="skolkovo.title"
                        />
                        <p class="mb-0 skolkovo-ogrn" v-html="skolkovo.ogrn" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ScrollAnchor from "~/components/common/ScrollAnchor.vue";

@Component({
    components: { ScrollAnchor },
})
export default class IntroOsago extends Vue {
    get br() {
        return this.$vuetify.breakpoint;
    }

    block = {
        title: "Платформа для страховых агентов по ОСАГО",
        description:
            "Получайте до 35% комиссионного вознаграждения на оформлении полисов ОСАГО онлайн для любого водителя и выводите деньги в любое время",
    };
    statistics = [
        {
            title: "22 000 +",
            description: "пользователей Пампаду",
        },
        {
            title: "4 556 000 000 ₽",
            description: "сделали объем продаж",
        },
        {
            title: "556 000 000 ₽",
            description: "заработали на комиссии с ОСАГО",
        },
    ];
    skolkovo = {
        logo: require("@/assets/images/skolkovo-2x.png"),
        title: "Инновационный цифровой продукт, разработанный резидентом Сколково",
        ogrn: "№ ОРН 1124211",
    };
}
</script>

<style lang="scss">
.osago-intro-gen2 {
    display: flex;
    align-items: center;
    padding: 30px 0 68px;
    @media (max-width: $w-md) {
        padding-bottom: 140px;
    }
    .intro-title {
        font-weight: bold;
        font-family: Montserrat, sans-serif;
        font-size: 35px;
        margin-bottom: 36px;
        @media (min-width: $w-md) {
            line-height: 45px;
        }
        @media (max-width: $w-sm) {
            font-size: 23px;
            line-height: 30px;
        }
    }

    .intro-subtitle {
        font-size: 20px;
        line-height: 23px;
        margin-bottom: 44px;
        @media (max-width: $w-sm) {
            font-size: 16px;
        }
    }
}
</style>
