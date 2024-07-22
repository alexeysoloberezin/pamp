<template>
  <div class="mobile-menu-expand">
    <div
      class="mobile-menu-expand-header"
      :style="haveChildrenLinks ? 'cursor: pointer' : ''"
      @click="panel = !panel"
    >
      <a
        v-if="link.url && link.url.startsWith('http')"
        class="a"
        style="line-height: 34px"
        :href="link.url"
        :key="link.url"
        v-text="link.title"
      />
      <nuxt-link
        v-else-if="link.url"
        style="line-height: 34px"
        :style="{color: link.url === '/promo' ? '#ff2b2b !important' : '' }"
        class="a"
        :to="link.url"
        v-text="link.title"
        @click.native="$emit('close')"
      />
      <div v-else-if="link.children && link.children.length" v-text="link.title" class="a" style="line-height: 34px"/>
      <v-icon
        v-if="haveChildrenLinks"
        style="margin-left: auto"
        v-text="chevron"
        :class="{ r180: panel }"
      />
    </div>
    <v-expand-transition>
      <div v-if="panel">
        <div v-if="link.hashnav">
          <div
            class="mobile-menu-expand-link"
            v-for="(a, i) in link.hashnav"
            :key="a.title"
            v-text="a.title"
            @click="openHash(a.code)"
          />
        </div>
        <div v-else-if="link.children">
          <div class="mobile-menu-expand-link"
               v-for="(children,ind) in link.children"
               :key="children.title"
               :class="{'product-link': isProductLink}"
          >
            <span @click="openChildrenLink(children.url)">
              {{ children.title }}
            </span>
            <template v-if="children.children">
              <nuxt-link v-for="el in children.children" :key="el.title" class="pl-9 pt-2 d-flex" :to="el.url">
                {{ el.title  }}
              </nuxt-link>
            </template>
          </div>
        </div>
      </div>
    </v-expand-transition>
  </div>
</template>
<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import {mdiChevronDown} from "@mdi/js";

@Component
export default class MobileMenuLink extends Vue {
  openHash(code) {
    const currentLink = this.$route.name == this.link.url;
    if (currentLink) this.$emit("scroll-to", code);
    else {
      this.$router.push(`${this.link.url}#${code}`);
      this.$emit("close");
    }
  }

  openChildrenLink(url) {
    this.$router.push(url);
    this.$emit("close");
  }

  get isProductLink(){
    return this.link.title.toLowerCase() == 'продукты';
  }
  get haveChildrenLinks() {
    const link = this.link
    return link.hashnav && link.hashnav.length || link.children && link.children.length
  }

  chevron = mdiChevronDown;
  @Prop() link: any;
  panel = false;
}
</script>
