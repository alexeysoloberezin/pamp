<template>
    <div class="generic-container-1260 city-container">
        <v-layout
            :align-center="$vuetify.breakpoint.smAndUp"
            :align-start="$vuetify.breakpoint.smAndDown"
            :column="$vuetify.breakpoint.mdAndDown"
            class="about"
        >
            <h2 class="about-title">
                Пампаду —
                <span style="color: #7245ff">официальный партнер</span>
                страховых агентов в {{ city.title }}
            </h2>
            <v-layout :column="$vuetify.breakpoint.xs">
                <div class="about-item" v-for="(item, index) in items" :key="index">
                    <img
                        :src="item.logo"
                        alt="logo"
                        class="item-logo"
                        :style="{
                            transform:
                                $vuetify.breakpoint.mdAndDown && index !== 1
                                    ? 'translateX(-10px)'
                                    : '',
                        }"
                    />
                    <p class="item-description">
                        <span
                            class="description-title"
                            :style="{ color: item.color }"
                            style="font-weight: bold"
                            v-text="item.title"
                        />
                        <span
                            class="description-subtitle"
                            v-text="item.description"
                        />
                    </p>
                </div>
            </v-layout>
        </v-layout>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { CityModel } from "~/model/entities/city";
@Component
export default class AboutPampadu extends Vue {
    @Prop(Object) city: CityModel;
    get items() {
        return this.$store.state.partner.aboutPampadu.items;
    }
}
</script>
<style lang="scss">
.city-container {
    .about {
        display: flex;
        justify-content: space-between;
        padding: 72px 0;
        @media (max-width: $w-md) {
            padding: 32px 0;
        }
        &-title {
            font-weight: bold;
            font-size: 25px;
            line-height: 30px;
            font-family: Montserrat, sans-serif;
            max-width: 370px;
            @media (max-width: $w-md) {
                font-size: 19px;
                line-height: 23px;
                margin-bottom: 8px;
                max-width: none;
            }
        }
        &-item {
            display: flex;
            align-items: center;
            margin: 15px;
            @media (max-width: $w-sm) {
                margin: 10px 5px;
            }
            .item-logo {
                width: 61px;
                height: 67px;
                margin-right: 25px;
                @media (max-width: 730px) and (min-width: $w-xs + 1px) {
                    margin-right: 0;
                }
            }
            .item-description {
                display: flex;
                flex-direction: column;
                .description-title {
                    font-size: 25px;
                    font-family: Montserrat, sans-serif;
                    @media (max-width: $w-md) {
                        font-size: 20px;
                    }
                }
                .description-subtitle {
                    font-size: 16px;
                    @media (max-width: $w-md) {
                        font-size: 13px;
                        font-weight: 500;
                    }
                }
            }
        }
    }
}
</style>
