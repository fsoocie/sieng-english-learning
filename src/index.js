import '@/styles/index.scss'
import './inlineSVG'
import '@/shared/FirebaseClient'
import {Router} from '@core/Router';
import {DictionaryMainPage} from '@/pages/DictionaryMainPage';
import {DictionaryDashboardPage} from '@/pages/DictionaryDashboardPage';
import {DictionaryEditorPage} from '@/pages/DictionaryEditorPage';

new Router('#app', {
  dictionaryMain: DictionaryMainPage,
  dictionaryDashboard: DictionaryDashboardPage,
  dictionaryEditor: DictionaryEditorPage
})

// TODO: add box-shadow to module (dashboard)
// TODO: correct styles add module (dashboard)
