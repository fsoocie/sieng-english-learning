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
  text(value) {
    if (value) {
      this.$el.innerText = value
      return this
    }
    return this.$el.innerText
  }
  value(data) {
    if (data) {
      this.$el.value = data
      return this
    }
    return this.$el.value
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
  style(styles) {
    this.$el.style.animation = styles
  }
  addClass(className) {
    this.$el.classList.add(className)
    return this
  }
  removeClass(className) {
    this.$el.classList.remove(className)
    return this
  }
  toggleClass(className) {
    this.$el.classList.toggle(className)
    return this
  }
  get data() {
    return this.$el.dataset
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
