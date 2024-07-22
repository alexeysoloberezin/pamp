<template>
  <section class="generic-container-1260">
    <div v-if="block.info" class="affiliate-program-about-info">
      <v-img :src="block.info.image"  />
      <h2 class="h2" v-html="block.info.description"/>
    </div>
    <div v-if="mfoOffers" class="affiliate-program-about-mfo">
      <div class="affiliate-program-about-mfo-img">
        <img src="@/assets/images/affiliate-program/mfo/mfoImg.webp" :alt="name" class="affiliate-program-about-img"/>
        <img v-if="block.logoOnImg" :src="block.logoOnImg" class="affiliate-program-about-mfo-logoImg" alt="">
      </div>
      <div class="affiliate-program-about-title">
        <h2 class="h2">О партнерской программе {{ name }}</h2>
        <div v-if="!block.description || block.description.length === 0" style="margin-top: 25px" class="affiliate-program-about-description">
          <p>Реклама офферов МФО разрешена через контекстную рекламу, SEO-трафик, реклама в социальной сетях, в приложениях и игр в соц.сетях, баннерная реклама, видеореклама, RichMedia.</p>
          <p> В то же время категорически недопустим спам в любых проявлениях: дорвейный трафик, мотивированный трафик, email и СМС спам, Tollbar и Push-трафик, реклама на бренд, партизанский маркетинг.</p>
        </div>
        <div v-else-if="Array.isArray(block.description)" style="margin-top: 25px" class="affiliate-program-about-description">
          <p v-for="desc in block.description" v-html="desc"></p>
        </div>
        <div v-else style="margin-top: 25px" class="affiliate-program-about-description" v-html="block.description">
        </div>
      </div>
    </div>
    <div v-else class="affiliate-program-about">
      <v-img :src="block.image" max-width="484" max-height="357" class="affiliate-program-about-img"/>
      <div class="affiliate-program-about-title">
        <h2 class="h2">О партнерской программе</h2>
        <h3 style="margin-top: 25px" class="affiliate-program-about-description" v-for="desc in block.description" v-html="desc"/>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator"
import {getProgram, ModelTypes} from "~/model/entities/affiliateProgramm";
import {ProgramUrl} from "~/urls";

@Component
export default class AboutProgram extends Vue {
  program: ProgramUrl = null;
  @Prop() bank: string;
  @Prop() type?: string;
  @Prop() name?: string;

  @Prop({ required: true }) block: {
    info?: {
      image: string;
      description: string;
    };
    image: string;
    description: string[];
  }

  get mfoOffers(): boolean {
    return this.type && (this.type === 'mfoOffer' || this.type === ModelTypes.MfoZoom)
  }
}
</script>

<style lang="scss">
.affiliate-program-about {
  display: flex;
  position: relative;

  &:before {
    position: absolute;
    content: url("@/assets/images/decor/rect1.svg");
    left: -200px;
    top: 60px;
  }
  &-mfo{
    display: grid;
    &-img{
      position: relative;
      max-height: 365px;
      .affiliate-program-about-img{
        min-height: 200px;
        height: 100%;
        width: 100%;
        object-fit: cover;
        @media (min-width: $w-sm) {
          min-height: 350px;
        }
      }
      &:after{
        content: '';
        width: 100%;
        height: 100%;
        border-radius: 8px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        background: rgba(0, 0, 0, 0.5);
      }

    }
    &-logoImg{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
      max-width: 75%;
      border-radius: 10px;
      padding: 10px;
      background: #fff;
      max-height: 75%;
    }
    @media (min-width: $w-sm){
      grid-template-columns: 1fr 1.25fr;
      grid-gap: 50px;
    }
  }
  &-img {
    filter: drop-shadow(0px 5px 38px rgba(114, 78, 251, 0.13));
    margin-right: 40px;
    border-radius: 8px;
    width: 100%;
  }

  @media (max-width: $w-md){
    &-img {
      margin-right: unset;
      max-width: 100% !important;
    }
    &-title {
      margin-top: 30px;
    }
  }
  &-info{
    margin: 70px 0 23px 0;
    padding: 40px;
    background-color: $bg-color;
    display: flex;
    align-items: center;
    @media (max-width: $w-md) {
      display: block;
      margin: 20px 0;
      padding: 20px;

    }
    >div:nth-child(1){
      max-width: 200px;
      margin-right: 63px;
      @media (max-width: $w-md) {
        margin: 20px auto;
        max-width: 150px;
      }
    }
  }
}
</style>
