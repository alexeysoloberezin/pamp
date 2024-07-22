<template>
  <div style="background-color: #f9f9fc">
    <div class="generic-container-1260">
      <h2
        style="text-align: center"
        class="h2 px-6"
        :class="br.mdAndUp ? 'py-10' : 'py-4'"
        v-html="title"
      />
      <v-layout align-center class="generic-cards" wrap>
        <v-flex
          v-for="(article, i) in posts"
          :key="i"
          xs12
          sm6
          md3
          lg3nents
          class="generic-card-wrapper"
        >
          <ArticleCard :article="article"/>
        </v-flex>
      </v-layout>
    </div>
    <div :style="`height: ${br.mdAndUp ? 100 : 40}px`"/>
  </div>
</template>
<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import {ArticlePage} from "~/model/Article";
import ArticleCard from "~/components/common/blog/ArticleCard.vue";

@Component(
  {
    components: {ArticleCard},

  }
)
export default class Articles extends Vue {
  @Prop({default: ""}) title;
  @Prop({required: true}) posts;
  @Prop({default: "osago"}) page: ArticlePage;

  get br() {
    return this.$vuetify.breakpoint;
  }
}
</script>
