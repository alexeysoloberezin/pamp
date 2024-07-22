<template>
    <div class="p-w">
        <h2 class="h2 text-center px-6" style="max-width: 666px; margin: auto">
            Виджет ОСАГО ждет вас в личном кабинете в разделе «Вебмастерам»
        </h2>
        <div class="p-w-content">
            <div class="p-w-card">
                <div class="p-w-subcard left">
                    Зарегистрируйтесь и уже сейчас запустите онлайн-продажи
                    ОСАГО на своем сайте или в приложении
                </div>
                <zond-btn
                    style="margin:0 auto 40px; display: block; width: 260px;"
                    v-text="'Зарегистрироваться'"
                />
            </div>
            <div class="p-w-card">
                <div class="p-w-subcard right">
                    Нужен индивидуальный подход и проектная команда?
                    <div class="p-w-subcard-accent">
                        Оставьте заявку на звонок
                        <img
                            class="ml-2"
                            src="@/assets/images/partners/phone.svg"
                        />
                    </div>
                </div>
                <div
                    class="btn text-center"
                    style="margin:0 auto 40px; display: block; width: 260px; cursor: pointer;"
                    @click="scrollTo()"
                    v-text="'Оставить заявку'"
                />
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class PartnersWidget extends Vue {
    scrollTo() {
        document.querySelector("#cu").scrollIntoView({
            block: "start",
            inline: "start",
            behavior: "smooth"
        });
    }
}
</script>
<style lang="scss">
.p-w {
    padding: 35px 0 85px;
    background-color: #f9f9fc;
}
.p-w-content {
    margin-top: 30px;
    display: flex;
    max-width: 1120px;
    margin: auto;
    @media (max-width: $w-xs) {
        flex-flow: column;
    }
}
.p-w-card,
.p-w-subcard {
    background: #ffffff;
    box-shadow: 0px 5px 25px rgba(203, 207, 216, 0.5);
    border-radius: 5px;
}
.p-w-card {
    margin: 20px;
    padding: 10px;
    flex: 1;
    min-height: 328px;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    @media (min-width: $w-md) {
        &:hover {
            .p-w-subcard {
                margin-top: 30px;
                margin-bottom: 60px;
                &:before {
                    width: 100px;
                    height: 100px;
                }
                &.left {
                    margin-left: -80px;
                    &:before {
                        right: -50px;
                    }
                }
                &.right {
                    margin-right: -80px;
                    &:before {
                        left: -50px;
                    }
                }
            }
        }
    }

    @media (max-width: $w-md) {
        padding: 0;
    }
    @media (max-width: $w-sm) {
        padding: 0;
        margin: 10px;
        min-height: 0;
    }
    @media (max-width: $w-sm) {
        margin: 10px 25px;
        .btn {
            width: 216px !important;
        }
    }
    @media (max-width: $w-xs) {
        .btn {
            font-size: 14px;
            height: 45px;
            margin-left: 28px !important;
            margin-right: 28px !important;
            width: calc(100% - 56px) !important;
            padding: 12px;
        }
    }
}
.p-w-subcard-accent {
    color: #0020a9;
    display: flex;
    align-items: center;
    @media (max-width: $w-xs) {
        display: block;
        padding-right: 12px;
        img {
            margin-bottom: -4px;
            display: inline-block;
        }
    }
}
.p-w-subcard {
    padding: 20px 30px;
    width: 80%;
    margin-top: 50px;
    margin-bottom: 50px;
    font-family: Montserrat;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    position: relative;
    display: flex;
    flex-flow: column;
    &:before {
        content: "";
        width: 90px;
        height: 90px;
        background-size: contain;
        position: absolute;
        top: 50%;
        transition: 0.3s left, 0.3s right, 0.3s width, 0.3s height;
        @media (max-width: $w-md) {
            position: relative;
        }
    }
    transition: 0.3s margin;

    &.left {
        margin-left: -60px;
        &:before {
            background-image: url("~@/assets/images/partners/icons/digital-big.svg");
            transform: translate(100%, -50%);
            right: -40px;
        }
    }
    &.right {
        margin-left: auto;
        margin-right: -60px;
        &:before {
            background-image: url("~@/assets/images/partners/icons/diamond.svg");
            transform: translate(-100%, -50%);
            left: -40px;
        }
    }
    @media (max-width: $w-md) {
        box-shadow: none;
        width: 100%;
        margin-top: 10px;
        margin-bottom: 20px;
        font-size: 16px;
        line-height: 20px;
        &.left,
        &.right {
            margin-left: auto;
            margin-right: auto;
            &:before {
                top: 0;
                transform: none;
                right: unset;
                left: unset;
                margin: 0 auto 20px;
            }
        }
    }

    @media (max-width: $w-sm) {
        padding: 20px 16px;
    }
    @media (max-width: $w-xs) {
        padding: 20px 24px;
        margin-top: 0;
        &:before {
            width: 50px;
            height: 50px;
        }
        margin-bottom: 10px;
    }
}
</style>