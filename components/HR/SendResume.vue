<template>
    <v-form v-if="!postSuccessful" ref="form" class="send-review white--text">
        <v-flex xs12 sm12 md6>
            <div class="hr-h1 send-review-title">Не подходят вакансии?</div>
        </v-flex>
        <v-flex xs12 sm12 md6>
            <div style="font-size: 20px; line-height: 28px">
                Напишите нам. Мы всегда ищем хороших специалистов
            </div>
        </v-flex>
        <v-layout style="margin: 0 -8px" wrap>
            <v-flex xs12 sm12 md6 class="mt-2 px-2">
                <v-text-field
                    dark
                    validate-on-blur
                    filled
                    v-model="form.name"
                    :rules="[Rules.requiredRule]"
                    label="Имя"
                />
            </v-flex>
            <v-flex xs12 sm12 md6 class="mt-2 px-2">
                <v-text-field
                    dark
                    validate-on-blur
                    filled
                    v-model="form.phone"
                    :rules="[Rules.requiredRule, Rules.isPhone]"
                    v-mask="'+7-###-###-##-##'"
                    label="Телефон"
                />
            </v-flex>
            <v-flex xs12 sm12 md6 class="mt-2 px-2">
                <v-text-field
                    dark
                    validate-on-blur
                    filled
                    v-model="form.email"
                    :rules="[Rules.requiredRule, Rules.isEmail]"
                    label="E-mail"
                />
            </v-flex>
            <v-flex xs12 sm12 md6 class="mt-2 px-2">
                <v-text-field
                    dark
                    validate-on-blur
                    filled
                    v-model="form.resumeUrl"
                    :rules="[Rules.requiredRule, Rules.isUrl, resumeLink]"
                    label="Ссылка на резюме/портфолио"
                />
                <div>
                    <v-file-input
                        class="mt-2"
                        ref="fileInput"
                        dark
                        :rules="[Rules.requiredRule]"
                        validate-on-blur
                        filled
                        show-size
                        truncate-length="38"
                        prepend-icon
                        label="Прикреплённый файл"
                        v-model="form.file"
                    />
                    <div
                        @click="$refs.fileInput.$refs.input.click()"
                        v-if="!form.file"
                        class="add-files-btn"
                    >
                        Прикрепить файл
                    </div>
                </div>
            </v-flex>
        </v-layout>
        <v-flex xs12 class="mt-1 d-flex">
            <div
                v-if="!loading"
                @click="send()"
                class="btn text-center btn inverted mt-2"
                style="margin: auto; min-height: 44px"
                v-text="'Отправить резюме'"
                :class="{ 'w-100 mx-0': $vuetify.breakpoint.xsOnly }"
            />
            <v-progress-circular v-else />
        </v-flex>
    </v-form>
    <div class="send-review white--text" v-else>
        <div class="send-review-success">
            <v-icon
                style="background-color: #fff; border-radius: 50%"
                class="mr-4 pa-2 my-2"
                size="60"
                color="#329F25"
                v-text="mdiCheck"
            />
            <div
                v-html="
                    'Спасибо за интерес к нашей компании<br>Ваше резюме отправлено'
                "
            />
        </div>
    </div>
</template>
<script lang="ts">
import { mdiCheckBold } from "@mdi/js";
import { Component, Prop, Ref, Vue } from "vue-property-decorator";
import { mask } from "vue-the-mask";
import ResumeService from "~/services/ResumeService";
import ValidationRules from "~/utils/validations";

@Component({ directives: { mask } })
export default class SendReview extends Vue {
    @Prop(Boolean) postSuccessful: boolean;

    Rules = ValidationRules;

    mdiCheck = mdiCheckBold;
    form = {
        name: "",
        phone: "",
        email: "",
        resumeUrl: "",
        file: null,
        resumeBase64: null,
        fileName: "",
    };
    @Ref("form") formComponent: { validate: Function };

    loading = false;
    async send() {
        if (!this.formComponent.validate()) return;
        this.loading = true;
        try {
            this.form.resumeBase64 = await this.toBase64(this.form.file);
            this.form.fileName = (this.form.file as File).name;
            await ResumeService.sendResume(this.form);
        } catch (e) {
            console.log(e);
        } finally {
            this.$emit("update:postSuccessful", true);
            // this.loading = false;
        }
    }

    toBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                var base46string = (reader.result as string)
                    .replace("data:", "")
                    .replace(/^.+,/, "");
                resolve(base46string);
            };
            reader.onerror = (error) => reject(error);
        });

    resumeLink = (v: any) => !!this.form.file || this.Rules.requiredRule(v);
}
</script>
<style lang="scss">
.send-review-title {
    margin-bottom: 50px;
    @media (max-width: $w-xs) {
        font-size: 30px !important;
        margin-bottom: 20px;
    }
}

.send-review-success {
    font-family: Montserrat;
    font-weight: bold;
    font-size: 25px;
    line-height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    flex: 1;
    @media (max-width: $w-sm) {
        flex-flow: column;
        text-align: center;
        font-size: 20px;
        line-height: 26px;
    }
}

.send-review {
    display: flex;
    flex-wrap: wrap;
    padding: 60px 100px;
    background: linear-gradient(0deg, #965cf5 0%, #8e68ff 100%);
    border-radius: 20px;
    @media (max-width: $w-sm) {
        padding: 30px 50px;
    }
    @media (max-width: $w-xs) {
        padding: 20px;
    }
    height: 100%;
}

.add-files-btn {
    cursor: pointer;
    margin-left: auto;
    margin-top: 12px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid #ffffff70;
    border-radius: 2px;
    font-weight: 500;
    font-size: 13px;
    line-height: 15px;
    text-align: center;
    opacity: 0.8;
    max-width: 144px;
    @media (max-width: $w-xs) {
        max-width: unset;
    }
}
</style>
