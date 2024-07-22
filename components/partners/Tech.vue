<template>
    <div class="tech">
        <div class="h2 text-center px-6" style="max-width: 900px;margin: auto;">
            Прямо сейчас используем технологии, которые будут актуальны завтра
        </div>
        <div class="tech-content">
            <div class="tech-logos">
                <img
                    v-for="(img, i) in images"
                    :key="i"
                    :src="img.src"
                    :style="{
                        height: `${img.height / divider}px`,
                        width: `${img.width / divider}px`
                    }"
                    class="tech-logo"
                />
            </div>
            <div class="tech-rows">
                <div class="tech-row">
                    <div class="tech-check">
                        <v-icon color="#329F25" v-text="mdiCheck" />
                    </div>
                    <div
                        class="tech-text"
                        v-html="
                            'Проверенные временем решения, используемые во многих крупных проектах и SaaS-решениях Oracle и SAP'
                        "
                    />
                </div>
                <v-divider style="border-top: 1px solid rgb(205, 212, 240);" />
                <div class="tech-row">
                    <div class="tech-check">
                        <v-icon color="#329F25" v-text="mdiCheck" />
                    </div>
                    <div
                        class="tech-text"
                        v-html="
                            'Высокая производительность&nbsp;— самовосстановление и балансировка нагрузки'
                        "
                    />
                </div>
                <v-divider style="border-top: 1px solid rgb(205, 212, 240);" />
                <div class="tech-row">
                    <div class="tech-check">
                        <v-icon color="#329F25" v-text="mdiCheck" />
                    </div>
                    <div
                        class="tech-text"
                        v-html="
                            'Простота обслуживания и низкое время простоя в случае неполадок'
                        "
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { mdiCheckBold } from "@mdi/js";
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class Tech extends Vue {
    mdiCheck = mdiCheckBold;
    images = [
        {
            src: require("@/assets/images/partners/tech/Nginx.svg"),
            width: 192,
            height: 40
        },
        {
            src: require("@/assets/images/partners/tech/Docker.svg"),
            width: 206,
            height: 54
        },
        {
            src: require("@/assets/images/partners/tech/Postgresql.svg"),
            width: 334,
            height: 50
        },
        {
            src: require("@/assets/images/partners/tech/NETCore.svg"),
            width: 64,
            height: 64
        },
        {
            src: require("@/assets/images/partners/tech/Kubernetes.svg"),
            width: 280,
            height: 50
        },
        {
            src: require("@/assets/images/partners/tech/elk-stack.png"),
            width: 76,
            height: 64
        }
    ];
    get divider() {
        if (this.$vuetify.breakpoint.xsOnly) return 1.8;
        if (this.$vuetify.breakpoint.smAndDown) return 1.3;
        return 1;
    }
    mounted() {
        let options = {
            root: null,
            rootMargin: "0px",
            threshold: 1
        };
        let callbackFunc = (entries, observer) => {
            entries.forEach((entry: IntersectionObserverEntry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("tech-check-animate");
                }
            });
        };
        let nodes = document.querySelectorAll(".tech-check");
        let observer = new IntersectionObserver(callbackFunc, options);
        nodes.forEach(x => observer.observe(x));
    }
}
</script>
<style lang="scss">
.tech {
    padding: 60px 0;
}
.tech-content {
    display: flex;
    max-width: 1100px;
    margin: 60px auto 0;
    @media (max-width: $w-xs) {
        flex-flow: column;
    }
}
.tech-logos {
    background: #ffffff;
    box-shadow: 0px 5px 25px rgba(203, 207, 216, 0.65);
    border-radius: 5px;
    flex: 0 1 50%;
    padding: 35px 62px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
    align-items: center;
    @media (max-width: $w-md) {
        padding: 35px 50px;
    }
    @media (max-width: $w-sm) {
        padding: 20px 16px;
        justify-content: space-around;
        align-content: space-around;
    }
    @media (max-width: $w-xs) {
        max-width: 265px;
        margin: auto;
    }
}
.tech-logo {
    object-fit: contain;
    transition: transform 0.3s;
    &:hover {
        transform: scale(1.3) !important;
    }
    @media (max-width: $w-xs) {
        margin: 6px 2px;
    }
}
.tech-rows {
    max-width: 400px;
    margin-left: 100px;
    @media (max-width: $w-md) {
        margin-left: 60px;
    }
    @media (max-width: $w-sm) {
        margin-left: 14px;
    }
    @media (max-width: $w-xs) {
        // max-width: 265px;
        margin: auto;
        padding: 0 26px;
    }
}
.tech-row {
    display: flex;
    align-items: center;
    padding: 26px 0;
    @media (max-width: $w-sm) {
        padding: 16px 0;
    }
}
.tech-check {
    width: 52px;
    height: 52px;
    background: #ffffff;
    box-shadow: 0px 5px 25px rgba(203, 207, 216, 0.6);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: none;
    transition: transform 0.3s;
    &:hover {
        transform: scale(1.5) rotate(-5deg) !important;
    }
    &.tech-check-animate {
        animation: enlarge 0.6s;
    }
}
.tech-text {
    margin-left: 46px;
    font-size: 16px;
    line-height: 18px;
    color: #000;
    @media (max-width: $w-sm) {
        margin-left: 10px;
        font-size: 14px;
        line-height: 16px;
    }
}
@keyframes enlarge {
    0% {
        transform: scale(1.5) rotate(-5deg);
    }
    100% {
        transform: scale(1) rotate(0deg);
    }
}
</style>