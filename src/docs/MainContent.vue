<template>
  <div class="wrapper">
    <div class="section">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6">
            <div class="fixed-section">
              <ul>
                <li>
                  <a href="#buttons-row">Buttons</a>
                </li>
                <!--<li>
                  <a href="#checkbox-row">Checkbox/Radio/Toggle</a>
                </li>-->
              </ul>
            </div>
          </div>
          <div class="col-lg-8 col-md-12">
            <div class="tim-container">
              <buttons></buttons>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import 'prismjs/themes/prism.css'
  import Prism from 'prismjs'
  Prism.highlightAll()
  import Buttons from './rows/Buttons.vue'
  export default{
    components: {
      Buttons
    }
  }
</script>
<style>
</style>
