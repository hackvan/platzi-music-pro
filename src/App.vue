<template lang="pug">
  #app
    section.section
      nav.navbar.has-shadow
        .container
          .field.has-addons.has-addons-centered
            .control.is-expanded
              input.input.is-large(
                type="text",
                placeholder="Buscar canciones",
                v-model="searchQuery"
                )
            .control
              a.button.is-primary.is-large(v-on:click="search") Buscar
            .control
              a.button.is-danger.is-large &times;
          p.help.is-info
            small {{ searchMessage }}

      .container.results
        .columns
          .column(v-for="track in tracks") {{ track.name }} - {{ track.artist }}
</template>

<script>
const tracks = [
  { name: 'Muchacha', artist: 'Luis Alberto Spinetta' },
  { name: 'Hoy Aca en el baile', artist: 'El pepo' },
  { name: 'I was made for loving you', artist: 'Kiss' }
]

export default {
  name: 'app',
  data () {
    return {
      searchQuery: '',
      tracks: []
    }
  },
  computed: {
    searchMessage () {
      return `Encontrados: ${this.tracks.length}`
    }
  },
  methods: {
    search () {
      this.tracks = tracks
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';

  .results {
    margin-top: 30px;
  }
</style>
