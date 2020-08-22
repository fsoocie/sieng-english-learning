export class Dom {
  constructor(selector) {
    this.$el = typeof selector === 'string'
      ? document.querySelector(selector)
      : selector
  }
  html(value) {
    if (value) {
      this.$el.innerHTML = value
      return this
    }
    return this.$el.innerHTML
  }
  append(node) {
    if (node instanceof Dom) {
      node = node.$el
    }
    if (Element.prototype.append) {
      this.$el.append(node)
    } else {
      this.$el.appendChild(node)
    }
    return this
  }
  clear() {
    this.$el.innerHTML = ''
    return this
  }
  on(eventType, callback) {
    this.$el.addEventListener(eventType, callback)
    return this
  }
  off(eventType, callback) {
    this.$el.removeEventListener(eventType, callback)
    return this
  }
}

export function $(selector) {
  return new Dom(selector)
}

$.create = (tag, className) => {
  const $newEl = document.createElement(tag)
  if (className) {
    $newEl.classList.add(className)
  }
  return new Dom($newEl)
}
