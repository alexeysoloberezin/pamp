<template>
  <div class="competition">
    <div class="generic-container-1260">
      <h2 class="h2 text-center" v-html="'Как принять участие?'"></h2>
      <div class="competition-wrp">
        <img class="competition-bg" src="@/assets/images/universe-gift/competition/airpods.webp" alt="">

        <div class="competition-box" v-for="(step, index) in steps" :key="index">
          <div class="competition-number">{{ index + 1 }}</div>
          <div class="competition-text" v-html="step"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component({})
export default class Competition extends Vue {
  steps = [
    '<span>Продавайте через Пампаду</span> в Июле и Августе ОСАГО, КАСКО, Ипотечное страхование, Банковские продукты и МФО <span>или приглашайте пользователей</span> через реферальную программу.',
    'Чем <span>больше продаж или активных приглашённых пользователей</span>, тем в большем количестве номинаций вы принимаете участие и <span>больше шанс</span> на получение одного из ценных призов.',
    'В Сентябре <span>мы случайным образом определим победителей</span> и пригласим на вручение к нам в офис или отправим призы по почте.'
  ]
}
</script>

<style lang="scss">

.competition {
  background: #FAFAFA;
  overflow: hidden;
  padding: 50px 0 75px 0;
  @media (max-width: $w-xs) {
    padding: 35px 0;
  }
  &-bg{
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(200px, -80%);
    z-index: 1;
    @media (max-width: $w-xs) {
      display: none;
    }
  }
  h2{
    text-align: center;
    position: relative;
    z-index: 2;
    margin-bottom: 80px;
    @media (max-width: $w-xs) {
      margin-bottom: 40px;
    }
  }
  &-wrp{
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
    @media (max-width: $w-sm) {
      grid-template-columns: 1fr;
      grid-gap: 20px;
    }
  }
  &-box{
    position: relative;
    z-index: 4;
    border-radius: 20px;
    background: #FFF;
    padding: 0 30px 30px 30px;
    @media (max-width: $w-sm) {
      padding: 0 15px 15px 15px;
    }
    &:nth-child(2){
      z-index: 3;
    }
    &:nth-child(3){
      z-index: 2;
    }
    &:nth-child(4){
      z-index: 1;
    }
  }
  &-text{
    color: #000;
    text-align: center;
    font-size: 20px;
    line-height: 1.45;
    span{
      color: #AB54FF;
      font-weight: 600  ;
    }
    @media (max-width: $w-sm) {
      font-size: 15px;
    }
  }
  &-number{
    font-family: 'Montserrat', sans-serif;
    color: #4578FF;
    text-align: center;
    border-radius: 113px;
    background: #FAFAFA;
    margin: 0 auto -25px;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    line-height: 29px;
    @media (min-width: $w-sm) {
      font-size: 46px;
      width: 113px;
      height: 113px;
    }
    @media (max-width: $w-sm) {
      width: 90px;
      padding-top: 32px;
      height: 90px;
      font-size: 30px;
      margin-bottom: -32px;
    }
  }
}
</style>
