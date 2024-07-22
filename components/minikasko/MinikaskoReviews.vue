<template>
  <Reviews product="minikasko" class="minikasko-reviews"/>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import Reviews from "~/components/common/Reviews/Reviews";
@Component({
  components: {
    Reviews,
  }
})
export default class MinikaskoReviews extends Vue {
}
</script>

<style lang="scss">
.minikasko-reviews {
  .reviews-subtitle {
    opacity: .5;
  }
  .au-carousel-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0px 2px 14px rgba(214, 214, 214, 0.33);
    transition: box-shadow 150ms;
    img {
      width: 7px;
    }
    &:not(.disabled) {
      cursor: pointer;
      box-shadow: 0px 2px 14px rgba(149, 75, 239, 0.26);
      &:hover {
        box-shadow: 0px 2px 10px rgba(214, 214, 214, 0.53);
      }
      img {
        filter: grayscale(100%) brightness(100%) sepia(100%)
        hue-rotate(-150deg) saturate(500%) contrast(0.8);
      }
    }
  }
  .au-carousel-btn-container {
    display: flex;
    justify-content: space-between;
    margin: auto;
    width: 90px;
    margin: 0px auto;
    max-width: 90px;
    @media (max-width: $w-sm) {
      width: 90px;
    }
  }
}
</style>
