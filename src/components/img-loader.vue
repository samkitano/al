<style scoped>
  canvas {
    position: absolute
  }
  .placeholder {
    background-color: rgba(0,0,0,.05)
  }
  .blur-transition {
    transition: opacity linear .6s 0s;
    opacity: 1
  }
  .blur-enter, .blur-leave {
    opacity: 0
  }
  img, canvas {
    width: 100%;
    margin: 0 auto;
    display: block
  }
</style>

<template>
  <transition-group name="blur" tag="div">
    <div v-show="currentSrc === null" class="placeholder blur-transition" key="placeholder"></div>
    <canvas v-show="currentSrc === loResSrc" :height="h" :width="w" key="canvas" class="blur-transition"></canvas>
    <img alt="Imagem" v-show="currentSrc === hiResSrc" :src="hiResSrc" key="image" class="blur-transition"></img>
  </transition-group>
</template>

<script>
  export default {
    props: {
      hiResSrc: {
        required: true,
        type: String
      },
      loResSrc: {
        required: true,
        type: String
      },
      h: {
        required: true,
        type: [String, Number]
      },
      w: {
        required: true,
        type: [String, Number]
      }
    },

    data: function () {
      return {
        currentSrc: null
      }
    },

    mounted: function () {
      let loResImg = new Image()
      let hiResImg = new Image()
      let context = this.$el.getElementsByTagName('canvas')[0].getContext('2d')

      loResImg.onload = () => {
        context.drawImage(loResImg, 0, 0)
        this.currentSrc = this.loResSrc
        this.$el.parentElement.removeAttribute('style')
      }

      hiResImg.onload = () => {
        setTimeout(() => {
          this.currentSrc = this.hiResSrc
        }, 10)
      }

      loResImg.src = this.loResSrc
      hiResImg.src = this.hiResSrc
    }
  }
</script>
