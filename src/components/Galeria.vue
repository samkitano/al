<template>
  <section class="gallery">
    <slider :slides="slides" :no-caption="false"></slider>
  </section>
</template>

<script>
  import slides from '@/json/gallery.js'
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
