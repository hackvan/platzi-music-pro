<template lang="pug">
  #app
    pm-header

    pm-notification(v-show="showNotification")
      p(slot="body") No se encontraron resultados

    pm-loader(v-show="isLoading")
    section.section(v-show="!isLoading")
      nav.navbar
        .container
          .field.has-addons.has-addons-centered
            .control.is-expanded
              input.input.is-large(
                type="text",
                placeholder="Buscar canciones",
                v-model="searchQuery",
                v-on:keyup.enter="search"
                )
            .control
              a.button.is-primary.is-large(v-on:click="search") Buscar
            .control
              a.button.is-danger.is-large &times;
      .container
        p.help.is-info
          small {{ searchMessage }}

      .container.results
        .columns.is-multiline
          .column.is-one-quarter(v-for="track in tracks")
            //- pm-track(v-bind:track="track", v-on:select="selectTrack")
            //- pm-track(:track="track",       @select="selectTrack")
            pm-track(
              :class="{ 'is-active': track.id === selectedTrack }",
              :track="track",
              @select="setSelectedTrack")

    pm-footer
</template>

<script>
import trackService from '@/services/track'

import PmFooter from '@/components/layout/Footer.vue'
import PmHeader from '@/components/layout/Header.vue'

import PmTrack from '@/components/Track.vue'

import PmNotification from '@/components/shared/Notification.vue'
import PmLoader from '@/components/shared/Loader.vue'

export default {
  name: 'app',

  components: { PmFooter, PmHeader, PmTrack, PmNotification, PmLoader },
  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      showNotification: false,
      selectedTrack: ''
    }
  },
  computed: {
    searchMessage () {
      return `Encontrados: ${this.tracks.length}`
    }
  },
  watch: {
    showNotification () {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
    }
  },
  methods: {
    search () {
      if (!this.searchQuery) { return }

      this.isLoading = true

      trackService.search(this.searchQuery)
        .then(res => {
          this.showNotification = res.tracks.total === 0
          this.tracks = res.tracks.items
          this.isLoading = false
        })
    },
    setSelectedTrack (id) {
      this.selectedTrack = id
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';

  .results {
    margin-top: 30px;
  }

  .is-active {
    border: 3px #23d160 solid;
  }
</style>
