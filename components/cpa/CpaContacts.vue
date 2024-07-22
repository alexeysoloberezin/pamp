<template>
  <div class="cpa-contacts" id="cpaContacts">
    <div class="container">
      <h2 class="cpa-h2">Контакты</h2>
      <div class="cpa-contacts-wrp">
        <a v-for="el in contacts" :key="el.name" target="_blank" :href="el.link" class="cpa-contacts-it">
          <div class="cpa-contacts-icon"><img :src="el.icon" alt=""></div>
          <div class="cpa-contacts-name">{{ el.name }}</div>
          <div class="cpa-contacts-link">{{ el.linkName }}</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component
export default class CpaContacts extends Vue {
  contacts = [
    {
      icon: require('@/assets/images/cpa/contacts/icon1.svg'),
      name: 'INSTAGRAM',
      linkName: 'pampadu.cpa',
      link: 'https://instagram.com/pampadu.cpa?igshid=MzRlODBiNWFlZA=='
    },
    {
      icon: require('@/assets/images/cpa/contacts/icon2.svg'),
      name: 'TELEGRAM:',
      linkName: 'pampaducpa',
      link: 'https://t.me/+VnqJUwKdczU5YjIy'
    },
    {
      icon: require('@/assets/images/cpa/contacts/icon3.svg'),
      name: 'EMAIL:',
      linkName: 'affiliates@pampadu.ru',
      link: 'mailto:m.starodubzewa@pampadu.ru'
    },
  ]
}
</script>

<style lang="scss">
.cpa-contacts {
  margin: 80px 0 120px;
  @media (max-width: 1000px) {
    margin: 40px 0 70px;
  }
  &-wrp {
    display: flex;
    justify-content: space-around;
    margin-top: 75px;
    @media (max-width: 1000px) {
      margin-top: 20px;
    }
    @media (max-width: 740px) {
      flex-direction: column;
      grid-gap: 40px;
    }
  }

  &-it {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    &:hover {
      .cpa-contacts-link {
        text-decoration: underline;
      }

      .cpa-contacts-icon {
        background: #2b2b4f;

        img {
          transform: scale(1.05);
        }
      }
    }
  }

  &-link {
    color: #C66BFF !important;
    text-align: center;
    font-family: 'EuropeExt', sans-serif;
    font-size: 29px;
    font-weight: 700;
    line-height: 1.1;
    @media (max-width: 1000px) {
      font-size: 20px;
    }
  }

  &-icon {
    background: #181831;
    border-radius: 50%;
    width: 116px;
    height: 116px;
    display: flex;
    align-items: center;
    transition: background-color .45s;
    justify-content: center;
    @media (max-width: 1000px) {
      width: 60px;
      height: 60px;
    }

    img {
      transition: transform .4s;
      max-width: 40%;
    }
  }

  &-name {
    font-family: 'EuropeExt', sans-serif;
    font-size: 13px;
    font-weight: 700;
    line-height: 1.1;
    margin: 16px 0 14px;
    text-transform: uppercase;
    @media (max-width: 1000px) {
      margin: 5px 0;
    }
  }
}
</style>
