<template>
  <footer class="footer" data-background-color="black">
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
        ©2017, Designed by
        <a href="http://www.invisionapp.com" target="_blank">Invision</a>. Coded by
        <a href="https://github.com/cristijora" target="_blank">Cristi Jora</a>.
        <a href="//github.com/cristijora/vue-now-ui" target="_blank">
          <i class="doc-icon-github elementdoc"></i>
        </a>
        <div class="footer-social">

        </div>
      </div>
    </div>
  </footer>
  <!--<footer class="footer">
    <div class="container">
      <div class="footer-main">
        <p class="footer-main-title">Vue Now Ui {{ version }}</p>
        <a href="https://github.com/cristijora/vue-now-ui/issues" class="footer-main-link" target="_blank">{{ langConfig.feedback }}</a>
        <a :href="`https://github.com/cristijora/vue-now-ui/issues`" class="footer-main-link" target="_blank">{{ langConfig.contribution }}</a>
      </div>
      <div class="footer-social">
        <a href="//github.com/cristijora/vue-now-ui" target="_blank">
          <i class="doc-icon-github elementdoc"></i>
        </a>
      </div>
    </div>
  </footer>-->
</template>
<style lang="scss">
  .elementdoc {
    transition: .3s;
    display: inline-block;
    line-height: 32px;
    text-align: center;
    color: #8D99AB;
    background-color: transparent;
    size: 32px;
    font-size: 32px;
    vertical-align: middle;
    &:hover {
      transform: scale(1.2);
    }
  }

  .doc-icon-weixin {
    margin-right: 36px;
    &:hover {
      color: #fff;
    }
  }

  .doc-icon-github {
    margin-right: 0;
    &:hover {
      color: #fff;
    }
  }

</style>

<script type="text/babel">
  import compoLang from '../i18n/component.json'
  import {version} from 'main/index.js'

  export default {
    data() {
      return {
        version
      }
    },

    computed: {
      lang() {
        return this.$route.path.split('/')[1] || 'zh-CN'
      },

      langConfig() {
        return compoLang.filter(config => config.lang === this.lang)[0]['footer']
      }
    }
  }
</script>
