<template>
  <div class="who-is-need">
    <div class="generic-container-1260">
      <div class="who-is-need-items-wrapper">
        <div class="who-is-need-item" v-for="(item,i) in items" :key="i">
          <img :height="br.mdAndUp ? '80' : '55'" :src="item.icon" alt="icon">
            <div class="my-5" :class="{'mt-0': br.mdAndDown}" v-html="item.title"
                 style=" font-weight: bold;font-family: Montserrat, sans-serif; font-size: 18px; line-height: 1.2"/>

            <div @click="openDialog(item)" v-text="'Подробнее'" class="primary--text"
                    style="text-decoration: underline;cursor: pointer;font-size: 12px"/>
      </div>
      </div>
      <v-dialog max-width="615" v-model="dialog" content-class="who-is-need-dialog">
        <v-card v-if="dialog" :style="br.smAndDown ? 'padding: 20px;': 'padding: 40px;'">
          <v-icon
            @click="dialog = false"
            class="c-pointer"
            style="position: absolute; right: 20px; top: 20px;"
            v-text="'mdi-close'"
          />
          <div class="primary--text font-weight-bold h5 mb-5" v-html="selected.title"/>
          <div v-for="(item,i) in selected.description" v-html="item" class="mb-3 dialog-item" :key="i"/>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator"

export type WhoIsNeedItem = {
  icon: string
  title: string
  description: string[]
}

@Component
export default class WhoIsNeed extends Vue {
  @Prop({ default: () => [
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
    ] }) items: WhoIsNeedItem[];
  dialog = false;
  selected = {};

  get br() {
    return this.$vuetify.breakpoint;
  }

  openDialog(item) {
    this.selected = {...item};
    this.dialog = true;
  }
}
</script>

<style lang="scss">
.who-is-need {
  margin-top: 20px;
  position: relative;
  @media (max-width: $w-sm) {
    margin-top: 10px;
  }

  .who-is-need-items-wrapper {
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

  .who-is-need-item {
    flex: 1 0 380px;
    height: 260px;
    padding: 20px 50px;
    background: #FFFFFF;
    flex-direction: column;
    justify-content: space-between;
    display: flex;
    text-align: center;
    box-shadow: 0px 2px 14px rgba(114, 69, 255, 0.12);
    border-radius: 11px;

    @media (max-width: $w-md) {
      max-width: 375px;
      height: 197px;
      padding: 15px;
      flex-basis: 50%;
    }
  }
}

.who-is-need-dialog {
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
