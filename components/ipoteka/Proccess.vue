<template>
  <div class="ipoteka-proccess">
    <div class="generic-container-1260">
      <h2 class="h2 font-weight-bold text-center" style="max-width: 700px;margin: 0 auto">Страхование ипотеки — это гораздо проще, чем вы думаете</h2>
      <div class="proccess-items mt-10">
          <div v-for="({icon,title},i) in items" class="proccess-item" :key="i">
            <div>
              <img class="proccess-icon" :src="icon" alt="proccess">
            </div>
            <p class="proccess-title mx-auto" style="max-width: 250px;" :class="{'ml-3': $vuetify.breakpoint.smAndDown,'mt-5': $vuetify.breakpoint.mdAndUp}" v-html="title"/>
          </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({})
export default class Proccess extends Vue {
  items = [
    {
      icon: require('@/assets/images/ipoteka/proccess/clock.svg'),
      title: 'Процесс оформления занимает&nbsp;<b>10&nbsp;минут</b> в&nbsp;режиме&nbsp;онлайн',
    },
    {
      icon: require('@/assets/images/ipoteka/proccess/note.svg'),
      title: 'Вам <b>НЕ понадобятся</b> оригиналы&nbsp;документов, заполнение анкет или встречи с&nbsp;клиентами',
    },
    {
      icon: require('@/assets/images/ipoteka/proccess/search.svg'),
      title: 'Гарантируем, что <b>банк примет&nbsp;полис</b>',
    },
  ]
}
</script>

<style lang="scss">
.ipoteka-proccess {
  background: #F2F5FF;
  padding: 75px 0;
  @media (max-width: $w-sm) {
    padding: 35px 0;
  }
  .proccess-items {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 25px;
    justify-content: center;
    @media (max-width: $w-sm){
      grid-template-columns: minmax(250px,370px);
      grid-auto-rows: minmax(107px,auto);
    }
    .proccess-item {
      background: #FFFFFF;
      display: flex;
      flex-flow: column;
      justify-content: flex-start;
      padding: 30px;
      border-radius: 5px;
      text-align: center;
      @media (max-width: $w-sm) {
        flex-flow: row;
        padding: 15px;
        align-items:center;
      }
    }

  }
  .proccess-title {
    margin-bottom: 0;
    font-size: 20px;
    line-height: 1.2;
    @media (max-width: $w-sm){
      font-size: 15px;
    }
  }
  .proccess-icon {
    @media (max-width: $w-sm){
      height: 70px;
    }
    @media (max-width: $w-xs){
      height: 48px;
    }
  }
}
</style>
