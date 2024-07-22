<template>
  <div class="affiliate-offer">
    <div class="affiliate-offer-content-wrapper">
      <div class="affiliate-offer-img-wrapper affiliate-offer-left-side">
        <v-img max-width="202" :src="offer.icon"/>
      </div>
      <div class="affiliate-offer-content affiliate-offer-right-side">
        <div class="affiliate-offer-title" v-html="offer.title"/>
        <v-spacer/>
        <v-layout class="affiliate-offer-description">
          <div class="affiliate-offer-commission-tooltip" v-html="offerText.commission"/>
          <div class="affiliate-offer-commission" v-html="price"/>
          <v-spacer/>
          <div class="affiliate-offer-more" @click="expanded = !expanded" style="display: flex;align-items: center">
            <div class="mr-2" v-html="offerText.expander"/>
            <v-img contain max-width="12" :src="require('images/gazprom/chevron.svg')" :style="{transition: '0.3s',transform: expanded ? '' : 'rotate(180deg)'}"/>
          </div>
        </v-layout>
      </div>
    </div>
    <v-expand-transition>
      <div v-if="expanded" class="affiliate-offer-content-wrapper">
        <div class="affiliate-offer-left-side">
          <a class="affiliate-offer-link" target="_blank" :href="offer.conditionsLink" style="display: flex;align-items: center">
            <v-img max-width="19" class="mr-1" :src="require('images/gazprom/file.svg')"/>
            <div v-html="offerText.conditions"/>
          </a>
          <a class="affiliate-offer-link" target="_blank" :href="offer.contractRulesLink" style="display: flex;align-items: center">
            <v-img max-width="19" class="mr-1" :src="require('images/gazprom/file.svg')"/>
            <div v-html="'Правила оформления'"/>
          </a>
        </div>
        <div class="affiliate-offer-right-side">
          <v-divider v-if="br.mdAndUp"/>
          <div class="affiliate-offer-advantages">
            <div v-for="advantage in offer.keyAdvantages" class="affiliate-offer-advantage">
              <img class="mr-3" :src="require('images/affiliate-program/trafficSource/allow.svg')" alt="advantage">
              <div v-html="advantage"/>
            </div>
          </div>
          <div class="affiliate-offer-disclaimer" v-html="offer.disclaimer"/>
          <Traffic :offer="offer"/>
          <div class="affiliate-offer-footer">
            <div class="affiliate-offer-footer-text" v-html="offer.regText"/>
            <zond-btn class="affiliate-offer-footer-btn" v-html="offerText.btnText" :href="offerText.btnLink"/>
          </div>
        </div>
      </div>
    </v-expand-transition>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator"
import {AffiliateOffer} from "~/model/entities/affiliateProgramm/AffiliateOffer";
import { getOfferText } from "~/model/entities/offer";
import Traffic from "~/components/affiliate-program/Traffic.vue";

@Component({
  components: {Traffic}
})
export default class Offer extends Vue {
  @Prop({required: true}) offer: AffiliateOffer;

  expanded = false;

  get offerText(){
    return getOfferText(this.offer.type);
  }


  get br() {
    return this.$vuetify.breakpoint;
  }

  get price() {
    const str = this.offer.commission.toLocaleString('ru');
    return `от ${str} ₽`;
  }

}
</script>
