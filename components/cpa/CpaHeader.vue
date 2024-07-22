<template>
  <header class="cpa-header" :class="{ 'sticky': isSticky }">
    <div class="container">
      <div class="cpa-header__row">
        <nav class="cpa-header__nav cpa-header__nav-desc">
          <ul>
            <li v-for="el in menu"><a @click.prevent="scrollToSection(el.link)" href="#">{{ el.name }}</a></li>
          </ul>
        </nav>
        <div class="cpa-header__logo">
          <img :src="require('@/assets/images/logoOnBlack.svg')" alt="pampadu logo"/>
        </div>
        <div class="cpa-header__r">
          <a href="#" @click.prevent="scrollToSection('cpaForm')" target="_blank"
             class="cpa-header__btn cpa-header__btn-red">Регистрация</a>
          <a href="https://t.me/liya_pampadu" target="_blank" class="cpa-header__btn cpa-header__btn-purple-outlined">Support</a>
        </div>
        <div class="cpa-burger">
          <div id="sidemenu">
            <button class="sidemenu__btn" @click="navOpen = !navOpen" :class="{active:navOpen}">
              <span class="top"></span>
              <span class="mid"></span>
              <span class="bottom"></span>
            </button>
            <transition name="translateX">
              <nav v-show="navOpen">
                <div class="sidemenu__wrapper">
                  <div class="sidemenu__btns">
                    <a href="#" @click.prevent="scrollToSection('cpaForm')" target="_blank"
                       class="cpa-header__btn cpa-header__btn-red">Регистрация</a>
                    <a href="https://t.me/liya_pampadu" target="_blank"
                       class="cpa-header__btn cpa-header__btn-purple-outlined">Support</a>
                  </div>
                  <ul class="sidemenu__list">
                    <li v-for="el in menu" class="sidemenu__item"><a @click.prevent="scrollToSection(el.link)" href="#">{{
                        el.name
                      }}</a></li>
                  </ul>
                </div>
              </nav>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import {Vue, Component, Prop} from "vue-property-decorator";
import {cpaMenu, scrollToSectionHandler} from "~/model/entities/webtools/cpa/cpaMenu";

@Component
export default class CpaHeader extends Vue {
  @Prop({ required: true }) isDesktop: boolean;

  menu = cpaMenu
  isSticky = false
  navOpen = false

  mounted() {
    this.handleScroll()
    window.addEventListener("scroll", this.handleScroll);
  }

  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    this.isSticky = window.scrollY >= 50;
  }

  scrollToSection(sectionId) {
    scrollToSectionHandler(sectionId)
  }
}
</script>

<style lang="scss">
.cpa-header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  z-index: 200;
  transition: .4s;
  height: 58px;

  &.sticky {
    background: #1B1B38;
    box-shadow: 0px 17px 37px 0px rgba(0, 0, 0, 0.25);
  }

  @media (min-width: 1200px) {
    height: 100px;
    .cpa-burger {
      display: none;
    }
  }

  &__row {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 250px 1fr;
    padding: 21px 0;
    @media (max-width: 1200px) {
      display: flex;
      justify-content: space-between;
      padding: 4px 0;
    }
  }

  &__logo {
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 1200px) {
      max-width: 162px;
      max-height: 35px;
      img{
        max-height: 100%;
        max-width: 100%;
      }
    }
  }

  &__r {
    margin-left: auto;
    display: flex;
    align-items: center;
    grid-gap: 24px;
    justify-content: flex-end;
    @media (max-width: 1200px) {
      display: none;
    }
  }

  .cpa-header__btn {
    display: flex;
    width: 176px;
    height: 48px;
    padding: 9px 30px;
    justify-content: center;
    border-radius: 26px;
    align-items: center;
    color: #fff !important;
    gap: 10px;
    transition: .3s;

    &.cpa-header__btn-red {
      background: #F07;

      &:hover {
        color: #fff !important;
        box-shadow: 0px 13px 34px 0px rgba(255, 0, 119, 0.86);
      }
    }

    &.cpa-header__btn-purple-outlined {
      border: 2px solid #BD48FF;

      &:hover {
        color: #fff !important;
        background: #BD48FF;
        box-shadow: 0px 13px 34px 0px rgba(#BD48FF, 0.86);
      }
    }
  }

  &__nav {
    padding-right: 30px;
    @media (max-width: 1200px) {
      &-desc {
        display: none;
      }
    }

    ul {
      display: flex;
      align-items: center;
      justify-content: space-around;
      list-style: none;

      a {
        color: #fff !important;
        font-size: 17px;
      }
    }
  }


  #sidemenu {

    nav {
      width: 300px;
      position: fixed;
      top: 0;
      border-radius: 0 0 0 15px;
      right: 0;
      background: #0E0E24;
      box-shadow: 0px 4px 47px 0px rgba(0, 0, 0, 0.56);
      z-index: 99;

    }

    .sidemenu {
      &__btns {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 15px;
        margin-top: 15px;

        .cpa-header__btn {
          width: initial;
          padding: 0;
          height: 36px !important;
          font-size: 14px;
        }
      }

      &__btn {
        display: block;
        width: 50px;
        height: 50px;
        border: none;
        position: relative;
        z-index: 100;
        appearance: none;
        cursor: pointer;
        outline: none;

        span {
          display: block;
          width: 20px;
          height: 2px;
          margin: auto;
          background: white;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          transition: all .4s ease;

          &.top {
            transform: translateY(-8px);
          }

          &.bottom {
            transform: translateY(8px);
          }
        }

        &.active {
          .top {
            transform: rotate(-45deg);
          }

          .mid {
            transform: translateX(-20px) rotate(360deg);
            opacity: 0;
          }

          .bottom {
            transform: rotate(45deg);
          }
        }

      }

      &__wrapper {
        padding-top: 50px;
        padding-left: 20px;
        padding-right: 25px;
      }

      &__list {
        list-style: none;
        margin: 0;
        padding-top: 30px;
      }

      &__item {
        margin-bottom: 30px;

        a {
          font-size: 17px;
          font-weight: 500;
          color: #fff !important;
        }
      }
    }
  }

  .translateX-enter {
    transform: translateX(200px);
    opacity: 0;
  }

  .translateX-enter-active, .translateX-leave-active {
    transform-origin: top left 0;
    transition: .2s ease;
  }

  .translateX-leave-to {
    transform: translateX(200px);
    opacity: 0;
  }

}
</style>
