import '@/styles/index.scss'
import './assets/inlineSVG'
import '@/shared/FirebaseClient'
import {Router} from '@core/Router/Router';
import {DictionaryMainPage} from '@/pages/DictionaryMainPage';
import {DictionaryDashboardPage} from '@/pages/DictionaryDashboardPage';
import {DictionaryEditorPage} from '@/pages/DictionaryEditorPage';
import {RegisterPage} from '@/pages/RegisterPage';
import {LoginPage} from '@/pages/LoginPage';

export const router = new Router('#app', {
  dictionaryMain: DictionaryMainPage,
  dictionaryDashboard: DictionaryDashboardPage,
  dictionaryEditor: DictionaryEditorPage,
  register: RegisterPage,
  login: LoginPage
})
