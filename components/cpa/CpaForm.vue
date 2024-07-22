<template>
  <div class="cpa-form" id="cpaForm">
    <img class="cpa-form-bgitem cpa-form-bgitem1" :src="require('@/assets/images/cpa/bgitem2.webp')" alt="">
    <img class="cpa-form-bgitem cpa-form-bgitem2" :src="require('@/assets/images/cpa/formImg/bgItem3.webp')" alt="">
    <div class="cpa-form-wrp">
      <img class="cpa-form-img cpa-form-img1" :src="require('@/assets/images/cpa/formImg/formImg1.webp')" alt="">
      <img class="cpa-form-img cpa-form-img2" :src="require('@/assets/images/cpa/formImg/formImg2.webp')" alt="">
      <img class="cpa-form-img cpa-form-img3" :src="require('@/assets/images/cpa/formImg/formImg3.webp')" alt="">
      <h2 class="cpa-h2 text-center">
        <b>Готов получать</b>
        <img :src="require('@/assets/images/cpa/titleForm.webp')" alt="">
        <b>ставки и крутые подарки?</b>
      </h2>
      <div class="cpa-form-subtt">Заполни форму и менеджер свяжется с тобой в этот же день!</div>

      <v-form ref="form">
        <v-text-field
          v-model="firstName"
          placeholder="Имя *"
          :rules="firstNameRules"
          required
        ></v-text-field>

        <v-text-field
          v-model="telegram"
          placeholder="Telegram *"
          :rules="telegramRules"
          required
        ></v-text-field>
        <v-text-field
          v-mask="'+7 ### - ###-##-##'"
          v-model="phone"
          placeholder="Телефон  *"
          :rules="phoneRules"
          required
          @input="formatPhoneNumber"
        ></v-text-field>

        <v-text-field
          v-model="email"
          placeholder="E-mail  *"
          :rules="emailRules"
          required
        ></v-text-field>



        <div class="rulesCbx">
          <v-checkbox
            v-model="rules"
            :rules="rulesRules"
            required
          ></v-checkbox>
          <label for="">Я принимаю условия <a href="https://docs.google.com/document/d/17PnoqonnOTeU6fVyfT5lmioboKaT2IPO/edit" target="_blank" style="text-decoration: underline; color: #fff !important;">пользовательского соглашения</a> </label>
        </div>

        <v-btn block class="cpa-btn cpa-btn-fill" :loading="loading" @click.prevent.stop="submitForm($event)">Отправить заявку</v-btn>
      </v-form>
    </div>

    <div class="cpa-form-modal" :class="{'active': showModalSuccess}" @click="closeModal($event)">
      <div class="cpa-form-modal-wrp">
        <div class="cpa-form-modal-close" @click="showModalSuccess = false;">
          <svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5">
              <path d="M50.25 16.75L16.75 50.25" stroke="white" style="stroke:white;stroke:white;stroke-opacity:1;"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16.75 16.75L50.25 50.25" stroke="white" style="stroke:white;stroke:white;stroke-opacity:1;"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </svg>
        </div>
        <img class="cpa-form-modal-img" :src="require('@/assets/images/cpa/formImg/modalMan.webp')"
             style="transform: translateX(35px)" alt="">
        <div class="cpa-form-modal-title">Заявка<br>
          успешно отправлена!
        </div>
        <div class="cpa-form-modal-text">В ближайшее время с вами свяжется affiliate-manager, но если вы хотите ускорить
          процесс, вы можете
          написать самостоятельно
        </div>
        <div class="cpa-btn-wrp">
          <a href="https://t.me/liya_pampadu" target="_blank" class="cpa-btn cpa-btn-fill">МЕНЕДЖЕР</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Ref, Vue} from 'vue-property-decorator';
import Axios, {axiosUrls} from "~/infrastructure/Axios";
import AnalyticsService from "~/core/Analytics/Analytics";

@Component
export default class CpaForm extends Vue {
  showModalSuccess = false;
  firstName = '';
  telegram = '';
  phone = '';
  rules = true;
  email = '';
  loading = false;

  @Ref("form") form: { validate: Function };

  get firstNameRules() {
    return [
      (value: string) => !!value || "Имя обязательно для заполнения",
      (value: string) => (value || "").length >= 2 || "Имя должно содержать не менее 2 символов",
    ];
  }

  get rulesRules() {
    return [
      (value: string) => !!value || "",
    ];
  }

  get telegramRules() {
    return [
      (value: string) => !!value || "Telegram обязателен для заполнения",
      (value: string) => (value || "").length >= 3 || "Telegram должен содержать не менее 3 символов",
    ];
  }

  get emailRules() {
    return [
      (value: string) => !!value || "E-mail обязателен для заполнения",
      (value: string) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value) || "Введите корректный E-mail",
    ];
  }

  get phoneRules() {
    return [
      (value: string) => !!value || "Телефон обязателен для заполнения",
      (value: string) => (value || "").length === 18 || "Не полный номер телефона",
    ];
  }

  closeModal(e: Event) {
    if ((e.target as HTMLElement).classList.contains('cpa-form-modal')) {
      this.showModalSuccess = false;
    }
  }

  formatPhoneNumber() {
    const phoneNumber = this.phone.replace(/\D/g, "");
    const match = phoneNumber.match(/^(\d{1,3})(\d{3})(\d{3})(\d{2})(\d{2})$/);
    if (match) {
      this.phone = `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}-${match[5]}`;
    }
  }

  async submitForm(event: Event) {
    event.preventDefault();


    if (!this.form.validate()) return;
    this.loading = true;
    try {
      const {sendForm} = axiosUrls;
      let data: (string | string[])[] = [this.firstName, this.telegram, this.phone, this.email];
      const utmList: (string | string[])[] = Object.values(this.$route.query);

      if (Array.isArray(utmList) && utmList.length > 0) {
        data = data.concat(utmList);
      }

      const jsonData = JSON.stringify(data);
      const res = await Axios({
        method: 'post',
        url: sendForm,
        data: jsonData,
        headers: {'Content-Type': 'application/json'}
      });
      if (res?.status === 200) {
        this.showModalSuccess = true;
        AnalyticsService.sentCpaForm()
      }
    } catch (err) {
      console.error(err);
    }finally {
      this.loading = false;
    }
  }
}
</script>

<style lang="scss">
.rulesCbx{
  display: flex;
  grid-gap: 10px;
  align-items: center;
}
.cpa-form-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 888;
  background: rgba(#303055, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: .4s;
  @media (max-height: 500px) {
    align-items: flex-start;
    overflow-y: auto;
    padding: 20px 0;
  }

  &-close {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    z-index: 10;
    transition: .35s;

    &:hover {
      transform: rotate(90deg);
    }

    @media (max-width: 600px) {
      right: 10px;
      top: 10px;
      svg {
        max-width: 55px;
      }
    }
  }

  &-img {
    max-height: 44vh;
    min-height: 200px;
    @media (max-width: 1000px) {
      max-height: 35vh;
      transform: translateX(20px) !important;
    }
  }

  &-text {
    font-size: 17px;
    max-width: 345px;
    text-align: center;
    margin: 38px auto 25px;
    @media (max-width: 600px) {
      margin: 18px auto 0;
      font-size: 14px;
    }
  }

  &-wrp {
    position: relative;
    background: #18182F;
    max-width: 925px;
    width: 100%;
    border-radius: 42px;
    padding: 45px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -70px;
    opacity: 0;
    transition: .5s ease-in-out;

    @media (max-width: 1000px) {
      width: calc(100% - 50px);
    }
    @media (max-width: 600px) {
      padding: 10px 25px 40px;
    }
  }

  .cpa-btn-wrp {
    max-width: 408px;
  }

  &.active {
    opacity: 1;
    visibility: visible;
    pointer-events: initial;

    .cpa-form-modal-wrp {
      transition-delay: .3s;
      margin-top: 0;
      opacity: 1;
    }
  }

  &-title {
    color: #FFF;
    text-align: center;
    font-family: 'EuropeExt', sans-serif;
    font-size: 30px;
    font-weight: 700;
    text-transform: uppercase;
    @media (max-width: 600px) {
      font-size: 23px;
    }
  }
}

.cpa-form {
  position: relative;
  padding: 40px 20px 80px;

  .v-messages__wrapper .v-messages__message {
    color: #F07 !important;
  }
  .v-text-field.v-input--has-state>.v-input__control>.v-input__slot:before{
    border: none !important;
  }

  &-bgitem {
    position: absolute;
    transform: translateX(-50%);
    z-index: -1;
    @media (max-width: 1200px) {
      transform: scale(0.6);
      margin: 0;
    }
  }

  .cpa-btn {
    margin-top: 15px;
    @media (max-width: 600px) {
      width: 100%;
      padding: 0 10px;
    }
  }

  &-bgitem1 {
    top: 0;
    left: 50%;
    transform-origin: right;
    margin-left: -560px;
    @media (max-width: 1200px) {
      left: 0;
      top: -163px;
    }
  }

  &-bgitem2 {
    bottom: -100px;
    left: 50%;
    transform-origin: right;
    margin-left: 560px;
    @media (max-width: 1200px) {
      left: initial;
      right: -80px;
      bottom: -130px;
    }
  }

  &-subtt {
    text-align: center;
    margin: 30px 0;
    font-size: 22px;
    line-height: 1.1;
    @media (max-width: 1000px) {
      font-size: 16px;
      margin: 15px 0;
    }
  }

  &-img {
    position: absolute;
    @media (max-width: 1200px) {
      transform: scale(0.55);
    }
  }

  &-img1 {
    bottom: 106px;
    transform-origin: left bottom;
    left: -84px;
    @media (max-width: 900px) {
      transform: scale(0.3);
      bottom: initial;
      top: 100px;
    }
  }

  &-img2 {
    z-index: 2;
    bottom: 427px;
    right: -127px;
    transform-origin: right;
    @media (max-width: 900px) {
      right: -96px;
    }
  }

  &-img3 {
    bottom: 74px;
    right: -269px;
    transform-origin: right bottom;
    @media (max-width: 900px) {
      bottom: -35px;
      right: -235px;
    }

  }

  &-wrp {
    position: relative;
    border-radius: 37px;
    background: rgba(24, 23, 48, 0.32);
    padding: 66px;
    backdrop-filter: blur(40.93333435058594px);
    max-width: 1180px;
    margin: 0 auto;
    @media (max-width: 900px) {
      padding: 34px 16px;
    }

    .v-text-field {
      input {
        border-radius: 8px;
        background: #181831;
        height: 72px;
        max-height: 72px;
        color: #fff;
        padding-left: 20px;
        font-size: 17px;

        &::placeholder {
          color: #fff !important;
        }
      }

      @media (max-width: 900px) {
        padding-top: 0;
        input {
          height: 50px;
          max-height: 50px;
        }
      }
    }

    .v-form {
      max-width: 600px;
      margin: 15px auto;
    }
  }

  h2 {
    text-align: center;
    display: flex;
    margin: 0 auto;
    grid-gap: 10px;
    flex-direction: column;
    align-items: center;

    img {
      max-width: 80vw;
    }
  }
}
</style>
