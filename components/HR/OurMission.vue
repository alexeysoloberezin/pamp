<template>
    <div class="hr-indents" style="position: relative;">
        <div style="margin-bottom: 40px;">
            <div
                class="hr-h1"
                v-text="'Миссия компании'"
                style="margin-bottom: 20px;"
            />
            <div style="font-size: 20px;line-height: 1.4;color: #000000;">
                Повышаем доходы и защищаем капиталы людей, улучшая качество их
                жизни.
            </div>
        </div>
            <DecoSpot
                :diameter="480"
                :bottom="0"
                :left="0"
                style="transform: translate(-60%, -50%)"
            />
        <div class="mission-card">
            <div class="mission-first">
                <div class="mission-statement">
                    <div class="mission-title">
                        Заботимся о клиентах и сотрудниках
                    </div>
                    <div class="mission-text">
                        Уважительно относимся к коллегам и поддерживаем друг
                        друга в решении возникающих трудностей. Признаем свои
                        ошибки и идем на встречу к клиентам.
                    </div>
                </div>
            </div>
            <div class="mission-last">
                <img
                    class="mission-img-1"
                    src="@/assets/images/hr/mission/1.png"
                />
            </div>
        </div>
        <div class="mission-card sm-order-reverse sm-margin">
            <div class="mission-first">
                <img
                    class="w-100 mission-img-2"
                    src="@/assets/images/hr/mission/2.png"
                />
            </div>
            <div class="mission-last">
                <div class="mission-statement">
                    <div
                        class="mission-title"
                        v-html="'Делаем сервисы удобными и&nbsp;простыми'"
                    />
                    <div class="mission-text">
                        Все, что мы делаем, должно быть просто, логично, свежо и
                        легко в использовании для любого возраста и опыта. Под
                        простотой мы понимаем лаконичный, сдержанный и
                        современный стиль — от дизайна интерфейсов до баннеров и
                        текстов.
                    </div>
                </div>
            </div>
        </div>
        <div class="mission-card" style="margin-top: 60px;">
            <div class="mission-first">
                <div class="mission-statement">
                    <div class="mission-title">
                        Несем ответственность, соблюдаем этику
                    </div>
                    <div class="mission-text">
                        Соблюдаем законы РФ, выполняем обязательства перед
                        клиентами и друг другом даже в мелочах. Доводим начатые
                        дела до конца и понимаем, что каждый из нас — причина
                        результата, своего личного и общего. Мы делаем с любовью
                        красивый, ответственный и этичный бизнес.
                    </div>
                </div>
            </div>
            <div class="mission-last">
                <img
                    class="w-100 mission-img-3"
                    src="@/assets/images/hr/mission/3.png"
                />
            </div>
        </div>
        <div class="mission-card sm-order-reverse" style="margin-top: 60px;">
            <div class="mission-first">
                <img
                    class="mission-img-4"
                    src="@/assets/images/hr/mission/4.png"
                />
            </div>
            <div class="mission-last">
                <div class="mission-statement special">
                    <div class="mission-title">
                        Развиваем коллег, улучшаем продукт
                    </div>
                    <div class="mission-text">
                        Развиваем навыки, регламентируем и систематизируем
                        бизнес-процессы, оставляя за собой работающие механизмы.
                    </div>
                </div>
            </div>
        </div>
        <div style="text-align: center">
            <a
                class="mission-btn btn high text-center mx-4 mt-4"
                @click="$emit('sendResume')"
            >
                <span v-text="'Отправить резюме'" />
            </a>
            <a
                class="mission-btn btn high outline text-center mx-4 mt-4"
                @click="scrollToJobs()"
            >
                <span v-text="'Посмотреть вакансии'" />
            </a>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class OurMission extends Vue {
    scrollToJobs() {
        document.querySelector("#jobs")?.scrollIntoView?.({
            block: "start",
            behavior: "smooth"
        });
    }
}
</script>
<style lang="scss">
.mission-btn {
    width: 260px;
}
$mission-card-breakpoint: 800px;
.mission-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: $mission-card-breakpoint) {
        margin: auto;
        max-width: 550px;
        flex-flow: column-reverse;
        &.sm-order-reverse {
            flex-flow: column;
        }
        &.sm-margin {
            margin-top: 60px;
        }
        img {
            margin-bottom: 40px;
            padding: 0 40px;
            @media (max-width: $w-sm) {
                padding: 0 20px;
            }
        }
    }
}
@media (max-width: $mission-card-breakpoint) {
    .mission-first {
        align-items: center;
        display: flex;
    }
}
@media (min-width: $mission-card-breakpoint + 1px) {
    .mission-first {
        max-width: 45%;
        flex: 1;
        margin-right: 40px;
        .mission-statement {
            padding-left: 100px;
            @media (max-width: $w-sm) {
                padding-left: 40px;
            }
        }
    }

    .mission-last {
        margin-left: 40px;
        max-width: 55%;
        flex: 1;
        .mission-statement {
            padding-right: 70px;
            @media (max-width: $w-sm) {
                padding-right: 20px;
            }
        }
    }
}
.mission-img-1 {
    width: 112%;
    // margin-top: -60px;
}
.mission-img-2 {
    padding-left: 38px;
    padding-right: 38px;
    @media (max-width: $w-sm) {
        padding-left: 0;
        margin-left: -4%;
    }
}
.mission-img-3 {
    @media (max-width: $mission-card-breakpoint) {
        width: 108%;
    }
}
.mission-img-4 {
    width: calc(100% + 80px);
    @media (max-width: $mission-card-breakpoint) {
        min-width: 490px;
        margin-right: -40px;
        padding: 0 !important;
    }
}
.mission-statement {
    display: flex;
    flex-flow: column;
    // margin-left: 100px;
    &.special {
        padding-left: 100px;
        @media (max-width: $w-sm) {
            padding-left: 10px;
        }
        @media (max-width: $mission-card-breakpoint) {
            padding-left: 0px;
        }
    }
}
.mission-title {
    font-family: Montserrat;
    font-weight: bold;
    font-size: 25px;
    line-height: 33px;
    color: #8e68ff;
    margin-bottom: 16px;
}
.mission-text {
    font-size: 20px;
    line-height: 1.4;
    color: #000000;
}
</style>
