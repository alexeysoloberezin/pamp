<template>
  <div class="banner">
    <div class="generic-container-1260">
      <div class="banner-wrp">
        <img class="banner-user" src="@/assets/images/multi-agent/bannerAgent/bannerUser.webp" alt="">
        <div class="banner-description" v-html="'Агент, который продает помимо страховых продуктов, еще и финансовые — зарабатывает в 3 раза больше, чем его коллега, который использует в работе только страховки.'">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class bannerAgent extends Vue{
};
</script>

<style lang="scss">


.banner {
  padding: 85px 0 40px 0;
  background: $bg-color;
  margin-top: -62px;
  &-user{
    width: 127px;
    margin-right: 55px;
    @media (max-width: $w-sm) {
      margin-right: 14px;
      width: 60px;
    }
  }
  &-wrp{
    display: flex;
    @media (min-width: $w-sm) {
      align-items: center;
    }
  }
  &-description{
    font-weight: 600;

    @media (min-width: $w-sm) {
      font-size: 22px;
      line-height: 34px;
      margin-bottom: 10px;
    }
    @media (max-width: $w-sm) {
      font-size: 15px;
      line-height: 18px;
      margin-bottom: 0;
    }
  }

  @media (max-width: $w-sm) {
    padding: 80px 0 21px ;
  }

}
</style>
