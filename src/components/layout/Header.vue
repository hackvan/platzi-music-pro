<template lang="pug">
  section.hero.is-success
    .hero-head
      header.navbar
        .navbar-start
          .navbar-item
            strong.has-text-white Platzi Music
        .navbar-end.navbar-menu

    .hero-body
      .container.has-text-centered
        h1.title Platzi Music
        h2.subtitle Canciones que estan Vue...nisimas
        pm-player
</template>

<script>
import PmPlayer from '@/components/Player.vue'

export default {
  components: { PmPlayer }
}
</script>
