<style>
  figure figcaption {
    bottom: -50%;
  }
  figure:hover figcaption {
    bottom: 1em
  }
</style>

<template>
  <section class="book">
    <h2 class="no-top">O segredo de Natália</h2>
    
    <slider :slides="slides"></slider>
  </section>
</template>

<script>
import slides from '@/json/o_segredo_de_natalia.js'
import slider from './slider'

export default {
  components: {
    slider
  },
  data () {
    return {
      slides
    }
  }
}
</script>
