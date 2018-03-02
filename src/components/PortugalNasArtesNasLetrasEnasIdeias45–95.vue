<template>
  <section class="book">
    <h2 class="no-top">Portugal nas Artes, nas Letras e nas Ideias 45 – 95</h2>
    
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
          {id: 1, src: require('@/assets/books/samples/sample_portugal-nas-artes-nas-letras-e-nas-ideias-45-95.jpg'), alt: 'Página Interior'},
          {id: 2, src: require('@/assets/books/samples/sample_portugal-nas-artes-nas-letras-e-nas-ideias-45-95-ft.jpg'), alt: 'Ficha Técnica'}
        ]
      }
    }
  }
</script>
