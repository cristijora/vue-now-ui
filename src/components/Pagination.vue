<template>
  <ul class="pagination" :class="paginationClass">
    <li class="page-item" :class="{active: currentActivePage === item}" v-for="item in total">
      <a class="page-link" @click="changePage(item)">{{item}}</a>
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
      }
    },
    data() {
      return {
        currentActivePage: 1
      }
    },
    methods: {
      changePage(item) {
        this.currentActivePage = item
      }
    }
  }
</script>
<style lang="scss" src="@sass/now-ui-kit/_pagination.scss">
</style>
