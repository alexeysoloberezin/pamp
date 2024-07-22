<template>
    <div class="tryit">
        <v-layout
            :column="$vuetify.breakpoint.xs"
            :align-center="$vuetify.breakpoint.smAndUp"
            class="generic-container-1260 city-container"
        >
            <div
                :style="{
                    marginRight: $vuetify.breakpoint.smAndUp ? '70px' : '',
                    flex: $vuetify.breakpoint.xs ? '0 1 auto' : '0 1 600px',
                }"
                style="image-rendering: -webkit-optimize-contrast"
            >
                <img
                    class="tryit-bg"
                    src="@/assets/images/city/tryit/bg-left.webp"
                    alt="pampadu"
                />
            </div>
            <v-flex
                :style="{ marginTop: $vuetify.breakpoint.xs ? '20px' : 'none' }"
            >
                <h2 class="tryit-description">
                    Попробуйте и
                    <span
                        style="color: #8e68ff; font-weight: bold"
                        v-text="'начните зарабатывать'"
                    />
                    на страховании
                    <span
                        style="color: #8e68ff; font-weight: bold"
                        v-text="'от 40 тыс. руб.'"
                    />
                    уже сегодня!
                </h2>
                <zond-btn class="tryit-btn" v-text="'Зарегистрироваться'" />
            </v-flex>
        </v-layout>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { CityModel } from "~/model/entities/city";
@Component
export default class TryIt extends Vue {
    @Prop(Object) city: CityModel;
}
</script>
<style lang="scss">
.tryit {
    padding: 70px 0;
    position: relative;
    @media (max-width: $w-sm) {
        padding: 25px 0 0;
    }
    &:after {
        position: absolute;
        top: 15%;
        right: 15%;
        content: url("~@/assets/images/city/tryit/bg-right.svg");
        z-index: 0;
        @media (max-width: $w-sm) {
            display: none;
        }
    }
}
.tryit {
    &-bg {
        max-width: 100%;
        box-shadow: -5px 4px 44px 0px rgba(196, 196, 196, 0.75);
    }
    &-description {
        max-width: 464px;
        font-size: 30px;
        font-family: Montserrat, sans-serif;
        @media (max-width: $w-md) {
            font-size: 20px;
        }
    }
    &-btn {
        margin: 35px 0 0;
    }
}
</style>
