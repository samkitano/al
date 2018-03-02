<template>
  <div class="Top" role="banner">
    <a class="Top__logo" href="/">
      <svg-icon h="2em" w="2em" icon="AL"></svg-icon>
      <span class="vishid">Home</span>
    </a>
    
    <a class="Top__current" :href="href">
      <svg-icon h="2em" w="2em" :icon="page"></svg-icon>
      <h4>{{ page }}</h4>
    </a>

    <a class="Top__burger" @click.prevent="openMenu">
      <svg-icon h="2em" w="2em" icon="Menu"></svg-icon>
      <span class="vishid">Menu</span>
    </a>
  </div>
</template>

<script>
  import Bus from '@/events/bus.js'
  import svgIcon from './svg-icon'

  export default {
    components: {
      svgIcon
    },
    computed: {
      page () {
        let r = this.$route.name

        if (r.split(' ').length > 1) {
          return 'Livros'
        }
        return r
      },
      href () {
        return this.$route.path
      }
    },
    methods: {
      openMenu () {
        Bus.$emit('openMenu')
      }
    }
  }
</script>
