<template>
    <div class="webtools">
        <div id="wt" style="position: absolute; top: -130px" />
        <h2
            class="h2 px-6"
            :class="{ 'webtools-page': webtoolsPage }"
            v-text="`${titleLeft}аши инструменты для вебмастеров`"
        />
        <div class="webtools-list">
            <div class="webtools-card" v-for="(tool, i) in tools" :key="i">
                <img
                    style="object-fit: contain"
                    :style="{ height: tool.height }"
                    :src="tool.img"
                />
                <span class="webtools-title" v-text="tool.title" />
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class Webtools extends Vue {
    @Prop(Boolean) webtoolsPage: boolean;
    get titleLeft() {
        if (this.webtoolsPage) {
            return "Другие н";
        }
        return "Н";
    }
    tools = [
        {
            img: require("@/assets/images/tools/api.svg"),
            title: "API",
            height: "80px"
        },
        {
            img: require("@/assets/images/tools/banner.svg"),
            title: "Интерактивные баннеры",
            height: "75px"
        },
        {
            img: require("@/assets/images/tools/links.svg"),
            title: "Реферальные ссылки",
            height: "70px"
        }
    ];
}
</script>
<style lang="scss">
.webtools {
    position: relative;
    background-color: #f9f9fc;
    text-align: center;
    padding: 80px 0 120px;
    .h2 {
        margin: 0 auto 30px;
        max-width: 400px;
        &.webtools-page {
            max-width: 600px;
        }
    }
}
.webtools-list {
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 1260px;
    margin: auto;
    @media (max-width: $w-sm) {
        flex-wrap: wrap;
    }
}
.webtools-card {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-between;
    height: 140px;
    max-width: 180px;
    width: 100%;
    margin-top: 30px;
}
.webtools-title {
    max-width: 180px;
    height: 48px;
    font-family: Montserrat;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #000000;
}
</style>