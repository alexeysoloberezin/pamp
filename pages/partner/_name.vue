<template>
  <div>
    <Intro :ic="currentIc"/>
    <AboutPampadu :ic="currentIc"/>
    <AboutIc :ic="currentIc"/>
    <Income :ic="currentIc"/>
    <Commission :ic="currentIc"/>
    <Regions :ic="currentIc"/>
    <Regnow :ic="currentIc"/>
    <Capability v-if="showCapability" :ic="currentIc"/>
    <Slider :ic="currentIc"/>
    <Articles :posts="posts" title="Регулярно пишем на тему финансовых офферов"/>
    <Telegram v-if="showTelegram"/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import Intro from "@/components/ic-partner/Intro.vue";
import AboutPampadu from "@/components/ic-partner/AboutPampadu.vue";
import AboutIc from "@/components/ic-partner/AboutIc.vue";
import Income from "@/components/ic-partner/Income.vue";
import Commission from "@/components/ic-partner/Commission.vue";
import Regions from "@/components/ic-partner/Regions.vue";
import Regnow from "@/components/ic-partner/Regnow.vue";
import Slider from "@/components/ic-partner/Slider.vue";
import {getPartner, IcModel} from "~/model/entities/ic-partner";
import HeaderSub from "@/components/common/HeaderSub.vue";
import Capability from "~/components/ic-partner/Capability.vue";
import Telegram from "~/components/common/Telegram/Telegram.vue";
import {IcUrl} from "~/urls";
import ApiHelper from "~/utils/ApiHelper";
import {Meta} from "~/utils/meta";
import {createJsonLd} from "~/utils/createJSON_LD";
import Articles from "~/components/common/blog/Articles.vue";
import PostsService from "~/services/PostsService";
import {postsTags, postsTagsForRequest} from "~/model/Article";

@Component({
  components: {
    Articles,
    Telegram,
    AboutIc,
    HeaderSub,
    Intro,
    AboutPampadu,
    Income,
    Commission,
    Regions,
    Regnow,
    Capability,
    Slider,
  },
  head(this: PartnerMain): object {
    return {
      title:
        this.currentIc?.metaTitle ??
        `Стать страховым агентом “${this.currentIc?.name}“ и зарабатывайте на страховании`,
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
          content: `Станьте страховым агентом компании “${this.currentIc?.name}“ уже сегодня и дистанционно зарабатывайте на всех видах страхования. От ОСАГО до страхования ипотеки.`,
        },
        Meta.generateOgUrl(this.$route),
      ],
      script: [
        createJsonLd([
          {
            name: this.currentIc?.name,
            path: `partner/${this.selectedIc}`,
          }
        ]),
      ],
    };
  },
  fetch(this: PartnerMain): Promise<void> | void {
    let name = this.$route.params.name;
    this.selectedIc = name.toLowerCase();
  },
  async asyncData({params, redirect }) {
    if(params?.name === 'reso-garantiya'){
      redirect('/partners');
    }

    const posts = await PostsService.getPosts(postsTagsForRequest[postsTags.News])
    return {
      posts
    };
  },
  middleware: "isPartnerExists",
})
export default class PartnerMain extends Vue {
  posts = [];
  icUrl = IcUrl;
  blocks = [];
  selectedIc = "";

  get currentIc(): IcModel {
    return getPartner(this.selectedIc as IcUrl);
  }

  get showCapability() {
    const ics = [
      IcUrl.Ingosstrah,
      IcUrl.Reso,
      IcUrl.Sogaz,
      IcUrl.Vsk,
      IcUrl.Tinkoff,
    ];
    return ics.includes(this.selectedIc as IcUrl);
  }

  get showTelegram() {
    const ics = [
      IcUrl.Sogaz,
      IcUrl.Vsk,
      IcUrl.Tinkoff,
      IcUrl.Reso,
      IcUrl.Ingosstrah,
    ];
    return ics.includes(this.selectedIc as IcUrl);
  }
}
</script>
