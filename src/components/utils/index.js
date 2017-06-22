/* eslint-disable no-param-reassign */
/***
 * Returns a string with css classes based on given props
 * @param base Base string to append before each prop (e.g btn -> btn-red)
 * @param props Array of props
 * @param toExclude List of prop keys to exclude
 * @returns {*}
 */
export const propsToClasses = (base, props, toExclude = []) => {
  return Object.keys(props).reduce((classes, key) => {
    if (toExclude.indexOf(key) !== -1) return classes
    let propValue = props[key]
    if (propValue === true) classes += ` ${base}-${key}`
    if (typeof propValue === 'string') {
      classes += ` ${base}-${propValue}`
    }
    return classes
  }, base)
}

