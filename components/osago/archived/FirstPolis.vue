<template>
  <div class="osago-first-polis">
    <div id="ofp" style="position: absolute; top: -100px;" />
    <div class="generic-container-1260">
      <div class="first-polis-wrapper">
        <img class="polis-img" style="max-width: 100%" src="@/assets/images/osago/firstPolis/bg-left.png" alt="first-polis">
        <div>
          <h2 class="first-polis-title" v-text="'Не нужно быть профи, чтобы оформить первый полис'"/>
          <div class="mt-4 first-polis-description" v-text="'Процесс оформления занимает 5 минут, а полезные видео, статьи и онлайн-поддержка всегда помогут и обучат'"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({})
export default class FirstPolis extends Vue {
}
</script>

<style lang="scss">
.osago-first-polis {
  padding: 65px 0;
  position: relative;
  @media (max-width: $w-sm){
    padding: 20px 0;
  }
  .generic-container-1260 {
    position: relative;
    &:before {
        position: absolute;
        content: url("@/assets/images/osago/firstPolis/decor-left.svg");
        left: -40px;
        bottom: -25px;
        @media (max-width: $w-sm) {
          display: none;
        }
    };
    &:after {
        position: absolute;
        content: url("@/assets/images/osago/firstPolis/decor-right.svg");
        left: 60%;
        transform: translateX(-50%);
        bottom: 0;
        @media (max-width: $w-sm) {
          display: none;
        }
    }
  }
  .first-polis-wrapper {
    display: grid;
    grid-template-columns: minmax(0,650px) minmax(300px,1fr);
    grid-gap: 40px;
    align-items: center;
    @media (max-width: $w-sm){
      grid-template-columns: 1fr;
    }
  }
  .first-polis-title {
    font-size: 30px;
    text-align: center;
    font-family: Montserrat, sans-serif;
    font-weight: bold;
    @media (max-width: $w-sm){
      font-size: 19px;
    }
  }
  .polis-img {
    image-rendering: -webkit-optimize-contrast;
  }
  .first-polis-description {
    text-align: center;
    font-size: 20px;
    @media (max-width: $w-sm){
      font-size: 14px;
    }
  }
}
</style>
