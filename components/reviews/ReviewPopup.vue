<template>
    <v-dialog
        v-model="status"
        class="review"
        max-width="1031px"
        max-height="506px"
        @click:outside="$emit('status-change', false)"
    >
        <v-card class="review__card">
            <div class="review__tip tip">
                <h2 class="tip__title">Напишите отзыв</h2>
                <p class="tip__subtitle">
                    Не знаете как написать отзыв? Попробуйте честно оценить
                    удобство использования сервиса, качество клиентской
                    поддержки, регулярность выплат.
                </p>
            </div>
            <div class="review__body">
                <v-form v-if="!postSuccessful" ref="form">
                    <v-text-field
                        v-model="form.name"
                        background-color="#EDF1F6"
                        placeholder="Введите ваше имя"
                        class="review__input"
                        solo
                        :rules="[requiredRule]"
                    />
                    <v-text-field
                        v-model="form.city"
                        background-color="#EDF1F6"
                        placeholder="Введите ваш город"
                        class="review__input"
                        solo
                        :rules="[requiredRule]"
                    />
                    <v-text-field
                        v-model="form.phone"
                        background-color="#EDF1F6"
                        placeholder="Введите ваш телефон"
                        class="review__input"
                        solo
                        :rules="[requiredRule, isPhone]"
                        v-mask="'+7-###-###-##-##'"
                    />
                    <v-textarea
                        v-model="form.msg"
                        class="review__textarea"
                        text
                        solo
                        clearable
                        no-resize
                        rows="4"
                        background-color="#EDF1F6"
                        placeholder="Введите сообщение"
                        :rules="[requiredRule]"
                    />
                    <v-rating
                        v-model="form.rating"
                        class="review__rating"
                        size="25"
                        dense
                        color="#FDE126"
                        background-color="#FDE126"
                        length="5"
                        half-increments
                    >
                    </v-rating>
                    <div
                        v-if="isShowRatingRequiredMessage"
                        class="v-text-field__details"
                        style="padding: 0 12px"
                    >
                        <div
                            class="v-messages theme--light error--text"
                            role="alert"
                        >
                            <div class="v-messages__wrapper">
                                <div class="v-messages__message">
                                    Поставьте оценку
                                </div>
                            </div>
                        </div>
                    </div>
                    <base-btn
                        class="review__send"
                        @click="send"
                        :loading="loading"
                    >
                        Отправить
                    </base-btn>
                </v-form>
                <div class="cu-form" v-else>
                    <div class="cu-success">
                        <v-icon
                            class="mr-6"
                            size="30"
                            color="#329F25"
                            v-text="mdiCheck"
                        />
                        <div v-text="'Ваше отзыв отправлен'" />
                    </div>
                </div>
            </div>
            <div
                class="review__cross"
                v-ripple
                @click="$emit('status-change', false)"
            >
                <v-img src="@/assets/images/reviews/cross.svg" alt="Закрыть" />
            </div>
            <div></div>
        </v-card>
    </v-dialog>
</template>

<script lang="ts">
import { mdiCheckBold } from "@mdi/js";
import { Component, Ref, Vue, Model, Watch } from "vue-property-decorator";
import BaseBtn from "@/components/BaseBtn.vue";
import { mask } from "vue-the-mask";

@Component({
    components: { BaseBtn },
    directives: { mask },
})
export default class ReviewPopup extends Vue {
    @Model("status-change", { default: false }) status!: boolean;
    mdiCheck = mdiCheckBold;
    form = {
        name: "",
        phone: "",
        city: "",
        msg: "",
        rating: 0,
    };

    closeDialog() {
        this.$emit("status-change", false);
    }

    isShowRatingRequiredMessage: boolean = false;
    loading = false;
    postSuccessful = false;

    requiredRule = (v: any) =>
        !!v || v === 0 || v === undefined || "Введите данные";
    isPhone = (v: string) =>
        !v ||
        /(^.{3}\d{3}.\d{3}.\d{2}.\d{2}$)|(^\d{11}$)/.test(v) ||
        "Неверный телефон";

    @Ref("form") formComponent: { validate: Function };

    requiredRatingRule(): boolean {
        if (this.form.rating == 0) {
            this.isShowRatingRequiredMessage = true;
            return false;
        } else {
            this.isShowRatingRequiredMessage = false;
            return true;
        }
    }

    @Watch("form.rating")
    updateShowRatingRequiredMessage() {
        if (!this.isShowRatingRequiredMessage) return;
        else if (this.form.rating > 0) {
            this.isShowRatingRequiredMessage = false;
        }
    }

    send() {
        if (!this.formComponent.validate()) return;
        if (!this.requiredRatingRule()) return;
        var xhr = new XMLHttpRequest();
        xhr.open(
            "POST",
            "https://agents.pampadu.ru/api/landingForm/newReviews",
            true
        );
        xhr.setRequestHeader("Content-type", "Application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
                this.postSuccessful = true;
                // Запрос завершен. Здесь можно обрабатывать результат.
            }
        };
        xhr.send(JSON.stringify(this.form));

        setTimeout(this.closeDialog, 2 * 1000);
    }
}
</script>

<style scoped lang="scss">
>>> .v-dialog:not(.v-dialog--fullscreen) {
    max-height: 95%;
}

.cu-form {
    display: flex;
    padding: 45px 56px;
    margin: 0 -17px;
    flex: 1;
}
.cu-success {
    font-family: Montserrat;
    font-weight: bold;
    font-size: 25px;
    line-height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    flex: 1;
}
.review__card {
    display: flex;

    padding-top: 90px;
    padding-bottom: 68px;
    padding-right: 91px;
    padding-left: 65px;

    background: #ffffff;
    border-radius: 10px;
}

.review__tip {
    max-width: 320px;
    margin-right: 43px;

    position: relative;
}

.review__tip::before {
    content: url("~@/assets/images/reviews/trang-blue.svg");
    position: absolute;

    top: -75px;
    right: -35px;
}

.review__tip::after {
    content: url("~@/assets/images/reviews/trang-pink-op.svg");
    position: absolute;

    bottom: -44px;
    left: -24px;
}

.review__body {
    position: relative;
    width: 100%;
}

.review__body::after {
    content: url("~@/assets/images/reviews/trang-blue-op.svg");
    position: absolute;

    bottom: -30px;
    right: -38px;
}

.review__input {
    border-radius: 2px;
}

.review__textarea {
    width: 100%;
    height: min-content;
    border-radius: 2px;
}

.review__send {
    margin-top: 15px;
}

.review__cross {
    position: absolute;
    top: 0;
    right: 0;

    padding: 20px;
    cursor: pointer;

    border-radius: 100%;
}

.tip__title {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 36px;
}

.tip__subtitle {
    margin-top: 16px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
}

@media (max-width: $w-sm) {
    .review__card {
        flex-direction: column;

        padding-top: 60px;
        padding-bottom: 48px;
        padding-right: 61px;
        padding-left: 61px;
    }

    .review__tip {
        max-width: 100%;
        margin-right: 0;
    }

    .tip__title {
        font-size: 25px;
    }

    .tip__subtitle {
        font-size: 14px;
    }
}

@media (max-width: $w-xs) {
    .review__card {
        padding-top: 30px;
        padding-bottom: 38px;
        padding-right: 15px;
        padding-left: 15px;
    }

    .review__cross {
        padding: 10px;
    }

    .tip__title {
        font-size: 22px;
    }

    .tip__subtitle {
        margin-top: 10px;
        font-size: 12px;
        line-height: 22px;
    }

    .review__tip::after {
        display: none;
    }

    .review__tip::before {
        display: none;
    }

    .review__body::after {
        display: none;
    }
}
</style>
