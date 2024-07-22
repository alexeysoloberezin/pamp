<template>
  <section class="generic-container-1260">
    <div class="start-realtors">
      <div>
        <img
          :style="{
                            height: $vuetify.breakpoint.xs ? '120px' : '',
                        }"
          style="width: 100%"
          src="@/assets/images/ipoteka/hiw/pampadovich.png"
          alt="pampadovich"
        />
      </div>
      <div>
        <h2
          class="font-weight-bold h3 hiw-title mb-5"
          v-text="'Регистрируйтесь прямо сейчас и начните зарабатывать дополнительно вместе с коллегами!'"
        />
        <zond-btn
          v-text="'Зарегистрироваться'"
          :style="{ width: $vuetify.breakpoint.xs ? '100%' : '' }"
        />
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator"

@Component
export default class StartRealtorsBanner extends Vue {
}
</script>
<style lang="scss">
  .start-realtors {
    background-color: #f2f5ff;
    padding: 39px 50px;
    border-radius: 11px;
    display: grid;
    grid-template-columns: minmax(100px, 200px) 1fr;
    grid-gap: 90px;
    align-items: center;
    position: relative;
    margin: 46px 0 90px 0;
    @media (max-width: $w-sm) {
      margin: 20px 0 30px 0;
    }
    .hiw-title {
      font-size: 30px;
      @media (max-width: $w-sm) {
        font-size: 19px;
      }
    }
    .hiw-desc {
      font-size: 20px;
      @media (max-width: $w-sm) {
        font-size: 15px;
      }
    }
    &:before {
      position: absolute;
      content: url("@/assets/images/ipoteka/hiw/bg-left.svg");
      left: -10%;
      top: 40%;
    }
    &:after {
      position: absolute;
      content: url("@/assets/images/ipoteka/hiw/bg-right.svg");
      right: -10%;
      top: -10%;
    }
    @media (max-width: $w-sm) {
      grid-gap: 45px;
      padding: 15px 25px 50px;
    }
    @media (max-width: $w-xs) {
      grid-gap: 25px;
      grid-template-columns: 1fr;
    }
  }
</style>
