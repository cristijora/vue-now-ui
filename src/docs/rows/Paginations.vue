<template>
  <!-- checkbox row -->
  <div class="tim-row" id="pagination-row">
    <h2> Pagination </h2>
    <legend></legend>
    <demo-block>
      <div class="source" slot="source">
        <p>
          Ever wanted to have pagination with just a v-model ?
        </p>
        <n-pagination :total="10" v-model="simple"></n-pagination>
        <n-pagination :total="10" v-model="orange" color="orange"></n-pagination>
        <n-pagination :total="10" v-model="green" color="green"></n-pagination>
        <n-pagination :total="10" v-model="blue" color="blue"></n-pagination>
        <n-pagination :total="10" v-model="yellow" color="yellow"></n-pagination>
        <n-pagination :total="10" v-model="red" color="red"></n-pagination>

      </div>
      <div class="highlight" slot="highlight">
        <pre>
          <code class="language-markup">
            <script type="prism-html-markup">
<n-pagination :total="10" v-model="simple"></n-pagination>
<n-pagination :total="10" v-model="orange" color="orange"></n-pagination>
<n-pagination :total="10" v-model="green" color="green"></n-pagination>
<n-pagination :total="10" v-model="blue" color="blue"></n-pagination>
<n-pagination :total="10" v-model="yellow" color="yellow"></n-pagination>
<n-pagination :total="10" v-model="red" color="red"></n-pagination>
            </script>
          </code>
          <code class="language-javascript">
export default{
  data() {
    return {
      simple: 1,
      orange: 2,
      green: 3,
      blue: 4,
      yellow: 5,
      red: 10
    }
  }
}
          </code>
        </pre>
      </div>
    </demo-block>
  </div>
  <!-- end row -->
</template>
<script>
  export default{
    data() {
      return {
        simple: 1,
        orange: 2,
        green: 3,
        blue: 4,
        yellow: 5,
        red: 10
      }
    }
  }
</script>
