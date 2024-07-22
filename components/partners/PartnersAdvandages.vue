<template>
    <div class="p-adv">
        <div id="pwu" style="position: absolute; top: -130px;" />
        <div class="p-adv-lists">
            <div class="p-adv-list">
                <div class="p-adv-title">
                    Прозрачность и гибкость
                </div>
                <div class="p-adv-cards">
                    <div
                        v-for="(card, i) in advListLeft"
                        :key="i"
                        class="p-adv-card hover-outline"
                    >
                        <img class="p-adv-img" :src="card.img" />
                        <div class="p-adv-text" v-text="card.title" />
                    </div>
                </div>
            </div>
            <div class="p-adv-list">
                <div class="p-adv-title">
                    Простота и надежность
                </div>
                <div class="p-adv-cards">
                    <div
                        v-for="(card, i) in advListRight"
                        :key="i"
                        class="p-adv-card hover-outline"
                    >
                        <img class="p-adv-img" :src="card.img" />
                        <div class="p-adv-text" v-text="card.title" />
                    </div>
                </div>
            </div>
        </div>
        <div class="p-adv-blocks">
            <div class="p-adv-block pampadu-blue">
                <div v-text="'Потрачено более'" />
                <div class="p-adv-accent-text" v-text="'3500 часов'" />
                <div
                    v-html="
                        'только на настройку интеграций со&nbsp;страховыми компаниями'
                    "
                />
            </div>
            <div class="p-adv-block">
                <div>
                    Мы создали не просто виджет продажи, а продуманный сценарий
                    <span
                        style="color: #0020A9;"
                        v-html="'с&nbsp;максимальной конверсией'"
                    />
                    в покупку
                </div>
                <a href="/webtools/" class="btn text-center" style="width: 210px" v-text="'Подробнее'" />
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class PartnersAdvantages extends Vue {
    advListLeft = [
        {
            title: "Настройка цветовых схем и стилей",
            img: require("@/assets/images/partners/icons/paint.svg")
        },
        {
            title: "Передача конверсий в Google и Яндекс",
            img: require("@/assets/images/partners/icons/browser.svg")
        },
        {
            title: "CRM-система со всеми покупками и статистикой",
            img: require("@/assets/images/partners/icons/graph.svg")
        },
        {
            title: "Единый биллинг вознаграждения за каждую продажу",
            img: require("@/assets/images/partners/icons/money.svg")
        },
        {
            title: "Выплаты по договору с закрывающими документами",
            img: require("@/assets/images/partners/icons/sack.svg")
        }
    ];
    advListRight = [
        {
            title: "Готовое коробочное решение",
            img: require("@/assets/images/partners/icons/box.svg")
        },
        {
            title: "Отказоустойчивая архитектура на базе микросервисов",
            img: require("@/assets/images/partners/icons/pulse.svg")
        },
        {
            title: "Подключены к службам РСА, Автокод, ЕАИСТО ГИБДД и другим",
            img: require("@/assets/images/partners/icons/puzzle.svg")
        },
        {
            title: "Работает на любых устройствах",
            img: require("@/assets/images/partners/icons/digital.svg")
        },
        {
            title:
                "Для запуска разместите код виджета на сайте или WebView в приложении",
            img: require("@/assets/images/partners/icons/site.svg")
        }
    ];
}
</script>
<style lang="scss">
.p-adv {
    padding: 60px 0;
    background-color: #f9f9fc;
    display: flex;
    flex-flow: column;
    align-items: center;
    position: relative;
}
.p-adv-lists,
.p-adv-blocks {
    display: flex;
    max-width: 1043px;
    width: 100%;
    margin: 0 -20px;
    @media (max-width: $w-sm) {
        margin: 0 -8px;
    }
    @media (max-width: $w-xs) {
        flex-flow: column;
    }
}
.p-adv-list {
    margin: 0 20px;
    flex: 1;
    @media (max-width: $w-sm) {
        margin: 0 8px;
    }
}
.p-adv-block {
    margin: 0 20px;
    @media (max-width: $w-sm) {
        margin: 0 8px;
    }
    @media (max-width: $w-xs) {
        margin: 10px 8px;
    }
}
.p-adv-title {
    font-family: Montserrat;
    font-weight: bold;
    font-size: 25px;
    line-height: 1;
    text-align: center;
    margin: 0 8px 30px;
    @media (max-width: $w-sm) {
        height: 50px;
    }
    @media (max-width: $w-xs) {
        height: auto;
        margin-top: 28px;
    }
}
.p-adv-img {
    object-fit: contain;
    min-width: 42px;
    max-width: 42px;
    height: 35px;
}
.p-adv-card {
    background: #ffffff;
    box-shadow: 0px 5px 25px rgba(203, 207, 216, 0.5);
    display: flex;
    align-items: center;
    // width: 500px;
    flex: 1 0 200px;
    padding: 15px 25px;
    margin: 11px 0;
    @media (max-width: $w-sm) {
        padding: 15px 15px;
    }
}
.p-adv-text {
    margin-left: 30px;
    max-width: 276px;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #4578ff;
    @media (max-width: $w-sm) {
        font-size: 14px;
        line-height: 16px;
        margin-left: 15px;
        height: 48px;
        display: flex;
        align-items: center;
    }
}
.p-adv-blocks {
    margin-top: 30px;
    @media (max-width: $w-sm) {
        margin-top: 15px;
    }
}
.p-adv-accent-text {
    font-weight: 600;
    font-size: 40px;
    margin: 20px 0;
    @media (max-width: $w-sm) {
        font-size: 36px;
        margin: 16px 0;
    }
}
.p-adv-block {
    display: flex;
    flex-flow: column;
    justify-content: center;
    height: 220px;
    padding: 40px;
    // width: 500px;
    flex: 1 0 200px;
    box-shadow: 0px 5px 25px rgba(203, 207, 216, 0.28);
    border-radius: 2px;
    font-family: Montserrat;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    background-color: #fff;
    @media (max-width: $w-sm) {
        height: 200px;
        font-size: 16px;
        line-height: 20px;
        padding: 30px;
    }
    .btn {
        font-family: Roboto;
        margin-top: 20px;
    }
    &.pampadu-blue {
        font-weight: 600;
        color: #fff;
        background-color: #0020a9;
    }
}
</style>