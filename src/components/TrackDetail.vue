<template lang="pug">
  .container
    pm-loader(v-show="isLoading")
    .columns(v-show="!isLoading")
      .column
      .column.is-half
        pm-track(:track="track")
      .column
</template>

<script>
import trackService from '@/services/track'

import PmTrack from '@/components/Track.vue'

import PmLoader from '@/components/shared/Loader.vue'

export default {
  components: { PmTrack, PmLoader },
  data () {
    return {
      track: {},
      isLoading: false
    }
  },
  created () {
    const id = this.$route.params.id
    this.isLoading = true

    trackService.getById(id)
      .then(res => {
        this.track = res
        this.isLoading = false
      })
  }
}
</script>

<style lang="scss" scoped>
  .columns {
    margin: 20px;
  }
</style>
