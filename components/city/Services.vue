<template>
  <div class="services-bg">
    <div class="generic-container-1260 city-container">
      <h2 class="services-title" v-text="`Агентам в ${city.title} доступно к страхованию:`"/>
      <v-layout
        :justify-space-between="$vuetify.breakpoint.lgAndUp"
        :justify-center="$vuetify.breakpoint.mdAndDown"
        :wrap="$vuetify.breakpoint.mdAndDown"
        :column="$vuetify.breakpoint.xs"
        :align-center="$vuetify.breakpoint.xs"
      >
          <div class="services-item" v-for="(item,i) in city.services" :key="i">
            <v-img :src="getIcon(i)" alt="logo" class="item-logo" contain/>
            <p class="item-description">
              <span class="description-title" :style="{color: item.color}" style="font-weight: bold" v-text="item.title"/>
              <span class="description-subtitle" v-text="item.description"/>
            </p>
          </div>
      </v-layout>
      <v-layout align-center class="pampadu-description" :column="$vuetify.breakpoint.smAndDown">
          <v-img class="description-img" contain :src="require('@/assets/images/city/services/man.png')" alt="pampadu-idea"/>
          <div class="description-text" v-html="city.description"/>
      </v-layout>
    </div>
  </div>
</template>
<script lang="ts">
import {Vue, Component, Prop} from "vue-property-decorator";
import {CityModel} from "~/model/entities/city";

@Component
export default class Services extends Vue {
  @Prop(Object) city: CityModel;

  getIcon(index){
    if (index === 0) return require("~/assets/images/city/services/car.jpg")
    else if (index === 1) return require("~/assets/images/city/services/key.jpg")
    return require("~/assets/images/city/services/home.jpg")
  }
}
</script>
<style lang="scss">
.services-bg {
  background: #F2F5FF;
  padding: 30px 0;
  .services-title {
    text-align: center;
    font-weight: bold;
    margin: 15px 0;
    font-size: 35px;
    font-family: Montserrat, sans-serif;
    @media (max-width: $w-md){
      font-size: 19px;
      line-height: 23px;
      margin: 10px 0;
    }
  }
  .services-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: #FFFFFF;
    font-family: Montserrat, sans-serif;
    padding: 15px;
    margin: 11px;
    flex: 1 1 33.333%;
    box-shadow: 0 5px 25px rgba(203, 207, 216, 0.28);
    border-radius: 12px;
    @media (max-width: $w-md){
      max-width: 280px;
    }
    @media (max-width: $w-sm){
      flex: 1 1 280px;
    }
    @media (max-width: $w-xs){
      margin-left: 0px;
      margin-right: 0px;
    }
    .item-logo {
      width: 160px;
      height: 160px;
      @media (max-width: $w-sm) {
        width: 120px;
        height: 120px;
      }
    }
    .item-description {
      display: flex;
      flex-direction: column;
      max-width: 320px;
      .description-title {
        font-size: 35px;
        color: #4578FF;
        margin: 10px 0;
        @media (max-width: $w-md) {
          font-size: 28px;
        }
      }
      .description-subtitle {
        font-size: 20px;
        font-weight: bold;
        @media (max-width: $w-md) {
          font-size: 14px;
          line-height: 19px;
        }
      }
    }
  }
  .pampadu-description {
    margin: 80px 100px;
    @media (max-width: $w-md){
      margin: 40px 50px;

    }
    @media (max-width: $w-sm){
      margin: 0
    }
    .description-img {
      margin-right: 40px;
      width: 176px;
      height: 176px;
      @media (max-width: $w-sm){
        margin: 25px 0;
      }
    }
    .description-text {
      max-width: 750px;
      font-size: 20px;
      @media (max-width: $w-md) {
        font-size: 14px;
      }
      @media (max-width: $w-sm){
        max-width: 500px;
        text-align: center;
      }
    }
  }
}
</style>
