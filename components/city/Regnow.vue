<template>
    <div class="regnow">
      <v-layout :column="$vuetify.breakpoint.mdAndDown" justify-space-between  align-center class="generic-container-1260 city-container">
        <v-flex sm10>
          <div style="color: white;" class="heading">
            А еще вам будет открыто страхование корпоративных клиентов и автопарков по всей России
          </div>
        </v-flex>
        <v-flex :align-self-start="$vuetify.breakpoint.xs">
          <zond-btn v-text="'Зарегистрироваться'" class="inverted" style="filter: drop-shadow(0px 2px 25px #6243BF)"/>
        </v-flex>
      </v-layout>
    </div>
</template>
<script lang="ts">
import {Vue, Component, Prop} from "vue-property-decorator";
import {CityModel} from "~/model/entities/city";

@Component
export default class Regnow extends Vue {
  @Prop(Object) city: CityModel;
}
</script>
<style lang="scss">
.regnow {
  background-color: #4578FF;
  padding: 50px 0;
  position: relative;
  @media (max-width: $w-md) {
    padding: 25px 0;
  }
  &:before {
    content: url("~@/assets/images/city/regnow/bg-left.svg");
    position: absolute;
    top: 15%;
    left: 20%;
    z-index: 0;
    @media (max-width: $w-md) {
      display: none;
    }
  }
  &:after {
    content: url("~@/assets/images/city/regnow/bg-right.svg");
    position: absolute;
    right: 15%;
    top: 5%;
    z-index: 0;
    @media (max-width: $w-md) {
      content: url("~@/assets/images/city/regnow/bg-right-sm.svg");
      top: unset;
      bottom: 10%;
      right: 5%;
    }
  }
  .city-container {
    .heading {
      font-size: 30px;
      font-weight: bold;
      font-family: Montserrat, sans-serif;
      @media (max-width: $w-md) {
        font-size: 19px;
        text-align: center;
        margin: 20px auto;
        max-width: 700px;
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
}

</style>
