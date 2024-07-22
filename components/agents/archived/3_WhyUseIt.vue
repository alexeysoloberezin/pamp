<template>
    <div class="wui-content">
        <div id="wui" style="position: absolute;left:0;top:-120px;" />
        <span v-if="$vuetify.breakpoint.mdAndUp" class="bg-l" />
        <span v-if="$vuetify.breakpoint.mdAndUp" class="bg-r" />
        <h2 class="h2" v-text="'Вам полезен Pampadu.ru, если вы'" />
        <div class="expansion-container">
            <v-expansion-panels>
                <v-expansion-panel>
                    <v-expansion-panel-header>
                        <h3 v-text="'Страховой агент'" />
                    </v-expansion-panel-header>
                    <v-expansion-panel-content class="exp-content">
                        <ul>
                            <li>
                                <span>
                                    Сможете оформлять большую часть регионов РФ
                                    по ОСАГО. Не нужно отказывать клиенту, если
                                    у него не местная прописка или не проходит
                                    сегментацию.
                                </span>
                            </li>
                            <li>
                                <span>
                                    Не нужно заключать договоры со страховыми
                                    компаниями, проходить службу безопасности.
                                    Мы уже это сделали!
                                </span>
                            </li>
                            <li>
                                <span>
                                    Не нужно забирать и отвозить бланки строгой
                                    отчетности, квитанции и акты. Теперь все
                                    онлайн!
                                </span>
                            </li>
                            <li>
                                <span>
                                    Ничего лишнего&nbsp;— вы общаетесь с
                                    клиентами, продаете и получаете
                                    вознаграждение. Остальное&nbsp;— наша
                                    работа.<br />
                                    Все околостраховые сервисы в одном кабинете:
                                    ТО, КБМ и др.
                                </span>
                            </li>
                        </ul>
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-header>
                        <h3 v-text="'Куратор страховых агентов'" />
                    </v-expansion-panel-header>
                    <v-expansion-panel-content class="exp-content">
                        <ul>
                            <li>
                                <span
                                    >Самые высокие размеры вознаграждений для
                                    кураторов агентских сетей. Вы будете
                                    конкуренты с прямой регистрацией на других
                                    сервисах и у нас. Напишите на
                                    <a
                                        class="inverted"
                                        href="mailto:agents@pampadu.ru"
                                        >agents@pampadu.ru</a
                                    >,
                                    указав ваш объем оформляемых договоров, и мы
                                    согласуем индивидуальные условия.
                                </span>
                            </li>
                            <li>
                                <span
                                    >Мы не общаемся с вашими агентами и не
                                    собираем о них данные. Не приглашаем ваших
                                    агентов в наши группы в социальных сетях.
                                    Любые рассылки по вашей сети исключены.
                                </span>
                            </li>
                            <li>
                                <span
                                    >Регистрация вашего агента в системе
                                    напрямую в обход вас исключена. Мы
                                    организовали разные механики, позволяющие
                                    этого избежать.
                                </span>
                            </li>
                            <li>
                                <span
                                    >Удобный интерфейс добавления агента в пару
                                    кликов. Отслеживайте статистику их работы,
                                    производите и подтверждайте платежи внутри
                                    личного кабинета.
                                </span>
                            </li>
                        </ul>
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-header>
                        <h3 v-text="'Работаете с автомобилистами'" />
                    </v-expansion-panel-header>
                    <v-expansion-panel-content class="exp-content">
                        <ul>
                            <li>
                                <span
                                    v-text="
                                        'У вас автошкола, автосервис, станция техосмотра, мойка или вы работаете в любом месте, где есть постоянный поток автомобилистов'
                                    "
                                />
                            </li>
                            <li>
                                <span
                                    v-html="
                                        'Зарабатывайте на дополнительной услуге&nbsp;— оформление полиса обязательного автострахования ОСАГО'
                                    "
                                />
                            </li>
                            <li>
                                <span
                                    v-text="
                                        'Для начала работы достаточно зарегистрироваться, и уже через 5 минут вы сможете оформить клиенту полис'
                                    "
                                />
                            </li>
                            <li>
                                <span
                                    v-text="
                                        'Не нужно регистрировать дополнительный вид деятельности или вносить изменения в учредительные документы, если вы работаете как ИП или ООО'
                                    "
                                />
                            </li>
                            <li>
                                <span
                                    v-text="
                                        'Можете оформлять полисы, даже если вы работаете как физическое лицо.'
                                    "
                                />
                            </li>
                            <li>
                                <span
                                    v-text="
                                        'Выплаты вознаграждений за оформленные полисы на расчетный счет юридического лица или на карту/счет физического лица'
                                    "
                                />
                            </li>
                        </ul>
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-header>
                        <h3 v-text="'У вас сервис по техосмотрам или КБМ'" />
                    </v-expansion-panel-header>
                    <v-expansion-panel-content class="exp-content">
                        <ul>
                            <li>
                                <span
                                    v-text="
                                        'Ваши агенты по ТО/КБМ уже оформляют где-то Е-ОСАГО, почему не у вас?'
                                    "
                                />
                            </li>
                            <li>
                                <span
                                    v-html="
                                        'Дополнительная монетизация ваших агентов/клиентов&nbsp;— предложите им оформление Е-ОСАГО'
                                    "
                                />
                            </li>

                            <li>
                                <span
                                    v-text="
                                        'Контролируйте всю работу агентов также, как в системе ТО/КБМ. Вам будет доступна вся статистика и отчеты'
                                    "
                                />
                            </li>
                            <li>
                                <span
                                    v-html="
                                        'Не хотите заморачиваться? Мы дадим вам реферальную ссылку, которую вы разместите у себя на площадке, и будем платить с каждого полиса, который оформил агент, пришедший от вас. За подробностями пишите: <a class=\'inverted\' href=\'mailto:agents@pampadu.ru\'>agents@pampadu.ru</a>'
                                    "
                                />
                            </li>
                        </ul>
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-header>
                        <h3
                            v-text="
                                'Ищете дополнительный источник дохода на дому'
                            "
                        />
                    </v-expansion-panel-header>
                    <v-expansion-panel-content class="exp-content">
                        <ul>
                            <li>
                                <span
                                    v-text="
                                        'Станьте страховым агентом в 2 клика через 5 минут после регистрации'
                                    "
                                />
                            </li>
                            <li>
                                <span
                                    v-text="
                                        'Помогайте клиентам с оформлением ОСАГО и других видов страхования, не выходя из дома. Рассказывайте и рекламируйте свои услуги в социальных сетях.'
                                    "
                                />
                            </li>
                            <li>
                                <span
                                    v-html="
                                        'Все автомобилисты&nbsp;— это ваши клиенты, ОСАГО&nbsp;— обязательный вид страхования'
                                    "
                                />
                            </li>
                            <li>
                                <span
                                    v-html="
                                        'Можете работать как брокер&nbsp;— ищите агентов и подключайте их под собой, зарабатывая с разницы комиссий для вас и той, что вы установите агентам'
                                    "
                                />
                            </li>
                            <li>
                                <span
                                    v-text="
                                        'Рынок онлайн-страхования только формируется, вы сможете набрать свою агентскую сеть и клиентскую базу'
                                    "
                                />
                            </li>
                        </ul>
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-header>
                        <h3 v-text="'Вебмастерам, владельцам сайтов и приложений'" />
                    </v-expansion-panel-header>
                    <v-expansion-panel-content class="exp-content">
                        <ul>
                            <li>
                                <span
                                    v-text="
                                        'У вас есть сайт или трафик, который вы хотите монетизировать за счет продажи страховых продуктов.'
                                    "
                                />
                            </li>
                            <li>
                                <span
                                    v-text="
                                        'Установите за 5 минут наш виджет расчета и покупки автострахования Е-ОСАГО и получайте комиссию с каждого проданного полиса через ваш сайт.'
                                    "
                                />
                            </li>
                            <li>
                                <span
                                    v-text="
                                        'В личном кабинет отслеживайте список всех расчетов, покупок и начисления комиссионного вознаграждения.'
                                    "
                                />
                            </li>
                            <li>
                                <span
                                    v-text="
                                        'Выводите заработанное когда вам удобно.'
                                    "
                                />
                            </li>
                            <li>
                                <span
                                    v-text="
                                        'Пользуйтесь дополнительными инструментами: баннеры, реферальные ссылки, white-label'
                                    "
                                />
                            </li>
                        </ul>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
            <zond-btn class="btn mt-3" v-text="'Это про меня, регистрируюсь'" />
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
@Component({ components: {} })
export default class WhyUseIt extends Vue {}
</script>
<style lang="scss">
.wui-content {
    background-color: #f9f9fc;
    padding: 100px 0;
    @media (max-width: $w-sm) {
        padding: 30px 20px;
        h2 {
            margin: 0 10px;
        }
    }
    text-align: center;
    position: relative;
    .bg-l,
    .bg-r {
        @media (max-width: $w-sm) {
            display: none;
        }
        &::after,
        &::before {
            position: absolute;
        }
    }
    .bg-l {
        &::before {
            content: url("~@/assets/images/bl3/bg-tl.svg");
            left: 70px;
            top: 40%;
        }
        &::after {
            content: url("~@/assets/images/bl3/bg-bl.svg");
            left: 200px;
            bottom: 40%;
        }
    }
    .bg-r {
        &::before {
            content: url("~@/assets/images/bl3/bg-tr.svg");
            right: 80px;
            top: 10%;
        }
        &::after {
            content: url("~@/assets/images/bl3/bg-br.svg");
            right: 200px;
            bottom: 15%;
        }
    }
}
.expansion-container {
    @media (max-width: $w-sm) {
        margin-top: 28px;
        .v-expansion-panel__header {
            font-size: 15px !important;
            line-height: 19px;
            span {
                width: calc(100% - 50px);
            }
        }
        .v-expansion-panel-content__wrap {
            padding: 20px 10px !important;
            li span {
                font-size: 14px !important;
                line-height: 21px !important;
            }
        }
    }
    max-width: 630px;
    margin: auto;
    margin-top: 70px;
    position: relative;
    .v-expansion-panel--active,
    .v-expansion-panel--active + .v-expansion-panel {
        margin-top: 0px !important;
    }
    .v-expansion-panel {
        margin-bottom: 20px;
        border-radius: 5px;
        overflow: hidden;
        border-top: 0px !important;
        box-shadow: 0px 5px 25px rgba(203, 207, 216, 0.28) !important;
        transition: box-shadow 100ms;
        &:hover {
            box-shadow: 0px 5px 15px rgba(203, 207, 216, 0.88) !important;
        }
        &:before {
            box-shadow: none !important;
        }
        &:after {
            border-top: 0 !important;
        }
    }
    .v-expansion-panel {
        box-shadow: none;
    }
    .v-expansion-panel-header {
        font-family: Roboto, sans-serif;
        font-weight: bold;
        font-size: 18px;
        text-align: left;
        padding: 21px 24px;
    }
    .v-expansion-panel-header__icon {
        order: -1;
        margin-left: -8px !important;
        margin-right: 12px;
        .v-icon {
            // font-size: 34px;
            color: #7ec275 !important;
            // width: 14px;
            .v-icon_svg {
                height: 34px;
                width: 34px;
            }
            @media all and (-ms-high-contrast: none),
                (-ms-high-contrast: active) {
                // ie10-11 fix
                width: 34px;
                margin: 0 -12px;
            }
        }
    }
    .v-expansion-panel-content__wrap {
        padding: 30px;
        text-align: left;
    }
    .exp-content {
        border-top: 1px solid #e3e3e3;
        background: #fafafa;
        li {
            list-style-type: initial;
            color: #9249ee;
            &:not(:first-child) {
                margin-top: 24px;
            }
            span {
                color: black;
                font-size: 16px;
                line-height: 24px;
            }
        }
    }
}
</style>