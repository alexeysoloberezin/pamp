<template>
  <section class="webmaster-tools">
    <h2 class="h2">Инструменты вебмастера</h2>
    <ImageText :image="image[0]" :text="texts[0]"/>
    <ImageText :image="image[1]" :text="texts[1]" reverse/>
    <ImageText :image="image[2]" :text="texts[2]"/>
  </section>
</template>
<script lang="ts">
import ImageText from "~/components/offers/ImageText.vue";
import {Component, Vue} from "vue-property-decorator";

@Component({
  components: {ImageText}
})

export default class WebmasterTools extends Vue {
  image = [
    require("@/assets/images/finance/webmasterTools1.webp"),
    require("@/assets/images/finance/webmasterTools2.webp"),
    require("@/assets/images/finance/webmasterTools3.webp"),
  ];
  texts = [
    {
      title: "Виджеты и витрины",
      subtitle:
        "Настраивайте индивидуальный внешний вид или выбирайте одну из готовых цветовых схем, чтобы посетители воспринимали виджет как часть вашего сайта или приложения.",
    },
    {
      title: "Отслживайте заявки онлайн",
      subtitle:
        "Получите доступ к онлайн статистике и отслеживаетй свою эффективность используя разные комбинаяции срезов и отчётов.",
    },
    {
      title: "Настраивайте постбеки",
      subtitle:
        "Лёгкая и понятная настройка постбеков для использования собственных инструментов аналитики и трекеров.",
    },
  ];
}
</script>
<style lang="scss">
.webmaster-tools{
  background-color: #F9F9FC;
  >h2{
    text-align: center;
    padding-top: 66px;
    @media (max-width: $w-sm) {
      padding-top: 20px;
    }
  }
}
</style>
