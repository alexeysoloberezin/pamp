<template>
    <div class="whiw">
        <div id="whiw" style="position: absolute; top: -60px" />
        <h2 class="h2 text-center px-6" v-text="'Как это работает?'" />
        <div class="whiw-container">
            <div
                class="whiw-double"
                v-for="(container, i) in containers"
                :key="i"
            >
                <div class="whiw-double-inner">
                    <div class="whiw-rows">
                        <div
                            class="whiw-row"
                            v-for="(item, ii) in container.items"
                            :key="ii"
                        >
                            <div class="whiw-icon-container">
                                <img :src="item.img" />
                                <span
                                    class="whiw-number"
                                    :class="{ active: item.num == 1 }"
                                    v-text="item.num"
                                />
                            </div>
                            <component
                                class="whiw-title"
                                :is="item.num == 1 ? 'a' : 'div'"
                                v-text="item.title"
                                :onclick="item.num == 1 ? $root.zondScr : ''"
                                :onauxclick="item.num == 1 ? $root.zondScr : ''"
                                :href="item.num == 1 ? $root.regLink : ''"
                            />
                        </div>
                    </div>
                    <div class="whiw-time">
                        <img
                            v-if="$vuetify.breakpoint.xsOnly"
                            class="mr-5"
                            src="@/assets/images/widgets/hiw/angle-big.svg"
                        />
                        <img
                            v-else
                            class="mr-7"
                            src="@/assets/images/widgets/hiw/angle.svg"
                        />
                        <div v-if="[0, 1].includes(i)">
                            <span
                                style="margin-left: -6px"
                                class="whiw-time-number"
                                v-text="i == 0 ? 10 : 15"
                            />
                            <img
                                class="ml-2"
                                src="@/assets/images/widgets/hiw/time.svg"
                            />
                            <div class="whiw-time-text" v-text="'минут'" />
                        </div>
                        <div v-else>
                            <span
                                class="whiw-time-text"
                                v-text="
                                    $vuetify.breakpoint.xsOnly
                                        ? 'Сразу'
                                        : 'Моментально'
                                "
                            />
                        </div>
                    </div>
                </div>
                <div
                    v-if="[0, 1].includes(i)"
                    style="border-top: 1px solid #CDD4F0"
                />
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class WidgetsHowItWorks extends Vue {
    containers = [
        {
            items: [
                {
                    title: "Зарегистрируйтесь",
                    num: 1,
                    img: require("@/assets/images/widgets/hiw/list.svg")
                },
                {
                    title: "Настройте и разместите виджет или ссылку на своём сайте, форуме или в социальной сети",
                    num: 2,
                    img: require("@/assets/images/widgets/hiw/watch.svg")
                }
            ],
            text: ""
        },

        {
            items: [
                {
                    title: "Посетители используют формы поиска, сравнивают и покупают",
                    num: 3,
                    img: require("@/assets/images/widgets/hiw/bars.svg")
                },
                {
                    title: "Оплатив, получают полис на e-mail",
                    num: 4,
                    img: require("@/assets/images/widgets/hiw/mail.svg")
                }
            ],
            text: ""
        },

        {
            items: [
                {
                    title: "Вы получаете комиссию с продаж на баланс",
                    num: 5,
                    img: require("@/assets/images/widgets/hiw/sack.svg")
                },
                {
                    title: "Отслеживаете статистику и выводите доход в личном кабинете",
                    num: 6,
                    img: require("@/assets/images/widgets/hiw/screen.svg")
                }
            ],
            text: ""
        }
    ];
}
</script>
<style lang="scss">
.whiw {
    position: relative;
    padding: 120px 0 40px;
    @media (max-width: $w-sm){
      padding: 40px 0 0;
    }
}
.whiw-container {
    max-width: 1159px;
    margin: 40px auto;
}
.whiw-double-inner {
    display: flex;
    max-width: 840px;
    margin: auto;
    padding: 0 20px;
}
.whiw-rows {
    flex: 1;
}
.whiw-row {
    display: flex;
    align-items: center;
    margin: 16px 0;
    @media (max-width: $w-xs) {
        flex-flow: column;
        text-align: start;
        align-items: flex-start;
    }
}
.whiw-icon-container {
    display: flex;
    align-items: center;
}
.whiw-number {
    margin-left: 20px;
    margin-right: 20px;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    box-shadow: 0px 5px 25px rgba(215, 218, 226, 0.8);
    font-weight: 500;
    font-size: 25px;
    line-height: 29px;
    color: #447eff;
    &.active {
        background: #447eff;
        color: #ffffff;
    }
}
a.whiw-title:not(#ovrd) {
    text-decoration-line: underline;
    color: #4e7eff !important;
    &:hover {
        color: #9bbbff !important;
    }
}
.whiw-title {
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    max-width: 420px;
    @media (max-width: $w-xs) {
        font-size: 16px;
        line-height: 18px;
        margin: 16px 0;
    }
}
.whiw-time {
    width: 200px;
    display: flex;
    align-items: center;
    @media (max-width: $w-xs) {
        width: 120px;
    }
}
.whiw-time-text {
    font-weight: 500;
}
.whiw-time-number,
.whiw-time-text {
    font-size: 24px;
    color: #0020a9;
    line-height: 0.7;
}
.whiw-time-number {
    font-style: italic;
    font-weight: bold;
    font-size: 36px;
}
</style>
