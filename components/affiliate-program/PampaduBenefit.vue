<template>
  <div class="affiliate-program-benefit">
    <div class="generic-container-1260">
      <h2 class="h2 affiliate-program-benefit-title">Преимущества работы с платформой Пампаду</h2>
      <div class="benefit-items">
        <div v-for="item in items" class="benefit-item">
          <img class="benefit-item-img" :src="item.icon" :alt="item.title">
          <p class="benefit-item-title" v-html="item.title"/>
          <p class="benefit-item-description" v-html="item.description"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"

@Component({})
export default class PampaduBenefit extends Vue {
  items = [
    {
      icon: require('images/affiliate-program/benefit/check.svg'),
      title: 'Широкий выбор офферов',
      description: 'ШИРОКИЙ ВЫБОР ОФФЕРОВ Выберите&nbsp;выгодные условия именно для вас'
    }, {
      icon: require('images/affiliate-program/benefit/human.svg'),
      title: 'Больше клиентов',
      description: 'БОЛЬШЕ КЛИЕНТОВ Выше&nbsp;вознаграждение'
    }, {
      icon: require('images/affiliate-program/benefit/clock.svg'),
      title: '1 минута',
      description: 'Просто внесите контакты клиента. Остальное мы сделаем за вас'
    },
  ]
}
</script>

<style lang="scss">
.affiliate-program-benefit {
  padding: 100px  0 75px 0;
  .affiliate-program-benefit-title {
    text-align: center;
  }
  .benefit-items {
    margin-top: 35px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 19px;
  }
  .benefit-item {
    background: #F2F5FF;
    border-radius: 9px;
    padding: 30px 38px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .benefit-item-img {

  }
  .benefit-item-title {
    font-family: 'Montserrat',sans-serif;
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    color: #4578FF;
    margin-top: 13px;
    max-width: 220px;
  }
  .benefit-item-description {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    margin-top: 15px;
  }

  @media (max-width: $w-md){
      padding: 25px 0;
      .benefit-items {
        grid-template-columns: 1fr;
      }
      .benefit-item {
        padding: 30px 19px;
      }
      .benefit-item-title {
        max-width: unset;
      }
      .benefit-item-description {
        max-width: 300px;
        margin-top: 10px;
      }
  }
}

</style>
