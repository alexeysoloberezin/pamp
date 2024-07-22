<template>
  <div style="position: absolute;top: -120px; left: -50px;" :id="id"/>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"

@Component
export default class  extends Vue {
  @Prop({type: String,required: true}) id;
}
</script>
