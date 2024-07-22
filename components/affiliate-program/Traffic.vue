<template>
  <div class="affiliate-offer-source">
    <h3 class="traffic-source-title">Требования к источникам трафика</h3>
    <div v-for="trafficSource in offer.trafficSources" class="traffic-source">

      <div style="display: flex;align-items: center">
        <img class="mr-3" :src="getTrafficInfo(trafficSource.type).icon" alt="traffic-source">
        <h4 :style="{color: getTrafficInfo(trafficSource.type).color,fontWeight: 'bold'}"
            v-html="getTrafficInfo(trafficSource.type).title"/>
      </div>

      <div class="traffic-sources">
        <div v-for="source in trafficSource.sources" class="source" v-html="source"/>
      </div>

      <div class="affiliate-offer-attention" v-if="offer.attention">
        <v-img class="mr-3" contain :src="require('images/gazprom/attention.svg')" max-width="20"/>
        <div v-html="offer.attention"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator"
import {AffiliateOffer, TrafficSources, trafficSources} from "~/model/entities/affiliateProgramm/AffiliateOffer";

@Component({})
export default class Traffic extends Vue {
  @Prop() offer: AffiliateOffer;

  trafficSources = trafficSources;

  getTrafficInfo(trafficType: TrafficSources){
    return this.trafficSources.find(source => source.type === trafficType)
  }
}
</script>
