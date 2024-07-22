<template>
    <div class="generic-container-1260">
        <div class="who-can-reg">
            <h2
                class="who-can-reg-title h3 mx-auto text-center font-weight-bold mb-5"
                v-text="'Кто может получить агентский доступ?'"
            />
            <div
                class="who-can-reg-text"
                v-html="
                    'Заработок на продаже ОСАГО <b>доступен всем</b>. Вы можете подать заявку на регистрацию как физическое лицо и начать работать на нашей платформе. Заключать трудовой договор не потребуется. Мы также работаем с юридическими лицами (ИП, ООО и тд.) - заключаем договоры, подписываем акты'
                "
            />
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class WhoCanRegister extends Vue {}
</script>
<style lang="scss">
.who-can-reg {
    border: 2px solid #a356f3;
    border-radius: 12px;
    padding: 46px;
    // margin: 0 16px;
    @media (max-width: $w-md){
        padding: 45px 10px;
    }

}
.who-can-reg-title {
    @media (max-width: $w-md){
        font-size: 19px;
        line-height: 1;
    }
}
.who-can-reg-text {
    font-family: Montserrat;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    max-width: 988px;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: $w-md){
        font-size: 18px;
        line-height: 27px;
    }
}
</style>