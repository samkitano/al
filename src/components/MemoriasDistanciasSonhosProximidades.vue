<template>
  <section class="book" v-html="mdsp"></section>
</template>

<script>
  import mdsp from '@/json/memorias_distancias_sonhos_proximidades.js'

  export default {
    data () {
      return {
        mdsp
      }
    }
  }
</script>
