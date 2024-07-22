<template>
  <div>
    <ImageText :image="image[0]" :text="texts[0]"/>
    <ImageText :image="image[1]" :text="texts[1]" reverse register/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import ImageText from "@/components/offers/ImageText";

@Component({
  components: {
    ImageText
  }
})
export default class ImageTextFinance extends Vue{
  image: string[] = [
    require("@/assets/images/offers/fin-1.webp"),
    require("@/assets/images/offers/fin-2.webp"),
  ];
  texts: {title: string; subtitle: string }[] = [
    {
      title: "Современный интерфейс и удобный подборщик",
      subtitle:
        "Получите релевантные предложения по продуктам за 5 минут исходя из потребностей ваших клиентов",
    },
    {
      title: "Все материалы по продукту на одной странице",
      subtitle:
        "Обучение, ответы на частые вопросы, подсказки и материалы в вашем распоряжении сразу после регистрации!",
    },
  ];
}
</script>

<style scoped>

</style>
