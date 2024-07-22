<template>
  <div class="mobile-menu" style="overflow: auto">
    <v-layout class="w-100" style="flex: 0; padding: 20px" justify-space-between>
      <a
        class="btn header-btn-inverted text-center flex1"
        :href="`https://agents.pampadu.ru/#/auth${$root.query}`"
        v-text="'Вход'"
      />
      <zond-btn
        class="btn text-center ml-2 flex1"
        v-text="'Регистрация'"
      />
    </v-layout>

    <MobileMenuLink
      v-for="(link,i) in pages"
      :key="i"
      :link="link"
      @close="$emit('close')"
      @scrollTo="$emit('scroll-to')"
    />
    <span
      style="line-height: 34px; margin: 4px 20px"
      class="a"
      @click="openChat()"
      v-text="'Чат поддержки'"
    />
  </div>
</template>
<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import MobileMenuLink from "./MobileMenuLink.vue";

@Component({components: {MobileMenuLink}})
export default class MobileMenu extends Vue {
  @Prop({default: ""}) activeBlock;
  @Prop({default: () => []}) pages;

  openChat() {
    (window as any).carrotquest?.open?.();
  }
}
</script>
<style lang="scss">
.mobile-menu {
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  padding-bottom: 20px;
  justify-content: flex-start;
  position: fixed;
  top: 56px;
  width: 100%;
  height: calc(100% - 56px);
  z-index: 10;
  background: white;

  .mobile-menu-expand {
    border-bottom: 1px solid #0002;
    width: 100%;
    padding: 4px 20px;
  }

  .mobile-menu-expand-header {
    display: flex;
  }

  .mobile-menu-expand-link {
    cursor: pointer;
    font-size: 15px;
    line-height: 18px;
    padding: 8.5px 0;
    &,*{
      color: #7d8d93 !important;
    }

    &.product-link {
      color: unset;
      &:before {
        display: inline-block;
        content: "";
        border-top: 3px solid #7130E5;
        margin: 5px 15px 5px 0;
        width: 10px;
      }

    }
  }

  .a {
    &.nuxt-link-active {
      color: #000 !important;
    }

    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    color: #2d2645 !important;
  }
}
</style>
