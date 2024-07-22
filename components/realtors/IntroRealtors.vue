<template>
  <section class="realtors-intro">
    <div style="position: absolute; top: 0" id="moi"/>
    <div class="generic-container-1260">
      <div>
        <h1 style="font-weight: bold" class="h2" :class="{'text-left' : $vuetify.breakpoint.smAndDown}">
          <span style="color: #AB54FF">Риэлтор?</span>
          Продавайте страхование ипотеки своим клиентам и <span style="color: #AB54FF">зарабатывайте до 200 000 ₽ в месяц</span>
        </h1>
        <h3 class="realtors-intro__description">
          Более 1500 риэлторов уже работают с нами и зарабатывают дополнительно к своей основной деятельности
        </h3>
        <h3 class="realtors-intro__line">
           Абсолютно законно и безопасно
        </h3>
        <h3 class="realtors-intro__description-item realtors-intro__line">
          Занимает до 15 минут в день
        </h3>
        <h3 class="mb-4 realtors-intro__line">
          Не нужно искать новых клиентов</h3>
        <zond-btn v-text="'Зарегистрироваться'"/>
      </div>
        <img src="~/assets/images/realtors/intro/IntroRealtors.png" alt="realtors" style="width: 100%">
    </div>
  </section>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"

@Component({})
export default class IntroRealtors extends Vue {
}
</script>

<style lang="scss">
.realtors-intro {
  padding: 63px 0;
  background: $bg-gradient;
  @media (max-width: $w-sm) {
    padding: 20px 0;
  }
  &__description{
    margin: 32px 0;
    @media (max-width: $w-sm){
      margin: 14px 0;
    }
    &-item{
      margin: 16px 0;
      @media (max-width: $w-sm){
        margin: 6px 0;
      }
    }
  }

  .generic-container-1260 {
    display: grid;
    grid-template-columns: minmax(350px, 570px) minmax(300px, 1fr);
    grid-gap: 40px;
    align-items: center;
    justify-content: center;
    @media (max-width: $w-sm) {
      grid-template-columns: minmax(300px, 700px);
    }
  }
  &__line::before{
   margin-right: 16px;
    content: "";
    position: relative;
    display: inline-block;
    width: 17px;
    height: 2px;
    vertical-align: middle;
    background: #944AEF;
    background-clip: content-box;
    }
}
</style>
