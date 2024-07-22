<template>
  <div class="timer">
    <div class="timer-text">До конца&nbsp;акции осталось</div>
    <div class="timer-wrp">
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

  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import TimerLogic from "~/components/timer/TimerLogic.vue";

@Component
export default class Timer extends TimerLogic {}
</script>

<style lang="scss">

.timer {
  background-image: url('data:image/svg+xml;utf8,<svg width="376" height="65" viewBox="0 0 376 65" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.1901 25.5C16.3296 25.5 21.3067 20.523 21.3067 14.3835V11C21.3067 4.92487 26.2315 0 32.3067 0H365C371.075 0 376 4.92487 376 11V54C376 60.0751 371.075 65 365 65H11C4.92487 65 0 60.0751 0 54V35.6901C0 30.0623 4.56228 25.5 10.1901 25.5V25.5Z" fill="%234578FF"/></svg>');
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  position: relative;
  @media (min-width: $w-xs) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 65px;
    padding: 0 10px 0 27px;
    width: 375px;
  }
  @media (max-width: $w-xs) {
    height: 78px;
    border-radius: 12px;
    padding: 8px 10px 0 43px;
    width: 255px;
  }

  &-text {
    flex-shrink: 0;
    letter-spacing: -0.9px;
    font-size: 15px;
    line-height: 17px;
    @media (min-width: $w-xs) {
      width: 117px;
    }
  }

  &:after {
    content: '';
    width: 15px;
    height: 16px;
    display: block;
    background-image: url('@/assets/images/universe-gift/timer/clock.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    top: 4px;
    z-index: 2;
    left: -1px;
  }

  &:before {
    content: '';
    position: absolute;
    top: -1px;
    left: -5px;
    width: 23px;
    height: 23px;
    z-index: 1;
    border-radius: 23px;
    background: #FFF;
    box-shadow: 0px 2px 7px 0px rgba(114, 78, 251, 0.39);
  }

  &-wrp {
    display: flex;
    align-self: center;
    margin-top: 9px;
    @media (max-width: $w-xs) {
      margin-left: -6px;
      margin-top: 7px;
    }

    & > div {
      margin: 0 9px;
      @media (max-width: $w-xs) {
        margin: 0 7px;
      }
    }

    b {
      font-size: 25px;
      font-weight: 800;
      line-height: 1;
    }

    span {
      opacity: 0.5;
      display: block;
      margin-top: -5px;
      letter-spacing: -0.2px;
      font-size: 11px;
    }
  }
}
</style>
