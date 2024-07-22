<template>
  <div class="promo-case">
    <div class="promo-case-header" style="display: flex; align-items: center">
      <v-img class="promo-case-avatar" max-width="68" :src="agent.avatar"/>
      <div>
        <div class="promo-case-role" v-html="agent.role"/>
        <div class="promo-case-name" v-html="agent.name"/>
        <div class="promo-case-town">{{agent.town}}</div>
      </div>
    </div>
    <div class="promo-case-lines">
      <div class="promo-case-line"><p> Оформляет: </p>{{agent.polis}} полисов в месяц </div>
    </div>
    <div class="promo-case-profit">
      <div class="promo-case-profit-title" v-html="'Заработок'"/>
      <div class="promo-case-profit-desc" v-html="formatPrice(agent.profit)"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"

type Agent = {
  avatar: string
  name: string
  role: string
  town: string
  polis: number
  profit: number
}
@Component({})
export default class CaseRealtors extends Vue {
  @Prop({ required: true }) agent: Agent

  formatPrice(price: number){
    return price.toLocaleString('ru',{
      style: 'currency',
      currency: 'rub',
      minimumFractionDigits: 0
    })
  }
}
</script>
