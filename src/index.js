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

const main = new Main({
  components: [Header, MainSubheader, MainGame, Terms]
})
const app = $('#app')
app.append(main.getRoot())
main.initialize()
