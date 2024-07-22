<template>
  <section class="affiliate-program-rating">
    <div class="generic-container-1260">
      <h2 class="h2" v-text="title"/>
      <div>
        <v-img class="affiliate-program-rating__stars" :src="require('images/affiliate-program/rating/RatingStar.webp')"/>
        <div class="affiliate-program-rating__general">
          <v-img  :src="require('images/affiliate-program/rating/5.svg')"/>
          <v-img  :src="require('images/affiliate-program/rating/GeneralRating.svg')"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator"

@Component
export default class Rating extends Vue {
  @Prop() bank: string;

  get title(){
    return `Рейтинг партнерской программы ${this.bank === 'Санкт-Петербург' ? 'банка ' : ''}${this.bank}`
  }
}
</script>

<style lang="scss">
.affiliate-program-rating {
  padding: 88px 0 93px 0;
  @media (max-width: $w-md){
    padding: 0;
  }
  >div>h2{
    text-align: center;
  }
  >div>div{
    display: flex;
    justify-content: space-between;
    margin-top: 35px;
    @media (max-width: $w-md){
      display: block;
      >div{
        margin: 10px auto;
      }
    }
    @media (max-width: $w-sm){
     display: block;
    }
  }
  &__general{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 60px;
    background-color: $bg-color;
    max-width: 565px;
    width: 100%;
    >div{
      @media (max-width: $w-sm){
       max-width: 100px;
      }
    }
    >div:first-child{
    margin-right: 60px;
      @media (max-width: $w-sm){
        margin-right: 10px;
      }
    }
    @media (max-width: $w-md){
      padding: 20px;
    }
    @media (max-width: $w-sm){
      padding: 10px;
    }
  }
  &__stars{
    max-width: 544px;
    width: 100%;
    height: 100%;
  }
}
</style>
