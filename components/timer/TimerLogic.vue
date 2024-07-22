<template>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component
export default class TimerLogic extends Vue {
  targetDate = new Date().getTime() + 1000 * 60 * 60 * 24; // Задайте целевую дату и время здесь
  days = '00';
  hours = '00';
  minutes = '00';
  seconds = '00';

  timerInterval: NodeJS.Timeout | null = null;

  created() {
    this.startTimer();
  }

  destroyed(): void {
    this.stopTimer();
  }

  startTimer() {
    this.timerInterval = setInterval(() => {
      const targetDate = new Date();
      targetDate.setMonth(11); // Устанавливаем месяц (январь - 0, февраль - 1, итд.), где 11 соответствует декабрю
      targetDate.setDate(31); // Устанавливаем день месяца
      targetDate.setHours(23, 59, 0, 0); // Устанавливаем время (23:59)

      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      this.days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0');
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }
}
</script>

<style scoped>

</style>
