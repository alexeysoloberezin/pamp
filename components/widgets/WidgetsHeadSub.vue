<template>
    <section class="widgets-main-sub">
      <div class="webtools-container">
        <h2 class="widgets-main-sub__title">Почему мы?</h2>
        <div class="wms-inner">
          <div v-for="(item, i) in items" :key="i" class="wms-card hover-outline">
            <v-img class="wms-card-img" :src="item.img" contain/>
            <div class="wms-title" v-html="item.title" />
            <div class="wms-text" v-html="item.text"/>
          </div>
        </div>
      </div>
    </section>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class WidgetsHeadSub extends Vue {
    items = [
        {
            img: require("@/assets/images/widgets/headsub/flybucks.svg"),
            title:
                "Наши партнеры уже зарабатывают более 35 млн&nbsp;₽ в месяц",
            text: `Свыше 7 тыс. агентов, брокеров и владельцев сайтов продают  с помощью Пампаду каждый день`
        },
        {
            img: require("@/assets/images/widgets/headsub/stopwatch.svg"),
            title: "Вознаграждение будет доступно&nbsp;сразу",
            text: `Выводите заработанное, когда вам удобно, даже сразу после успешной покупки посетителем`
        },
        {
          img: require("@/assets/images/widgets/headsub/mark.svg"),
          title: "Платим 80% от зарабатываемого нами с каждой продажи",
          text: `Большой выбор и правильно настроенные интеграции в совокупности с, пожалуй, самым высоким вознаграждением`
        },
        {
            img: require("@/assets/images/widgets/headsub/free.svg"),
            title: "Бесплатная и быстрая установка на&nbsp;любой сайт",
            text: `Используйте готовые ссылки или настройте внешний вид виджета в личном кабинете и установите всего 2 строчки кода`
        }
    ];
}
</script>
<style lang="scss">
.widgets-main-sub {
    background-color: #f9f9fc;
  &__title{
    @include title;
    text-align: center;
    padding-top: 37px;
    @media (max-width: $w-xs) {
      padding-top: 17px;
    }
  }
}
.wms-inner {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-auto-rows: minmax(180px,auto);
    grid-gap: 30px;
    padding: 46px 0 59px 0;
    @media (max-width: $w-sm) {
      padding: 17px 0;
    }
    @media (max-width: $w-xs) {
        grid-template-columns: 1fr;
        grid-gap: 15px;
    }
}
.wms-card-img {
    margin-right: 30px;
    @media (max-width: $w-sm) {
        margin-right: 15px;
    }
    @media (max-width: $w-xs) {
        margin-right: 0;
        margin-bottom: 10px;
    }
}
.wms-card {
    flex: 1 0 340px;
    background: #ffffff;
    box-shadow: 0px 5px 25px rgba(203, 207, 216, 0.6);
    border-radius: 5px;
    display: grid;
    grid-template-columns: 80px 1fr;
    padding: 30px;
    @media (max-width: $w-sm) {
        margin: 10px;
        padding: 15px;
        flex: auto;
    }
    @media (max-width: $w-xs) {
        margin: 6px;
        flex-flow: column;
    }
}
.wms-title {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    font-family: Montserrat, sans-serif;
    color: #4578ff;
    max-width: 390px;
    @media (max-width: $w-sm) {
        max-width: 100%;
        font-size: 14px;
        line-height: 16px;
    }
}
.wms-text {
    margin-top: 8px;
    font-size: 14px;
    line-height: 20px;
    max-width: 360px;
    grid-column: 2;
    @media (max-width: $w-sm) {
        max-width: 100%;
        font-size: 12px;
        line-height: 14px;
        grid-column: 1 / 3;
    }
}
</style>
