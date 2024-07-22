<template>
    <div class="footer-text">
      © {{ year }}, ООО «Страховые Партнеры»<br/>
      <span class="footer-text-small">
       Вся представленная на сайте информация носит исключительно информационный характер и не является публичной офертой, определяемой положениями Статьи 437 Гражданского кодекса Российской Федерации.
        <br/>
       ООО «Страховые Партнеры» НЕ ведет страховую деятельность или деятельность страховых брокеров, требующую лицензирование согласно законам РФ.
      </span>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({})
export default class FooterCompanyInfo extends Vue {
  year = new Date().getFullYear();

  get br(){
    return this.$vuetify.breakpoint;
  }
}
</script>

