<template lang="pug">
  section.hero.is-success
    .hero-head
      header.navbar
        .navbar-brand
          .navbar-item
              strong.has-text-white 📻 Platzi Music
        .navbar-menu.is-active
          .navbar-end
            router-link.navbar-item(:to="{ name: 'search' }") Buscar
            router-link.navbar-item(:to="{ name: 'about' }") Nosotros

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
