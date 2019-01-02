import Vue from 'vue'

const mergeStrategies = Vue.config.optionMergeStrategies

mergeStrategies.functional = function (toVal, fromVal) {
  if (!toVal) return fromVal
  if (!fromVal) return toVal

  for (const prop of Object.keys(fromVal)) {
    switch (prop) {
      case 'class':
      case 'style':
        if (!toVal[prop]) toVal[prop] = {}
        for (const item of Object.keys(fromVal[prop])) {
          toVal[prop][item] = fromVal[prop][item]
        }
        break

      case 'directives':
        if (!Array.isArray(toVal[prop])) toVal[prop] = []
        toVal[prop] = toVal[prop].concat(fromVal[prop])
        break

      case 'staticClass':
        if (!fromVal[prop]) break
        if (!toVal[prop]) toVal[prop] = ''

        const values = [ fromVal[prop].trim(), toVal[prop].trim() ]
        toVal[prop] = values.join(' ').trim()
        break

      case 'on':
      case 'nativeOn':
        if (!toVal[prop]) toVal[prop] = {}

        for (const listener of Object.keys(fromVal[prop])) {
          if (toVal[prop][listener]) {
            toVal[prop][listener] = [].concat(
              toVal[prop][listener],
              fromVal[prop][listener]
            )
          } else {
            toVal[prop][listener] = fromVal[prop][listener]
          }
        }
        break

      case 'attrs':
      case 'props':
      case 'domProps':
      case 'scopedSlots':
      case 'staticStyle':
      case 'hook':
      case 'transition':
        if (!toVal[prop]) toVal[prop] = {}
        toVal[prop] = Object.assign({}, toVal[prop], fromVal[prop])
        break

      case 'slot':
      case 'key':
      case 'ref':
      case 'tag':
      case 'show':
      case 'keepAlive':
      default:
        if (!toVal[prop]) toVal[prop] = fromVal[prop]
        break
    }
  }

  return toVal
}

export function mergeDataWithProps (target, source, props) {
  return mergeStrategies.functional(target, source.call(props))
}
