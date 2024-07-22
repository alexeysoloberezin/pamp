<template>
    <div class="slider">
        <h2 class="glide-title" v-html="icText.title"/>
        <ICSlider />
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import {IcModel} from "~/model/entities/ic-partner";
import { IcUrl } from "~/urls";
import ICSlider from "~/components/common/slider/ICSlider.vue";

type SliderText = {
  title: string;
}

@Component({ components: { ICSlider } })
export default class Slider extends Vue {
    @Prop(Object) ic: IcModel;

  get icText(): SliderText {
    const ics = {
      [IcUrl.Reso] : {
        title: `РЕСО и еще +16 других компаний доступно агентам на Пампаду`,
      },
    }
    const defaultText: SliderText = {
      title: `${this.ic.name} и еще +16 других компаний доступно агентам на Пампаду`
    }
    return ics[this.ic.url] ?? defaultText;
  }
}
</script>

<style lang="scss">
.slider {
    overflow: hidden;
    background: #f9f9fc;
    .glide-title {
        text-align: center;
        font-weight: bold;
        max-width: 720px;
        margin: 0 auto;
        padding: 80px 0 40px;
        font-family: Montserrat, sans-serif;
        font-size: 35px;
        @media (max-width: $w-sm) {
            font-size: 19px;
            padding: 50px 20px 25px;
        }
    }
}
</style>
