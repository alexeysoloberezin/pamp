<template>
  <div style="background: #F9F9FC;" :style="{padding: br.lgAndUp ? '48px 0 64px' : '35px 0 25px'}">
    <div class="promo-container">
      <h2 class="promo-cases-title" v-html="'Кейсы наших агентов'"/>
      <div class="promo-cases" v-if="br.smAndUp">
        <Case v-for="agent in items" :key="agent.name" :agent="agent"/>
      </div>
      <div v-else style="min-height: 410px">
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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import Case from "~/components/promo/Case.vue";

@Component({
  components: {Case}
})
export default class Cases extends Vue {
  items = [
    {
      avatar: require('@/assets/images/promo/cases/case3.jpg'),
      name: 'Алексей Шагов',
      role: 'Ипотечный брокер',
      company: 'Росгосстрах',
      bank: 'ВТБ',
      polisType: 'Жизнь, имущество, титул',
      credit: 26_800_000,
      polisPrice: 262_857,
      profit: 20_416,
    },
    {
      avatar: require('@/assets/images/promo/cases/case2.jpg'),
      name: 'Александр Иванов',
      role: 'Риелтор',
      company: 'Росгосстрах',
      bank: 'ВТБ',
      polisType: 'Жизнь, имущество, дом',
      credit: 15_616_000,
      polisPrice: 226_599,
      profit: 16_994,
    },
    {
      avatar: require('@/assets/images/promo/cases/case1.jpg'),
      name: 'Ирина Мамонтова',
      role: 'Страховой агент',
      company: 'Ренессанс',
      bank: 'Сбербанк',
      polisType: 'Жизнь, имущества',
      credit: 31_000_000,
      polisPrice: 580_000,
      profit: 168_000,
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
  }
  .promo-cases {
    margin-top: 45px;
    display: flex;
    justify-content: space-between;
    @media (max-width: $w-md){
      flex-direction: column;
      max-width: 450px;
      margin: 25px auto 0;
    }
  }
  .promo-case {
    flex: 0 1 372px;
    background: #FFFFFF;
    box-shadow: 0 5px 25px rgba(203, 207, 216, 0.28);
    border-radius: 9px;
    padding: 36px 59px 44px 24px;
    transition: .3s;
    cursor: pointer;

    @media (max-width: $w-md){
      flex-basis: auto;
      padding: 30px 59px 38px 24px;
    }
    @media (max-width: $w-xs){
      padding: 30px 20px 38px 24px;
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
      margin-right: 19px;
    }
    &-name {
      font-family: 'Montserrat',sans-serif;
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
      @media (max-width: $w-md){
        font-size: 17px;
        line-height: 20px;
      }
      @media (max-width: $w-sm){
        font-size: 15px;
        line-height: 18px;
      }
    }
    &-role {
      margin-top: 4px;
      font-weight: 400;
      font-size: 18px;
      line-height: 21px;
      color: #7D8D93;
      @media (max-width: $w-md){
        font-size: 17px;
        line-height: 20px;
      }
      @media (max-width: $w-sm){
        font-size: 15px;
        line-height: 18px;
      }
    }
    &-lines {
      margin-top: 15px;
    }
    &-line {
      font-size: 18px;
      line-height: 21px;
      @media (max-width: $w-md){
        font-size: 17px;
        line-height: 20px;
      }
      @media (max-width: $w-sm){
        font-size: 15px;
        line-height: 18px;
      }
      &:not(:first-child){
        margin-top: 10px;
      }
    }
    &-profit {
      margin-top: 42px;
      @media (max-width: $w-md){
        margin-top: 30px;
      }
      @media (max-width: $w-sm){
        margin-top: 20px;
      }
    }
    &-profit-title {
      font-weight: 400;
      font-size: 18px;
      line-height: 21px;
      color: #7D8D93;
      @media (max-width: $w-md){
        font-size: 17px;
        line-height: 20px;
      }
      @media (max-width: $w-sm){
        font-size: 15px;
        line-height: 18px;
      }
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
    box-shadow: 0px 2px 14px rgba(214, 214, 214, 0.33);
    transition: box-shadow 150ms;
    img {
      width: 7px;
    }
    &:not(.disabled) {
      cursor: pointer;
      box-shadow: 0px 2px 14px rgba(149, 75, 239, 0.26);
      &:hover {
        box-shadow: 0px 2px 10px rgba(214, 214, 214, 0.53);
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
    margin: auto;
    width: 90px;
    margin: 0px auto;
    max-width: 90px;
    @media (max-width: $w-sm) {
      width: 90px;
    }
  }
}
</style>
