<template>

</template>
<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
@Component
export default class CarrotQuest extends Vue {
    cqChat = null;
    cqInterval = null;

    async created() {
        // await this.initCqChat();
    }

    async initCqChat() {
        console.log("initSqChat");
        return new Promise<void>((resolve, reject) => {
            setTimeout(() => {
                this.cqInterval = setInterval(() => {
                    console.log("cqInterval works");
                    let cq = (window as any).carrotquest;
                    if (cq?.messenger?.state !== null) {
                        console.log("cq.messenger exists, removing interval");
                        this.cqChat = (window as any).carrotquest;
                        if (this.br.mdAndDown) this.setStateNo();
                        clearInterval(this.cqInterval);
                        resolve();
                    }
                }, 1000);
            }, 3000);
        });
    }
    kostyl = null;
    get br() {
        return (this as any).$vuetify.breakpoint;
    }
    get chatState() {
        if (this.cqChat?.messenger) return this.cqChat.messenger.state;
        else return null;
    }

    @Watch("chatState")
    onChatStateChange(val) {
        if (val == "collapsed") this.setStateNo();
    }

    @Watch("br.mdAndDown")
    onWidthChange(val) {
        if (val) {
            this.setStateNo();
        } else {
            if (this.cqChat?.messenger?.state == "opened") {
                this.cqChat?.messenger?.toStateNo?.();
            }
            this.cqChat?.messenger?.toStateCollapsed();
        }
    }

    @Watch("$route.path")
    onRoteChange(val) {
        this.setStateNo();
    }
    setStateNo() {
        if (this.br.mdAndDown && this.cqChat) {
            this.cqChat.messenger.toStateNo();
        }
    }
}
</script>

<style lang="scss">
@media (max-width: $w-xs) {
    .carrot-messenger-frame-small-chat.carrot-messenger-frame-container.carrotquest-messenger-line-left {
        left: 0px !important;
        top: 50px !important;
        height: calc(100% - 50px) !important;
    }
}
#carrotquest-messenger-collapsed-container.carrotquest-messenger-left_bottom:not(#any) {
    filter: drop-shadow(0px 2px 25px rgba(113, 48, 229, 0.53));
}
</style>
