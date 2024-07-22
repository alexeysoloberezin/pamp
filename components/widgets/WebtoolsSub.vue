<template>
    <div class="widgets-tools-sub-outer">
        <div class="widgets-tools-sub-title">
            Виджет ОСАГО ждет вас в личном кабинете в разделе «Вебмастерам»
        </div>
        <div class="widgets-tools-sub">
            <div class="w-t-s-text">
                <span
                    class="w-t-s-accent"
                    v-text="'Зарегистрируйтесь и запустите '"
                />
                <span
                    v-text="
                        'онлайн-продажи ОСАГО на своем сайте или в приложении'
                    "
                />
            </div>
            <zond-btn v-text="'Зарегистрироваться'" />
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class WebtoolsSub extends Vue {}
</script>
<style lang="scss">
.widgets-tools-sub-outer {
    padding: 50px 0 110px;
    max-width: 1220px;
    margin: auto;
    @media (max-width: $w-xs) {
        padding: 50px 0 50px;
    }
}
.w-t-s-text {
    font-family: Montserrat;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    .w-t-s-accent {
        color: #7245ff;
    }
    max-width: 586px;
    @media (max-width: $w-sm) {
        margin: 20px 0;
    }
    @media (max-width: $w-xs) {
        font-size: 16px;
        line-height: 20px;
    }
}
$widgets-margin-left: 40px;
.widgets-tools-sub {
    display: flex;
    align-items: center;
    margin-top: 40px;
    margin-left: $widgets-margin-left;
    padding-right: 12px;
    @media (max-width: $w-md) {
        margin-left: 140px;
    }
    @media (max-width: $w-sm) {
        margin: 0 auto;
        padding: 0 20px;
        display: flex;
        flex-flow: column;
    }
}
.widgets-tools-sub-title {
    font-family: Montserrat;
    font-weight: bold;
    font-size: 30px;
    line-height: 34px;
    margin-left: $widgets-margin-left;
    padding-right: 12px;
    @media (max-width: $w-md) {
        margin-left: 140px;
    }
    @media (max-width: $w-sm) {
        margin: 0 auto;
        padding: 0 20px;
        max-width: 626px;
    }
    @media (max-width: $w-xs) {
        font-size: 20px;
        line-height: 25px;
    }
}
</style>