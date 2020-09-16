import {DictionaryComponent} from '@core/DictionaryComponent';
import auth, {userId} from '@/shared/FirebaseClient';

export class LoginComponent extends DictionaryComponent {
  static className = 'login'
  static tag = 'div'
  constructor($root, options) {
    super($root, {
      name: 'LoginComponent', listeners: ['click'], ...options
    })
    this.initProcessor = options.initProcessor
  }
  toHTML() {
    return `
        <header class="login__header">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3219/logo.svg" alt="" />
          <h1 class="login__title">Sieng sign-in form</h1>
        </header>
      
        <form class="login-form">
      
          <div class="login-form__group">
            <input 
             data-id="email-input"
             type="email"
             placeholder="Email"
             class="login-form__input" />
          </div>
      
          <div class="login-form__group">
            <input 
             data-id="password-input"
             type="password"
             placeholder="Password"
             class="login-form__input" />
          </div>
      
          <button data-id="login" class="login-btn" type="button">Login</button>
        </form>
    `
  }
  onClick(e) {
    if (e.target.dataset.id === 'login') {
      const email = this.$root.find('[data-id=email-input]').value()
      const password = this.$root.find('[data-id=password-input]').value()
      auth.signIn(email, password)
          .then(credentials => {
            userId(credentials.user.uid)
            this.initProcessor()
            console.log(userId())
          })
    }
  }
}
