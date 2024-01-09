import config from '@/placeholders/config.js'

export function getPlaceholder(placeholder) {
  return config(placeholder)
}
