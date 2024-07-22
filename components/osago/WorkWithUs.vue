<template>
  <div class="generic-container-1260 work-with-us">
    <h2
      class="h2 text-center mx-auto"
      :class="$vuetify.breakpoint.lgAndUp ? 'mt-10 pt-10' : 'mt-3'"
    >
      Зарабатывайте с партнерской программой Пампаду
    </h2>
    <h3
      class="h5 text-center mx-auto mt-3 mb-8"
      style="font-family: Montserrat, sans-serif"
    >
      Возможность дополнительного и даже пассивного заработка
      для брокеров, вебмастеров и других через:
    </h3>
    <v-layout class="generic-cards work-with-us-cards">
      <div
        class="generic-card-wrapper"
        style="flex: 1"
        v-for="(card, i) in cards"
        :key="i"
      >
        <div class="work-with-us-card" style="height: 100%">
          <v-img width="54" max-height="54" :src="card.img"/>
          <div class="work-with-us-title" v-text="card.title"/>
          <div class="work-with-us-text" v-text="card.text"/>
        </div>
      </div>
    </v-layout>
  </div>
</template>
<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";

@Component
export default class WorkWithUs extends Vue {
  cards = [
    {
      img: require("@/assets/images/osago/workWithUs/calc.svg"),
      title: "Виджеты для сайта",
      text: `Просто разместите у себя на сайте, в приложении или в соцсети калькулятор ОСАГО, где ваши клиенты самостоятельно рассчитают и оформят полисы. Привлекайте трафик на сайт и получайте комиссию за продажи в том же размере, как если бы эти полисы вы оформляли для своих клиентов сами`,
    },
    {
      img: require("@/assets/images/osago/workWithUs/agent.svg"),
      title: "Агентскую сеть",
      text: "Привлекайте к сотрудничеству других агентов, курируйте их работу и получайте комиссию со всех их продаж (причём в том размере, который установите вы)",
    },
    {
      img: require("@/assets/images/osago/workWithUs/link.svg"),
      title: "Реферальную сеть",
      text: "Приглашайте на платформу знакомых агентов и получайте по 50 рублей с каждой продажи агентов, зарегистрировавшихся по вашей ссылке",
    },
  ];
}
</script>
<style lang="scss">
.work-with-us {
  .h2 {
    max-width: 582px;
  }

  .h5 {
    max-width: 664px;
  }
}

@media (max-width: $w-sm) {
  .work-with-us-cards {
    flex-flow: column;

    .generic-card {
      padding: 8px 0;
    }
  }
}

.work-with-us-card {
  background: #f2f5ff;
  border-radius: 10px;
  text-align: center;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 40px 36px;
  @media (max-width: $w-md) {
    padding: 20px 18px;
  }
}

.work-with-us-title {
  margin: 20px 0;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 23px;
  line-height: 28px;
  @media (max-width: $w-md) {
    font-size: 19px;
    line-height: 23px;
  }
}

.work-with-us-text {
  font-size: 16px;
  line-height: 23px;
 
}
</style>
