<template>
  <div class="popular-card">
    <div class="card-img-wrapper">
      <v-img max-width="202" :src="card.img"/>
    </div>
    <div class="card-content">
      <div class="card-title" v-html="card.title"/>
      <v-layout class="card-description" :align-center="br.lgAndUp" :column="br.mdAndDown">
        <div>
          <div class="card-commission-tooltip" v-html="'Комиссия за выданную карту'"/>
          <div class="card-commission" v-html="price"/>
        </div>
        <v-spacer/>
        <div class="card-terms" v-html="'Полные условия доступны после регистрации'"/>
        <v-btn large color="primary" :class="{'mt-3': br.mdAndDown}" @click="$emit('issue')">Оформить карту</v-btn>
      </v-layout>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator"
import {Card} from "~/model/entities/creditCards";
@Component({})
export default class CreditCard extends Vue {
  @Prop({ required: true }) card: Card;


  get price(){
    return this.card.commission.toLocaleString('ru') + ' ₽'
  }

  get br(){
    return this.$vuetify.breakpoint;
  }

}
</script>


