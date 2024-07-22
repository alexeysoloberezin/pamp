<template>
  <div class="popular-cards">
    <div class="credit-cards-container">
      <h2 class="credit-cards-h2 popular-cards-title" v-html="title"/>

      <div class="popular-cards-wrapper">
        <div
          class="card-btn"
          :class="{ active: button.value === selectedBank }"
          v-for="(button, i) in buttons"
          :key="i"
          v-html="button.title"
          @click="selectedBank = button.value"
        />
      </div>

      <v-fade-transition mode="out-in">
        <v-layout wrap :key="selectedBank">
          <v-flex xs12 v-for="(card,idx) in cards" :key="idx">
            <Card :card="card" @issue="issue"/>
          </v-flex>
        </v-layout>
      </v-fade-transition>
      <zond-btn v-show="false" ref="zond"/>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Ref, Vue} from "vue-property-decorator"
import {Banks, Buttons, Cards} from "~/model/entities/creditCards";
import Card from "~/components/creditcards/Card";

@Component({
  components: {Card}
})
export default class PopularCards extends Vue {
  @Ref('zond') zond;
  title = 'Популярные офферы';

  buttons = Buttons;

  get cards(){
    if (this.selectedBank === Banks.All) return Cards.slice(0,7)
    return Cards.filter(card => card.bank === this.selectedBank).sort((a,b) => b.commission - a.commission);
  }

  selectedBank = Banks.All;

  issue(){
    this.zond.$el.click();
  }

  get br() {
    return this.$vuetify.breakpoint;
  }
}
</script>

<style lang="scss">
.popular-cards {
  background: #F9F9FC;
  padding: 57px 0 64px;
  @media (max-width: $w-sm){
    padding: 30px 0 40px;
  }

  &-title {
    text-align: center;
  }
  &-wrapper {
    display: flex;
    margin: 35px -5px 0;
    @media (max-width: $w-md) {
      flex-wrap: wrap;
    }
    @media (max-width: $w-sm) {
      margin: 20px -3px 0;
    }
  }

  .card-btn {
    position: relative;
    border: 1px solid #cfd7e0;
    color: #6138da;
    font-size: 18px;
    border-radius: 5px;
    transition: border 0.3s;
    padding: 10px 15px;
    cursor: pointer;
    margin: 5px;

    @media (max-width: $w-sm) {
      font-size: 15px;
      line-height: 15px;
      margin: 3px;
    }

    &:hover {
      border: 1px solid #6c4ad0;
    }

    &.active {
      border: 1px solid #6138da;
      font-weight: bold;
    }
  }

  .popular-card {
    display: flex;
    box-shadow: 0 2px 14px rgba(217, 217, 217, 0.5);
    border: 1px solid #E0E0E0;
    border-radius: 5px;
    margin-top: 12px;
    transition: .3s;

    &:hover {
      border: 1px solid #6138DA;
    }

    @media (max-width: $w-sm) {
      flex-direction: column;
    }
  }

  .card-content {
    padding: 42px 38px 42px 67px;
    background: #FFFFFF;
    flex: 1;
    @media (max-width: $w-md) {
      padding: 20px 19px 20px 33px;
    }
    @media (max-width: $w-sm) {
      padding: 12px 24px 20px 21px;
    }
  }

  .card-title {
    font-weight: 700;
    font-size: 25px;
    line-height: 22px;
    @media (max-width: $w-md) {
      text-align: center;
      line-height: 28px;
    }
    @media (max-width: $w-sm) {
      line-height: 22px;
      font-size: 16px;
      text-align: left;
    }
  }

  .card-description {
    margin-top: 20px;
  }

  .card-commission-tooltip {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #7D8D93;
    @media (max-width: $w-md) {
      text-align: center;
    }
    @media (max-width: $w-sm) {
      font-size: 13px;
      line-height: 15px;
      text-align: left;
    }
  }

  .card-commission {
    font-weight: 400;
    font-size: 36px;
    line-height: 42px;
    margin-top: 5px;
    @media (max-width: $w-md) {
      text-align: center;
    }
    @media (max-width: $w-sm) {
      font-size: 26px;
      line-height: 30px;
      text-align: left;
    }
  }

  .card-terms {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #7D8D93;
    max-width: 180px;
    text-align: center;
    margin-right: 30px;
    @media (max-width: $w-md) {
      margin: 10px auto 0;
      max-width: unset;
    }
    @media (max-width: $w-sm) {
      font-size: 12px;
      line-height: 14px;
    }
  }

  .card-img-wrapper {
    padding: 29px 34px;
    background: #F9F9FC;
    border-radius: 5px;
    transition: .3s;
    @media (max-width: $w-md) {
      display: flex;
      align-items: center;
    }
    @media (max-width: $w-sm) {
      justify-content: center;
    }
  }
}
</style>
