<template>
  <v-app>
    <v-main>
      <Header />
      <BreadCrumbs />
      <Nuxt/>
      <Footer />
      <CarrotQuest/>
    </v-main>
  </v-app>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import Header from "@/components/common/Header.vue";
import Footer from "@/components/common/Footer.vue";
import CarrotQuest from "@/components/common/CarrotQuest.vue";
import objectFitImages from "object-fit-images";
import BreadCrumbs from "~/components/breadcrumb/index.vue";
import ApiHelper from "~/utils/ApiHelper";

@Component({components: {BreadCrumbs, Header, Footer, CarrotQuest}})
export default class MainLayout extends Vue {
  head() {
    return {
      link: [
        {
          rel: 'canonical',
          hid: 'canonical',
          href: ApiHelper.origin + this.$route.path
        }
      ],
      meta: [
        {property: 'og:url', hid: 'og:url', content: ApiHelper.origin + this.$route.fullPath}
      ],
    }
  }

  query = '';
  ref = this.$route.params.id ?? '';
  regLink = `https://agents.pampadu.ru/#/register`;

  get pathNameMap() {
    return [
      {path: "/agents/osago-gruzoviki", name: "truck"},
      {path: "/agents/", name: "agents"},
      {path: "/reviews/", name: "reviews"},
      {path: "/webtools/", name: "webtools"},
      {path: "/partners/", name: "partners"},
      {path: "/blog/", name: "blog"},
    ];
  }

  initializeQuery() {
    this.query = window.location.search;

    if (this.query) this.saveQuery();
    if (this.ref) this.saveRef();


    (this.$root as any).query = this.query;
    (this.$root as any).zondScr = this.zondScr;
    (this.$root as any).regLink = this.regLink;
  }

  get zondScr() {
    let trackStr =
      "ym(55127530, 'reachGoal', 'CONVKNOPOK');" + //old
      "dataLayer.push({" +
      "      'event': 'UA event'," +
      "      'eventCategory': 'landing_registration'," +
      "      'eventAction': 'Click'," +
      "      'eventLabel': 'Регистрация'" +
      "    });" +
      "ym(55127530, 'reachGoal', 'landing_registration');" +
      "gtag('event', 'landing_registration', {'event_category' : 'landing_registration'});" +
      "fbq('trackCustom', 'landing_registration');" +
      "_tmr.push({ id: '3203019', type: 'reachGoal', goal: 'landing_registration', value: })";

    let path = window.location.pathname;
    const eventPostfix = this.pathNameMap.find((x) =>
      path.startsWith(x.path)
    )?.name;
    if (!!eventPostfix) {
      trackStr += `ym(55127530, 'reachGoal', 'landing_registration_${eventPostfix}');
            gtag('event', 'landing_registration_${eventPostfix}', {'event_category' : 'landing_registration'});
            fbq('trackCustom', 'landing_registration_${eventPostfix}');`;
    }
    return trackStr;
  }

  created() {
    if (typeof window !== "undefined") this.initializeQuery();

  }


  mounted() {
    // ie 11 fix
    objectFitImages();
  }

  saveQuery() {
    localStorage.setItem("query", JSON.stringify(this.$route.query));
  }

  saveRef() {
    if (this.ref.startsWith('a')) {
      let query = localStorage.getItem("query");
      try {
        query = {...JSON.parse(query), refs: this.ref};
        localStorage.setItem("query", JSON.stringify(query));
        localStorage.setItem("refDate", new Date().toISOString());
      } catch (e) {
      }
    }
  }

  loadRef() {
    let ref = localStorage.getItem("ref");
    let refDate = localStorage.getItem("refDate");
    console.log("loading ref...", ref);
    if (ref && refDate) {
      console.log("ref and refDate exist in store");
      if (ref != "a1" || this.lessThanDays(new Date(refDate), 14)) {
        console.log("not a1 or not expired!");
        const firstSymbol = this.query.startsWith("?") ? "&" : "?";
        const refString = `refs=${ref}`;
        if (!this.query.includes(refString))
          this.query = `${this.query}${firstSymbol}${refString}`;
      } else {
        console.log("a1 or too old :(");
        localStorage.removeItem("ref");
        localStorage.removeItem("refDate");
      }
    }
  }

  lessThanDays(date, days) {
    const daysTime = 1000 * 60 * 60 * 24 * days;
    const timeAgo = Date.now() - daysTime;

    return date > timeAgo;
  }
}
</script>
<style>
.application--wrap {
  overflow: hidden;
}

body {
  font-family: Roboto, sans-serif;
  overflow-x: hidden; /* iOS */
  -webkit-overflow-scrolling: touch;
}
</style>
