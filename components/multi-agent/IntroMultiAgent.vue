<template>
  <div style="background: linear-gradient(268.37deg, #F3F3F8 6.73%, rgba(249, 249, 252, 0.4) 98.42%);">
    <ScrollAnchor id="ai" />
    <v-layout
      class="generic-container-1260 multiAgent-intro-gen2"
      :column="br.mdAndDown"
    >
      <v-flex xs12 sm6 :class="{ 'px-4': br.mdAndDown }">
        <h1 v-html="block.title" class="intro-title mb-sm-8 mb-3" />
        <p v-html="block.description" class="mt-2 mt-sm-5 intro-subtitle mb-4 mb-sm-8" />
        <ul class="into-list mb-4 mb-sm-7 pl-0">
          <li class="mb-4">Не требует специальных знаний</li>
          <li class="mb-4">Легко разобраться</li>
          <li class="mb-4">Подходит для всех</li>
        </ul>
        <zond-btn v-text="'Зарегистрироваться'" />
      </v-flex>
      <v-flex xs12 sm6>
        <picture>
          <source :srcset="`${require('~/assets/images/multi-agent/intro/intro-bgSmall.webp')}`" media="(max-width: 1265px)">
          <img
            style="max-width: 100%;transform: translateY(6px)"
            :src="require('~/assets/images/multi-agent/intro/intro-bg.webp')"
            alt="multi-intro"
          />
        </picture>
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ScrollAnchor from "~/components/common/ScrollAnchor.vue";

@Component({
  components: { ScrollAnchor },
})
export default class IntroMultiAgent extends Vue {
  get br() {
    return this.$vuetify.breakpoint;
  }

  block = {
    title: "Стань мульти-агентом и <span>зарабатывай в 3 раза больше!</span>",
    description:
      "Продавай банковские продукты дополнительно к страховым и увеличь свой доход.",
  };
}
</script>

<style lang="scss">


.multiAgent-intro-gen2 {
  display: flex;
  align-items: center;
  padding: 30px 0 0;
  @media (max-width: $w-md) {
    padding-bottom: 60px;
    align-items: start;
  }
  .into-list{
    li{
      position: relative;
      display: flex;
      align-items: center;
      font-weight: 400;
      font-size: 20px;
      line-height: 1.25;
      &:before{
        content: '';
        margin-right: 21px;
        width: 17px;
        height: 2px;
        background: $purple;
      }
      @media (max-width: $w-sm) {
        font-size: 16px;
      }
    }
  }
  .intro-title {
    font-weight: bold;
    font-family: Montserrat, sans-serif;
    font-size: 35px;
    span{
      color: $purple;
    }
    @media (min-width: $w-md) {
      line-height: 45px;
    }
    @media (max-width: $w-sm) {
      font-size: 23px;
      line-height: 30px;
    }
  }

  .intro-subtitle {
    font-size: 20px;
    line-height: 23px;
    @media (max-width: $w-sm) {
      font-size: 16px;
    }
  }
}
</style>
