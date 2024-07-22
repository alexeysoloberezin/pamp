<template>
    <div class="osago-our-services">
        <div id="oos" style="position: absolute; top: -100px" />
        <div class="generic-container-1260">
            <h2
                class="h2 text-center mx-auto mb-10"
                style="max-width: 678px"
                v-text="'Возможности агентского кабинета для агента ОСАГО'"
            />
            <v-layout wrap class="generic-cards mb-10">
                <v-flex
                    xs12
                    sm12
                    md6
                    lg6
                    xl6
                    v-for="(card, i) in cards"
                    :key="i"
                    class="generic-card-wrapper"
                >
                    <div class="osago-our-services-card">
                        <v-img
                            class="osago-our-services-card-icon"
                            :src="card.icon"
                        />
                        <div
                            class="osago-our-services-card-title"
                            v-text="card.title"
                        />
                        <div
                            class="osago-our-services-card-text"
                            v-html="card.text"
                        />
                    </div>
                </v-flex>
            </v-layout>
            <h3
                class="h3 text-center mb-6"
                :style="{
                    lineHeight: $vuetify.breakpoint.mdAndDown ? '23px' : '',
                    fontSize: $vuetify.breakpoint.mdAndDown ? '19px' : '',
                }"
                v-text="'И множество других полезных инструментов:'"
            />
            <div class="our-services-wrapper">
                <div
                    class="our-services-item"
                    v-for="(item, i) in items"
                    :key="i"
                >
                    <v-img
                        contain
                        style="max-width: 100%"
                        :src="item.icon"
                        alt="our-service"
                    />
                    <div v-text="item.title" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class OurServicesOsago extends Vue {
    cards = [
        {
            icon: require("@/assets/images/osago/ourServices/new/search.svg"),
            title: "Подбор страховой компании",
            text: "Получите стоимость и одобрения сразу по всем 17 страховым компаниям, заполнив данные для оформления ОСАГО всего один раз. Также вы сразу увидите своё вознаграждение по каждой страховой. Выберите наиболее подходящую вам страховую и перейдите на оплату",
        },
        {
            icon: require("@/assets/images/osago/ourServices/new/time.svg"),
            title: "Упрощенная пролонгация",
            text: "Все заведённые клиенты и расчёты сохраняются в личном кабинете, включая все необходимые данные для расчёта, а также номера телефонов. На следующий год вам всего лишь нужно заранее позвонить клиенту и предложить оформить ему страховой полис ОСАГО",
        },
        {
            icon: require("@/assets/images/osago/ourServices/new/insurance.svg"),
            title: "Сохранение КБМ со старых ВУ",
            text: "Если в течение года было заменено ВУ, то чтобы получить точный расчёт персональной скидки страхователя, может потребоваться указание старого водительского удостоверения. Просто укажите данные старых прав, система сама сделает запрос в базу РСА и привяжет скидку (КБМ) к новым правам",
        },
        {
            icon: require("@/assets/images/osago/ourServices/new/agent.svg"),
            title: "Подключение субагентов",
            text: "Увеличивайте объём продаж, привлекая субагентов и создавая свою агентскую сеть",
        },
    ];
    items: ServiceItem[] = [
        {
            title: "Проверка и восстановление КБМ",
            icon: require("@/assets/images/osago/ourServices/kbm.svg"),
        },
        {
            title: "Оформление договора купли-продажи",
            icon: require("@/assets/images/osago/ourServices/contract.svg"),
        },
        {
            title: "Напоминания о продлении",
            icon: require("@/assets/images/osago/ourServices/bell.svg"),
        },
        {
            title: "Проверка коэффициентов расчета",
            icon: require("@/assets/images/osago/ourServices/koef.svg"),
        },
        {
            title: "Оформление осаго на 3, 6, 9, 12 месяцев",
            icon: require("@/assets/images/osago/ourServices/osago.svg"),
        },
        {
            title: "Развитие агентской и реферальной сети",
            icon: require("@/assets/images/osago/ourServices/network.svg"),
        },
        {
            title: "Поиск данных по гос. номеру",
            icon: require("@/assets/images/osago/ourServices/autocode.svg"),
        },
        {
            title: "Бонусы за продление",
            icon: require("@/assets/images/osago/ourServices/bonus.svg"),
        },
        {
            title: "Онлайн поддержка 7 дней в неделю",
            icon: require("@/assets/images/osago/ourServices/support.svg"),
        },
        {
            title: "Бонусы за переход из другой СК",
            icon: require("@/assets/images/osago/ourServices/bonus-sk.svg"),
        },
    ];
}
type ServiceItem = {
    title: string;
    icon: string;
};
</script>

<style lang="scss">
.osago-our-services {
    padding: 65px 0;
    background-size: cover;
    background-position: right;
    background-position-y: 0%;
    position: relative;
    background-repeat: no-repeat;
    @media (max-width: $w-sm) {
        padding: 20px 0;
        background-position-x: 80%;
    }
    .our-services-title {
        font-size: 35px;
        font-family: Montserrat, sans-serif;
        font-weight: bold;
        text-align: left;
        max-width: 900px;
        position: relative;
        &:after {
            position: absolute;
            content: url("@/assets/images/osago/ourServices/bg-top.svg");
            right: -120px;
            top: 40%;
        }
        @media (max-width: $w-sm) {
            font-size: 19px;
        }
    }
    .our-services-wrapper {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px;
        justify-content: center;
        position: relative;
        &:after {
            position: absolute;
            content: url("@/assets/images/osago/ourServices/bg-bottom.svg");
            right: -100px;
            bottom: -50px;
        }
        @media (max-width: $w-sm) {
            grid-template-columns: repeat(2, minmax(0, 350px));
            grid-gap: 10px;
        }
        @media (max-width: $w-xs) {
            grid-template-columns: 1fr;
        }

        @media (min-width: $w-sm + 1px) {
            &:before {
                content: "";
                order: 1;
            }
        }
    }
    .our-services-item {
        background: #ffffff;
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        padding: 10px;
        transition: 0.3s;
        outline: 2px solid transparent;

        box-shadow: 0px 5px 25px rgba(203, 207, 216, 0.28);

        &:hover {
            outline: 2px solid #447eff;
        }
        @media (min-width: $w-sm + 1px) {
            &:nth-child(10) {
                order: 2;
            }
        }
    }
}
.osago-our-services-card {
    background: #f2f5ff;
    border-radius: 9px;
    padding: 42px 90px 42px 42px;
    position: relative;
    height: 100%;
    &:after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        width: 90px;
        height: 90px;

        background: #ffffff;
        border-radius: 0px 9px 0px 68px;
        @media (max-width: $w-md) {
            width: 60px;
            height: 60px;
        }
    }
    &-icon {
        width: 48px;
        max-height: 48px;
        @media (max-width: $w-md) {
            width: 32px;
            max-height: 32px;
        }
    }
    @media (max-width: $w-md) {
        padding: 25px 30px 25px 25px;
    }
}
.osago-our-services-card-icon {
    position: absolute;
    top: 18px;
    right: 10px;
    z-index: 1;
    @media (max-width: $w-md) {
        top: 5px;
        right: 5px;
    }
}
.osago-our-services-card-title {
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 18px;
    line-height: 1.2;
    color: #4578ff;
    margin-bottom: 20px;
    @media (max-width: $w-sm) {
        font-size: 16px;
        line-height: 20px;
    }
}
.osago-our-services-card-text {
    font-size: 16px;
    line-height: 23px;
    @media (max-width: $w-sm) {
        font-size: 14px;
        line-height: 18px;
    }
}
</style>
