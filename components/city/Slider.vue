<template>
    <div class="city-slider">
        <div class="generic-container-1260 city-container">
            <h2 class="glide-title">
                В каких компаниях можно работать страховым агентом в
                {{ city.title }}?
            </h2>
            <h3 class="glide-description">
                В каждом городе свой список страховых компаний и филиалов. Начав
                работу через единый личный кабинет Пампаду, вы получаете доступ
                сразу ко всем страховым компания независимо от региона.
            </h3>
        </div>
        <ICSlider />
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { CityModel } from "~/model/entities/city";
import ICSlider from "~/components/common/slider/ICSlider.vue";

@Component({ components: { ICSlider } })
export default class Slider extends Vue {
    @Prop(Object) city: CityModel;
}
</script>

<style lang="scss">
.city-slider {
    overflow: hidden;
    background: #f9f9fc;
    .glide {
        &-title {
            text-align: center;
            font-weight: bold;
            margin: 0 auto;
            padding: 80px 0 0;
            font-family: Montserrat, sans-serif;
            font-size: 35px;
            @media (max-width: $w-md) {
                font-size: 19px;
                padding: 50px 0 0;
            }
        }
        &-description {
            text-align: center;
            max-width: 1000px;
            margin: 25px auto;
            opacity: 0.5;
            font-size: 20px;
            @media (max-width: $w-md) {
                font-size: 14px;
                max-width: 700px;
                margin: 15px auto;
            }
        }
    }
}
</style>
