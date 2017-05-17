<template>
  <div class="wrapper">
    <div class="section">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6">
            <div class="fixed-section">
              <ul>
                <li>
                  <a href="#license">License</a>
                </li>
                <li>
                  <a href="#tutorial">Tutorial</a>
                </li>
                <li>
                  <a href="#pablo">&nbsp;</a>
                </li>
                <li>
                  <a href="#buttons-row">Buttons</a>
                </li>
                <li>
                  <a href="#checkbox-row">Checkbox/Radio/Toggle</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-8 col-md-12">
            <!-- License Row -->
            <div class="tim-row tim-row-first" id="license">
              <h2 class="text-center">License</h2>
              <legend></legend>
              <p>
                Currently, on
                <a href="https://www.creative-tim.com" target="_blank">Creative Tim</a> you can get the products with
                three types of licenses: MIT License, Personal License or Developer License. All the freebies are
                licensed to MIT License as default. If you are making a paid purchase, be sure to go through the table
                with the rights and the guidelines, so you can know what license is the best fit for you (Personal
                License or Developer License). View the rights table and the description for each license on our
                <a target="_blank" href="https://www.creative-tim.com/license?ref=license-page-nuk-free">Official
                  License Page</a>.
              </p>
            </div>
            <div class="tim-container">
              <buttons></buttons>

            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="container">
        <nav>
          <ul>
            <li>
              <a href="https://www.creative-tim.com">
                Creative Tim
              </a>
            </li>
            <li>
              <a href="http://presentation.creative-tim.com">
                About Us
              </a>
            </li>
            <li>
              <a href="http://blog.creative-tim.com">
                Blog
              </a>
            </li>
            <li>
              <a href="https://github.com/creativetimofficial/now-ui-kit/blob/master/LICENSE.md">
                MIT License
              </a>
            </li>
          </ul>
        </nav>
        <div class="copyright">
          <!--©
          <script type="text/javascript" async="" src="http://www.google-analytics.com/ga.js"></script>
          <script>
            document.write(new Date().getFullYear())
          </script>-->
          2017, Designed by
          <a href="http://www.invisionapp.com" target="_blank">Invision</a>. Coded by
          <a href="https://www.creative-tim.com" target="_blank">Creative Tim</a>.
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
  import Buttons from './rows/Buttons.vue'
  export default{
    components: {
      Buttons
    }
  }
</script>
<style>
</style>
