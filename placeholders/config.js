import cloneDeep from 'lodash-es/cloneDeep'

import programFilter from '@/placeholders/menu/filter.js'

const placeholders = {
  programFilter
}

export default function (placeholderName) {
  const placeholder = placeholders[placeholderName]

  if (!placeholder) {
    throw new Error('Placeholder by name', placeholderName, 'not found!')
  }

  if (typeof placeholder === 'object' && Array.isArray(placeholder)) {
    return placeholder.map(item => cloneDeep(item))
  }
  if (typeof placeholder === 'object' && !Array.isArray(placeholder)) {
    return cloneDeep(placeholder)
  }

  // eslint-disable-next-line no-console
  return console.warn(
    'Нет определений для типа placeholder`a',
    'typeof:',
    typeof placeholder
  )
}
