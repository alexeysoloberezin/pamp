<template>
  <div style="position: relative">
    <ScrollAnchor id="mpr"/>
    <div class="minikasko-programs-wrapper">
      <div class="minikasko-container">
        <div class="minikasko-programs">
          <h2 class="programs-title minikasko-h2">Сравнивайте и выбирайте варианты, выгодные вам&nbsp;и&nbsp;клиентам</h2>
          <v-img :src="bg" :alt="imgAltAttr" class="programs-img"/>
          <div class="programs-desc"><span style="color: #5381FE;">7 программ</span> страхования от трех компаний</div>
        </div>
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
export default class Programs extends Vue {
  @Inject('imgAltAttr') readonly imgAltAttr: string

  bg = require('images/minikasko/programs/bg.png');
}
</script>

<style lang="scss">
.minikasko-programs-wrapper {
  background-color: rgba(249, 249, 252, 1);
  padding: 60px 0;
  @media (max-width: $w-sm){
    padding: 35px 0;
  }
  .minikasko-programs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .programs-title {
      max-width: 894px;
      text-align: center;
    }
    .programs-img {
      margin-top: 35px;
      max-width: 763px;
      @media (max-width: $w-sm){
        max-width: 100%;
      }
    }
    .programs-desc {
      margin-top: 20px;
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
      font-size: 30px;
      line-height: 37px;
      max-width: 446px;
      text-align: center;
      @media (max-width: $w-sm){
        font-size: 17px;
        line-height: 20px;
      }
    }
  }
}
</style>
