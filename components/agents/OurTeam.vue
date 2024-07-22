<template>
  <div class="agents-team">
    <ScrollAnchor id="ate"/>
    <div class="agents-container">
      <h2 v-text="'Кто мы такие? Давайте познакомимся!'" class="team-title"/>
      <h3 v-html="'«Мы не прячемся за красивым&nbsp;сайтом»'" class="team-desc mt-5"/>
      <div class="team-grid mt-8">
        <div class="team-grid-title">Каждый день мы работаем над тем, чтобы партнёры получали новых клиентов, а пользователи платформы могли максимально легко и эффективно зарабатывать с продаж</div>
        <div class="profits-wrapper">
          <div class="profits-item" v-for="item in profits.first">
            <v-img :src="item.img" height="22" width="22" style="max-width: 22px;" contain class="mr-3" alt="icon"></v-img>
            <div v-text="item.text"/>
          </div>
        </div>
        <v-img :src="require('@/assets/images/agents/ourTeam/team-one.webp')" alt="aboutus"/>
        <div class="profits-wrapper">
          <div class="profits-item" v-for="item in profits.second">
            <img class="mr-3" height="22" :src="item.img" alt="icon">
            <div v-text="item.text"/>
          </div>
        </div>
        <div class="team-block">
          <v-img :src="require('@/assets/images/agents/ourTeam/team-second.webp')" alt="aboutus"/>
          <div class="profits-wrapper">
            <div class="profits-item" v-for="item in profits.third">
              <img class="mr-3" height="22" :src="item.img" alt="icon">
              <div v-text="item.text"/>
            </div>
          </div>
          <div class="team-work">Эту большую работу делает команда, в которой больше 30 человек</div>
        </div>
        <div class="our-stick">
          <v-img
            :src="require('@/assets/images/agents/ourTeam/avoidance.svg')"
            height="65"
            width="62"
            class="mr-5"
            alt="team-icon"
          />
          <div class="stick-title" v-html="'Дорожим репутацией'"/>
        </div>
        <div class="our-stick">
           <v-img
            :src="require('@/assets/images/agents/ourTeam/reputation.svg')"
            height="65"
            width="62"
            class="mr-5"
            alt="team-icon"
          />
          <div class="stick-title" v-html="'Избегаем серость и&nbsp;скуку'"/>
        </div>
        <div class="our-stick">
           <v-img
            :src="require('@/assets/images/agents/ourTeam/open.svg')"
            height="65"
            width="62"
            class="mr-5"
            alt="team-icon"
          />
          <div class="stick-title" v-html="'Исповедуем открытость'"/>
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
export default class OurTeam extends Vue {
  profits = {
    first: [
      {
        img: require('@/assets/images/agents/ourTeam/mac.png'),
        text: 'пишем много строчек кода'
      },
      {
        img: require('@/assets/images/agents/ourTeam/raketa.png'),
        text: 'запускаем новые продукты'
      },
      {
        img: require('@/assets/images/agents/ourTeam/bag.png'),
        text: 'считаем и проводим выплаты'
      },
      {
        img: require('@/assets/images/agents/ourTeam/sos.png'),
        text: 'помогаем в чате поддержки'
      },
    ],
    second: [
      {
        img: require('@/assets/images/agents/ourTeam/hand.png'),
        text: 'проектируем и рисуем макеты'
      },
      {
        img: require('@/assets/images/agents/ourTeam/question.png'),
        text: 'анализируем работу интеграций'
      },
      {
        img: require('@/assets/images/agents/ourTeam/glass.png'),
        text: 'сверяем отчеты и платим налоги'
      },
      {
        img: require('@/assets/images/agents/ourTeam/film.png'),
        text: 'снимаем полезные видео'
      },
      {
        img: require('@/assets/images/agents/ourTeam/mail.png'),
        text: 'настраиваем рекламу и рассылки'
      },

    ],
    third: [
      {
        img: require('@/assets/images/agents/ourTeam/mac.png'),
        text: 'тестируем много строчек кода'
      },
      {
        img: require('@/assets/images/agents/ourTeam/hands.png'),
        text: 'договариваемся о вознаграждениях'
      },
      {
        img: require('@/assets/images/agents/ourTeam/articles.png'),
        text: 'пишем и публикуем статьи'
      },
      {
        img: require('@/assets/images/agents/ourTeam/phone.png'),
        text: 'знакомимся с новичками'
      },
    ],
  }
}
</script>

<style lang="scss">
.agents-team {
  padding: 65px 0 90px;
  position: relative;
  image-rendering: -webkit-optimize-contrast;
  @media (max-width: $w-md){
    padding: 65px 0 57px;
  }

  .team-title, .team-desc {
    text-align: center;
    font-family: Montserrat, sans-serif;
  }

  .team-title {
    font-weight: bold;
    font-size: 35px;
    line-height: 40px;
    @media (max-width: $w-md) {
      font-size: 19px;
      line-height: 23px;
    }
  }

  .team-desc {
    font-style: italic;
    font-weight: 600;
    font-size: 23px;
    line-height: 30px;
    color: #6238DA;
    @media (max-width: $w-md) {
      font-size: 17px;
      line-height: 21px;
    }
  }

  .team-grid {
    display: grid;
    grid-column-gap: 48px;
    grid-row-gap: 23px;
    grid-template-columns: repeat(3, 1fr);
    @media (max-width: $w-md) {
      max-width: 600px;
      margin: 0 auto;
      grid-template-columns: 1fr;
      grid-row-gap: 11px;
    }
  }

  .team-grid-title {
    font-size: 20px;
    line-height: 32px;
    @media (max-width: $w-md){
      font-size: 14px;
      line-height: 21px;
    }
  }

  .profits-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between
  }

  .profits-item {
    background: #F9F9FC;
    border-radius: 8px;
    padding: 6px 22px;
    display: flex;
    transition: .3s;
    cursor: default;
    @media (max-width: $w-md){
      padding: 6px 8px;
      font-size: 12px;
      line-height: 28px;
    }
    &:hover {
      background: rgba(217, 217, 248, 0.54);
    }
    &:not(:last-child) {
      margin-bottom: 10px;
      @media (max-width: $w-md){
        margin-bottom: 11px;
      }
    }
  }

  .our-stick {
    display: flex;
    align-items: center;
    background: #F2F5FF;
    border-radius: 9px;
    padding: 17px 13px 17px 39px;
    @media (max-width: $w-md){
      padding-left: 17px;
    }
  }

  .team-block {
    grid-column: span 2;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 45px;
    grid-row-gap: 15px;
    @media (max-width: $w-md){
      grid-template-columns: 1fr;
      grid-column: auto;
    }
  }

  .team-work {
    grid-column: span 2;
    padding: 9px 0;
    background: linear-gradient(243.77deg, #A356F3 -7.35%, #6A2BE3 107.02%);
    border-radius: 8px;
    text-align: center;
    color: white;
    @media (max-width: $w-md){
      grid-column: auto;
    }
  }

  .stick-title {
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
  }
}
</style>
