<template>
  <section class="book" v-html="pontosComVista"></section>
</template>

<script>
  import pontosComVista from '@/json/pontos_com_vista.js'

  export default {
    data () {
      return {
        pontosComVista
      }
    }
  }
</script>
