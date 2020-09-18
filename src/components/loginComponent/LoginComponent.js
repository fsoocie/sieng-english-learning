import {DictionaryComponent} from '@core/DictionaryComponent';
import auth, {userId} from '@/shared/FirebaseClient';
import {AuthAlert} from '@/components/AuthAlert';
import {AUTH_ALERT_DURATION} from '@core/constants';
import {translateErr} from '@core/utils';
import {
  removeAlertNode, removeDisabled, setDisabled
} from '@/components/loginComponent/login.functionals';

export class LoginComponent extends DictionaryComponent {
  static className = 'auth'
  static tag = 'div'
  constructor($root, options) {
    super($root, {
      name: 'LoginComponent', listeners: ['click', 'keyup'], ...options
    })
    this.initProcessor = options.initProcessor
    this.$root = $root
  }
  toHTML() {
    return `
        <header class="auth__header">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3219/logo.svg" alt="" />
          <h1 class="auth__title">Sieng sign-in form</h1>
        </header>
      
        <form data-id="login-form" class="login-form">
      
          <div class="login-form__group">
            <input 
             data-id="email-input"
             type="email"
             placeholder="E-mail"
             class="login-form__input" />
          </div>
      
          <div class="login-form__group">
            <input 
             data-id="password-input"
             type="password"
             placeholder="Пароль"
             class="login-form__input" />
          </div>
      
          <button
           data-id="login-btn"
           class="login-btn"
           type="button">Войти</button>
        </form>
        <div class="to-other-way">
          <a class="to-other-way__link" href="/#register">Зарегистрироваться</a>
        </div>
    `
  }
  init() {
    super.init();
    this.$email = this.$root.find('[data-id=email-input]')
    this.$password = this.$root.find('[data-id=password-input]')
    this.$button = this.$root.find('[data-id=login-btn]')
    this.$form = this.$root.find('[data-id=login-form]')
  }

  authAlert(text) {
    clearTimeout(this.timeout)
    this.$root.append(new AuthAlert(
        translateErr(text), AUTH_ALERT_DURATION
    ))
    this.timeout = setTimeout(removeAlertNode, AUTH_ALERT_DURATION)
  }
  singIn() {
    setDisabled(this.$email, this.$password, this.$button)
    auth.signIn(this.$email.value(), this.$password.value())
        .then(credentials => {
          this.authAlert('success')
          userId(credentials.user.uid)
          this.initProcessor()
        })
        .catch(err => {
          this.$form.addClass('login-form--no')
          clearTimeout(this.timeout)
          removeAlertNode()
          removeDisabled(this.$email, this.$password, this.$button)
          this.$root.append(new AuthAlert(
              translateErr(err.code), AUTH_ALERT_DURATION
          ))
          this.timeout = setTimeout(removeAlertNode, AUTH_ALERT_DURATION)
        })
  }
  onClick(e) {
    if (e.target.dataset.id === 'login-btn') {
      this.singIn()
    }
  }
  onKeyup(e) {
    e.key === 'Enter'? this.singIn() : null
  }
}
