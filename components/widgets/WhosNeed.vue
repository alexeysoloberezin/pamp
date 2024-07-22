<template>
  <section class="whos-need" >
    <div style="position: absolute;top: -50px" id="widwn"/>
    <div class="webtools-container">
      <h2 class="h2 text-center" :class="{'mb-10': $vuetify.breakpoint.mdAndUp}">Кому помогут зарабатывать наши инструменты?</h2>
      <div class="items-wrapper">
        <v-layout class="whos-need-item" :column="$vuetify.breakpoint.smAndUp" align-center justify-center v-for="{title,icon} in items" :key="title">
          <v-img :src="icon" class="whos-need-icon" contain/>
          <div v-html="title" class="whos-need-title"/>
        </v-layout>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class WhosNeed extends Vue {
  items: {title:string,icon: string}[] = [
    {title:'Веб-мастера',icon: require('~/assets/images/webtools/whosNeed/webmaster.svg')},
    {title:'Владельцы сайтов и&nbsp;приложений',icon: require('@/assets/images/webtools/whosNeed/ouner.svg')},
    {title:'SMM маркетологи и&nbsp;блогеры',icon: require('@/assets/images/webtools/whosNeed/smm.svg')},
    {title:'SEO специалисты и трафик менеджеры',icon: require('@/assets/images/webtools/whosNeed/seo.svg')},
    {title:'Арбитражные команды',icon: require('@/assets/images/webtools/whosNeed/teams.svg')},
  ]
}
</script>

<style lang="scss">
.whos-need {
  padding: 100px 0 80px;
  position: relative;
  @media (max-width: $w-sm){
    padding: 42px 0;
  }
  .items-wrapper {
    display: grid;
    grid-template-columns: repeat(5,minmax(min(200px, 100%),1fr));
    grid-auto-rows: 218px;
    grid-gap: 30px;
    padding: 30px 0;
    @media (max-width: $w-sm){
      grid-template-columns: repeat(2,minmax(min(200px, 100%),1fr));
      grid-auto-rows: 200px;
      grid-gap: 15px;
    }
    @media (max-width: $w-xs){
      grid-template-columns: repeat(2,minmax(min(150px, 100%),1fr));
      grid-auto-rows: 150px;
    }
    .whos-need-item {
      padding: 20px;
      text-align: center;
      box-shadow: 0px 2px 14px rgba(114, 69, 255, 0.12);
      border-radius: 5px;
      transition: .3s;
      &:hover {
        box-shadow: 0px 2px 14px rgba(114, 69, 255, 0.25) !important;
      }
      .whos-need-icon {
        height: 70px;
        @media (max-width: $w-sm){
          height: 45px;
        }
      }
      .whos-need-title {
        font-size: 18px;
        margin-top: 24px;
        max-width: 200px;
        color: #7245FF;
        font-weight: bold;
        font-family: Montserrat, sans-serif;
        @media (max-width: $w-sm){
          font-size: 14px;
          margin-top: 10px;
        }
        @media (max-width: $w-xs){
          margin-left: 25px;
          text-align: left;
        }
      }
    }
  }
}
</style>
