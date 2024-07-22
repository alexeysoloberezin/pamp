<template>
  <section class="affiliate-program-intro" :class="block.classNames">
    <div :class="block.img ? 'generic-container-1260' :  'generic-container-big'">
      <div>
        <h1 style="font-weight: bold" class="affiliate-program-h2" :class="{'text-left' : br.smAndDown}" v-html="block.title"/>
        <h5 class="affiliate-program-intro-text" v-html="block.description"/>
        <zond-btn v-text="'Зарегистрироваться'"/>
      </div>
      <div v-if="block.imgBig" style="position: relative">
        <img :src="block.imgBig" style="max-width: 100%; max-height: 100%" alt="partner-logo"/>
      </div>
      <div v-else style="position: relative">
        <img :src="mfoOffers ? bg : bgMFOOffers" alt="affiliate-intro" style="width: 100%; max-width: 440px">
        <img class="affiliate-partner-logo" :src="block.img" alt="partner-logo"/>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator"
import {getProgram, ProgramModel} from "~/model/entities/affiliateProgramm";
import {ProgramUrl} from "~/urls";

@Component({})
export default class Intro extends Vue {

  @Prop() block: {
    img?: string;
    classNames?: string;
    imgBig?: string;
    bgMFOOffers?:string;
    title: string;
    description: string;
  };

  bg = require('images/affiliate-program/intro/bg.webp');
  bgMFOOffers = require('images/affiliate-program/mfo/mfo.webp');

  img = require('images/gazprom/intro.png')
  get br(){
    return this.$vuetify.breakpoint;
  }
  program: ProgramUrl = null;
  get mfoOffers(): boolean {
    const program = getProgram(this.program)
    return program && program.type === 'mfoOffer'
  }

}
</script>

<style lang="scss">
.affiliate-program-intro {
  background: linear-gradient(268.37deg, #F3F3F8 6.73%, rgba(249, 249, 252, 0.4) 98.42%);
  @media (max-width: $w-md) {
    padding: 0 25px;
  }
  .generic-container-1260 {
    display: grid;
    grid-template-columns: minmax(400px,504px) minmax(300px,515px);
    grid-gap: 40px;
    justify-content: space-between;
    padding: 44px 0;
  }
  .generic-container-big{
    display: grid;
    grid-template-columns: minmax(400px,504px) minmax(300px,700px);
    grid-gap: 20px;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
  }
  &-text {
    margin: 39px 0;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    max-width: 459px;
    width: 100%;
  }
  .affiliate-partner-logo {
    position: absolute;
    max-width: 128px;
    top: 145px;
    height: fit-content;
    background: #fff;
    padding: 5px;
    left: -75px;
    border-radius: 11px;
  }
  @media (max-width: $w-sm){
    .generic-container-1260, .generic-container-big  {
      grid-template-columns: minmax(auto,700px);
    }
    .affiliate-program-h2 {
      font-size: 23px;
      line-height: 30px;
    }
    .affiliate-partner-logo {
      left: 0;
      width: 81px;
    }
    &-text {
      margin: 8px 0 15px;
      font-size: 16px;
      line-height: 23px;
    }
  }
}
</style>
