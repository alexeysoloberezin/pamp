<template>
    <div style="overflow: hidden">
        <div class="wi-cardsandreg">
            <div class="wi-cards">
                <div class="wi-card">
                    <div class="wi-card__inner">
                        Более
                        <span class="t_accent t_blue" v-html="'15&nbsp;600'" />
                        страховых агентов уже доверяют нам свои сделки
                    </div>
                </div>
                <div class="wi-card">
                    <div class="wi-card__inner">
                        Они оформили полисов страхования на
                        <span
                            class="t_accent t_purp"
                            v-html="'208&nbsp;млн&nbsp;₽'"
                        />
                        за&nbsp;последние 3&nbsp;месяца
                    </div>
                </div>
                <div class="wi-card">
                    <div class="wi-card__inner">
                        Мы выплатили им вознаграждений свыше
                        <component
                            :is="$vuetify.breakpoint.mdAndUp ? 'div' : 'span'"
                            class="t_accent t_pink"
                            v-html="'65&nbsp;млн&nbsp;₽'"
                        />
                    </div>
                </div>
            </div>
            <div class="wi-new-outer">
                <div class="wi-new-cards">
                    <div class="new-container mr-4">
                        <span
                            class="h1 new-title mx-4"
                            v-text="'Только у нас:'"
                        />
                        <img
                            class="ml-1 mr-4 new-image"
                            src="~/assets/images/bl1/new.png"
                            alt="new!"
                        />
                    </div>
                    <div class="wi-new-cards-container">
                        <div class="wi-new-card">
                            <img
                                class="mr-3 new-card-image"
                                src="~/assets/images/bl1/delivery-truck.svg"
                                alt="truck"
                            />
                            <div>
                                <div
                                    class="my-3 t_blue"
                                    v-html="
                                        'Оформляйте Е-ОСАГО на грузовики за 15&nbsp;минут'
                                    "
                                />
                                <div
                                    style="font-size: 14px;line-height: 16px;"
                                    v-html="
                                        'Без е-гарантов, долгих согласований и&nbsp;дополнительных платежей в&nbsp;любом регионе РФ.'
                                    "
                                />
                            </div>
                        </div>
                        <div class="wi-new-card">
                            <img
                                class="mr-3 new-card-image"
                                src="~/assets/images/bl1/money.svg"
                                alt="money"
                            />
                            <div>
                                <div
                                    class="my-3 t_blue"
                                    v-text="
                                        'Быстрые выплаты вознаграждений за продажи'
                                    "
                                />
                                <div
                                    style="font-size: 14px;line-height: 16px;"
                                    v-text="
                                        'Выводите комиссию за полисы сразу на свои реквизиты в любое удобное время.'
                                    "
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="wi-regnow">
                <div class="wi-regnow-inner">
                    <div
                        v-show="$vuetify.breakpoint.mdAndUp"
                        class="wi-regnow-side"
                        v-html="'&nbsp;'"
                    />
                    <div class="wi-regnow-center">
                        <span
                            class="h3"
                            v-text="'Зарегистрируйтесь и получите'"
                        />
                        <div class="mt-1" style="font-family: Roboto">
                            доступ к бесплатным сервисам
                            и&nbsp;12&nbsp;страховым компаниям
                        </div>
                    </div>
                    <div class="wi-regnow-side">
                      <client-only>
                        <zond-btn
                          style="min-width: 45px;min-height: 44px;"
                          class="btn inverted"
                          v-text="'Зарегистрироваться'"
                        />
                      </client-only>
                    </div>
                </div>
            </div>
        </div>
        <div class="wi-content">
            <div id="wi" style="top: -60px"></div>
            <div class="wi-content__inner">
                <div class="wi-text">
                    <h2 class="h1">
                        Что такое Pampadu.ru и&nbsp;зачем оно мне?
                    </h2>
                    <div class="wi-desc">
                        ПамПаду - это бесплатный сервис онлайн страхования для
                        агентов, брокеров и всех, кто хочет оформлять договора
                        страхования и получать вознаграждение с каждого полиса.
                        Вы получите все инструменты и поддержку для успешной
                        работы.
                    </div>
                    <div class="wi-desc">
                        Мы официальные партнеры ведущих страховых компаний, что
                        позволяет Вам делать расчеты и покупки полисов в едином
                        личном кабинете - у нас на сайте.
                    </div>
                    <client-only>
                      <zond-btn class="btn mt-4" v-text="'Зарегистрироваться'" />
                    </client-only>
                </div>
                <div class="wi-hoverable">
                    <div class="wi-block">
                        <img src="~/assets/images/bl2/rub.svg" alt="рубль" />
                        <span>
                            Высокое комиссионное вознаграждение
                        </span>
                    </div>
                    <div class="wi-block">
                        <img
                            class="hideable"
                            src="~/assets/images/bl2/doc.svg"
                            alt="document"
                        />
                        <img
                            class="inverted"
                            src="~/assets/images/bl2/doc-inv.svg"
                            alt="document"
                        />
                        <span>
                            Работа без бланков и офиса из любой точки мира
                        </span>
                    </div>
                    <div class="wi-block">
                        <img src="~/assets/images/bl2/map.svg" alt="map" />
                        <span>
                            Широкая сегментация по всем регионам РФ
                        </span>
                    </div>
                    <div class="wi-block dashed">
                        <img src="~/assets/images/bl2/bag.svg" alt="bag" />
                        <span>
                            Деньги за продажу доступны сразу
                        </span>
                    </div>
                    <div class="wi-block">
                        <img
                            class="hideable"
                            src="~/assets/images/bl2/man.svg"
                            alt="man"
                        />
                        <img
                            class="inverted"
                            src="~/assets/images/bl2/man-inv.svg"
                            alt="man"
                        />
                        <span>
                            Без посредников
                        </span>
                    </div>
                    <div class="wi-block">
                        <img
                            src="~/assets/images/bl2/circle-percent.svg"
                            alt="percent"
                        />
                        <span>
                            92% проходимости и современные решения в интеграции
                            с СК
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <ICSlider />
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import ICSlider from '~/components/common/slider/ICSlider.vue';

@Component({ components: {ICSlider} })
export default class Whatis extends Vue {
}
</script>
<style lang="scss">
.wi-carousel-btn-container {
    display: flex;
    justify-content: space-between;
    margin: auto;
    width: 128px;
    margin: 42px auto 32px;
    @media (max-width: $w-sm) {
        width: 85px;
    }
}

.t_blue {
    color: #4578ff;
}
.t_purp {
    color: #8e68ff;
}
.t_pink {
    color: #d863e0;
}
.t_accent {
    font-size: 16px;
    font-weight: bold;
    line-height: 20px;
    @media (max-width: $w-sm) {
        font-size: 17px;
    }
}
#wi {
    position: absolute;
    left: 0;
    @media (max-width: $w-sm) {
        top: -30px;
    }
}
$dash-length: 21px;
$dash-width: 2px;
.wi-content {
    position: relative;
    .wi-content__inner {
        position: relative;
        z-index: 1;
        padding: 100px 50px;
        display: flex;
        @media (max-width: $w-sm) {
            padding: 30px 14px 0;
            flex-flow: column;
        }
    }
    &:before {
        content: url("~@/assets/images/bl2/bg-l.svg");
        position: absolute;
        left: 0;
        top: 60px;
        @media (max-width: $w-sm) {
            display: none;
        }
    }
    &:after {
        content: url("~@/assets/images/bl2/bg-r.svg");
        position: absolute;
        right: 0;
        top: 150px;
        @media (max-width: $w-sm) {
            display: none;
        }
    }
    .wi-text {
        max-width: 485px;
        margin: auto;
        margin-right: 100px;
        @media (max-width: $w-sm) {
            margin: 0;
            max-width: 100%;
            .btn {
                text-align: center;
                display: block;
                margin: 30px 40px 20px;
            }
        }
    }
    .wi-desc {
        font-size: 16px;
        line-height: 28px;
        margin-top: 30px;
        @media (max-width: $w-sm) {
            margin-top: 24px;
            font-size: 14px;
            line-height: 22px;
        }
    }
    .wi-hoverable {
        max-width: 445px;
        @media (max-width: $w-sm) {
            max-width: 100%;
            width: 100%;
        }
        margin-left: 0;
        margin-right: auto;
    }
    .wi-block {
        position: relative;
        display: flex;
        align-items: center;
        box-shadow: 0 0 1px #000;
        margin: 10px 0;
        padding: 13px 20px;
        box-shadow: 0px 5px 25px rgba(203, 207, 216, 0.28);
        background: #fff;
        border-radius: 2px;
        height: 66px;
        img {
            margin-right: 20px;
            filter: invert(0);
            transition: filter 150ms, opacity 150ms;
        }
        img.inverted {
            opacity: 0;
            position: absolute;
            top: 13px;
            left: 20px;
        }
        img.hideable {
            opacity: 1;
        }
        span {
            color: #4578ff;
            font-size: 15px;
            line-height: 18px;
            font-weight: 500;
            transition: color 150ms;
            @media (max-width: $w-sm) {
                font-size: 14px;
                line-height: 14px;
            }
        }
        transition: background-color 150ms;

        &:hover {
            background: #4578ff;
            span {
                color: #fff;
            }
            img:not(.inverted):not(.hideable) {
                filter: invert(1);
            }
            img.inverted {
                opacity: 1;
            }
            img.hideable {
                opacity: 0;
            }
        }
        &.dashed {
            background-image: repeating-linear-gradient(
                    to right,
                    #4578ff80 0%,
                    #4578ff80 66%,
                    transparent 66%,
                    transparent 100%
                ),
                repeating-linear-gradient(
                    to right,
                    #4578ff80 0%,
                    #4578ff80 66%,
                    transparent 66%,
                    transparent 100%
                ),
                repeating-linear-gradient(
                    to bottom,
                    #4578ff80 0%,
                    #4578ff80 66%,
                    transparent 66%,
                    transparent 100%
                ),
                repeating-linear-gradient(
                    to bottom,
                    #4578ff80 0%,
                    #4578ff80 66%,
                    transparent 66%,
                    transparent 100%
                );
            // order: top bottom left right
            // beware: bugged when served locally
            background-position: calc(#{$dash-length} * 0.75) 0,
                calc(#{$dash-length} * 0.75) 100%,
                0 calc(#{$dash-length} * 0.75),
                100% calc(#{$dash-length} * 0.75);
            background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
            background-size: #{$dash-length} #{$dash-width},
                #{$dash-length} #{$dash-width}, #{$dash-width} #{$dash-length},
                #{$dash-width} #{$dash-length};
        }
    }
}

.wi-cardsandreg {
    @media (max-width: $w-sm) {
        display: flex;
        flex-wrap: wrap;
    }
}
.wi-regnow {
    background-color: #8e68ff;
    margin: auto;
}

.wi-regnow-inner {
    max-width: 1210px;
    height: 120px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    background-size: cover;
    background-image: url("~@/assets/images/bl2/banner.png");
    // background-image: -webkit-image-set(
    //     url("~@/assets/images/bl2/banner.png") 1x,
    //     url("~@/assets/images/bl2/banner-2x.png") 2x
    // );
    // background-image: image-set(
    //     url("~@/assets/images/bl2/banner.png") 1x,
    //     url("~@/assets/images/bl2/banner-2x.png") 2x
    // );
    @media (max-width: $w-sm) {
        background-color: #8e68ff;
        background-size: contain;
        background-position: bottom left;
        align-items: flex-start;
        flex-flow: column;
        width: 100%;
        height: 380px;
        margin: 0 auto;
        background-image: url("~@/assets/images/bl2/banner-sm.png");
        background-image: -webkit-image-set(
            url("~@/assets/images/bl2/banner-sm.png") 1x,
            url("~@/assets/images/bl2/banner-sm-2x.png") 2x
        );
        background-image: image-set(
            url("~@/assets/images/bl2/banner-sm.png") 1x,
            url("~@/assets/images/bl2/banner-sm-2x.png") 2x
        );
        flex: 0;
        .btn {
            flex: none;
            margin: 0;
        }
    }
}
.wi-regnow-side {
    flex: 1 0 0;
    display: flex;
    justify-content: center;
    .btn.inverted {
        box-shadow: 0px 2px 25px 0px rgba(98, 67, 191, 1);
    }
    @media (max-width: $w-sm) {
        flex: 0;
        padding: 0 18px;
        justify-content: flex-start;
        .btn {
            margin: 0;
        }
    }
}
.wi-regnow-center {
    flex: 0 1 auto;
    text-align: center;
    color: #fff;
    div {
        font-size: 16px;
    }
    @media (max-width: $w-md) {
        h3 {
            font-size: 27px;
        }
        div {
            font-size: 14px;
        }
    }
    @media (max-width: $w-sm) {
        text-align: left !important;
        margin: 0;
        padding: 18px;
        .h3 {
            font-size: 23px;
            line-height: 29px;
        }
        div {
            margin-top: 6px;
            font-size: 14px;
        }
    }
    @media (max-width: $w-xs) {
        .h3 {
            font-size: 20px;
            line-height: 25px;
        }
        div {
            font-size: 14px;
            line-height: 18px;
        }
    }
}
.new-container {
    display: flex;
    align-items: center;
    @media (max-width: $w-sm) {
        width: 100%;
        justify-content: center;
        margin-bottom: 12px;
    }
    @media (max-width: $w-xs) {
        justify-content: space-between;
    }
}
.wi-new-outer {
    background-color: #f9f9fc;
    padding: 53px 0;
    margin-bottom: 30px;
    @media (max-width: $w-sm) {
        padding: 0px;
    }
}
.new-title {
    width: 132px;
    @media (max-width: $w-md) {
        width: auto;
    }
    @media (max-width: $w-sm) {
        margin-right: 12px;
    }
}
.wi-new-cards {
    margin: 0 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: $w-sm) {
        flex-flow: column;
        align-items: center;
    }
    @media (max-width: $w-md) {
        margin: 20px auto;
        padding: 0 20px;
    }
}
.new-image {
    width: 86px;
    height: 86px;
    object-fit: contain;
    @media (max-width: $w-sm) {
        width: 68px;
        height: 68px;
    }
    animation-name: hearty;
    animation-duration: 1200ms;
    animation-iteration-count: infinite;
    // animation-timing-function: linear;
    animation-timing-function: cubic-bezier(0.28, 0.84, 0.42, 1);
}
$new-cards-space: 10px;
.wi-new-cards-container {
    display: flex;
    margin: 0 -#{$new-cards-space};
    @media (max-width: $w-xs) {
        flex-wrap: wrap;
        justify-content: center;
        margin: -#{$new-cards-space} 0 !important;
    }
}
.new-card-image {
    width: 100%;
    height: 100%;
    max-width: 45px;
    max-height: 45px;
    object-fit: contain;
    @media (max-width: $w-xs) {
        max-width: 32px;
        max-height: 32px;
    }
}
.wi-new-card {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    border-radius: 4px;
    padding: 0px 20px;
    max-width: 465px;
    width: 100%;
    margin: 0 #{$new-cards-space};
    @media (max-width: $w-xs) {
        flex-flow: column;
        margin: #{$new-cards-space} 0 !important;
        div.t_blue {
            font-size: 14px !important;
        }
        div:not(.t_blue) {
            font-size: 13px !important;
        }
    }
    .t_blue {
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        margin-bottom: 4px;
    }
}
.wi-cards {
    background-color: #f9f9fc;
    padding: 40px;
    display: flex;
    justify-content: center;
    @media (max-width: $w-sm) {
        flex-flow: column;
        align-items: center;
    }
    @media (max-width: $w-md) {
        margin: 0 auto;
        padding: 20px;
        width: 100%;
    }
    .wi-card {
        color: #2d2645;
        font-family: Montserrat, sans-serif;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        padding: 14px 0;
        @media (max-width: $w-md) {
            font-size: 15px;
            line-height: 24px;
            padding: 10px 0;
            width: 100%;
        }
        color: #2d2645;

        border-radius: 4px;
        background: #fff;
        box-shadow: 0px 5px 25px rgba(203, 207, 216, 0.28);

        max-width: 345px;
        min-height: 92px;
        @media (max-width: $w-sm) {
            margin-right: 15px;
            min-height: 100px;
        }

        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;

        .wi-card__inner {
            margin: auto 26px;
            @media (max-width: $w-md) {
                margin: auto 20px;
            }
            @media (max-width: $w-sm) {
                font-size: 14px;
                margin: auto 18px;
            }
        }
        @media (max-width: $w-sm) {
            margin-right: 15px;
        }
        &:not(:first-child) {
            margin-left: 88px;
            @media (max-width: $w-sm) {
                margin-left: 0px;
                margin-top: 15px;
            }
            &:before {
                content: url("~@/assets/images/arrow-next.svg");
                position: absolute;
                left: -69px;
                top: 50%;
                transform: translateY(-50%);
                @media (max-width: $w-sm) {
                    left: calc(100% - 12px);
                    top: -20px;
                    transform: rotate(70deg) scaleY(-1);
                }
            }
        }
    }
}
</style>
