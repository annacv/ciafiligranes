<template>
  <div :video-id="getVideoId(videoId)" class="video-container">
    <script src="https://www.youtube.com/iframe_api"></script>
    <div id="player"></div>
  </div>
</template>

<script>
export default {
  name: 'YTEmbed',

  data: () => ({
    player: null,
    youtubeId: ''
  }),

  props: {
    videoId: {
      type: String,
      default: ''
    }
  },

  mounted() {
    this.onYouTubeIframeAPIReady()
  },

  methods: {
    getVideoId(videoId) {
      this.youtubeId = videoId
    },
    async onYouTubeIframeAPIReady() {
      this.player = new YT.Player('player', {
        width: '640',
        height: '360',
        videoId: await this.youtubeId,
        playerVars: {
          origin: 'http://localhost:3000'
        }
      })
    }
  }
}
</script>
