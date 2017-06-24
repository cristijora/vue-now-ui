<template>
  <n-navbar :class="[{'fixed-top':isHome},{'navbar-transparent':isHome && isTransparent}]"
            type="primary"
            ref="header"
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
      '$route.path': {
        immediate: true,
        handler() {
          this.isHome = /^home/.test(this.$route.name)
        }
      }
    },
    computed: {
      lang() {
        return this.$route.path.split('/')[1] || 'zh-CN'
      },
      langConfig() {
        return compoLang.filter(config => config.lang === this.lang)[0]['header']
      }
    },
    methods: {
      switchLang(targetLang) {
        if (this.lang === targetLang) return
        localStorage.setItem('ELEMENT_LANGUAGE', targetLang)
        this.$router.push(this.$route.path.replace(this.lang, targetLang))
      }
    },
    mounted() {
      function scroll(fn) {
        window.addEventListener('scroll', () => {
          fn()
        }, false)
      }

      scroll(() => {
        if (this.isHome) {
          const threshold = 500
          if (document.documentElement.scrollTop > threshold || document.body.scrollTop > threshold) {
            this.isTransparent = false
          } else {
            this.isTransparent = true
          }
        }
      })
    }
  }
</script>
