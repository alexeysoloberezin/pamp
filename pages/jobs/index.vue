<template>
  <div>
    <HeaderSub :block-links="blocks"/>
    <HRHead @sendResume="dialog = true"/>
    <img class="hr-middle-image" src="@/assets/images/hr/group-photo.png"/>
    <WhatWeDo/>
    <OurDevelopment/>
    <OurMission @sendResume="dialog = true"/>
    <OurPeople/>
    <OurPlans/>
    <OurLocation/>
    <MassMedia style="background: #f9f9fc"/>
    <OurJobs/>
    <v-dialog
      content-class="elevation-0"
      :fullscreen="$vuetify.breakpoint.xsOnly"
      v-model="dialog"
      max-width="1000"
    >
      <div style="position: relative; height: 100%">
        <v-icon
          dark
          @click="dialog = false"
          class="c-pointer"
          style="position: absolute; right: 4px; top: 4px"
          v-text="mdiClose"
        />
        <SendResume
          :postSuccessful.sync="postSuccessful"
          v-if="dialog"
        />
      </div>
    </v-dialog>
    <div class="hr-indents" style="position: relative">
      <SendResume :postSuccessful.sync="postSuccessful"/>
    </div>
  </div>
</template>
<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import Footer from "@/components/common/Footer.vue";
import HeaderSub from "@/components/common/HeaderSub.vue";
import HRHead from "@/components/HR/HRHead.vue";
import WhatWeDo from "@/components/HR/WhatWeDo.vue";
import OurDevelopment from "@/components/HR/OurDevelopment.vue";
import OurMission from "@/components/HR/OurMission.vue";
import OurPeople from "@/components/HR/OurPeople.vue";
import OurPlans from "@/components/HR/OurPlans.vue";
import OurLocation from "@/components/HR/OurLocation.vue";
import MassMedia from "@/components/common/MassMedia.vue";
import OurJobs from "@/components/HR/OurJobs.vue";
import SendResume from "@/components/HR/SendResume.vue";
import {mdiClose} from "@mdi/js";
import AnalyticsService from "~/core/Analytics/Analytics";
import ApiHelper from "~/utils/ApiHelper";
import {Meta} from "~/utils/meta";
import {createJsonLd} from "~/utils/createJSON_LD";

@Component({
  components: {
    HeaderSub,
    Footer,
    HRHead,
    WhatWeDo,
    OurDevelopment,
    OurMission,
    OurPeople,
    OurPlans,
    OurLocation,
    MassMedia,
    OurJobs,
    SendResume,
  },
})
export default class HRMain extends Vue {
  blocks = [
    {code: "au", title: "О компании"},
    {code: "team", title: "Команда"},
    {code: "cond", title: "Условия"},
    {code: "jobs", title: "Вакансии"},
  ];
  postSuccessful = false;
  mdiClose = mdiClose;
  dialog = false;

  created() {
    if (process.client) AnalyticsService.visitCareer();
  }

  head() {
    return {
      title: "Работа в Пампаду для настоящих партнеров",
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
          content:
            "Мы собрали вакансии от Пампаду.",
        },
        Meta.generateOgUrl(this.$route),
      ],
      script: [
        createJsonLd([
          {
            name: "Карьера",
            path: "jobs"
          }
        ]),
      ],
    };
  }
}
</script>
<style lang="scss">
.hr-h1 {
  font-family: Montserrat;
  font-weight: bold;
  font-size: 40px;
  line-height: 1;
  color: #000;
  @media (max-width: $w-sm) {
    margin-bottom: 20px;
  }
}

.white--text {
  .hr-h1,
  .hr-text {
    color: #fff;
  }
}

.hr-text {
  font-size: 25px;
  line-height: 1.33;
}

.hr-indents,
.hr-title-text-block {
  padding: 48px 140px;
  max-width: 1440px;
  margin: auto;
  @media (max-width: $w-md) {
    padding: 48px 80px;
  }
  @media (max-width: $w-sm) {
    padding: 48px 60px;
  }
  @media (max-width: $w-xs) {
    padding: 48px 10px;
  }
  // & + .hr-indents,
  // & + .hr-title-text-block {
  //     padding-top: 0;
  // }
}

.hr-title-text-block {
  display: flex;
  position: relative;
  // max-width: 1440px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-width: $w-sm) {
    flex-flow: column;
  }
}

.hr-middle-image {
  width: 100%;
  height: auto;
  margin-bottom: -7px;
  max-height: 800px;
  @media (max-width: $w-sm) {
    min-height: 340px;
    object-fit: cover;
    font-family: "object-fit: cover;";
  }
  @media (max-width: $w-xs) {
    min-height: 260px;
  }
}
</style>
