<template>
  <!-- checkbox row -->
  <div class="tim-row" id="progress-row">
    <h2> Progress bars </h2>
    <legend></legend>
    <demo-block>
      <div class="source" slot="source">
        <p>
          Customizable progress bars via props. 6 types of progress bars with different colors to suit your application
        </p>

        <n-progress :percentage="20" >Default</n-progress>
        <n-progress :percentage="30" color="orange">Orange</n-progress>
        <n-progress :percentage="40" color="blue">Blue</n-progress>
        <n-progress :percentage="50" color="green">Green</n-progress>
        <n-progress :percentage="60" color="red" :show-percentage="false">Red no percentage</n-progress>
        <n-progress :percentage="100" color="yellow" :height="3">Yellow with custom height</n-progress>

      </div>
      <div class="highlight" slot="highlight">
        <pre>
          <code class="language-markup">
            <script type="prism-html-markup">
<n-progress :percentage="20" >Default</n-progress>
<n-progress :percentage="30" color="orange">Orange</n-progress>
<n-progress :percentage="40" color="blue">Blue</n-progress>
<n-progress :percentage="50" color="green">Green</n-progress>
<n-progress :percentage="60" color="red" :show-percentage="false">Red no percentage</n-progress>
<n-progress :percentage="100" color="yellow" :height="3">Yellow with custom height</n-progress>
            </script>
          </code>
        </pre>
      </div>
    </demo-block>
  </div>
  <!-- end row -->
</template>
<script>
  export default{}
</script>
