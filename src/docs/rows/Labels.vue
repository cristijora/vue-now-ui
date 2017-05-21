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
        <n-label type="default">Default</n-label>
        <n-label type="primary" tag="div">Primary</n-label>
        <n-label type="success">Success</n-label>
        <n-label type="info">Info</n-label>
        <n-label type="warning">Warning</n-label>
        <n-label type="danger">Danger</n-label>

      </div>
      <div class="highlight" slot="highlight">
        <pre>
          <code class="language-markup">
            <script type="prism-html-markup">
<n-label type="default">Default</n-label>
<n-label type="primary" tag="div">Primary</n-label> <!--This label will be rendered as a div-->
<n-label type="success">Success</n-label>
<n-label type="info">Info</n-label>
<n-label type="warning">Warning</n-label>
<n-label type="danger">Danger</n-label>
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
