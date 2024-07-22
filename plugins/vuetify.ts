import { Framework } from 'vuetify'
declare module 'vue/types/vue' {
  interface Vue {
    $vuetify: Framework
  }
}
const ru = {
    badge: "знак",
    close: "Закрыть",
    noDataText: "Отсутствует",
};
export default {
    breakpoint: {
        scrollBarWidth: 0,
        thresholds: {
            xs: 601,
            sm: 1001,
            md: 1265,
            lg: 1905,
        },
    },
    icons: {
        iconfont: "mdiSvg",
    },
    lang: {
        locales: { ru },
        current: "ru",
    },
    theme: {
        themes: {
            light: {
                primary: "#7245ff",
            },
        },
    },
};
