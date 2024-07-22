<template></template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class RedirectToOferta extends Vue {
    created() {
        if (process.browser)
            window.location.href =
                "https://drive.google.com/file/d/1WU8_9KGYem9OS3mPoHbb3S2PmnkMEC5g/view";
    }
}
</script>