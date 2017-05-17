/* eslint-disable no-param-reassign */
export const propsToClasses = (base, props) => {
  return Object.keys(props).reduce((classes, key) => {
    let propValue = props[key]
    if (propValue === true) classes += ` ${base}-${key}`
    if (typeof propValue === 'string') {
      classes += ` ${base}-${propValue}`
    }
    return classes
  }, base)
}

