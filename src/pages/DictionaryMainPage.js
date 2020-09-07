import {Page} from '@core/Page';
import {Main} from '@/components/main/Main';
import {Header} from '@/components/header/Header';
import {MainSubheader} from '@/components/mainSubheader/MainSubheader';
import {MainGame} from '@/components/mainGame/MainGame';
import {Terms} from '@/components/terms/Terms';

export class DictionaryMainPage extends Page {
  constructor(store, processor) {
    super()
    this.store = store
    this.processor = processor
  }
  getRoot() {
    this.main = new Main({
      components: [Header, MainSubheader, MainGame, Terms],
      store: this.store, processor: this.processor
    })
    return this.main.getRoot()
  }
  afterInit() {
    this.main.initialize()
  }
  destroy() {
    this.main.destroy()
  }
}
