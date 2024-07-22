<template>
  <div class="generic-container-1260">
    <div class="earn-immediately">
      <h2 class="earn-immediately-title">Зарабатывайте на страховании ипотеки - рассказав своим клиентам</h2>
      <div class="earn-immediately-content">
        <v-img contain class="earn-immediately-img" :src="img" alt="earning"/>
        <div class="earn-immediately-text">
          <div>
            Имея аудиторию, вы можете им рассказать, что помогаете с ипотечным страхованием <b>и сразу заработать</b>. Это доказано опытом наших агентов. Сделайте рассылку своим клиентам с предложением оформить через вас страховку по ипотеке.
            <p class="mt-5"><b>Если возникнут сложности — мы поможем.</b></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({})
export default class EarnImmediately extends Vue {
  img = require('images/ipoteka/earnImmediately/bg.png')
}
</script>

<style lang="scss">
.earn-immediately {
  background: #F2F5FF;
  border-radius: 5px;
  padding: 46px 65px 46px 58px;
  @media (max-width: $w-sm){
    padding: 24px 23px;
  }
  &-title {
    font-family: 'Montserrat',sans-serif;
    margin: 0 auto;
    text-align: center;
    font-weight: 700;
    font-size: 35px;
    line-height: 40px;
    @media (max-width: $w-sm){
      font-size: 19px;
      line-height: 23px;
    }
  }
  &-content {
    margin-top: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: $w-sm){
      margin-top: 10px;
      flex-direction: column;
    }
  }
  &-img {
    flex: 0 1 422px;
    max-width: 422px;
    margin-right: 15px;
    @media (max-width: $w-sm){
      margin-right: unset;
      flex: auto;
      max-width: 100%;
    }
  }
  &-text {
    flex: 0 1 564px;
    font-weight: 400;
    font-size: 22px;
    line-height: 34px;
    @media (max-width: $w-sm){
      flex: auto;
      margin-top: 15px;
      font-size: 15px;
      line-height: 20px;
    }
  }
}
</style>
