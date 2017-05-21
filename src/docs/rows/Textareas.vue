<template>
  <!-- checkbox row -->
  <div class="tim-row" id="textarea-row">
    <h2> Textarea </h2>
    <legend></legend>
    <demo-block>
      <div class="source" slot="source">
        <p>
          The textarea has a new style, so it looks similar to all other inputs.
        </p>
        <div class="row">
          <textarea class="form-control" placeholder="Here can be your nice text" rows="5"></textarea>
        </div>
      </div>
      <div class="highlight" slot="highlight">
        <pre>
          <code class="language-markup">
            <script type="prism-html-markup">
<textarea class="form-control" placeholder="Here can be your nice text" rows="5"></textarea>
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
        unchecked: false,
        checked: true,
        disabled: true,
        danger: true,
        primary: true,
        simpleRadio: '1',
        disabledRadio: '2',
        simpleToggle: false,
        textToggle: true
      }
    }
  }
</script>
<style>
  .checkbox {
    margin-right: 10px;
  }
</style>
