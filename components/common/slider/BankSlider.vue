<template>
  <div class="glide bank-slider" ref="slider">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
        <component
          :is="bank.href ? 'nuxt-link' : 'div'"
          :to="bank.href ? `${bank.href}${$root.query}` : '/'"
          v-for="(bank, i) in banks"
          :key="i"
        >
          <li class="glide__slide">
            <img
              :src="getPic(bank.pic)"
              style="width: 100%; height: 100%"
              :alt="i"
            />
          </li>
        </component>
      </ul>
    </div>
    <div
      v-show="!noControls"
      class="slider-carousel-btn-container"
      data-glide-el="controls"
    >
      <div ref="prevBtn" data-glide-dir="<" class="carousel-btn">
        <img src="@/assets/images/bl2/arrow-dir.svg" alt="arrow"/>
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
import {Component, Prop, Vue, Ref} from "vue-property-decorator";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";

@Component
export default class BankSlider extends Vue {
  @Prop(Boolean) noControls: boolean;
  @Prop({type: Boolean, default: () => true}) disableLinks: boolean;
  @Prop({
    default: () => [
      {pic: "sber", href: ""},
      {pic: "vtb", href: "/affiliate-program/vtb/"},
      {pic: "raif", href: ""},
      {pic: "gazprom", href: "/gazprombank/"},
      {pic: "unicredit", href: ""},
      {pic: "dom", href: ""},
      {pic: "vozrozhdenie", href: ""},
    ]
  }) banks: string[];
  @Ref("slider") slider;

  mounted() {
    let carousel = new Glide(".bank-slider", {
      type: "carousel",
      gap: 15,
      perView: 6,
      autoplay: 360000,
      peek: {before: 80, after: 80},
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

  getPic(name) {
    return require(`@/assets/images/common/slider/banks/padded/${name}.webp`);
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

  scroll(val) {
    this.carouselScroll += val;
  }
}
</script>
<style lang="scss">
.bank-slider.glide {
  $slider-track-to-btns-padding: 50px;

  .glide__slide {
    background: white;
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
