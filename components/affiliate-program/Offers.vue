<template>
  <section class="affiliate-program-offers">
    <div class="generic-container-1260">
      <h2 class="affiliate-program-h2" v-html="block.title"/>
      <h3 class="affiliate-program-h3" v-html="block.description"/>

      <div  class="affiliate-program-offers-wrapper">
        <Offer :offer="offer" :key="index" v-for="(offer,index) in listSliced"/>
      </div>
      <div v-if="displayShowMoreBtn" class="affiliate-program-offers-register">
        <a :href="showMoreLink" @click.prevent.stop="nextPage">
          <base-btn  v-text="'Показать еще'" class="mt-6"
                    style="box-shadow: 0 2px 10px 0 rgba(113, 48, 229, 0.53);display: inline-flex"/>
        </a>
       </div>
    </div>
  </section>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator"
import Offer from "~/components/affiliate-program/Offer";
import {
  AffiliateOffer,
} from "~/model/entities/affiliateProgramm/AffiliateOffer";

@Component({
  components: {Offer},
})
export default class Offers extends Vue {
  @Prop({required: true}) block!: {
    title: string,
    description: string,
    type?: string,
    cards: AffiliateOffer[] | [],
  }
  @Prop() offers: any[]

  list: [] | AffiliateOffer[] = []
  page: number = 1
  maxItems: number | null = null
  itemsPerPage: number = 8

  mounted() {
    this.page = this.$route.query.page ? Number(this.$route.query.page) : 1;
    if (this.block.cards && !Array.isArray(this.offers)) {
      this.list = this.block.cards;
    } else {
      this.list = this.offers
      this.maxItems = this.list.length;
    }
  }

  get listSliced() {
    if (Array.isArray(this.offers)) {
      return this.list.slice(0, this.page * this.itemsPerPage)
    }
    return this.list
  }

  nextPage(){
    this.page++;
    this.$router.push(this.$route.path + '?page=' + this.page)
  }

  get displayShowMoreBtn() {
    return this.maxItems && this.page * this.itemsPerPage < this.maxItems;
  }

  get showMoreLink() {
    const queryPage = this.$route.query.page || 1
    return this.$route.path + '?page=' + ( Number(queryPage) + 1 );
  }
}
</script>

<style lang="scss">
.affiliate-program-offers {
  padding: 55px 0 75px;
  background: #F2F5FF;


  &-title {
    text-align: center;
  }

  &-wrapper {
    display: flex;
    margin: 35px -5px 0;
  }

  &-register {
    margin: 20px auto 0;
    display: flex;
    justify-content: center;

    .btn {
      min-width: 181px !important;
      letter-spacing: 0;
      font-weight: 500;
    }
  }

  &-register-btn {
    color: #7245FF !important;
    width: 100%;
    background: unset;
    font-weight: 400;
    text-decoration-line: underline;
  }

  .affiliate-program-h2 {
    max-width: unset !important;
  }

  .affiliate-program-h3 {
    margin-top: 25px;
    max-width: 714px;
  }

  .affiliate-program-offers-wrapper {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    position: relative;

    &:before {
      position: absolute;
      content: url("@/assets/images/decor/rect1.svg");
      left: -85px;
      top: -90px;
    }

    &:after {
      position: absolute;
      content: url("@/assets/images/decor/rect.svg");
      bottom: 55px;
      right: -55px;
    }

  }

  .affiliate-offer {
    padding: 19px;
    box-shadow: 0 2px 14px rgba(114, 69, 255, 0.12);
    border-radius: 14px;
    background: #FFFFFF;

    &-img-wrapper__banks {
      border-radius: 5px;
      background-color: #F2F5FF;
      width: 214px;
      height: 135px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      @media (max-width: $w-md) {
        margin: 0 auto;
      }
    }

    &__banks {
      padding: 19px;
      box-shadow: 0 2px 14px rgba(114, 69, 255, 0.12);
      border-radius: 14px;
      background: #FFFFFF;
      @media (min-width: $w-md) {
        height: 174px;
      }

      &:not(:first-child) {
        margin-top: 12px;
      }
    }

    &-title__banks {
      font-weight: 700;
      font-size: 18px;
      @media (min-width: $w-md) {
        flex: 0 1 350px;
        padding-right: 30px;
        font-size: 23px;
        line-height: 30px;
      }
    }

    &:not(:first-child) {
      margin-top: 12px;
    }

    &-content-wrapper {
      display: flex;

      &:not(:first-child) {
        margin-top: 15px;
      }
    }

    &-left-side {
      flex: 0 0 230px;
    }

    &-right-side {
      flex: 1 1 100% !important;
      padding: 20px 0 0 40px;
    }

    &-title {
      flex: 0 1 500px;
      font-weight: 700;
      font-size: 23px;
      line-height: 30px;
    }

    &-content {
      display: flex;
      justify-content: space-between;
    }

    &-commission {
      font-weight: 400;
      font-size: 36px;
      line-height: 42px;
    }

    &-commission-tooltip {
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      color: #7D8D93;
    }

    &-description {
      flex: 0 0 280px;
      display: flex;
      flex-direction: column;
    }

    &-more {
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: #6138DA;
      cursor: pointer;
      user-select: none;
    }

    &-link {
      color: #6138DA !important;

      &:first-child {
        margin-top: 25px;
      }
    }

    &-advantages {
      margin-top: 25px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    &-advantage {
      margin-bottom: 20px;
      flex: 0 1 calc(50% - 4px);
      display: flex;
      align-items: flex-start;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      color: #474747;
    }

    &-disclaimer {
      margin-top: 20px;

      padding-right: 40px;
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      color: #7D8D93;
    }

    &-footer {
      margin-top: 30px;
      display: flex;
      justify-content: space-between;

      &-text {
        flex: 50%;

        max-width: 337px;

        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        color: #474747;
      }

      &-btn {
        flex: 0 1 50%;
        min-width: 181px !important;
        letter-spacing: 0;
        font-weight: 500;
      }
    }

    &-source {
      margin-top: 30px;
    }

    &-attention {
      margin-top: 35px;
      border: 1px solid #FDE126;
      border-radius: 4px;
      padding: 10px 120px 14px 20px;

      display: flex;
      align-items: flex-start;
      font-size: 12px;
      line-height: 14px;
    }

    .traffic-source {
      margin-top: 15px;

      &-title {
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 18px;
      }
    }

    .traffic-sources {
      margin-top: 12px;

      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      @media (max-width: $w-sm) {
        flex-direction: column;
      }

      .source {
        flex: 0 1 calc(50% - 4px);

        font-weight: 400;
        font-size: 12px;
        line-height: 150%;
        color: #7D8D93;
      }
    }
  }

  @media (max-width: $w-md) {
    &-register-btn {
      font-size: 12px;
    }
    &-wrapper {
      flex-wrap: wrap;
    }
  }
  @media (max-width: $w-sm) {
    padding: 35px 0 40px;

    &-wrapper {
      margin: 20px -3px 0;
    }
    &-register {
      max-width: 100%;
    }
    .affiliate-program-offers-wrapper {
      max-width: 450px;
      margin: 20px auto 0;

      &:before {
        display: none;
      }

    }
    .affiliate-offer {
      &-content-wrapper {
        flex-direction: column;
      }

      &-left-side {
        flex: auto;
      }

      &-right-side {
        flex-direction: column;
        padding-left: unset;
      }

      &-title {
        flex: auto;
        font-size: 18px;
        line-height: 21px;
      }

      &-img-wrapper {
        display: flex;
        justify-content: center;
      }

      &-link {
        font-size: 14px;
        line-height: 16px;
        margin-top: 10px;

        &:first-child {
          margin-top: unset;
        }
      }

      &-content {
        margin-top: 19px;
      }

      &-description {
        flex: auto;
        margin-top: 19px;
      }

      &-commission {
        margin-top: 5px;
      }

      &-more {
        margin-top: 5px;
      }

      &-advantages {
        margin-top: 15px;
        flex-direction: column;
      }

      &-advantage {
        font-size: 12px;
        line-height: 16px;
        margin-bottom: 15px;
      }

      &-disclaimer {
        margin-top: 0;
      }

      &-footer {
        flex-direction: column;
      }

      &-footer-text {
        max-width: unset;
        font-size: 14px;
        line-height: 17px;
      }

      &-footer-btn {
        margin-top: 14px;
        font-size: 13px;
        line-height: 15px;
      }

      .traffic-source-title {
        font-size: 15px;
        line-height: 105%;
      }
    }
  }
}
</style>
