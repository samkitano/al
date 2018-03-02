<template>
  <section class="bio">
    <article class="bio" lang="pt">
      <figure class="no-top" style="height:496px">
        <img-loader :hiResSrc="hRes1" :loResSrc="lRes1" h="496" w="936"></img-loader>
        <figcaption>António Laginha</figcaption>
      </figure>

      <div class="fragment" v-html="part1"></div>

      <figure>
        <img-loader :hiResSrc="hRes2" :loResSrc="lRes2" h="564" w="375"></img-loader>
        <figcaption>António Laginha, Amália Rodrigues e José Rubio</figcaption>
      </figure>
      
      <div class="fragment" v-html="part2"></div>

      <figure>
        <img-loader :hiResSrc="hRes3" :loResSrc="lRes3" h="564" w="375"></img-loader>
        <figcaption>António Laginha, com a Vortice Dance</figcaption>
      </figure>

      <div class="fragment" v-html="part3"></div>

      <figure>
        <img-loader :hiResSrc="hRes4" :loResSrc="lRes4" h="564" w="375"></img-loader>
        <figcaption>António Laginha, Maurice Béjart e Afonso Laginha</figcaption>
      </figure>

      <div class="fragment" v-html="part4"></div>
    </article>
  </section>
</template>

<script>
  import bio1pt from '@/texts/bio-1-pt.js'
  import bio2pt from '@/texts/bio-2-pt.js'
  import bio3pt from '@/texts/bio-3-pt.js'
  import bio4pt from '@/texts/bio-4-pt.js'
  import hRes1 from '@/assets/bio/img-01-hi.jpg'
  import lRes1 from '@/assets/bio/img-01-lo.jpg'
  import hRes2 from '@/assets/bio/img-02-hi.jpg'
  import lRes2 from '@/assets/bio/img-02-lo.jpg'
  import hRes3 from '@/assets/bio/img-04-hi.jpg'
  import lRes3 from '@/assets/bio/img-04-lo.jpg'
  import hRes4 from '@/assets/bio/img-03-hi.jpg'
  import lRes4 from '@/assets/bio/img-03-lo.jpg'
  import imgLoader from './img-loader'

  export default {
    components: {
      imgLoader
    },
    data () {
      return {
        hRes1,
        lRes1,
        hRes2,
        lRes2,
        hRes3,
        lRes3,
        hRes4,
        lRes4,
        part1: bio1pt.replace(/\s\s+/g, ' '),
        part2: bio2pt.replace(/\s\s+/g, ' '),
        part3: bio3pt.replace(/\s\s+/g, ' '),
        part4: bio4pt.replace(/\s\s+/g, ' ')
      }
    },
    name: 'Bio'
  }
</script>
