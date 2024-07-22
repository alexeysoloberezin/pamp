<template>
    <div style="position: relative">
        <div class="hr-head">
            <DecoSpot
                :diameter="530"
                :top="0"
                :right="0"
                style="transform: translate(50%, -50%)"
            />
            <DecoTri
                :tri="{
                    left: '33%',
                    top: '90px',
                    color: '#0060A9',
                    opacity: 0.08,
                    rotate: '-157deg',
                    size: 23,
                }"
            />
            <DecoTri
                :tri="{
                    left: '30%',
                    bottom: '90px',
                    color: '#D863E0',
                    rotate: '150deg',
                    size: 18,
                }"
            />
            <DecoTri
                :tri="{
                    top: '50px',
                    right: '80px',
                    color: '#FFF',
                    opacity: 0.5,
                    rotate: '115deg',
                    size: 20,
                    hollow: true,
                }"
            />
            <div class="hr-head-first-block">
                <div class="hr-head-title">
                    <div v-text="'Работайте'" />
                    <v-slide-y-reverse-transition mode="out-in">
                        <div
                            class="primary--text font-weight-bold"
                            style="line-height: 1; max-width: 440px"
                            :key="changingTitle"
                            v-html="changingTitle"
                        />
                    </v-slide-y-reverse-transition>
                </div>
                <div
                    class="mt-3 mb-2"
                    style="font-size: 20px"
                    v-text="
                        'Отправьте резюме или посмотрите открытые вакансии.'
                    "
                />
                <a class="btn text-center mt-4" @click="$emit('sendResume')">
                    <span v-text="'Отправить резюме'" />
                </a>
            </div>
            <div class="hr-head-last-block">
                <div class="circling-text">
                    <span
                        :class="`circling-char-${i}`"
                        v-for="(char, i) in 'WELCOME TO OUR TEAM '"
                        :key="i"
                        v-text="char"
                    />
                </div>
                <img
                    @click="dialog = true"
                    class="hr-header-img"
                    src="@/assets/images/hr/hr-header-img.png"
                />
                <v-dialog v-model="dialog">
                    <v-card v-if="dialog" class="pa-4 d-flex">
                        <v-icon
                            @click="dialog = false"
                            class="c-pointer"
                            style="position: absolute; right: 4px; top: 4px"
                            v-text="mdiClose"
                        />
                        <iframe
                            class="ma-4"
                            width="100%"
                            height="100%"
                            style="min-height: 80vh"
                            :src="`https://www.youtube.com/embed/${ytVideo}?autoplay=1`"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        />
                    </v-card>
                </v-dialog>
                <v-layout align-center class="hr-head-social">
                    <a
                        rel="nofollow"
                        target="_blank"
                        href="https://t.me/joinchat/TZvpUlJfAZfdZjuf"
                    >
                        <v-icon
                            class="primary mx-1 hr-tg-icon"
                            color="white"
                            v-text="mdiTelegram"
                        />
                    </a>
                    <a
                        rel="nofollow"
                        target="_blank"
                        href="https://www.youtube.com/channel/UC0SeTdHMfY67ku8e7m-GMTw"
                    >
                        <v-icon
                            class="c-pointer mx-1"
                            size="42"
                            color="primary"
                            v-text="mdiYoutube"
                        />
                    </a>
                    <a
                        rel="nofollow"
                        target="_blank"
                        href="https://www.instagram.com/pampadu.ru/"
                    >
                        <div class="c-pointer primary mx-1 inst-icon">
                            <v-icon
                                size="40"
                                color="white"
                                v-text="mdiInstagram"
                            />
                        </div>
                    </a>
                </v-layout>
            </div>
        </div>
        <div class="hr-title-text-block">
            <div id="au" style="position: absolute; left: 0; top: -90px" />
            <div class="hr-h1" style="min-width: 300px" v-text="'О нас'" />
            <div class="hr-text">
                <b class="primary--text">Пампаду</b> — это активно развивающийся
                стартап в сфере страхования и финансов. В 2020 году мы привлекли
                инвестирование от немецкого холдинга
                <b class="primary--text">Admitad Group</b> в размере 400 000$.
                Входим в топ-3 посредников по объему продаж ОСАГО. На данный
                момент компания оценивается в 350 млн. руб.
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { mdiInstagram, mdiTelegram, mdiYoutube, mdiClose } from "@mdi/js";
import { Component, Vue } from "vue-property-decorator";
@Component
export default class HRHead extends Vue {
    mdiYoutube = mdiYoutube;
    mdiTelegram = mdiTelegram;
    mdiInstagram = mdiInstagram;
    mdiClose = mdiClose;
    dialog = false;

    changingTitle = "без бюрократии<br>&nbsp;";
    titles = [
        "без бюрократии<br>&nbsp;",
        "без долгих согласований",
        "без привязки к&nbsp;офису",
        "в&nbsp;Pampadu.ru<br>&nbsp;",
    ];
    created() {
        let i = 1;
        setInterval(() => {
            this.changingTitle = this.titles[i++ % this.titles.length];
        }, 4000);
    }
    get ytVideo() {
        let now = new Date();
        if (
            now.getMonth() == 3 &&
            now.getDate() == 1 &&
            Math.random() < 0.042069
        )
            return "dQw4w9WgXcQ";
        return "XZhAvjWtOpM";
    }
}
</script>
<style lang="scss">
.hr-head {
    display: flex;
    position: relative;
    padding: 48px 60px;
    margin: auto;
    max-width: 1440px;
    display: flex;
    align-items: center;
    @media (max-width: $w-md) {
        padding: 48px 40px;
    }
    @media (max-width: $w-sm) {
        flex-flow: column;
    }
    @media (max-width: $w-xs) {
        padding: 48px 10px;
    }
}
.hr-head-first-block {
    padding-left: 80px;
    padding-right: 40px;
    min-width: 560px;
    flex: 1 1 auto;
    @media (max-width: $w-md) {
        padding-left: 40px;
        padding-right: 20px;
        min-width: 460px;
    }
    @media (max-width: $w-xs) {
        min-width: unset;
        padding-left: 0;
        padding-right: 6px;
    }
}
.hr-head-last-block {
    width: 100%;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    @media (max-width: $w-sm) {
        margin-top: 20px;
    }
}
.hr-header-img {
    margin: auto;
    cursor: pointer;
    max-width: 658px;
    max-height: 454px;
    transition: max-height 0.3s, max-width 0.3s;
    margin: auto;
    @media (max-width: $w-md) {
        max-width: 493.5px;
        max-height: 340.5px;
    }
}
.hr-head-title {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 45px;
    @media (max-width: $w-md) {
        line-height: 52px;
        font-size: 38px;
    }
    @media (max-width: $w-xs) {
        font-size: 30px;
        line-height: 42px;
    }
}
.hr-head-social {
    position: absolute;
    right: 80px;
    bottom: 0;
    transform: translateY(50%);
    @media (max-width: $w-xs) {
        right: 0px;
    }
}
.hr-tg-icon {
    border-radius: 50%;
    width: 32px;
    height: 32px;
    padding-right: 2px;
}
.inst-icon {
    position: relative;
    border-radius: 28%;
    width: 32px;
    height: 32px;
    .v-icon {
        $icon-offset: -4px;
        position: absolute;
        left: $icon-offset;
        top: $icon-offset;
    }
}
.circling-text {
    position: absolute;
    left: 0;
    bottom: 0;
    color: #8e68ff;
    font-family: Montserrat;
    font-weight: 1000;
    font-size: 22px;
    display: flex;
    width: 144px;
    height: 144px;
    pointer-events: none;
    margin-left: 36px;
    margin-bottom: 36px;
    @media (max-width: $w-sm) {
        margin-left: 0px;
        margin-bottom: 0px;
    }
    // debug:
    // border-color: #000000a0;
    // background: #dddddda0;
    // background: radial-gradient(#00ff00 1%, #ffffff00 2%);
    // transform: rotate(-90deg);
    animation: rotate 10s linear infinite;
    @for $i from 0 through 20 {
        .circling-char-#{$i} {
            // fine-tuning letter-spacing
            // W
            &.circling-char-0 {
                padding-right: 4px;
            }
            // E
            &.circling-char-1 {
                padding-left: 2px;
            }
            // last M
            &.circling-char-18 {
                padding-left: 5px;
            }
            // welcome to the magic numbers land
            position: absolute;
            text-align: center;
            width: 45px;
            height: 84px; // circle diameter
            left: 34.5%;
            top: -8.25%;
            transform-origin: bottom center;
            transform: rotate($i * 17.2deg);
            // debug:
            // border-width: 0.25px;
            // border-style: solid;
            // border-color: #ff000040;
            // background: #dddddd00;
        }
    }
}
@keyframes rotate {
    0% {
        transform: rotate(90deg);
    }
    100% {
        transform: rotate(-270deg);
    }
}
</style>