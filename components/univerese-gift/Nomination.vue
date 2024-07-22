<template>
  <div class="nomination">
    <div class="generic-container-1260">
      <h2 class="h2 text-center" v-html="'Номинации и условия участия'"></h2>
      <div class="subhead"
           v-html="'В зависимости от количества продаж или приглашённых пользователей, вы участвуете в розыгрыше разных призов по разным продуктам и номинациям.'"></div>
      <div class="nomination-promo">
        <div class="nomination-promo-title"
             v-html="title"></div>
        <div class="nomination-promo-box">
          <img src="@/assets/images/universe-gift/nominations/user.webp" alt="">
          <div class="nomination-promo-text">Участвовать можно сразу во всех категориях</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";

@Component({})
export default class Nomination extends Vue {
  @Prop({ default: () =>
      'Чем больше продаж, тем <span>лучше призы</span> и выше шансы на победу!'
  }) title: string;
}
</script>

<style lang="scss">

.nomination {
  padding: 50px 0;

  .subhead, .h2 {
    text-align: center;
    margin-bottom: 15px;
  }

  .subhead {
    max-width: 778px;
    margin: 0 auto;
  }

  &-promo {
    background: #FFF;
    margin: 20px auto;
    box-shadow: 0 5px 38px 0 rgba(114, 78, 251, 0.13);
    border-radius: 30px;
    padding: 22px;
    @media (min-width: $w-sm) {
      border-radius: 80px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 34px;
    }

    &-title {
      font-size: 27px;
      font-family: 'Montserrat', sans-serif;
      font-weight: 600;
      line-height: 1.4;
      max-width: 694px;
      @media (max-width: $w-sm) {
        font-size: 17px;
        margin-bottom: 15px;
      }

      span {
        color: #4578FF;
        font-weight: 700;
      }
    }

    &-box {
      border-radius: 80px;
      background: #F2F5FF;
      display: flex;
      flex-shrink: 0;
      align-items: center;
      padding: 13px;
      @media (max-width: $w-sm) {
        padding: 9px;
      }
      img {
        width: 92px;
        height: 92px;
        border-radius: 50%;
        border: 1px solid #F9F9F9;
        @media (max-width: $w-sm) {
          width: 68px;
          height: 68px;
        }
      }
    }

    &-text {
      text-align: center;
      font-size: 20px;
      line-height: 1.45;
      max-width: 287px;
      margin: 0 auto;
      padding: 0 10px;
      @media (max-width: $w-sm) {
        font-size: 15px;
      }
    }
  }
}
</style>
