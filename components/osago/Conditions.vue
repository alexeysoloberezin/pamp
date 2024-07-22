<template>
    <div class="osago-conditions">
        <div class="generic-container-1260">
            <div class="conditions-wrapper">
                <v-img
                    style="max-width: 100%"
                    :src="require('@/assets/images/osago/conditions/conditions-sm.webp')"
                    alt="conditions"
                />
                <div>
                    <h2
                        class="conditions-title"
                        v-text="
                            'Добиваемся лучших условий для партнёров по сегментации и размеру вознаграждения'
                        "
                    />
                    <div
                        class="conditions-description"
                        :class="[
                            $vuetify.breakpoint.mdAndUp ? 'mt-10' : 'mt-3',
                        ]"
                        v-text="
                            'Есть регионы и сегменты на которые очень сложно оформить полис. Мы каждый день делаем все возможное, чтобы повышать шанс успешного одобрения, поэтому наши партнёры зарабатывают больше.'
                        "
                    />
                </div>
                <div v-if="showSecondSlide">
                    <h2
                        class="conditions-title"
                        v-text="
                            'Возможность оформлять не только физических лиц, но и согласовывать крупные автопарки'
                        "
                    />
                    <div
                        class="conditions-description"
                        :class="[
                            $vuetify.breakpoint.mdAndUp ? 'mt-10' : 'mt-3',
                        ]"
                        v-text="
                            'Помогаем агентам согласовать в страховых компаниях большие договора по всем видам страхования, включая автопарки и лизинг.'
                        "
                    />
                </div>
                <img v-if="showSecondSlide"
                    class="car"
                    :class="{ 'mt-10': $vuetify.breakpoint.smAndDown }"
                    style="max-width: 100%"
                    src="@/assets/images/osago/conditions/cars.webp"
                    alt="conditions"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class Conditions extends Vue {
    @Prop({default: () => true }) showSecondSlide;}
</script>

<style lang="scss">
.osago-conditions {
    padding: 75px 0 0;
    @media (max-width: $w-sm) {
        padding: 75px 0;
    }
    .conditions-wrapper {
        display: grid;
        grid-template-columns: minmax(0, 560px) 1fr;
        align-items: center;
        justify-content: center;
        grid-gap: 40px;
        @media (max-width: $w-sm) {
            grid-template-columns: minmax(0, 450px);
            grid-gap: 10px;
        }
    }
    .conditions-title {
        font-family: Montserrat, sans-serif;
        font-size: 30px;
        font-weight: bold;
        text-align: center;
        @media (max-width: $w-sm) {
            font-size: 19px;
        }
    }
    .conditions-description {
        font-size: 16px;
        text-align: center;
        @media (max-width: $w-sm) {
            font-size: 14px;
        }
    }
    .car {
        @media (max-width: $w-sm) {
            grid-row: 3;
        }
    }
}
</style>
