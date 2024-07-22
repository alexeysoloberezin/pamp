<template>
    <div class="hr-indents" style="position: relative;">
        <DecoSpot
            :diameter="450"
            :top="0"
            :right="0"
            style="transform: translate(60%, 10%)"
        />
        <DecoTri
            :tri="{
                top: '90px',
                right: '265px',
                color: '#5381FE',
                opacity: 1,
                rotate: '-157deg',
                size: 18
            }"
        />
        <DecoTri
            :tri="{
                bottom: '130px',
                right: '305px',
                color: '#0060A9',
                opacity: 0.08,
                rotate: '-157deg',
                size: 22
            }"
        />
        <div id="jobs" style="position: absolute;left:0;top:-90px;" />
        <div class="hr-h1" style="margin-bottom: 50px;">
            Ищем
            <span style="color: #8E68FF;">сейчас</span>
        </div>
        <div>
            <v-dialog max-width="700" v-model="dialog">
                <v-card v-if="dialog" :style="$vuetify.breakpoint.smAndDown ? 'padding: 20px;': 'padding: 40px;'">
                    <v-icon
                        @click="dialog = false"
                        class="c-pointer"
                        style="position: absolute; right: 4px; top: 4px;"
                        v-text="mdiClose"
                    />
                    <div class="hr-h1 mb-4" v-html="selected.title" />
                    <div v-html="selected.text" />
                </v-card>
            </v-dialog>
            <div class="vacancy-btns">
                <div
                    @click="openVacancy(vacancy)"
                    v-for="(vacancy, i) in vacancies"
                    :key="i"
                    class="vacancy-btn"
                >
                    <div v-text="vacancy.title" />
                    <v-spacer />
                    <img
                        height="17"
                        style="transform:rotate(180deg)"
                        src="@/assets/images/bl2/arrow-dir.svg"
                        alt="arrow"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { mdiClose } from "@mdi/js";
@Component
export default class OurJobs extends Vue {
    mdiClose = mdiClose;
    dialog = false;
    selected = null;
    openVacancy(vacancy) {
        this.selected = vacancy;
        this.dialog = true;
    }

    async created() {
        try {
            var getJSON = async function(url: RequestInfo) {
                let res = await fetch(url);
                return res.json();
            };
            let jobsJson = await getJSON(
                "https://api.npoint.io/2fc0bb0db70ff141dcac" // могу менять это без передеплоя, акк используется мой корпоративный
            );
            this.vacancies = jobsJson;
        } catch {
            console.error("failed to fetch vacancies");
        }
    }
    vacancies = [
        {
            title: "Разработчик ASP.NET",
            text: `
        <b class="primary--text">Пампаду</b> - это активно развивающийся
        стартап в сфере страхования и финансов. В 2020 году мы привлекли
        инвестирование от немецкого холдинга
        <b class="primary--text">Admitad Group</b> в размере 400 000$.
        Входим в топ-3 посредников по объему продаж ОСАГО. На данный
        момент компания оценивается в 350 млн. руб.
        `
        },
        {
            title: "Тестировщик",
            text: `
        <b class="primary--text">Пампаду</b> - это активно развивающийся
        стартап в сфере страхования и финансов. В 2020 году мы привлекли
        инвестирование от немецкого холдинга
        <b class="primary--text">Admitad Group</b> в размере 400 000$.
        Входим в топ-3 посредников по объему продаж ОСАГО. На данный
        момент компания оценивается в 350 млн. руб.
        `
        },
        {
            title: "Менеджер по продажам страховых продуктов",
            text: `
        <b class="primary--text">Пампаду</b> - это активно развивающийся
        стартап в сфере страхования и финансов. В 2020 году мы привлекли
        инвестирование от немецкого холдинга
        <b class="primary--text">Admitad Group</b> в размере 400 000$.
        Входим в топ-3 посредников по объему продаж ОСАГО. На данный
        момент компания оценивается в 350 млн. руб.
        `
        }
    ];
}
</script>
<style lang="scss">
.vacancy-btn {
    cursor: pointer;
    margin: 15px 0;
    padding: 34px 30px;
    background: #ffffff;
    box-shadow: 0px 5px 25px rgba(203, 207, 216, 0.28);
    border-radius: 5px;
    font-weight: bold;
    font-size: 25px;
    line-height: 1;
    display: flex;
    align-items: center;
    color: #000000;
}
.vacancy-btns {
    max-width: 750px;
}
</style>