<template>
  <CharacteristicDoc/>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CharacteristicDoc from "~/components/legal/CharacteristicDoc.vue";


@Component({
  components: {CharacteristicDoc}
})
export default class Characteristic extends Vue  {
}
</script>

<style lang="scss">
.legal-container {
  max-width: 1160px;
  margin: 0 auto;
  padding: 46px 0 54px 0;
  @media (max-width: $w-md) {
    padding: 29px 20px 42px 20px;
  }
  @media (max-width: $w-sm){
    padding: 29px 20px 42px 20px;
  }
}
</style>
