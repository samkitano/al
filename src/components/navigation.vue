<template>
  <aside class="Navigation">
    <nav :class="menuClass">
      <a class="home-link" href="/">antoniolaginha.com</a>
      <ul class="Menu__nav">
        <li><router-link to="/bio"><svg-icon h="1em" w="1em" icon="Bio"></svg-icon> Bio</router-link></li>
        <li><router-link to="/galeria"><svg-icon h="1em" w="1em" icon="Galeria"></svg-icon> Galeria</router-link></li>
        <li><router-link to="/livros"><svg-icon h="1em" w="1em" icon="Livros"></svg-icon> Livros</router-link></li>
        <li><router-link to="/revistas"><svg-icon h="1em" w="1em" icon="Revistas"></svg-icon> Revistas</router-link></li>
        <li><router-link to="/artigos"><svg-icon h="1em" w="1em" icon="Artigos"></svg-icon> Artigos</router-link></li>
        <li><router-link to="/entrevistas"><svg-icon h="1em" w="1em" icon="Entrevistas"></svg-icon> Entrevistas</router-link></li>
      </ul>

      <a class="close-nav" @click.prevent="closeMenu">
        <svg-icon h="1em" w="1em" icon="Fechar"></svg-icon>
        <span>Topo</span>
      </a>
    </nav>
  </aside>
</template>

<script>
  import Bus from '@/events/bus.js'
  import svgIcon from './svg-icon'

  export default {
    beforeDestroy () {
      Bus.$off('openMenu', this.openMenu)
      Bus.$off('closeMenu', this.closeMenu)
    },
    created () {
      Bus.$on('openMenu', this.openMenu)
      Bus.$on('closeMenu', this.closeMenu)
    },
    components: {
      svgIcon
    },
    computed: {
      menuClass () {
        return this.showMenu ? 'Menu open' : 'Menu'
      }
    },
    data () {
      return {
        showMenu: false
      }
    },
    methods: {
      closeMenu () {
        this.showMenu = false
      },
      openMenu () {
        this.showMenu = true
      }
    }
  }
</script>
