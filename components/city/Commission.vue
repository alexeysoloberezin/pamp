<template>
    <div class="commission">
      <v-layout :column="$vuetify.breakpoint.mdAndDown"  align-center class="generic-container-1260 city-container">
        <v-flex sm7>
          <div style="color: white;" class="heading">
            Узнайте, какая комиссия выплачивается агентам в {{ city.title }} при работе через единый кабинет Пампаду
          </div>
        </v-flex>
        <v-flex sm4>
          <v-layout  column :style="{marginTop: $vuetify.breakpoint.mdAndDown ? '25px' : ''}">
            <v-flex :align-self-center="$vuetify.breakpoint.smAndUp && $vuetify.breakpoint.mdAndDown" style="color: white">
              <zond-btn v-text="'Зарегистрироваться'" class="inverted" style="filter: drop-shadow(0px 2px 25px #6243BF)"/>
            </v-flex>
            <v-flex>
              <p class="subheading" style="margin-top: 25px" v-text="'Условия по каждому продукту и компании находятся в разделе «Моя комиссия»'"/>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </div>
</template>
<script lang="ts">
import {Vue, Component, Prop} from "vue-property-decorator";
import {CityModel} from "~/model/entities/city";
@Component
export default class Commission extends Vue {
  @Prop(Object) city: CityModel;
}
</script>
<style lang="scss">
.commission {
  background-color: #8e68ff;
  padding: 50px 0;
  position: relative;
  @media (max-width: $w-md) {
    padding: 25px 0;
  }
  &:before {
    content: url("~@/assets/images/city/commission/bg-left.svg");
    position: absolute;
    top: 15%;
    left: 20%;
    z-index: 0;
    @media (max-width: $w-md) {
      display: none;
    }
  }
  &:after {
    content: url("~@/assets/images/city/commission/bg-right.svg");
    position: absolute;
    right: 15%;
    top: 25%;
    z-index: 0;
    @media (max-width: $w-md) {
      display: none;
    }
  }
  .heading {
    font-size: 30px;
    font-weight: bold;
    font-family: Montserrat, sans-serif;
    max-width: 700px;
    @media (max-width: $w-md) {
      font-size: 19px;
      text-align: center;
      margin: 0 auto;
    }
    @media (max-width: $w-xs) {
      text-align: left;
    }
  }
  .subheading {
    font-size: 15px;
    color: white;
    @media (max-width: $w-md) {
      font-size: 13px;
      text-align: center;
    }
    @media (max-width: $w-xs) {
      text-align: left;
    }
  }
}
</style>
