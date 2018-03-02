<template>
  <section class="hello" role="main">
    <article>
      <figure class="no-top" style="height:569px;">
        <img-loader :hiResSrc="hRes" :loResSrc="lRes" h="569" w="920"></img-loader>
        <figcaption>António Laginha</figcaption>
      </figure>

      <header>
        <hgroup>
          <h1>ANTÓNIO LAGINHA</h1>
          <h2>Bailarino, investigador, jornalista, escritor e professor</h2>
        </hgroup>
      </header>

      <hr>

      <blockquote class="Quote card" v-for="quote in quotes" :key="quote.author">
        <h4 class="Quote__title" v-html="quote.title"></h4>
        <div class="Quote__body" v-html="quote.text"></div>
        <div class="Quote__author" v-html="quote.author"></div>
        <div class="Quote__in" v-html="quote.in"></div>
      </blockquote>
    </article>
  </section>
</template>

<script>
  import imgLoader from './img-loader'
  import hRes from '@/assets/al-front-hi.jpg'
  import lRes from '@/assets/al-front-lo.jpg'
  import quotes from '@/json/quotes.js'

  export default {
    components: {
      imgLoader
    },
    name: 'hello',
    data () {
      return {
        hRes,
        lRes,
        quotes
      }
    }
  }
</script>
