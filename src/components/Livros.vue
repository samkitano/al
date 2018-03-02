<template>
  <section class="books">
    <book v-for="book in books" :key="book.title" :book="book"></book>
  </section>
</template>

<script>
  import books from '@/json/books.js'
  import book from './_book'

  export default {
    components: {
      book
    },
    data () {
      return {
        books
      }
    },
    name: 'Books'
  }
</script>
