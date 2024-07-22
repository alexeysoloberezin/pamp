<template>
  <div class="ipoteka-intro">
    <div style="position: absolute;top: 0" id="moi"/>
    <div class="generic-container-1260">
      <div>
        <h1 style="font-weight: bold" class="h2" :class="{'text-left' : $vuetify.breakpoint.smAndDown}">
          <span style="color: #AB54FF">Платформа для ипотечного страхования для</span>
         риэлторов и агентов с вознаграждением до 60%
        </h1>
        <h5 class="my-8">
          Получите доступ к онлайн оформлению договоров сразу от нескольких страховых компаний и банков в едином кабинете агента страхователя
        </h5>
        <zond-btn v-text="'Зарегистрироваться'"/>
      </div>
      <div>
        <v-img :src="require('~/assets/images/ipoteka/intro/intro-bg.png')" alt="ipoteka" style="width: 100%"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({})
export default class Intro extends Vue {
}
</script>

<style lang="scss">
.ipoteka-intro {
  padding: 15px 0;
  background: linear-gradient(268.37deg, #F3F3F8 6.73%, rgba(249, 249, 252, 0.4) 98.42%);
  @media (max-width: $w-sm){
    padding: 40px 0;
  }
  .generic-container-1260 {
    display: grid;
    grid-template-columns: minmax(400px,530px) minmax(300px,1fr);
    grid-gap: 40px;
    align-items: center;
    justify-content: center;
    @media (max-width: $w-sm){
      grid-template-columns: minmax(300px,700px);
    }
  }
}
</style>
