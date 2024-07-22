<template>
  <div class="cpa-howStart" id="cpaHowStart">
    <div class="container">
      <h2 class="cpa-h2">Как начать?</h2>
      <img class="cpa-howStart-poliygon2" :src="require('@/assets/images/cpa/start/Polygon2.svg')" alt="">
      <div class="cpa-howStart-wrp">
        <div v-for="(el, i) in data" :key="el.title" class="cpa-howStart-it">
          <img class="cpa-howStart-it-img" :src="el.img" alt="">
          <div class="cpa-howStart-it-index">{{ i + 1 }}</div>
          <div class="cpa-howStart-info">
            <div class="cpa-howStart-title text-color1">{{ el.title }}</div>
            <div class="cpa-howStart-text">{{ el.text }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import {Component, Vue} from "vue-property-decorator";

@Component
export default class HowStart extends Vue {
  data = [
    {
      img: require('@/assets/images/cpa/start/startimg1.webp'),
      title: 'Регистрация',
      text: 'Регистрация займёт не больше минуты, необходимо заполнить пару полей'
    },
    {
      img: require('@/assets/images/cpa/start/startimg2.webp'),
      title: 'Личный affiliate-менеджер',
      text: 'После регистрации с тобой свяжется менеджер и предоставит доступ в Личный кабинет'
    },
    {
      img: require('@/assets/images/cpa/start/startimg3.webp'),
      title: 'Начало работы',
      text: 'Выбирай, пробуй и экспериментируй, в беде не оставим и подскажем ТОПовые офферы'
    },
    {
      img: require('@/assets/images/cpa/start/startimg4.webp'),
      title: 'Получай профит',
      text: 'Платим досрочно по большинству офферов на эксклюзивных условиях, все подробности у менеджера'
    },
  ]
}
</script>

<style lang="scss">
.cpa-howStart {
  position: relative;
  padding-top: 50px;

  &-wrp {
    margin-top: 100px;
    @media (max-width: 900px) {
      display: flex;
      flex-direction: column;
      grid-gap: 160px;
    }
    @media (max-width: 600px) {
      margin-top: 20px;
      grid-gap: 120px;
    }
  }

  &-poliygon2 {
    position: absolute;
    left: 38%;
    bottom: 120px;
    @media (max-width: 600px) {
      display: none;
    }

  }

  &-title {
    color: #C66BFF;
    font-family: 'EuropeExt', sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.1;
    text-transform: uppercase;
    margin-bottom: 38px;
    @media (max-width: 900px) {
      margin-bottom: 28px;
    }
    @media (max-width: 600px) {
      font-size: 16px;
      margin-bottom: 13px;
    }
  }

  &-text {
    font-size: 17px;
    line-height: 1.1;
    opacity: 0.7;
    padding-left: 27px;
    @media (max-width: 600px) {
      font-size: 14px;
    }
  }

  &-info {
    max-width: 295px;
    margin: 0 95px 143px 0;
    @media (max-width: 900px) {
      margin: 0 0 138px 0 !important;
    }
    @media (max-width: 600px) {
      margin: 0 10px 90px 10px !important;
      max-width: 265px;
    }
  }

  &-it {
    position: relative;
    min-height: 450px;
    width: 700px;
    @media (max-width: 1200px) {
      width: 600px;
    }
    @media (max-width: 900px) {
      width: 100%;
      margin: 0 0 0 0 !important;
    }
    @media (max-width: 600px) {
      min-height: 360px;
    }

    &-img {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      @media (max-width: 1200px) {
        transform: scale(0.72);
        transform-origin: top;
      }
      @media (max-width: 600px) {
        transform: scale(0.6);
        transform-origin: top;
      }
    }

    &-index {
      position: absolute;
      top: 60px;
      right: 60px;
      width: 84px;
      font-size: 31px;
      font-weight: 800;
      height: 81px;
      padding: 2px 0 0 9px;
      background: url("@/assets/images/cpa/start/Polygon.svg") center/contain no-repeat;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    &:nth-child(1) .cpa-howStart-it-img {
      top: -100px;
      left: -156px;
      @media (max-width: 900px) {
        left: initial;
        right: 0;
        top: -132px;
      }
      @media (max-width: 600px) {
        right: -126px;
        top: -50px;
      }
    }

    &:nth-child(2) {
      margin-top: -62px;

      .cpa-howStart-it-img {
        top: -464px;
        right: -76px;
        left: initial;
        @media (max-width: 1200px) {
          top: -325px;
          right: -190px;
        }
        @media (max-width: 900px) {
          top: -236px;
          right: -109px;
        }
        @media (max-width: 600px) {
          top: -168px;
          right: -222px;
        }
      }

      .cpa-howStart-it-index {
        right: initial;
        left: 130px;
        top: 54px;
      }

      .cpa-howStart-info {
        margin: 13px 94px 113px 171px;
      }
    }

    &:nth-child(3) {
      margin: -151px 20px 4px -98px;

      .cpa-howStart-it-img {
        top: -243px;
        left: 16px;
        @media (max-width: 600px) {
          top: -61px;
          left: -244px;
        }
      }
      @media (max-width: 600px) {
        margin-top: -80px !important;
      }

      .cpa-howStart-it-index {
        transform: translate(39px, 5px);
      }

      .cpa-howStart-info {
        margin: 0 85px 127px 0;
      }
    }

    &:nth-child(4) {
      margin: -232px 0px 4px auto;

      .cpa-howStart-it-img {
        top: -215px;
        left: initial;
        right: -81px;
        @media (max-width: 900px) {
          top: -300px;
        }
        @media (max-width: 600px) {
          top: -99px;
          transform: scale(0.5);
          right: -227px;
        }
      }
      @media (max-width: 600px) {
        margin-top: -115px !important;
      }

      .cpa-howStart-it-index {
        right: initial;
        left: 152px;
        top: 55px;
      }

      .cpa-howStart-info {
        margin: 0 23px 114px 170px;
        @media (max-width: 600px) {
          margin: 0 11px 66px 49px !important;
        }
      }
    }

    &:nth-child(2n - 1) {
      background: url("@/assets/images/cpa/start/bg1.svg") 100% 25px/477px 450px no-repeat;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      @media (max-width: 900px) {
        background-position: 50% 25px;
        justify-content: center;
        .cpa-howStart-it-index {
          right: initial;
          left: 50%;
          margin-left: 100px;
          top: 80px;
          transform: scale(0.9);
        }
      }
      @media (max-width: 600px) {
        background-size: 320px 473px;
        background-position: 50% 0px;
        .cpa-howStart-it-index {
          margin-left: 60px;
          top: 120px;
          transform: scale(0.8);
        }
      }
    }

    &:nth-child(2n) {
      margin-left: auto;
      background: url("@/assets/images/cpa/start/bg2.svg") 78px 0/491px 473px no-repeat;
      display: flex;
      align-items: flex-end;
      @media (max-width: 900px) {
        justify-content: center;
        background-position: 50% -15px;
        background-size: 459px 473px;

        .cpa-howStart-it-index {
          right: initial;
          left: 50%;
          margin-left: -200px;
          top: 40px;
          transform: scale(0.9);
        }
      }
      @media (max-width: 600px) {
        background-size: 320px 473px;
        background-position: 50% 0px;
        .cpa-howStart-it-index {
          margin-left: -120px;
          top: 80px;
          transform: scale(0.8);
        }
      }
    }
  }

}
</style>
