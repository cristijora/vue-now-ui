<template>
  <div
    class="demo-block"
    :class="[blockClass, { 'hover': hovering }]"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false">
    <slot name="source"></slot>
    <div class="meta">
      <div class="description">
        <slot></slot>
      </div>
      <slot name="highlight"></slot>
    </div>
    <div class="demo-block-control" @click="isExpanded = !isExpanded">
      <transition name="arrow-slide">
        <i :class="[iconClass, { 'hovering': hovering }]"></i>
      </transition>
      <transition name="text-slide">
        <span v-show="hovering">{{ controlText }}</span>
      </transition>
    </div>
  </div>
</template>

<style lang="scss">
  :not(pre) > code[class*="language-"], pre[class*="language-"]{
    background:inherit !important;
  }
  .demo-block {
    border: solid 1px #eaeefb;
    border-radius: 4px;
    transition: .2s;

  &.hover {
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, .6), 0 2px 4px 0 rgba(232, 237, 250, .5)
  }

  .demo-button {
    float: right;
  }

  .source {
    padding: 24px;
  }

  .meta {
    background-color: #f9fafc;
    border-top: solid 1px #eaeefb;
    clear: both;
    overflow: hidden;
    height: 0;
    transition: height .2s;
  }

  .description {
    padding: 18px 24px;
    box-sizing: border-box;
    border-left: solid 1px #eaeefb;
    float: right;
    font-size: 14px;
    line-height: 1.8;
    color: #5e6d82;
    word-break: break-word;

  p {
    margin: 0 0 12px;
  }

  }
  .highlight {
    width: 100%;
    border-right: solid 1px #eaeefb;

  }
  .demo-block-control {
    border-top: solid 1px #eaeefb;
    height: 36px;
    box-sizing: border-box;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    text-align: center;
    margin-top: -1px;
    color: #d3dce6;
    cursor: pointer;
    transition: .2s;
    position: relative;

  i {
    font-size: 12px;
    line-height: 36px;
    transition: .3s;

  &.hovering {
    transform: translateX(-40px)l
  }

  }
  span {
    position: relative;
    transform: translateX(-30px);
    font-size: 14px;
    line-height: 36px;
    transition: .3s;
    display: inline-block;
  }

  &:hover {
    color: #20a0ff;
    background-color: #f9fafc;
  }

  &.text-slide-enter,
  &.text-slide-leave-active {
    opacity: 0;
    transform: translateX(10px);
  }

  }
  }
</style>

<script type="text/babel">
  export default {
    data() {
      return {
        hovering: false,
        isExpanded: false
      }
    },
    props: {
      jsfiddle: Object,
      default() {
        return {}
      }
    },
    methods: {
      goJsfiddle() {
        const {script, html, style} = this.jsfiddle
        const resourcesTpl = '<scr' + 'ipt src="//unpkg.com/vue/dist/vue.js"></scr' + 'ipt>' +
          '\n<scr' + `ipt src="//unpkg.com/element-ui@1.0/lib/index.js"></scr` + 'ipt>'
        let jsTpl = (script || '').replace(/export default/, 'var Main =').trim()
        let htmlTpl = `${resourcesTpl}\n<div id="app">\n${html.trim()}\n</div>`
        let cssTpl = `@import url("//unpkg.com/element-ui@1.0/lib/theme-default/index.css")\n${(style || '').trim()}\n`
        jsTpl = jsTpl
          ? jsTpl + '\nvar Ctor = Vue.extend(Main)\nnew Ctor().$mount(\'#app\')'
          : 'new Vue().$mount(\'#app\')'
        const data = {
          js: jsTpl,
          css: cssTpl,
          html: htmlTpl,
          panel_js: 3,
          panel_css: 1
        }
        const form = document.getElementById('fiddle-form') || document.createElement('form')
        form.innerHTML = ''
        const node = document.createElement('textarea')
        form.method = 'post'
        form.action = 'https://jsfiddle.net/api/post/library/pure/'
        form.target = '_blank'
        for (let name in data) {
          node.name = name
          node.value = data[name].toString()
          form.appendChild(node.cloneNode())
        }
        form.setAttribute('id', 'fiddle-form')
        form.style.display = 'none'
        document.body.appendChild(form)
        form.submit()
      }
    },
    computed: {
      lang() {
        return this.$route.path.split('/')[1]
      },
      blockClass() {
        return `demo-test`
      },
      iconClass() {
        return this.isExpanded ? 'el-icon-caret-top' : 'el-icon-caret-bottom'
      },
      controlText() {
        return this.isExpanded ? 'Hide code' : 'Show code'
      },
      codeArea() {
        return this.$el.getElementsByClassName('meta')[0]
      },
      codeAreaHeight() {
        if (this.$el.getElementsByClassName('description').length > 0) {
          return Math.max(this.$el.getElementsByClassName('description')[0].clientHeight, this.$el.getElementsByClassName('highlight')[0].clientHeight)
        }
        return this.$el.getElementsByClassName('highlight')[0].clientHeight
      }
    },
    watch: {
      isExpanded(val) {
        this.codeArea.style.height = val ? `${this.codeAreaHeight + 1}px` : '0'
      }
    },
    mounted() {
      this.$nextTick(() => {
        let highlight = this.$el.getElementsByClassName('highlight')[0]
        if (this.$el.getElementsByClassName('description').length === 0) {
          highlight.style.width = '100%'
          highlight.borderRight = 'none'
        }
      })
    }
  }
</script>
