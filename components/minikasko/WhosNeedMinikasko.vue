<template>
    <WhosNeed
      class="whos-need-minikasko"
      title="Кто уже зарабатывает на страховании мини-КАСКО через Пампаду?"
      bg-color="#F9F9FCFF"
      page="minikasko"
      show-zond
    />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import WhosNeed from "~/components/common/products/WhosNeed";

@Component({
  components: {WhosNeed}
})
export default class WhosNeedMinikasko extends Vue {}
</script>

<style lang="scss">
.whos-need-minikasko {
  .whos-need-title {
    max-width: 740px;
  }
  &.osago-whos-need {
    @media (max-width: $w-sm){
      padding: 40px 0;
    }
  }
  .whos-need-wrapper {
    @media (max-width: $w-xs) {
      grid-auto-rows: minmax(250px, auto);
    }
  }
}
</style>
