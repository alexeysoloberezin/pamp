<template>
  <div class="minikasko-container">
    <div class="minikasko-personal-options">
      <ScrollAnchor id="mpo"/>
      <v-img :src="img" class="personal-options-img" :alt="imgAltAttr" style="filter: drop-shadow(0px 5px 31px rgba(203, 207, 216, 0.6));"/>
      <div class="personal-options-info">
        <h2 class="options-info-title" v-html="title"/>
        <h3 class="options-info-desc" v-html="desc"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Inject, Vue} from "vue-property-decorator"
import ScrollAnchor from "~/components/common/ScrollAnchor";

@Component({
  components: {ScrollAnchor}
})
export default class PersonalOptions extends Vue {
  @Inject('imgAltAttr') readonly imgAltAttr!: string

  img = require('images/minikasko/personalOptions/bg.jpg');

  title = 'Расширяйте страховой полис индивидуальными опциями';
  desc = '' +
    'В зависимости от потребностей клиента, вы&nbsp;сможете добавить в полис мини-КАСКО опцию эвакуатора, страхование от несчастного случая, юридическую консультацию и др. ' +
    'Больше опций — больше&nbsp;защиты и ваше вознаграждение.'
}
</script>

<style lang="scss">
.minikasko-personal-options {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 90px;
  @media (max-width: $w-sm){
    padding-bottom: 30px;
    flex-direction: column;
  }
  .personal-options-img {
    flex: 0 1 637px;
    @media (max-width: $w-sm){
      max-width: 100%;
      flex: 0 1 auto;
    }
  }
  .personal-options-info {
    flex: 0 1 437px;
    text-align: center;
    @media (max-width: $w-sm){
      flex: 0 1 auto;
    }
  }
  .options-info-title {
    font-family: 'Montserrat',sans-serif;
    font-weight: 700;
    font-size: 30px;
    line-height: 40px;
    @media (max-width: $w-sm){
      margin-top: 15px;
      font-size: 19px;
      line-height: 23px;
    }
  }
  .options-info-desc {
    margin-top: 25px;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    @media (max-width: $w-sm){
      font-size: 15px;
      line-height: 23px;
    }
  }
}
</style>
