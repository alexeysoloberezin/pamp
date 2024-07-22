<template>
    <div class="offers-intro">
        <div id="oi" style="position: absolute; top: -100px" />
        <div class="generic-container-1260">
            <div class="intro-wrapper">
                <div>
                    <h1 class="intro-title" v-html="introTitle" />
                    <h2
                        class="mt-5 mb-10 intro-subtitle"
                        v-text="introSubtitle"
                        :style="type == 'hr' ? 'max-width: 510px;' : ''"
                    />
                    <zond-btn v-text="'Зарегистрироваться'" />
                </div>
                <div>
                    <v-img
                        style="max-width: 100%"
                        :src="introImage"
                        alt="Подбор персонала"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class Intro extends Vue {
    @Prop({ default: () => "fin" }) type: "fin" | "hr";
    introTitle = `Зарабатывайте на&nbsp;продаже финансовых офферах
    <span style="color: #8e68ff">от ведущих банков и МФО</span>`;
    introSubtitle = "";
    introImage = "";
    created() {
        this.introTitle = {
            fin: `Зарабатывайте на&nbsp;продаже финансовых продуктов <span style="color: #8e68ff">от&nbsp;ведущих банков и&nbsp;МФО</span>`,
            hr: `Зарабатывайте на&nbsp;привлечении сотрудников <span style="color: #8e68ff">для&nbsp;крупнейших работодателей</span>&nbsp;РФ`,
        }[this.type];
        this.introSubtitle = {
            fin: "Получите доступ к финансовой витрине и предлагайте своим клиентам релевантные предложения с агентской комиссией до 12 000 руб.",
            hr: "Получите доступ к десяткам горячих вакансий, за закрытие которых работодатели готовы платить до 12 000 руб.",
        }[this.type];
        this.introImage = require(`@/assets/images/offers/${this.type}-intro.png`);
    }
}
</script>

<style lang="scss">
.offers-intro {
    background: linear-gradient(
        268.37deg,
        #f3f3f8 6.73%,
        rgba(249, 249, 252, 0.4) 98.42%
    );
    padding: 40px 0;
    position: relative;
    @media (max-width: $w-sm) {
        padding: 20px 0;
    }

    .intro-wrapper {
        display: grid;
        grid-template-columns: 1fr minmax(400px, 590px);
        align-items: center;
        grid-gap: 40px;
        @media (max-width: $w-sm) {
            grid-template-columns: minmax(0, 400px);
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
