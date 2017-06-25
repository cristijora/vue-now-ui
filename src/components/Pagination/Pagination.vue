<template>
  <ul class="pagination" :class="paginationClass">
    <li class="page-item" @click="prevPage">
      <a class="page-link" aria-label="Previous">
        <span aria-hidden="true"><i class="fa fa-angle-double-left" aria-hidden="true"></i></span>
      </a>
    </li>
    <li class="page-item" :class="{active: value === item}" v-for="item in range(minPage, maxPage)">
      <a class="page-link" @click="changePage(item)">{{item}}</a>
    </li>
    <li class="page-item">
      <a class="page-link" aria-label="Next" @click="nextPage">
        <span aria-hidden="true"><i class="fa fa-angle-double-right" aria-hidden="true"></i></span>
      </a>
    </li>
    <!--<div class="form-group">
      <input type="number" value="" placeholder="Regular" class="form-control rounded-input" />
    </div>-->
  </ul>
</template>
<script>
  export default{
    name: 'n-pagination',
    props: {
      color: {
        type: String,
        default: 'gray'
      },
      total: {
        type: Number,
        default: 5
      },
      value: {
        type: Number,
        default: 1
      }
    },
    computed: {
      paginationClass() {
        return `pagination-${this.color}`
      }
    },
    data() {
      return {
        pagesToDisplay: 5,
        minPage: 1,
        maxPage: 5
      }
    },
    methods: {
      range(min, max) {
        let arr = []
        for (let i = min; i <= max; i++) {
          arr.push(i)
        }
        return arr
      },
      changePage(item) {
        this.$emit('input', item)
      },
      nextPage() {
        if (this.value < this.total) {
          this.$emit('input', this.value + 1)
        }
      },
      prevPage() {
        if (this.value > 1) {
          this.$emit('input', this.value - 1)
        }
      },
      handlePageChange() {
        if (this.value >= this.pagesToDisplay) {
          const pagesToAdd = Math.floor(this.pagesToDisplay / 2)
          this.minPage = this.value - pagesToAdd
          const newMaxPage = pagesToAdd + this.value
          if (newMaxPage < this.total) {
            this.maxPage = newMaxPage
          } else {
            this.maxPage = this.total
            this.minPage = this.total - this.pagesToDisplay + 1
          }
        } else {
          this.minPage = 1
          this.maxPage = this.pagesToDisplay
        }
      }
    },
    created() {
      this.handlePageChange()
    },
    watch: {
      value: function() {
        this.handlePageChange()
      }
    }
  }
</script>
<style lang="scss" src="@sass/now-ui-kit/_pagination.scss">
</style>
