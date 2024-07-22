<template>
  <div class="generic-container-1260">

    <div class="ipoteka-conditions">
      <div class="ipoteka-conditions-content">
        <h2 class="ipoteka-conditions-title">Получите выгоду до&nbsp;<span style="color: rgba(171, 84, 255, 1)">60%</span> с каждого оформления</h2>
        <div class="ipoteka-conditions-description">
          Мы стремимся предоставить самые выгодные условия для агентов. Делаем упор на удобство <strong>сервиса</strong> и добавление новых страховых компаний.
        </div>
      </div>
      <v-img class="ipoteka-conditions-img" style="max-width: 100%" :src="img" alt="conditions"/>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"

@Component({})
export default class Conditions extends Vue {
  get br(){
    return this.$vuetify.breakpoint;
  }

  get img(){
    return this.br.mdAndUp ? require('images/ipoteka/conditions/bg.png') : require('images/ipoteka/conditions/bg-sm.png');
  }
}
</script>

<style lang="scss">
.ipoteka-conditions {
  padding: 75px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: $w-sm){
    padding: 25px 0;
    flex-direction: column;
  }
  &-content {
    flex: 0 1 480px;
    margin-right: 15px;
    position: relative;
    @media (max-width: $w-sm){
      flex: auto;
    }
    &:before {
        position: absolute;
        content: url("images/common/decor/1.svg");
        left: -70px;
        top: -40px;
    }
    &:after {
      position: absolute;
      content: url("images/common/decor/1.svg");
      right: -45px;
      bottom: -40px;
    }

  }
  &-title {
    font-family: 'Montserrat',sans-serif;
    font-weight: 700;
    font-size: 35px;
    line-height: 40px;
    max-width: 440px;
    @media (max-width: $w-sm){
      font-size: 19px;
      line-height: 23px;
      max-width: 240px;
    }
  }
  &-description {
    margin-top: 48px;
    font-weight: 400;
    font-size: 22px;
    line-height: 34px;
    @media (max-width: $w-sm){
      margin-top: 12px;
      font-size: 17px;
      line-height: 24px;
    }
  }
  &-img {
    flex: 0 1 611px;
    position: relative;
    @media (max-width: $w-sm){
      margin: 20px -10px;
      flex: auto;
    }
    &:after {
      position: absolute;
      content: url("images/common/decor/2.svg");
      right: -60px;
      top: 20px;
    }
  }
}
</style>
