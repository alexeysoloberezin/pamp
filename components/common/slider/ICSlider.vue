<template>
    <div class="glide ic-slider" ref="slider">
        <div class="glide__track" data-glide-el="track">
            <ul
                class="glide__slides"
                :style="{ paddingBottom: noControls ? '15px' : 'none' }"
            >
              <li
                v-for="(ic, i) in ics"
                :key="i"
              >
                <nuxt-link
                  v-if="ic.href"
                  :to="
                      $root.query
                          ? `${ic.href}/${$root.query}`
                          : `${ic.href}/`
                    "
                  class="glide__slide"
                >
                    <img
                      :src="getPic(ic.pic)"
                      style="width: 100%; height: 100%;padding: 20px"
                      :alt="ic.href || i"
                    />
                </nuxt-link>
                <div v-else  class="glide__slide">
                  <img
                    :src="getPic(ic.pic)"
                    style="width: 100%; height: 100%;padding: 20px"
                    :alt="i"
                  />
                </div>
              </li>
            </ul>
        </div>
        <div
            v-show="!noControls"
            class="slider-carousel-btn-container"
            data-glide-el="controls"
        >
            <div ref="prevBtn" data-glide-dir="<" class="carousel-btn">
                <img src="@/assets/images/bl2/arrow-dir.svg" alt="arrow" />
            </div>
            <div ref="nextBtn" data-glide-dir=">" class="carousel-btn">
                <img
                    style="transform: rotate(180deg)"
                    src="@/assets/images/bl2/arrow-dir.svg"
                    alt="arrow"
                />
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Ref } from "vue-property-decorator";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import { Pages } from "~/model/entities/pages";

@Component
export default class ICSlider extends Vue {
    @Prop(Boolean) noControls: boolean;
    @Prop({ default: () => Pages.default }) page: Pages;
    @Prop(Boolean) disableLinks: boolean;
    @Ref("slider") slider;

    mounted() {
        let carousel = new Glide(".glide", {
            type: "carousel",
            gap: 15,
            perView: 6,
            autoplay: 360000,
            peek: { before: 80, after: 80 },
            breakpoints: {
                1024: {
                    perView: 4,
                },
                600: {
                    perView: 2,
                },
            },
        });
        carousel.on("run.before", (evt) => {
            const scrollSteps = (this as any).$vuetify.breakpoint.smAndDown
                ? 1
                : 3;

            evt.steps = evt.direction === ">" ? -scrollSteps : scrollSteps;
        });
        carousel.on("run.after", () => {
            this.setSlidesOverlay();
        });

        carousel.mount();

        setTimeout(() => {
            this.setSlidesOverlay();
        }, 400);
    }

    get ics() {
        const ics = {
            [Pages.default]: [
                { pic: "a", href: "/partner/alfa-strahovanie" },
                { pic: "i", href: "/partner/ingosstrah" },
                { pic: "m", href: "/partner/maks" },
                { pic: "ren", href: "/partner/renessans" },
                { pic: "res", href: "/partner/reso-garantiya" },
                { pic: "ro", href: "/partner/rosgosstrah" },
                { pic: "so", href: "/partner/soglasie" },
                { pic: "t", href: "/partner/tinkoff-strahovanie" },
                { pic: "v", href: "/partner/vsk" },
                { pic: "y", href: "/partner/ugoria" },
                { pic: "z", href: "/partner/zetta" },
                { pic: "as", href: "/partner/absolyut-strahovanie" },
                { pic: "sog", href: "/partner/sogaz" },
                { pic: "av", href: "/partner/astrovolga" },
            ],
            [Pages.Mortgage]: [
                { pic: "rosgosstrah", href: "/partner/rosgosstrah" },
                { pic: "zetta", href: "/partner/zetta" },
                { pic: "sber", href: "/partner/sberbank-strahovanie" },
                { pic: "pari", href: "/partner/pari" },
                { pic: "alfa", href: "/partner/alfa-strahovanie" },
                { pic: "absolut", href: "/partner/absolyut-strahovanie" },
                { pic: "soglasie", href: "/partner/soglasie" },
            ],
            [Pages.Kasko]: [
                { pic: "a", href: "/partner/alfa-strahovanie" },
                { pic: "i", href: "/partner/ingosstrah" },
                { pic: "m", href: "/partner/maks" },
                { pic: "ren", href: "/partner/renessans" },
                { pic: "res", href: "/partner/reso-garantiya" },
                { pic: "ro", href: "/partner/rosgosstrah" },
                { pic: "so", href: "/partner/soglasie" },
                { pic: "t", href: "/partner/tinkoff-strahovanie" },
                { pic: "v", href: "/partner/vsk" },
                { pic: "y", href: "/partner/ugoria" },
                { pic: "z", href: "/partner/zetta" },
                { pic: "as", href: "/partner/absolyut-strahovanie" },
                { pic: "sog", href: "/partner/sogaz" },
                { pic: "av", href: "/partner/astrovolga" },
                { pic: "euroins" },
                { pic: "g" },
                { pic: "gaide" },
                { pic: "energogarant" },
                { pic: "sovkom" },
                { pic: "tit" },
            ],
          [Pages.mfoOffers]: [
            { pic: "Carmoney", href: "/affiliate-program/carmoney" },
            { pic: "Amoney", href: "/affiliate-program/adengi" },
            { pic: "cashMFO", href: "/affiliate-program/otlichnye-nalichnye" },
            { pic: "bankiRu", href: "" },
            { pic: "dobrozaim", href: "/affiliate-program/dobrozajm" },
            { pic: "knopka", href: "/affiliate-program/knopka-dengi" },
            { pic: "Lime", href: "/affiliate-program/lime" },
            { pic: "ezaem", href: "/affiliate-program/ezaem" },
            { pic: "fastmoney", href: "/affiliate-program/fast-money" },
          ],
        };
        return ics[this.page];
    }

    getPic(name) {
        return this.page !== Pages.mfoOffers ?  require(`@/assets/images/ics/padded/${name}2x.png`) : require(`@/assets/images/affiliate-program/mfo/${name}.webp`);
    }

    next() {
        (this.$refs.nextBtn as any).click();
    }

    prev() {
        (this.$refs.prevBtn as any).click();
    }

    carouserInterval = null;
    carouselScroll = 0;

    get blockMargins() {
        if ((this as any).$vuetify.breakpoint.mdAndUp) return 140;
        else return 30;
    }

    get blockSize() {
        if ((this as any).$vuetify.breakpoint.mdAndUp) return 220;
        else return 147;
    }
    setSlidesOverlay() {
        if(!this.slider) return null

        const slides = this.slider.querySelectorAll("a");
        slides.forEach((slide, index) => {
            if (
                slide.classList.contains("glide__slide--active") &&
                this.$vuetify.breakpoint.lgAndUp
            ) {
                const overlayedSlides = [
                    slides[index - 1],
                    slides[index + 5],
                    slides[index + 6],
                ];
                //Из-за того, что слайдер сам очищает классы, приходится писать костыль на задержку
                overlayedSlides.forEach((elem) =>
                    setTimeout(
                        () => elem.classList.add("glide__slide--active"),
                        0
                    )
                );
            }
        });
    }

    scroll(val) {
        this.carouselScroll += val;
    }
}
</script>
<style lang="scss">
.ic-slider.glide {
    $slider-track-to-btns-padding: 50px;

    .glide__slides {
        padding: #{$slider-track-to-btns-padding / 2} 0 #{$slider-track-to-btns-padding};
    }

    .glide__slide {
        background: white;
        display: block;
        box-shadow: 0px 5px 25px rgba(203, 207, 216, 0.28);
    }

    .slider-carousel-btn-container {
        display: flex;
        justify-content: space-between;
        margin: auto;
        width: 128px;
        padding: 0 0 #{$slider-track-to-btns-padding};

        .carousel-btn {
            margin: 0;
        }
    }

    @media (max-width: $w-sm) {
        .glide__slides {
            padding: #{$slider-track-to-btns-padding / 4} 0 #{$slider-track-to-btns-padding /
                2};
        }
        .slider-carousel-btn-container {
            width: 85px;
            padding: #{$slider-track-to-btns-padding / 2} 0;
        }
    }
}
</style>
