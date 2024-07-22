<template>
    <span>
        <HeaderSub :block-links="blocks" />
        <First />
        <Whatis />
        <WhyUseIt />
        <HowItWorks />
        <Freebies />
        <Showcase />
        <Webtools />
        <Meters />
        <AboutUs />
        <Motto />
        <MassMedia />
        <Telegram />
        <Faq />
    </span>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import First from "~/components/agents/archived/1_First.vue";
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
import HeaderSub from "@/components/common/HeaderSub.vue";
import Webtools from "@/components/common/Webtools.vue";
import Motto from "~/components/agents/archived/8_Motto.vue";
import MassMedia from "@/components/common/MassMedia.vue";
import AnalyticsService from "~/core/Analytics/Analytics";
@Component({
    components: {
        HeaderSub,
        First,
        Whatis,
        WhyUseIt,
        HowItWorks,
        Freebies,
        Showcase,
        Meters,
        AboutUs,
        Telegram,
        Faq,
        Webtools,
        Footer,
        Motto,
        MassMedia,
    },
})
export default class AgentsMain extends Vue {
    blocks = [
        { code: "wi", title: "Что это" },
        { code: "wui", title: "Для кого" },
        { code: "hiw", title: "Как работает" },
        { code: "freeb", title: "Что получите" },
        { code: "meters", title: "Сколько заработаете" },
        { code: "au", title: "О нас" },
    ];
    created() {
        if (typeof window !== "undefined") AnalyticsService.visitAgents();
    }
    head() {
        return {
            title: "Pampadu.ru - Сервис № 1 для страхового агента: 16 СК с комиссией до 35% и моментальными выплатами",
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content:
                        "Пампаду - это личный кабинет страхового агента в котором можно оформить полис и получить комиссионное вознаграждение. Сотрудничество по ОСАГО другим видам.",
                },
            ],
        };
    }
}
</script>
