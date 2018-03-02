<template>
  <section class="book">
    <h2 class="no-top">Dançaram em Lisboa</h2>
    
    <slider :slides="slides"></slider>
  </section>
</template>

<script>
  import slider from './slider'

  export default {
    components: {
      slider
    },
    data () {
      return {
        slides: [
          {id: 1, src: require('@/assets/books/samples/sample_dancaram-em-lisboa-1.jpg'), alt: 'Página Interior'},
          {id: 2, src: require('@/assets/books/samples/sample_dancaram-em-lisboa-2.jpg'), alt: 'Página Interior'}
        ]
      }
    }
  }
</script>
