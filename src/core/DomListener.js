export class DomListener {
  constructor($root, options) {
    this.$root = $root
    this.name = options.name
    this.listeners = options.listeners || []
  }

  initDomListeners() {
    this.listeners.forEach(listener => {
      const method = toMethodName(listener)
      if (!this[method]) {
        console.warn(`"${method}" in ${this.name} is not implemented`)
      }
      if (this[method]) {
        this[method] = this[method].bind(this)
        this.$root.on(listener, this[method])
      }
    })
  }
  removeDomListeners() {
    this.listeners.forEach(listener => {
      const method = toMethodName(listener)
      if (this[method]) {
        this.$root.off(listener, this[method])
      }
    })
  }
}

function toMethodName(listener) {
  return 'on'+ listener.charAt(0).toUpperCase() + listener.slice(1)
}

