<template>
  <div>
    <ImageText v-for="(el, i) in block" :key="i" :image="el.image" :text="el.text" :reverse="i % 2 == 0"/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import ImageText from "~/components/offers/ImageText.vue";

@Component({
  components: {ImageText}
})
export default class RefImagesText extends Vue {
  block = [
    {
      image: require('images/referalnaya-programma/refImg1.webp'),
      text: {
        title: "Все инструменты под рукой",
        subtitle: `
          <p>На страницу реферальной программы можно перейти из выпадающего меню рядом с вашим именем</p>
          <p>Или сразу скопировать ссылку с главной страницы личного кабинета</p>
        `
      }
    },
    {
      image: require('images/referalnaya-programma/refImg2.webp'),
      text: {
        title: "Легко начать",
        subtitle: `<p>Oтправьте реферальную ссылку страховым агентам, риелторам, кредитным брокерам, банковским агентам, вебмастерам или опубликуйте её на своей площадке (сайт, блог, ютуб-канал)</p>`
      }
    },
    {
      image: require('images/referalnaya-programma/refImg3.webp'),
      text: {
        title: "Вся сеть в одном кабинете",
        subtitle: `<p>При регистрации на нашем сервисе все агенты появятся в таблице в личном кабинете, далее мы будем их самостоятельно курировать</p>`
      }
    },
    {
      image: require('images/referalnaya-programma/refImg4.webp'),
      text: {
        title: "Получайте пассивный доход",
        subtitle: `<p>Получайте вознаграждение со&nbsp;всех продаж приглашенных агентов на&nbsp;протяжении всего времени работы с&nbsp;нами</p>`
      }
    },
  ]
}
</script>
