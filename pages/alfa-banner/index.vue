<template>
  <div class="generic-container-1260">
    <div style="display: flex;flex-direction: column;align-items: center" class="mt-10">
      <a :href="href">
        <img style="max-width: 100%" src="@/assets/images/alfa/alfa-banner1.jpg" alt="alfa-banner">
      </a>
      <a :href="href" class="mt-4">
        <img style="max-width: 100%" src="@/assets/images/alfa/alfa-banner2.jpg" alt="alfa-banner">
      </a>

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({})
export default class AlfaBanner extends Vue {
  href = 'https://www.alfastrah.ru/individuals/auto/eosago/calc/?dealer_id=pampadu&utm_source=pampadu&utm_medium=cpa&utm_campaign=pampadu&utm_content=EOSAGO%22%3E';
}
</script>

<style lang="scss">

</style>
