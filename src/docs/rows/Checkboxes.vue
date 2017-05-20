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
          <n-checkbox v-model="disabled" disabled>Checked and disabled</n-checkbox>
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


    <h2> Radio buttons</h2>
    <legend></legend>
    <demo-block>
      <div class="source" slot="source">
        <p>
          Pretty, easy to use radio buttons

        </p>
        <div class="row">
          <n-radio v-model="simpleRadio" label="1">Option 1</n-radio>
          <n-radio v-model="simpleRadio" label="2">Option 2</n-radio>
        </div>
        <div class="row">
          <n-radio v-model="disabledRadio" label="1" disabled> Disabled radio is off</n-radio>
          <n-radio v-model="disabledRadio" label="2" disabled> Disabled radio is on</n-radio>
        </div>
      </div>
      <div class="highlight" slot="highlight">
        <pre>
          <code class="language-markup">
            <script type="prism-html-markup">
<n-radio v-model="simpleRadio" label="1">Option 1</n-radio>
<n-radio v-model="simpleRadio" label="2">Option 2</n-radio>

<n-radio v-model="disabledRadio" label="1" disabled> Disabled radio is off</n-radio>
<n-radio v-model="disabledRadio" label="2" disabled> Disabled radio is on</n-radio>
            </script>
          </code>
          <code class="language-javascript">
export default{
    data() {
      return {
        simpleRadio: '1',
        disabledRadio: '2',
      }
    }
  }</code>
        </pre>
      </div>
    </demo-block>

    <h2> Toggle buttons </h2>
    <legend></legend>
    <demo-block>
      <div class="source" slot="source">
        <p>
          V-model ready toggle buttons as a fancy alternative to checkboxes
        </p>
        <div class="row">
          <n-toggle v-model="simpleToggle"></n-toggle>
          <n-toggle onText="ON" offText="OFF" v-model="textToggle"></n-toggle>
        </div>
      </div>
      <div class="highlight" slot="highlight">
        <pre>
          <code class="language-markup">
            <script type="prism-html-markup">
<n-toggle v-model="simpleToggle"></n-toggle>
<n-toggle onText="ON" offText="OFF" v-model="textToggle"></n-toggle>
            </script>
          </code>
          <code class="language-javascript">
export default{
    data() {
      return {
        simpleToggle: false,
        textToggle: true
      }
    }
  }</code>
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
