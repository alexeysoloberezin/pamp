<template>
  <div class="osago-intro">
    <div id="oi" style="position: absolute; top: -100px;"/>
    <div class="generic-container-1260">
      <div class="intro-wrapper">
        <div>
          <h1 class="intro-title">
            Продавайте полисы ОСАГО сразу от&nbsp;16&nbsp;страховых компаний, получая до&nbsp;<span
            style="color: #AB54FF">35%&nbsp;вознаграждения</span> уже&nbsp;через 5&nbsp;минут после регистрации
          </h1>
          <h2 class="my-5 intro-subtitle"
              v-text="'Онлайн оформление в едином кабинете агента — из любого региона РФ, без бланков и сдачи отчётов'"/>
          <zond-btn v-text="'Зарегистрироваться'"/>
        </div>
        <div>
          <img style="max-width: 100%" src="~/assets/images/osago/intro/intro-bg-2x.webp" alt="osago-intro">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"

@Component({})
export default class Intro extends Vue {
}
</script>
