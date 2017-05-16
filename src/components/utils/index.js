/* eslint-disable no-param-reassign */
export const propsToClasses = (base, props) => {
  return Object.keys(props).reduce((classes, key) => {
    if (props[key] === true) classes += ` ${base}-${key}`
    return classes
  }, base)
}

