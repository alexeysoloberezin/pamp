<template>
    <div class="generic-container-1260">
        <div class="generic-benefits">
            <div class="common-benefit">
                <BenefitItem
                    v-for="(item, index) in items"
                    :item="item"
                    :key="index"
                    :index="index"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import BenefitItem from "~/components/common/products/BenefitItem.vue";

@Component({
    components: { BenefitItem },
})
export default class Benefits extends Vue {
    @Prop({ default: () => [] }) items: Benefit[];
}
type Benefit = {
    icon: string;
    title: string;
};
</script>

<style lang="scss">
.generic-benefits {
    padding: 45px 0;
    font-size: 20px;
}
</style>
