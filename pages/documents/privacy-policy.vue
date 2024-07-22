<template></template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class RedirectToPrivacyPolicy extends Vue {
    created() {
        if (process.browser)
            window.location.href =
                "https://drive.google.com/file/d/17PnoqonnOTeU6fVyfT5lmioboKaT2IPO/view";
    }
}
</script>