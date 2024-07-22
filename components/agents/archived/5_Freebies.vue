<template>
    <div class="freebies">
        <div class="fr-header">
            <img
                style="object-fit:contain"
                src="~/assets/images/bl5/samurai.svg"
                alt="samurai"
            />
            <div v-if="$vuetify.breakpoint.mdAndUp" class="fr-headertext">
                <h2 class="h2">Для вас будет доступен бесплатный</h2>
                <h2 class="h2">набор страхового самурая</h2>
            </div>
            <div v-else class="fr-headertext">
                <h2 class="h2">
                    Для вас будет доступен бесплатный набор страхового самурая
                </h2>
            </div>
        </div>
        <div class="freebies-cards">
            <div class="freebies-card">
                <img
                    class="freb-img"
                    src="~/assets/images/bl5/1.svg"
                    alt="image1"
                />
                <span v-text="'Поиск и прохождение техосмотра'" />
            </div>
            <div class="freebies-card">
                <img
                    class="freb-img"
                    src="~/assets/images/bl5/2.svg"
                    alt="image2"
                />
                <span v-text="'Проверка и восстановление КБМ'" />
            </div>
            <div class="freebies-card">
                <img
                    class="freb-img"
                    src="~/assets/images/bl5/3.svg"
                    alt="image3"
                />
                <span v-text="'Поиск данных по гос. номеру'" />
            </div>
            <div class="freebies-card">
                <img
                    class="freb-img"
                    src="~/assets/images/bl5/4.svg"
                    alt="image4"
                />
                <span v-text="'Договор купли-продажи онлайн'" />
            </div>
            <div class="freebies-card">
                <img
                    class="freb-img"
                    src="~/assets/images/bl5/5.svg"
                    alt="image5"
                />
                <span v-text="'Оформление ОСАГО на 3, 6, 9, 12 месяцев'" />
            </div>
            <div class="freebies-card">
                <img
                    class="freb-img"
                    src="~/assets/images/bl5/6.svg"
                    alt="image6"
                />
                <span
                    v-html="
                        'Отправка SMS и писем клиенту из&nbsp;личного кабинета'
                    "
                />
            </div>
            <div class="freebies-card">
                <img
                    class="freb-img"
                    src="~/assets/images/bl5/7.svg"
                    alt="image7"
                />
                <span
                    v-text="'Просматривайте и проверяйте коэффициенты расчета'"
                />
            </div>
            <div class="freebies-card">
                <img
                    class="freb-img"
                    src="~/assets/images/bl5/8.svg"
                    alt="image8"
                />
                <span v-html="'Виджеты продаж и&nbsp;баннеры для&nbsp;сайта'" />
            </div>
            <div class="freebies-card">
                <img
                    class="freb-img"
                    src="~/assets/images/bl5/9.svg"
                    alt="image9"
                />
                <span
                    v-html="'Добавляйте агентов и&nbsp;развивайте свою сеть'"
                />
            </div>
            <div class="freebies-card">
                <img
                    class="freb-img"
                    src="~/assets/images/bl5/10.svg"
                    alt="image10"
                />
                <span v-html="'Работайте с&nbsp;мобильных устройств'" />
            </div>
            <div class="freebies-card">
                <img
                    class="freb-img"
                    src="~/assets/images/bl5/11.svg"
                    alt="image11"
                />
                <span v-text="'Бонусы за пролонгацию договоров'" />
            </div>
            <div class="freebies-card">
                <img
                    class="freb-img"
                    src="~/assets/images/bl5/12.svg"
                    alt="image12"
                />
                <span v-html="'Вся статистика в&nbsp;личном кабинете'" />
            </div>
        </div>
        <div style="text-align:center;position: relative;z-index: 1;">
            <zond-btn class="btn freb-btn" v-text="'Хочу такой набор'" />
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
@Component({ components: {} })
export default class Freebies extends Vue {}
</script>
<style lang="scss">
.freb-img {
    object-fit: contain;
    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
        width: 80px;
        height: 60px;
        margin: auto;
    }
}
.freebies {
    background-color: #f9f9fc;
    position: relative;
    overflow: hidden;
    &:before {
        @media (max-width: $w-sm) {
            display: none;
        }
        content: url("~@/assets/images/bl5/bg-t.svg");
        position: absolute;
        top: 65px;
        left: 50%;
        transform: translateX(-50%);
    }
    &:after {
        @media (max-width: $w-sm) {
            display: none;
        }
        content: url("~@/assets/images/bl5/bg-b.svg");
        position: absolute;
        bottom: 40px;
        left: 50%;
        transform: translateX(-50%);
    }
}
.fr-header {
    position: relative;
    z-index: 1;
    display: flex;
    max-width: 1160px;
    margin: 100px auto 50px;
    @media (max-width: $w-md) {
        margin: 100px 40px 50px;
    }
    @media (max-width: $w-sm) {
        margin: 30px 18px 26px;
        justify-content: center;
        img {
            width: 53px;
        }
    }
}
.fr-headertext {
    text-align: center;
    width: 100%;
    padding-bottom: 15px;
    padding-right: 80px;
    margin-left: 18px;
    border-bottom: 1px solid #dcdced;
    @media (max-width: $w-sm) {
        padding-bottom: 0px;
        max-width: 260px;
        border-bottom: none;
        padding-right: 0px;
        margin-top: auto;
        h2 {
            text-align: left;
            font-size: 16px;
            line-height: 24px;
        }
    }
}
.freebies-cards {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    margin: -11px auto;
    justify-content: center;
}
.freebies-card {
    & > span {
        padding-left: 10px;
        font-size: 16px;
        line-height: 22px;
        margin: auto;
        display: block;
        @media (max-width: $w-sm) {
            line-height: 20px;
        }
        @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
            height: 30px;
        }
    }
    display: flex;
    align-self: center;
    padding: 10px 20px;
    height: 109px;
    width: 373px;
    margin: 11px;
    @media (max-width: $w-md) {
        width: 292px;
    }
    @media (max-width: $w-sm) {
        height: 85px;
        margin: 6px 11px;
        padding: 10px 10px 10px 15px;
    }
    background: #fff;
    box-shadow: 0px 5px 25px rgba(203, 207, 216, 0.28);
    outline: 2px solid transparent;
    transition: outline 150ms;
    &:hover {
        outline: 2px solid #447eff;
    }
}
.freb-btn {
    margin: 50px auto 70px;
    @media (max-width: $w-sm) {
        margin: 40px auto 50px;
    }
}
</style>
