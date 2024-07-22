<template>
  <div class="generic-container-1260 seo-text py-md-12 py-8">
    <div :class="{ 'show-more': showMore }" :style="{
            maxHeight: showMore ? 'none' : '115px',
            overflow: showMore ? 'visible' : 'hidden',
             transition: 'max-height 0.5s ease',
          }">
      <p v-html="text"></p>
    </div>
    <button style="text-decoration: underline" @click="toggleShowMore">
      {{ showMore ? 'Скрыть' : 'Показать еще' }}
    </button>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Prop} from "vue-property-decorator";

@Component
export default class SeoText extends Vue {
  @Prop({type: String, required: true}) text
  showMore = false;
  toggleShowMore() {
    this.showMore = !this.showMore;
  };
}
</script>

<style lang="scss">
.seo-text{
  h6 {
    font-size: 20px;
  }
  div{
    margin-bottom: 10px;
  }
  h4{
    display: inline;
    font-size: 20px;
    font-weight: 500;
  }

  ul, h6 {
    margin: 10px 0;
  }

  li {
    margin-bottom: 5px;
  }
}
</style>
