<template>
    <div class="ipoteka-hiw">
        <div style="position: absolute; top: -100px" id="moh" />
        <HowItWorksBlock
            disable-image-fade
            :items="howItWorkItems"
            title="Не нужно быть экспертом, чтобы оформить полис и начать зарабатывать!"
        />
        <div class="generic-container-1260">
            <div class="ipoteka-regnow mb-10">
                <div>
                    <img
                        :style="{
                            height: $vuetify.breakpoint.xs ? '120px' : '',
                        }"
                        style="width: 100%"
                        src="@/assets/images/ipoteka/hiw/pampadovich.png"
                        alt="pampadovich"
                    />
                </div>
                <div>
                    <h2
                        class="font-weight-bold h3 hiw-title mb-5"
                        v-text="'Легко разобраться в продукте!'"
                    />
                    <p
                        class="hiw-desc"
                        v-text="
                            'Прочитайте несколько статей в разделе «Помощь» личного кабинета или задайте вопросы в онлайн-чат поддержки, где вам всегда помогут оформить первый полис'
                        "
                    />
                    <zond-btn
                        v-text="'Зарегистрироваться'"
                        :style="{ width: $vuetify.breakpoint.xs ? '100%' : '' }"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import HowItWorksBlock from "~/components/common/HowItWorksV1.vue";
@Component({
    components: { HowItWorksBlock },
})
export default class HowItWorks extends Vue {
    howItWorkItems = [
        {
            title: "Заполните данные для предварительного расчёта",
            text: "Укажите банк и сумму долга, чтобы получить расчет стоимости и  увидеть размер вознаграждения.",
            img: require(`@/assets/images/ipoteka/hiw/0.png`),
        },
        {
            title: "Сравните цены, размер вознаграждения и выберите подходящий вариант",
            text: "Выберите  вариант, выгодный вам и клиенту, пользуйтесь удобными фильтрами, сравнивайте условия и правила.",
            img: require(`@/assets/images/ipoteka/hiw/1.png`),
        },
        {
            title: "Заполните все данные по клиенту и объекту ипотеки: квартиры, дома или другой недвижимости",
            text: "Вам понадобятся только паспортные данные  заемщика, адрес недвижимости и номер ипотечного договора при наличии.",
            img: require(`@/assets/images/ipoteka/hiw/2.png`),
        },
        {
            title: "Отправьте ссылку на оплату клиенту",
            text: "Отправьте ссылку на оплату в СМС или письме прямо из личного кабинета. Оплата напрямую в страховую компанию.",
            img: require(`@/assets/images/ipoteka/hiw/3.png`),
        },
        {
            title: "Получите полис и ваше вознаграждение",
            text: "Полис будет доступен у вас в личном кабинете и придет на email клиенту. На ваш баланс сразу поступит вознаграждение за продажу.",
            img: require(`@/assets/images/ipoteka/hiw/4.png`),
        },
    ];
}
</script>
<style lang="scss">
.ipoteka-hiw {
    position: relative;
    padding: 75px 0;
    @media (max-width: $w-sm) {
        padding: 35px 0 0;
    }
    .ipoteka-regnow {
        background-color: #f2f5ff;
        padding: 39px 50px;
        border-radius: 11px;
        display: grid;
        grid-template-columns: minmax(100px, 200px) 1fr;
        grid-gap: 90px;
        align-items: center;
        position: relative;
        .hiw-title {
            font-size: 30px;
            @media (max-width: $w-sm) {
                font-size: 19px;
            }
        }
        .hiw-desc {
            font-size: 20px;
            @media (max-width: $w-sm) {
                font-size: 15px;
            }
        }
        &:before {
            position: absolute;
            content: url("@/assets/images/ipoteka/hiw/bg-left.svg");
            left: -10%;
            top: 40%;
        }
        &:after {
            position: absolute;
            content: url("@/assets/images/ipoteka/hiw/bg-right.svg");
            right: -10%;
            top: -10%;
        }
        @media (max-width: $w-sm) {
            grid-gap: 45px;
            padding: 15px 25px 50px;
        }
        @media (max-width: $w-xs) {
            grid-gap: 25px;
            grid-template-columns: 1fr;
        }
    }

    .hiw-switch {
        border-radius: 4px;
        padding: 20px 60px 20px 20px;
        margin-bottom: 15px;
        @media (max-width: $w-sm) {
            margin-bottom: 5px;
            padding: 10px 0;
        }
        &.active {
            box-shadow: 0px 4px 30px rgba(49, 49, 49, 0.0902262);
            @media (max-width: $w-sm) {
                box-shadow: unset;
            }
            .sw-num:after {
                top: 70px;
                left: -70px;
            }
        }
    }
    .hiw-desc-container {
        max-width: 700px;
    }
}
</style>
