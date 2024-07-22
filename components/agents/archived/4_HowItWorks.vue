<template>
    <div class="hiw-content">
        <div id="hiw" style="position: absolute;left:0;top:-60px;"></div>
        <div class="hiw-content__inner">
            <div class="hiw-switcher-container">
                <h2 class="h2">Как это работает?</h2>
                <span
                    class="hiw-subtitle"
                    v-text="'Оформите первый полис уже через 5 минут'"
                />
                <div class="hiw-switcher">
                    <div
                        @click="selected = 1"
                        class="hiw-switch"
                        :class="selected == 1 ? 'active' : ''"
                    >
                        <div class="sw-num" v-text="1" />
                        <span
                            class="sw-text"
                            v-text="'Заполните все данные по клиенту'"
                        />
                    </div>
                    <div
                        @click="selected = 2"
                        class="hiw-switch"
                        :class="selected == 2 ? 'active' : ''"
                    >
                        <div class="sw-num" v-text="2" />
                        <span
                            class="sw-text"
                            v-text="'Выберите страховую компанию из списка'"
                        />
                    </div>
                    <div
                        @click="selected = 3"
                        class="hiw-switch"
                        :class="selected == 3 ? 'active' : ''"
                    >
                        <div class="sw-num" v-text="3" />
                        <span
                            class="sw-text"
                            v-text="'Отправьте ссылку на оплату клиенту'"
                        />
                    </div>
                    <div
                        @click="selected = 4"
                        class="hiw-switch"
                        :class="selected == 4 ? 'active' : ''"
                    >
                        <div class="sw-num" v-text="4" />
                        <span
                            class="sw-text"
                            v-text="'Получите свое вознаграждение на баланс'"
                        />
                    </div>
                </div>
            </div>
            <div class="hiw-desc-container">
                <span class="hiw-fade" :class="selected == 1 ? 'active' : ''">
                    <div class="img-container">
                        <img
                            class="root"
                            src="~/assets/images/bl4/1.png"
                            alt="picture1"
                        />
                    </div>
                    <ul>
                        <li>
                            <span
                                v-text="
                                    'Автоматическое подтягивание данных по гос. номеру'
                                "
                            />
                        </li>
                        <li>
                            <span v-text="'Автоматический поиск техосмотра'" />
                        </li>
                        <li>
                            <span v-text="'Проверка КБМ по каждому водителю'" />
                        </li>
                        <li>
                            <span
                                v-text="
                                    'Умные подсказки, увеличивающие шанс оформления'
                                "
                            />
                        </li>
                        <li>
                            <span
                                v-text="'Самый обширный список марок и моделей'"
                            />
                        </li>
                    </ul>
                </span>
                <span class="hiw-fade" :class="selected == 2 ? 'active' : ''">
                    <div class="img-container">
                        <img
                            class="root"
                            src="~/assets/images/bl4/2.png"
                            alt="picture2"
                        />
                    </div>
                    <ul>
                        <li>
                            <span
                                v-text="
                                    'Сравнивайте цены и размер вашего вознаграждения'
                                "
                            />
                        </li>
                        <li><span v-text="'Узнайте причину отказа СК'" /></li>
                        <li>
                            <span
                                v-text="
                                    'Мы подскажем минимальную дату начала по каждой компании'
                                "
                            />
                        </li>
                        <li>
                            <span v-text="'Проверьте коэффициенты расчета'" />
                        </li>
                        <li>
                            <span
                                v-text="
                                    'Получите +5% вознаграждения за чужую пролонгацию'
                                "
                            />
                        </li>
                    </ul>
                </span>
                <span class="hiw-fade" :class="selected == 3 ? 'active' : ''">
                    <div class="img-container">
                        <img
                            class="root"
                            src="~/assets/images/bl4/3.png"
                            alt="picture3"
                        />
                    </div>
                    <ul>
                        <li>
                            <span
                                v-text="
                                    'Отправляйте ссылку на оплату в SMS или письме прямо из личного кабинета'
                                "
                            />
                        </li>
                        <li>
                            <span
                                v-text="'Оплата напрямую в страховую компанию'"
                            />
                        </li>
                        <li>
                            <span
                                v-text="
                                    'Полис отправится клиенту на почту и будет у вас в личном кабинете'
                                "
                            />
                        </li>
                    </ul>
                </span>
                <span class="hiw-fade" :class="selected == 4 ? 'active' : ''">
                    <div class="img-container">
                        <img
                            class="root"
                            src="~/assets/images/bl4/4.png"
                            alt="picture4"
                        />
                    </div>
                    <ul>
                        <li>
                            <span
                                v-text="
                                    'После оплаты полиса, вознаграждение будет начислено на ваш баланс'
                                "
                            />
                        </li>
                        <li>
                            <span
                                v-text="
                                    'Выводите деньги на любые реквизиты физ. лица, ИП/ООО или используйте для оплаты других сервисов'
                                "
                            />
                        </li>
                    </ul>
                </span>
            </div>
        </div>
        <div class="hiw-regnow">
            <img
                src="~/assets/images/bl4/ppd-happy.png"
                srcset="
                    @/assets/images/bl4/ppd-happy.png    1x,
                    @/assets/images/bl4/ppd-happy-2x.png 2x
                "
                alt="happy guy"
            />
            <div class="hiw-regnow__inner">
                <h2 class="h2">Зарегистрируйся сейчас</h2>
                <div class="subtitle">
                    и узнай размер вознаграждения по каждой страховой компании,
                    сегменту и страховому продукту
                </div>
                <zond-btn v-text="'Зарегистрироваться и узнать!'" />
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
@Component({ components: {} })
export default class HowItWorks extends Vue {
    selected = 1;
    @Prop({ default: "" }) query;
}
</script>
<style lang="scss">
.hiw-content {
    position: relative;
    overflow: hidden;
    padding-top: 150px;
    @media (max-width: $w-sm) {
        padding-top: 24px;
    }
    &:after {
        content: url("~@/assets/images/bl4/bg.svg");
        position: absolute;
        bottom: 60px;
        left: 50%;
        transform: translateX(-53%);
        z-index: 0;
    }
    .hiw-subtitle {
        @media (max-width: $w-sm) {
            width: 230px;
            margin: auto;
            font-size: 15px !important;
            line-height: 24px !important;
            text-align: center;
        }
    }
    .hiw-regnow {
        display: flex;
        max-width: 754px;
        margin: 0px auto 150px;
        position: relative;
        overflow: hidden;
        // display: none;
        z-index: 1;
        img {
            object-fit: contain;
        }
        @media (max-width: $w-sm) {
            flex-flow: column;
            margin: 0px auto 30px;
            img {
                width: 144px;
                margin: auto;
            }
        }
        .hiw-regnow__inner {
            padding-top: 8px;
            margin-left: 80px;
            @media (max-width: $w-sm) {
                margin: 0 16px;
                text-align: center;
                h2 {
                    max-width: 260px;
                    margin: auto;
                    line-height: 24px;
                }
            }
        }
        .subtitle {
            font-size: 16px;
            line-height: 29px;
            margin: 2px 0 16px;
            @media (max-width: $w-sm) {
                max-width: 280px;
                margin-left: auto;
                margin-right: auto;
                margin-top: 12px;
                font-size: 14px;
                line-height: 21px;
                text-align: center;
            }
        }
    }
    .hiw-content__inner {
        display: flex;
        justify-content: center;
        margin: 0 10px 0 40px;
        min-height: 646px;
        @media (max-width: $w-md) {
            min-height: 556px;
        }
        @media (max-width: $w-sm) {
            flex-flow: column;
            margin: 0px 25px 40px;
        }
    }
    .hiw-switcher-container {
        margin: 30px 10px 0 60px;
        flex: 0 1 465px;
        z-index: 1;
        @media (max-width: $w-md) {
            margin: 30px 50px 0;
            flex: 0 1 465px;
        }
        @media (max-width: $w-sm) {
            margin: 0;
            flex: 0 1 auto;
            margin-bottom: 24px;
        }
        & > span {
            display: block;
            margin-top: 8px;
            font-size: 18px;
        }
    }
    .hiw-switcher {
        margin-top: 40px;
        margin-right: 20px;
        @media (max-width: $w-sm) {
            margin-right: 0px;
        }
    }
    .hiw-switch {
        display: flex;
        align-items: center;
        padding: 8px;
        margin: 0 -8px;
        cursor: pointer;
        @media (max-width: $w-sm) {
            margin: 0 6px;
            width: auto;
        }
        &:not(:last-child) {
            .sw-num:after {
                content: url("~@/assets/images/arrow-next.svg");
                position: absolute;
                top: 45px;
                left: -60px;
                transform: scale(0) rotate(90deg);
                opacity: 0;
                transition: opacity 150ms, transform 150ms;
                @media (max-width: $w-sm) {
                    top: 40px;
                    left: -40px;
                }
            }
            &.active .sw-num:after {
                transform: scale(1.2) rotate(90deg);
                opacity: 0.5;
                @media (max-width: $w-sm) {
                    transform: scale(0.7) rotate(90deg);
                }
            }
        }
        .sw-num {
            display: flex;
            flex: 0 0 auto;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: #fff;
            box-shadow: 0px 5px 25px rgba(203, 207, 216, 0.28);
            width: 52px;
            height: 52px;
            font-family: Roboto, sans-serif;
            font-weight: 500;
            font-size: 25px;
            color: #447eff;
            transition: color 150ms, background-color 150ms;
            position: relative;
            @media (max-width: $w-sm) {
                width: 35px;
                height: 35px;
                font-size: 18px;
            }
        }
        .sw-text {
            margin-left: 24px;
            font-weight: 500;
            font-size: 18px;
            line-height: 24px;
            color: #7f7f7f;
            transition: color 300ms;
            @media (max-width: $w-sm) {
                margin-left: 12px;
                font-size: 15px;
                line-height: 22px;
            }
        }
        &.active .sw-num {
            color: #fff;
            background-color: #447eff;
        }
        &.active,
        &:hover {
            .sw-text {
                color: #447eff;
            }
        }
    }
    .hiw-desc-container {
        position: relative;
        display: flex;
        flex-flow: column;
        flex: 1 1 auto;
        margin-top: 0px;
        max-width: 900px;
        margin-right: -70px;
        margin-left: -50px;
        min-height: 700px;
        @media (max-width: $w-sm) {
            flex: 1 1 auto;
        }
        @media (max-width: $w-md) {
            margin-right: -0%;
            margin-left: -4%;
            min-height: unset !important;
        }
        & > span {
            height: 100%;
        }
        .hiw-fade {
            display: flex;
            flex-flow: column;
            position: absolute;
            top: 0;
            opacity: 0;
            transition: opacity 0ms;
            transition-delay: 0ms;
            &.active {
                opacity: 1;
                transition: opacity 150ms;
                transition-delay: 150ms;
                @media (max-width: $w-md) {
                    position: relative;
                }
            }
            .img-container .root {
                width: 100%;
                z-index: 1;
                position: relative;
            }
        }
        .img-container {
            position: relative;
            text-align: center;
            margin-bottom: -11.5%;
        }
        .img-container:after {
            content: "";
            position: absolute;
            top: 0;
            left: 50%;
            width: 80%;
            height: 70%;
            box-shadow: 0px 3px 89px rgba(162, 162, 162, 0.5);
            transform: translateX(-50%);
            border-radius: 4px;
        }

        ul {
            columns: 2;
            column-gap: 40px;
            text-align: left;
            margin: 70px 70px 0;
            z-index: 2;
            @media (max-width: $w-md) {
                margin: 70px 10px 0;
            }
            @media (max-width: $w-sm) {
                display: flex;
                flex-flow: column;
            }
            li {
                list-style-type: none;
                max-width: 300px;
                padding-left: 10px;
                margin: auto;
                position: relative;
                @media (max-width: $w-sm) {
                    margin: 0;
                }
                &:after {
                    display: inline-block;
                    width: 9px;
                    height: 2px;
                    background-color: #7130e5;
                    content: "";
                    position: absolute;
                    left: -19px;
                    top: 11px;
                }
                span {
                    font-size: 14px;
                    line-height: 19px;
                    text-align: left;
                    color: #7f7f7f;
                    @media (max-width: $w-sm) {
                        font-size: 13px;
                        line-height: 19px;
                        text-align: left;
                    }
                }
            }
        }
    }
}
</style>
