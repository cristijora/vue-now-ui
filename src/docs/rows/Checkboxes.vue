<template>
  <!-- checkbox row -->
  <div class="tim-row" id="checkbox-row">
    <h2> Checkboxes </h2>
    <legend></legend>
    <p>
      To use the custom checkboxes, you don't need to import any separate Javascript file, just add the
      below code:
    </p>
    <p>
    </p>
    <div class="checkbox">
      <input id="checkbox1" type="checkbox">
      <label for="checkbox1">
        Unchecked
      </label>
    </div>
    <div class="checkbox">
      <input id="checkbox2" type="checkbox" checked="">
      <label for="checkbox2">
        Checked
      </label>
    </div>
    <div class="checkbox">
      <input id="checkbox3" type="checkbox" disabled="">
      <label for="checkbox3">
        Disabled unchecked
      </label>
    </div>
    <div class="checkbox">
      <input id="checkbox4" type="checkbox" checked="" disabled="">
      <label for="checkbox4">
        Disabled checked
      </label>
    </div>
    <p></p>
    <pre class="prettyprint prettyprinted"><span class="tag">&lt;div</span><span class="pln"> </span><span
      class="atn">class</span><span class="pun">=</span><span class="atv">"checkbox"</span><span
      class="tag">&gt;</span><span class="pln">
    </span><span class="tag">&lt;input</span><span class="pln"> </span><span class="atn">id</span><span
      class="pun">=</span><span class="atv">"checkbox1"</span><span class="pln"> </span><span class="atn">type</span><span
      class="pun">=</span><span class="atv">"checkbox"</span><span class="tag">&gt;</span><span class="pln">
    </span><span class="tag">&lt;label</span><span class="pln"> </span><span class="atn">for</span><span
      class="pun">=</span><span class="atv">"checkbox1"</span><span class="tag">&gt;</span><span
      class="pln">
        Unchecked
    </span><span class="tag">&lt;/label&gt;</span><span class="pln">
</span><span class="tag">&lt;/div&gt;</span><span class="pln">

</span><span class="tag">&lt;div</span><span class="pln"> </span><span class="atn">class</span><span
      class="pun">=</span><span class="atv">"checkbox"</span><span class="tag">&gt;</span><span class="pln">
    </span><span class="tag">&lt;input</span><span class="pln"> </span><span class="atn">id</span><span
      class="pun">=</span><span class="atv">"checkbox2"</span><span class="pln"> </span><span class="atn">type</span><span
      class="pun">=</span><span class="atv">"checkbox"</span><span class="pln"> </span><span class="atn">checked</span><span
      class="pun">=</span><span class="atv">""</span><span class="tag">&gt;</span><span class="pln">
    </span><span class="tag">&lt;label</span><span class="pln"> </span><span class="atn">for</span><span
      class="pun">=</span><span class="atv">"checkbox2"</span><span class="tag">&gt;</span><span
      class="pln">
        Checked
    </span><span class="tag">&lt;/label&gt;</span><span class="pln">
</span><span class="tag">&lt;/div&gt;</span><span class="pln">

</span><span class="tag">&lt;div</span><span class="pln"> </span><span class="atn">class</span><span
      class="pun">=</span><span class="atv">"checkbox"</span><span class="tag">&gt;</span><span class="pln">
    </span><span class="tag">&lt;input</span><span class="pln"> </span><span class="atn">id</span><span
      class="pun">=</span><span class="atv">"checkbox3"</span><span class="pln"> </span><span class="atn">type</span><span
      class="pun">=</span><span class="atv">"checkbox"</span><span class="pln"> </span><span class="atn">disabled</span><span
      class="pun">=</span><span class="atv">""</span><span class="tag">&gt;</span><span class="pln">
    </span><span class="tag">&lt;label</span><span class="pln"> </span><span class="atn">for</span><span
      class="pun">=</span><span class="atv">"checkbox3"</span><span class="tag">&gt;</span><span
      class="pln">
        Disabled unchecked
    </span><span class="tag">&lt;/label&gt;</span><span class="pln">
</span><span class="tag">&lt;/div&gt;</span><span class="pln">

</span><span class="tag">&lt;div</span><span class="pln"> </span><span class="atn">class</span><span
      class="pun">=</span><span class="atv">"checkbox"</span><span class="tag">&gt;</span><span class="pln">
    </span><span class="tag">&lt;input</span><span class="pln"> </span><span class="atn">id</span><span
      class="pun">=</span><span class="atv">"checkbox4"</span><span class="pln"> </span><span class="atn">type</span><span
      class="pun">=</span><span class="atv">"checkbox"</span><span class="pln"> </span><span class="atn">checked</span><span
      class="pun">=</span><span class="atv">""</span><span class="pln"> </span><span
      class="atn">disabled</span><span class="pun">=</span><span class="atv">""</span><span
      class="tag">&gt;</span><span class="pln">
    </span><span class="tag">&lt;label</span><span class="pln"> </span><span class="atn">for</span><span
      class="pun">=</span><span class="atv">"checkbox4"</span><span class="tag">&gt;</span><span
      class="pln">
        Disabled checked
    </span><span class="tag">&lt;/label&gt;</span><span class="pln">
</span><span class="tag">&lt;/div&gt;</span><span class="pln">
				</span></pre>
  </div>
  <!-- end row -->
</template>
<script>
  import NCheckbox from './../../components/Checkbox.vue'
  export default{
    components: {
      NCheckbox
    }
  }
</script>
<style>
</style>
