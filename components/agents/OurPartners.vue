<template>
    <div class="agents-partners partners-slider-gen2">
        <div class="agents-container">
            <div class="partners-options">
                <h2 v-text="'Наши партнеры'" class="partners-title mr-10" />
                <div
                    style="display: flex"
                    :class="{ 'mt-5': $vuetify.breakpoint.smAndDown }"
                >
                    <div
                        class="partners-item"
                        :class="{ active: item.type === selectedPartner.type }"
                        v-for="(item, i) in partners"
                        :key="i"
                        v-html="item.title"
                        @click="selectPartner(item)"
                    />
                </div>
            </div>
            <h3 class="mt-5 partners-description">
                Станьте представителем крупнейших компаний, которые готовы
                платить вам за продажи и новых клиентов
            </h3>
        </div>
        <div class="mt-8" style="position: relative">
            <div class="arrow arrow-prev" @click="prev">
                <svg xmlns="http://www.w3.org/2000/svg" width="83" height="83" fill="none"><g filter="url(#a)"><path fill="#fff" fill-rule="evenodd" d="M41.5 66a26.5 26.5 0 1 0 0-53 26.5 26.5 0 0 0 0 53Z" clip-rule="evenodd"/></g><path stroke="currentColor" stroke-linecap="round" stroke-width="2.4" d="m45 31-6.8 8c-.3.3-.3.7 0 1l6.8 8"/><defs><filter id="a" width="83" height="83" x="0" y="0" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="7.5"/><feColorMatrix values="0 0 0 0 0.584314 0 0 0 0 0.294118 0 0 0 0 0.937255 0 0 0 0.257649 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1211_4775"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_1211_4775" result="shape"/></filter></defs></svg>
            </div>
            <v-fade-transition mode="out-in">
                <component
                    :is="currentSlider"
                    :no-controls="$vuetify.breakpoint.lgAndUp"
                    ref="slider"
                    :disableLinks="selectedPartner.type === partnerTypes.Banks"
                />
            </v-fade-transition>
            <div class="arrow arrow-next" @click="next">
                <svg
                    width="83"
                    height="83"
                    viewBox="0 0 83 83"
                    fill="none"
                    style="transform: rotate(180deg)"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g filter="url(#filter0_d_1211_4775)">
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M41.5 66C56.1355 66 68 54.1355 68 39.5C68 24.8645 56.1355 13 41.5 13C26.8645 13 15 24.8645 15 39.5C15 54.1355 26.8645 66 41.5 66Z"
                            fill="white"
                        />
                    </g>
                    <path
                        d="M45 31L38.2009 38.9812C37.9462 39.2802 37.9462 39.7198 38.2009 40.0188L45 48"
                        stroke="currentColor"
                        stroke-width="2.4"
                        stroke-linecap="round"
                    />
                    <defs>
                        <filter
                            id="filter0_d_1211_4775"
                            x="0"
                            y="0"
                            width="83"
                            height="83"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                        >
                            <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dy="2" />
                            <feGaussianBlur stdDeviation="7.5" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.584314 0 0 0 0 0.294118 0 0 0 0 0.937255 0 0 0 0.257649 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_1211_4775"
                            />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_1211_4775"
                                result="shape"
                            />
                        </filter>
                    </defs>
                </svg>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Ref } from "vue-property-decorator";
import ICSlider from "~/components/common/slider/ICSlider.vue";
import BankSlider from "~/components/common/slider/BankSlider.vue";

@Component({
    components: { BankSlider, ICSlider },
})
export default class OurPartners extends Vue {
    @Ref("slider") slider;

    partners = [
        {
            title: "Страховые компании",
            type: PartnerTypes.Insurances,
        },
        {
            title: "Банки",
            type: PartnerTypes.Banks,
        },
    ];
    selectedPartner = this.partners[0];
    partnerTypes = PartnerTypes;

    selectPartner(item) {
        this.selectedPartner = item;
    }
    get currentSlider() {
        const isBanksSelected =
            this.selectedPartner.type === this.partnerTypes.Banks;
        return isBanksSelected ? "BankSlider" : "ICSlider";
    }

    prev() {
        this.slider.prev();
    }

    next() {
        this.slider.next();
    }
}

enum PartnerTypes {
    Insurances,
    Banks,
}
</script>

<style lang="scss">
.agents-partners {
    background: #f9f9fc;
    padding: 50px 0;
    position: relative;
    @media (max-width: $w-md) {
        padding: 45px 0 0;
    }
}
.partners-slider-gen2 {
    .partners-title {
        font-family: Montserrat, sans-serif;
        font-weight: bold;
        font-size: 35px;
        line-height: 40px;
        @media (max-width: $w-md) {
            font-size: 19px;
            line-height: 23px;
        }
    }

    .partners-description {
        font-family: Montserrat, sans-serif;
        font-weight: normal;
        font-size: 20px;
        line-height: 30px;
        @media (max-width: $w-md) {
            font-size: 14px;
            line-height: 21px;
        }
    }

    .partners-options {
        display: flex;
        align-items: center;
        @media (max-width: $w-md) {
            flex-direction: column;
            align-items: flex-start;
        }
    }

    .partners-item {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #cfd7e0;
        color: #6138da;
        font-size: 18px;
        border-radius: 5px;
        transition: border 0.3s;
        padding: 10px 34px;
        cursor: pointer;
        background: #f9f9fc;

        &:not(:last-child) {
            margin-right: 22px;
            @media (max-width: $w-md) {
                margin-right: 20px;
            }
        }

        @media (max-width: $w-sm) {
            padding: 12px;
            font-size: 15px;
            line-height: 15px;
        }

        &:hover {
            border: 1px solid #6c4ad0;
        }

        &.active {
            border: 1px solid #6138da;
            font-weight: bold;
        }
    }

    .glide__slides {
        padding: 20px 0 !important;
        .glide__slide {
            transition: 0.3s;
            &--active {
                opacity: 0.5;
                @media (max-width: $w-md) {
                    opacity: 1;
                }
            }
        }
        @media (max-width: $w-md) {
            padding: 0 !important;
        }
    }

    .arrow {
        cursor: pointer;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 10;
        transition: 0.3s;
        @media (max-width: $w-md) {
            display: none;
        }

        &-prev {
            left: 17%;
        }

        &-next {
            right: 17%;
        }

        &:hover {
            color: #954bef;
        }
    }
}
</style>
