<template>
  <div class="Paginator">
    <ul v-show="showPagination" class="Pagination">
      <li :class="liPrevChunkClass">
        <a class="page-link" href="#" @click.prevent="setChunk(-1)"><svg-icon h="1em" w="1em" icon="fastback"></svg-icon></a>
      </li>

      <li :class="liPrevPageClass">
        <a class="page-link" href="#" @click.prevent="prev()"><svg-icon h="1em" w="1em" icon="stepback"></svg-icon></a>
      </li>

      <li :class="liPageItem(p)" v-for="p in pages" :key="p">
        <a class="page-link" role="button" @click.prevent="setPage(p)"><span class="page-item">{{ p }}</span></a>
      </li>

      <li :class="liNextPageClass">
        <a class='page-link' href="#" @click.prevent="next()"><svg-icon h="1em" w="1em" icon="stepforward"></svg-icon></a>
      </li>

      <li :class="liNextChunkClass">
        <a class='page-link' href="#" @click.prevent="setChunk(1)"><svg-icon h="1em" w="1em" icon="fastforward"></svg-icon></a>
      </li>
    </ul>

    <p v-show="showCount" class="Pagination__count">{{ count }}</p>
  </div>
</template>


<script>
  import Bus from '@/events/bus.js'
  import svgIcon from './svg-icon'

  export default {
    components: {
      svgIcon
    },
    props: {
      query: {
        required: false,
        type: String
      },
      for: {
        type: String,
        required: true
      },
      records: {
        type: Number,
        required: true
      },
      perPage: {
        type: [Number, String],
        required: false,
        default: 25
      },
      chunk: {
        type: Number,
        required: false,
        default: 3
      },
      countText: {
        type: String,
        required: false,
        default: 'A exibir de {from} a {to} de {count} {registos} {pesquisa}|{count} registos|Um registo'
      }
    },
    data () {
      return {
        Page: 1
      }
    },
    computed: {
      showPagination () {
        return this.totalPages > 1
      },
      showCount () {
        return parseInt(this.records)
      },
      liPrevChunkClass () {
        return `page-item item-prev-chunk ${this.allowedChunkClass(-1)}`
      },
      liNextChunkClass () {
        return `page-item item-next-chunk ${this.allowedChunkClass(1)}`
      },
      liPrevPageClass () {
        return `page-item item-prev-page ${this.allowedPageClass(this.page - 1)}`
      },
      liNextPageClass () {
        return `page-item item-next-page ${this.allowedPageClass(this.page + 1)}`
      },
      page () {
        return this.Page
      },
      pages () {
        if (!this.records) {
          return []
        }

        return range(this.paginationStart, this.pagesInCurrentChunk)
      },
      totalPages () {
        return this.records ? Math.ceil(this.records / parseInt(this.perPage)) : 1
      },
      totalChunks () {
        return Math.ceil(this.totalPages / this.chunk)
      },
      currentChunk () {
        return Math.ceil(this.page / this.chunk)
      },
      paginationStart () {
        return ((this.currentChunk - 1) * this.chunk) + 1
      },
      pagesInCurrentChunk () {
        return this.paginationStart + this.chunk <= this.totalPages ? this.chunk : this.totalPages - this.paginationStart + 1
      },
      count () {
        let from = ((this.page - 1) * parseInt(this.perPage)) + 1
        let to = this.page === (this.totalPages) ? this.records : from + parseInt(this.perPage) - 1
        let parts = this.countText.split('|')
        let i = Math.min(this.records === 1 ? 2 : this.totalPages === 1 ? 1 : 0, parts.length - 1)
        let srch = this.query ? ` para a pesquisa "${this.query}"` : ''
        let reg = this.query ? 'resultados' : 'registos'

        return parts[i]
          .replace('{count}', this.records)
          .replace('{from}', from)
          .replace('{to}', to)
          .replace('{registos}', reg)
          .replace('{pesquisa}', srch)
      }
    },
    methods: {
      animateToTop () {
        for (let i = window.scrollY; i > 0; i--) {
          setTimeout(() => {
            window.scroll(0, i)
          }, 100)
        }
      },
      liPageItem (page) {
        return `page-item ${this.activeClass(page)}`
      },
      setPage (page) {
        if (this.allowedPage(page)) {
          this.paginate(page)
          this.animateToTop()
        }
      },
      paginate (page) {
        this.Page = page
        Bus.$emit(`vue-pagination::${this.for}`, page)
      },
      next () {
        return this.setPage(this.page + 1)
      },
      prev () {
        return this.setPage(this.page - 1)
      },
      nextChunk () {
        return this.setChunk(1)
      },
      prevChunk () {
        return this.setChunk(-1)
      },
      setChunk (direction) {
        this.setPage((((this.currentChunk - 1) + direction) * this.chunk) + 1)
      },
      allowedPage (page) {
        return page >= 1 && page <= this.totalPages
      },
      allowedChunk (direction) {
        return (direction === 1 && this.currentChunk < this.totalChunks) || (direction === -1 && this.currentChunk > 1)
      },
      allowedPageClass (direction) {
        return this.allowedPage(direction) ? '' : 'disabled'
      },
      allowedChunkClass (direction) {
        return this.allowedChunk(direction) ? '' : 'disabled'
      },
      activeClass (page) {
        return this.page === page ? 'active' : ''
      }
    }
  }

  function range (start, count) {
    return Array.apply(0, Array(count))
      .map((element, index) => {
        return index + start
      }
    )
  }
</script>
