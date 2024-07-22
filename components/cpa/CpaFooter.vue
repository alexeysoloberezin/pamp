<template>
  <div class="cpa-footer">
    <div class="container">
      <div class="cpa-footer-wrp">
        <img :src="require('@/assets/images/logoOnBlack.svg')" alt="pampadu logo"/>
        <nav class="cpa-footer__nav">
          <ul>
            <li v-for="el in menu"><a @click.prevent="scrollToSection(el.link)" href="#">{{ el.name }}</a></li>
          </ul>
        </nav>
        <a class="cpa-footer-link" target="_blank" href="https://docs.google.com/document/d/17PnoqonnOTeU6fVyfT5lmioboKaT2IPO/edit">Политика конфиденциальности</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {cpaMenu, scrollToSectionHandler} from "~/model/entities/webtools/cpa/cpaMenu";


@Component
export default class CpaFooter extends Vue {
  menu = cpaMenu

  scrollToSection(sectionId) {
    scrollToSectionHandler(sectionId)
  }
}
</script>

<style lang="scss">
.cpa-footer{
  background: #181831;
  padding: 35px 0;
  @media (max-width: 1000px) {
    padding-bottom: 100px;
  }
  &-wrp{
    @media (min-width: 1001px) {
      display: flex;
      align-items: center;
    }
  }
  &__nav{
    margin-left: 60px ;
    @media (max-width: 1000px) {
      margin: 20px 0;
    }
    ul{
      display: flex;
      align-items: center;
      grid-gap: 50px;
      list-style: none;
      @media (max-width: 600px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
      }
      a{
        color: #fff !important;
        font-size: 13px;
        &:hover{
          text-decoration: underline;
        }
      }
    }
  }
  .cpa-footer-link{
    margin-left: auto;
    color: #C66BFF !important;
    font-size: 12px;
    &:hover{
      text-decoration: underline;
    }
  }
}
</style>
