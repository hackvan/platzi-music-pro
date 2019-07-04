<template lang="pug">
  .container
    pm-loader(v-show="isLoading")
    transition-group(name="fade" tag="div")
      .columns(v-if="track && track.album"
               v-show="!isLoading"
               v-bind:key="track.id")
        .column.is-3.has-text-centered
          figure.media-left
            p.image
              img(:src="track.album.images[0].url")
            p.button-bar
              a.button.is-primary.is-large
                span.icon(@click="selectTrack") ⏯

        .column.is-8
          .panel
            .panel-heading
              h1.title {{ trackTitle }}
            .panel-block
              .article.media
                .media.content
                  .content
                    ul(v-for="(v, k) in track")
                      li
                        strong {{ k }}:&nbsp;
                        span {{ v }}
                nav.level
                  .level-left
                    a.level-item
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

import trackMixin from '@/mixins/track'

import PmLoader from '@/components/shared/Loader.vue'

export default {
  components: { PmLoader },

  mixins: [ trackMixin ],

  data () {
    return {
      isLoading: false
    }
  },

  computed: {
    ...mapState(['track']),
    ...mapGetters(['trackTitle'])
  },

  created () {
    const id = this.$route.params.id
    this.isLoading = true

    if (!this.track || !this.track.id || this.track.id !== id) {
      this.getTrackById({ id: id })
        .then(() => {
          console.log('Track loaded...')
        })
    }
    this.isLoading = false
  },

  methods: {
    ...mapActions(['getTrackById'])
  }
}
</script>

<style lang="scss" scoped>
  .columns {
    margin: 20px;
  }

  .button-bar {
    margin-top: 20px;
  }
</style>
