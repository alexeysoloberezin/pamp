<template>
    <div class="regions">
        <div class="generic-container-1260 city-container">
            <v-layout
                :column="$vuetify.breakpoint.smAndDown"
                :align-center="$vuetify.breakpoint.smAndDown"
            >
                <h2
                    class="regions-title"
                    v-text="
                        'Работать страховым агентом через Пампаду можно из любой точки России'
                    "
                />
                <ul class="cities">
                    <li
                        v-for="(city, i) in cities"
                        :key="i"
                        class="cities-item"
                    >
                        <nuxt-link
                            style="color: #7245ff !important"
                            :to="{
                              path: '/city/' + normalizePath(city)
                            }"
                            v-text="getCityName(city)"
                        />
                    </li>
                </ul>
            </v-layout>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { CityUrl } from "~/urls";
import { getCityName } from "~/model/entities/city/index";
import {normalizePathLink} from "~/utils/normalizePathLink";

@Component
export default class Regions extends Vue {
    cities = CityUrl;
    getCityName = getCityName;

    normalizePath(city) {
      return normalizePathLink(city)
    }
}
</script>
<style lang="scss">
.regions {
    padding: 150px 0 75px;
    background: url("~@/assets/images/city/regions/bg.png") no-repeat right
        bottom;
    background-size: 70%;
    @media (max-width: $w-md) {
        background-size: contain;
    }
    @media (max-width: $w-sm) {
        padding: 25px 0;
    }
    @media (max-width: $w-sm) {
        background-size: cover;
    }
}
.city-container {
    .regions-title {
        margin-right: 70px;
        font-weight: bold;
        font-size: 35px;
        max-width: 400px;
        line-height: 40px;
        @media (max-width: $w-md) {
            font-size: 19px;
            line-height: 27px;
        }
        @media (max-width: $w-sm) {
            margin: 10px auto;
            text-align: center;
        }
        @media (max-width: $w-xs) {
            text-align: left;
            margin: 10px 0;
        }
    }
    .cities {
        display: flex;
        flex-flow: column;
        flex-wrap: wrap;
        width: 100%;
        list-style: none;
        padding: 0;
        max-width: 700px;
        margin: 0 auto;
        font-size: 18px;
        max-height: 230px;
        @media (max-width: $w-md) {
            font-size: 13px;
            max-height: 160px;
        }
        @media (max-width: $w-xs) {
            max-height: 280px;
        }
        &-item {
            flex: 0 0 calc(100% / 6);
            padding: 5px 0;
            text-decoration: underline;
            @media (max-width: $w-xs) {
                flex: 0 0 50%;
            }
        }
    }
}
</style>
