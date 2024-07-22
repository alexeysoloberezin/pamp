<template>
  <iframe
    :src="mapSrc"
    :width="width ?? '100%'"
    :height="height ?? '362'"
    frameborder="0"
  />
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"

@Component
export default class YandexMap  extends Vue {
  @Prop({type: String}) width: string;
  @Prop({type: String}) height: string;

  mapSrc = 'https://yandex.ru/map-widget/v1/?um=constructor%3A799d2612aa7f0fd4de64161210ca82f457495119ed12083ee70db33f37f6bafc&amp;source=constructor'
}
</script>

