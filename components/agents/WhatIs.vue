<template>
  <div class="agents-whatIs">
    <ScrollAnchor id="awi"/>
    <div class="agents-container">
      <h2 v-html="title" class="whatIs-heading"/>
      <div class="whatIs-items">
        <div class="whatIs-subheading">
          <p style="max-width: 568px">
            ПамПаду — это бесплатная онлайн платформа, через которую любой желающий: агенты, брокеры, владельцы бизнеса,
            вебмастера и ищущие подработку, могут получать доход, продавая и оформляя страховые полисы, финансовые
            продукты и выполнять целевые действия, за которые компании готовы платить комиссионное вознаграждение.
          </p>
          <p class="mb-0 mt-10">А главное — делать это легко!</p>
        </div>
        <div v-for="(column,index) in columns" :style="{gridRow: index === 1 && $vuetify.breakpoint.smAndDown ? '2' : ''}"
             class="pa-4 whatIs-item">
          <div v-for="(item,index) in column" class="item-column">
            <v-img :max-width="$vuetify.breakpoint.lgAndUp ? '60' : '33'" :src="item.logo" alt="logo" contain/>
            <div class="mt-2 item-title" v-html="item.text"/>
          </div>
        </div>
        <div>
          <p style="max-width: 505px" class="whatIs-desc">
            Мы официальные партнёры ведущих страховых компаний, банков и крупнейших рекламодателей, что позволяет
            вам делать расчёты, покупки и продажи в едином кабинете — у нас на сайте. Начните зарабатывать онлайн
            уже сегодня!
          </p>
          <zond-btn v-html="'Зарегистрироваться'"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
import ScrollAnchor from "~/components/common/ScrollAnchor.vue";

@Component({
  components: {ScrollAnchor}
})
export default class WhatIs extends Vue {
  title = 'Что такое Пампаду и для кого?'
  columns = [[
    {
      text: 'Подходит как новичкам, так и профессионалам',
      logo: require('@/assets/images/agents/whatIs/case.svg')
    },
    {
      text: 'Работайте онлайн из любой точки мира',
      logo: require('@/assets/images/agents/whatIs/map.svg')
    },
    {
      text: 'Получайте высокую комиссию за все продукты',
      logo: require('@/assets/images/agents/whatIs/coin.svg')
    },
  ], [
    {
      text: 'Деньги за продажи доступны сразу',
      logo: require('@/assets/images/agents/whatIs/money.svg')
    },
    {
      text: 'Никаких бланков и отчётности',
      logo: require('@/assets/images/agents/whatIs/doc.svg')
    },
    {
      text: 'Личный куратор и онлайн поддержка',
      logo: require('@/assets/images/agents/whatIs/human.svg')
    },
  ]]
}
</script>

<style lang="scss">
.agents-whatIs {
  padding: 50px 0 100px;
  position: relative;
  @media (max-width: $w-md) {
    padding: 35px 0 28px;
    margin: 0 auto;
  }

  &:before {
    position: absolute;
    content: url("@/assets/images/agents/whatIs/decor.svg");
    left: 45px;
    top: 90px;
    @media (max-width: $w-md) {
      display: none;
    }
  }

  &:after {
    position: absolute;
    content: url("@/assets/images/agents/whatIs/decor.svg");
    right: 100px;
    top: 70px;
    @media (max-width: $w-md) {
      display: none;
    }
  }


  .whatIs-heading {
    font-family: Montserrat, sans-serif;
    font-weight: bold;
    font-size: 35px;
    line-height: 40px;
    @media (max-width: $w-md) {
      font-size: 19px;
      line-height: 23px;
    }
  }

  .whatIs-subheading {
    @media (max-width: $w-md) {
      font-size: 14px;
      line-height: 21px;
    }
  }

  .whatIs-desc {
    @media (max-width: $w-md) {
      font-size: 14px;
      line-height: 22px;
    }
  }

  .whatIs-items {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 50px;
    grid-column-gap: 36px;
    grid-auto-rows: minmax(169px, auto);
    margin-top: 35px;
    @media (max-width: $w-md) {
      grid-template-columns: 1fr;
      grid-row-gap: 15px;
    }
  }

  .whatIs-item {
    display: flex;
    background-color: #F2F5FF;
    justify-content: space-between;
    border-radius: 9px;
    @media (max-width: $w-md) {
      flex-direction: column;
    }

    .item-title {
      font-weight: 500;
      font-size: 15px;
      line-height: 18px;
      color: #4578FF;
      @media (max-width: $w-md) {
        font-size: 14px;
        line-height: 16px;
        margin-left: 12px;
      }
    }

    .item-column {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 0 1 148px;
      text-align: center;
      @media (max-width: $w-md) {
        flex-direction: row;
        flex: 0 1 auto;
        text-align: left;
      }
    }
  }
}
</style>
