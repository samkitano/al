<template>
  <div id="app">
    <vTop></vTop>
    <router-view></router-view>
    <hr>
    <v-nav></v-nav>
    <v-footer></v-footer>
    <back2top></back2top>
  </div>
</template>

<script>
  import Bus from '@/events/bus.js'
  import vNav from './components/navigation'
  import vFooter from './components/footer'
  import vTop from './components/top-nav'
  import back2top from './components/_back2top'

  export default {
    components: {
      vFooter,
      vNav,
      vTop,
      back2top
    },
    name: 'app',
    watch: {
      '$route' () {
        Bus.$emit('closeMenu')
      }
    }
  }
</script>
