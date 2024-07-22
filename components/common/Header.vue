<template>
  <header class="header">
    <div ref="padder" id="padder" class="header-padder" v-html="'&nbsp;'"/>
    <div
      v-if="isDev"
      style="
                background: #0f0;
                padding: 0 5px;
                position: fixed;
                top: 120px;
                left: 50%;
                transform: translateX(-50%);
                z-index: 99999999991;
            "
      v-text="$vuetify.breakpoint.name"
    />
    <div v-if="$vuetify.breakpoint.mdAndUp" class="w-100 header-content">
      <div class="w-100 header-content-inner" style="z-index: 1">
        <div class="headbar-sideitems" style="flex: 1 0 auto">
          <img
            @click="gotoMain()"
            alt="logo"
            class="logo"
            :src="logoImg"
            :class="{ 'new-year': isMerry }"
          />
        </div>
        <nav class="headbar-centeritems" style="flex: 1 0 auto">
          <template v-for="(link, index) in pages">
                        <span
                          v-if="link.url && !link.hideInHeader"
                          :key="index"
                          style="display: contents"
                        >
                            <a
                              v-if="link.url.startsWith('http')"
                              :href="link.url"
                              class="a"
                              v-text="link.title"
                            />
                            <nuxt-link
                              v-else
                              :to="link.url"
                              class="a"
                              v-text="link.title"
                            />
                        </span>
            <!-- open-on-hover -->
            <v-menu
              v-else-if="link.children"
              :key="link.title"
              attach
              open-on-hover
              bottom
              offset-y
              tile
              close-delay="200"
              content-class="headbar-menu"
              :nudge-left="(196 - 75) / 2"
            >
              <!-- (menu width - attach elem width) / 2 -->
              <template v-slot:activator="{ on, attrs }">
                <div
                  class="a"
                  v-bind="attrs"
                  v-on="on"
                  v-text="link.title"
                />
              </template>
              <div class="headbar-menu-inner">
                <div class="headbar-menu-triangle"/>
                <template v-for="sublink in link.children">
                <span
                  v-if="sublink.url && !sublink.hideInHeader"
                  :key="sublink.url"
                  style="display: contents"
                >
                    <span
                      v-if="sublink.children"
                      class="sub-menu-wrp"
                    >
                      <a
                        v-if="sublink.url.startsWith('http')"
                        class="headbar-menu-link"
                        :href="sublink.url"
                        v-text="sublink.title"
                      />
                      <nuxt-link
                        v-else
                        class="headbar-menu-link"
                        :to="sublink.url"
                        v-text="sublink.title"
                      />
                      <div class="headbar-menu-triangle-right"></div>
                      <span class="sub-menu">
                          <nuxt-link
                            v-for="(subMenuLink,index) in sublink.children"
                            :key="index"
                            class="headbar-menu-link"
                            :to="subMenuLink.url"
                            v-text="subMenuLink.title"
                          />
                      </span>
                    </span>
                    <a
                      v-else-if="
                            sublink.url.startsWith('http')
                        "
                      class="headbar-menu-link"
                      :href="sublink.url"
                      v-text="sublink.title"
                    />
                    <nuxt-link
                      v-else
                      class="headbar-menu-link"
                      :to="sublink.url"
                      v-text="sublink.title"
                    />

                </span>
                </template>
              </div>
            </v-menu>
          </template>
        </nav>
        <div class="headbar-sideitems" style="flex: 1 0 auto">
          <a
            class="btn header-btn-inverted"
            :href="`https://agents.pampadu.ru/#/auth${$root.query}`"
            v-text="'Вход'"
          />
          <zond-btn class="ml-2 btn" v-text="'Регистрация'"/>
        </div>
      </div>
    </div>
    <div v-else class="w-100 header-content">
      <div class="w-100 header-content-inner">
        <div class="headbar-sideitems" style="flex: 1 0 auto">
          <v-img
            class="logo"
            :src="logoImg"
            :class="{ 'new-year': isMerry }"
            @click="gotoMain()"
            contain
            width="216"
            height="46"
          >
          </v-img>
        </div>
        <v-spacer/>
        <div class="headbar-sideitems" style="flex: 0 0 auto">
                    <span
                      @click="menuOpen = !menuOpen"
                      :class="{ opened: menuOpen }"
                      class="sm-headbar-control"
                    >
                        <span
                          v-for="i in 3"
                          :key="i"
                          :class="`sm-bar sm-bar${i}`"
                        />
                    </span>
        </div>
      </div>
    </div>
    <client-only>
      <v-fade-transition>
        <mobile-menu
          v-show="menuOpen && $vuetify.breakpoint.smAndDown"
          @scroll-to="(code) => scrollTo(code)"
          @close="menuOpen = false"
          :pages="pages"
        />
      </v-fade-transition>
    </client-only>
  </header>
</template>
<script lang="ts">
import {Vue, Component, Prop} from "vue-property-decorator";
import MobileMenu from "./MobileMenu.vue";
import {Pages, HeaderLink, HeaderMenu} from "~/model/Navigation";

@Component({components: {MobileMenu}})
export default class Header extends Vue {
  @Prop({default: () => []}) blockLinks: {
    code: string;
    title: string;
  }[];

  menuOpen = false;
  isDev = process.env.NODE_ENV === "development";
  isTop = true;

  get pages(): Array<HeaderLink | HeaderMenu> {
    const query = (this.$root as any).query;

    const pages = Pages.getHeaderPages();

    let morePages = [
      {url: "https://pampadu.ru/blog/" + (query ?? ""), title: "Блог"},
    ];

    if (
      this.$vuetify.breakpoint.width < 1120 &&
      this.$vuetify.breakpoint.mdAndUp
    ) {
      pages.push({title: "О Pampadu", children: morePages});
    } else morePages.forEach((page) => pages.push(page));

    return pages;
  }

  scrollTo(query) {
    this.menuOpen = false;
    document.querySelector(query)?.scrollIntoView?.({
      block: "start",
      inline: "start",
      behavior: "smooth",
    });
  }

  gotoMain() {
    if (this.$route.name == "index") this.scrollTo("#padder");
    else this.$router.push({path: "/"});
  }

  isChildrenLinkActive(index: number): boolean {
    let menu = this.pages[index] as HeaderMenu;
    let links = menu.children.map((link) => link.url);
    return links.includes(this.$route.path);
  }

  logoImg = null;
  isMerry = false;

  created() {
    this.isMerry = this.isMerryPeriod();
    const logoSuffix = this.isMerry ? "-newYear" : "";
    this.logoImg = require(`@/assets/images/logo${logoSuffix}.v2.svg`);
  }

  isMerryPeriod() {
    let today = new Date();
    let now = today.getTime();
    const year = today.getFullYear();
    let preNewYearStart = new Date().parseISO(`${year}-12-1`).getTime();
    let preNewYearEnd = new Date().parseISO(`${year}-12-31`).getTime();
    let postNewYearStart = new Date().parseISO(`${year}-01-01`).getTime();
    let postNewYearEnd = new Date().parseISO(`${year}-01-29`).getTime();
    if (
      (now > preNewYearStart && now < preNewYearEnd) ||
      (now > postNewYearStart && now < postNewYearEnd)
    )
      return true;
    return false;
  }
}
</script>
<style lang="scss">
.sm-headbar-control {
  width: 24px;
  height: 16px;
  position: relative;
  cursor: pointer;

  .sm-bar {
    border-radius: 2px;
    width: 24px;
    height: 3px;
    background: #2d2645;
    position: absolute;
    transition: transform 150ms, opacity 150ms;
  }

  .sm-bar1 {
    top: 0px;
    transform: translateY(0px) rotate(0deg);
  }

  .sm-bar2 {
    top: 50%;
    transform: translateY(-50%);
    opacity: 1;
  }

  .sm-bar3 {
    bottom: 0px;
    transform: translateY(0px) rotate(0deg);
  }

  &.opened {
    .sm-bar1 {
      transform: translateY(7px) rotate(-45deg);
    }

    .sm-bar2 {
      opacity: 0;
    }

    .sm-bar3 {
      transform: translateY(-6px) rotate(45deg);
    }
  }
}

.logo {
  width: 216px;
  transition: width 150ms;
  cursor: pointer;
  @media (max-width: $w-md) {
    max-width: 150px !important;
    width: auto;
  }
  @media (max-width: $w-sm) {
    width: 120px !important;
  }

  &.new-year {
    width: auto;
    @media (min-width: $w-sm + 1px) {
      max-height: 56px;
      margin-top: -16px;
    }
    @media (max-width: $w-sm) {
      height: 56px;
      margin-top: -12px;
    }
  }
}

.stealth-btn {
  padding: 13px 26px;
  @media (max-width: $w-md) {
    padding: 13px 15px;
  }

  &:after {
    content: "";
    opacity: 0;
    transition: box-shadow 150ms, opacity 150ms;
  }

  color: black;
  text-decoration: none;
  transition: color 200ms, opacity 150ms;

  &:hover {
    color: #7f3ae9;
  }
}

.header-content {
  position: fixed;
  z-index: 100;
  top: 0;
  background-color: #fff;
  border-bottom: 1px solid #0001;
  // box-shadow: 0px 2px 32px rgba(146, 146, 146, 0.23);
}

.header-content-inner {
  height: 75px;
  max-width: 1210px;
  padding: 0 25px;
  @media (max-width: $w-sm) {
    height: 56px;
  }
  @media (max-width: $w-md) {
    padding: 0 20px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}

.headbar-centeritems {
  display: flex;
  justify-content: center;

  .a {
    padding: 26px 0;
    margin: 0 14px;
    font-weight: bold;
    font-size: 15px;
    color: #2d2645;
    box-shadow: inset 0px 0px 0px 0px #7f3ae9;
    transition: box-shadow 0.3s;

    &:hover {
      &:not(.nuxt-link-active) {
        color: #2d2645 !important;
      }

      box-shadow: inset 0px -2px 0px 0px #7f3ae9;
    }

    &.link-main-page:not(.link-main-page-active) {
      color: #2d2645;
    }

  }
}

.headbar-menu {
  box-shadow: 0px 5px 31px rgba(203, 207, 216, 0.6);
  margin-top: -2px;
  overflow: visible;
  contain: initial;
}

.headbar-menu-inner {
  display: flex;
  flex-flow: column;
  background: #fff;
  border-top: 2px solid #6a2be3;
}

.headbar-menu-triangle {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -5px);
  width: 0px;
  height: 0px;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 3px solid #6a2be3;
}

.headbar-menu-triangle-right {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translate(0%, -50%);
  width: 0px;
  height: 0px;
  border: 4px solid transparent;
  border-left: 4px solid #6a2be3;
}

.sub-menu {
  position: absolute;
  top: 0;
  left: 196px;
  background: #fff;
  display: none;
  list-style: none;
  box-shadow: -1px 0 3px rgba(0, 0, 0, 0.09);

  .headbar-menu-link {
    display: block;
  }
}

.sub-menu-wrp {
  display: flex;
  position: relative;
  //border-bottom: 2px solid #7f3ae9;
  &:hover .sub-menu {
    display: block;
  }

  .headbar-menu-triangle {
    bottom: -5px;
  }
}

.headbar-menu-link {
  position: relative;
  width: 196px;
  padding: 20px 22px;
  font-weight: bold;
  font-size: 16px;
  line-height: 1;
  background-image: linear-gradient(
      63.77deg,
      #6a2be3 0%,
      #a356f3 50%,
      #fff 100%
  );
  background-size: 200% 100%;
  background-position-x: 200%;
  transition: color 200ms, opacity 150ms, background-position-x 200ms !important;

  &:hover:not(#ovrd) {
    color: #ffffff !important;
    background-position-x: 0%;
  }


}


.headbar-sideitems {
  flex: 1;
  display: flex;
  font-weight: 700;
  font-size: 16px;
  position: relative;
  @media (max-width: $w-md) {
    font-size: 14px;
  }

  &:first-child {
    justify-content: flex-start;
  }

  &:last-child {
    justify-content: flex-end;
  }

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    // ie10-11 fix
    > a {
      height: 26px;
    }
  }
}

.headbar-sideitems,
.mobile-menu {
  // needed to use same btn styles in both menus
  .btn:not(#ovrd) {
    font-size: 13.5px;
    letter-spacing: 0.1px;
    font-weight: 500;
    padding: 9.5px 16px;
    border: 2px solid rgb(122, 73, 210);

    &.header-btn-inverted {
      color: #000 !important;
      font-weight: 600;
      border: 2px solid rgb(122, 73, 210);
      background: unset;
      background-color: #fff;
      transition: background-color 150ms ease-in, color 150ms ease-in;

      &:hover {
        background-color: #f9f1ff;
      }
    }
  }
}

.header-content,
.header-padder {
  background-color: #fff;
  height: 76px;
  @media (max-width: $w-sm) {
    height: 56px;
  }
}
</style>
