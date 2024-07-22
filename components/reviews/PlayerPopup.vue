<template>
  <div class="player" :style="`background: url(${poster}) center/contain no-repeat`">
    <v-btn fab absolute class="player__button" @click="play">
      <img
        class="player__play"
        src="@/assets/images/reviews/play.svg"
        width="14"
        height="18"
        alt="play"
      />
    </v-btn>
    <img v-if="img !== 'error'" class="player__background" :src="img" alt="bg" />
    <video v-if="videoSrc !== 'error'" preload="none" :src="videoSrc" :poster="poster" class="player__video player__video--preview" max-height="100%"></video>
    <v-dialog
      v-model="videoStatus"
      class="player__popup"
      content-clas="player__popup"
      max-width="max-content"
      max-height="75vh"
      @input="$emit('status-change', $event)"
      @click:outside="close"
    >
      <v-card class="player__wrapper">
        <video v-if="videoSrc !== 'error'" preload="none" :src="videoSrc" class="player__video" max-height="100%" ref="nativeVideo" controls></video>
        <youtube v-if="videoId !== 'error'" :video-id="videoId" ref="youtubeVideo"></youtube>
        <div v-if="videoIframe !== 'error' && videoStatus" class="iframeVideo">
          <iframe :src="videoIframe" allow="autoplay"></iframe>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Model } from "vue-property-decorator";

@Component({})
export default class Player extends Vue {
  @Model("status-change", { default: false }) videoStatus!: boolean;
  @Prop({ default: "error" }) img: string;
  @Prop({ default: "error" }) videoId: string;
  @Prop({ default: "error" }) videoSrc: string;
  @Prop({ default: "error" }) videoIframe: string;
  @Prop({ default: "error" }) poster: string;

  play() {
    this.videoStatus = true;
    this.$nextTick(() => {
      if (this.videoSrc !== 'error') {
        const video: any = this.$refs.nativeVideo;
        video.play()
      } else if (this.videoId !== 'error') {
        const video: any = this.$refs.youtubeVideo;
        video.player.playVideo()
      }
    })
  }

  close() {
    if (this.videoSrc !== 'error') {
      const video: any = this.$refs.nativeVideo;
      video.pause()
    } else if (this.videoId !== 'error') {
      const video: any = this.$refs.youtubeVideo;
      video.player.pauseVideo()
    }
  }
}
</script>

<style scoped lang="scss">
.player {
  max-width: 733px;
  max-height: 390px;
  min-width: 390px;
  min-height: 390px;
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}
.iframeVideo {
  position: relative;
  width: 100vw;
  max-width: 700px;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
}

.iframeVideo iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}
.player__popup {
  display: flex;
}

.player__background {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;

  border-radius: 8px;
}

.player__button {
  width: 64px;
  height: 64px;
  background: linear-gradient(243.77deg, #a356f3 -7.35%, #6a2be3 107.02%);
  box-shadow: 0px 2px 25px rgba(113, 48, 229, 0.530649);

  z-index: 2;
}

.player__wrapper {
  max-height: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
}

.player__play {
  position: absolute;
  max-width: 14px;
  height: 18px;
  margin-left: 4px;
  cursor: pointer;
}

.player__video {
  max-height: 75vh;
  height: 100%;
  border-radius: 5px;
}

.player__video--preview {
  max-width: 100%;
  max-height: 267px;
}

@media (max-width: $w-sm) {
  .player {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
  }
}
</style>
