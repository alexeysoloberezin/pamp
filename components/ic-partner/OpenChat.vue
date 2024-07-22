<template>
  <div class="mt-3 open-chat">
    Остались вопросы? <span @click="openChat" class="chat-link">Напишите нам в чат</span>, на сайте, мы помогаем
    7 дней в неделю. Вы также можете сделать это в личном кабинете или позвонить нам напрямую
    Вы сможете сэкономить свое время! Просто используйте наш сервис, чтобы легко проводить все операции, даже
    через через мобильный телефон. Вам нужно всего лишь войти в личный кабинет и, став агентом, начать
    зарабатывать на страховании!
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"


@Component
export default class OpenChat extends Vue {
  openChat() {
    (window as any).carrotquest?.open();
  }
}
</script>

<style scoped lang="scss">
.open-chat {
  .chat-link {
    text-decoration: underline;
    cursor: pointer;
    color: #8E68FF;
    font-weight: bold;
  }
}
</style>
