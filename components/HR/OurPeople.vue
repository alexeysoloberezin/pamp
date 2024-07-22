<template>
    <div style="position: relative; background: #F2F5FF;">
        <DecoTri
            :tri="{
                top: '100px',
                right: '85px',
                color: '#5381FE',
                opacity: 1,
                rotate: '-157deg',
                size: 22
            }"
        />
        <DecoTri
            :tri="{
                top: '40%',
                left: '70px',
                color: '#D863E0',
                opacity: 1,
                rotate: '150deg',
                size: 22
            }"
        />
        <div class="hr-title-text-block">
            <div id="team" style="position: absolute;left:0;top:-90px;" />
            <div class="hr-h1" style="min-width: 400px;" v-text="'Люди'" />
            <div style="flex: 1;">
                <div
                    class="hr-text"
                    style="max-width: 670px; font-size: 20px; line-height: 28px;"
                >
                    Сейчас в Пампаду работает 28 человек из 8 городов России,
                    Беларуси и Узбекистана
                </div>
            </div>
        </div>
        <div class="hr-indents">
            <div class="hr-ppl-carousel" id="hr-ppl-carousel">
                <div class="hr-ppl-card-img-container">
                    <v-scroll-y-transition leave-absolute>
                        <img
                            class="hr-ppl-card-img"
                            :key="slide.name"
                            :src="slide.img"
                        />
                    </v-scroll-y-transition>
                </div>
                <div>
                    <v-scroll-x-reverse-transition mode="out-in">
                        <div
                            :key="slide.name + 'name'"
                            class="hr-ppl-card-name"
                            v-text="slide.name"
                        />
                    </v-scroll-x-reverse-transition>
                    <v-scroll-x-reverse-transition mode="out-in">
                        <!-- <v-fade-transition leave-absolute> -->
                        <div
                            :key="slide.name + 'pos'"
                            class="hr-ppl-card-position"
                            v-text="slide.position"
                        />
                        <!-- </v-fade-transition> -->
                    </v-scroll-x-reverse-transition>
                    <v-scroll-y-reverse-transition leave-absolute>
                        <div
                            :key="slide.name + 'text'"
                            class="hr-ppl-card-text"
                            v-text="slide.text"
                        />
                    </v-scroll-y-reverse-transition>
                </div>
            </div>
            <div style="width: 100%; margin-top: 40px;" key="carousbtns">
                <div class="hr-ppl-carousel-btn-container">
                    <div
                        @click="goBack()"
                        class="hr-ppl-carousel-btn"
                        :class="{ disabled: page == 0 }"
                    >
                        <img
                            src="@/assets/images/bl2/arrow-dir.svg"
                            alt="arrow-left"
                        />
                    </div>
                    <div
                        @click="goForward()"
                        class="hr-ppl-carousel-btn"
                        :class="{ disabled: isForwardDisabled }"
                    >
                        <img
                            style="transform:rotate(180deg)"
                            src="@/assets/images/bl2/arrow-dir.svg"
                            alt="arrow-right"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class OurPeople extends Vue {
    slides = [
        {
            img: require("@/assets/images/hr/people/sergey.png"),
            name: "Сергей Локтев",
            position: "Генеральный директор",
            text: `Меня всегда вдохновляла идея создания продукта,
            который будет приносить пользу десяткам тысяч людей,
            делая их работу удобнее и эффективнее.
            Наша команда на личном опыте знает,
            с какими трудностями сталкиваются пользователи:
            мы тоже были агентами, которые учили сегментацию,
            сдавали бланки и ругались на личные кабинеты страховых компаний.
            Так появился Пампаду, который уже не только сервис для агентов,
            но и инструмент для вебмастеров, а страхование — только начало.`
        },
        {
            img: require("@/assets/images/hr/people/ilyas.png"),
            name: "Ильяс Салимшин",
            position: "Финансовый директор",
            text: `В Пампаду я пришел на самом «зародыше» — принимал заявки,
            подключал к сервису, общался с агентами.
            Было много задач и много нового, именно, для личностного роста.
            После того как начал изучать рынок ОСАГО, понял,
            что Е-ОСАГО только начинает развиваться и тут моё место,
            внутри перспективной ракеты, которая пробивает результат за результатом.
            Для меня Пампаду — это в первую очередь люди. Перспективные,
            трудолюбивые и честные, с которыми приятно общаться,
            работать и развивать разные продукты внутри «экосистемы» Пампаду.
            `
        },
        // {
        //     img: require("@/assets/images/hr/people/andrei.png"),
        //     name: "Андрей Пряхин",
        //     position: "Трафик менеджер",
        //     text: `Я выбрал Пампаду, так как здесь есть быстрая возможность
        //     карьерного роста плюс нравится идея захвата рынка.
        //     Тут я ощущаю свободу, могу сам управлять своим рабочим временем,
        //     также ценю наш коллектив и атмосферу постоянного развития`
        // },
        {
            img: require("@/assets/images/hr/people/elena.png"),
            name: "Елена Ходжгорова",
            position: "Product manager",
            text: `Для меня Pampadu — команда мечты, готовая поддержать в любых начинаниях.
            Здесь я могу влиять на развитие продукта и расти вместе с ним.
            И мне нравится, что нет неповоротливости в согласовании действий.
            Все просто: предлагай идеи, принимай решения, добивайся результата…`
        },
        {
            img: require("@/assets/images/hr/people/alexei.png"),
            name: "Алексей Григорьев",
            position: "Директор по маркетингу",
            text: `В Пампаду мне больше всего нравится молодая команда,
            готовая на любые эксперименты. Здесь нет бюрократии.
            Здесь каждый сможет реализовать свой потенциал,
            а коллеги с удовольствием в этом помогут.
            Если ты готов брать на себя ответственность и привык достигать
            высоких результатов, то Пампаду это для тебя.`
        }
    ];
    touchstartX = 0;
    touchstartY = 0;
    touchendX = 0;
    touchendY = 0;
    initSwipeEvents() {
        let handleGesture = () => {
            if (this.touchendX < this.touchstartX - 40) this.goForward("swipe");
            if (this.touchendX > this.touchstartX - 40) this.goBack("swipe");
        };
        let gesturedZone = document.querySelector("#hr-ppl-carousel");
        gesturedZone.addEventListener<any>("touchstart", (event: TouchEvent) => {
            this.touchstartX = event.touches[0].screenX;
            this.touchstartY = event.touches[0].screenY;
        });
        gesturedZone.addEventListener<any>("touchend", (event: TouchEvent) => {
            this.touchendX = event.changedTouches[0].screenX;
            this.touchendY = event.changedTouches[0].screenY;
            handleGesture();
        });
    }
    mounted() {
        this.initSwipeEvents();
    }
    page = 0;
    scrollUp() {
        let element = document.querySelector("#hr-ppl-carousel");
        const yOffset = -100;
        const y =
            element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
    }
    goBack(src: "btn" | "swipe" = "btn") {
        if (this.page <= 0) return;
        if (this.$vuetify.breakpoint.smAndDown && src != "swipe")
            this.scrollUp();
        this.page--;
    }
    get isForwardDisabled() {
        return this.page + 1 == this.slides.length;
    }
    goForward(src: "btn" | "swipe" = "btn") {
        if (this.isForwardDisabled) return;
        if (this.$vuetify.breakpoint.smAndDown && src != "swipe")
            this.scrollUp();
        this.page++;
    }
    get slide() {
        return this.slides[this.page];
    }
}
</script>
<style lang="scss">
.hr-ppl-carousel-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0px 2px 14px rgba(214, 214, 214, 0.33);
    transition: box-shadow 150ms;
    img {
        width: 11px;
    }
    &:not(.disabled) {
        cursor: pointer;
        box-shadow: 0px 2px 14px rgba(149, 75, 239, 0.26);
        &:hover {
            box-shadow: 0px 2px 10px rgba(214, 214, 214, 0.53);
        }
        img {
            filter: grayscale(100%) brightness(100%) sepia(100%)
                hue-rotate(-150deg) saturate(500%) contrast(0.8);
        }
    }
}
.hr-ppl-carousel-btn-container {
    display: flex;
    justify-content: space-between;
    margin: auto;
    width: 128px;
    margin: 0px auto;
    max-width: 128px;
}
$hr-ppl-carousel-breakpoint: 800px;
.hr-ppl-carousel {
    position: relative;
    margin: auto;
    max-width: 960px;
    // min-height: 392px;

    background: #ffffff;
    box-shadow: 0px 4px 30px rgba(203, 207, 216, 0.25);
    border-radius: 20px;
    padding: 50px 75px;
    display: flex;
    transition: flex 0.5s;
    flex: 1;
    @media (max-width: $w-sm) {
        padding: 50px 50px;
    }
    @media (max-width: $w-xs) {
        padding: 50px 20px;
    }
    @media (max-width: $hr-ppl-carousel-breakpoint) {
        flex-flow: column;
        align-items: center;
    }
}
@media (max-width: $hr-ppl-carousel-breakpoint) {
    .hr-ppl-card-name,
    .hr-ppl-card-position {
        text-align: center;
    }
}
.hr-ppl-card-name {
    font-weight: bold;
    font-size: 25px;
    line-height: 37px;
    color: #000000;
}
.hr-ppl-card-position {
    font-size: 20px;
    line-height: 37px;
    color: #8e68ff;
    margin-bottom: 12px;
}
.hr-ppl-card-text {
    font-size: 18px;
    line-height: 26px;
    color: #000000;
}
.hr-ppl-card-img-container {
    height: calc(178px - 80px);
}
.hr-ppl-card-img-container,
.hr-ppl-card-img {
    width: 178px;
    @media (max-width: $hr-ppl-carousel-breakpoint) {
        margin-bottom: 20px;
    }
    @media (min-width: $hr-ppl-carousel-breakpoint +1px) {
        margin-right: 50px;
    }
}
.hr-ppl-card-img {
    height: 178px;
    margin-top: -80px;
}
</style>
