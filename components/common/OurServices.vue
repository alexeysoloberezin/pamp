<template>
    <div class="our-services">
        <div id="oos" style="position: absolute; top: -100px" />
        <div class="generic-container-1260">
            <h2
                class="our-services-title"
                v-text="
                    'Полезные функции, которые оценят как новички, так и профессионалы в ОСАГО'
                "
            />
            <v-divider class="my-10" />
            <div class="our-services-wrapper">
                <div
                    class="our-services-item"
                    v-for="(item, i) in items"
                    :key="i"
                >
                    <img
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
export default class OurServices extends Vue {
    items: ServiceItem[] = [
        {
            title: "Проверка и восстановление КБМ",
            icon: require("@/assets/images/osago/ourServices/kbm.svg"),
        },
        {
            title: "Доступ в Е-Гарант",
            icon: require("@/assets/images/osago/ourServices/egarant.svg"),
        },
        {
            title: "Проверка коэффициентов расчета",
            icon: require("@/assets/images/osago/ourServices/koef.svg"),
        },
        {
            title: "Поиск данных по гос. номеру",
            icon: require("@/assets/images/osago/ourServices/autocode.svg"),
        },
        {
            title: "Оформление договора купли-продажи",
            icon: require("@/assets/images/osago/ourServices/contract.svg"),
        },
        {
            title: "Оформление осаго на 3, 6, 9, 12 месяцев",
            icon: require("@/assets/images/osago/ourServices/osago.svg"),
        },
        {
            title: "Бонусы за продление",
            icon: require("@/assets/images/osago/ourServices/bonus.svg"),
        },
        {
            title: "Бонусы за переход из другой СК",
            icon: require("@/assets/images/osago/ourServices/bonus-sk.svg"),
        },
        {
            title: "Упрощенная пролонгация",
            icon: require("@/assets/images/osago/ourServices/prolong.svg"),
        },
        {
            title: "Напоминания о продлении",
            icon: require("@/assets/images/osago/ourServices/bell.svg"),
        },
        {
            title: "Развитие агентской и реферальной сети",
            icon: require("@/assets/images/osago/ourServices/network.svg"),
        },
        {
            title: "Онлайн поддержка 7 дней в неделю",
            icon: require("@/assets/images/osago/ourServices/support.svg"),
        },
    ];
}
type ServiceItem = {
    title: string;
    icon: string;
};
</script>

<style lang="scss">
.our-services {
    padding: 65px 0;
    background: url("@/assets/images/osago/ourServices/bg.png");
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
    }
    .our-services-item {
        background: #ffffff;
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        padding: 10px;
        transition: 0.3s;
        outline: 2px solid transparent;
        &:hover {
            outline: 2px solid #447eff;
        }
    }
}
</style>
