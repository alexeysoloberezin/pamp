<template>
  <div class="cpa-arework" id="cpaAreWork">
    <div class="container">
      <h2 class="cpa-h2">Работаем
        <b class="text-color1 pl-3">в трех вертикалях</b>
      </h2>
      <div class="cpa-arework-grid">
        <div class="cpa-arework-item-hover">
          <div class="cpa-arework-item">
            <img class="cpa-arework-img" :src="require('@/assets/images/cpa/work1.webp')" alt="">
            <div class="cpa-arework-box">
              <a href="#" class="cpa-btn cpa-btn-fill">ФИНАНСЫ <span class="text-color3"> СРА</span></a>
              <div class="cpa-arework-val">до 22 000 р. за ЦД</div>
            </div>
            <ul v-if="isDesktop" class="cpa-arework-list">
              <li><span><b>1.</b></span> Собственный трекинг</li>
              <li><span><b>2.</b></span> Удобная статистика</li>
              <li><span><b>3.</b></span> Конструктор виджетов и витрин</li>
              <li><span><b>4.</b></span> Постбеки</li>
            </ul>
          </div>
        </div>
        <div class="cpa-arework-item-hover">
          <div class="cpa-arework-item">
            <img class="cpa-arework-img" :src="require('@/assets/images/cpa/work2.webp')" alt="">
            <div class="cpa-arework-box">
              <a href="#" class="cpa-btn cpa-btn-fill">Страхование <span class="text-color3"> REVSHARE</span></a>
              <div class="cpa-arework-val">до 60%</div>
            </div>
            <ul v-if="isDesktop" class="cpa-arework-list">
              <li><span><b>1.</b></span> Отсутствие холда</li>
              <li><span><b>2.</b></span> Виджеты и API</li>
              <li><span><b>3.</b></span> Удобная статистика</li>
              <li><span><b>4.</b></span> Личный кабинет</li>
            </ul>
          </div>
        </div>
        <div class="cpa-arework-item-hover">
          <div class="cpa-arework-item">
            <img class="cpa-arework-img" :src="require('@/assets/images/cpa/work3.webp')" alt="">
            <div class="cpa-arework-box">
              <a href="#" class="cpa-btn cpa-btn-fill">HR <span class="text-color3"> СРА</span></a>
              <div class="cpa-arework-val">до 14 000 р. за ЦД</div>
            </div>
            <ul v-if="isDesktop" class="cpa-arework-list">
              <li><span><b>1.</b></span> Эксклюзивные офферы</li>
              <li><span><b>2.</b></span> Собственный трекинг</li>
              <li><span><b>3.</b></span> Удобная статистика</li>
              <li><span><b>4.</b></span> Конструктор виджетов и витрин</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";

@Component
export default class AreWorking extends Vue {
  @Prop({required: true}) isDesktop: boolean;
}
</script>

<style lang="scss">
.cpa-arework {
  padding: 92px 0;
  background: linear-gradient(180deg, #1A1A31 0%, #1A1A31 100%);
  background: linear-gradient(180deg, color(display-p3 0.1031 0.1031 0.1875) 0%, color(display-p3 0.1031 0.1031 0.1875 / 0.00) 100%);
  @media (max-width: 900px) {
    padding-bottom: 0;
  }
  h2 {
    position: relative;
    z-index: 15;
  }

  &-bgitem1 {
    position: absolute;
    top: -158px;
    right: -79px;
    z-index: 1;
  }

  &-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: flex-end;
    transition: .3s;
    @media (max-width: 600px) {
        max-width: calc(100vw - 40px);
    }
  }

  &-grid {
    position: relative;
    display: grid;
    grid-gap: 34px;
    margin-top: 30px;
    @media (min-width: 1201px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  &-list {
    position: absolute !important;
    bottom: 70px;
    right: 60px;
    width: calc(100% - 100px);
    height: calc(100% - 100px);
    opacity: 0;
    transform: scaleX(-1) translateY(-40px);
    list-style: none;
    display: flex;
    justify-content: center;
    flex-direction: column;
    grid-gap: 43px;
    transition: .3s;

    li {
      font-size: 17px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      display: flex;
      grid-gap: 20px;
      align-items: center;

      span {
        position: relative;
        font-size: 20px;
        height: 40px;
        display: flex;
        width: 40px;
        align-items: center;
        justify-content: center;
        font-weight: 800;

        b {
          position: relative;
          z-index: 2;
        }

        &:after {
          content: '';
          top: 50%;
          display: block;
          z-index: -1;
          position: absolute;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 43px;
          background: url('@/assets/images/cpa/poltgon.webp') center/contain no-repeat;
          height: 43px;
        }
      }

      &:nth-child(2n) span:after {
        transform: translate(-50%, -50%) rotate(35deg);
      }
    }
  }

  &-item {
    position: relative;
    border-radius: 8px;
    z-index: 5;
    min-height: 428px;
    transition: .6s;
    background: #18182F;
    background: color(display-p3 0.0948 0.0948 0.1792);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    @media (max-width: 1000px) {
      min-height: 333px;
    }

    & > * {
      z-index: 3;
      position: relative;
    }

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      display: block;
      pointer-events: none;
      opacity: 0;
      z-index: 0;
      height: 100%;
      background: rgba(24, 24, 48, 0.28);
      background: color(display-p3 0.0941 0.0941 0.1804 / 0.28);
      backdrop-filter: blur(18px);
      border-radius: 8px;
      transition: .3s;
    }

    .cpa-btn {
      max-width: 85%;
      position: relative;
      z-index: 4;
      min-width: 265px;
    }

    &:nth-child(2) .cpa-arework-img {
      top: -10px;
      left: 54%;
    }

    @media (min-width: 901px) {
      &-hover:hover {
        .cpa-arework-item {
          transform: scaleX(-1);
          background: rgba(24, 24, 47, 0);

          &:after {
            opacity: 1;
          }
        }

        .cpa-arework-box {
          opacity: 0;
          transform: translateY(35px);
        }

        .cpa-arework-list {
          opacity: 1;
          transition-delay: .3s;
          transform: scaleX(-1);
        }

        .cpa-arework-img {
          top: -55%;
          opacity: 0.85;
          transform: scaleX(-1) translate(50%, 50%);
        }

        &:nth-child(1) {
          .cpa-arework-img {
            left: 97%;
            top: -45%;
          }
        }

        &:nth-child(3) {
          .cpa-arework-img {
            left: 21%;
          }
        }
      }
    }
  }

  &-val {
    display: block;
    text-align: center;
    background: #A657EE;
    border-radius: 0 0 30px 30px;
    padding: 15px;
    width: 208px;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 35px;
    @media (max-width: 1000px) {
      font-size: 15px;
    }
  }

  &-img {
    position: absolute;
    top: 0;
    max-width: 100%;
    left: 50%;
    z-index: 0;
    pointer-events: none;
    transition: .6s;
    transform: translateX(-50%);
    @media (max-width: 1200px) {
      top: -30px;
      transform-origin: top;
      transform: translateX(-50%) scale(0.7);
    }
  }
}
</style>
