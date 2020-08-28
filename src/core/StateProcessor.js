import {debounce} from '@core/utils';

export class StateProcessor {
  constructor(client, delay = 800) {
    this.client = client
    this.post = debounce(this.post, delay)
    this.update = debounce(this.update, delay)
  }
  get(reference) {
    return this.client.get()
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

