<template>
  <div class="Book card">
    <div class="Book__cover">
      <img :src="cover.img" :alt="cover.alt">
      
      <p class="year"><svg-icon icon="calendar"></svg-icon> {{ book.year }}</p>
      
      <div v-if="book.links">
        <ul>
          <li v-for="link in book.links" :key="link.type">
            <router-link class="link" :to="link.uri">{{ link.title }}</router-link>
          </li>
        </ul>
      </div>
    </div>

    <div class="Book__data">
      <h2 class="no-top">{{ book.title }}</h2>
      <div v-html="book.body"></div>
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
      showModal () {
        return this.modalContent !== ''
      },
      cover () {
        return {
          alt: `Capa ${this.book.title}`,
          img: this.book.cover
        }
      }
    },
    name: 'Book',
    props: {
      book: {
        required: true,
        type: Object
      }
    }
  }
</script>
