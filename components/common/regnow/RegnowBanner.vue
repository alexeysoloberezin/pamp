<template>
  <!-- two variants, need to be separated -->
  <div v-if="primary" :class="containerClass">
    <div class="regnow-banner banner-variant-1 my-10">
      <div style="max-width: 200px;margin: 0 auto">
        <img
          :style="{ height: $vuetify.breakpoint.xs ? '120px' : '' }"
          style="width: 100%;"
          src="@/assets/images/common/regnowBanner/pampadovich.png"
          alt="pampadovich"
        />
      </div>
      <div class="regnow-banner-text">
        <p class="banner-title" v-if="$slots.title">
          <slot name="title">Легко разобраться в продукте!</slot>
        </p>
        <p class="banner-description" v-if="$slots.description">
          <slot name="description">
            Прочитайте несколько статей в разделе «Помощь» личного
            кабинета или задайте вопросы в онлайн-чат поддержки, где
            вам всегда помогут оформить первый полис
          </slot>
        </p>
        <zond-btn
          class="regnow-banner-btn"
          v-text="btnText"
          :style="{ width: $vuetify.breakpoint.xs ? '100%' : '' }"
        />
      </div>
    </div>
  </div>
  <div v-else class="ipoteka-regnow" :style="{ backgroundColor: bgColor }">
    <v-layout
      :column="$vuetify.breakpoint.mdAndDown"
      :align-center="$vuetify.breakpoint.smAndUp"
      align-start
      :class="containerClass"
    >
      <v-flex>
        <h2
          :style="{
                        color: textColor,
                        maxWidth: `${titleMaxWidth}px`,
                    }"
          class="heading"
          style="font-weight: 600"
        >
          <slot name="title"
          >Если у вас уже есть аудитория, которой нужно
            страхование ипотеки или автомобиля, — начните
            зарабатывать с Пампаду уже сегодня!
          </slot>
        </h2>
      </v-flex>
      <v-layout column :align-center="$vuetify.breakpoint.mdAndDown">
        <zond-btn
          v-text="btnText"
          :class="{
              'mt-5': $vuetify.breakpoint.mdAndDown,
              'mr-auto': $vuetify.breakpoint.xs,
              inverted: btnInverted,
          }"
          :style="{
              filter: noShadow
                  ? ''
                  : 'drop-shadow(0px 2px 25px #6243BF)',
              maxWidth: btnMaxWidth
                  ? `${btnMaxWidth}px`
                  : 'fit-content',
          }"
        />
        <div
          v-if="$slots.description"
          class="mt-5"
          :style="{ color: textColor }"
        >
          <slot name="description"
          >Все размеры вознаграждений указаны в личном
            кабинете
          </slot
          >
        </div>
      </v-layout>
    </v-layout>
  </div>
</template>
<script lang="ts">
import {Vue, Component, Prop} from "vue-property-decorator";

@Component
export default class RegnowBanner extends Vue {
  @Prop({type: String, default: () => "#8e68ff"}) bgColor;
  @Prop({type: String, default: () => "#FFFFFF"}) textColor;
  @Prop({type: String, default: () => "825"}) titleMaxWidth;
  @Prop({type: String, default: () => "Зарегистрироваться"}) btnText;
  @Prop({type: String}) btnMaxWidth;
  @Prop({type: String, default: () => "generic-container-1260"})
  containerClass;
  @Prop(Boolean) btnInverted;
  @Prop(Boolean) noShadow;
  @Prop(Boolean) primary;
}
</script>
<style lang="scss">
.ipoteka-regnow {
  padding: 50px 0;
  position: relative;
  @media (max-width: $w-md) {
    padding: 25px 0;
  }

  &:before {
    content: url("~@/assets/images/partnerPage/commission/bg-left.svg");
    position: absolute;
    top: 15%;
    left: 20%;
    z-index: 0;
    @media (max-width: $w-md) {
      display: none;
    }
  }

  &:after {
    content: url("~@/assets/images/partnerPage/commission/bg-right.svg");
    position: absolute;
    right: 15%;
    top: 5%;
    z-index: 0;
    @media (max-width: $w-md) {
      display: none;
    }
  }

  .heading {
    font-size: 30px;
    font-weight: 500;
    font-family: Montserrat, sans-serif;
    @media (max-width: $w-md) {
      font-size: 19px;
      text-align: center;
      margin: 0 auto;
    }
    @media (max-width: $w-xs) {
      text-align: left;
    }
  }
}

.regnow-banner {
  background-color: #f2f5ff;
  padding: 40px 50px;
  border-radius: 11px;
  display: grid;
  grid-gap: 90px;
  align-items: center;
  position: relative;

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

.banner-variant-1 {
  grid-template-columns: minmax(100px, 200px) 1fr;
}

.banner-title {
  font-family: Montserrat, sans-serif;
  font-size: 30px;
  font-weight: bold;
  @media (max-width: $w-sm) {
    font-size: 19px;
  }
}

.banner-description {
  font-family: Montserrat, sans-serif;
}
</style>
