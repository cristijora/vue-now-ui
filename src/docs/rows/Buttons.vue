<template>
  <div class="tim-row" id="buttons-row">
    <h2>Buttons</h2>
    <legend></legend>
    <demo-block>
      <div class="source" slot="source">
        <h4>Colors</h4>
        <p>We worked over the original Bootstrap classes, choosing a different, slightly intenser color pallete:</p>
        <p>
          <n-button>Default</n-button>
          <n-button type="primary">Primary</n-button>
          <n-button type="info">Info</n-button>
          <n-button type="success">Success</n-button>
          <br>
          <n-button type="warning">Warning</n-button>
          <n-button type="danger">Danger</n-button>
          <n-button type="neutral">Neutral</n-button>
        </p>
      </div>
      <div class="highlight" slot="highlight">
        <pre class="line-numbers">
          <code class="language-markup">
            <script type="prism-html-markup">
<n-button>Default</n-button>
<n-button type="primary">Primary</n-button>
<n-button type="info">Info</n-button>
<n-button type="success">Success</n-button>

<n-button type="warning">Warning</n-button>
<n-button type="danger">Danger</n-button>
<n-button type="neutral">Neutral</n-button>
            </script>

          </code>
        </pre>

      </div>
    </demo-block>


    <demo-block>
      <div class="source" slot="source">
        <h4>Sizes</h4>
        <p>Buttons come in all needed sizes:</p>
        <p>
          <n-button type="primary" size="lg">Large</n-button>
          <n-button type="primary">Normal</n-button>
          <n-button type="primary" size="sm">Small</n-button>
        </p>
      </div>

      <div class="highlight" slot="highlight">
        <pre class="line-numbers">
          <code class="language-markup">
            <script type="prism-html-markup">
<n-button type="primary" size="lg">Large</n-button>
<n-button type="primary">Normal</n-button>
<n-button type="primary" size="sm">Small</n-button>
            </script>

          </code>
        </pre>
      </div>
    </demo-block>


    <demo-block>
      <div class="source" slot="source">
        <h4>Styles</h4>
        <p>
          We added extra classes that can help you better customise the look. You can use regular buttons, rounded corners buttons or plain simple buttons. Let's see some examples:</p>
        <p>
          <n-button type="primary">Default</n-button>
          <n-button type="primary" round>Round</n-button>
          <n-button type="primary" round><i class="now-ui-icons ui-2_favourite-28"></i> With Icon</n-button>
          <n-button type="primary" round icon icon-mini><i class="now-ui-icons ui-2_favourite-28"></i></n-button>
          <n-button type="primary" simple>Simple</n-button>
        </p>
        <p>
          Button groups and disabled state all work like they are supposed to. We used the Nucleo icons that can be found <a
          href="https://nucleoapp.com/?ref=creativetim" target="_blank">here</a>.</p>

      </div>
      <div class="highlight" slot="highlight">
        <pre class="line-numbers">
          <code class="language-markup">
            <script type="prism-html-markup">
<n-button type="primary">Default</n-button>
<n-button type="primary" round>Round</n-button>
<n-button type="primary" round><i class="now-ui-icons ui-2_favourite-28"></i> With Icon</n-button>
<n-button type="primary" round icon icon-mini><i class="now-ui-icons ui-2_favourite-28"></i></n-button>
<n-button type="primary" simple>Simple</n-button>
            </script>

          </code>
        </pre>
      </div>
    </demo-block>
  </div>
</template>
<script>
  import NButton from './../../components/Button'
  import DemoBlock from './../helpers/DemoBlock.vue'
  export default{
    components: {
      NButton,
      DemoBlock
    }
  }
</script>
<style>
</style>
