<template>
    <div class="phiw">
        <div id="phiw" style="position: absolute; top: -200px;" />
        <h2 class="h2 text-center mb-10 px-6" v-html="'Как это работает?'" />
        <div class="phiw-inner">
            <v-img
                v-if="$vuetify.breakpoint.mdAndUp"
                style="width: 100%;"
                :src="require('@/assets/images/partners/hiw/block.png')"
            />
            <div class="phiw-inner" v-else>
                <div
                    style="display: flex; align-items: center; flex-flow: column;"
                >
                    <div class="phiw-card">
                        <img
                            class="phiw-card-icon"
                            src="@/assets/images/partners/icons/tools.svg"
                        />
                        <span
                            class="phiw-title"
                            v-text="
                                'Устанавливаем виджет расчета и покупки Е-ОСАГО на сайт или приложение партнёра'
                            "
                        />
                    </div>
                    <img
                        style="max-width: 370px; width: 100%;"
                        src="@/assets/images/partners/hiw/hiw-t-2x.png"
                    />
                    <div class="phiw-card">
                        <img
                            class="phiw-card-icon"
                            src="@/assets/images/partners/icons/scales.svg"
                        />
                        <span
                            class="phiw-title"
                            v-text="'Клиенты сравнивают и покупают полисы'"
                        />
                    </div>
                    <img
                        style="max-width: 300px; width: 100%;"
                        src="@/assets/images/partners/hiw/hiw-left-2x.png"
                    />
                    <div class="phiw-card">
                        <img
                            class="phiw-card-icon"
                            src="@/assets/images/partners/icons/laptop.svg"
                        />
                        <span
                            class="phiw-title"
                            v-text="
                                'Партнер отслеживает все продажи в личном кабинете'
                            "
                        />
                    </div>
                    <img
                        style="max-width: 300px; width: 100%;"
                        src="@/assets/images/partners/hiw/hiw-b-2x.png"
                    />
                    <div class="phiw-card">
                        <img
                            class="phiw-card-icon"
                            src="@/assets/images/partners/icons/wallet.svg"
                        />
                        <span
                            class="phiw-title"
                            v-text="'Мы выплачиваем комиссию с каждой продажи'"
                        />
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class PartnersHowItWorks extends Vue {}
</script>
<style lang="scss">
.phiw {
    position: relative;
}
.phiw-inner {
    max-width: 1161px;
    padding: 0 20px;
    margin: 0 auto;
    display: flex;
    @media (max-width: $w-sm) {
        margin-bottom: 20px;
    }
}
.phiw-card {
    display: flex;
    align-items: center;
}
.phiw-title {
    font-size: 12px;
    line-height: 16px;
    color: #4578ff;
    margin-left: 12px;
    max-width: 180px;
}
.phiw-card-icon {
    width: 30px;
    height: 30px;
}
</style>
