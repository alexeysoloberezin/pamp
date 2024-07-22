<template>
    <div class="agents-intro">
        <ScrollAnchor id="ai" />
        <div class="intro-bg">
            <div class="agents-container">
                <div class="intro-content">
                    <div class="intro-companies">
                        <div
                            v-for="(item, index) in leftCompanies"
                            class="intro-company"
                            :key="index"
                        >
                            <v-layout column>
                                <p
                                    v-text="'начислено'"
                                    class="mb-0 company-heading"
                                />
                                <p
                                    v-text="
                                        `+ ${item.comission.toLocaleString()} руб.`
                                    "
                                    class="mb-0 company-subheading"
                                />
                            </v-layout>
                            <v-img
                                :max-width="32"
                                :src="item.logo"
                                alt="company-logo"
                                class="company-logo"
                            />
                        </div>
                    </div>
                    <div class="intro-text">
                        <h1 v-html="block.title" class="intro-title" />
                        <h3
                            v-html="block.description"
                            class="mt-5 intro-subheading"
                        />
                        <div
                            :style="{
                                textAlign: $vuetify.breakpoint.xs
                                    ? 'left'
                                    : 'center',
                            }"
                        >
                            <zond-btn
                                v-text="'Зарегистрироваться'"
                                class="inverted mt-5"
                                style="color: black !important"
                            />
                        </div>
                    </div>
                    <div
                        class="intro-companies"
                        :class="{ 'mt-5': $vuetify.breakpoint.mdAndDown }"
                    >
                        <div
                            v-for="(item, index) in rightCompanies"
                            class="intro-company"
                            :key="index"
                        >
                            <v-layout column>
                                <p
                                    v-text="'начислено'"
                                    class="mb-0 company-heading"
                                />
                                <p
                                    v-text="
                                        `+ ${item.comission.toLocaleString()} руб.`
                                    "
                                    class="mb-0 company-subheading"
                                />
                            </v-layout>
                            <v-img
                                :max-width="32"
                                :src="item.logo"
                                alt="company-logo"
                                class="company-logo"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style="background: #f9f9fc; padding-bottom: 20px">
            <div class="agents-container">
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
                        :max-width="47"
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
export default class Intro extends Vue {
    block = {
        title: "Платформа для агентов, бизнеса и вебмастеров по онлайн заработку на продаже страховых и финансовых продуктов",
        description:
            "Помогайте клиентам подбирать и оформлять страховые, банковские продукты, зарабатывая с каждой продажи независимо от вашего опыта. Уже через 5 минут после регистрации.",
    };
    companies = [
        {
            logo: require("~/assets/images/agents/intro/absolut.png"),
            comission: 3_000,
        },
        {
            logo: require("~/assets/images/agents/intro/ingo.png"),
            comission: 26_300,
        },
        {
            logo: require("~/assets/images/agents/intro/zetta.png"),
            comission: 70_000,
        },
        {
            logo: require("~/assets/images/agents/intro/alfa.png"),
            comission: 9_800,
        },
        {
            logo: require("~/assets/images/agents/intro/tinkoff.png"),
            comission: 7_500,
        },
        {
            logo: require("~/assets/images/agents/intro/sber.png"),
            comission: 14_000,
        },
        {
            logo: require("~/assets/images/agents/intro/vtb.png"),
            comission: 21_000,
        },
        {
            logo: require("~/assets/images/agents/intro/gazprom.png"),
            comission: 2_500,
        },
    ];
    statistics = [
        {
            title: "25 000 +",
            description: "пользователей Пампаду",
        },
        {
            title: "7 317 000 000",
            description: "продаж через платформу",
        },
        {
            title: "750 000 000",
            description: "рублей заработали",
        },
    ];
    skolkovo = {
        logo: require("@/assets/images/skolkovo-2x.png"),
        title: "Инновационный цифровой продукт, разработанный резидентом Сколково",
        ogrn: "№ ОРН 1124211",
    };

    get leftCompanies() {
        return this.companies.slice(0, 4);
    }

    get rightCompanies() {
        return this.companies.slice(4, this.companies.length);
    }
}
</script>

<style lang="scss">
.agents-intro {
    position: relative;

    .intro-bg {
        background-image: url("@/assets/images/agents/intro/bg.webp");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-color: #8a41eb;
        position: relative;
        min-height: 518px;
        padding: 50px 0;

        &:after {
            position: absolute;
            content: url("@/assets/images/agents/intro/decor-left.svg");
            left: 10%;
            bottom: 12%;
            display: none;
            @media (max-width: $w-sm) {
                display: block;
            }
        }

        &:before {
            position: absolute;
            content: url("@/assets/images/agents/intro/decor.svg");
            right: 0;
            top: 22%;
            display: none;
            @media (max-width: $w-sm) {
                display: block;
            }
        }

        @media (max-width: $w-md) {
            padding: 30px 0 125px;
            min-height: unset;
        }
    }

    .intro-content {
        display: flex;
        justify-content: center;
        @media (max-width: $w-md) {
            flex-direction: column;
            align-items: center;
        }
    }

    .intro-text {
        text-align: center;
        flex: 0 1 712px;
        margin: 0 20px;
        @media (max-width: $w-md) {
            flex: 0 1 auto;
            margin: unset;
        }
    }

    .intro-title {
        font-family: Montserrat, sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 35px;
        line-height: 45px;
        color: #ffffff;
        @media (max-width: $w-md) {
            margin: 20px auto 0;
            font-size: 22px;
            line-height: 30px;
            text-align: center;
        }
        @media (max-width: $w-xs) {
            text-align: left;
        }
    }

    .intro-subheading {
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 27px;
        color: #ffffff;
        @media (max-width: $w-md) {
            margin: 0 auto;
            font-size: 15px;
            line-height: 20px;
            text-align: center;
        }
        @media (max-width: $w-xs) {
            text-align: left;
        }
    }

    .intro-companies {
        flex: 0 1 178px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        @media (max-width: $w-md) {
            flex: 0 1 auto;
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
        }
    }

    .intro-company {
        display: flex;
        align-items: center;
        padding: 10px 12px 10px 22px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 3px;
        @media (max-width: $w-md) {
            flex-basis: calc(50% - 3px);
            margin-bottom: 10px !important;
            padding: 10px 6px 10px 11px;
        }

        &:not(:last-child) {
            margin-bottom: 50px;
        }
    }

    .company-heading {
        font-size: 12px;
        line-height: 14px;
        color: #ffffff;
        opacity: 0.5;
    }

    .company-subheading {
        font-family: Montserrat, sans-serif;
        font-weight: bold;
        font-size: 15px;
        line-height: 18px;
        color: #ffffff;
        @media (max-width: $w-md) {
            font-size: 11px;
            line-height: 13px;
        }
    }

    .company-logo {
        filter: drop-shadow(0px 2px 14px rgba(217, 217, 217, 0.5));
    }
}
.intro-statistics {
    display: flex;
    justify-content: space-between;
    max-width: 1162px;
    padding: 20px 60px;
    transform: translateY(-60px);
    background: #f9f9fc;
    box-shadow: 0 5px 31px rgba(114, 78, 251, 0.18);
    border-radius: 64px;
    @media (max-width: $w-md) {
        margin: -50px auto 0;
        border-radius: 25px;
        flex-direction: column;
        padding: 18px 15px;
    }
}

.intro-statistic {
    text-align: center;
    font-family: Montserrat, sans-serif;
    color: #000000;
    @media (max-width: $w-md) {
        padding: 12px 0;
    }

    &:not(:last-child) {
        @media (max-width: $w-md) {
            border-bottom: 1px dashed rgba(0, 0, 0, 0.2);
        }
    }
}

.statistic-heading {
    font-weight: bold;
    font-size: 33px;
    line-height: 40px;
    @media (max-width: $w-md) {
        font-size: 28px;
        line-height: 34px;
    }
}

.statistic-subheading {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    opacity: 0.3;
    @media (max-width: $w-md) {
        font-size: 15px;
        line-height: 28px;
    }
}

.intro-skolkovo {
    display: flex;
    align-items: center;
    padding: 0 70px;
    margin-top: -20px;
    @media (max-width: $w-md) {
        padding: 0;
        margin: -50px auto 0;
    }
}

.skolkovo-logo {
    margin-right: 55px;
    @media (max-width: $w-md) {
        margin-right: 15px;
    }
}

.skolkovo-title {
    font-family: Montserrat, sans-serif;
    font-weight: normal;
    font-size: 17px;
    line-height: 21px;
    @media (max-width: $w-md) {
        font-size: 12px;
        line-height: 15px;
    }
}

.skolkovo-ogrn {
    font-weight: normal;
    font-size: 12px;
    line-height: 28px;
    margin-left: auto;
}
</style>
