<template>
  <div class="timer-wrp cpa-timer">
    <div>
      <b>{{ days }}</b>
      <span>дней</span>
    </div>
    :
    <div>
      <b>{{ hours }}</b>
      <span>часов</span>
    </div>
    :
    <div>
      <b>{{ minutes }}</b>
      <span>минут</span>
    </div>
    :
    <div>
      <b>{{ seconds }}</b>
      <span>секунд</span>
    </div>
  </div>
</template>
<script lang="ts">

import {Vue, Component} from 'vue-property-decorator';
import TimerLogic from "~/components/timer/TimerLogic.vue";

@Component
export default class Timer extends TimerLogic {}
</script>

<style lang="scss">
.cpa-timer{
  background: #18182F;
  height: 56px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  border-radius: 50px;
  padding: 13px 0 0 0;
  margin-top: 10px;
  &.timer-wrp span{
    font-size: 12px;
    text-align: center;
    margin-top: 3px;
  }
  &>div{
    margin-top: -5px;
  }
}
</style>
