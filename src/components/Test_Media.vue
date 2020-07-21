<template>
    <div class="" style="max-width: 100%; width: 100%; min-height: 10vh;">
        <q-media-player
            type="video"
            :sources="sources"
            :poster="poster"
            mobile-mode
            radius="0.5rem"
        >
            <template v-slot:overlay>
            <div>
                <img
                src="../assets/icon.png"
                style="width: 10vw; max-width: 50px;  opacity: 0.25;"
                >
            </div>
            </template>
        </q-media-player>
  </div>
</template>

<script>
export default {
  props: ['videoSrc'],
  data () {
    return {
      poster: 'media/TearsOfSteel/TearsOfSteel.jpeg',
      sources: [
        {
          src: 'http://www.peach.themazzone.com/durian/movies/sintel-2048-surround.mp4',
          type: 'video/mp4'
        }
      ]
    }
  }
}
</script>