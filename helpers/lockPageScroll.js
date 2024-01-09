export default function (state) {
  const windowPositionY = window.scrollY
  const delta = state
    ? window.innerWidth - document.documentElement.clientWidth
    : ''
  document.body.style.overflow = state ? 'hidden' : ''
  document.body.style.paddingRight = state ? `${delta}px` : ''
  document.body.style.position = state ? 'fixed' : ''

  if (!state) {
    const bodyStyles = window.getComputedStyle(document.body)
    const top = Number.parseInt(bodyStyles.getPropertyValue('top'), 10) * -1

    window.scrollTo({
      top
    })
  }

  document.body.style.top = state ? -windowPositionY + 'px' : ''
}