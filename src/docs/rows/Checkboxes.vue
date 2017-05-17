<template>
  <!-- checkbox row -->
  <div class="tim-row" id="checkbox-row">
    <h2> Checkboxes </h2>
    <legend></legend>
    <demo-block>
      <div class="source" slot="source">
        <p>
          Easy to use checkbox components with v-model
        </p>
        <div class="row">
          <n-checkbox v-model="unchecked">Unchecked</n-checkbox>
          <n-checkbox v-model="checked">Checked</n-checkbox>
          <n-checkbox v-model="primary" type="success">Success</n-checkbox>
          <n-checkbox v-model="danger" type="danger">Danger</n-checkbox>
          <n-checkbox v-model="disabled" disabled>Checked</n-checkbox>
        </div>
      </div>
      <div class="highlight" slot="highlight">
        <pre>
          <code class="language-markup">
            <script type="prism-html-markup">
<n-checkbox v-model="unchecked">Unchecked</n-checkbox>
<n-checkbox v-model="checked">Checked</n-checkbox>
<n-checkbox v-model="danger" type="danger">Danger</n-checkbox>
<n-checkbox v-model="disabled" disabled>Checked</n-checkbox>
            </script>
          </code>
          <code class="language-javascript">
export default{
    data() {
      return {
        unchecked: false,
        checked: true,
        disabled: true,
        danger: true,
        primary: true
      }
    }
  }</code>
        </pre>
      </div>
    </demo-block>

    <p>
    </p>
  </div>
  <!-- end row -->
</template>
<script>
  export default{
    data() {
      return {
        unchecked: false,
        checked: true,
        disabled: true,
        danger: true,
        primary: true
      }
    }
  }
</script>
<style>
  .checkbox{
    margin-right:10px;
  }
</style>
