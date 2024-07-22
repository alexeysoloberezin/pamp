<template>
    <div v-text="id" />
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class AgentsRefs extends Vue {
    @Prop({ default: null }) id: string;
    created() {
        if (!process.client) return;
        let ref;
        if (!this.$route.query["refs"] && this.id)
        this.$route.query["refs"] = this.id;

        const vipAgentRef = "a106586";

        if (this.$route.params.id === vipAgentRef){
          this.$router.push({ path: "/strahovanie-ipoteki", query: this.$route.query });
        } else this.$router.push({ path: "/", query: this.$route.query });
    }
}
</script>
