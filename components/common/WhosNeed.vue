<template>
  <div class="ipoteka-whos-need">
    <div style="position: absolute;top: -120px" id="mow"/>
    <div class="generic-container-1260">
      <h2 class="font-weight-bold h2 text-center" v-text="'Кому это подходит?'"/>
      <h3 style="color: #4E7EFF;font-family: Montserrat, sans-serif"
          class="my-4 text-center font-weight-bold whos-need-desc"
          v-text="'У вас точно уже есть клиенты на ипотечное страхование'"/>
      <div class="items-wrapper mt-8">
        <div class="whos-need-item" v-for="(item,i) in items" :key="i">
          <img :height="$vuetify.breakpoint.mdAndUp ? '80' : '55'" :src="item.icon" alt="icon">
          <div style="flex: 1;display: flex;flex-direction: column">
            <div class="my-5" :class="{'mt-0': $vuetify.breakpoint.mdAndDown}" v-text="item.title"
                 style="max-width: 380px;font-weight: bold;font-family: Montserrat, sans-serif; font-size: 18px; line-height: 1.2"/>
            <div @click="openDialog(item)" v-text="'Подробнее'" class="primary--text"
                 style="text-decoration: underline;cursor: pointer;font-size: 12px;margin-top: auto"/>
          </div>
        </div>
      </div>
    </div>
    <v-dialog max-width="615" v-model="dialog" content-class="whos-need-dialog">
      <v-card v-if="dialog" :style="$vuetify.breakpoint.smAndDown ? 'padding: 20px;': 'padding: 40px;'">
        <v-icon
          @click="dialog = false"
          class="c-pointer"
          style="position: absolute; right: 20px; top: 20px;"
          v-text="'mdi-close'"
        />
        <div class="primary--text font-weight-bold h5 mb-5" v-text="selected.title"/>
        <div>
          <div v-for="(item,i) in selected.description" v-text="item" class="mb-3 dialog-item" :key="i"/>
          <nuxt-link v-if="selected.title.includes('Вебмастерам')" style="text-decoration: underline"
                     class="primary--text" :to="`/webtools${$root.query}`" v-text="'Подробнее...'"/>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"

@Component({})
export default class WhosNeed extends Vue {
  dialog = false;
  selected = {};
  items = [
    {
      icon: require('@/assets/images/ipoteka/whosneed/agent.svg'),
      title: 'Страховой агент',
      description: [
        'Ипотека — это новое ОСАГО: обязательно и ежегодно для всех, кто купил недвижимость в кредит, — но ещё не такое конкурентное',
        'Среди ваших клиентов точно есть те у кого ипотека. Расширьте список оказываемых услуг',
        'Стандартизирован и с помощью Пампаду оформляется как Е-ОСАГО — онлайн за 10 минут с оплатой напрямую в страховую компанию. Без анкет, загрузки документов и пр.',
        'Работайте со всеми регионами РФ. Нет сегментации',
      ],
    },
    {
      icon: require('@/assets/images/ipoteka/whosneed/broker.svg'),
      title: 'Ипотечный брокер',
      description: [
        'Помогайте клиентам не только с ипотекой но и с ее страхованием',
        'Продлевайте полис в последующие годы дешевле, чем в банке',
      ],
    },
    {
      icon: require('@/assets/images/ipoteka/whosneed/rieltor.svg'),
      title: 'Риелтор и юрист',
      description: [
        'Помогайте клиентам не только с поиском недвижимости, оформлением но и с ее страхованием',
        'Ведите базу клиентов и продлевайте ипотечные полисы в последующие годы с выгодой для себя и клиента',
      ],
    },
    {
      icon: require('@/assets/images/ipoteka/whosneed/webmaster.svg'),
      title: 'Вебмастерам: владельцам сайтов, приложений и арбитражникам',
      description: [
        'Устанавливайте виджеты покупки, полиса на свой сайт или приложение',
        'Размещайте реферальные ссылки в блоге или социальных сетях',
        'Заливайте арбитражный трафик на виджет',
        'Отслеживайте все продажи и статистику в личном кабинете',
      ],
    },
    {
      icon: require('@/assets/images/ipoteka/whosneed/income.svg'),
      title: 'Ищете дополнительный источник дохода на дому',
      description: [
        'Станьте страховым агентом в 2 клика через 5 минут после регистрации',
        'Помогайте клиентам с оформлением ипотечного страхования не выходя из дома. Рассказывайте и рекламируйте свои услуги в социальных сетях',
        'Можете работать как брокер — ищите агентов и подключайте их под собой, зарабатывая с разницы комиссий для вас и той, что вы установите агентам',
      ],
    },
    {
      icon: require('@/assets/images/ipoteka/whosneed/agency.svg'),
      title: 'Агентствам недвижимости',
      description: [
        'Увеличьте свой доход за счёт кросс-продаж страхования ипотеки своим клиентам',
        'У вас уже есть база, кому это может быть интересно. Предложите им свою помощь, помогите оформить дешевле, чем в банке и заработайте сами!',
      ],
    },
    {
      icon: require('@/assets/images/ipoteka/whosneed/blogger.svg'),
      title: 'Частным лицам и блогерам',
      description: [
        'Если ваш бизнес или аудитория состоят из людей, у которых есть ипотека - монетизируйте это! Предложите им оформить страхование ипотеки у вас дешевле, чем в банке, и заработайте на этом.',
      ],
    },
    {
      icon: require('@/assets/images/ipoteka/whosneed/company.svg'),
      title: 'Оценочным компаниям Москвы, Санкт-Петербурга, других городов и регионов',
      description: [
        'Ваша компания занимается оценкой стоимости недвижимого имущества? У многих ваших клиентов точно есть ипотека! Увеличьте свой доход за счёт кросс-продаж, предлагая своим клиентам оформлять страхование ипотеки у вас, дешевле, чем в банке.',
      ],
    },
  ]

  openDialog(item) {
    this.selected = {...item};
    this.dialog = true;
  }
}
</script>

<style lang="scss">
.ipoteka-whos-need {
  padding: 70px 0;
  position: relative;
  @media (max-width: $w-sm) {
    padding: 35px 0;
  }

  .whos-need-desc {
    font-size: 22px;
    @media (max-width: $w-sm) {
      font-size: 17px;
    }
  }

  .items-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    align-items: stretch;
    justify-content: center;
    position: relative;

    &:before {
      position: absolute;
      content: url("@/assets/images/decor/rect.svg");
      left: -7%;
      top: 50%;
      z-index: 0;
      @media (max-width: $w-sm) {
        display: none;
      }
    }

    &:after {
      position: absolute;
      content: url("@/assets/images/decor/rect1.svg");
      right: -7%;
      top: -15%;
      z-index: 0;
      @media (max-width: $w-sm) {
        display: none;
      }

    }
  }

  .whos-need-item {
    flex: 1 0 375px;
    padding: 20px;
    background: #FFFFFF;
    border: 1px solid #E5E5E5;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    @media (max-width: $w-md) {
      justify-content: unset;
      max-width: 375px;
      flex-direction: row;
      text-align: left;
      padding: 15px;
      gap: 25px;
      flex-basis: 50%;
    }
  }
}

.whos-need-dialog {
  .dialog-item {
    position: relative;

    &:before {
      display: inline-block;
      content: "";
      border-top: 3px solid #7130E5;
      margin: 5px 15px 5px 0;
      width: 10px;
    }
  }
}
</style>
