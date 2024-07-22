<template>
  <div class="hr-indents" style="position: relative;">
    <DecoSpot
      :diameter="$vuetify.breakpoint.smAndDown ? 450 : 530"
      :top="0"
      :right="0"
      :style="
                `transform: translate(50%, ${
                    $vuetify.breakpoint.smAndDown ? '20%' : '50%'
                })`
            "
    />
    <DecoTri
      :tri="{
                top: '200px',
                left: '140px',
                color: '#EDF1FE',
                opacity: 1,
                rotate: '153deg',
                size: 28,
                hollow: true
            }"
    />
    <DecoTri
      :tri="{
                top: '124px',
                right: '300px',
                color: '#EDF1FE',
                opacity: 1,
                rotate: '-113deg',
                size: 28,
                hollow: true
            }"
    />
    <div
      class="hr-h1"
      v-text="'Как развиваемся?'"
      style="margin-bottom: 50px;"
    />
    <div class="glide jobs">
      <div class="glide__track" data-glide-el="track" style="overflow-x: hidden">
        <ul class="glide__slides">
          <li
            class="glide__slide"
            v-for="(slide, i) in slides"
            :key="i"
          >
            <div class="od-slide">
              <img class="od-slide-image" :src="slide.image"/>
              <div class="hr-od-card">
                <div
                  class="hr-od-card-title"
                  v-text="slide.year"
                />
                <div
                  class="hr-od-card-text"
                  v-text="slide.text"
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="od-carousel-btn-container" data-glide-el="controls">
        <div
          v-if="$vuetify.breakpoint.mdAndUp"
          data-glide-dir="<"
          class="carousel-btn"
        >
          <img src="@/assets/images/bl2/arrow-dir.svg" alt="arrow"/>
        </div>
        <div data-glide-el="controls[nav]" class="od-carousel-btns">
          <div
            class="od-carousel-btn glide__bullet"
            v-for="(slide, i) in slides"
            :data-glide-dir="`=${i}`"
            :key="i"
            v-text="slide.year"
          />
        </div>
        <div
          v-if="$vuetify.breakpoint.mdAndUp"
          data-glide-dir=">"
          class="carousel-btn"
        >
          <img
            style="transform:rotate(180deg)"
            src="@/assets/images/bl2/arrow-dir.svg"
            alt="arrow"
          />
        </div>
      </div>
      <div
        v-if="!$vuetify.breakpoint.mdAndUp"
        class="od-carousel-btn-container dirs"
        style="min-width: 100px;"
        data-glide-el="controls"
      >
        <div data-glide-dir="<" class="carousel-btn ignore-sm">
          <img src="@/assets/images/bl2/arrow-dir.svg" alt="arrow"/>
        </div>
        <div data-glide-dir=">" class="carousel-btn ignore-sm">
          <img
            style="transform:rotate(180deg)"
            src="@/assets/images/bl2/arrow-dir.svg"
            alt="arrow"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import Glide from "@glidejs/glide";

@Component
export default class OurDevelopment extends Vue {
  slides = [
    {
      year: 2017,
      image: require("@/assets/images/hr/develop/2017.png"),
      text: `Сергей Локтев открыл оффлайн страховое агентство «Авто-услуга».
                Начали учиться привлекать клиентов в онлайн через SEO.
            `
    },
    {
      year: 2018,
      image: require("@/assets/images/hr/develop/2018.png"),
      text: `Нанята команда разработчиков из 3-х человек.
                Вложены собственные средства.
                Также привлекли инвестиции от резидентов бизнес-клуба Игоря Рыбакова.
                Подтвердили модель через решение конкурентов.
            `
    },
    {
      year: 2019,
      image: require("@/assets/images/hr/develop/2019.png"),
      text: `Коллектив вырос до 9 человек.
                Сервис запущен в тестовом режиме.
                К концу года продали 50 000 полисов ОСАГО на 253 млн руб.
                Первая тысяча активных пользователей.
            `
    },
    {
      year: 2020,
      image: require("@/assets/images/hr/develop/2020.png"),
      text: `Команда выросла до 16 человек. Выручка 17 млн в месяц.
                Входим в топ-5 агрегаторов по продаже ОСАГО.
                Продали ОСАГО на 1,1 млрд руб.
                Привлекли инвестиции от Admitad Invest.
                Больше 2500 активных пользователей.
            `
    },
    {
      year: 2021,
      image: require("@/assets/images/hr/develop/2021.png"),
      text: `Вошли в топ-3 посредников в РФ
                по объему продаж обязательного автострахования.
                Подключаем все другие виды онлайн страхования.
                Работаем с вебмастерами.
            `
    }
  ];

  screenWidth: number | null = null;

  async mounted() {
    if (!process.client) return;
    window.addEventListener("resize", () => {
      this.screenWidth = document.body.clientWidth;
    });
    this.screenWidth = document.body.clientWidth;
    let carousel = new Glide(".glide.jobs", {
      type: "carousel",
      gap: 0,
      startAt: 4,
      perView: 1,
      autoplay: 0,
      peek: {before: -5, after: -5}
    });
    await this.$nextTick()
    carousel.mount();
  }
}
</script>
<style lang="scss">
.od-slide-image {
  margin: auto;
  max-width: 374px;
  max-height: 444px;
  padding: 0 20px;
  @media (max-width: $w-sm) {
    max-height: 360px;
    margin-top: 36px;
  }
}

.od-slide {
  display: flex;
  align-items: center;
  padding: 0 8px;
  @media (max-width: $w-sm) {
    // padding: 0 8px;
    margin: 0 12px;
    flex-flow: column;
    border: 3px solid #8e68ff;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 20px;
  }
}

.od-carousel-btn-container {
  justify-content: center;
  display: flex;
  margin-top: 80px;
  @media (max-width: $w-sm) {
    margin-top: 24px;
    &.dirs {
      margin-top: 24px;
      justify-content: space-between;
      margin-left: auto;
      margin-right: auto;
      width: 128px;
    }
  }
}

.od-carousel-btns {
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
  align-items: baseline;
  padding: 0 40px;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: $w-xs) {
    padding: 0 10px;
  }
}

.od-carousel-btn {
  cursor: pointer;
  padding: 0 14px;
  font-family: Montserrat;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #7d8d93;
  transition: font-size 0.3s, color 0.3s;

  &.glide__bullet--active {
    font-weight: bold;
    font-size: 25px;
    line-height: 30px;
    color: #8e68ff;
  }
}

.v-application .glide {
  ul,
  ol {
    padding-left: 0px;
  }
}

.hr-od-card {
  padding: 54px 20px 54px 40px;
  @media (max-width: $w-sm) {
    padding-top: 44px;
    padding-bottom: 44px;
  }
  @media (max-width: $w-xs) {
    padding-left: 10px;
    padding-right: 10px;
  }
  @media (min-width: $w-sm + 1px) {
    margin-left: auto;
    max-width: 600px;
    min-height: 290px;
    border: 3px solid #8e68ff;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 20px;
  }
  height: auto;
  box-sizing: border-box;

  &-title {
    font-family: Montserrat;
    font-weight: bold;
    font-size: 50px;
    line-height: 61px;
    color: #8e68ff;
    margin-bottom: 30px;
    @media (max-width: $w-sm) {
      font-size: 37px;
      line-height: 45px;
      margin-bottom: 14px;
    }
  }

  &-text {
    font-size: 20px;
    line-height: 23px;
    color: #000000;
    @media (max-width: $w-xs) {
      font-size: 18px;
      line-height: 22px;
    }
  }
}
</style>
