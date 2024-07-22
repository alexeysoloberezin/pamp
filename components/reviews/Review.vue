<template>
  <v-card class="rev-card">
    <div class="rev-card__header profile">
      <div class="profile__header">
        <img :src="profileImage || require('@/assets/images/reviews/reviewAvaPlaceholder.png')"
             alt="Profile image" class="profile__img"
             :style="{objectFit: profileImage ? 'cover' : 'contain'}"
        />
<!--        <iframe v-else :src="profileImage" class="profile__img" controls="false"></iframe>-->
        <h3 v-if="name" :class="['profile__name', type === 'video' ? 'profile__name--video' : '']">
          {{ name }}
        </h3>
      </div>
      <div v-if="person || formatedTime || location" class="profile__extra">
        <div class="profile__income">
          <span class="profile__text profile__text--important">
            {{ person }}
          </span>
          <span v-if="formatedTime" class="profile__text">
            на платформе
            <span class="profile__text profile__text--important">
              {{ formatedTime }}
            </span>
          </span>
        </div>
        <div v-if="location" class="profile__location">
          <img
            src="@/assets/images/reviews/point.svg"
            alt="Location"
            class="profile__location-img"
          />
          <span class="profile__text profile__text--dedicated">
            {{ location }}
          </span>
        </div>
      </div>
    </div>
    <div class="rev-card__body rev-body" ref="body">

      <p
        v-if="type === 'text'"
        class="rev-body__text"
      >
        {{ text }}
      </p>
      <img
        v-if="type === 'image'"
        class="rev-body__img"
        :src="img"
        @click="imageZoomStatus = true"
      />
      <p-image-zoom v-if="type === 'image'" :src="img" v-model="imageZoomStatus" />
      <p-player
        v-if="type === 'video'"
        class="rev-body__video"
        :video-iframe="videoSrc"
        :img="videoBackground"
        :poster="poster"
      />

      <div v-if="type === 'voice'" class="rev-body__voice">
        <video :src="videoSrc" id="video" preload="none" width="0px" height="0px"></video>
        <v-btn fab depressed text @click="play">
          <img src="@/assets/images/reviews/play-voice.svg" alt="Play" class="rev-body__voice-play" v-show="!isPlayed" />
          <img src="@/assets/images/reviews/pause-voice.svg" alt="Pause" class="rev-body__voice-play" v-show="isPlayed" />
        </v-btn>
        <div id="waveform"></div>
      </div>
    </div>
    <div class="rev-card__down-side">
      <v-rating
        dense
        :value="rating"
        class="rev-card__rating"
        size="25"
        color="#FDE126"
        background-color="#FDE126"
        length="5"
        half-increments
        readonly
      />
      <span v-if="date" class="rev-card__date">
        {{ date }}
      </span>
    </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import PPlayer from "./PlayerPopup.vue";
import PImageZoom from "./ImageZoom.vue";

@Component({
  components: {
    PPlayer,
    PImageZoom,
  },
})
export default class Review extends Vue {
  @Prop({ default: "error" }) profileImage!: string;

  @Prop({ default: "error" }) name!: string;

  @Prop({ default: "error" }) location!: string;

  @Prop({ default: "text" }) type!: string;

  @Prop({ default: "error" }) person!: string;

  @Prop({ default: "error" }) text!: string;

  @Prop({ default: "error" }) time!: string;

  @Prop({ default: "error" }) img!: string;

  @Prop({ default: "error" }) videoBackground!: string;

  @Prop({ default: "error" }) videoSrc!: string;

  @Prop({ default: "error" }) poster!: string;

  @Prop({ default: "error" }) voiceId!: string;

  @Prop({ default: 5 }) rating!: number;
  @Prop({ default: '' }) tab!: string;

  @Prop({ default: "" }) date!: string;

  imageZoomStatus: boolean = false;

  isPlayed: boolean = false;

  wavesurfer;

  previewCover: boolean = !!this.profileImage
  avatar: any = this.profileImage

  async mounted() {
    if (this.type === 'voice') {
      const body: any = this.$refs.body;
      this.wavesurfer = this.$wavesurfer.create({
        container: body.querySelector('#waveform'),
        waveColor: '#000000',
        progressColor: '#6138DA',
        cursorColor: '#6138DA',
        barWidth: 3,
        barRadius: 2,
        barMinHeight: 5,
        cursorWidth: 0,
        height: 50,
        barGap: 3,
        mediaControls: true,
        responsive: true,
      });

      this.wavesurfer.load(body.querySelector('#video'));
    }
  }

  play() {
    this.isPlayed = !this.isPlayed;
    this.wavesurfer.playPause();
  }

  get isGoogleDrivePreview(){
    if(!this.profileImage) return false

    return this.profileImage.includes('drive.google')
  }

  get formatedTime()  {
    const currentDate = new Date();
    const dateParts = this.time.split('.');
    const inputDate = new Date(`${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`); // Создаем дату в формате "год-месяц-день"

    const yearsDiff = currentDate.getFullYear() - inputDate.getFullYear();
    const monthsDiff = currentDate.getMonth() - inputDate.getMonth();
    const daysDiff = currentDate.getDate() - inputDate.getDate();

    if (yearsDiff > 0) {
      return this.formatYears(yearsDiff);
    } else if (monthsDiff > 0) {
      return this.formatMonths(monthsDiff);
    } else if (daysDiff > 0) {
      return this.formatDays(daysDiff);
    }
    return this.time
  }

  formatYears(years) {
    if (years >= 5 && years <= 20) {
      return `${years} лет`;
    } else {
      const lastDigit = years % 10;
      if (lastDigit === 1) {
        return `${years} год`;
      } else if (lastDigit >= 2 && lastDigit <= 4) {
        return `${years} года`;
      } else {
        return `${years} лет`;
      }
    }
  }

  formatMonths(months) {
    if(months === 1) return `1 месяц`
    if (months >= 5 && months <= 12) {
      return `${months} месяцев`;
    } else {
      return `${months} месяца`;
    }
  }

  formatDays(days) {
    if (days >= 5 && days <= 20) {
      return `${days} дней`;
    } else {
      const lastDigit = days % 10;
      if (lastDigit >= 2 && lastDigit <= 4) {
        return `${days} дня`;
      } else {
        return `${days} дней`;
      }
    }
  }
}
</script>

<style scoped lang="scss">
.rev-card {
  width: 100%;
  max-width: 370px;

  border-radius: 15px;
  background: #ffffff;
  border: 1px solid #f7f7f7;
  box-sizing: border-box;

  box-shadow: 0px 16px 31px rgba(170, 142, 255, 0.2759) !important;
}

.profile {
  max-height: 131px;
  padding-top: 17px;
  padding-bottom: 19px;
  padding-left: 26px;
  padding-right: 16px;

  background: #f2f5ff;
}

.profile__header {
  display: flex;
  align-items: center;
}

.profile__img {
  width: 58px;
  height: 58px;
  border-radius: 100%;

  object-fit: cover;
}

.profile__name {
  margin-left: 21px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 17px;

  color: #000000;
}

.profile__name--video {
  width: 100%;

  margin-left: 0;

  text-align: center;
}

.profile__extra {
  margin-top: 18px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.profile__income {
  display: flex;
  flex-wrap: wrap;

  span {
    margin-right: 3px;
    margin-bottom: 1px;
    margin-top: 1px;
  }

  span:last-child {
    margin-right: 0;
  }
}

.profile__text {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;

  color: #000000;
}

.profile__text--important {
  color: #9b63ff;
  font-weight: 700;
}

.profile__text--dedicated {
  color: #9b63ff;
}

.profile__location {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-width: max-content;
}

.profile__location-img {
  margin-right: 9px;
}

.rev-body {
  display: flex;
  justify-content: center;
  align-items: center;
}

.rev-body__text {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  /* or 175% */

  color: #000000;

  padding: 24px 26px;
  margin-bottom: 0;
  padding-right: 16px;
}

.rev-body__img {
  max-width: 100%;
  max-height: 285px;
  height: 285px;

  margin-top: 30px;
  margin-bottom: 33px;
  margin-left: 17px;
  margin-right: 16px;

  overflow: auto;
  border-radius: 8px;

  cursor: pointer;
}

.rev-body__video {
  max-width: 317px;
  max-height: 267px;

  min-width: 317px;
  min-height: 267px;

  margin: 30px 16px;

  overflow: hidden;
}

.rev-body__voice {
  width: 100%;
  max-width: 100%;

  display: flex;
  align-items: center;

  margin-left: 26px;
  margin-right: 16px;
  margin-top: 35px;
  margin-bottom: 33px;

  background: #F2F5FF;
  border-radius: 25px;

  #waveform {
    width: 100%;

    margin-left: 35px;
    margin-right: 35px;

    cursor: pointer;
  }

  .rev-body__voice-play {
    margin-left: 2px;
    width: 15px;
  }
}

.rev-card__down-side {
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;

  margin-right: 16px;
  margin-left: 27px;
  margin-bottom: 13px;
  padding: 9px 0;

  border-top: 1px solid #ebf1f4;
}

.rev-card__date {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 12px;

  color: #9b63ff;
}

@media (max-width: $w-sm) {
  .rev-body__voice {
    margin-left: 16px;
  }
}
</style>
