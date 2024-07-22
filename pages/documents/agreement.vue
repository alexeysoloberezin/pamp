<template></template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class RedirectToAgreement extends Vue {
    created() { // leaving it here in case opened with vue router
        if (process.browser)
            window.location.href =
                "https://drive.google.com/file/d/1M9-nRbmTFUu6OXX-xOiYc2LdXMiIRegS/view";
    }
}
</script>