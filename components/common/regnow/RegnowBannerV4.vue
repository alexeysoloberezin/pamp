<template>
  <div class="generic-container-1260">
    <div class="regnow-banner banner-variant-4 my-10" :class="classes">
      <div class="banner-variant-4-wrp">
        <img
          class="banner-variant-4-img"
          :style="{ height: $vuetify.breakpoint.xs ? '120px' : '' }"
          src="@/assets/images/common/regnowBanner/pampadovich.png"
          alt="pampadovich"
        />
      </div>
      <div>
        <h3 class="h3 mb-6">
          <slot name="title">Стань мульти-агентом и начни зарабатывать в разы больше прямо сейчас!</slot>
        </h3>
        <p>
          <slot name="text"></slot>
        </p>
        <zond-btn
          v-text="btnText"
          :style="{ width: $vuetify.breakpoint.xs ? '100%' : '255px' }"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";

@Component
export default class RegnowBannerV3 extends Vue {
  @Prop({type: String, default: () => "Присоединиться"}) btnText;
  @Prop({type: String, default: () => ""}) classes;

}
</script>
<style lang="scss">


.banner-variant-4 {
  padding: 40px 97px 40px 100px;
  @media (min-width: $w-sm) {
    grid-template-columns: minmax(100px, 200px) 1fr;
  }
  @media (max-width: $w-sm) {
    grid-gap: 22px;
  }
  @media (max-width: $w-xs) {
    padding: 24px 32px;
    .banner-variant-4-wrp{
      display: flex;
      justify-content: center;
    }
    .h3{
      font-size: 19px;
      line-height: 23px;
      font-weight: 700;
    }
  }

  &-img {
    width: 194px;
    @media (max-width: $w-sm) {
      width: 122px;
    }
  }
}
</style>
