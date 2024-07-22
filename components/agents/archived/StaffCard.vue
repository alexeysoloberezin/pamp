<template>
    <div class="au-staff-card">
        <img v-if="item.img" style="height:110px;" :src="item.img" />
        <span class="au-staff-title" v-text="item.name" />
        <v-slide-y-reverse-transition hide-on-leave>
            <span
                :key="position"
                @click="showSubposition = !showSubposition"
                class="au-staff-subtitle"
                v-text="position"
            />
        </v-slide-y-reverse-transition>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class StaffCard extends Vue {
    @Prop({ default: null }) item;
    showSubposition = false;
    get position() {
        if (!this.item.subposition) return this.item.position;
        return this.showSubposition
            ? this.item.subposition
            : this.item.position;
    }
}
</script>