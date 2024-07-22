<template>
  <client-only>
    <a
      :href="regLink"
      class="btn text-center"
      @click="register"
      @auxclick="register"
    />
  </client-only>
</template>
<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import AnalyticsService from "~/core/Analytics/Analytics";

@Component
export default class ZondBtn extends Vue {
  @Prop(Boolean) juridical;
  @Prop({ default: () => ''}) href: string;
  query = '';
  searchParams: URLSearchParams = new URLSearchParams();

  get regLink() {
    const query = this.query ?? '';
    //Кверя на кастомной ссылке не нужна, т.к там мы ее не будем парсить
    if (!this.href) return `${(this.$root as any).regLink}${query}`
    return this.href;
  }

  loadQuery() {
    let queryItem : any = localStorage.getItem('query');
    try {
        queryItem = JSON.parse(queryItem);
        for (let key in queryItem) {
          this.searchParams.set(key, queryItem[key])
        }
        this.query = `?${this.searchParams.toString()}`
      } catch (e){}
  }

  removeRefLinkFromStorage() {
    let queryItem : any = localStorage.getItem('query');
    try {
      queryItem = JSON.parse(queryItem);
      delete queryItem.refs;
      localStorage.setItem('query', JSON.stringify(queryItem));
      this.$router.push({
        path: this.$route.path,
        query: {...this.$route.query,refs: undefined}
      })
    } catch (e) {}
  }

  register(e) {
    e.preventDefault();
    AnalyticsService.registration();
    window.open(this.regLink, '_blank')
    this.removeRefLinkFromStorage();
  }

  created() {
    if (typeof window !== 'undefined') this.loadQuery();
  }
}
</script>
