<template>
    <div class="osago-whos-need" :style="`background-color: ${bgColor}`">
        <div id="own" style="position: absolute; top: -100px" />
        <div class="generic-container-1260">
            <h2 class="whos-need-title" v-html="title" />
            <div class="whos-need-wrapper">
                <div
                    class="whos-need-item"
                    v-for="(item, i) in items"
                    :key="i"
                    ref="whos-need-item"
                >
                    <div class="item-front">
                        <img
                            style="max-width: 100%"
                            :src="icons[i]"
                            alt="whos-need-icon"
                        />
                        <div
                            class="my-2 mb-4 item-title"
                            style="max-width: 380px; margin: 0 auto"
                            v-html="item.title"
                        />
                        <button
                            style="text-decoration: underline; color: #7245ff"
                            v-text="'Подробнее'"
                            @click="flipCard"
                        />
                    </div>
                    <div class="item-back deco" @click="flipCard">
                        <v-icon
                            style="position: absolute; right: 8px; top: 8px"
                            v-text="'mdi-close'"
                        />
                        <div
                            v-for="(description, index) in item.description"
                            :key="index"
                        >
                            <p
                                v-html="description"
                                style="font-size: 14px; text-align: left"
                                class="back-description"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="showZond" style="text-align: center">
                <zond-btn v-text="'Попробовать'" style="min-width: 220px" />
            </div>
            <AppstoreLinksСommon v-if="false" />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Ref, Prop } from "vue-property-decorator";
import AppstoreLinksСommon from "~/components/common/appStoreLinks/AppStoreLinksСommon.vue";
import { finOfferItems, hrItems, minikaskoItems, osagoItems } from "~/model/WhoIsNeed";

@Component({
    components: { AppstoreLinksСommon },
})
export default class WhosNeed extends Vue {
    @Prop(Boolean) showZond;
    @Prop({ default: () => "#f2f5ff" }) bgColor;
    icons = [
        require("@/assets/images/osago/whosNeed/agent.svg"),
        require("@/assets/images/osago/whosNeed/business.svg"),
        require("@/assets/images/osago/whosNeed/webmaster.svg"),
        require("@/assets/images/osago/whosNeed/all.svg"),
    ];
    @Prop({ default: () => "Кто уже зарабатывает на ОСАГО<br>через Пампаду?" })
    title: string;
    @Prop({ default: "osago" }) page: "osago" | "finoffers" | "minikasko";
    get items() {
        return {
            osago: osagoItems,
            finoffers: finOfferItems,
            minikasko: minikaskoItems,
            hr: hrItems
        }[this.page];
    }
    @Ref("whos-need-item") whosNeedItem;

    flipCard(e) {
        const card = e.target.closest(".whos-need-item");
        const front = card.querySelector(".item-front");
        const back = card.querySelector(".item-back");

        if (card.classList.contains("flipped")) {
          front.style.minHeight = ''
          card.style.height = ''
        } else {
            front.style.minHeight = card.clientHeight + "px";
            card.style.height = back.scrollHeight + "px";
        }
        card.classList.toggle("flipped");
    }
    get breakpoint() {
        return this.$vuetify.breakpoint.name;
    }
    @Watch("breakpoint")
    collapseCard(breakpoint, oldBreakpoint) {
        if (breakpoint != oldBreakpoint) {
            this.whosNeedItem.map((item) => {
                if (item.classList.contains("flipped")) {
                    item.classList.remove("flipped");
                    item.style.height =
                        item.querySelector(".item-front").clientHeight + "px";
                }
            });
        }
    }
}
</script>

<style lang="scss">
.osago-whos-need {
    padding: 65px 0 40px;
    position: relative;
}
.whos-need-title {
    text-align: center;
    font-family: Montserrat, sans-serif;
    font-size: 35px;
    line-height: 1.15;
    font-weight: bold;
    margin: 0 auto;
    @media (max-width: $w-sm) {
        font-size: 19px;
    }
}
.whos-need-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    &.whos-need-cols-4 {
        grid-template-columns: repeat(4, 1fr);
        @media (max-width: $w-sm) {
            grid-auto-rows: minmax(290px, auto);
            grid-template-columns: 1fr 1fr !important;
            grid-gap: 15px;
        }
    }
    grid-auto-rows: minmax(257px, auto);
    grid-gap: 25px;
    margin: 40px 0;
    @media (max-width: $w-xs) {
        grid-auto-rows: minmax(290px, auto);
        grid-template-columns: 1fr !important;
        grid-gap: 15px;
    }
}
.whos-need-item {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    position: relative;
    text-align: center;
    perspective: 1000px;
    border-radius: 11px;
    transition: 0.3s;
    .item-title {
        font-family: Montserrat, sans-serif;
        font-weight: bold;
        line-height: 1.3;
        @media (max-width: $w-md) {
            font-size: 14px;
        }
    }
    .item-front,
    .item-back {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        min-height: 100%;
        padding: 28px;
        transition: 1s;
        backface-visibility: hidden;
        box-shadow: 0 2px 14px rgba(114, 69, 255, 0.12);
        background: white;
        border-radius: 11px;
        &:hover {
            box-shadow: 0 2px 14px rgba(114, 69, 255, 0.4);
        }
    }
    .item-back {
        transform: rotateY(180deg);
        cursor: pointer;
        &.deco {
            padding-left: 60px;
            .back-description:before {
                position: absolute;
                content: url("@/assets/images/osago/profit/check.svg");
                left: -20px;
                top: 2px;
            }
        }
        .back-description {
            margin-bottom: 0;
            max-width: 440px;
            font-family: Montserrat, sans-serif;
            position: relative;
            &.compact {
                font-family: Roboto, sans-serif;
                font-size: 14px;
                line-height: 19px;
            }
        }
    }
    &.flipped {
        .item-front {
            transform: rotateY(180deg);
        }
        .item-back {
            transform: rotateY(360deg);
        }
    }
}
</style>
