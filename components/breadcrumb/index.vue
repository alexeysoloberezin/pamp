<template>
  <v-breadcrumbs class="mt-10 breadcrumbs pb-3 pt-0" style="width: fit-content;display: none">
    <v-breadcrumbs-item
      v-for="(item, i) in breadcrumbs"
      :key="i"
      :to="item.url"
      :disabled="i === breadcrumbs.length - 1 || item.disabled">
      {{ item.title }}
    </v-breadcrumbs-item>
  </v-breadcrumbs>
</template>
<script lang="ts">

import {Component, Vue, Watch} from "vue-property-decorator";
import {isHeaderLink, isHeaderMenu, Pages} from "~/model/Navigation";

type TBreadcrumb = { title: string, url: string, disabled?: boolean };
type TBreadcrumbs = TBreadcrumb[];

@Component
export default class Breadcrumbs extends Vue {
  breadcrumbs: TBreadcrumbs = [];

  @Watch('$route.path', {immediate: true})
  onRouteChange() {
    this.createBreads();
  }

  createBreads() {
    const firstLink = {title: 'Pampadu', url: '/'}
    const page = Pages.getAll().find(page => {
      if (isHeaderLink(page)) {
        return page.url === this.$route.path;
      } else if (isHeaderMenu(page)) {
        return page.children.find(child => child.url === this.$route.path);
      }
      return false
    });
    if (page && isHeaderLink(page)) {
      this.breadcrumbs = [firstLink, {title: page.title, url: page.url}];
    } else if (page && isHeaderMenu(page)) {
      const child = page.children.find(child => child.url === this.$route.path);
      if (child) {
        this.breadcrumbs = [firstLink, {title: page.title, url: "#", disabled: true}, {
          title: child.title,
          url: child.url
        }];
      }
    }
  }
}
</script>
<style lang="scss">
.breadcrumbs.v-breadcrumbs {
  li {
    padding: 0;

    &:after {
      content: '›';
      font-size: 18px;
      margin: -2px 10px 0;
    }

    &:last-child:after {
      content: none;
    }

    &:last-child {
      opacity: 0.6;
    }
  }
}
</style>
