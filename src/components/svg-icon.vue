<template>
  <svg role="img"
       v-if="vicon"
       :width="w"
       :height="h"
       :viewBox="vicon.box"
       xmlns="http://www.w3.org/2000/svg">
		<title>{{ vicon.icon }}</title>
    <path :d="vicon.d" :fill-rule="vicon.fill" :clip-rule="vicon.clip"/>
  </svg>
</template>

<script>
  import icons from '@/json/icons.js'
  import { find } from 'lodash'

  export default {
    data () {
      return {
        icons
      }
    },
    computed: {
      vicon () {
        return find(this.icons, { icon: this.icon })
      }
    },
    props: {
      w: {
        default: '1em',
        required: false,
        type: [String, Number]
      },
      h: {
        default: '1em',
        required: false,
        type: [String, Number]
      },
      icon: {
        required: true,
        type: String
      }
    }
  }
</script>
