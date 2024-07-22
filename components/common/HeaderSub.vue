<template>
    <div v-if="blockLinks.length > 0 && $vuetify.breakpoint.mdAndUp">
        <div class="headbar-sub-padder" v-html="'&nbsp;'" />
        <div class="headbar-subitems">
            <span
                v-for="link in blockLinks"
                :key="link.code"
                class="a"
                @click="scrollTo(`#${link.code}`)"
                v-text="link.title"
            />
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class HeaderSub extends Vue {
    @Prop({ default: () => [] }) blockLinks: {
        code: string;
        title: string;
    }[];

    scrollTo(query) {
        document.querySelector(query)?.scrollIntoView?.({
            block: "start",
            inline: "start",
            behavior: "smooth",
        });
    }
}
</script>
<style lang="scss">
.headbar-sub-padder {
    height: 34px;
}
.headbar-subitems {
    background: #f9f9fc;
    width: 100%;
    position: fixed;
    z-index: 99;
    top: 76px;
    display: flex;
    justify-content: center;
    box-shadow: 0px 12px 43px rgb(122 55 231 / 8%);

    box-shadow: 0px 2px 43px rgba(122, 55, 231, 0.13);
    .a {
        padding: 6px 15px;
        font-weight: normal;
        font-size: 15px;
        color: #2d2645;
        box-shadow: inset 0px 0px 0px 0px #7f3ae9;
        transition: box-shadow 0.3s, color 0.15s, background-color 0.15s;
        color: #2d26458c !important;
        background-color: #f9f1ff00;
        &:hover {
            background-color: #f9f1ffff;
        }
        &.sub-active {
            color: #2d2645 !important;
            box-shadow: inset 0px -2px 0px 0px #7f3ae9;
        }
    }

    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
        // ie10-11 fix
        justify-content: center;
        a,
        .a {
            margin: 0 10px;
        }
    }
    a:not(.btn) {
        padding: 0;
        @media (max-width: $w-md) {
            font-size: 14px;
        }
    }
}
</style>
