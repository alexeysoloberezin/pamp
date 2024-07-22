<template>
<div class="meters">
    <div id=meters style="position: absolute;left:0;top:-120px;"></div>
    <span v-if="$vuetify.breakpoint.mdAndUp" class="bg-l"/>
    <span v-if="$vuetify.breakpoint.mdAndUp" class="bg-r"/>
    <h2 class="h2">Сколько зарабатывают наши&nbsp;<br v-if="$vuetify.breakpoint.mdAndUp">пользователи?</h2>
    <div class="meters-subtext">
        Хороший вопрос! <br v-if="$vuetify.breakpoint.smAndDown">Как и везде — по-разному
    </div>
    <div class="meters-container">
        <div class="meter-container c_pink">
            <div class="meter"></div>
            <div class="meter-data__inner">
                <div class="submeter">854 руб</div>
                <div class="meter-header">Минимальная выплата</div>
                <div class="meter-subheader">Оформил: <b>1 полис</b></div>
            </div>
            <div class="meter-desc">Пользователь зарегистрировался и&nbsp;оформил только один тестовый полис.
                Не&nbsp;воспользовался дополнительными сервисами, нет&nbsp;агентской сети.
                Зарегистрирован в&nbsp;статусе физлица.
            </div>
        </div>
        <div class="meter-container c_blue">
            <div class="meter"></div>
            <div class="meter-data__inner">
                <div class="submeter">40 164 руб</div>
                <div class="meter-header">Средняя выплата</div>
                <div class="meter-subheader">Оформил: <b>39 полисов</b></div>
            </div>
            <div class="meter-desc">Пользователь зарегистрирован месяц.
                Оформил 39&nbsp;полисов, часть которых с&nbsp;пролонгацией.
                Пользуется большей частью функций.
                Несколько раз помог клиенту с&nbsp;восстановлением КБМ, нет агентской сети.
                Работает в&nbsp;статусе физлица.
            </div>
        </div>
        <div class="meter-container c_dark">
            <div class="meter"></div>
            <div class="meter-data__inner">
                <div class="submeter">111 020 руб</div>
                <div class="meter-header">Высокая выплата</div>
                <div class="meter-subheader">Оформил: <b>130 полисов</b></div>
            </div>
            <div class="meter-desc">Опытный агент зарегистрирован 3&nbsp;месяца.
                Оформил 130&nbsp;полисов за месяц, часть которых оформили его&nbsp;агенты.
                Пользуется всеми функциями личного кабинета.
                Ведет и&nbsp;расширяет агентскую сеть. Работает в&nbsp;статусе&nbsp;ИП.
            </div>
        </div>
    </div>
</div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
@Component({components: {}})
export default class Meters extends Vue {
}
</script>
<style lang="scss">
.meters {
    .bg-l,
    .bg-r {
        @media (max-width: $w-sm) { display: none };
        &::after, &::before {
            position: absolute;
        }
    }
    .bg-l {
        &::before {
            content: url('~@/assets/images/bl7/bg-lt.svg');
            left: 115px;
            top: 22px;
        }
        &::after {
            content: url('~@/assets/images/bl7/bg-lb.svg');
            left: 400px;
            bottom: 0;
        }
    }
    .bg-r {
        &::before {
            content: url('~@/assets/images/bl7/bg-rt.svg');
            right: 170px;
            top: 84px;
        }
        &::after {
            content: url('~@/assets/images/bl7/bg-rb.svg');
            right: 42px;
            bottom: -10px;
        }
    }

    padding-top: 50px;
    @media (max-width: $w-md) {
        padding-top: 30px;
    }
    text-align: center;
    position: relative
}
.meter-container {
    margin: 0 30px;
    max-width: 400px;
    position: relative;
    @media (max-width: $w-md) {
        margin: 0 18px;
    }
    @media (max-width: $w-sm) {
        max-width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
}
.meter-data {
    @media (max-width: $w-sm) {
        display: flex;
        flex-wrap: wrap;
    }
}
.meter-data__inner {
    flex: 0 1 195px;
    @media (max-width: $w-sm) {
        margin-bottom: 16px;
    }
}
.meter-desc {
    flex: 1 0 300px;
    max-width: 344px;
    margin-top: 20px;
    font-size: 16px;
    line-height: 25px;
    text-align: left;
    color: #7f7f7f;
    @media (max-width: $w-sm) {
        font-size: 14px;
        line-height: 22px;
        margin: 0 0 20px;
        font-size: 14px;
        line-height: 22px;
    }
}
.meters-subtext,
.meter-header,
.meter-subheader,
.submeter {
    font-family: Montserrat, sans-serif;
}
.meters-subtext {
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 50px;
    @media (max-width: $w-sm) {
        font-size: 15px;
        line-height: 24px;
    }
}
.meter-header {
    margin-top: 16px;
    font-weight: 600;
    font-size: 25px;
    line-height: 26px;
    @media (max-width: $w-md) {
        max-width: 200px;
        text-align:center;
        margin-left: auto;
        margin-right: auto;
    }
    @media (max-width: $w-sm) {
        max-width: 100%;
        font-size: 15px;
        text-align: left;
        margin:0;
        line-height: 18px;
    }
}
.meter-subheader {
    font-size: 16px;
    margin-top: 4px;
    @media (max-width: $w-sm) {
        text-align: left;
        font-size: 12px;
        margin-top: 4px;
    }
}
.submeter {
    font-weight: bold;
    font-size: 16px;
    @media (max-width: $w-sm) {
        text-align: left;
    }
}
.c_pink {
    .meter {
        &:before {
            content:"";
            background-image: url('~@/assets/images/bl7/arrow_pink.svg');
        }
        &:after {
            content:"";
            background-image: url('~@/assets/images/bl7/meter_pink.svg');
        }
    }
    .submeter, .meter-header { color: #d863e0; }
}
.c_blue {
    .meter {
        &:before {
            content:"";
            background-image: url('~@/assets/images/bl7/arrow_blue.svg');
        }
        &:after {
            content:"";
            background-image: url('~@/assets/images/bl7/meter_blue.svg');
        }
    }
    .submeter, .meter-header { color: #4E7EFF; }
}
.c_dark {
    .meter {
        &:before {
            content:"";
            background-image: url('~@/assets/images/bl7/arrow_dark.svg');
        }
        &:after {
            content:"";
            background-image: url('~@/assets/images/bl7/meter_dark.svg');
        }
    }
    .submeter, .meter-header { color: #343E70; }
}
.meters-container {
    display: flex;
    justify-content: center;
    justify-content: space-evenly;
    @supports (-ms-ime-align:auto) { justify-content: center; }

    @media (max-width: $w-sm) {
        flex-flow: column;
    }
    .meter {
        height: 155px;
        position: relative;
        @media (max-width: $w-sm) {
            width: 74px;
            height: 57px;
            float: left;
            margin-right: 7px;
        }
        &:before {
            transition: transform 250ms ease-out;
            transform-origin: 5px calc(100% - 10px);
            position: absolute;
            bottom: 42px;
            z-index: 1;
            left: calc(50% - 1px);
            transform: translateX(-50%);
            width: 9px;
            height: 89px;
            background-repeat: no-repeat;
            background-size: contain;
            @media (max-width: $w-sm) {
                transform-origin: 4px calc(100% - 2px);
                margin-top: -5px;
                height: 37px;
                width: 4px;top: 7px;bottom: auto;
                background-size: contain;
            }
        }
        &:after {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            width: 204px;
            height: 160px;
            background-repeat: no-repeat;
            background-size: contain;
            @media (max-width: $w-sm) {
                width: 74px;
                background-size: contain;
                height: 100%;
                background-repeat: no-repeat;
            }
        }
    }
    .c_pink .meter:before {
        transform: translateX(-50%) rotate(-85deg);
    }
    .c_blue .meter:before {
        transform: translateX(-50%) rotate(0deg);
    }
    .c_dark .meter:before {
        transform: translateX(-50%) rotate(95deg);
    }
    &:hover {
        .c_pink .meter:before {
            transform: translateX(-50%) rotate(-70deg);
        }
        .c_blue .meter:before {
            transform: translateX(-50%) rotate(15deg);
        }
        .c_dark .meter:before {
            transform: translateX(-50%) rotate(110deg);
        }
    }
}
</style>