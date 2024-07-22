<template>
  <div>
    <div class="giftBanner">
      <img src="@/assets/images/universe-gift/shapes/shape1.webp" alt="" class="shapes v1">
      <h1 class="h1"
          v-html="'<span>Вселенная подарков на&nbsp;Пампаду!</span> <br>Продавай и приглашай в Июле, Августе <br>и&nbsp;<span>выигрывай ценную технику</span>'"></h1>
      <p class="subhead">В розыгрыше участвуют страховые, банковские продукты и пользователи реферальной программы</p>
      <div class="slider-gift" ref="sliderGift">
        <div class="slider-gift-line" ref="sliderGiftLine" :class="width ? 'visible' : ''">
          <div v-for="(image, index) in images"
               :key="index"
               class="slider-gift-item"
               :class="{
                 'active': count === index - (mediaSliderInfo.count),
                 'sideActive': count === index - (mediaSliderInfo.count - 1) || count === index - (mediaSliderInfo.count + 1),
                 'sideActiveWrp': count === index - (mediaSliderInfo.count - 2)  || count === index - (mediaSliderInfo.count + 2),
               }"
               :style="'width:' + (100 / mediaSliderInfo.sliderPerView + '%')"
          >
            <img
              v-if="index > 1"
              :src="image.img"
              :alt="image.img"
              :style="{width: image.width + 'px' || '', height: image.height + 'px' || ''}"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="gift">
      <img src="@/assets/images/universe-gift/shapes/shape2.webp" alt="" class="shapes v2">
      <div class="gift-wrp">
        <div class="slider-gift-arrow-left slider-gift-arrow"
             :class="count === (2 - mediaSliderInfo.count) ? 'disabled' : ''" @click="scrollLeft">
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 13L7 7L1 1" stroke="#4578FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="gift-box mx-auto mb-3">
          <span>Свыше</span>
          <span>35</span>
          <span>призов</span>
        </div>
        <div class="slider-gift-arrow-right slider-gift-arrow"
             :class="count === images.length - (1 + mediaSliderInfo.count) ? 'disabled' : ''"
             @click="scrollRight">
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 13L7 7L1 1" stroke="#4578FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>

      <div class="gift-subtitle">ждут своих победителей</div>
      <Timer class="mx-auto mt-4"/>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Ref, Vue} from "vue-property-decorator";
import Timer from "~/components/univerese-gift/Timer";

/**
 * Данные для слайдера c учетом mediaTypes.
 * @count {number} - порядковый номер слайда (index), который будет показываться первым.
 * @sliderPerView {number} - Количество видимых слайдов за раз.
 */
export interface mediaSliderInfoTypes {
  count: number;
  sliderPerView: number;
}
enum mediaTypes {
  Table = 'table',
  Mobile = 'mobile',
  Desktop = 'desktop'
}

@Component({
  components: {Timer}
})
export default class Banner extends Vue {
  private images = [
    {img: require('@/assets/images/universe-gift/sliderImgs/sliderImg1.webp'), width: 200, height: 200}, // Два элемента для отступа
    {img: require('@/assets/images/universe-gift/sliderImgs/sliderImg1.webp'), width: 200, height: 200}, // Два элемента для отступа

    {img: require('@/assets/images/universe-gift/sliderImgs/sliderImg1.webp'), width: 213, height: 247},
    {img: require('@/assets/images/universe-gift/sliderImgs/sliderImg2.webp'), width: 223, height: 267},
    {img: require('@/assets/images/universe-gift/sliderImgs/sliderImg3.webp'), width: 200, height: 245},
    {img: require('@/assets/images/universe-gift/sliderImgs/sliderImg4.webp'), width: 237, height: 237},
    {img: require('@/assets/images/universe-gift/sliderImgs/sliderImg5.webp'), width: 270, height: 237},
    {img: require('@/assets/images/universe-gift/leaders/leaders3.webp'), width: 250, height: 250},
    {img: require('@/assets/images/universe-gift/leaders/leaders6.webp'), width: 200, height: 200},
    {img: require('@/assets/images/universe-gift/leaders/leaders7.webp'), width: 215, height: 180},
    {img: require('@/assets/images/universe-gift/leaders/leaders8.webp'), width: 200, height: 200},
    {img: require('@/assets/images/universe-gift/leaders/leaders9.webp'), width: 220, height: 220},
    {img: require('@/assets/images/universe-gift/leaders/leaders10.webp'), width: 240, height: 240},
    {img: require('@/assets/images/universe-gift/leaders/leaders11.webp'), width: 200, height: 200},
    {img: require('@/assets/images/universe-gift/leaders/leaders12.webp'), width: 240, height: 240},
    {img: require('@/assets/images/universe-gift/leaders/leaders13.webp'), width: 220, height: 220},
  ];

  private count: number = this.mediaSliderInfo.count;
  private width: number = 0;

  @Ref() sliderGift!: HTMLDivElement;
  @Ref() sliderGiftLine!: HTMLDivElement;

  mediaTypeSlider: mediaTypes = mediaTypes.Desktop

  get mediaSliderInfo(): mediaSliderInfoTypes {
    switch (this.mediaTypeSlider) {
      case mediaTypes.Mobile:
        return {
          count: 0,
          sliderPerView: 1,
        }
      case mediaTypes.Table:
        return {
          count: 1,
          sliderPerView: 3,
        }
      default:
        return {
          count: 2,
          sliderPerView: 5,
        }
    }
  }

  mounted() {
    this.init();
    window.addEventListener('resize', this.init);
  }

  beforeDestroy() {
    window.removeEventListener('resize', this.init);
  }

  init() {
    if (window.innerWidth < 1300 && window.innerWidth > 850) {
      this.mediaTypeSlider = mediaTypes.Table
    } else if (window.innerWidth <= 850) {
      this.mediaTypeSlider = mediaTypes.Mobile
    } else {
      this.mediaTypeSlider = mediaTypes.Desktop
    }

    this.width = this.sliderGift.offsetWidth / this.mediaSliderInfo.sliderPerView; // 20% of the screen width
    this.sliderGiftLine.style.width = `${this.width * this.images.length}px`;
    this.rollSlider();
  }

  scrollLeft() {
    this.count--;
    this.rollSlider();
  }

  scrollRight() {
    this.count++;
    this.rollSlider();
  }

  rollSlider() {
    this.sliderGiftLine.style.transform = `translate(-${this.count * this.width}px)`;
  }
}
</script>

<style lang="scss">

.slider-gift {
  background: transparent;
  max-width: 100%;
  min-height: 260px;
  width: 100%;
  margin: 5px auto 110px;
  overflow: visible;
  @media (max-width: 850px) {
    //margin-bottom: 80px;
  }
}

.slider-gift-arrow {
  width: 64px;
  height: 64px;
  flex-shrink: 0;
  border-radius: 64px;
  background: #FFF;
  cursor: pointer;
  box-shadow: 0px 2px 14px 0px rgba(114, 69, 255, 0.24);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .2s;
  @media (max-width: $w-md) {
    width: 52px;
    height: 52px;
  }
  &-left {
    svg {
      transform: rotate(180deg);
    }
  }

  &.disabled {
    opacity: 0.5;
    pointer-events: none;
  }
  &:hover{
    background: #eefcff;
    transform: scale(1.035);
  }
}

.slider-gift-line {
  display: flex;
  position: relative;
  left: 0;
  opacity: 0;
  &.visible{
    opacity: 1;
    transition: all ease 1s;
  }
}

.slider-gift-item {
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .7s ease-in-out;
  transform: scale(0.4) translateY(-800px);
  opacity: 0;
  img{
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
  &.active {
    transform: scale(1);
    opacity: 1;
  }

  &.sideActive {
    transform: scale(0.83) translateY(-55px);
    opacity: 1;
    @media (max-width: 1500px) {
      transform: scale(0.76) translateY(-45px);
    }
  }

  &.sideActiveWrp {
    transform: scale(0.66) translateY(-250px);
    opacity: 1;
  }
}

.giftBanner {
  position: relative;
  background: url('@/assets/images/universe-gift/sliderImgs/sliderBg.webp') center bottom/cover no-repeat;
  height: 607px;
  padding-top: 45px;
  text-align: center;
  display: flex;
  flex-direction: column;

  h1 {
    max-width: 866px;
    margin-left: auto;
    margin-right: auto;

    span {
      color: #9065FD;
    }
  }


  .subhead {
    flex-grow: 1;
    max-width: 500px;
    margin: 12px auto;
  }

  @media (max-width: 450px) {
    height: initial;
    background: url('@/assets/images/universe-gift/sliderImgs/sliderBg-mob.webp') center bottom/cover no-repeat;
    .h1, .h2, .subhead {
      padding: 0 15px;

      br:nth-child(3) {
        display: none;
      }

      .slider-gift {
        margin-bottom: 90px;
      }
    }
  }
}


.gift {
  position: relative;
  margin-top: -130px;
  font-family: 'Montserrat', sans-serif;

  &-wrp {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 435px;
    width: 100%;
    position: relative;
    z-index: 5;
    margin: 0 auto;
    @media (max-width: 500px) {
      max-width: calc(100vw - 40px);

    }
  }

  &-subtitle {
    text-align: center;
    font-size: 23px;
    font-weight: 600;
    @media (max-width: $w-md) {
      font-size: 19px;
    }
  }

  &-box {
    background: #4578FF;
    border-radius: 50%;
    width: 160px;
    height: 160px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #FFF;
    font-size: 19px;
    font-style: normal;
    font-weight: 600;
    line-height: 40px;

    span:nth-child(2) {
      font-size: 70px;
      line-height: 0.7;
      font-weight: 800;
    }
    @media (max-width: $w-md) {
      font-size: 16px;
      width: 137px;
      height: 137px;
      span:nth-child(2){
        font-size: 60px;
      }
    }
  }
}
</style>
