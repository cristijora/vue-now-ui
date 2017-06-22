/* eslint-disable no-param-reassign */

import {propsToClasses} from './utils/index'

export default {
  functional: true,
  props: {
    color: {
      type: String,
      default: 'gray'
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
    iconMini: Boolean
  },
  render(h, {data, props, children}) {
    let staticClass = `n-button`
    const boolClasses = propsToClasses('btn', props, ['tag'])
    staticClass += ` ${boolClasses}`
    data.staticClass = data.staticClass
      ? `${data.staticClass} ${staticClass}`
      : staticClass
    return <props.tag class={data.staticClass}>{children}</props.tag>
  }
}
