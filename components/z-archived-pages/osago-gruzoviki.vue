<template>
    <span>
        <HeaderSub :block-links="blocks" />
        <Truck />
        <Whatis />
        <WhyUseIt />
        <HowItWorks />
        <Freebies />
        <Showcase />
        <Meters />
        <AboutUs />
        <Telegram />
        <Faq />
    </span>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HeaderSub from "@/components/common/Header.vue";
import Truck from "~/components/agents/archived/1_Truck.vue";
import Whatis from "~/components/agents/archived/2_WhatIs.vue";
import WhyUseIt from "~/components/agents/archived/3_WhyUseIt.vue";
import HowItWorks from "~/components/agents/archived/4_HowItWorks.vue";
import Freebies from "~/components/agents/archived/5_Freebies.vue";
import Showcase from "~/components/agents/archived/6_Showcase.vue";
import Meters from "~/components/agents/archived/7_Meters.vue";
import AboutUs from "~/components/agents/archived/8_AboutUs.vue";
import Telegram from "~/components/agents/archived/9_Telegram.vue";
import Faq from "@/components/common/Faq.vue";
import Footer from "@/components/common/Footer.vue";
import AnalyticsService from "~/core/Analytics/Analytics";
@Component({
    components: {
        HeaderSub,
        Truck,
        Whatis,
        WhyUseIt,
        HowItWorks,
        Freebies,
        Showcase,
        Meters,
        AboutUs,
        Telegram,
        Faq,
        Footer,
    },
})
export default class TruckMain extends Vue {
    head() {
        return {
            meta: [
                {
                    name: "robots",
                    content: "noindex, nofollow",
                },
            ],
        };
    }
    blocks = [
        { code: "wi", title: "Что это" },
        { code: "wui", title: "Для кого" },
        { code: "hiw", title: "Как работает" },
        { code: "freeb", title: "Что получите" },
        { code: "meters", title: "Сколько заработаете" },
        { code: "au", title: "О нас" },
    ];
    created() {
        this.$router.push("/");
        if (typeof window !== "undefined") {
            AnalyticsService.visitTruck();
        }
    }
}
</script>
