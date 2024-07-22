<template>
    <div class="generic-container-1260">
        <div class="regnow-banner banner-variant-3 my-10">
            <div>
                <img
                    :style="{ height: $vuetify.breakpoint.xs ? '120px' : '' }"
                    style="width: 100%"
                    src="@/assets/images/common/regnowBanner/pampadovich.png"
                    alt="pampadovich"
                />
            </div>
            <div>
                <slot name="text">Легко разобраться в продукте!</slot>
            </div>
            <zond-btn
                v-text="btnText"
                :style="{ width: $vuetify.breakpoint.xs ? '100%' : '' }"
            />
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class RegnowBannerV3 extends Vue {
    @Prop({ type: String, default: () => "Зарегистрироваться" }) btnText;
}
</script>
<style lang="scss">
.banner-variant-3 {
    grid-template-columns: minmax(100px, 200px) 1fr 200px;
    padding: 40px 100px;
}
</style>
