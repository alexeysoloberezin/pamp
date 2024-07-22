<template>
    <div class="cu">
        <div id="cu" style="position: absolute; top: -140px" />
        <h2 class="cu-title px-6">Оставить заявку на партнерство</h2>
        <div class="cu-content-outer">
            <div class="cu-content">
                <v-img
                    class="cu-img"
                    :src="require('@/assets/images/partners/contact-us.png')"
                />
                <v-fade-transition hide-on-leave>
                    <v-form v-if="!postSuccessful" ref="form" class="cu-form">
                        <div class="cu-first">
                            <v-text-field
                                validate-on-blur
                                hide-details
                                filled
                                v-model="form.name"
                                :rules="[requiredRule]"
                                label="Имя"
                            />
                            <v-text-field
                                validate-on-blur
                                hide-details
                                filled
                                v-model="form.phone"
                                :rules="[requiredRule, isPhone]"
                                v-mask="'+7-###-###-##-##'"
                                label="Телефон"
                            />
                            <v-text-field
                                validate-on-blur
                                hide-details
                                filled
                                v-model="form.company"
                                :rules="[requiredRule]"
                                label="Компания"
                            />
                        </div>
                        <div class="cu-second">
                            <v-textarea
                                class="mb-0"
                                validate-on-blur
                                hide-details
                                filled
                                rows="3"
                                label="Вопрос или предложение"
                                no-resize
                                v-model="form.msg"
                                :rules="[requiredRule]"
                            />
                            <span
                                v-if="!loading"
                                @click="send()"
                                style="cursor: pointer"
                                class="mt-4 text-center btn"
                                :loading="loading"
                            >
                                Отправить
                            </span>
                            <v-progress-circular v-else />
                        </div>
                    </v-form>
                    <div class="cu-form" v-else>
                        <div class="cu-success">
                            <v-icon
                                class="mr-4"
                                size="30"
                                color="#329F25"
                                v-text="mdiCheck"
                            />

                            <div v-text="'Ваше обращение отправлено'" />
                        </div>
                    </div>
                </v-fade-transition>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { mdiCheckBold } from "@mdi/js";
import { Component, Prop, Ref, Vue } from "vue-property-decorator";
import { mask } from "vue-the-mask";
@Component({ directives: { mask } })
export default class ContactUs extends Vue {
    mdiCheck = mdiCheckBold;
    form = {
        name: "",
        phone: "",
        company: "",
        msg: "",
    };
    loading = false;
    postSuccessful = false;
    requiredRule = (v: any) =>
        !!v || v === 0 || v === undefined || "Введите данные";
    isPhone = (v: string) =>
        !v ||
        /(^.{3}\d{3}.\d{3}.\d{2}.\d{2}$)|(^\d{11}$)/.test(v) ||
        "Неверный телефон";
    @Ref("form") formComponent: { validate: Function };
    send() {
        if (!this.formComponent.validate()) return;
        this.loading = true;
        var xhr = new XMLHttpRequest();
        xhr.open(
            "POST",
            "https://agents.pampadu.ru/api/landingForm/newPartnerContact",
            true
        );
        //xhr.open("POST", "http://localhost:5550/api/landingForm/newPartnerContact", true);
        xhr.setRequestHeader("Content-type", "Application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
                this.postSuccessful = true;
                // this.loading = true;
                // Запрос завершен. Здесь можно обрабатывать результат.
            }
        };
        xhr.send(JSON.stringify(this.form));
        // this.postSuccessful = true;
    }
}
</script>
<style lang="scss">
.cu {
    position: relative;
    padding: 50px 0;
}
.cu-title {
    font-family: Montserrat;
    font-weight: bold;
    font-size: 25px;
    text-align: center;
    margin-bottom: 30px;
}
.cu-content-outer {
    max-width: 1212px;
    padding: 0 26px;
    margin: auto;
}
.cu-content {
    display: flex;
    box-shadow: 0px 5px 31px rgba(203, 207, 216, 0.6);
    max-height: 264px;
    height: 264px;
    @media (max-width: $w-sm) {
        flex-flow: column;
        max-height: 100%;
        height: auto;
    }
}
.cu-img {
    // height: 100%;
    width: 100%;
    max-width: 33%;
    object-fit: cover !important;
    @media (max-width: $w-sm) {
        align-self: center;
        max-width: 100%;
        max-height: 200px;
        object-fit: cover;
    }
}
.cu-form {
    display: flex;
    padding: 45px 56px;
    margin: 0 -17px;
    flex: 1;
    @media (max-width: $w-sm) {
        margin: 0 -10px;
        padding: 30px 14px;
        flex-wrap: wrap;
    }
}
.cu-first {
    display: flex;
    flex-flow: column;
    flex: 1 0 170px;
    margin: 0 17px;
    justify-content: space-between;
    @media (max-width: $w-sm) {
        margin: 0 10px;
    }
    @media all and (-ms-high-contrast: none) {
        height: 75%; // ie hack
    }
}
.cu-second {
    display: flex;
    flex-flow: column;
    flex: 1 0 250px;
    margin: 0 17px;
    justify-content: space-between;
    @media (max-width: $w-sm) {
        margin: 0 10px;
        flex: 1 0 240px;
    }
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
.v-input {
    flex: 0 !important;
    @media (max-width: $w-xs) {
        margin: 9px 0 !important;
        // &.mb-0 {
        //     margin-bottom: 0 !important;
        // }
    }
}
.v-input,
.v-label {
    font-size: 14px !important;
}
.v-text-field--filled {
    border-radius: 2px !important;
}
.v-text-field--filled .v-label,
.v-text-field--full-width .v-label {
    top: 13px !important;
}
.v-text-field--filled > .v-input__control > .v-input__slot,
.v-text-field--full-width > .v-input__control > .v-input__slot,
.v-text-field--outlined > .v-input__control > .v-input__slot {
    min-height: 44px !important;
}
.v-text-field > .v-input__control > .v-input__slot:before,
.v-text-field > .v-input__control > .v-input__slot:after {
    content: none !important;
}
.v-text-field--filled:not(.v-text-field--single-line) input {
    margin-top: 12px !important;
}
</style>
