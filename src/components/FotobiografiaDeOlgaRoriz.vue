<template>
  <section class="book">
    <h2 class="no-top">Fotobiografia de Olga Roriz</h2>
    
    <figure>
      <img-loader :hiResSrc="hRes" :loResSrc="lRes" h="1692" w="2192"></img-loader>
      <figcaption>Página interior da Fotobiografia de Olga Roriz</figcaption>
    </figure>
  </section>
</template>

<script>
  import imgLoader from './img-loader'
  import hRes from '@/assets/books/samples/sample_olga-roriz-hi.jpg'
  import lRes from '@/assets/books/samples/sample_olga-roriz-lo.jpg'

  export default {
    components: {
      imgLoader
    },
    data () {
      return {
        hRes,
        lRes
      }
    }
  }
</script>
