<template>
  <!-- REMOVE DUPLICATE -->
  <div class="generic-container-1260">
    <div class="osago-benefit">
      <div class="benefit-item">
        <img
          :src="require('~/assets/images/icons/bag.svg')"
          alt="benefit"
          class="mr-3 benefit-icon"
        />
        <div v-html="items[0]"/>
      </div>
      <div class="dots">
        <img
          style="max-width: 100%"
          src="~/assets/images/icons/dots.svg"
          alt="dots"
        />
      </div>
      <div class="benefit-item">
        <img
          :src="require('~/assets/images/icons/coin.svg')"
          alt="benefit"
          class="mr-3 benefit-icon bounce"
        />
        <div v-html="items[1]"/>
      </div>
      <div class="dots">
        <img
          style="max-width: 100%"
          src="~/assets/images/icons/dots.svg"
          alt="dots"
        />
      </div>
      <div class="benefit-item">
        <img
          :src="require('~/assets/images/icons/segment.svg')"
          alt="benefit"
          class="mr-3 benefit-icon"
        />
        <div v-html="items[2]"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";

@Component({})
export default class Benefit extends Vue {
  @Prop({
    default: () => [
      "Пампаду <b>№1 для заработка</b> на&nbsp;ОСАГО",
      "Комиссия <b>начисляется сразу</b>",
      "<b>Расширенная сегментация</b> по регионам и категориям авто",
    ],
  })
  items;
}
</script>

<style lang="scss">
.osago-benefit {
  padding: 45px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  line-height: 25px;
  @media (max-width: $w-sm) {
    padding: 20px 0;
    flex-flow: column;
    grid-template-columns: minmax(300px, 600px);
    justify-content: center;
    align-items: flex-start;
  }

  .benefit-item {
    display: flex;
    flex: 0 1 360px;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    @media (max-width: $w-sm) {
      font-size: 16px;
      line-height: 23px;
      justify-content: flex-start;
      padding-right: 0;
      flex: 0 0 65px;
    }

    .bounce {
      animation-name: bounce;
      animation-duration: 1200ms;
      animation-iteration-count: infinite;
      animation-timing-function: cubic-bezier(0.28, 0.84, 0.42, 1);
    }

    @keyframes bounce {
      0% {
        transform: scale(1, 1) translateY(0);
      }
      10% {
        transform: scale(1.1, 0.9) translateY(0);
      }
      30% {
        transform: scale(0.9, 1.1) translateY(-10px);
      }
      50% {
        transform: scale(1.05, 0.95) translateY(0);
      }
      57% {
        transform: scale(1, 1) translateY(-2px);
      }
      64% {
        transform: scale(1, 1) translateY(0);
      }
      100% {
        transform: scale(1, 1) translateY(0);
      }
    }
  }

  .dots {
    flex: 0 1 30px;
    display: flex;
    @media (max-width: $w-sm) {
      display: none;
    }

    img {
      margin: 0 auto;
    }
  }
}
</style>
