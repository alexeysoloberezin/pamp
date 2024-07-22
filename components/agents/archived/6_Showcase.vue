<template>
    <div class="showcase">
        <div id=freeb style="position: absolute;left:0;top:-120px;"></div>
        <span v-if="$vuetify.breakpoint.mdAndUp" class="bg-l"/>
        <span v-if="$vuetify.breakpoint.mdAndUp" class="bg-r"/>
        <h2 class="h2">
            Что вы получаете?
        </h2>
        <div class="showcase__inner">
            <div class="sc-switcher-container">
                <div @click="selected=1" class="sc-switch" :class="selected==1?'active':''">
                    <img class="check" alt="checkmark" v-if="selected==1" src="~/assets/images/bl6/circle_checkmark.svg"/>
                    <img class="check" alt="checkmark" v-else src="~/assets/images/bl6/circle.svg"/>
                    <div class="sc-switch__inner">
                        <h4 class="sc-head" v-text="'Доступ к разным видам страхования'"/>
                        <span class="sc-text" v-text="'Оформляйте: ОСАГО, каско, Страхование от несчастного случая, страхование туристов, дома и квартиры.'"/>
                    </div>
                </div>
                <div @click="selected=3" class="sc-switch" :class="selected==3?'active':''">
                    <img class="check" alt="checkmark" v-if="selected==3" src="~/assets/images/bl6/circle_checkmark.svg"/>
                    <img class="check" alt="checkmark" v-else src="~/assets/images/bl6/circle.svg"/>
                    <div class="sc-switch__inner">
                        <h4 class="sc-head" v-text="'Возможность развивать агентскую сеть'"/>
                        <span class="sc-text" v-text="'Добавляйте агентов, развивайте свою сеть и зарабатывайте дополнительное вознаграждение со всех продаж.'"/>
                    </div>
                </div>
                <div @click="selected=2" class="sc-switch" :class="selected==2?'active':''">
                    <img class="check" alt="checkmark" v-if="selected==2" src="~/assets/images/bl6/circle_checkmark.svg"/>
                    <img class="check" alt="checkmark" v-else src="~/assets/images/bl6/circle.svg"/>
                    <div class="sc-switch__inner">
                        <h4 class="sc-head" v-text="'Доступ к полезным сервисами'"/>
                        <span class="sc-text" v-text="'Проверка и восстановление КБМ, проверка прохождения техосмотра, поиск данных по госномеру.'"/>
                    </div>
                </div>
                <div @click="selected=4" class="sc-switch" :class="selected==4?'active':''">
                    <img class="check" alt="checkmark" v-if="selected==4" src="~/assets/images/bl6/circle_checkmark.svg"/>
                    <img class="check" alt="checkmark" v-else src="~/assets/images/bl6/circle.svg"/>
                    <div class="sc-switch__inner">
                        <h4 class="sc-head" v-text="'Контроль продаж и выплат'"/>
                        <span class="sc-text" v-text="'Подробная статистика о всех продажах, выплатах вознаграждения,  договорах, пролонгациях. Все максимально просто и прозрачно.'"/>
                    </div>
                </div>
                <div @click="selected=5" class="sc-switch" :class="selected==5?'active':''">
                    <img class="check" alt="checkmark" v-if="selected==5" src="~/assets/images/bl6/circle_checkmark.svg"/>
                    <img class="check" alt="checkmark" v-else src="~/assets/images/bl6/circle.svg"/>
                    <div class="sc-switch__inner">
                        <h4 class="sc-head" v-text="'Чат поддержки и раздел помощи'"/>
                        <span class="sc-text" v-html="'В разделе «Помощь» мы собрали ответы на все вопросы, а в&nbsp;чате поддержки вам сразу ответят и помогут с любой проблемой.'"/>
                    </div>
                </div>
            </div>
            <div class="sc-desc">
                <span class="sc-fade" :class="selected==1?'active':''">
                    <div class="img-container">
                        <img class="root" alt="root" src="~/assets/images/bl6/1.webp" />
                    </div>
                </span>
                <span class="sc-fade" :class="selected==3?'active':''">
                    <div class="img-container move-1">
                        <img class="root" alt="root" src="~/assets/images/bl6/2.webp" />
                    </div>
                </span>
                <span class="sc-fade" :class="selected==2?'active':''">
                    <div class="img-container move-2">
                        <img class="root" alt="root" src="~/assets/images/bl6/3.webp" />
                    </div>
                </span>
                <span class="sc-fade" :class="selected==4?'active':''">
                    <div class="img-container move-3">
                        <img class="root" alt="root" src="~/assets/images/bl6/4.webp" />
                    </div>
                </span>
                <span class="sc-fade" :class="selected==5?'active':''">
                    <div class="img-container move-4">
                        <img class="root" alt="root" src="~/assets/images/bl6/5.webp" />
                    </div>
                </span>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
@Component({ components: {} })
export default class Showcase extends Vue {
    selected = 1;
}
</script>
<style lang="scss">
.showcase {
    padding: 60px 0;
    position: relative;
    @media (max-width: $w-sm) {
        padding: 30px 0 15px;
    }

    .bg-l,
    .bg-r{
        @media (max-width: $w-sm) { display: none };
        &::after, &::before {
            position: absolute;
        }
    }
    .bg-l {
        &::before {
            content: url('~@/assets/images/bl6/bg-lt.svg');
            left: 416px;
            top: 62px;
        }
        &::after {
            content: url('~@/assets/images/bl6/bg-cb.svg');
            left: 50%;
            bottom: 0;
        }
    }
    .bg-r {
        &::before {
            content: url('~@/assets/images/bl6/bg-rt.svg');
            right: 170px;
            top: 84px;
        }
        &::after {
            content: url('~@/assets/images/bl6/bg-rb.svg');
            right: 120px;
            bottom: 10px;
        }
    }
}
</style>
