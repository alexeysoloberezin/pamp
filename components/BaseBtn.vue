<template>
  <v-btn
    dark
    depressed
    text
    min-width="146px"
    :block="false"
    :normal="true"
    class="btn base-btn"
    v-on="$listeners"
    v-bind="$attrs"
  >
    <slot />
  </v-btn>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class BaseBtn extends Vue {
  @Prop({ default: false }) text: boolean;
}
</script>

<style lang="scss">
.base-btn {
  height: 45px !important;
  min-width: 213px !important;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px !important;
  line-height: 19px;
  text-transform: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
