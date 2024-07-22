<template>
  <div class="contacts-page">
    <div class="contacts-container">
      <h1 class="contacts-header">Пампаду — Контактная информация</h1>
      <div class="contacts-wrapper">
        <div class="contact" :style="{order: br.smAndDown ? '-5' : ''}">
          <p class="contact-header">Телефон</p>
          <a class="contact-desc link" href="tel:+74991108365">+7 (499) 110-83-65</a>
        </div>
        <div class="contact" :style="{order: br.smAndDown ? '-3' : ''}">
          <p class="contact-header">Адрес</p>
          <p class="contact-desc">г. Москва, <br/> Пресненская наб. д.12</p>
        </div>
        <div class="contact">
          <p class="contact-header">Онлайн-чат</p>
          <div style="display: flex;"
               :style="{flexDirection: br.smAndDown ? 'column' : '',alignItems: br.smAndDown ? 'flex-start' : 'center'}">
            <v-btn @click="openChat" color="primary" class="mr-2" :class="{'mt-2': br.smAndDown}"
                   style="text-transform: unset;" :style="{order: br.smAndDown ? '1' : ''}" :block="br.xs"
                   :large="br.smAndDown">Открыть чат
            </v-btn>
            <p class="mb-0" style="line-height: 1;font-size: 20px">Задайте вопрос <br/> техподдержке онлайн</p>
          </div>
        </div>
        <div class="contact" :style="{order: br.smAndDown ? '-4' : ''}">
          <p class="contact-header">Электронная почта</p>
          <a class="contact-desc link" href="mailto:agents@pampadu.ru">agents@pampadu.ru</a>
        </div>
        <div class="contact" :style="{order: br.smAndDown ? '-2' : ''}">
          <p class="contact-header">Реквизиты</p>
          <p class="contact-desc">ИНН 9729069737 / КПП&nbsp;772501001</p>
        </div>
        <div class="contact">
          <p class="contact-header">Мы в соцсетях</p>
          <div class="contact-socials">
            <a v-for="(contact, i) in contacts" :key="i" target="_blank" :href="contact.href">
              <v-img :src="contact.icon"/>
            </a>
          </div>
        </div>
      </div>
    </div>
    <YandexMap class="yandex-map"/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
import YandexMap from "~/components/common/YandexMap.vue";
import ApiHelper from "~/utils/ApiHelper";
import {Meta} from "~/utils/meta";
import {createJsonLd} from "~/utils/createJSON_LD";

@Component({
  components: {YandexMap}
})
export default class Contacts extends Vue {
  contacts = [
    {href: 'https://t.me/+m0rNFAbeYwg4NTMy', icon: require('@/assets/images/contacts/telegramm.svg')},
    {href: 'https://ok.ru/pampadu', icon: require('@/assets/images/contacts/ok.svg')},
    {href: 'https://vk.com/avto_yslyga', icon: require('@/assets/images/contacts/vk.svg')},
  ]

  get br() {
    return this.$vuetify.breakpoint;
  }

  openChat() {
    (window as any).carrotquest?.open?.();
  }

  head() {
    return {
      title: "Контакты - сервис партнерских продаж Pampadu",
      link: [
        {
          rel: 'canonical',
          hid: 'canonical',
          href: ApiHelper.origin + this.$route.path
        }
      ],
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Контактная информация сервиса партнерских продажа Pampadu Адреса офисов, режим работы. ✆ +7(499)110-83-65",
        },
        Meta.generateOgUrl(this.$route),
      ],
      script: [
        createJsonLd([
          {
            name: "Контакты",
            path: "contacts"
          }
        ]),
      ],
    };
  }
}
</script>

<style lang="scss">
.contacts-page {
  .contacts-container {
    max-width: 1220px;
    margin: 0 auto;
    padding: 0 20px;
    position: relative;
  }

  .contacts-header {
    margin-top: 65px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 35px;
    line-height: 45px;
    color: #000000;
    @media (max-width: $w-sm) {
      margin-top: 20px;
      font-size: 25px;
      line-height: 25px;
    }
    @media (max-width: $w-xs) {
      max-width: 310px;
    }
  }

  .contacts-wrapper {
    display: flex;
    flex-wrap: wrap;
    row-gap: 60px;
    margin: 75px 0;
    @media (max-width: $w-sm) {
      flex-direction: column;
      margin: 20px 0;
      row-gap: 25px;
    }

    .contact {
      flex: 1 1 33%;

      &-header {
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        color: #7D8D93;
        @media (max-width: $w-sm) {
          font-size: 16px;
          line-height: 20px;
          margin-bottom: 5px;
        }
      }

      &-desc {
        font-weight: 400;
        font-size: 20px;
        line-height: 28px;
        margin-bottom: 0;

        &.link {
          font-weight: 500;
          font-size: 30px;
          color: #7A49D2 !important;
          @media (max-width: $w-sm) {
            font-size: 25px;
            line-height: 29px;
          }
        }
      }

      &-socials {
        display: flex;

        & > *:not(:last-child) {
          margin-right: 15px;
        }
      }
    }
  }
}
</style>
