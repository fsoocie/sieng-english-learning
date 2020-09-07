import '@/styles/index.scss'
import './inlineSVG'
import '@/shared/FirebaseClient'
import {Router} from '@core/Router';
import {DictionaryMainPage} from '@/pages/DictionaryMainPage';
import {DictionaryDashboardPage} from '@/pages/DictionaryDashboardPage';

new Router('#app', {
  dictionaryMain: DictionaryMainPage,
  dictionaryDashboard: DictionaryDashboardPage
})


