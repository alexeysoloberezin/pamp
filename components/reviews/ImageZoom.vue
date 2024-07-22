<template>
  <v-dialog
    v-model="status"
    max-width="1031px"
    height="1400px"
    class="image-zoom"
    @click:outside="$emit('status-change', $event)"
  >
    <v-card class="image-zoom__card">
      <div class="image-zoom__close" v-ripple @click="$emit('status-change', false)">
        <img src="@/assets/images/reviews/cross.svg" alt="Закрыть">
      </div>
      <img :src="src" lazy class="image-zoom__image" />
      <div></div>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue, Model, Prop } from "vue-property-decorator"

@Component({})
export default class ImageZoom extends Vue {
  @Model("status-change", { default: false }) status!: boolean;
  @Prop({ default: "error" }) src!: string;
}
</script>

<style scoped lang="scss">
.image-zoom__card {
  position: relative;
  display: flex;
  justify-content: center;

  height: 100%;

  padding-top: 90px;
  padding-bottom: 68px;
  padding-right: 91px;
  padding-left: 65px;

  background: #FFFFFF;
  border-radius: 10px;
}

.image-zoom__close {
  position: absolute;
  top: 0;
  right: 0;

  box-sizing: content-box;

  max-width: 19px;
  max-height: 19px;

  padding: 20px;
  cursor: pointer;

  border-radius: 100%;
}

.image-zoom__image {
  height: 100%;
  width: 100%;
}

@media (max-width: $w-sm) {
  .image-zoom__card {
    padding: 0;
  }
}
</style>
