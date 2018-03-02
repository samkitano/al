<template>
  <section class="Entrevistas">
    <div class="media-choice">
      <ul>
        <li><a :class="show === 'e1' ? 'link active' : 'link'" href="#" @click.prevent="play('e1')">Entrevista no Escorial a tv eslovena</a></li>
        <li><a :class="show === 'e2' ? 'link active' : 'link'" href="#" @click.prevent="play('e2')">Entrevista a João Almeida, Antena 2</a></li>
      </ul>
    </div>

    <transition name="fade">
      <div class="video" v-if="show === 'e1'">
        <video src="../assets/e1.webm" :poster="poster1" controls></video>
      </div>

      <div class="audio" v-if="show === 'e2'">
        <div class="audio-poster">
          <img :src="poster2" alt="">
        </div>

        <audio controls>
          <source src="../assets/e2.ogg" type='audio/ogg'>
          <source src="../assets/e2.mp3" type='audio/mpeg'>
          <source src="../assets/e2.wav" type='audio/wav'>
        </audio>
      </div>
    </transition>
  </section>
</template>

<script>
  import poster1 from '@/assets/poster1.jpg'
  import poster2 from '@/assets/poster2.png'

  export default {
    data () {
      return {
        poster1,
        poster2,
        show: 'e1'
      }
    },
    methods: {
      play (item) {
        this.show = item
      }
    }
  }
</script>
