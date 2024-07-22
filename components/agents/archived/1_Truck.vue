<template>
    <div>
        <div class="truck-bg">
            <div class="truck-content">
                <h1 class="h4 truck-headline">
                    Оформить Е-ОСАГО на грузовики теперь просто!
                </h1>
                <span
                    class="truck-subheadline"
                    v-text="
                        'За 15 минут без е-гарантов, регистраций в страховой и дополнительных затрат.'
                    "
                />
                <div class="img-block">
                    <img
                        class="mr-3"
                        style="width: 43px; height: 43px; object-fit: contain;"
                        src="~/assets/images/bl1/diamond.svg"
                        alt="diamond"
                    />
                    <h5 class="h5" style="max-width: 500px;">
                        Эксклюзивно за счет умного скоринга и договоренностей со
                        страховыми компаниями
                    </h5>
                </div>
                <div class="first-login">
                    <zond-btn v-text="'Зарегистрироваться'" />
                    <a
                        class="inverted"
                        :href="`https://agents.pampadu.ru/#/auth${$root.query}`"
                        style="margin: auto 15px;padding:10px 15px;"
                        v-text="'Войти'"
                    />
                </div>
            </div>
        </div>
        <div class="truck-advantages">
            <div class="truck-adv-inner">
                <div class="truck-card">
                    <div class="truck-card-inner">
                        <img
                            v-if="$vuetify.breakpoint.mdAndUp"
                            class="truck-card-img"
                            src="~/assets/images/bl1/truck-marker.svg"
                            alt="truck"
                        />
                        <div class="truck-card-subblock">
                            <img
                                v-if="$vuetify.breakpoint.smAndDown"
                                class="truck-card-img"
                                src="~/assets/images/bl1/truck-marker.svg"
                                alt="truck"
                            />
                            <div
                                class="truck-card-title"
                                v-text="'Для грузовиков из любого региона'"
                            />
                            <div
                                v-if="$vuetify.breakpoint.mdAndUp"
                                class="truck-card-text"
                                v-text="
                                    'Мы проверяем клиента по 150+ критериям, поэтому у нас нет запрета на регионы - открыты все'
                                "
                            />
                        </div>
                        <div
                            v-if="$vuetify.breakpoint.smAndDown"
                            class="truck-card-text"
                            v-text="
                                'Мы проверяем клиента по 150+ критериям, поэтому у нас нет запрета на регионы - открыты все'
                            "
                        />
                    </div>
                </div>
                <div class="truck-card">
                    <div class="truck-card-inner">
                        <img
                            v-if="$vuetify.breakpoint.mdAndUp"
                            class="truck-card-img"
                            src="~/assets/images/bl1/percent-up.svg"
                            alt="truck"
                        />
                        <div class="truck-card-subblock">
                            <img
                                v-if="$vuetify.breakpoint.smAndDown"
                                class="truck-card-img"
                                src="~/assets/images/bl1/percent-up.svg"
                                alt="truck"
                            />
                            <div
                                class="truck-card-title"
                                v-text="'Высокий % одобрения'"
                            />
                            <div
                                v-if="$vuetify.breakpoint.mdAndUp"
                                class="truck-card-text"
                                v-text="
                                    'Свыше 80% расчетов получают одобрение. Вы не будете терять клиентов.'
                                "
                            />
                        </div>
                        <div
                            v-if="$vuetify.breakpoint.smAndDown"
                            class="truck-card-text"
                            v-text="
                                'Свыше 80% расчетов получают одобрение. Вы не будете терять клиентов.'
                            "
                        />
                    </div>
                </div>
                <div class="truck-card">
                    <div class="truck-card-inner">
                        <img
                            v-if="$vuetify.breakpoint.mdAndUp"
                            class="truck-card-img"
                            src="~/assets/images/bl1/foliant.svg"
                            alt="foliant"
                        />
                        <div class="truck-card-subblock">
                            <img
                                v-if="$vuetify.breakpoint.smAndDown"
                                class="truck-card-img"
                                src="~/assets/images/bl1/foliant.svg"
                                alt="truck"
                            />
                            <div
                                class="truck-card-title"
                                v-text="'Официальный полис'"
                            />
                            <div
                                v-if="$vuetify.breakpoint.mdAndUp"
                                class="truck-card-text"
                                v-text="
                                    'Оплата напрямую в страховую компанию. Получение полиса на e-mail и регистрация в РСА.'
                                "
                            />
                        </div>
                        <div
                            v-if="$vuetify.breakpoint.smAndDown"
                            class="truck-card-text"
                            v-text="
                                'Оплата напрямую в страховую компанию. Получение полиса на e-mail и регистрация в РСА.'
                            "
                        />
                    </div>
                </div>
                <div class="truck-card">
                    <div class="truck-card-inner">
                        <img
                            v-if="$vuetify.breakpoint.mdAndUp"
                            class="truck-card-img"
                            src="~/assets/images/bl1/umbrella.svg"
                            alt="truck"
                        />
                        <div class="truck-card-subblock">
                            <img
                                v-if="$vuetify.breakpoint.smAndDown"
                                class="truck-card-img"
                                src="~/assets/images/bl1/umbrella.svg"
                                alt="truck"
                            />
                            <div
                                class="truck-card-title"
                                v-text="'Бесплатно и быстро '"
                            />
                            <div
                                v-if="$vuetify.breakpoint.mdAndUp"
                                class="truck-card-text"
                                v-html="
                                    'Никаких дополнительных платежей. Оформление у нас в&nbsp;личном кабинете за 15 минут без Е-Гарантов и “танцев с&nbsp;бубнами”.'
                                "
                            />
                        </div>
                        <div
                            v-if="$vuetify.breakpoint.smAndDown"
                            class="truck-card-text"
                            v-html="
                                'Никаких дополнительных платежей. Оформление у нас в&nbsp;личном кабинете за 15 минут без Е-Гарантов и “танцев с&nbsp;бубнами”.'
                            "
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class Truck extends Vue {}
</script>
<style lang="scss">
.truck-content {
    position: relative;
    z-index: 1;
    padding: 85px 0;
    margin-left: 100px;
    @media (max-width: $w-md) {
        padding: 85px 0 50px;
    }

    width: 40%;
    @media (max-width: $w-sm) {
        padding: 28px 0 20px;
        margin-left: 20px;
        margin-right: 20px;
        width: auto;
    }
}
.truck-headline {
    font-family: Roboto !important;
    font-weight: bold !important;
    font-size: 35px  !important;
    line-height: 35px  !important;
    margin-bottom: 20px  !important;
}
.truck-subheadline {
    font-size: 20px;
    line-height: 20px;
}
.truck-bg {
    position: relative;
    min-height: 466px;
    background-image: url("~@/assets/images/bl1/truck-bg2x.png");
    background-position: right top;
    background-repeat: no-repeat;
    background-size: contain;

    max-width: 1440px;
    margin: auto;
    &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        z-index: 0;
    }
    @media (min-width: $w-lg) {
        background-position: right 30%;
    }
    @media (max-width: $w-md) {
        min-height: 350px;
    }
    @media (max-width: $w-sm) {
        &:after {
            background: linear-gradient(
                90deg,
                rgba(255, 255, 255, 0.7) 0%,
                rgba(255, 255, 255, 0.7) 100%
            );
        }
        background-position: right top;
        background-size: contain;
        min-height: unset;
    }
    @media (max-width: $w-xs) {
        &:after {
            background: none;
        }
        padding-top: calc(100% * 0.75 - 60px);
        background-position: center top;
        background-size: contain;
        min-height: unset;
    }
}
.truck-advantages {
    background-color: #f9f9fc;
    padding: 50px 0;
}
.truck-adv-inner {
    margin: -20px auto;
    max-width: 1200px;
    display: flex;
    flex-wrap: wrap;
    @media (max-width: $w-sm) {
        flex-flow: column;
        margin: -15px auto;
    }
}
.truck-card-subblock {
    display: flex;
    flex-flow: column;
    @media (max-width: $w-sm) {
        flex-flow: row;
        align-items: center;
        margin-bottom: 12px;
    }
}
.truck-card-img {
    margin-right: 30px;
    max-width: 50px;
    width: 100%;
    height: 50px;
    object-fit: contain;
    @media (max-width: $w-sm) {
        width: 25px;
        height: 25px;
        margin-right: 12px;
    }
}
.truck-card {
    flex: 0 0 50%;
    padding: 20px;
    @media (max-width: $w-sm) {
        padding: 7.5px 15px;
    }
    &-inner {
        min-height: 130px;
        display: flex;
        padding: 35px 50px 18px 30px;
        background: #ffffff;
        box-shadow: 0px 5px 25px rgba(203, 207, 216, 0.28);
        border-radius: 4px;
        @media (max-width: $w-sm) {
            flex-flow: column;
            min-height: 124px;
            padding: 24px 20px;
        }
    }
}
.truck-card-title {
    margin-bottom: 6px;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #4578ff;
    @media (max-width: $w-sm) {
        font-size: 15px;
        line-height: 18px;
        margin-bottom: 0px;
    }
}

.truck-card-text {
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    @media (max-width: $w-sm) {
        font-size: 12px;
        line-height: 14px;
    }
}
</style>
