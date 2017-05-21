<template>
  <div class="n-progress progress-container" :class="progressClass">
    <span class="progress-badge">
      <slot>

      </slot>
    </span>
    <div class="progress" :style="progressHeight">
      <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
           :style="progressWidth">
        <span class="progress-value" v-if="showPercentage">{{progressPercentage}}</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    props: {
      percentage: Number,
      status: {
        type: String,
        default: 'default'
      },
      showPercentage: {
        type: Boolean,
        default: true
      },
      height: {
        type: Number,
        default: 1
      }
    },
    computed: {
      progressWidth() {
        return {
          width: `${this.percentage}%`
        }
      },
      progressHeight() {
        return {
          height: `${this.height}px`
        }
      },
      progressClass() {
        return `progress-${this.status}`
      },
      progressPercentage() {
        return `${this.percentage}%`
      }
    }
  }
</script>
<style lang="scss" src="@sass/now-ui-kit/_progress.scss">
</style>
