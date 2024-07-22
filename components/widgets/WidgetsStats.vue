<template>
  <div class="widget-stats-wrapper">
    <div class="webtools-container">
      <div class="widget-stats">
        <div id="htw" style="position: absolute; top: -160px" />
        <h2 class="h2 widgets-stats-title">
          Личный кабинет, в котором ни одна продажа не потеряется
        </h2>
        <div class="showcase__inner widgets-stats-showcase">
          <div class="sc-switcher-container">
            <div
              v-for="(item, i) in items"
              :key="i"
              @click="selected = i"
              class="sc-switch"
              :class="selected == i ? 'active' : ''"
            >
              <img
                class="check"
                alt="checkmark"
                v-if="selected == i"
                src="@/assets/images/bl6/circle_checkmark.svg"
              />
              <img
                class="check"
                alt="checkmark"
                v-else
                src="@/assets/images/bl6/circle.svg"
              />
              <div class="sc-switch__inner">
                <h4 class="sc-head" v-text="item.title" />
                <span class="sc-text" v-text="item.text" />
              </div>
            </div>
          </div>
          <v-fade-transition mode="out-in">
            <div style="order: -1" :key="selected" class="showcase-img">
              <img
                style="width: 100%;"
                alt="root"
                :src="require(`@/assets/images/widgets/step${selected+1}.png`)"
              />
            </div>
          </v-fade-transition>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class WidgetsStats extends Vue {
    selected = 0;
    items = [
        {
            title: "Все расчеты, покупки и контакты клиентов сохраняются",
            text:
                "Отслеживайте данные по всем продажам, которые сделали через установленный виджет. Перезванивайте тем, кто не оплатил полис."
        },
        {
            title: "Прозрачные размеры вознаграждения",
            text:
                "Вы знаете какой % от стоимости покупки будет начислен вам на баланс по каждой сделке."
        },
        {
            title: "Информация по всем начислениям и списаниям",
            text:
                "Внутренний баланс, на который начисляется комиссия со всех продаж и списывается выведенное вознаграждение."
        }
    ];
}
</script>
<style lang="scss">
.widget-stats {
    position: relative;
    @media (max-width: $w-sm) {
        padding-top: 30px;
    }
    .showcase__inner {
      margin: 30px 0;
    }
}
.widget-stats-wrapper {
  background-color: #F9F9FC;
  padding: 75px 0;
  @media (max-width: $w-sm){
    padding: 0;
  }
}
.widgets-stats-title {
    max-width: 630px;
    padding: 0 20px;
    text-align: center;
    margin: auto !important;
    @media (max-width: $w-sm) {
      text-align: left !important;

    }
}
.widgets-stats-showcase {
  min-height: 500px;
  .showcase-img {
    image-rendering: -webkit-optimize-contrast;
    @media (max-width: $w-xs){
      min-height: 230px;
    }
  }
.sc-switcher-container {
    margin: 0 20px;
}

}
.widgets-stats-showcase {
    align-items: center;
    justify-content: center;
    img {
    }
}
</style>
