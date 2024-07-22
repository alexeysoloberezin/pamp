<template>
  <div class="webtools-regnow">
    <v-layout :column="$vuetify.breakpoint.mdAndDown"  align-center class="webtools-container">
      <v-flex>
        <div style="color: white;" class="heading">
          Если у вас уже есть аудитория, которой нужно страхование ипотеки или автомобиля, — начните зарабатывать с Пампаду уже сегодня!
        </div>
      </v-flex>
      <zond-btn v-text="'Зарегистрироваться'" class="inverted" :class="{'mt-5': $vuetify.breakpoint.mdAndDown,'mr-auto': $vuetify.breakpoint.xs}" style="filter: drop-shadow(0px 2px 25px #6243BF)"/>
    </v-layout>
  </div>
</template>
<script lang="ts">
import {Vue, Component, Prop} from "vue-property-decorator";

@Component
export default class Regnow extends Vue {
}
</script>
<style lang="scss">
.webtools-regnow {
  background-color: #8e68ff;
  padding: 50px 0;
  position: relative;
  @media (max-width: $w-md) {
    padding: 25px 0;
  }
  &:before {
    content: url("~@/assets/images/partnerPage/commission/bg-left.svg");
    position: absolute;
    top: 15%;
    left: 20%;
    z-index: 0;
    @media (max-width: $w-md) {
      display: none;
    }
  }
  &:after {
    content: url("~@/assets/images/partnerPage/commission/bg-right.svg");
    position: absolute;
    right: 15%;
    top: 5%;
    z-index: 0;
    @media (max-width: $w-md) {
      display: none;
    }
  }
  .heading {
    font-size: 30px;
    font-weight: 500;
    font-family: Montserrat, sans-serif;
    max-width: 825px;
    @media (max-width: $w-md) {
      font-size: 19px;
      text-align: center;
      margin: 0 auto;
    }
    @media (max-width: $w-xs) {
      text-align: left;
    }
  }
}
</style>
