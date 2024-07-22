<template>
    <div class="mass-media" style="width: 100%">
        <div id="mm" style="position: absolute; top: -80px" />
        <h2 class="h2 px-6"
        :class="$vuetify.breakpoint.lgAndUp ? 'mb-10': ''"
        v-html="title ? title : 'Мы в СМИ'"/>
        <div class="mass-media-container">
            <a
                class="mass-media-card"
                v-for="(site, i) in sites"
                :key="i"
                :href="site.url"
                target="_blank"
                rel="nofollow"
            >
                <div class="mass-media-logo">
                    <v-img max-width="140" style="object-fit: contain;" alt="mass-media-logo" :src="site.img" />
                </div>

                <div class="mass-media-link">
                    <div v-text="'Читать'" />
                    <v-icon v-text="mdiChevronRight" />
                </div>
            </a>
        </div>
    </div>
</template>
<script lang="ts">
import { mdiChevronRight } from "@mdi/js";
import {Pages} from "~/model/entities/pages";
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class MassMedia extends Vue {
    mdiChevronRight = mdiChevronRight;
    @Prop({type: String,default: ''}) title;
    @Prop() page: Pages;
    get sites(){
      const site = {
        [Pages.default] : [
          {
            img: require("@/assets/images/mass-media/tass-2x.png"),
            url: "https://tass.ru/ekonomika/9635247"
          },
          {
            img: require("@/assets/images/mass-media/rusbase.svg"),
            url:
              "https://rb.ru/interview/startupwed-pampadu/"
          },
          {
            img: require("@/assets/images/mass-media/vedo-2x.png"),
            url:
              "https://www.vedomosti.ru/finance/articles/2020/10/08/842641-strahovschiki-zhdut"
          },
          {
            img: require("@/assets/images/mass-media/komm-2x.png"),
            url: "https://www.kommersant.ru/doc/4520295"
          },
          {
            img: require("@/assets/images/mass-media/asn-2x.png"),
            url: "http://www.asn-news.ru/news/74769"
          },
          {
            img: require("@/assets/images/mass-media/forbes.svg"),
            url:
              "https://www.forbes.ru/karera-i-svoy-biznes-photogallery/414323-diagnostika-bolezni-parkinsona-i-lyuksovyy-sekond-hend-komu?photo=5&fbclid=IwAR3dHJFx9Gvp_PyyYoXc_dJ_qgnaYM9cCfiHnL1C24k0ySXDuRdR95haOO8"
          }
        ],
        [Pages.Agents] : [
          {
            img: require("@/assets/images/mass-media/vc-2x.png"),
            url: "https://vc.ru/services/307524-kompaniya-admitad-kupila-servis-onlayn-strahovaniya-pampadu"
          },
          {
            img: require("@/assets/images/mass-media/rusbase.svg"),
            url:
              "https://rb.ru/interview/startupwed-pampadu/"
          },
          {
            img: require("@/assets/images/mass-media/vedo-2x.png"),
            url:
              "https://www.vedomosti.ru/finance/articles/2020/10/08/842641-strahovschiki-zhdut"
          },
          {
            img: require("@/assets/images/mass-media/komm-2x.png"),
            url: "https://www.kommersant.ru/doc/4520295"
          },
          {
            img: require("@/assets/images/mass-media/asn-2x.png"),
            url: "http://www.asn-news.ru/news/74769"
          },
          {
            img: require("@/assets/images/mass-media/forbes.svg"),
            url:
              "https://www.forbes.ru/karera-i-svoy-biznes-photogallery/414323-diagnostika-bolezni-parkinsona-i-lyuksovyy-sekond-hend-komu?photo=5&fbclid=IwAR3dHJFx9Gvp_PyyYoXc_dJ_qgnaYM9cCfiHnL1C24k0ySXDuRdR95haOO8"
          }
        ],
      }
      return site[this.page] ?? site[Pages.default];
    }
}
</script>
<style lang="scss">
.mass-media {
    text-align: center;
    padding: 80px 0;
    position: relative;
    @media (max-width: $w-sm) {
      padding: 35px 0;
    }
}
.mass-media-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    max-width: 1200px;
    margin: auto;
}
.mass-media-card {
    flex-basis: 300px;
    margin: 20px 35px;
    display: flex;
    flex-flow: column;
}
.mass-media-logo {
    border: 1px solid #c0c2cc;
    min-height: 161px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 6px;
    transition: border-color 0.3s;
    img {
        max-height: 70px;
        max-width: 140px;
        height: 100%;
        width: 100%;
    }
    @media (max-width: $w-sm) {
        min-height: 100px;
    }
}
.mass-media-card:hover {
    .mass-media-link:not(#ovrd) {
        color: #8e68ff !important;
        .v-icon {
            transform: translateX(6px);
            filter: drop-shadow(-5px 0px 1px #8e68ff57);
            color: #8e68ff;
        }
    }
    .mass-media-logo {
        border: 1px solid #8e68ff;
    }
}
.mass-media-link:not(#ovrd) {
    font-weight: bold;
    font-size: 16px;
    color: #b0b0b0 !important;
    display: flex;
    justify-content: center;
    transition: color 0.3s;
    .v-icon {
        color: #b0b0b0;
    }
}
</style>
