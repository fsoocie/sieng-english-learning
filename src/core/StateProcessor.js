export class StateProcessor {
  constructor(client, delay) {
    this.client = client
  }
  listen(state) {
    this.client.save(state)
  }
  get() {
    return this.client.get()
  }
}

