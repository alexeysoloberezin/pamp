<template>
  <div class="agents-container">
    <appstore-links-common/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
import AppstoreLinksCommon from "~/components/common/appStoreLinks/AppStoreLinksСommon.vue";

@Component({
  components: {AppstoreLinksCommon}
})
export default class AgentsAppstoreLinks extends Vue {}
</script>
