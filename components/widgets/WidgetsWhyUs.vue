<template>
    <div class="wwu">
        <div id="wwu" style="position: absolute; top: -180px" />
        <h2
            class="h2 px-6"
            v-text="
                'Почему именно наш виджет ОСАГО принесет вам максимальный доход'
            "
        />
        <h3
            class="wwu-subtitle short"
            v-text="
                'Мы нашли причины, почему клиенты мало покупают полисы онлайн'
            "
        />
        <div class="wwu-block">
            <div class="wwu-panels-outer">
                <WidgetsExpands :items="items" icon="cancel" />
            </div>
            <div
                class="wwu-image"
                :style="$vuetify.breakpoint.smAndDown ? 'order: -1' : ''"
            >
                <img src="@/assets/images/widgets/adv/profit1-2x.png" />
            </div>
        </div>
        <h3
            class="wwu-subtitle"
            v-text="
                'В результате мы сделали процесс оформления и покупки полиса легким и технологичным'
            "
        />
        <div class="wwu-block">
            <div class="wwu-image">
                <img src="@/assets/images/widgets/adv/profit2-2x.png" />
            </div>
            <div class="wwu-panels-outer">
                <WidgetsExpands :items="items2" icon="check" />
                <div
                    class="font-weight-bold text-center mt-5"
                    style="font-size: 24px"
                    v-if="$vuetify.breakpoint.mdAndUp"
                >
                    Как итог:
                    <span class="primary--text"
                        >увеличение продаж и дохода вебмастеров</span
                    >
                </div>
            </div>
        </div>
        <div
            class="font-weight-bold text-center mt-5"
            v-if="$vuetify.breakpoint.smAndDown"
        >
            Как итог:
            <span class="primary--text"
                >увеличение продаж и дохода вебмастеров</span
            >
        </div>
        <div style="display: flex" :style="{ margin: '50px 0' }">
            <zond-btn
                style="margin: auto; min-width: 220px"
                v-text="'Попробовать'"
            />
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { mdiCheckBold } from "@mdi/js";
import WidgetsExpands from "./WidgetsExpands.vue";
@Component({ components: { WidgetsExpands } })
export default class WidgetsWhyUs extends Vue {
    items = [
        {
            title: "Отсутствие причины для начала расчета",
            text: "Клиент не понимает, зачем ему начинать расчет, из каких этапов состоит процесс, какую пользу он получит взамен на потраченное время. Отсутствуют элементы завлечения.",
        },
        {
            title: "Огромное количество обязательных полей, чтобы получить стоимость полиса",
            text: "Чем больше полей нужно заполнить, тем больше шанс, что посетитель сайта откажется. Никто не любит заполнять анкеты.",
        },
        {
            title: "Отсутствующий или неточный предварительный расчет",
            text: "Чем раньше мы дадим пользователю предварительный расчет, тем больше шанс, что он согласится заполнить все данные.",
        },
        {
            title: "Нет помощи в заполнении полей и не проверяются введенные данные",
            text: "Валидация предотвращает ошибки, которые приводят к отказу страховых компаний. Пример: ошибка в VIN номере — это гарантированный отказ в покупке. Не сверяются с данными по автомобилю из ГИБДД.",
        },
        {
            title: "Нет обработки ситуации отказов со стороны страховых компаний",
            text: "Клиент может не пройти сегментацию выбранной страховой компании. Чтобы он не разочаровался и не ушел, нужно дать альтернативные варианты покупки.",
        },
        {
            title: "Отсутствует попытка вернуть клиента, если он бросил покупку",
            text: "Пользователь мог отвлечься на звонок, случайно закрыть вкладку с оформлением полиса или взять паузу, чтобы подумать. С брошенными покупками надо работать.",
        },
        {
            title: "Мало страховых компаний и плохая интеграции с ними",
            text: "Ни одна страховая компания не может покрыть весь сегмент клиентов и регионов. Большее количество компаний и правильная их интеграция увеличивают конверсию расчета в продажу",
        },
    ];
    items2 = [
        {
            title: "Стимулируем посетителя начать расчет",
            text: "Показываем, сколько в среднем можно сэкономить, и как могут отличаться цены в разных компаниях.",
        },
        {
            title: "Простой путь для покупателя — минимум данных",
            text: "Не пугаем большим списком необходимых полей, показывая их к заполнению постепенно, завлекая пользователя. Что можем, заполним сами.",
        },
        {
            title: "Предварительный расчет — быстрый и точный",
            text: "Получив минимум данных, даем предварительный расчет стоимости с точностью в 75% благодаря собственной базе расчетов в 3 тыс. полисов ежедневно. Это увеличивает шанс, что пользователь продолжит оформление.",
        },
        {
            title: "Проверка опечаток — исправляем и подсказываем",
            text: "Подтягиваем данные по автомобилю из ГИБДД и предотвращаем ошибки заполнения, которые приводят к отказу страховых компаний.",
        },
        {
            title: "Расчет сразу в 12 страховых компаниях",
            text: "Чем больше страховых компаний — тем больше шанс, что пользователь получит максимальное количество одобрений и подходящий вариант по цене и бренду и, соответсвенно, совершит покупку.",
        },
        {
            title: "Отправляем SMS и Email тем, кто бросил покупку",
            text: "Отправляем на почту и в sms ссылку на оплату, а также напоминаем результаты расчета тем, кто не завершил покупку.",
        },
        {
            title: "Конверсия в покупку существенно выше",
            text: "Благодаря всем этим и другим деталям, процент совершивших покупку от всех посетителей сайта или приложения становится выше в среднем на 7-15% в зависимости от качества аудитории.",
        },
    ];
}
</script>
<style lang="scss">
.wwu {
    position: relative;
    background-color: #f9f9fc;
    padding: 50px 0;
    image-rendering: -webkit-optimize-contrast;
    @media (max-width: $w-sm) {
        padding: 50px 0 10px;
    }
    .h2 {
        margin: auto;
        display: block;
        text-align: center;
        max-width: 720px;
    }
}
.wwu-subtitle {
    text-align: center;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    margin: 54px auto;
    max-width: 620px;
    padding: 0 20px;
    &.short {
        max-width: 510px;
    }
    @media (max-width: $w-sm) {
        margin: 54px auto 10px;
        font-size: 18px;
    }
}
.wwu-block {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 0 26px;
    @media (max-width: $w-sm) {
        flex-flow: column;
        align-items: center;
    }
}
.wwu-panels-outer {
    max-width: 560px;
}
.wwu-image {
    img {
        max-width: 500px;
        width: 100%;
    }
    max-width: 517px;
    flex: auto;
    margin: 0 50px;
    @media (max-width: $w-sm) {
        margin: 0 0px;
    }
}
</style>
