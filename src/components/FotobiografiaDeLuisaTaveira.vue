<template>
  <section class="book">
    <h2 class="no-top">Fotobiografia de Luísa Taveira</h2>

    <figure>
      <img-loader :hiResSrc="hRes" :loResSrc="lRes" h="2351" w="3044"></img-loader>
      <figcaption>Página interior da Fotobiografia de Luísa Taveira</figcaption>
    </figure>
  </section>
</template>

<script>
  import imgLoader from './img-loader'
  import hRes from '@/assets/books/samples/sample_luisa-taveira-hi.jpg'
  import lRes from '@/assets/books/samples/sample_luisa-taveira-lo.jpg'

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
