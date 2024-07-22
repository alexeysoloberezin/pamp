<template>
    <div class="au">
        <div id="au" style="position: absolute;left:0;top:-90px;" />
        <h2 class="h2">
            Кто мы такие?
            <br v-if="$vuetify.breakpoint.smAndDown" />
            Давайте&nbsp;познакомимся!
        </h2>
        <div
            v-if="!$vuetify.breakpoint.mdAndUp"
            class="au-subh"
            style="width: 100%; text-align: center;"
            v-html="'&#x22;Мы не прячемся за красивым сайтом&#x22;'"
        />

        <div class="au-inner">
            <div class="au-desc-container">
                <div class="au-desc">
                    <span
                        v-if="$vuetify.breakpoint.mdAndUp"
                        class="au-subh"
                        v-html="'&#x22;Мы не прячемся за красивым сайтом&#x22;'"
                    />
                    <div class="au-text">
                        С 2009 года наша команда занимается страхованием. Мы
                        сами были страховыми агентами, ездили к клиенту, учили
                        сегментации, ругались на личные кабинеты страховых
                        компаний, сдавали бланки, искали, как застраховать
                        клиента, поэтому прекрасно понимаем всю специфику нашей
                        с вами работы.
                        <br /><br />
                        Накопив опыт в офлайн-страховании, мы создали Pampadu.ru
                        — современный, функциональный и, главное, понятный
                        личный кабинет страхового агента. С любовью продумываем
                        все детали, чтобы вам было удобно. Рассчитывайте,
                        оформляйте онлайн и получайте вознаграждение.
                    </div>
                </div>
                <div
                    v-ppd-touch:swipe.left="goForward"
                    v-ppd-touch:swipe.right="goBack"
                    style="display: flex; flex-flow: column; height:100%;"
                    :style="{ order: $vuetify.breakpoint.mdAndUp ? 1 : -1 }"
                >
                    <v-slide-x-reverse-transition group leave-absolute>
                        <div :key="page + 'staff'" class="au-staff">
                            <StaffCard
                                v-for="(item, i) in staffPage"
                                :key="i"
                                :item="item"
                            />
                        </div>
                    </v-slide-x-reverse-transition>
                    <div
                        style="width: 100%; margin-top: auto;"
                        key="carousbtns"
                    >
                        <div class="au-carousel-btn-container">
                            <div
                                @click="goBack()"
                                class="au-carousel-btn"
                                :class="{ disabled: page == 0 }"
                            >
                                <img
                                    src="~/assets/images/bl2/arrow-dir.svg"
                                    alt="arrow-left"
                                />
                            </div>
                            <div
                                @click="goForward()"
                                class="au-carousel-btn"
                                :class="{ disabled: isForwardDisabled }"
                            >
                                <img
                                    style="transform:rotate(180deg)"
                                    src="~/assets/images/bl2/arrow-dir.svg"
                                    alt="arrow-right"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import StaffCard from "./StaffCard.vue";
@Component({ components: { StaffCard }})
export default class AboutUs extends Vue {
    page = 0;
    goBack() {
        if (this.page > 0) this.page--;
    }
    get isForwardDisabled() {
        return this.page + 1 > this.staff.length / this.mult;
    }
    goForward() {
        if (!this.isForwardDisabled) this.page++;
    }
    get mult() {
        let mult = 8;
        if (this.$vuetify.breakpoint.smOnly) mult = 6;
        if (this.$vuetify.breakpoint.xsOnly) mult = 4;
        return mult;
    }
    get staffPage() {
        return this.staff.slice(
            this.page * this.mult,
            (this.page + 1) * this.mult
        );
    }
    get staff() {
        let staff = [
            {
                img: require("~/assets/images/bl8/us/13.png"),
                name: "Сергей",
                position: "Генеральный директор"
            },
            {
                img: require("~/assets/images/bl8/us/4.png"),
                name: "Антон",
                position: "Технический директор"
            },
            {
                img: require("~/assets/images/bl8/us/8.png"),
                name: "Илья",
                position: "Проектный менеджер"
            },
            {
                img: require("~/assets/images/bl8/us/12.png"),
                name: "Роман",
                position: "Backend разработчик"
            },
            {
                img: require("~/assets/images/bl8/us/1.png"),
                name: "Алексей",
                position: "Директор по маркетингу"
            },
            {
                img: require("~/assets/images/bl8/us/9.png"),
                name: "Ильяс",
                position: "Финансовый директор"
            },
            {
                img: require("~/assets/images/bl8/us/5.png"),
                name: "Влад",
                position: "Отдел продаж"
            },
            {
                img: require("~/assets/images/bl8/us/2.png"),
                name: "Алексей",
                position: "Руководитель поддержки"
            },
            {
                img: require("~/assets/images/bl8/us/6.png"),
                name: "Денис",
                position: "Тестировщик"
            },
            {
                img: require("~/assets/images/bl8/us/7.png"),
                name: "Игорь",
                position: "Backend разработчик"
            },
            {
                img: require("~/assets/images/bl8/us/3.png"),
                name: "Анна",
                position: "Отдел продаж"
            },

            {
                img: require("~/assets/images/bl8/us/10.png"),
                name: "Михаил",
                position: "Frontend разработчик"
            },
            {
                img: require("~/assets/images/bl8/us/11.png"),
                name: "Ренат",
                position: "Backend разработчик",
                subposition: "Отдел аналитики"
            }
        ];
        if (this.$vuetify.breakpoint.lgAndUp)
            staff.splice(11, 0, {
                img: null,
                name: "",
                position: ""
            }); // нужно для пустого места
        return staff;
    }
}
</script>
<style lang="scss">
.au {
    padding: 80px 0 60px;
    max-width: 1168px;
    margin: auto;
    position: relative;
    .h2 {
        margin: 25px auto 65px;
        text-align: center;
        max-width: 500px;
        @media (max-width: $w-sm) {
            margin-bottom: 0px;
        }
    }
}
.au-desc-container {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    justify-content: space-evenly;
    @supports (-ms-ime-align: auto) {
        justify-content: center;
    }
    @media (max-width: $w-sm) {
        align-items: center;
        flex-flow: column;
    }
}
.au-staff {
    display: flex;
    justify-content: flex-start;
    text-align: center;
    flex-wrap: wrap;
    font-family: Montserrat;
    margin: 0 -26px;
    max-width: 660px;
    @media (max-width: $w-sm) {
        max-width: 550px;
        justify-content: center;
    }
    @media (max-width: $w-xs) {
        max-width: 360px;
        justify-content: center;
    }
}
.au-staff-card {
    display: flex;
    flex-flow: column;
    flex-basis: 110px;
    margin: 0 25px 40px;
    @media (max-width: $w-xs) {
        margin: 0 20px 40px;
    }
}
.au-staff-title {
    margin-top: 20px;
    font-weight: bold;
    font-size: 14px;
}
.au-staff-subtitle {
    margin-top: 10px;
    font-size: 12px;
    line-height: 15px;
}

.au-carousel-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0px 2px 14px rgba(214, 214, 214, 0.33);
    transition: box-shadow 150ms;
    img {
        width: 7px;
    }
    &:not(.disabled) {
        cursor: pointer;
        box-shadow: 0px 2px 14px rgba(149, 75, 239, 0.26);
        &:hover {
            box-shadow: 0px 2px 10px rgba(214, 214, 214, 0.53);
        }
        img {
            filter: grayscale(100%) brightness(100%) sepia(100%)
                hue-rotate(-150deg) saturate(500%) contrast(0.8);
        }
    }
}
.au-carousel-btn-container {
    display: flex;
    justify-content: space-between;
    margin: auto;
    width: 90px;
    margin: 0px auto;
    max-width: 90px;
    @media (max-width: $w-sm) {
        width: 90px;
    }
}
.au-img {
    display: flex;
    flex-flow: column;
    justify-content: center;
    text-align: center;
    @media (max-width: $w-md) {
        flex: 0 0 420px;
        img {
            width: 420px;
        }
    }
    @media (max-width: $w-sm) {
        flex: 0 0 auto;
        img {
            width: 100%;
        }
    }
}
.au-inner {
    padding: 0 40px;
    @media (max-width: $w-sm) {
        padding: 0 20px;
    }
}
.au-desc {
    // margin: auto;
    flex: 0 0 495px;
    @media (max-width: $w-sm) {
        flex: 0 0 auto;
    }
}
.au-subh {
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    font-style: italic;
    font-size: 20px;
    color: #6238da;
    @media (max-width: $w-sm) {
        font-size: 16px;
        line-height: 24px;
        margin: 6px auto 40px;
        max-width: 260px;
    }
}
.au-text {
    max-width: 438px;
    margin-top: 28px;
    font-size: 16px;
    line-height: 28px;
    color: #000000;
    @media (max-width: $w-sm) {
        font-size: 14px;
        line-height: 22px;
    }
}
</style>
