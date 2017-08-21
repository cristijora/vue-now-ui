<template>
  <div class="alert" :class="[ alertTypeClass ]" role="alert" v-show="visible">
    <div class="container">
      <div class="alert-icon" v-if="showIcon">
        <i class="now-ui-icons" :class="[ alertIcon ]"></i>
      </div>
      <strong> {{ title }} </strong> {{ description }}
      <button type="button" class="close" aria-label="Close" v-if="closable" @click="close">
        <span aria-hidden="true">
          <i class="now-ui-icons ui-1_simple-remove"></i>
        </span>
      </button>
    </div>
  </div>
</template>
<script>
  const TYPE_CLASS_MAP = {
    'success': 'alert-success',
    'warning': 'alert-warning',
    'danger': 'alert-danger'
  }

  const ICON_CLASS_MAP = {
    'success': 'ui-2_like',
    'warning': 'ui-1_bell-53',
    'danger': 'objects_support-17',
    'info': 'travel_info'
  }
  export default {
    name: 'n-alert',
    data() {
      return {
        visible: true
      }
    },
    props: {
      type: {
        type: String,
        default: 'info'
      },
      title: {
        type: String,
        required: true
      },
      description: {
        type: String
      },
      closable: {
        type: Boolean,
        default: true
      },
      showIcon: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      alertTypeClass() {
        return TYPE_CLASS_MAP[this.type] || 'alert-info'
      },
      alertIcon() {
        return ICON_CLASS_MAP[this.type] || ''
      }
    },
    methods: {
      close() {
        this.visible = false
      }
    }
  }
</script>
