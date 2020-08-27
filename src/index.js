import '@/styles/index.scss'
import './inlineSVG'
import './core/firebase'
import 'firebase/auth'
import {$} from '@core/Dom';
import {Main} from '@/components/main/Main';
import {Header} from '@/components/header/Header';
import {MainSubheader} from '@/components/mainSubheader/MainSubheader';
import {MainGame} from '@/components/mainGame/MainGame';
import {Terms} from '@/components/terms/Terms';
import createStore from '@/redux/createStore';
import {rootReducer} from '@/redux/rootReducer';
import {defaultState} from '@/redux/initialState';

const store = createStore(rootReducer, defaultState)
const main = new Main({
  components: [Header, MainSubheader, MainGame, Terms],
  store
})
const app = $('#app')
app.append(main.getRoot())
main.initialize()
