<template>
  <footer>
    <section style="position: relative" class="footer-container">
      <!--Mobile-->
      <div v-if="br.smAndDown" class="footer-mobile">
        <div
          class="mobile-info"
          :style="{flexDirection: br.xs ? 'column' : 'row'}"
        >
          <img
            @click="gotoMain"
            class="ft-logo"
            alt="logo"
            :src="logoImg"
          />
          <v-layout
            :class="{
                        'mt-5': br.xs,
                        'mx-auto': br.sm,
                    }"
            shrink
            column
            align-content-center
          >
            <div class="ft-address ft-address__call">Связь по телефону:</div>
            <div
              class="ft-phone"
              v-text="'+7 (499) 110-83-65'"
              style="margin: 0"
            />
            <div
              class="ft-address mt-2"
              v-text="'ИНН 9729069737 КПП 772501001'"
            />
            <div
              class="ft-address mt-2"
              v-text="'г. Москва,\n ул. Пресненская набережная, д. 6, стр. 2, этаж 8'"
            />
          </v-layout>
        </div>
        <div class="mobile-links my-4 mt-8">
          <a
            v-for="link in pages"
            @click.prevent="open(link.url)"
            :href="link.url"
            :key="link.code"
            v-text="link.title"
          />
        </div>
        <v-expansion-panels accordion>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Страхование
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-layout wrap>
                <v-flex
                  xs12
                  v-for="(product) in insurance"
                  :key="product.title"
                  class="expansion-product"
                >
                  <nuxt-link
                    :to="product.url"
                    v-text="product.title"
                  />
                </v-flex>
              </v-layout>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Страховые компании
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-layout wrap>
                <v-flex
                  xs12
                  v-for="(ic,index) in ics"
                  :key="index"
                  class="expansion-partner"
                >
                  <nuxt-link
                    :to="`/partner/${ic}/`"
                    v-text="partnerName(ic)"
                  />
                </v-flex>
              </v-layout>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Финансовые офферы
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-layout wrap>
                <v-flex
                  xs12
                  v-for="(product,index) in [...banks, ...offers]"
                  :key="product.title"
                  class="expansion-partner"
                >
                  <nuxt-link
                    :to="product.url"
                    v-text="product.title"
                  />
                </v-flex>
              </v-layout>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <NuxtLink to="/legal/" class="a py-1">
                Юридические документы
              </NuxtLink>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-layout column>
                <a
                  class="small mr-5"
                  style="color: #7d8d93 !important"
                  target="_blank"
                  href="https://docs.google.com/document/d/1M9-nRbmTFUu6OXX-xOiYc2LdXMiIRegS/edit"
                  rel="nofollow"
                >Правила платформы</a
                >
                <a
                  class="small"
                  style="color: #7d8d93 !important"
                  target="_blank"
                  href="https://docs.google.com/document/d/17PnoqonnOTeU6fVyfT5lmioboKaT2IPO/edit"
                  rel="nofollow"
                >Политика конфиденциальности</a
                >
                <a
                  class="small"
                  style="color: #7d8d93 !important"
                  target="_blank"
                  href="https://docs.google.com/document/d/1WU8_9KGYem9OS3mPoHbb3S2PmnkMEC5g/edit"
                  rel="nofollow"
                >Договор оферты для физ. лиц</a
                > <a
                class="small"
                style="color: #7d8d93 !important"
                target="_blank"
                href="https://docs.google.com/document/d/1dI9Xr47Wg6SDR9D-oMm1uV1VvuVxtgmeQo1XLEo2dgM/edit"
                rel="nofollow"
              >Договор оферты для юр. лиц</a
              >

              </v-layout>
              <div>Подписывайтесь на наши соц.сети, чтобы не пропускать свежие новости!</div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <div class="mobile-social mt-8">
          <div class="ft-header" v-text="'Мы в соц. сетях'"/>
          <v-layout align-center class="ft-tg-cont">
            <a
              href="https://t.me/joinchat/TZvpUlJfAZfdZjuf"
              target="_blank"
              rel="nofollow"
              style="text-decoration: none"
            >
              <img
                height="20"
                src="@/assets/images/tg.svg"
                alt="telegram"
              />
            </a>
            <a
              href="https://www.facebook.com/Pampadu.ru"
              rel="nofollow"
              target="_blank"
              style="text-decoration: none"
            >
              <img
                height="20"
                src="@/assets/images/facebook.svg"
                alt="facebook"
              />
            </a>
            <a
              href="https://vk.com/avto_yslyga"
              rel="nofollow"
              target="_blank"
              style="text-decoration: none"
            >
              <img
                height="15"
                src="@/assets/images/vk.svg"
                alt="vk"
              />
            </a>
            <a
              href="https://www.instagram.com/pampadu.ru"
              rel="nofollow"
              target="_blank"
              style="text-decoration: none"
            >
              <img
                height="20"
                src="@/assets/images/instagramm.svg"
                alt="instagramm"
              />
            </a>
            <a
              href="https://ok.ru/pampadu"
              rel="nofollow"
              target="_blank"
              style="text-decoration: none"
            >
              <img
                height="20"
                src="@/assets/images/ok.svg"
                alt="ok"
              />
            </a>
            <v-spacer/>
            <a
              href="https://navigator.sk.ru/orn/1124211"
              rel="nofollow"
              target="_blank"
              style="text-decoration: none; width: min-content"
            >
              <img
                style="max-width: 45px"
                src="@/assets/images/skolkovo-2x.png"
                alt="skolkovo"
              />
            </a>
          </v-layout>
        </div>
      </div>
      <!--Desktop-->
      <div v-else class="footer-inner">
        <div class="footer-col col-logo">
          <img
            @click="gotoMain"
            class="ft-logo"
            alt="logo"
            :src="logoImg"
            :style="{margin: br.mdAndUp ? '' : '0 20px'}"
          />
          <div class="ft-address ">Связь по телефону:</div>
          <div
            class="ft-phone"
            v-text="'+7 (499) 110-83-65'"
            :style="{
                        padding: br.mdAndUp ? '' : '0 20px',
                    }"
          />
          <div>
            <div class="ft-address" v-text="'ИНН 9729069737'"/>
            <div class="ft-address" v-text="'КПП 772501001'"/>
          </div>
          <div style="margin-top: 20px">
            <div class="ft-address" v-text="'Адрес:'"/>
            <div class="ft-address" v-text="'г. Москва,'"/>
            <div class="ft-address" v-text="'Пресненская набережная, д. 6'"/>
            <div class="ft-address" v-text="'строение 2, этаж 8'"/>
          </div>
        </div>
        <div class="footer-cont">
          <div class="footer-grid">
            <div class="footer-links ">
              <a
                @click.prevent="open(link.url)"
                v-for="link in pages"
                class="a"
                :href="link.url"
                :key="link.code"
                v-text="link.title"
              />
            </div>

            <div class="footer-products">
              <div v-text="'СТРАХОВАНИЕ'"/>
              <v-flex v-for="(insuranceItem,index) in insurance" shrink :key="insuranceItem.title">
                <nuxt-link
                  class="footer-link"
                  :to="insuranceItem.url"
                  style="color: #7d8d93 !important;padding-right: 10px;"
                  v-text="insuranceItem.title"
                />
              </v-flex>
            </div>

            <div class="footer-companies">
              <div v-text="'СТРАХОВЫЕ КОМПАНИИ'"/>
              <v-layout column style="column-count: 2;column-gap: 1%; display: block;">
                <v-flex v-for="(ic,index) in ics" shrink :key="ic">
                  <nuxt-link
                    class="footer-link"
                    :to="`/partner/${ic}/`"
                    style="color: #7d8d93 !important;padding-right: 10px;"
                    v-text="partnerName(ic)"
                  />
                </v-flex>
              </v-layout>
            </div>

            <div class="footer-banks">
              <div v-text="'ФИНАНСОВЫЕ ОФФЕРЫ'"/>
              <v-row>
                <v-col cols="5">
                  <v-flex v-for="(product,index) in banks" shrink :key="product.title" class="v-col-6">
                    <nuxt-link
                      class="footer-link"
                      :to="product.url"
                      style="color: #7d8d93 !important;padding-right: 10px;"
                      v-text="product.title"
                    />
                  </v-flex>
                </v-col>
                <v-col cols="7">
                  <v-flex v-for="(product,index) in offers" shrink :key="product.title" class="v-col-7">
                    <nuxt-link
                      class="footer-link"
                      :to="product.url"
                      style="color: #7d8d93 !important;padding-right: 10px;"
                      v-text="product.title"
                    />
                  </v-flex>
                </v-col>
              </v-row>
            </div>
          </div>
          <div class="info-grid">
            <v-layout column>
              <NuxtLink to="/legal/" class="a py-1">
                ЮРИДИЧЕСКИЕ ДОКУМЕНТЫ
              </NuxtLink>

              <a
                class="small"
                style="color: #7d8d93 !important; font-size: 12px"
                target="_blank"
                href="https://docs.google.com/document/d/1M9-nRbmTFUu6OXX-xOiYc2LdXMiIRegS/edit"
                rel="nofollow"
              >Правила платформы</a
              >
              <a
                class="small"
                style="color: #7d8d93 !important; font-size: 12px"
                target="_blank"
                href="https://docs.google.com/document/d/17PnoqonnOTeU6fVyfT5lmioboKaT2IPO/edit"
                rel="nofollow"
              >Политика конфиденциальности</a
              >
              <a
                class="small"
                style="color: #7d8d93 !important;font-size: 12px"
                target="_blank"
                href="https://docs.google.com/document/d/1WU8_9KGYem9OS3mPoHbb3S2PmnkMEC5g/edit"
                rel="nofollow"
              >Договор оферты для физ. лиц</a
              > <a
              class="small"
              style="color: #7d8d93 !important;font-size: 12px"
              target="_blank"
              href="https://docs.google.com/document/d/1dI9Xr47Wg6SDR9D-oMm1uV1VvuVxtgmeQo1XLEo2dgM/edit"
              rel="nofollow"
            >Договор оферты для юр. лиц</a
            >

            </v-layout>
            <div class="info-grid__subscribe">Подписывайтесь на наши соц.сети, чтобы не пропускать свежие новости!</div>
            <div style="display: flex; align-items: flex-start">
              <div class="footer-col">
                <span class="ft-header" v-text="'Мы в соц. сетях'"/>
                <v-layout align-center class="ft-tg-cont">
                  <a
                    href="https://t.me/joinchat/TZvpUlJfAZfdZjuf"
                    rel="nofollow"
                    target="_blank"
                    style="text-decoration: none"
                  >
                    <img
                      width="22"
                      src="@/assets/images/tg.svg"
                      alt="telegram"
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/Pampadu.ru"
                    target="_blank"
                    rel="nofollow"
                    style="text-decoration: none"
                  >
                    <img
                      width="18"
                      src="@/assets/images/facebook.svg"
                      alt="facebook"
                    />
                  </a>
                  <a
                    href="https://vk.com/avto_yslyga"
                    rel="nofollow"
                    target="_blank"
                    style="text-decoration: none"
                  >
                    <img
                      width="25"
                      src="@/assets/images/vk.svg"
                      alt="vk"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/pampadu.ru"
                    rel="nofollow"
                    target="_blank"
                    style="text-decoration: none"
                  >
                    <img
                      width="18"
                      src="@/assets/images/instagramm.svg"
                      alt="instagramm"
                    />
                  </a>
                  <a
                    href="https://ok.ru/pampadu"
                    rel="nofollow"
                    target="_blank"
                    style="text-decoration: none"
                  >
                    <img
                      width="11"
                      src="@/assets/images/ok.svg"
                      alt="ok"
                    />
                  </a>
                </v-layout>
              </div>
            </div>
            <div
              style="flex-direction: initial;align-items: baseline; margin: 0; justify-content: space-between"
              class="footer-col"
            >
              <a
                href="https://navigator.sk.ru/orn/1124211"
                rel="nofollow"
                target="_blank"
                style="text-decoration: none;"
              >
                <v-img
                  :height="$vuetify.breakpoint.lgAndUp ? '54' : '31'"
                  :width=" $vuetify.breakpoint.lgAndUp ? '77' : '45'"
                  style="max-width: 100%"
                  contain
                  :src="require('@/assets/images/skolkovo-2x.png')"
                  alt="skolkovo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <appstore-links transparent/>
    </section>
    <footer-company-info/>
  </footer>
</template>
<script lang="ts">
import {getPartnerName} from "@/model/entities/ic-partner/index";
import {getCityName} from "@/model/entities/city/index";
import {CityUrl, IcUrl} from "~/urls"
import {Vue, Component, Prop} from "vue-property-decorator";
import AppstoreLinks from "~/components/common/appStoreLinks/AppStoreLinks.vue";
import FooterCompanyInfo from "~/components/common/Footer/FooterCompanyInfo.vue";
import {HeaderLink, Pages} from "~/model/Navigation";

@Component({
  components: {FooterCompanyInfo, AppstoreLinks}
})
export default class Footer extends Vue {
  @Prop({default: () => []}) blockLinks: {
    code: string;
    title: string;
  }[];
  ics = IcUrl;
  cities = CityUrl;
  products = Pages.getProducts();
  insurance = Pages.getInsurance()

  banks: HeaderLink[] = [
    {
      title: 'Банки',
      url: '/affiliate-program/banks/',
    },
    {
      title: 'МФО',
      url: '/affiliate-program/mfo/',
    },
    {
      title: `РКО`,
      url: '/rko/',
    },
    {
      title: 'Вклады',
      url: '/affiliate-program/bank-deposits/',
    },
    {
      title: 'Ипотека',
      url: '/strahovanie-ipoteki/',
    },
  ]

  offers: HeaderLink[] = [
    {
      title: 'Дебетовые карты',
      url: '/affiliate-program/debit-cards/',
    },
    {
      title: 'Кредитные карты',
      url: '/creditcards/',
    },
    {
      title: 'Кредит наличными',
      url: '/affiliate-program/cash-loan/',
    },
    {
      title: 'Фин.офферы',
      url: '/finance/',
    },
    {
      title: 'Агент банка',
      url: '/bank-agent/',
    },
  ]

  scrollTo(query) {
    document.querySelector(query).scrollIntoView({
      block: "start",
      inline: "start",
      behavior: "smooth",
    });
  }

  partnerName(name) {
    return getPartnerName(name);
  }

  cityName(name) {
    return getCityName(name);
  }

  get br() {
    return this.$vuetify.breakpoint;
  }

  gotoMain() {
    if (this.$route.name == "agents") this.scrollTo("#padder");
    else this.$router.push({name: 'index'});
  }

  open(link: string) {
    if (link.startsWith('http')) return window.open(link, '_blank');
    return this.$router.push(link);
  }

  logoImg = require("@/assets/images/logo.v2.svg");

  get pages(): { code: string; url: string; title: string }[] {
    const query = (this.$root as any).query ?? '';
    let links = [
      {code: "ag", url: "/", title: "Агентам"},
      {code: "", url: "https://pampadu.ru/blog/" + (query ?? ""), title: "Блог"},
      {code: "wi", url: "/webtools/", title: "Вебмастерам"},
      // { code: "~~", url: "/~~", title: "Продукты" },
      {code: "hr", url: "/jobs/", title: "Карьера"},
      {code: "rel", url: "/realtors/", title: "Риэлторам"},
      {code: "co", url: "/contacts/", title: "Контакты"},
      {code: "pa", url: "/partners/", title: "Партнерам"},
      {code: "re", url: "/reviews/", title: "Отзывы"},
      {code: "", url: "/multi-agent/", title: "Мульти-агент"},
      {code: "", url: "/", title: ""}, //  skip
      {code: "", url: "/hr-offers/", title: "HR-офферы"},
      {code: "", url: "/", title: ""}, //  skip
      {code: "", url: "/referalnaya-programma", title: "Реферальная программа"},
    ];
    let mobileLinks = [
      {code: "ag", url: "/", title: "Агентам"},
      {code: "re", url: "/reviews/", title: "Отзывы"},
      {code: "wi", url: "/webtools/", title: "Вебмастерам"},
      {code: "", url: "https://pampadu.ru/blog/" + (query ?? ""), title: "Блог"},
      {code: "pa", url: "/partners/", title: "Партнерам"},
      {code: "hr", url: "/jobs/", title: "Карьера"},
      {code: "co", url: "/contacts/", title: "Контакты"},
      {code: "", url: "/multi-agent/", title: "Мульти-агент"},
      {code: "", url: "/hr-offers/", title: "HR-офферы"},
      {code: "", url: "/referalnaya-programma", title: "Реферальная программа"},
      // { code: "~~", url: "/~~", title: "Продукты" },
    ];
    return this.$vuetify.breakpoint.smAndDown ? mobileLinks : links;
  }

}
</script>
<style lang="scss">
footer {
  background-color: #F9F9FC;

  .footer {
    &-container {
      padding: 29px 40px 16px;
      max-width: 1300px;
      margin: 0 auto;

      @media (max-width: $w-sm) {
        padding: 27px 0;
      }
    }

    &-inner {
      display: flex;
      margin-bottom: 25px;
    }

    &-cont {
      display: flex;
      flex-flow: column;
      flex: 10 0 auto;
      @supports (-ms-ime-align: auto) {
        justify-content: center;
      }
      @media (max-width: $w-sm) {
        flex-flow: column;
        margin: 0 20px;
      }
    }

    &-links {
      display: grid;
      grid-template-columns: 1fr 1fr;

      > a:not(:last-child) {
        padding-bottom: 10px;
      }
    }

    &-products, &-companies, &-banks, &-cities {
      > div:first-child {
        padding-bottom: 15px;
      }

      > div:nth-child(2) {
        font-size: 12px;
        line-height: 20px;
        font-style: normal;
        font-weight: 400;
      }
    }
  }
}

.message-us {
  position: absolute;
  top: 0;
  right: 50px;
  background-image: url("~@/assets/images/message.svg");
  transform: translateY(-50%);
  width: 68px;
  height: 68px;
  filter: drop-shadow(0px 2px 25px rgba(113, 48, 229, 0.53));
  cursor: pointer;
}

.footer-col {
  display: flex;
  flex-flow: column;
  margin-right: 40px;
  flex: 1 0 auto;

  &.col-logo {
    flex: 1 0 206px;
  }

  &.links {
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    a,
    .a {
      flex: 0 1 28px;
    }
  }

  &.partners {
    flex-basis: 265px;
  }

  &.cities {
    flex-basis: 265px;
  }

  .a,
  a {
    font-size: 14px;
    color: #2d2645;
    line-height: 28px;
  }

  .ft-tg-cont {
    display: flex;

    & > *:not(:last-child) {
      margin-right: 20px;
      @media (max-width: $w-md) {
        margin-right: 10px;
      }
    }
  }

  .small {
    font-size: 12px;
    line-height: 20px;
    color: #7d8d93;
  }

  .inverted {
    text-decoration: underline;
    font-size: 12px;
    line-height: 15px;
    color: #7245ff;
  }

  @media (max-width: $w-md) {
    margin: 0;
  }
}

.ft-logo {
  cursor: pointer;
  width: 216px;
  height: 46px;
  margin-bottom: 20px;
  @media (max-width: $w-md) {
    margin-bottom: 0;
  }

  &.new-year {
    height: auto;
    margin: -16px 0 50px -18px;
    width: 200px;
    @media (max-width: $w-md) {
      margin: 0;
    }
  }
}

.ft-header {
  font-size: 13px;
  margin-bottom: 16px;
  color: #100e0f;
  text-transform: uppercase;
}

.ft-content {
  display: flex;
}

.footer-text {
  font-size: 12px;
  text-align: center;
  color: #7d8d93;
  padding: 18px 0 15px 0;
  background-color: white;
  @media (max-width: $w-md) {
    padding: 0 20px;
  }
}

.footer-text-small {
  font-size: 10px;
  padding-top: 5px;

}

.ft-address {
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #7d8d93;

  &__call {
    @media (max-width: $w-md) {
      display: none;
    }
  }
}

.ft-phone {
  margin: 11px 0 20px 0;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  text-align: left;
  color: #7245ff;
}

.footer-link {
  font-size: 12px;
  color: #7d8d93;
}

.footer-grid {
  display: grid;
  grid-template-columns: 286px 142px 290px 247px;
  grid-gap: 20px;

  @media (max-width: $w-md) {
    grid-template-columns: repeat(2, 1fr);
    margin-left: 25px;
  }
}

.footer-mobile {
  .mobile-info {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
  }

  .mobile-links {
    padding: 0 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 170px);
    grid-auto-rows: 40px;
    @media (max-width: $w-xs) {
      grid-template-columns: repeat(auto-fill, 120px);
    }
  }

  .mobile-social {
    padding: 0 20px;

    .ft-tg-cont {
      display: flex;

      & > *:not(:last-child) {
        margin-right: 20px;
        @media (max-width: $w-md) {
          margin-right: 10px;
        }
      }
    }
  }

  .v-expansion-panel {
    margin-left: -5px;
  }

  .v-expansion-panel:before {
    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.2);
  }

  .expansion-city,
  .expansion-partner,
  .expansion-product {
    position: relative;
  }

  .expansion-city,
  .expansion-partner,
  .expansion-product {
    &:before {
      display: inline-block;
      content: "";
      border-top: 2px solid #ab54ff;
      margin: 5px 10px 5px 0;
      width: 10px;
    }
  }
}

.info-grid {
  margin-top: 60px;
  display: grid;
  grid-template-columns: 253px 220px 225px 238px;
  grid-gap: 30px;

  > :first-child {
    > a:first-child {
      padding-bottom: 14px !important;
    }
  }

  &__subscribe {
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    display: flex;
  }

  @media (max-width: $w-md) {
    grid-template-columns: 1fr;
    margin-left: 30px;
  }
}
</style>
