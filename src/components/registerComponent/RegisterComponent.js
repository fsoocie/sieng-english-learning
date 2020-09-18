import {DictionaryComponent} from '@core/DictionaryComponent';
import auth from '@/shared/FirebaseClient';
import {
  removeAlertNode, removeDisabled, setDisabled
} from '@/components/loginComponent/login.functionals';
import {AuthAlert} from '@/components/AuthAlert';
import {translateErr} from '@core/utils';
import {AUTH_ALERT_DURATION} from '@core/constants';

export class RegisterComponent extends DictionaryComponent {
  static className = 'auth'
  static tag = 'div'
  constructor($root, options) {
    super($root, {
      name: 'RegisterComponent', listeners: ['click'], ...options
    })
    this.$root = $root
    this.processor = options.processor
  }
  toHTML() {
    return `
        <header class="auth__header">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3219/logo.svg" alt="" />
          <h1 class="auth__title">Sieng sign-up form</h1>
        </header>
      
        <form data-id="register-form" class="register-form">
          <div class="register-form__group">
            <input 
             data-id="username-input"
             type="text"
             placeholder="Имя"
             class="register-form__input" />
          </div>
      
          <div class="register-form__group">
            <input 
             data-id="email-input"
             type="email"
             placeholder="E-mail"
             class="register-form__input" />
          </div>
      
          <div class="register-form__group">
            <input 
             data-id="password-input"
             type="password"
             placeholder="Пароль"
             class="register-form__input" />
          </div>
      
          <button 
          class="register-btn" 
          type="button"
          data-id="register-btn"
          >Зарегистрироваться</button>
        </form>
        <div class="to-other-way">
          <a class="to-other-way__link" href="/#login">Войти в аккаунт</a>
        </div>
    `
  }
  authAlert(text) {
    removeAlertNode()
    clearTimeout(this.timeout)
    this.$root.append(new AuthAlert(
        translateErr(text), AUTH_ALERT_DURATION
    ))
    this.timeout = setTimeout(removeAlertNode, AUTH_ALERT_DURATION)
  }
  init() {
    super.init();
    this.$email = this.$root.find('[data-id=email-input]')
    this.$password = this.$root.find('[data-id=password-input]')
    this.$username = this.$root.find('[data-id=username-input]')
    this.$button = this.$root.find('[data-id=register-btn]')
    this.$form = this.$root.find('[data-id=register-form]')
  }
  register() {
    if (this.$username.value().length > 3) {
      setDisabled(this.$email, this.$password, this.$username, this.$button)
      auth.createUser(this.$email.value(), this.$password.value())
          .then(credentials => {
            this.processor.post(
                {modules: 0, username: this.$username.value()},
                `${credentials.user.uid}`
            )
            this.authAlert('success')
          })
          .catch(err => {
            this.$form.addClass('register-form--no')
            removeDisabled(
                this.$email, this.$password, this.$username, this.$button
            )
            this.authAlert(err.code)
          })
    } else {
      this.$form.addClass('register-form--no')
      this.authAlert('auth/username-is-short')
    }
  }
  onClick(e) {
    if (e.target.dataset.id === 'register-btn') {
      this.register()
    }
  }
  onKeyup(e) {
    e.key === 'Enter'? this.register() : null
  }
}
