<template>
    <div class="webtools-container">
        <div class="w-s">
            <div class="w-s-texts">
                <h2 class="w-s-title">
                    Гибкие настройки и полезная статистика
                </h2>
                <h3 class="w-s-text">
                    Настраивайте индивидуальный внешний вид или выбирайте одну
                    из готовых цветовых схем, чтобы посетители воспринимали
                    виджет как часть вашего сайта или приложения.<br /><br />
                    Доступно неограниченное количество виджетов и вся
                    статистика, чтобы отслеживать эффективность: показы, клики,
                    продажи. Устанавливайте и передавайте цели в яндекс метрику
                    или гугл аналитику.
                </h3>
            </div>
            <div class="w-s-image">
                <img
                    style="width: 100%"
                    src="@/assets/images/widgets/color-2x.png"
                />
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class WidgetsSettings extends Vue {}
</script>
<style lang="scss">
.w-s-title {
    font-family: Montserrat;
    font-weight: bold;
    font-size: 35px;
    line-height: 40px;
    max-width: 472px;
    @media (max-width: $w-sm) {
        font-size: 25px;
        line-height: 30px;
    }
}
.w-s-text {
    font-size: 16px;
    line-height: 28px;
    margin-top: 40px;
    margin-bottom: 60px;
    @media (max-width: $w-sm) {
        font-size: 14px;
        line-height: 22px;
        margin-bottom: 0px;
    }
}
.w-s-texts {
    max-width: 420px;
    margin: 0 20px;
}
.w-s-image {
    max-width: 750px;
    image-rendering: -webkit-optimize-contrast;
    @media (min-width: $w-sm) {
        img {
            margin-top: -4%;
        }
    }
    @media (max-width: $w-sm) {
        margin: 0;
        order: -1;
        max-width: 550px;
    }
}
.w-s {
    display: flex;
    align-items: center;
    padding: 100px 0;
    @media (max-width: $w-sm) {
        align-items: center;
        flex-flow: column;
        padding: 30px 0;
    }
}
</style>
