<template>
  <div class="credit-cards-products">
    <div class="generic-container-1260">
      <div class="credit-cards-container">
        <h2
          v-text="title || 'Прочие финансовые продукты'"
          class="credit-cards-h2 h2 mr-10"
        />
        <div class="products-wrapper">
          <v-card
            v-for="item in items"
            :key="item.title"
            class="agents-products-item"
          >
            <v-layout justify-space-between align-center>
              <div
                class="item-title"
                v-html="item.title"
              />
              <img
                width="43"
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
                <span class="item-percent" v-html="item.commission"/>
                <h5 class="item-reward-description" v-text="'Вознаграждение'"/>
              </div>
              <div
                class="item-link"
                v-text="'Подробнее'"
                @click="openDialog(item)"
              />
            </v-layout>
          </v-card>
        </div>
      </div>
      <v-dialog
        max-width="750"
        v-model="dialog"
        content-class="credit-cards-products-dialog"
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
              v-if="$vuetify.breakpoint.lgAndUp"
            >
              <img
                style="width: 100%; max-width: 100%"
                :src="selected.icon"
                alt="icon"
              />
            </div>
            <div style="flex: 1 1 auto">
              <v-layout
                :justify-space-between="$vuetify.breakpoint.lgAndUp"
                :class="{ 'mt-3': $vuetify.breakpoint.smAndDown }"
              >
                <div
                  class="mr-2"
                  style="flex: none"
                  v-if="$vuetify.breakpoint.mdAndDown"
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
              <div
                class="issue-btn mt-5"
                v-text="'Оформить'"
                @click="register"
              />
            </div>
          </div>
        </v-card>
      </v-dialog>

      <zond-btn v-text="'Зарегистрироваться'" ref="zond" v-show="false"/>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Ref, Prop} from "vue-property-decorator";
import ScrollAnchor from "~/components/common/ScrollAnchor.vue";

const icon = (name) => require(`@/assets/images/agents/ourProducts/${name}.svg`);
@Component({
  components: {ScrollAnchor},
})
export default class Products extends Vue {
  @Prop() title: string;

  items: Item[] = [
    {
      icon: icon("debitcards"),
      title: "Дебетовые карты",
      description: "Зарабатывайте на оформлении дебетовых карт",
      commission: "650 ₽ — 1 600 ₽",
      link: "/affiliate-program/debit-cards/",
      productPage: "debit-cards",
      disabled: false,
      new: false,
      dialog: {
        title: "Дебетовые карты",
        description:
          "Дебетовая карта — обычная пластиковая карта для оплаты услуг и товаров, получения наличных денег и снятия их в банкомате. Для получения вознаграждения, карта должна быть активирована покупкой от 500 рублей.",
        list: [
          "Время оформления – 7&nbsp;минут",
          "Обслуживание и выпуск от 0&nbsp;рублей",
          "Оформление на сайте банка",
          "Кешбэк за топливо до&nbsp;10%",
          "Высокий %&nbsp;выдач",
          "До 7% на остаток по&nbsp;счету",
        ],
      },
    },
    {
      icon: icon("debitcards"),
      title: "Кредитные карты",
      description:
        "Кредитные карты с льготным периодом до 1 года",
      commission: "2 000 ₽ — 4 600 ₽",
      link: "/creditcards/",
      disabled: false,
      new: false,
      dialog: {
        title: "Кредитные карты",
        description:
          "Кредитная карта – карта с деньгами на счету, которыми можно оплачивать товары и услуги. Как правило банки позволяют использовать доступные на карте средства без комиссии в пределах льготного периода. Для получения вознаграждения, карта должна быть активирована покупкой от 500 рублей или оплатой годового обслуживания. ",
        list: [
          "Кредитный лимит до  70&nbsp;000&nbsp;руб.",
          "Время оформления – 7&nbsp;минут",
          "Кешбэк за топливо до&nbsp;10%",
          "Оформление на сайте банка",
          "Льготный период от&nbsp;50 до&nbsp;365&nbsp;дней",
          "Платное ежегодное обслуживание",
          "Ставка по кредитам от&nbsp;24,9%",
        ],
      },
    },
    {
      icon: icon("bank"),
      title: "Кредит наличными",
      description: "Кредит на любые цели клиента",
      commission: "3 000 ₽ — 15 000 ₽",
      link: "",
      disabled: false,
      new: true,
      dialog: {
        title: "Кредит наличными",
        description:
          "Кредит наличными - лучший способ получить крупную сумму заемных средств от банка по низкой ставке на длительный срок.",
        list: [
          "Возможность рефинансирования",
          "Относительно не высокий %",
          "Заранее согласованный график платежей",
          "Большая сумма на расходы по собственному усмотрению",
          "Высокое вознаграждение для агентов",
        ],
      },
    },
    {
      icon: icon("cashregister"),
      title: "РКО",
      description: "Зарабатывай на открытых счетах для бизнеса",
      commission: "1 200 ₽ — 12 000 ₽",
      link: "/rko/",
      new: true,
      disabled: false,

      dialog: {
        title: "РКО",
        description:
          "Расчетно-кассовое обслуживание — пакет услуг, который банки предлагают для физических лиц, ведущих деятельность в качестве ИП, и организаций. Не все понимают, как выбрать обслуживающий банк, чтобы не переплачивать за РКО и получить необходимый пакет услуг.",
        list: [
          "Возможность открыть счет дистанционно",
          "Офферы с бесплатной бухгалтерией",
          "Офферы с бесплатным обслуживанием расчетного счета",
        ],
      },
    },
  ]

  pimp = require("@/assets/images/agents/ourProducts/pimp.png");
  dialog: boolean = false;
  selected: Item = null;
  @Ref("zond") zondBtn;

  register() {
    this.zondBtn.$el.click();
  }

  openDialog(item) {
    this.selected = {...item};
    this.dialog = true;
  }
}

type Item = {
  icon: string;
  title: string;
  description: string;
  commission: string;
  link: string;
  disabled: boolean;
  productPage?: string,
  new?: boolean;
  dialog: {
    title: string;
    description: string;
    list: string[];
  };
};
</script>

<style lang="scss">
.credit-cards-products {
  background: #f9f9fc;
  padding: 50px 0;
  position: relative;
  @media (max-width: $w-md) {
    padding: 25px 0 30px;
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

    &.disabled {
      color: #7d8d93;
    }
  }

  .item-title,
  .item-percent {
    color: #7245ff;
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

.credit-cards-products-dialog {
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
  }
}
</style>
