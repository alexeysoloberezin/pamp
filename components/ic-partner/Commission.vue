<template>
  <div class="commission">
    <div class="generic-container-1260">
      <div class="commission-wrapper">
        <h2 style="color: white;" class="heading" v-html="heading"/>

        <div style="display: flex;flex-flow: column;justify-content: center"
             :style="{alignItems: $vuetify.breakpoint.lgAndUp ? 'flex-start' : 'center'}">
          <zond-btn v-text="'Зарегистрироваться в системе'" class="inverted" :class="{'mr-auto' : $vuetify.breakpoint.xs}"
                    style="color: white;filter: drop-shadow(0px 2px 25px #6243BF)"/>
          <p class="subheading" style="margin-top: 25px"
             v-text="subheading"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {Vue, Component, Prop} from "vue-property-decorator";
import {IcModel} from "~/model/entities/ic-partner";
import { IcUrl } from "~/urls";

@Component
export default class Commission extends Vue {
  @Prop(Object) ic: IcModel;


  get heading() {
    switch (this.ic.url) {
      case IcUrl.Reso:
        return `Узнайте, какая комиссия выплачивается агентам в «РЕСО» при работе через единый кабинет Пампаду`
      default:
        return `Узнайте, какая комиссия выплачивается агентам в «${this.ic.name}» при работе через единый кабинет Пампаду`
    }
  }

  get subheading() {
    switch (this.ic.url) {
      case IcUrl.Reso:
        return `Условия по каждому продукту находятся в разделе «Моя комиссия». Услуга расчета бесплатная`;
      default:
        return 'Условия по каждому продукту и компании находятся в разделе «Моя комиссия»';
    }
  }
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

  .commission-wrapper {
    display: grid;
    grid-template-columns: 1fr minmax(300px, 350px);
    grid-gap: 25px;
    align-items: center;
    @media (max-width: $w-md) {
      grid-template-columns: 1fr;
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
    margin-bottom: 0;
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
