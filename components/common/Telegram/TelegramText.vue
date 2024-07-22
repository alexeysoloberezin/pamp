<template>
  <v-layout
    justify-center
    :align-start="$vuetify.breakpoint.mdAndUp"
    column
    :class="{ 'ml-4': $vuetify.breakpoint.mdAndUp }"
  >
    <div
      class="telegram-title"
      style="max-width: 570px; text-align: left"
      :class="[
                $vuetify.breakpoint.smAndDown ? 'mb-5' : 'mb-3',
                $vuetify.breakpoint.smOnly ? 'text-center' : '',
            ]"
    >
      <span>
      Зарегистрируйтесь и&nbsp;получите доступ <b>к&nbsp;закрытому Telegram каналу</b>, где&nbsp;мы&nbsp;рассказываем о&nbsp;последних обновлениях, акциях и&nbsp;способах заработка с&nbsp;помощью Пампаду
      </span>
    </div>
    <base-btn v-text="'Присоединиться!'" href="https://t.me/AvtoYslyga/"  />
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component
export default class TelegramText extends Vue {}
</script>
