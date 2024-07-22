<template>
  <section class="video">
    <div class="video__wrapper">
      <div class="video__description description">
        <h1 class="description__title">
          Отзывы о Пампаду
        </h1>
        <span class="description__subtitle">
            от настоящих пользователей и партнеров
          </span>
        <p class="description__text">
          Мы собрали отзывы от агентов, брокеров, владельцев сайтов, риэлторов и агентств недвижимости, малого и
          среднего бизнеса. Вы можете оставить свой отзыв или прочитать дополнительные в Gooogle или Яндексе.
        </p>
        <base-btn class="description__button" @click="reviewStatus = true">
          Написать отзыв
        </base-btn>
        <p-review-popup v-model="reviewStatus"/>
        <div class="video__rating rating">
          <div class="rating__item">
            <a href="https://g.page/Pampadu?share" target="_blank">
              <img src="@/assets/images/reviews/googleReviews.webp" alt="google"/>
            </a>
          </div>
          <div class="rating__item">
            <iframe src="https://yandex.ru/sprav/widget/rating-badge/195939798581" width="150" height="50"
                    frameborder="0"></iframe>
          </div>
        </div>
      </div>
      <div class="video__video">
        <youtube outube video-id="XZhAvjWtOpM" ref="youtubeVideo" width="100%" height="390px"></youtube>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import BaseBtn from "@/components/BaseBtn.vue";
import PReviewPopup from "@/components/reviews/ReviewPopup.vue";
import PPlayer from "./PlayerPopup.vue";

@Component({
  components: {
    BaseBtn,
    PReviewPopup,
    PPlayer,
  },
})
export default class Video extends Vue {
  reviewStatus: boolean = false;
}
</script>

<style scoped lang="scss">
.video {
  width: 100%;
  position: relative;

  display: flex;
  justify-content: center;

  padding-bottom: 57px;
  background: #f9f9fc;
}

.video__wrapper {
  max-width: 1210px;
  width: 100%;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.video__wrapper::before {
  content: url("~@/assets/images/reviews/trang-pink.svg");
  position: absolute;

  top: -35px;
  left: -29px;

  z-index: 100;
}

.video__wrapper::after {
  content: url("~@/assets/images/reviews/trang-blue.svg");
  position: absolute;

  bottom: 76px;
  right: -64px;
}

.video__description {
  margin-right: 46px;
}

.video__rating {
  margin-top: 29px;
}

.video__video {
  width: 713px;
  margin-top: 74px;
}

.description {
  max-width: 423px;
}

.description__title {
  margin-top: 65px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  line-height: 43px;
  display: flex;
  flex-direction: column;

  color: #000000;
}

.description__subtitle {
  margin-top: 8px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;

  display: flex;
  align-items: center;

  color: #000000;
}

.description__text {
  margin-top: 36px;
  margin-bottom: 27px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  /* or 140% */

  color: #000000;
}

.description__button {
  width: 213px;
}

.player {
  max-width: 733px;
  max-height: 390px;
  min-width: 390px;
  min-height: 390px;
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-position: center;
  background-size: cover;
  background-image: url("~@/assets/images/reviews/video-preview.jpg");
}

.player__button {
  width: 64px;
  height: 64px;
  background: linear-gradient(243.77deg, #a356f3 -7.35%, #6a2be3 107.02%);
  box-shadow: 0px 2px 25px rgba(113, 48, 229, 0.530649);
}

.player__play {
  max-width: 14px;
  height: 18px;

  margin-left: 4px;
}

.rating {
  display: flex;
}

.rating__item {
  width: 150px;
  height: 50px;

  margin-right: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 4px;

  a {
    height: 100%;
    width: 100%;
  }
}

.rating__item:last-child {
  margin-right: 0;
}

@media (max-width: $w-md) {
  .video__wrapper::before {
    top: -35px;
    left: 10px;
  }

  .video__description {
    margin-right: 10px;
    margin-left: 10px;
  }

  .video__video {
    margin-right: 10px;
  }

  .description__title {
    font-size: 32px;
  }

  .description__subtitle {
    font-size: 18px;
  }

  .description__text {
    font-size: 18px;
  }
}

@media (max-width: $w-sm) {
  .video__wrapper {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .description__title {
    text-align: center;
  }


  .description {
    width: fit-content;
    max-width: 700px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .description__text {
    width: 100%;
    text-align: center;
  }

  .description__subtitle {
    text-align: center;
  }

  .video__video {
    width: 90%;
    margin-left: 10px;
    margin-right: 10px;

    margin-top: 40px;
  }

  .rating__item {
    margin-right: 10px;
  }

  .video__wrapper::before {
    display: none;
  }

  .player {
    min-height: 350px;
  }
}

@media (max-width: $w-xs) {
  .player {
    min-height: 200px;
    width: 100%;
  }
}
</style>
