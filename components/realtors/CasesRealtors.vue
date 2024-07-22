<template>
  <section style="background: #F9F9FC;" :style="{padding: br.lgAndUp ? '48px 0 64px' : '20px 0 20px'}">
    <div class="promo-container generic-container-1260">
      <h2 class="promo-cases-title" v-html="'Кейсы'"/>
      <div class="promo-cases" v-if="br.smAndUp">
        <Case v-for="agent in items" :key="agent.name" :agent="agent"/>
      </div>
      <div v-else style="min-height: 360px">
        <div class="promo-cases">
          <v-slide-x-transition group leave-absolute mode="out-in">
            <Case v-for="(agent,index) in items" v-if="currentSlide === index" :key="agent.name"  :agent="agent"/>
          </v-slide-x-transition>
        </div>
        <div
          style="width: 100%"
          class="mt-5"
        >
          <div class="cases-carousel-btn-container">
            <div
              @click="prevSlide"
              class="cases-carousel-btn"
              :class="{ disabled: currentSlide === 0 }"
            >
              <img
                src="@/assets/images/bl2/arrow-dir.svg"
                alt="arrow-left"
              />
            </div>
            <div
              @click="nextSlide"
              class="cases-carousel-btn"
              :class="{ disabled: isForwardDisabled }"
            >
              <img
                style="transform: rotate(180deg)"
                src="@/assets/images/bl2/arrow-dir.svg"
                alt="arrow-right"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import Case from "~/components/realtors/CaseRealtors.vue";

@Component({
  components: {Case}
})
export default class CasesRealtors extends Vue {
  items = [
    {
      avatar: require('@/assets/images/realtors/cases/Case1.webp'),
      name: 'Мария',
      role: 'риэлтор',
      town: 'г. Краснодар',
      polis: 10,
      profit: 41_140,
    },
    {
      avatar: require('@/assets/images/realtors/cases/Case2.webp'),
      name: 'Максим',
      role: 'риэлтор',
      town: 'г. Санкт-Петербург',
      polis: 22,
      profit: 119_790,
    },
    {
      avatar: require('@/assets/images/realtors/cases/Case3.webp'),
      name: 'Елена',
      role: 'риэлтор',
      town: 'г. Екатеринбург',
      polis: 17,
      profit: 58_806,
    },
    {
      avatar: require('@/assets/images/realtors/cases/Case4.webp'),
      name: 'Алексей',
      role: 'ипотечный брокер',
      town: 'г. Москва',
      polis: 28,
      profit: 196_020,
    },
  ]

  currentSlide = 0;

  prevSlide(){
    if (this.currentSlide === 0 ) return
    this.currentSlide -= 1
  }
  nextSlide(){
    if (this.isForwardDisabled) return
    this.currentSlide += 1
  }

  get isForwardDisabled(){
    return this.currentSlide === this.items.length - 1
  }

  get br(){
    return this.$vuetify.breakpoint;
  }

}
</script>

<style lang="scss">
.promo-container {
  position: relative;

  .promo-cases-title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 35px;
    line-height: 43px;
    text-align: center;
    @media (max-width: $w-md){
      font-size: 28px;
      line-height: 34px;
    }
    @media (max-width: $w-sm){
      font-size: 19px;
      line-height: 23px;
    }
    &:after {
      content: url("~@/assets/images/realtors/cases/TriangleRealtors.svg");
      position: absolute;
      right: 0;
      top: -3%;
      z-index: 0;
      @media (max-width: $w-md) {
        display: none;
      }
    }
    &:before {
      content: url("~@/assets/images/realtors/cases/TriangleRealtorTransporent.svg");
      position: absolute;
      left: 15%;
      top: -3%;
      z-index: 0;
      @media (max-width: $w-md) {
        display: none;
      }
    }
  }
  .promo-cases {
    margin-top: 45px;
    display: flex;
    justify-content: space-between;
    @media (max-width: $w-md){
      flex-direction: column;
      margin: 0 auto;
      padding: 20px;
    }
  }
  .promo-case {
    flex: 0 1 280px;
    background: #FFFFFF;
    box-shadow: 0 5px 25px rgba(203, 207, 216, 0.28);
    border-radius: 9px;
    padding: 21px 26px 17px 26px;
    transition: .3s;
    cursor: pointer;

    @media (max-width: $w-md){
      flex-basis: auto;
      padding: 21px 26px 17px 26px;
    }
    @media (max-width: $w-xs){
      padding: 21px 26px 17px 26px;
    }

    &:hover {
      box-shadow: 0 5px 25px rgba(163, 86, 243, 0.28);
    }
    &:not(:last-child){
      margin-right: 22px;
      @media (max-width: $w-md){
        margin: 0 0 20px 0;
      }
    }
    &-avatar {
      margin-right: 22px;
    }
    &-name {
      font-family: 'Roboto',sans-serif;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;

    }
    &-role {
      font-family: 'Roboto', sans-serif;
      margin-bottom: 4px;
      font-weight: 500;
      font-size: 12px;
      line-height: 21px;
      color: #7D8D93;
      @media (max-width: $w-md){
        font-size: 10px;
        line-height: 20px;
      }
      @media (max-width: $w-sm){
        font-size: 10px;
        line-height: 18px;
      }
    }
    &-lines {
      margin-top: 44px;
      @media (max-width: $w-md){
        margin-top: 20px;
      }
    }
    &-line {
      font-family: 'Roboto',sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 22px;
      line-height: 26px;
      >p{
        font-size: 12px;
        line-height: 14px;
      }
    }
    &-town{
      font-family: 'Roboto',sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
      color: #9065FD;
      margin-top: 11px;
    }
    &-profit {
      margin-top: 27px;
      @media (max-width: $w-md){
        margin-top: 16px;
      }
    }
    &-profit-title {
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      color: #7D8D93;
    }
    &-profit-desc {
      margin-top: 10px;
      font-family: 'Montserrat',sans-serif;
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
      color: #A356F3;
      @media (max-width: $w-sm){
        margin-top: unset;
      }
    }
  }
  .cases-carousel-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 2px 14px rgba(214, 214, 214, 0.33);
    transition: box-shadow 150ms;
    img {
      width: 7px;
    }
    &:not(.disabled) {
      cursor: pointer;
      box-shadow: 0 2px 14px rgba(149, 75, 239, 0.26);
      &:hover {
        box-shadow: 0 2px 10px rgba(214, 214, 214, 0.53);
      }
      img {
        filter: grayscale(100%) brightness(100%) sepia(100%)
        hue-rotate(-150deg) saturate(500%) contrast(0.8);
      }
    }
  }
  .cases-carousel-btn-container {
    display: flex;
    justify-content: space-between;
    width: 90px;
    margin: 0 auto;
    max-width: 90px;
    @media (max-width: $w-sm) {
      width: 90px;
    }
  }
}
</style>

