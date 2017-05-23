<template>
  <!-- checkbox row -->
  <div class="tim-row" id="labels-row">
    <h2> Labels </h2>
    <legend></legend>
    <demo-block>
      <div class="source" slot="source">
        <p>
          Colored labels with the html tag you want
        </p>
        <n-label color="gray">Default</n-label>
        <n-label color="orange" tag="div">Orange</n-label>
        <n-label color="green">Green</n-label>
        <n-label color="blue">Blue</n-label>
        <n-label color="yellow">Yellow</n-label>
        <n-label color="red">Red</n-label>

      </div>
      <div class="highlight" slot="highlight">
        <pre>
          <code class="language-markup">
            <script type="prism-html-markup">
<n-label color="gray">Default</n-label>
<n-label color="orange" tag="div">Orange</n-label>
<n-label color="green">Green</n-label>
<n-label color="blue">Blue</n-label>
<n-label color="yellow">Yellow</n-label>
<n-label color="red">Red</n-label>
            </script>
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
        currentPage: 6
      }
    }
  }
</script>
