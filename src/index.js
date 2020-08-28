import '@/styles/index.scss'
import './inlineSVG'
import '@/shared/FirebaseClient'
import {$} from '@core/Dom';
import {Main} from '@/components/main/Main';
import {Header} from '@/components/header/Header';
import {MainSubheader} from '@/components/mainSubheader/MainSubheader';
import {MainGame} from '@/components/mainGame/MainGame';
import {Terms} from '@/components/terms/Terms';
import createStore from '@/redux/createStore';
import {rootReducer} from '@/redux/rootReducer';
import {toInitialState} from '@/redux/initialState';
import {StateProcessor} from '@core/StateProcessor';
import {FirebaseClient} from '@/shared/FirebaseClient';


const processor = new StateProcessor(new FirebaseClient())
processor.get().then(state => {
  const store = createStore(rootReducer, toInitialState(state))
  const main = new Main({
    components: [Header, MainSubheader, MainGame, Terms],
    store, processor
  })
  const app = $('#app')
  app.append(main.getRoot())
  main.initialize()
})


