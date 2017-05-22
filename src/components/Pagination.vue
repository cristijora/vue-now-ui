<template>
  <ul class="pagination" :class="paginationClass">
    <li class="page-item" @click="prevPage">
      <a class="page-link" aria-label="Previous">
        <span aria-hidden="true"><i class="fa fa-angle-double-left" aria-hidden="true"></i></span>
      </a>
    </li>
    <li class="page-item" :class="{active: currentActivePage === item}" v-for="item in range(minCount, maxCount)">
      <a class="page-link" @click="changePage(item)">{{item}}</a>
    </li>
    <li class="page-item">
      <a class="page-link" aria-label="Next" @click="nextPage">
        <span aria-hidden="true"><i class="fa fa-angle-double-right" aria-hidden="true"></i></span>
      </a>
    </li>
  </ul>
</template>
<script>
  export default{
    props: {
      type: {
        type: String,
        default: 'primary'
      },
      total: {
        type: Number,
        default: 5
      }
    },
    computed: {
      paginationClass() {
        return `pagination-${this.type}`
      },
      minCount() {
        const minPage = this.maxCount - this.pagesToDisplay
        if (minPage > 1) {
          return minPage
        }
        return 1
      },
      maxCount() {
        const maxPage = this.currentActivePage + this.pagesToDisplay
        if (maxPage < this.total) {
          const remainder = this.currentActivePage % this.pagesToDisplay
          if (remainder === 0) {
            return maxPage
          }
          return this.currentActivePage + (this.pagesToDisplay - remainder + 1)
        }
        return this.total
      }
    },
    data() {
      return {
        currentActivePage: 1,
        pagesToDisplay: 5
      }
    },
    methods: {
      range(min, max) {
        let arr = []
        for (var i = min; i < max; i++) {
          arr.push(i)
        }
        return arr
      },
      changePage(item) {
        this.currentActivePage = item
      },
      nextPage() {
        if (this.currentActivePage < this.total) {
          this.currentActivePage++
        }
      },
      prevPage() {
        if (this.currentActivePage > 1) {
          this.currentActivePage--
        }
      }
    }
  }
</script>
<style lang="scss" src="@sass/now-ui-kit/_pagination.scss">
</style>
