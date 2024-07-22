<template>
    <div class="generic-container-1260 my-10">
        <h2
            class="whos-need-title"
            v-html="'Сравнивайте и выбирайте варианты, выгодные вашим клиентам'"
            style="max-width: 844px"
        />

        <div
            class="whos-need-wrapper whos-need-cols-4"
        >
            <div
                class="whos-need-item kasko"
                v-for="(item, i) in cards"
                :key="i"
                ref="whos-need-item"
            >
                <div class="item-front">
                    <div class="kasko-whos-need-item-index" v-text="i + 1" />
                    <div
                        class="kasko-whos-need-item-title"
                        v-text="item.title"
                    />
                    <button
                        style="text-decoration: underline; color: #7245ff"
                        v-text="'Подробнее'"
                        @click="flipCard"
                    />
                </div>
                <div class="item-back" @click="flipCard">
                    <v-icon
                        style="position: absolute; right: 8px; top: 8px"
                        v-text="'mdi-close'"
                    />
                    <div v-for="(text, index) in [item.text]" :key="index">
                        <p
                            v-html="text"
                            style="font-size: 14px; text-align: left"
                            class="back-description compact"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div style="display: flex">
            <zond-btn
                v-text="'Сравнить цены'"
                style="margin: auto; min-width: 200px"
            />
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Watch, Ref, Prop } from "vue-property-decorator";
// refactor this and WhosNeed.vue into one component: SpinCards.vue
@Component
export default class KaskoTypes extends Vue {
    cards = [
        {
            title: "Полное и частичное КАСКО",
            text: "Полное КАСКО включает в себя страхование сразу по нескольким рискам — ущерб, хищение и угон, полная гибель (тоталь). Частичное КАСКО предусматривает страхование от одного или двух рисков.",
        },
        {
            title: "Коробочное КАСКО",
            text: "Это урезанные программы страхования КАСКО, которые предусматривают стандартный набор рисков и дополнительных опций и подходят не всем, а определенной целевой аудитории. Одним из вариантов такого КАСКО является страхование от ДТП по вине третьих лиц, рекомендуемое опытным водителям.",
        },
        {
            title: "Риск «Ущерб»",
            text: "Повреждение автомобиля, связанное с утерей его качеств и товарной стоимости. Под риском «Ущерб», как правило, обобщаются такие страховые события, как повреждения в результате ДТП, пожара, умышленного причинения вреда третьими лицами или вследствие природных явлений, таких как град, сосульки, наводнения, сели и т.д.",
        },
        {
            title: "Риск «Полная гибель авто» («Тоталь»)",
            text: "Полной конструктивной гибелью считается ущерб, при котором транспортное средство не подлежит восстановлению и страховая компания полностью выплачивает его страховую стоимость. Как правило, процент повреждений авто должен превышать 65–75%, чтобы ущерб был признан полной гибелью авто.",
        },
        {
            title: "Риск «Угон»",
            text: "Противоправное завладение автомобилем без цели хищения. То есть, сюда относятся случаи, когда например, автомобиль угоняют, а потом бросают где-нибудь на дороге.",
        },
        {
            title: "Риск «Хищение»",
            text: "Противоправное завладение автомобилем с целью наживы, когда владелец автомобиля теряет возможность распоряжаться своим транспортным средством. Сюда относятся кражи и ограбления.",
        },
        {
            title: "Франшиза условная или франшиза по виновнику",
            text: "Это определенная часть убытков страхователя в результате ДТП, виновник которого установлен и не является страхователем. В таком случае страховая компания возместит страхователю убытки по страховому случаю полностью, а франшизу будет взимать с виновника ДТП.",
        },
        {
            title: "Франшиза безусловная",
            text: "Определенная величина ущерба при наступлении страхового случая, в пределах которой страховщик освобождается от обязанности осуществлять страховую выплату. Если сумма ущерба больше размера франшизы, страховщик обязан возместить ущерб в полном объеме.",
        },
    ];
    @Ref("whos-need-item") whosNeedItem;

    flipCard(e) {
        let card = e.target.closest(".whos-need-item");
        let front = card.querySelector(".item-front");
        let back = card.querySelector(".item-back");
        if (card.classList.contains("flipped")) {
            card.style.height = front.scrollHeight + "px";
        } else {
            front.style.minHeight = card.clientHeight + "px";
            card.style.height = back.scrollHeight + "px";
        }
        card.classList.toggle("flipped");
    }
    get breakpoint() {
        return this.$vuetify.breakpoint.name;
    }
    @Watch("breakpoint")
    collapseCard(breakpoint, oldBreakpoint) {
        if (breakpoint != oldBreakpoint) {
            this.whosNeedItem.map((item) => {
                if (item.classList.contains("flipped")) {
                    item.classList.remove("flipped");
                    item.style.height =
                        item.querySelector(".item-front").clientHeight + "px";
                }
            });
        }
    }
}
</script>
<style lang="scss">
.kasko.whos-need-item {
    .item-front {
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        align-items: center;
    }
}
.kasko-whos-need-item-index {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 800;
    font-size: 23px;
    line-height: 1;
    color: #ab54ff;

    width: 74px;
    height: 74px;
    border-radius: 50%;
    background: #f2f5ff;
    display: flex;
    align-items: center;
    justify-content: center;
}
.kasko-whos-need-item-title {
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #000000;
}
</style>