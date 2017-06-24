/* eslint-disable no-param-reassign */

import {propsToClasses} from './../utils/index'

export default {
  functional: true,
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String
    },
    tag: {
      type: String,
      default: 'button'
    },
    simple: Boolean,
    round: Boolean,
    icon: Boolean,
    iconMini: Boolean,
    disabled: Boolean
  },
  render(h, {data, props, children}) {
    let staticClass = ``
    const boolClasses = propsToClasses('n-button', props, ['tag'])
    staticClass += ` ${boolClasses}`
    data.staticClass = data.staticClass
      ? `${data.staticClass} ${staticClass}`
      : staticClass
    return <props.tag class={data.staticClass} disabled={props.disabled}>{children}</props.tag>
  }
}
