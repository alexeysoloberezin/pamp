<template>
  <LegalDoc/>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import LegalDoc from "~/components/legal/LegalDoc"
import ApiHelper from "~/utils/ApiHelper";
import {Meta} from "~/utils/meta";


@Component({
  components: {LegalDoc}
})
export default class Legal extends Vue {
  head() {
    return {
      title: "Юридические документы",
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
          content: "Юридические документы включают в себя: Правила платформы, Политика конфиденциальности, Договор оферты для физ.лиц, Договор оферты для юр.лиц"
        },
        Meta.generateOgUrl(this.$route),
      ],
    };
  }
}
</script>

<style lang="scss">
.legal-container {
  max-width: 1160px;
  margin: 0 auto;
  padding: 46px 0 54px 0;
  @media (max-width: $w-md) {
    padding: 29px 20px 42px 20px;
  }
  @media (max-width: $w-sm) {
    padding: 29px 20px 42px 20px;
  }
}
</style>
