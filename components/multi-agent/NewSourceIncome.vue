<template>
  <div class="new-source-income">
    <div class="generic-container-1260">
      <h2
        class="h2 mb-5 mb-sm-10"
        style="max-width: 495px"
        v-text="'Новый источник дохода для страховых агентов'"
      />
      <div class="income-box">
        <div class="income-box-wrp">
          <div class="income-box-info">
            <div class="income-box-item">
              <div class="income-box-subhead">Оформляет:</div>
              <div class="income-box-title mt-1">28 кредитных карт 180 дней без % от Газпромбанк в месяц</div>
            </div>
            <div class="income-box-item">
              <div class="income-box-subhead">Вознаграждение за одну карту:</div>
              <div class="income-box-title mt-1">7 600 ₽</div>
            </div>
            <div class="income-box-item">
              <div class="income-box-subhead">Общий заработок:</div>
              <div class="income-box-title mt-1">212 800 ₽</div>
            </div>
            <div class="income-box-item">
              <div class="income-box-subhead">Среднее вознаграждение за полис ОСАГО:</div>
              <div class="income-box-title mt-1">700 ₽</div>
            </div>
          </div>
          <div class="income-box-user">
            <img
              class=""
              src="@/assets/images/multi-agent/newSourceIncome/user.webp"
              alt="User"
            />
            <div class="income-box-user-name">Сергей</div>
          </div>
        </div>
        <div class="income-box-banner">
          Чтобы зарабатывать <span>212 800 рублей</span> продавая ОСАГО,<br> Сергей должен оформлять
          <span>304 полиса</span>,
          вместо <span>28 карт</span> Газпромбанка в месяц.
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component({})
export default class NewSourceIncome extends Vue {
}
</script>

<style lang="scss">


.new-source-income {
  padding: 47px 0 0 0;
  position: relative;
  z-index: 3;

  .income-box {
    background: #FFFFFF;
    padding: 38px 60px;
    box-shadow: 0 5px 25px rgba(203, 207, 216, 0.28);
    border-radius: 14px;
    @media (max-width: $w-sm) {
      padding: 20px 14px;
    }

    &-wrp {
      @media (min-width: $w-sm) {
        display: grid;
        grid-template-columns: 1fr 188px;
        align-self: start;
      }
      @media (max-width: $w-sm) {
        display: flex;
        flex-direction: column-reverse;
      }
    }

    &-info {
      display: flex;
      flex-wrap: wrap;
      grid-row-gap: 24px;
      @media (max-width: $w-sm) {
        grid-row-gap: 14px;
      }
    }

    &-item {
      margin-right: 40px;

      &:nth-child(1) {
        width: 100%;

        .income-box-title {
          color: #000;
          @media (min-width: $w-xs) {
            font-size: 22px;
          }
        }
      }

      @media (max-width: $w-xs) {
        width: 100%;
      }
    }

    &-subhead {
      font-size: 12px;
      line-height: 14px;
    }

    &-title {
      font-weight: 400;
      font-size: 27px;
      color: $purple;
      line-height: 1.185;
      @media (max-width: $w-xs) {
        font-size: 17px;
        line-height: 20px;
      }
    }

    &-banner {
      background: $bg-color;
      font-weight: 400;
      font-size: 22px;
      line-height: 34px;
      padding: 24px 30px;
      text-align: center;
      border-radius: 8px;
      margin-top: 27px;

      span {
        color: $purple;
      }

      @media (max-width: $w-xs) {
        font-size: 17px;
        line-height: 20px;
        padding: 13px;
      }
    }

    &-user {
      display: flex;
      align-items: center;

      &-name {
        font-weight: 700;
        font-size: 22px;
        line-height: 26px;
      }

      @media (min-width: $w-sm) {
        margin-top: -135px;
        flex-direction: column;
        text-align: center;
        img {
          width: 188px;
        }
        &-name {
          margin-top: 15px;
        }
      }
      @media (max-width: $w-sm) {
        margin-bottom: 20px;

        img {
          width: 52px;
        }
        &-name {
          margin-left: 14px;
        }
      }
    }
  }
}
</style>
