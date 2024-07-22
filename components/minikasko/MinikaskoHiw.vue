<template>
  <div class="minikasko-container">
    <div class="minikasko-hiw">
      <HowItWorksBlock :items="howItWorkItems" :title="title"/>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Inject, Vue} from "vue-property-decorator"
import HowItWorksBlock from "~/components/common/HowItWorksV1";

@Component({
  components: {HowItWorksBlock}
})
export default class MinkaskoHiw extends Vue {
  @Inject('imgAltAttr') readonly imgAltAttr!: string
  title = 'Не нужно быть экспертом, чтобы оформить полис и начать зарабатывать!'
  howItWorkItems = [
    {
      title: 'Заполните данные для предварительного расчёта',
      img: require(`images/minikasko/hiw/step0.jpg`),
      text: 'Укажите возраст и стоимость автомобиля, чтобы получить расчет полиса и увидеть размер вознаграждения.',
      alt: this.imgAltAttr,
    },
    {
      title: 'Сравните цены, размер вознаграждения, условия страхования  и выберите подходящий вариант',
      text: 'Выберите вариант, выгодный вам и клиенту, пользуйтесь удобными фильтрами, сравнивайте условия страхования и правила.',
      img: require(`images/minikasko/hiw/step1.jpg`),
      alt: this.imgAltAttr,
    },
    {
      title: 'Заполните все данные по клиенту и транспортному средству',
      img: require(`images/minikasko/hiw/step2.jpg`),
      text: 'Пользуйтесь функционалом автозаполнения данных по расчетам ОСАГО или введите вручную сведения о транспортном средстве и паспортные данные страхователя и собственника авто.',
      alt: this.imgAltAttr,
    },
    {
      title: 'Отправьте ссылку на оплату клиенту',
      img: require(`images/minikasko/hiw/step3.jpg`),
      text: 'Отправьте ссылку на оплату в СМС или письме прямо из личного кабинета. Оплата напрямую в страховую компанию.',
      alt: this.imgAltAttr,
    },
    {
      title: 'Получите полис и ваше вознаграждение',
      img: require(`images/minikasko/hiw/step4.png`),
      text: 'Полис будет доступен у вас в личном кабинете и придет на email клиенту. На ваш баланс сразу поступит вознаграждение за продажу.',
      alt: this.imgAltAttr,
    },
  ]
}
</script>

<style lang="scss">
.minikasko-hiw {
  position: relative;
  padding: 75px 0;
  @media (max-width: $w-sm) {
    padding: 35px 0 0;
  }

  .hiw-v1-content__inner {
    min-height: unset;
  }

  .hiw-v1-switcher-container {
    flex: 0 1 415px;
  }

  .hiw-v1-switch {
    padding: 23px 0 23px 17px;
    @media (max-width: $w-sm){
      padding: 10px 0 10px 17px;
    }
    &.active {
      background: #FFFFFF;
      box-shadow: 0 4px 30px rgba(49, 49, 49, 0.0902262);
      border-radius: 4px;
    }
  }

  .hiw-v1-desc-container {
    margin-left: 25px;
    max-width: 600px;
    min-height: unset;
    & > img {
      filter: drop-shadow(0px 5px 31px rgba(114, 78, 251, 0.18));
      margin-bottom: 15px;
    }
    @media (max-width: $w-sm){
      margin-left: unset;
      font-size: 13px;
    }
  }
}
</style>
