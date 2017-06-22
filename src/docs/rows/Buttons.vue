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
          <n-button color="orange">Orange</n-button>
          <n-button color="blue">Blue</n-button>
          <br>
          <n-button color="green">Green</n-button>
          <n-button color="yellow">Yellow</n-button>
          <n-button color="red">Red</n-button>
          <n-button color="neutral" tag="div">Neutral</n-button>
        </p>
      </div>
      <div class="highlight" slot="highlight">
        <pre class="line-numbers">
          <code class="language-markup">
            <script type="prism-html-markup">
<n-button>Default</n-button>
<n-button color="orange">Orange</n-button>
<n-button color="blue">Blue</n-button>
<br>
<n-button color="green">Green</n-button>
<n-button color="yellow">Yellow</n-button>
<n-button color="red">Red</n-button>
<n-button color="neutral">Neutral</n-button>
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
          <n-button color="orange" size="lg">Large</n-button>
          <n-button color="orange">Normal</n-button>
          <n-button color="orange" size="sm">Small</n-button>
        </p>
      </div>

      <div class="highlight" slot="highlight">
        <pre class="line-numbers">
          <code class="language-markup">
            <script type="prism-html-markup">
<n-button color="orange" size="lg">Large</n-button>
<n-button color="orange">Normal</n-button>
<n-button color="orange" size="sm">Small</n-button>
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
          <n-button color="orange">Default</n-button>
          <n-button color="orange" round>Round</n-button>
          <n-button color="orange" round><i class="now-ui-icons ui-2_favourite-28"></i> With Icon</n-button>
          <n-button color="orange" round icon icon-mini><i class="now-ui-icons ui-2_favourite-28"></i></n-button>
          <n-button color="orange" simple>Simple</n-button>
        </p>
        <p>
          Button groups and disabled state all work like they are supposed to. We used the Nucleo icons that can be found <a
          href="https://nucleoapp.com/?ref=creativetim" target="_blank">here</a>.</p>

      </div>
      <div class="highlight" slot="highlight">
        <pre class="line-numbers">
          <code class="language-markup">
            <script type="prism-html-markup">
<n-button color="orange">Default</n-button>
<n-button color="orange" round>Round</n-button>
<n-button color="orange" round><i class="now-ui-icons ui-2_favourite-28"></i> With Icon</n-button>
<n-button color="orange" round icon icon-mini><i class="now-ui-icons ui-2_favourite-28"></i></n-button>
<n-button color="orange" simple>Simple</n-button>
            </script>

          </code>
        </pre>
      </div>
    </demo-block>
  </div>
</template>
<script>
  export default{}
</script>
<style>
</style>
