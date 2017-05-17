<template>
  <!-- checkbox row -->
  <div class="tim-row" id="inputs-row">
    <h2> Inputs </h2>
    <legend></legend>
    <demo-block>
      <div class="source" slot="source">
        <p>
          We restyled the Bootstrap input to give it a more flat, minimal look. You can use them with regular labels, states or input groups.
        </p>
        <div class="row">
          <div class="col-sm-4">
            <n-input v-model="simple">
            </n-input>
          </div>
          <div class="col-sm-4">
            <n-input v-model="icon" has-icon>
              <i class="fa fa-user-circle"></i>
            </n-input>
          </div>
          <div class="col-sm-4">
            <n-input v-model="danger" class="has-danger">
            </n-input>
          </div>

        </div>
      </div>
      <div class="highlight" slot="highlight">
        <pre>
          <code class="language-markup">
            <script type="prism-html-markup">
<div class="col-sm-4">
  <n-input v-model="simple">
  </n-input>
</div>
<div class="col-sm-4">
  <n-input v-model="icon" has-icon>
    <i class="fa fa-user-circle"></i>
  </n-input>
</div>
<div class="col-sm-4">
  <n-input v-model="danger" class="has-danger">
  </n-input>
</div>
            </script>
          </code>
          <code class="language-javascript">
export default{
    data() {
      return {
        simple: 'Simple',
        icon: 'Input with icon',
        danger: 'Has error'
      }
    }
}
</code>
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
        simple: 'Simple',
        icon: 'Input with icon',
        danger: 'Has error'
      }
    }
  }
</script>
<style>
  .checkbox{
    margin-right:10px;
  }
</style>
