<template>
  <div class="Article card">
    <h4 class="Article__title" v-if="item.title" v-html="item.title"></h4>
    <p v-if="item.date"><svg-icon h="1em" w="1em" icon="calendar"></svg-icon> <span v-html="item.date"></span></p>
    <p v-if="item.medium"><svg-icon h="1em" w="1em" icon="Revistas"></svg-icon> <span v-html="item.medium"></span></p>
    <p v-if="item.group"><svg-icon h="1em" w="1em" icon="institution"></svg-icon> <span v-html="item.group"></span></p>
    <p v-if="item.venue"><svg-icon h="1em" w="1em" icon="marker"></svg-icon> <span v-html="item.venue"></span></p>
    <p v-if="item.notes"><svg-icon h="1em" w="1em" icon="asterisk"></svg-icon> <span v-html="item.notes"></span></p>
  </div>
</template>

<script>
  import svgIcon from './svg-icon'

  export default {
    components: {
      svgIcon
    },
    computed: {
      item () {
        if (this.article.hasOwnProperty('_highlightResult')) {
          return {
            title: this.article.title,
            date: this.article._highlightResult.date ? this.article._highlightResult.date.value : this.article.date,
            medium: this.article._highlightResult.medium ? this.article._highlightResult.medium.value : this.article.medium,
            group: this.article._highlightResult.group ? this.article._highlightResult.group.value : this.article.group,
            venue: this.article._highlightResult.venue ? this.article._highlightResult.venue.value : this.article.venue,
            notes: this.article._highlightResult.notes ? this.article._highlightResult.notes.value : this.article.notes
          }
        }
        return this.article
      }
    },
    name: 'ArticlesPage',
    props: {
      article: {
        required: true,
        type: Object
      }
    }
  }
</script>
