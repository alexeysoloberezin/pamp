<template>
  <v-card class="common-review">
    <div class="review-header">
      <v-layout>
        <img
          height="58"
          style="max-width: 100%; border-radius: 50%;"
          :src="review.profileImage"
          alt="profileImg"
        />
        <v-layout
          justify-space-between
          :column="$vuetify.breakpoint.xsOnly"
          class="pl-5"
        >
          <v-flex shrink>
            <div class="font-weight-bold" v-text="review.name"/>
            <div
              style="font-size: 14px; line-height: 1.2"
              v-html="review.person"
            />
          </v-flex>
          <v-flex
            shrink
            style="display: flex; align-items: center"
            align-self-start
          >
            <img
              src="@/assets/images/ipoteka/reviews/point.svg"
              alt="point"
            />
            <div
              class="primary--text ml-3"
              v-text="review.location"
            />
          </v-flex>
        </v-layout>
      </v-layout>
    </div>
    <div class="review-content">
      <div ref="review-text" v-html="review.text"/>
      <div
        ref="read-more"
        class="read-more"
        @click="readMore($event, index)"
        v-if="$vuetify.breakpoint.smAndDown"
        style="
                    color: #ab54ff;
                    text-decoration: underline dotted;
                    cursor: pointer;
                "
        v-text="'Читать далее...'"
      />
    </div>
  </v-card>
</template>
<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";

@Component
export default class ReviewItem extends Vue {
  @Prop() index;
  @Prop({default: () => null}) review;

  readMore(_e) {
    const refs = this.$refs["review-text"];
    let p;
    if ((refs as Element[]).length)
      p = refs[this.index].querySelectorAll("p:not(:first-child)");
    else p = (refs as Element).querySelectorAll("p:not(:first-child)");
    p.forEach((p) => (p.style.display = "block"));
    (this.$refs["read-more"] as HTMLElement).style.display = "none";
  }
}
</script>
