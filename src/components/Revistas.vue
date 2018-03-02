<template>
  <section class="gallery">
    <slider :slides="slides"></slider>
  </section>
</template>

<script>
  import slides from '@/json/magazines.js'
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
