<template>
  <div class="generic-container-1260">
    <div class="affiliate-program-partner">
      <h2 class="affiliate-program-h2">Кому подойдет партнерская программа?</h2>
      <div class="affiliate-program-partner-description">
        <img width="30" class="mr-2" :src="require('images/gazprom/star.svg')" alt="star">
        <h3 class="affiliate-program-partner-subtitle" v-html="block.subtitle"/>
      </div>
      <who-is-need class="affiliate-program-partner-items-wrapper" :items="items"/>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator"
import WhoIsNeed , {WhoIsNeedItem} from "~/components/common/WhoIsNeed.vue";
@Component({
  components: {
    WhoIsNeed,
  }
})
export default class Partner extends Vue {
  @Prop() block: {
    subtitle: string,
  }

  items: WhoIsNeedItem[] = [
    {
      title: "Вебмастера, блогеры<br>и&nbsp;арбитражные команды",
      description: [
        "Для всех у кого есть трафик или аудитория автомобилистов на покупку полисов ОСАГО.",
        "Установите за 5&nbsp;минут наш виджет расчета и покупки автострахования и&nbsp;получайте комиссию с&nbsp;каждого проданного полиса через ваш сайт.",
        "Пользуйтесь дополнительными инструментами: баннеры, реферальные ссылки, white-label",
      ],
      icon: require('images/osago/whosNeed/webmaster.svg'),
    },
    {
      title:
        "Финансовые посредники с опытом агентских продаж",
      description: [
        "Сможете работать из любой точки мира со всеми регионами РФ (кроме Крыма).",
        "Не&nbsp;нужно заключать договоры со страховыми компаниями и банками. Мы уже это сделали!",
        "Не&nbsp;нужно забирать и отвозить бланки строгой отчётности, квитанции и&nbsp;акты. Все в&nbsp;онлайн!",
        "Развивайте, курируйте свою агентскую сеть и&nbsp;зарабатывайте больше.",
      ],
      icon: require('images/osago/whosNeed/agent.svg'),
    },
    {
      title: "Все, кто искали дополнительный <br/> доход или работу на дому",
      description: [
        "Стать страховым агентом легко: регистрируйтесь и через 5&nbsp;минут оформляйте первый полис.",
        "Личный куратор, обучающие видео и полезные статьи будут вам в помощь.",
        "Помогайте клиентам с&nbsp;оформлением ОСАГО и&nbsp;других видов страхования, не выходя из дома.",
        "Рассказывайте и&nbsp;рекламируйте свои услуги в социальных сетях. Все автомобилисты  — это ваши клиенты, а&nbsp;ОСАГО — обязательный вид страхования.",
      ],
      icon: require('images/osago/whosNeed/all.svg'),
    },
  ];

  get br(){
    return this.$vuetify.breakpoint;
  }
}
</script>


<style lang="scss">
.affiliate-program-partner {
  padding: 45px 0;
  text-align: center;

  .affiliate-program-h2 {
    text-align: center;
  }

  &-description {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .who-is-need .who-is-need-items-wrapper {
    flex-wrap: nowrap;
  }


  @media (max-width: $w-md){
    .who-is-need .who-is-need-items-wrapper {
      flex-wrap: wrap;
    }
  }
  @media (max-width: $w-sm){
    .who-is-need .generic-container-1260 {
      padding: 0;
    }
  }
}

</style>

