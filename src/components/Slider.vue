<template>
  <div id="sliderRegular" class="slider slider-info noUi-target noUi-ltr noUi-horizontal">
    <div class="noUi-base">
      <div class="noUi-connect" :style="{'left': '0','right': `${widthPercComplement}%`}"></div>
      <div class="noUi-origin" :style="{'left': `${widthPerc}%`}">
        <div class="noUi-handle noUi-handle-lower" :class="{'noUi-active': active}" data-handle="0" style="z-index: 4;"
             @click="toggleActive"></div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    props: {
      value: {
        type: Number,
        default: 0
      },
      min: Number,
      max: {
        type: Number,
        default: 100
      },
      color: String
    },
    computed: {
      widthPerc() {
        return this.value * this.max / 100
      },
      widthPercComplement() {
        return 100 - this.widthPerc
      }
    },
    data() {
      return {
        active: false
      }
    },
    methods: {
      toggleActive() {
        this.active = !this.active
      }
    }
  }
</script>
<style>
</style>
