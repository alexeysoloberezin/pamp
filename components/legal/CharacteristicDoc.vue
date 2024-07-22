<template>
  <section class="characteristic-container generic-container-1260">
    <div class="characteristic-documents">
      <h4>
        Описание программного обеспечения
      </h4>
      <p>Программное обеспечение «Программный комплекс Pampadu 2.0» (далее - Сервис) представляет собой интернет-сервис, предназначенный для автоматизации работы страхового агента и страховщика. С помощью алгоритмов машинного обучения на основе большого количества данных из внешних баз, социальных сетей, данных веб-интерфейса/ мобильного приложения Сервис способен сформировать алгоритмическую оценку соответствия потенциального клиента требованиям страховщика в целях определения возможности заключения договора страхования. Также Сервис оценивает уровень риска и склонность к мошенничеству страхового агента, выявляя и прогнозируя мошеннические действия до того, как они повлекут реальный ущерб.
        Сервис разработан при поддержке Фонда Содействия Инновациям и поддержке в рамках реализации федерального проекта «Искусственный интеллект». </p>
      <h4>
        Функциональные характеристики программного обеспечения
      </h4>
      <ul>
        <li>
          Автоматизированный сбор информации о клиентах из широкого круга источников (включая социальные сети);
        </li>
        <li>
          Выявление классов убыточности потенциальных страхователей;
        </li>
        <li>
          Формирование сегментов и тарифов за счет самообучения;
        </li>
        <li>
          Выявление признаков манипуляций с фотографиями документов (технология компьютерного зрения);
        </li>
        <li>
          Выявление агентов, склонных к мошенничеству по принципу «look alike», а также по принципу фиксации аномального поведения;
        </li>
        <li>
          Формирование базы лиц, подозреваемых в мошенничестве при оформлении страховых полисов, включая ФИО, паспортные данные и номера автомобилей данных лиц;
        </li>
        <li>
          Оформление страховых полисов.
        </li>
      </ul>
      <h4>
        Документация
      </h4>
      <ul class="characteristic-doc">
        <li><a href="https://docs.google.com/document/d/1flKbtq69Erh36eQ0Y4AHGNbFZnmhi0uEZK-__q8Gzdo/edit">Описание функциональных характеристик программного обеспечения </a></li>
        <li><a href="https://docs.google.com/document/d/11FQXtDtzDRCDjfY0vkejIme_Utvud72fjrkQ9z3cdOI/edit">Руководство пользователя</a></li>
        <li><a href="https://docs.google.com/document/d/1R9KgDJBlNhGg6PUjZ98UgYOYLm0VRu1JbIS7_pYSwyI/edit?usp=sharing">Описание жизненного цикла и технической поддержки</a></li>
      </ul>
      <h4>Программа распространяется в виде интернет-сервиса, специальные действия по установке программы на стороне пользователя не требуются.</h4>
      <div>
        Право доступа к Сервису осуществляется на безвозмедной основе соласно <a class="link" style="color: #4578FF !important;" href="https://drive.google.com/file/d/1M9-nRbmTFUu6OXX-xOiYc2LdXMiIRegS/view">Договору-оферте</a>
      </div>
    </div>

  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
@Component({})
export default class CharacteristicDoc extends Vue {}
</script>

<style lang="scss" scoped>
.characteristic {

  .link{
    font-size: 16px;
    line-height: 35px;
    color: #4578FF !important;
  }
  &-container{
    margin: 30px auto;
    h4{
      font-family: 'Montserrat', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 35px;
      padding: 20px;
    }
  }
 &-doc{
   >li{
     list-style-type: none;
   }

 }
  &-documents{
    background-color: #F2F5FF;
    border-radius: 9px;
    position: relative;
    padding: 20px;
    >ul{
      li {
        a{
          font-size: 16px;
          line-height: 35px;
          color: #4578FF !important;
        }
      }
    }
    &__img{
      position: absolute;
      right: -6px;
      top: 17px;
      z-index: 1;
      width: 300px;

    }
  }
}

@media (max-width: $w-sm){
  .characteristic  {
    h4{
      font-size: 14px;
      line-height: 25px;
      padding: 15px;
    }
  }
}
</style>
