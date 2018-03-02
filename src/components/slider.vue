<style scoped>
  figure {
    margin: 0;
    border: none
  }
  .Page {
    text-align: center
  }
  .Page__content img {
    width: 100%
  }
</style>

<template>
  <div class="Page">
    <div class="Slider">
      <v-touch v-on:swipeleft="forward()" v-on:swiperight="back()" class="Slider__overflow">
        <figure v-for="slide in slides"
              :style="`background-image: url('${slide.src}')`"
              :key="slide.id"
              :class="elClass(slide.id)"
        >
          <figcaption v-if="slide.alt && !noCaption" v-html="slide.alt"></figcaption>
        </figure>
      </v-touch>
    </div>

    <div class="Selector">
      <div role="button" :class="firstClass" @click.prevent="first()">
        <svg-icon h="1.5em" w="1.5em" icon="fastback"></svg-icon>
      </div>

      <div role="button" :class="previousClass" @click.prevent="back()">
        <svg-icon h="1.5em" w="1.5em" icon="stepback"></svg-icon>
      </div>
      
      <div class="Selector_count"><h3>Pág. {{ currentSlide }}/{{ slides.length }}</h3></div>

      <div role="button" :class="lastClass" @click.prevent="last()">
        <svg-icon h="1.5em" w="1.5em" icon="fastforward"></svg-icon>
      </div>

      <div role="button" :class="nextClass" @click.prevent="forward()">
        <svg-icon h="1.5em" w="1.5em" icon="stepforward"></svg-icon>
      </div>
    </div>

    <div :class="captionClass" v-if="noCaption">
      <div class="Slider__caption__text" v-html="currentAlt"></div>
    </div>
  </div>
</template>

<script>
  import svgIcon from './svg-icon'

  export default {
    components: {
      svgIcon
    },
    computed: {
      currentAlt () {
        return this.slides[this.currentSlide - 1].alt
      },
      firstClass () {
        let disabled = this.isFirstPage ? 'disabled' : ''

        return `Selector_first ${disabled}`
      },
      isFirstPage () {
        return this.currentSlide === 1
      },
      isLastPage () {
        return this.currentSlide === this.slides.length
      },
      lastClass () {
        let disabled = this.isLastPage ? 'disabled' : ''

        return `Selector_last ${disabled}`
      },
      nextClass () {
        let disabled = this.isLastPage ? 'disabled' : ''

        return `Selector_next ${disabled}`
      },
      nextSlide () {
        if (this.currentSlide === this.slides.length) {
          return 1
        }

        return this.currentSlide + 1
      },
      previousClass () {
        let disabled = this.isFirstPage ? 'disabled' : ''

        return `Selector_previous ${disabled}`
      },
      prevSlide () {
        if (this.currentSlide === 1) {
          return this.slides.length
        }

        return this.currentSlide - 1
      }
    },
    data () {
      return {
        currentSlide: 1,
        captionClass: 'Slider__caption_open card'
      }
    },
    methods: {
      elClass (id) {
        switch (id) {
          case this.currentSlide:
            return 'Slide Slide_current'
          case this.prevSlide:
            return 'Slide Slide_prev'
          case this.nextSlide:
            return 'Slide Slide_next'
          default:
            return 'Slide Slide_transition'
        }
      },
      changeSlideTo (n) {
        this.captionClass = 'Slider__caption_close card'

        if (!this.noCaption) {
          this.currentSlide = n
          return
        }

        setTimeout(() => {
          this.currentSlide = n
        }, 500)
      },
      last () {
        this.changeSlideTo(this.slides.length)
      },
      first () {
        this.changeSlideTo(1)
      },
      back () {
        if (this.currentSlide === 1) {
          return false
        }

        this.changeSlideTo(this.currentSlide - 1)
      },
      forward () {
        if (this.currentSlide === this.slides.length) {
          return false
        }

        this.changeSlideTo(this.currentSlide + 1)
      }
    },
    name: 'slider',
    props: {
      slides: {
        required: true,
        type: Array
      },
      noCaption: {
        required: false,
        type: Boolean,
        default: true
      }
    },
    watch: {
      'currentSlide' () {
        this.captionClass = 'Slider__caption_open card'
      }
    }
  }
</script>
