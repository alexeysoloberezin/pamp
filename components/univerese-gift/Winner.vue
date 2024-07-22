<template>
  <div class="winner">
    <div class="generic-container-1260">
      <div class="winner-wrp">
        <div class="winner-box">
          <img src="@/assets/images/universe-gift/winner/user.svg" alt="">
          <h2 class="h2" v-html="'Победить может <span>каждый</span>'"></h2>
        </div>
        <div class="winner-box imageBlock">
          <img src="@/assets/images/universe-gift/winner/winnerIphone.webp" alt="">
        </div>
        <div class="winner-box">
          <div
            v-html="'Увеличивая продажи, вы автоматически участвуете в розыгрыше призов всех номинаций, которые подходят под условия.'"></div>
        </div>
        <div class="winner-box bgBlue">
          <div v-html="'Доступно участие сразу по всем продуктам и номинациям'"></div>
        </div>
        <div class="winner-box">
          <div v-html="'Чем выше номинация, тем меньше участников, а значит и выше шанс на победу.'"></div>
        </div>
        <div class="winner-box">
          <div v-html="'Случайным образом определим победителей.'"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component({})
export default class Winner extends Vue {

}
</script>

<style lang="scss">


.winner {
  padding: 140px 0;
  @media (max-width: $w-sm) {
    padding: 40px 0;
  }

  &-wrp {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
    @media (max-width: $w-sm) {
      grid-template-columns: 1fr;
    }
  }

  .h2 {
    text-align: left;
    margin-left: 35px;

    span {
      color: #9065FD;
    }
  }

  &-box {
    position: relative;
    z-index: 2;

    border-radius: 20px;
    background: #F2F5FF;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    line-height: 1.3;
    &.bgBlue{
      background: #4578FF;
      color: #fff;
    }
    @media (min-width: $w-sm) {
      min-height: 208px;
      padding: 30px;
    }
    @media (max-width: $w-sm) {
      font-size: 15px;
      padding: 20px 30px;
      &:nth-child(1) {
        order: 1;
      }
      &:nth-child(3) {
        order: 2;
      }
      &:nth-child(4) {
        order: 3;
      }
      &:nth-child(5) {
        order: 5;
      }
      &:nth-child(6) {
        order: 6;
      }
    }

    &:nth-child(1) {
      background: none;
      padding-left: 0;

      img {
        width: 138px;
        height: 138px;
        object-fit: contain;
        @media (max-width: $w-md) {
          width: 92px;
          height: 92px;
        }
      }
      @media (max-width: $w-md) {
        justify-content: start;
        padding-top: 10px;
        padding-bottom: 10px;
        .h2{
          max-width: 130px;
        }
      }
    }

    &.imageBlock {
      background: transparent;
      position: relative;
      z-index: 1;
      @media (max-width: $w-sm) {
        order: 4;
        height: 110px;
        img {
          max-height: 174px;
        }
      }

      img {
        position: absolute;
        bottom: -80px;
        left: 50%;
        transform: translateX(-50%);
        max-width: 100%;
        @media (max-width: $w-sm) {
          bottom: -60px;
        }
      }
    }
  }
}
</style>
