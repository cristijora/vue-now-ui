<template>
  <div class="card">
    <ul class="nav nav-tabs"
        :class="{ 'nav-tabs-neutral': tabsHaveBackground, 'justify-content-center':centered}"
        :style="tabsBackroundColor">
      <li v-for="(label, index) in labelList" class="nav-item">
        <a @click="changeTab(index)"
           href="javascript:void(0)"
           class="nav-link"
           :class="{ 'active': index === activeIndex }">
          {{ label }}
        </a>
      </li>
    </ul>
    <div class="card-block">
      <div class="tab-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'n-tabs',
    props: {
      background: String,
      centered: Boolean
    },
    data() {
      return {
        labelList: [],
        activeIndex: 0
      }
    },
    computed: {
      visibleTab() {
        // set visible tab based on index
        return this.$children.index === this.activeIndex
      },
      tabsHaveBackground() {
        return this.background !== undefined
      },
      tabsBackroundColor() {
        return {'background-color': this.background}
      }
    },
    methods: {
      setLabels(label) {
        this.labelList.push(label)
      },
      changeTab(index) {
        this.activeIndex = index
      }
    }
  }
</script>
