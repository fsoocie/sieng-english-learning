export class ActiveRoute {
  static get hash() {
    return window.location.hash.slice(1)
  }
  static get param() {
    return ActiveRoute.hash.split('/')[1]
  }
  static get route() {
    return ActiveRoute.hash.split('/')[0]
  }
  static navigate(hash) {
    window.location.hash = hash
  }
}
