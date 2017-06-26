<template>
  <n-navbar :class="[{'fixed-top':isHome}]" :color-on-scroll="scrollColorValue"
            type="primary"
            :align-right="true">
    <router-link slot="title" :to="`/${ lang }/`" class="nav-link">
      Vue Now Ui
    </router-link>
    <router-link :to="`/${ lang }/component`" class="nav-link">
      <i class="now-ui-icons files_paper"></i>Components
    </router-link>
  </n-navbar>
</template>
<script>
  import compoLang from '../i18n/component.json'

  export default {
    data() {
      return {
        active: '',
        isHome: true,
        isTransparent: true,
        headerStyle: {}
      }
    },
    watch: {
      '$route.path': function(newVal) {
          this.isHome = /^home/.test(this.$route.name)
      }
    },
    computed: {
      lang() {
        return this.$route.path.split('/')[1] || 'zh-CN'
      },
      langConfig() {
        return compoLang.filter(config => config.lang === this.lang)[0]['header']
      },
      scrollColorValue() {
          return this.isHome ? 500 : 0
      }
    },
    methods: {
      switchLang(targetLang) {
        if (this.lang === targetLang) return
        localStorage.setItem('ELEMENT_LANGUAGE', targetLang)
        this.$router.push(this.$route.path.replace(this.lang, targetLang))
      }
    }
  }
</script>
