<template>
  <div class="ipoteka-slider">
    <div style="position: absolute;top: -100px" id="mos"/>
    <h2 class="slider-title" v-text="'Наши партнеры'"/>
    <h3 class="slider-subtitle" v-text="'34 аккредитованных страховых компании и банка'"/>
    <BankSlider v-if="showBanks" ref="bank-slider" disable-links no-controls class="mt-10"/>
    <ICSlider ref="ic-slider" :page="page" disable-links no-controls/>
    <div class="slider-carousel-btn-container" style="display: flex; justify-content: center">
      <div class="carousel-btn" @click="prev">
        <img src="@/assets/images/bl2/arrow-dir.svg" alt="arrow" />
      </div>
      <div class="carousel-btn" @click="next">
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
export default class MortSlider extends Vue {
  @Ref('ic-slider') readonly icSlider: ICSlider;
  @Ref('bank-slider') readonly bankSlider: BankSlider;
  page = Pages.Mortgage;
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
.ipoteka-slider {
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
  .slider-title {
    font-weight: bold;
    font-size: 35px;
    @media (max-width: $w-sm){
      font-size: 19px;
    }
  }
  .slider-subtitle {
    font-size: 20px;
    opacity: .5;
    @media (max-width: $w-sm){
      font-size: 15px;
    }
  }
  .slider-title, .slider-subtitle {
    font-family: Montserrat, sans-serif;
    text-align: center;
  }
  .slider-carousel-btn-container {
    margin-top: 10px;
    @media (max-width: $w-sm){
      margin-top: 0;
    }
    .carousel-btn {
      margin: 15px;
    }
  }
}
</style>
