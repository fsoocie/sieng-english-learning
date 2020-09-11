export class Page {
  getRoot() {
    throw new Error('getRoot must be implemented')
  }
  afterInit() {
    this.page.initialize()
  }
  destroy() {
    this.page.destroy()
  }
}
