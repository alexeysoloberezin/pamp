<template>
  <a :href="article.href" target="_blank">
    <v-card
      tile
      class="article-card"
      :class="{ emphasis: article.emphasis }"
      :style="styles"
      @mousedown.middle.prevent="openArticle(article.href)"
    >
      {{ JSON.stringify(article.emphasis) }}
      <v-img
        v-if="!article.emphasis"
        :src="article.image"
        :aspect-ratio="279 / 136"
      />
      <v-layout column fill-height class="article-card-body">
        <v-spacer v-if="article.emphasis"/>
        <div class="article-card-tags">
                <span
                  class="article-card-tag"
                  v-for="(tag, i) in article.tags"
                  :key="i"
                  v-text="'#' + tag"
                />
        </div>
        <div class="article-card-title" :title="article.title" v-text="article.title"/>
        <div
          v-if="!article.emphasis"
          class="article-card-preview"
          v-html="article.preview"
        />
        <v-layout align-center style="flex: 0;">
<!--          <v-img-->
<!--            height="16"-->
<!--            width="16"-->
<!--            style="flex: none"-->
<!--            :src="article.author.img || ''"-->
<!--            :aspect-ratio="1"-->
<!--          />-->
          <div class="article-card-author" v-text="article.author.name"/>
          <div
            class="article-card-date"
            v-text="formatDate(article.creationDate)"
          />
          <v-spacer/>
          <!--                <ViewsIcon :color="article.emphasis ? '#FFF' : '#7D8D93'" />-->
          <!--                <div class="article-card-views" v-text="article.views" />-->
        </v-layout>
      </v-layout>
    </v-card>
  </a>
</template>
<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import ViewsIcon from "./ViewsIcon.vue";
import {InterfaceArticle} from "~/model/Article";

@Component({components: {ViewsIcon}})

export default class ArticleCard extends Vue {
  @Prop({default: null}) article!: InterfaceArticle;

  get styles() {
    let bgImg = "";
    if (this.article.emphasis)
      bgImg = `linear-gradient(0, #0008 0%, #0000 100%), url(${this.article.image}) !important`;
    return {
      backgroundImage: bgImg,
      backgroundSize: "cover, cover",
      backgroundRepeat: "no-repeat, no-repeat",
      backgroundPosition: "center, center"
    };
  }

  openArticle(href) {
    window.open(href, "_blank")
  }

  formatDate(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1; // Месяцы начинаются с 0, поэтому добавляем 1
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  }
}
</script>

<style lang="scss">
.article-card {
  height: 100%;
  box-shadow: 0px 16px 31px rgba(170, 142, 255, 0) !important;
  transition: box-shadow 0.05s !important;
  overflow: hidden;

  &.emphasis {
    .article-card-date {
      margin-left: 24px;
    }

    .article-card-body {
      padding: 18px 38px;
      @media (max-width: $w-xs) {
        padding: 20px 14px;
      }
    }

    .article-card-title {
      font-size: 23px;
      line-height: 28px;
      max-width: 316px;
      height: calc(28px * 2);
      @media (max-width: $w-sm) {
        font-size: 20px;
        line-height: 23px;
        height: 92px;
        max-width: 256px;
      }
    }

    .article-card-tags {
      font-size: 10px;
    }

    *:not(#ovrd) {
      color: #fff !important;
    }

    @media (max-width: $w-sm) {
      min-height: 280px;
    }
  }

  &:hover {
    color: #000;
    box-shadow: 0px 16px 31px rgba(170, 142, 255, 0.2759) !important;
  }

  &-title {
    font-size: 19px;
    line-height: 22px;
    color: #4d4d4d;
    height: calc(22px * 2);
    margin-bottom: 14px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }

  &-preview {
    font-size: 12px;
    line-height: 15px;
    max-height: 75px;
    font-family: Montserrat;
    height: 86px;
    margin-bottom: 14px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }

  &-body {
    padding: 18px 16px;
  }

  &-tags {
    display: flex;
    margin: 0 -7.5px 12px;
    font-size: 14px;
    color: #ab54ff;
  }

  &-tag {
    margin: 0 7.5px;
    flex: 0 1 auto;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &-author {
    font-size: 10px;
    line-height: 12px;
    color: #7d8d93;
    margin-left: 5px;
  }

  &-date {
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    color: #9b63ff;
    margin-left: 10px;
    margin-right: 10px;
  }

  &-views {
    font-size: 10px;
    line-height: 12px;
    color: #7d8d93;
    margin-left: 6px;
  }

  @media (max-width: $w-sm) {
    &-title {
      font-size: 14px;
      line-height: 16px;
      height: 64px;
    }
  }
  @media (max-width: $w-xs) {
    &-title,
    &-preview {
      height: auto;
    }
  }
}
</style>
