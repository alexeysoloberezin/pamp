<template>
  <div class="promo-case">
    <div class="promo-case-header" style="display: flex; align-items: center">
      <v-img class="promo-case-avatar" max-width="65" :src="agent.avatar"/>
      <div>
        <div class="promo-case-name" v-html="agent.name"/>
        <div class="promo-case-role" v-html="agent.role"/>
      </div>
    </div>
    <div class="promo-case-lines">
      <div class="promo-case-line"><span style="font-weight: bold">Страховая компания:</span> {{agent.company}}</div>
      <div class="promo-case-line"><span style="font-weight: bold">Банк:</span> {{agent.bank}}</div>
      <div class="promo-case-line"><span style="font-weight: bold">Тип полиса:</span> {{agent.polisType}}</div>
      <div class="promo-case-line"><span style="font-weight: bold">Остаток по кредиту:</span> {{formatPrice(agent.credit)}}</div>
      <div class="promo-case-line"><span style="font-weight: bold">Стоимость полиса:</span> {{formatPrice(agent.polisPrice)}}</div>
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
  company: string
  bank: string
  polisType: string
  credit: number
  polisPrice: number
  profit: number
}
@Component({})
export default class Case extends Vue {
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

