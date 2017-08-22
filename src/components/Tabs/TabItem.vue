<template>
  <div class="tab-pane" :class="{ 'active': isVisible }" :id="name">
    <p> <slot></slot> </p>
  </div>
</template>

<script>
  export default {
    name: 'n-tab-item',
    props: {
      label: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      icon: {
        type: String
      }
    },
    data() {
      return {
      }
    },
    created() {
      this.$parent.setLabels(this.label)
    },
    computed: {
      index() {
        return this.$parent.labelList.indexOf(this.label)
      },
      isVisible() {
        return this.$parent.activeIndex === this.index
      }
    }
  }
</script>
