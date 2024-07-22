<template>
  <div class="agents-reviews" style="background-color: #F9F9FC">
    <div class="agents-container">
      <div class="reviews-wrapper">
        <div>
          <h2 class="reviews-title" v-html="'Почитайте отзывы тех, кто уже&nbsp;с нами работает'"/>
          <div style="width: fit-content" :style="{margin: $vuetify.breakpoint.mdAndDown && !$vuetify.breakpoint.xs ? '0 auto' : ''}">
            <nuxt-link class="btn mt-5" style="min-width: 145px;text-align: center;" to="/reviews/">Читать</nuxt-link>
          </div>
        </div>
        <div class="img-wrapper">
          <v-img class="reviews-bg" :src="require('@/assets/images/agents/reviews/bg.webp')" max-width="636" alt="reviews"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"

@Component
export default class Reviews extends Vue {
}
</script>

<style lang="scss">
.agents-reviews {
  padding: 25px 0;

  .reviews-wrapper {
    display: flex;
    align-items: center;
    max-width: 1000px;
    margin: 0 auto;
    @media (max-width: $w-md){
      flex-direction: column;
    }
  }

  .reviews-title {
    font-family: Montserrat, sans-serif;
    max-width: 416px;
    font-weight: bold;
    font-size: 28px;
    line-height: 34px;
    @media (max-width: $w-md){
      text-align: center;
      font-size: 19px;
      line-height: 23px;
    }
    @media (max-width: $w-xs){
      text-align: left;
    }
  }
  .img-wrapper {
    flex: 0 1 636px;
    mix-blend-mode: multiply;
    image-rendering: -webkit-optimize-contrast;
    @media (max-width: $w-md){
      flex: 0 1 auto;
      margin-top: 15px;
    }
  }
  .reviews-bg {
    width: 100%;
    max-width: 100%;
  }
}
</style>
