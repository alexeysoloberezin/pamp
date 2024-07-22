<template>
  <div class="gift-page">
    <Banner/>
    <Nomination title="Чем больше продаж и заявок, <br/><span> тем лучше</span> призы и выше шансы на победу!"/>
    <Products/>
    <div class="mt-10 pt-10"></div>
    <ConditionsGift/>
    <Faq :page="faqPage" class="pb-12"/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import Banner from "~/components/new-year/2024/Banner.vue";
import Nomination from "~/components/univerese-gift/Nomination.vue";
import Products from "~/components/new-year/2024/Products.vue";
import Competishion from "~/components/univerese-gift/Competishion.vue";
import Winner from "~/components/univerese-gift/Winner.vue";
import ConditionsGift from "~/components/new-year/2024/ConditionsGift.vue";
import Faq, {FaqPages} from "~/components/common/Faq.vue";
import ApiHelper from "~/utils/ApiHelper";
import {Meta} from "~/utils/meta";

@Component({
  components: {
    Faq,
    ConditionsGift,
    Winner,
    Competishion,
    Products,
    Nomination,
    Banner
  }
})

export default class UniverseGift extends Vue {
  faqPage = FaqPages.NewYear

  head() {
    return {
      title: "Pampadu Время чудес!",
      link: [
        {
          rel: 'canonical',
          hid: 'canonical',
          href: ApiHelper.origin + this.$route.path
        }
      ],
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Время чудес на Пампаду! Продавай в декабре и получай",
        },
        {
          name: "robots",
          content: "noindex, nofollow"
        },
        Meta.generateOgUrl(this.$route),
      ],
    }
  }
}
</script>

<style lang="scss">

.subhead {
  color: #000;
  text-align: center;
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 29px;
  @media (max-width: $w-md) {
    font-size: 16px;
    line-height: 18px;
  }
}

.shapes {
  position: absolute;
  z-index: 0;
  pointer-events: none;
  object-fit: contain;
  @media (max-width: 1399px) {
    display: none;
  }

  &.v1 {
    top: 70px;
    right: 0;
  }

  &.v2 {
    top: 0;
    left: 0;
  }

  &.v3 {
    top: 25%;
    right: 0;
  }

  &.v4 {
    bottom: -100px;
    left: 0;
  }

  &.v5 {
    left: 150px;
    bottom: 0;
  }
}
</style>
