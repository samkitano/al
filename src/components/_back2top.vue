<template>
  <transition name="back2top-fade">
    <div class="Back2top" v-show="visible" @click="back2Top">
      <span>{{ text }}<svg-icon icon="top"></svg-icon></span>
    </div>
  </transition>
</template>

<script>
import svgIcon from './svg-icon'

export default {
  components: {
    svgIcon
  },
  name: 'Back2Top',
  props: {
    text: {
      type: String,
      default: 'Topo'
    },
    visibleOffset: {
      type: [String, Number],
      default: 600
    }
  },
  data () {
    return {
      visible: false
    }
  },
  created () {
    let catchScroll = () => {
      this.visible = (window.pageYOffset > parseInt(this.visibleOffset))
    }
    window.smoothscroll = () => {
      let currentScroll = document.documentElement.scrollTop || document.body.scrollTop

      if (currentScroll > 0) {
        window.requestAnimationFrame(window.smoothscroll)
        window.scrollTo(0, currentScroll - (currentScroll / 5))
      }
    }
    window.onscroll = catchScroll
  },
  methods: {
    back2Top () {
      window.smoothscroll()
    }
  }
}
</script>
