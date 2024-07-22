<template>
  <div class="generic-container-1260">
    <appstore-links-common/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
import AppstoreLinksCommon from "~/components/common/appStoreLinks/AppStoreLinksСommon.vue";

@Component({
  components: {AppstoreLinksCommon}
})
export default class MortgageAppstoreLinks extends Vue {}
</script>

<style lang="scss">
</style>
