export class StateProcessor {
  constructor(client) {
    this.client = client
  }
  get(reference) {
    return this.client.get(reference)
  }
  post(value, path) {
    return this.client.post(value, path)
  }
  update(updates, path) {
    return this.client.update(updates, path)
  }
  delete(path) {
    return this.client.delete(path)
  }
}

