<template>
  <div style="position: relative">
    <ScrollAnchor id="mwt"/>
    <AvailableWebtools product="minikasko" class="minikasko-container"/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"

import AvailableWebtools from "~/components/common/AvailableWebtools";
import ScrollAnchor from "~/components/common/ScrollAnchor";

@Component({
  components: {ScrollAnchor, AvailableWebtools}
})
export default class MinikaskoWebtools extends Vue {

}
</script>
