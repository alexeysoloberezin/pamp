<template>
    <div class="p-wn">
        <div class="p-wn-cards">
            <div class="p-wn-card">
                <v-img
                    :src="require('@/assets/images/partners/why/why-partner-2x.png')"
                    class="p-wn-img"
                />
                <div class="p-wn-content">
                    <div class="p-wn-title" v-text="'Зачем это партнеру'" />
                    <div class="p-wn-list">
                        <ul>
                            <li>
                                <div>
                                    Дополнительный полезный сервис монетизации
                                </div>
                            </li>
                            <li>
                                <div>
                                    Увеличивает клиентский Retention Rate
                                </div>
                            </li>
                            <li>
                                <div>
                                    Покупка ОСАГО – это обязательный и ежегодный
                                    платеж для всех автомобилистов
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="p-wn-card">
                <div class="p-wn-content">
                    <div class="p-wn-title" v-text="'Зачем это клиенту'" />
                    <div class="p-wn-list">
                        <ul>
                            <li>
                                <div>
                                    <b>НУЖНО СРАВНИВАТЬ —</b> с 24.08.20
                                    стоимость ОСАГО индивидуальна для каждого
                                    клиента в каждой отдельной взятой страховой
                                    компании
                                </div>
                            </li>
                            <li>
                                <div>
                                    <b>SUPER APP —</b> желание оплачивать и
                                    получать все услуги в привычном
                                    приложении/cайте
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <v-img
                    :src="require('@/assets/images/partners/why/why-client-2x.png')"
                    class="p-wn-img"
                />
            </div>
        </div>
        <div class="p-wn-subtitle">
            Встроенные партнерские маркетплейсы ОСАГО уже появляются у разных
            партнеров:
            <span style="color: #DB3727">Лукойл, </span>
            <span style="color: #80AD33">Сбербанк, </span>
            <span style="color: #DB3727">Auto.ru</span> и другие
        </div>
        <div style="margin: 40px 20px;">
            <zond-btn
                style="max-width: 350px; display: block; margin: auto;"
                v-text="'Запустить свой маркетплейс'"
            />
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class WhyNeeded extends Vue {}
</script>
<style lang="scss">
.p-wn-cards {
    max-width: 1040px;
    margin: auto;
    padding: 0 20px;
}
.p-wn-card {
    display: flex;
    background: #ffffff;
    box-shadow: 0px 5px 25px rgba(203, 207, 216, 0.5);
    border-radius: 5px;
    margin: 60px 0;
    @media (max-width: $w-sm) {
        max-width: 500px;
        flex-flow: column;
        margin: 35px auto;
    }
    @media (max-width: $w-xs) {
    }
}
.p-wn-img {
    width: 50%;
    object-fit: cover;
    @media (max-width: $w-sm) {
        width: 100%;
        order: -1;
    }
}
.p-wn-content {
    padding: 40px 45px;
    @media (max-width: $w-sm) {
        padding: 26px 22px;
    }
}
.p-wn-title {
    font-family: Montserrat;
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 10px;
    @media (max-width: $w-sm) {
        font-size: 18px;
    }
}
.p-wn-list {
    li {
        list-style-type: initial;
        color: #9249ee;
        position: relative;
        margin-left: -8px;
        &:not(:first-child) {
            margin-top: 6px;
        }
        div {
            color: black;
            font-size: 16px;
            line-height: 22px;
            @media (max-width: $w-sm) {
                font-size: 14px;
                line-height: 18px;
            }
        }
    }
}
.p-wn-subtitle {
    font-family: Montserrat;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    color: #000000;
    max-width: 850px;
    margin: auto;
    padding: 0 14px;
}
</style>
