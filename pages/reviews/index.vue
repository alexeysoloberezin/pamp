<template>
  <div class="wrapper">
    <p-video/>
    <div class="generic-container-1260">
      <div class="review-tabs">
        <a
          class="products-item"
          v-for="(tab, i) in tabs"
          :key="tab.key"
          v-html="tab.title"
          :href="'#' + tab.key"
          :class="{'active': tab.key === activeTab}"
          @click="changeTab(tab.key)"
        />
      </div>
    </div>
    <section
      v-if="data.length > 0"
      :class="['review-grid', isEndOfReviews ? 'review-grid--end' : '']"
    >
      <div
        class="review-grid__wrapper"
        column-width="370px"
        transition-duration="0.1s"
        item-selector=".review-grid__item"
      >
        <div class="masonry-grid"
        >
          <div class="masonry-grid-sizer"></div>
          <p-review
            v-for="(item, index) of data"
            :key="index"
            :name="item.name"
            :location="item.location"
            :video-src="item.videoSrc"
            :video-id="item.videoId"
            :time="item.time"
            :person="item.person"
            :video-background="item.videoBackground"
            :profile-image="item.profileImage"
            :img="item.img"
            :poster="item.poster"
            :text="item.text"
            :rating="item.rating"
            :type="item.type"
            :date="item.date"
            :tab="item.tab"
            class="review-grid__item"
          />
        </div>
      </div>
    </section>
    <section class="more" v-show="!isEndOfReviews">
      <base-btn class="more__button review__more" @click="loadMore" style="max-width: 285px;height: 59px !important;">
        Загрузить еще отзывы
      </base-btn>
    </section>
  </div>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import PVideo from "@/components/reviews/Video.vue";
import PReview from "@/components/reviews/Review.vue";
import Footer from "@/components/common/Footer.vue";
import BaseBtn from "@/components/BaseBtn.vue";
import imagesloaded from "imagesloaded";
import {Review, getData} from "@/components/reviews/data";
import ApiHelper from "~/utils/ApiHelper";
import {Meta} from "~/utils/meta";
import {createJsonLd} from "~/utils/createJSON_LD";

@Component({
  components: {
    PVideo,
    PReview,
    Footer,
    BaseBtn,
  },
})
export default class Index extends Vue {
  head() {
    return {
      title: "Отзывы о Пампаду от настоящих пользователей и партнеров",
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
            "Мы собрали отзывы о Пампаду от агентов, брокеров, владельцев сайтов, малого и среднего бизнеса. Вы можете оставить свой отзыв или прочитать дополнительные в Google или Яндексе.",
        },
        Meta.generateOgUrl(this.$route),
      ],
      script: [
        createJsonLd([
          {
            name: "Отзывы",
            path: "reviews",
          }
        ]),
      ],
    };
  }

  edge: number = 9;

  activeTab: string = 'insurance'

  data: Review[] = getData(this.activeTab).slice(0, this.edge);

  tabs = [
    {
      title: "Страхование",
      key: "insurance",
    },
    {
      title: "Банки и МФО",
      key: "banksMfo",
    },
    {
      title: "HR",
      key: "hr"
    },
  ]
  isEndOfReviews: boolean = false;

  masonry = {
    appended: (e) => {
    },
    layout: () => {
    },
  };

  async mounted() {
    await this.loadMasonry()
  }

  async changeTab(tab) {
    if(tab === this.activeTab) return null

    this.activeTab = tab
    this.edge = 9
    this.isEndOfReviews = false
    this.data = getData(this.activeTab).slice(0, this.edge);

    setTimeout(async () => {
      await this.loadMasonry()
      if (this.data.length === getData(this.activeTab).length) {
        this.isEndOfReviews = true;
      }
    }, 0)
  }

  loadMasonry() {
    imagesloaded(".masonry-grid", async () => {
      const grid = document.querySelector(".masonry-grid");

      this.masonry = new this.$masonry(grid, {
        columnWidth: ".masonry-grid-sizer",
        itemSelector: ".review-grid__item",
        gutter: 30,
        fitWidth: true,
      });
      window.addEventListener("resize", () => {
        setTimeout(() => {
          this.masonry.layout();
        }, 0);
      });
    });
  }

  beforeDestroy() {
    window.removeEventListener("resize", this.masonry.layout);
  }

  loadMore() {
    const oldLength: number = this.data.length;

    // Добавлять элементы в отображаемые отзывы
    this.data = this.data.concat(getData(this.activeTab).slice(this.edge, this.edge + 9));
    this.edge += 9;

    this.$nextTick(() => {
      const gridItems: any =
        document.getElementsByClassName("review-grid__item");

      const elements = [];

      for (let index = oldLength; index < this.data.length; index++) {
        elements.push(gridItems[index]);
      }

      this.masonry.appended(elements);

      if (this.data.length === getData(this.activeTab).length) {
        this.isEndOfReviews = true;
      }
      // Отзывов больше нет
    });
  }
}
</script>

<style lang="scss">
.v-application--wrap {
  overflow: hidden;
}
</style>


<style scoped lang="scss">
.review__more{
  &,*{
    letter-spacing: 0;
    font-size: 18px !important;
  }
}
.wrapper {
  overflow: hidden;
  position: relative;
}

.review-tabs {
  display: flex;
  grid-row-gap: 20px;
  flex-wrap: wrap;
  margin: 60px 0 0 0;
}

.products-item {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #CFD7E0;
  color: #6138da;
  font-size: 18px;
  border-radius: 5px;
  transition: 0.3s;
  padding: 10px 34px;
  cursor: pointer;
  background: #fff;
  @media (max-width: $w-md) {
    font-size: 15px;
    line-height: 15px;
  }

  &:not(:last-child) {
    margin-right: 22px;
  }

  @media (max-width: $w-sm) {
    padding: 14px 16px;
  }

  &:hover {
    border: 1px solid #6c4ad0;
  }

  &.active {
    border: 1px solid #6138da;
    font-weight: bold;
  }

  &.disabled {
    opacity: 0.5;
    border: 1px solid #cfd7e0;
    pointer-events: none;
  }
}

.review-grid {
  width: 100%;
  position: relative;

  display: flex;
  justify-content: center;

  padding-bottom: 57px;
  margin-top: 45px;
  margin-bottom: -400px;

  background: #ffffff;
}

.review-grid--end {
  margin-bottom: 0;
}

.review-grid__wrapper {
  max-width: 1210px;
  width: 100%;

  padding-left: 9px;
}

.review-grid__item {
  margin-bottom: 62px;
}

.review-grid__item:nth-child(6n)::before {
  content: url("~@/assets/images/reviews/trang.svg");
  position: absolute;
  right: -70px;
  z-index: 0;
}

.review-grid__item:nth-child(6n)::after {
  content: url("~@/assets/images/reviews/trang-empty.svg");
  position: absolute;
  left: -90px;
  z-index: 0;
}

.masonry-grid-sizer {
  width: 380px;
}

.more {
  width: 100%;
  height: 287px;
  position: absolute;
  bottom: 0px;
  z-index: 2;

  display: flex;
  justify-content: center;

  background-color: #ffffff;
}

.more__button {
  width: 1210px;
  max-width: 1210px;
  z-index: 20;
}

.more::before {
  content: "";
  position: absolute;
  top: -120px;
  display: block;
  width: 100%;
  height: 120px;
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.75) 100%
  );
}

@media (max-width: $w-md) {
  .review-grid {
    display: flex;
    justify-content: center;
  }

  .more {
    height: 327px;
  }

  .review-grid__wrapper {
    width: max-content;
    max-width: 100%;
    padding-left: 9px;
  }
}

@media (max-width: $w-sm) {
  .review-grid {
    margin-bottom: -200px;
  }

  .review-grid--end {
    margin-bottom: 0;
  }

  .more {
    height: 670px;
  }
}

@media (max-width: $w-xs) {
  .review-grid__wrapper {
    max-width: 100%;
    padding-left: 0;
  }

  .more {
    height: 690px;
  }

  .masonry-grid-sizer {
    width: 320px;
  }
}
</style>
