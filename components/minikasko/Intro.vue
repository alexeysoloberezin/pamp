<template>
  <div class="minikasko-intro">
    <div class="minikasko-container">
      <div>
        <h1 style="font-weight: bold" class="h2" :class="{'text-left' : br.smAndDown}">
          <span style="color: #AB54FF">Помогайте клиентам оформить бюджетные полисы мини-КАСКО</span>
          — с&nbsp;покрытием от 400 тыс. до&nbsp;2&nbsp;млн&nbsp;рублей
        </h1>
        <h5 class="my-8" v-html="description"/>
        <zond-btn v-text="'Зарегистрироваться'"/>
      </div>
      <div>
        <img class="minikasko-intro-bg" :src="bg" :alt="imgAltAttr" style="width: 100%">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Inject } from "vue-property-decorator"

@Component
export default class Intro extends Vue {
  @Inject('imgAltAttr') readonly imgAltAttr: string

  bg = require('images/minikasko/intro/bg.png');
  description = 'Получите доступ к расчету и подбору оптимальных условий защиты автомобиля, в том числе от бесполисных водителей, ДТП по чужой или обоюдной вине, угона хищения, стихийных бедствий и др. рисков.';

  get br(){
    return this.$vuetify.breakpoint
  }

}
</script>

<style lang="scss">
.minikasko-intro {
  padding: 45px 0;
  background: linear-gradient(268.37deg, #F3F3F8 6.73%, rgba(249, 249, 252, 0.4) 98.42%);
  @media (max-width: $w-sm){
    padding: 40px 0;
  }
  @media (max-width: $w-xs){
    padding: 30px 0 20px;
  }

  .minikasko-container {
    display: grid;
    grid-template-columns: minmax(400px,500px) minmax(300px,1fr);
    grid-gap: 40px;
    align-items: center;
    justify-content: center;
    @media (max-width: $w-md){
      grid-template-columns: minmax(300px,700px);
    }
    @media (max-width: $w-sm){
      grid-template-columns: 1fr;

    }
  }
}
</style>
