import {Header} from '@/components/header/Header';
import {Page} from '@core/Page';
import {EditSubheader} from '@/components/editSubheader/EditSubheader';
import {EditContent} from '@/components/editContent/EditContent';
import {Editor} from '@/components/pageComponents/Editor';
import {EditTitle} from '@/components/editTitle/EditTitle';

export class DictionaryEditorPage extends Page {
  constructor(store, processor) {
    super()
    this.store = store
    this.processor = processor
  }
  getRoot() {
    this.page = new Editor({
      components: [Header, EditSubheader, EditTitle, EditContent],
      store: this.store, processor: this.processor
    })
    return this.page.getRoot()
  }
}
