<template>
  <div class="promo-intro">
    <ScrollAnchor id="rmi"/>
    <div class="intro-bg">
      <div class="promo-container promo-intro-wrapper">
        <div :style="{marginTop: br.lgAndUp ? '50px' : ''}">
          <h1 class="promo-intro-title"
              v-html="'Поднимаем вознаграждения! Оформляй&nbsp;полисы ипотечного страхования'"/>
          <div class="promo-intro-subtitle" v-html="'с КВ до 55%!'"/>
          <h2 class="promo-intro-desc">
            Доплачиваем из собственных средств за полисы ипотеки, чтобы повысить заработок агентов до <span
            style="font-weight: bold">РЕКОРДНЫХ 55%</span> за каждый оформленный полис!
          </h2>
          <zond-btn
            v-text="'Попробовать'"
            class="inverted promo-intro-btn"
          />
        </div>
        <div>
          <v-img class="promo-decor" :max-width="br.smAndUp ? '398' : '300'"
                 :src="require('@/assets/images/promo/intro/bg.png')" alt="rko-mort-decor"/>
        </div>
      </div>
    </div>

    <div style="background: #F2F5FF;">
      <div class="promo-container">
        <div class="promo-intro-statistics">
          <div
            v-for="(item, index) in statistics"
            class="promo-intro-statistic"
            :key="index"
          >
            <v-img class="promo-statistic-icon" :src="item.icon" :max-width="br.mdAndDown ? '39' : ''"/>
            <p v-html="item.title" class="mb-0 promo-statistic-heading"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import ScrollAnchor from "~/components/common/ScrollAnchor.vue";

@Component({
  components: {ScrollAnchor},
})
export default class Intro extends Vue {
  statistics = [
    {
      icon: require('@/assets/images/promo/intro/hand.svg'),
      title: "Никаких звёздочек (*) и&nbsp;сложных условий",
    },
    {
      icon: require('@/assets/images/promo/intro/people.svg'),
      title: "Доступно для всех пользователей платформы",
    },
    {
      icon: require('@/assets/images/promo/intro/config.svg'),
      title: "Повышение для всех банков и&nbsp;страховых компании",
    },
  ];

  get br() {
    return this.$vuetify.breakpoint;
  }

  mounted() {
    setTimeout(() => {
      const decor = this.$el.querySelector('.promo-decor');

      if (decor) decor.classList.add('visible')
    },200)

  }
}
</script>

<style lang="scss">
.promo-intro {
  position: relative;

  .intro-bg {
    background: url("@/assets/images/agents/intro/bg.webp") center no-repeat;
    position: relative;
    background-size: cover;
    min-height: 518px;
    padding: 0 0 80px;

    &:after {
      position: absolute;
      content: url("@/assets/images/agents/intro/decor-left.svg");
      left: 10%;
      bottom: 12%;
      display: none;
      @media (max-width: $w-sm) {
        display: block;
      }
    }

    &:before {
      position: absolute;
      content: url("@/assets/images/agents/intro/decor.svg");
      right: 0;
      top: 22%;
      display: none;
      @media (max-width: $w-sm) {
        display: block;
      }
    }

    @media (max-width: $w-md) {
      padding: 30px 0 125px;
      min-height: unset;
    }
    @media (max-width: $w-xs) {
      padding: 30px 0 220px;
      min-height: unset;
    }
  }

  .promo-intro-wrapper {
    display: flex;
    justify-content: space-between;
    @media (max-width: $w-md) {
      flex-direction: column;
    }
  }

  .promo-decor {
    opacity: 0;
    transition: 1s;
    transform: translateY(-1000px);

    &.visible {
      opacity: 1;
      transform: translateY(0);
    }

    @media (max-width: $w-md) {
      margin: 0 auto;
      transform: translateX(45px);
    }
    @media (max-width: $w-xs) {
      margin: unset;
      transform: translateX(-10px);
    }
  }

  .promo-intro-btn {
    font-weight: 700;
    font-size: 20px;
    margin-top: 45px;
    @media (max-width: $w-md) {
      display: block;
      max-width: fit-content;
      margin: 20px auto 0;
      text-align: center;
    }
    @media (max-width: $w-xs) {
      margin: 20px auto 0 0;
      font-size: 16px;
      line-height: 19px;
    }
  }

  .promo-intro-title {
    font-family: 'Montserrat', sans-serif;
    max-width: 629px;
    font-weight: 700;
    font-size: 35px;
    line-height: 45px;
    color: #FFFFFF;
    @media (max-width: $w-md) {
      font-size: 26px;
      line-height: 34px;
      text-align: center;
      margin: 0 auto;
    }
    @media (max-width: $w-sm) {
      font-size: 21px;
      line-height: 28px;
    }
    @media (max-width: $w-xs) {
      text-align: left;
      max-width: 320px;
      margin: unset;
    }
  }

  .promo-intro-desc {
    margin-top: 35px;
    max-width: 556px;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;
    @media (max-width: $w-md) {
      text-align: center;
      margin: 15px auto 0;
      font-size: 16px;
    }
    @media (max-width: $w-xs) {
      text-align: left;
    }
  }

  .promo-intro-subtitle {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 60px;
    line-height: 45px;
    color: #FFEE59;
    @media (max-width: $w-md) {
      text-align: center;
      font-size: 42px;
      line-height: 45px;
    }
    @media (max-width: $w-sm) {
      margin-top: 5px;
    }
    @media (max-width: $w-xs) {
      text-align: left;
    }
  }
}

.promo-intro-statistics {
  display: flex;
  justify-content: space-between;
  max-width: 1162px;
  padding: 20px 30px;
  transform: translateY(-45px);
  background: #f9f9fc;
  box-shadow: 0 5px 31px rgba(114, 78, 251, 0.18);
  border-radius: 64px;
  @media (max-width: $w-md) {
    margin: -50px auto 0;
    border-radius: 25px;
    flex-direction: column;
    padding: 18px 15px;
  }
  @media (max-width: $w-xs) {
    margin: -140px auto 0;
    transform: translateY(-50px);
  }
}

.promo-intro-statistic {
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: $w-md) {
    padding: 12px 0;
    justify-content: flex-start;
  }

  &:not(:last-child) {
    @media (max-width: $w-md) {
      border-bottom: 1px dashed rgba(0, 0, 0, 0.2);
    }
  }
}

.promo-statistic-icon {
  margin-right: 7px;
  @media (max-width: $w-md) {
    margin-right: 14px;
  }
}

.promo-statistic-heading {
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  text-align: left;
  @media (max-width: $w-sm) {
    font-size: 14px;
    line-height: 18px;
  }
}

.promo-statistic-text {
  font-size: 15px;
  font-weight: 400;
  line-height: 16.5px; /* 110% */
  text-align: left;
  @media (max-width: $w-sm) {
    font-size: 14px;
    line-height: 15px;
  }
}
</style>
