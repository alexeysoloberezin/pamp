<template>
  <div class="image-text">
    <div id="ofp" style="position: absolute; top: -100px"/>
    <div class="generic-container-1260">
      <div class="image-text-wrapper" :class="{ reverse, textNoCenter, mobileImgFirst }">
        <v-img
          class="polis-img"
          style="max-width: 100%"
          :src="image"
          alt="Экран выбора продуктов"
        />
        <div v-if="text">
          <h2 class="first-polis-title" v-text="text.title"/>
          <div
            class="mt-4 first-polis-description"
            v-html="text.subtitle"
          />
          <v-layout v-if="register" align-center>
            <zond-btn
              style="margin: 10px auto"
              v-text="'Зарегистрироваться'"
            />
          </v-layout>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";

@Component({})
export default class ImageText extends Vue {
  @Prop(Boolean) reverse;
  @Prop(Boolean) mobileImgFirst;
  @Prop(Boolean) register;
  @Prop() image: string;
  @Prop() textNoCenter: boolean;
  @Prop({default: () => null}) text: { title: string; subtitle: string };
}
</script>

<style lang="scss">
.image-text {
  margin: 50px 0;
  position: relative;
  @media (max-width: $w-sm) {
    margin: 20px 0;
  }

  .image-text-wrapper {
    position: relative;
    align-items: center;
    @media (max-width: $w-sm) {
      grid-template-columns: 1fr;
    }
    display: grid;
    grid-template-columns: minmax(0, 650px) minmax(300px, 1fr);
    grid-gap: 40px;

    &.textNoCenter {
      &, .first-polis-title, .first-polis-description {
        text-align: initial;
      }
    }

    &.reverse {
      grid-template-columns: minmax(300px, 1fr) minmax(0, 650px);
      @media (max-width: $w-sm) {
        display: block;
      }

      .polis-img {
        order: 1;
      }
    }
    @media (max-width: $w-sm) {
      &.mobileImgFirst{
        display: flex;
        flex-direction: column-reverse;
        &.reverse{
          flex-direction: column;
        }
      }
    }
  }

  .first-polis-title {
    font-size: 30px;
    text-align: center;
    font-family: Montserrat, sans-serif;
    font-weight: bold;
    @media (max-width: $w-sm) {
      font-size: 19px;
    }
  }

  .polis-img {
    image-rendering: -webkit-optimize-contrast;
  }

  .first-polis-description {
    text-align: center;
    font-size: 20px;
    @media (max-width: $w-sm) {
      font-size: 14px;
    }
  }
}
</style>
