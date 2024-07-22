<template>
  <div class="common-partners-slider">
    <div style="position: absolute;top: -100px" id="mos"/>
    <h2 class="partners-slider-title" v-text="'Другие партнерские программы'"/>
    <h3 class="partners-slider-subtitle" v-text="'34 аккредитованных страховых компании и банка'"/>
    <BankSlider v-if="showBanks" ref="bank-slider" disable-links no-controls class="mt-10"/>
    <ICSlider ref="ic-slider" disable-links no-controls/>
    <div class="partners-slider-carousel-btn-container" style="display: flex; justify-content: center">
      <div class="partners-carousel-btn" @click="prev">
        <img src="@/assets/images/bl2/arrow-dir.svg" alt="arrow" />
      </div>
      <div class="partners-carousel-btn" @click="next">
        <img
          style="transform: rotate(180deg)"
          src="@/assets/images/bl2/arrow-dir.svg"
          alt="arrow"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Ref } from "vue-property-decorator"
import ICSlider from "~/components/common/slider/ICSlider.vue";
import BankSlider from "~/components/common/slider/BankSlider.vue";
import { Pages } from "~/model/entities/pages"

@Component({
  components: {BankSlider, ICSlider}
})
export default class PartnersSlider extends Vue {
  @Ref('ic-slider') readonly icSlider: ICSlider;
  @Ref('bank-slider') readonly bankSlider: BankSlider;
  showBanks: boolean = false;
  prev(){
    this.icSlider.prev();
    this.bankSlider.prev();
  }
  next(){
    this.icSlider.next();
    this.bankSlider.next();
  }
  mounted(){
    //Костыль, нужен для того,чтобы создать задержку между монтированием двух слайдеров, без него будет ломаться отображение
    this.$nextTick(()=>{
      this.showBanks = true;
    })
  }
}
</script>

<style lang="scss">
.common-partners-slider {
  padding: 65px 0 35px;
  background: #F9F9FC;
  position: relative;
  @media (max-width: $w-sm){
    padding: 25px 0 0;
  }
  .bank-slider.glide .glide__slides {
    padding-left: 0;
    @media (max-width: $w-sm){
      padding: 0;
    }
  }
  .partners-slider-title {
    font-weight: bold;
    font-size: 35px;
    @media (max-width: $w-sm){
      font-size: 19px;
    }
  }
  .partners-slider-subtitle {
    font-weight: 500;
    font-size: 22px;
    @media (max-width: $w-sm){
      font-size: 15px;
    }
  }
  .partners-slider-title, .partners-slider-subtitle {
    font-family: Montserrat, sans-serif;
    text-align: center;
  }
  .partners-slider-carousel-btn-container {
    margin-top: 10px;
    @media (max-width: $w-sm){
      margin-top: 0;
    }
    .partners-carousel-btn {
      margin: 15px;
      background: #FFFFFF;
      border: 1px solid #F4EBFF;
      box-shadow: 0px 2px 15px rgba(149, 75, 239, 0.257649);
      padding: 16px 23px;
      border-radius: 50%;
      display: flex;
      cursor: pointer;
    }
  }
}
</style>
