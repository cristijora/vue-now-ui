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
            <n-input v-model="simple" placeholder="Simple" no-border></n-input>
          </div>
          <div class="col-sm-4">
            <n-input v-model="border" placeholder="Border"></n-input>
          </div>
          <div class="col-sm-4">
            <n-input v-model="success" no-border class="has-success"></n-input>
          </div>
          <div class="col-sm-4">
            <n-input v-model="danger" class="has-danger"></n-input>
          </div>
          <div class="col-sm-4">
            <n-input v-model="iconRight" placeholder="Right Icon" has-icon no-border>
              <i class="fa fa-user-circle"></i>
            </n-input>
          </div>

          <div class="col-sm-4">
            <n-input v-model="iconLeft" placeholder="Left Icon" has-icon no-border iconAlign="left">
              <i class="fa fa-user-circle"></i>
            </n-input>
          </div>

        </div>
      </div>
      <div class="highlight" slot="highlight">
        <pre>
          <code class="language-markup">
            <script type="prism-html-markup">
<n-input v-model="simple" placeholder="Simple" no-border></n-input>
<n-input v-model="border" placeholder="Border"></n-input>
<n-input v-model="success" no-border class="has-success"></n-input>

<n-input v-model="danger" class="has-danger"></n-input>
<n-input v-model="iconRight" placeholder="Right Icon" has-icon no-border>
  <i class="fa fa-user-circle"></i>
</n-input>
<n-input v-model="iconLeft" placeholder="Left Icon" has-icon no-border iconAlign="left">
  <i class="fa fa-user-circle"></i>
</n-input>
            </script>
          </code>
          <code class="language-javascript">
export default{
    data() {
      return {
        simple: '',
        border: '',
        iconRight: '',
        iconLeft: '',
        success: 'Success',
        danger: 'Error input'
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
        simple: '',
        border: '',
        iconRight: '',
        iconLeft: '',
        success: 'Success',
        danger: 'Error input'
      }
    }
  }
</script>
<style>
  .checkbox{
    margin-right:10px;
  }
</style>
