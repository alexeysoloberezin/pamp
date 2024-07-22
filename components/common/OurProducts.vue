<template>
  <div class="agents-products">
    <ScrollAnchor id="ap"/>
    <div class="agents-container">
      <div class="products-options">
        <h2
          v-text="title"
          class="products-title mr-10"
          :class="{ 'w-100 text-center': forceTab }"
        />
        <div
          v-if="!forceTab"
          style="display: flex"
          :class="{ 'mt-5': br.mdAndDown }"
        >
          <div
            class="products-item"
            :class="{
                            disabled: item.disabled,
                            active: item.type === selectedProduct,
                        }"
            v-for="(item, i) in ourProducts"
            :key="i"
            v-html="item.title"
            @click="selectedProduct = item.type"
          />
        </div>
      </div>
      <div class="products-wrapper" v-if="currentProduct">
        <v-card
          v-for="item in showDisabled || br.mdAndUp
                        ? currentProduct.items
                        : activeProducts.items"
          :key="item.title"
          class="agents-products-item"
        >
          <v-img
            style="position: absolute; top: -7px"
            v-if="item.new"
            :max-width="57"
            :src="badgeNew"
            alt="badge new"
          />
          <v-layout justify-space-between align-center>
            <nuxt-link
              v-if="item.link"
              class="item-title"
              :class="{ disabled: item.disabled, link: item.link }"
              :to="item.link"
              v-html="item.title"
            />
            <div
              v-else
              class="item-title"
              :class="{ disabled: item.disabled }"
              v-html="item.title"
            />
            <v-img
              :max-width="43"
              :src="item.icon"
              alt="insurance-product"
            />
          </v-layout>
          <div
            class="item-description mt-6"
            v-html="item.description"
          />
          <v-layout class="mt-8" align-center justify-space-between>
            <div>
              <v-img
                :src="require('@/assets/images/agents/ourProducts/infinite.svg')"
                contain
                :max-width="25"
                alt="infinite"
                v-if="item.disabled"
              />
              <span
                v-else
                class="item-percent"
                v-html="item.commission"
              />
              <h5
                class="item-reward-description"
                v-text="'Вознаграждение'"
              />
            </div>
            <div
              v-if="item.disabled"
              v-html="'Скоро'"
              class="item-soon"
            />
            <div
              v-else
              class="item-link"
              v-text="'Подробнее'"
              @click="openDialog(item)"
            />
          </v-layout>
        </v-card>
      </div>
      <v-fade-transition leave-absolute>
        <button
          v-if="br.smAndDown && !showDisabled"
          class="show-more"
          @click="showDisabled = true"
        >
          Показать ещё
        </button>
      </v-fade-transition>
      <div v-if="showRegnow" class="products-regnow mt-10">
        <div class="regnow-inner">
          <div
            class="products-pimp"
            :style="`background-image: url(${pimp})`"
          />
          <div
            style="max-width: 600px"
            class="regnow-text mb-2 text-center"
            v-html="
                            'Зарегистрируйтесь и&nbsp;узнайте подробнее как зарабатывать на каждом из них'
                        "
          />
          <zond-btn
            v-text="'Зарегистрироваться'"
            :class="{ 'mt-3': br.smAndDown }"
            :style="{
                            marginLeft: br.mdAndUp
                                ? 'auto'
                                : '',
                            width: br.smAndDown ? '100%' : '',
                        }"
          />
        </div>
      </div>
    </div>
    <v-dialog
      max-width="750"
      v-model="dialog"
      content-class="agents-products-dialog"
    >
      <v-card v-if="dialog">
        <v-icon
          @click="dialog = false"
          class="c-pointer"
          style="position: absolute; right: 20px; top: 20px"
          v-text="'mdi-close'"
        />
        <div class="dialog-content">
          <div
            style="flex: 0 0 70px"
            class="mr-3"
            v-if="br.lgAndUp"
          >
            <img
              style="width: 100%; max-width: 100%"
              :src="selected.icon"
              alt="icon"
            />
          </div>
          <div style="flex: 1 1 auto">
            <v-layout
              :justify-space-between="br.lgAndUp"
              :class="{ 'mt-3': br.smAndDown }"
            >
              <div
                class="mr-2"
                style="flex: none"
                v-if="br.mdAndDown"
              >
                <img
                  style="width: 100%; max-width: 100%"
                  height="30"
                  :src="selected.icon"
                  alt="icon"
                />
              </div>
              <div
                class="dialog-title"
                v-html="selected.dialog.title"
              />
              <div class="dialog-reward">
                                <span
                                  class="reward-percent"
                                  v-html="selected.commission"
                                />
                <h5
                  class="reward-description"
                  v-text="'Вознаграждение'"
                />
              </div>
            </v-layout>
            <div
              class="mt-5 dialog-description"
              v-html="selected.dialog.description"
            />
            <div
              style="display: flex; flex-wrap: wrap"
              class="mt-5"
            >
              <div
                v-for="(item, i) in selected.dialog.list"
                v-html="item"
                :key="i"
                class="dialog-benefit"
              />
            </div>

            <v-layout justify-space-between class="mt-5" :column="br.xs">
              <div
                class="issue-btn"
                v-text="'Оформить'"
                @click="register"
              />
              <nuxt-link v-if="selected.productPage" :to="{name: selected.productPage}">
                <div class="issue-btn">Страница продукта</div>
              </nuxt-link>
            </v-layout>

          </div>
        </div>
      </v-card>
    </v-dialog>

    <zond-btn v-text="'Зарегистрироваться'" ref="zond" v-show="false"/>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Ref, Prop} from "vue-property-decorator";
import ScrollAnchor from "~/components/common/ScrollAnchor.vue";
import {Item, Products, ourProducts} from "~/model/entities/finance";

@Component({
  components: {ScrollAnchor},
})
export default class OurProducts extends Vue {
  @Prop({default: () => null}) forceTab: number;
  @Prop({default: () => 'Наши продукты'}) title: string;
  @Prop(Boolean) showRegnow: boolean;
  @Ref("zond") zondBtn;

  badgeNew = require("@/assets/images/badge-new.svg");
  showDisabled: boolean = false;
  selectedProduct: Products = null;

  ourProducts = ourProducts;
  pimp = require("@/assets/images/agents/ourProducts/pimp.png");
  dialog: boolean = false;
  selected: Item = null;

  register() {
    this.zondBtn.$el.click();
  }

  openDialog(item) {
    this.selected = {...item};
    this.dialog = true;
  }

  get br(){
    return this.$vuetify.breakpoint;
  }

  get activeProducts() {
    return {
      ...this.currentProduct,
      items: this.currentProduct.items.filter((item) => !item.disabled),
    };
  }

  get currentProduct() {
    return this.ourProducts.find(
      (item) => item.type === this.selectedProduct
    );
  }

  mounted() {
    if (this.forceTab) this.selectedProduct = this.forceTab;
    else this.selectedProduct = Products.Insurance;
  }
}


</script>

<style lang="scss">
.agents-products {
  background: #f9f9fc;
  padding: 50px 0;
  position: relative;
  @media (max-width: $w-md) {
    padding: 25px;
  }

  .products-title {
    font-family: Montserrat, sans-serif;
    font-weight: bold;
    font-size: 35px;
    line-height: 40px;
    @media (max-width: $w-md) {
      font-size: 19px;
      line-height: 23px;
    }
  }

  .products-options {
    display: flex;
    align-items: center;
    @media (max-width: $w-md) {
      align-items: flex-start;
      flex-direction: column;
    }
  }

  .products-wrapper {
    display: grid;
    margin-top: 32px;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 32px;
    grid-row-gap: 25px;
    @media (max-width: $w-md) {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10px;
    }
    @media (max-width: $w-xs) {
      grid-template-columns: 1fr;
    }
  }

  .products-item {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #cfd7e0;
    color: #6138da;
    font-weight: bold;
    font-size: 18px;
    border-radius: 5px;
    transition: 0.3s;
    padding: 10px 34px;
    cursor: pointer;
    background: #f9f9fc;
    @media (max-width: $w-md) {
      font-size: 15px;
      line-height: 15px;
    }

    &:not(:last-child) {
      margin-right: 22px;
    }

    @media (max-width: $w-sm) {
      padding: 14px 16px;
    }

    &:hover {
      border: 1px solid #6c4ad0;
    }

    &.active {
      border: 1px solid #6138da;
      font-weight: bold;
    }

    &.disabled {
      opacity: 0.5;
      border: 1px solid #cfd7e0;
      pointer-events: none;
    }
  }

  .agents-products-item.v-card {
    padding: 19px 22px 29px 25px;
    background: #ffffff;
    box-shadow: 0px 2px 14px rgba(114, 69, 255, 0.12) !important;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: 0.3s;

    &:hover {
      box-shadow: 0px 2px 14px rgba(114, 69, 255, 0.25) !important;
    }

    &.disabled {
      pointer-events: none;
    }
  }

  .item-title {
    font-family: Montserrat, sans-serif;
    line-height: 17px;
    @media (max-width: $w-md) {
      max-width: 140px;
    }

    &.link {
      text-decoration: underline;
    }

    &.disabled {
      color: #7d8d93;
    }
  }

  .item-title,
  .item-percent {
    color: #7245ff !important;
  }


  .item-description {
    font-size: 12px;
    line-height: 15px;
    font-weight: 500;
    max-width: 190px;
  }

  .item-percent {
    display: block;
    font-weight: 500;
    font-size: 18px;
    line-height: 15px;
    color: #7245ff;
  }

  .item-soon {
    border-radius: 4px;
    background: rgba(114, 69, 255, 0.25);
    padding: 11px 25px;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 10px;
    color: #1a035a;
    opacity: 0.3;
  }

  .item-link {
    cursor: pointer;
    font-weight: bold;
    font-size: 12px;
    line-height: 10px;
    text-decoration-line: underline;
    color: #7d8d93 !important;
    transition: 0.3s;

    &:hover {
      color: #7245ff !important;
    }
  }

  .item-reward-description {
    font-weight: 300;
    font-size: 12px;
    color: #100e0f;
  }

  .show-more {
    margin-top: 15px;
    border: 2px solid #7245ff;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    padding: 13px 0;
    width: 100%;
    text-align: center;
  }

  .products-regnow {
    border-radius: 5px;
    background: #ffffff;
    box-shadow: 0px 5px 25px rgba(203, 207, 216, 0.28);

    .regnow-inner {
      margin: auto;
      padding: 18px 0;
      max-width: 1000px;
      display: flex;
      align-items: center;
      @media (max-width: $w-md) {
        flex-wrap: wrap;
        padding: 18px 22px;
      }
    }

    .products-pimp {
      flex: none;
      width: 88px;
      height: 88px;
      background-size: contain;
      @media (max-width: $w-md) {
        width: 56px;
        height: 56px;
      }
    }

    .regnow-text {
      flex: 1;
      padding: 0 30px;
      font-family: Montserrat, sans-serif;
      font-weight: 600;
      font-size: 21px;
      line-height: 30px;
      color: #000000;
      @media (max-width: $w-md) {
        font-size: 14px;
        line-height: 18px;
        padding: 0;
        min-width: 136px;
      }
    }

    .regnow-btn {
      @media (max-width: $w-md) {
        margin-left: 68px;
        margin-top: 12px;
      }

      &.v-btn:not(.gen2).v-btn--outline:not(.white--text):not(.v-btn--disabled) {
        &:hover .v-btn__content {
          color: #fff;
        }
      }
    }
  }
}

.agents-products-dialog {
  scrollbar-color: #7245ff transparent;
  scrollbar-width: thin;

  .v-card {
    padding: 52px 64px 52px 30px !important;
    box-shadow: 0px 5px 31px rgba(114, 78, 251, 0.18);
    border-radius: 8px;
    @media (max-width: $w-md) {
      padding: 40px 22px 30px !important;
    }
  }

  .dialog-content {
    display: flex;
    align-items: flex-start;
    @media (max-width: $w-md) {
      flex-direction: column;
    }
  }

  .dialog-title {
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    @media (max-width: $w-md) {
      align-self: center;
      font-size: 15px;
      line-height: 19px;
    }
    @media (max-width: $w-sm) {
      align-self: flex-start;
    }
  }

  .dialog-reward {
    padding: 6px 18px;
    background: #f4f1ff;
    border-radius: 5px;
    @media (max-width: $w-md) {
      display: none;
    }
  }

  .reward-percent {
    font-weight: 600;
    font-size: 25px;
    line-height: 29px;
    color: #7245ff;
  }

  .reward-description {
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
  }

  .dialog-benefit {
    position: relative;
    flex: 0 1 50%;
    font-weight: normal;
    font-size: 14px;
    opacity: 0.5;
    display: flex;
    padding-right: 20px;
    @media (max-width: $w-md) {
      flex-basis: calc(50% - 5px);
    }
    @media (max-width: $w-xs) {
      flex-basis: 100%;
    }

    &:not(:last-child) {
      margin-bottom: 15px;
    }

    &:before {
      height: 100%;
      display: inline-block;
      content: "";
      border-top: 3px solid #7130e5;
      margin: 10px 15px 0 0;
      flex: 0 0 14px;
    }
  }

  .dialog-description {
    font-weight: normal;
    font-size: 17px;
    line-height: 23px;
    @media (max-width: $w-md) {
      font-size: 14px;
      line-height: 19px;
    }
  }

  .issue-btn {
    background: #7245ff;
    box-shadow: 0px 4px 20px #cabdff;
    border-radius: 4px;
    padding: 11px 42px;
    width: max-content;
    font-weight: bold;
    font-size: 12px;
    line-height: 10px;
    color: #ffffff;
    cursor: pointer;
    @media (max-width: $w-xs){
      width: 100%;
      text-align: center;
      margin-top: 5px;
      line-height: 1;
    }
  }
}
</style>
