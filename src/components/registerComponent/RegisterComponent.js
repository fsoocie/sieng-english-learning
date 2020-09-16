import {DictionaryComponent} from '@core/DictionaryComponent';
import auth from '@/shared/FirebaseClient';

export class RegisterComponent extends DictionaryComponent {
  static className = 'register'
  static tag = 'div'
  constructor($root, options) {
    super($root, {
      name: 'RegisterComponent', listeners: ['click'], ...options
    })
    this.$root = $root
  }
  toHTML() {
    return `
        <header class="register__header">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3219/logo.svg" alt="" />
          <h1 class="register__title">Sieng sign-up form</h1>
        </header>
      
        <form class="register-form">
          <div class="register-form__group">
            <input 
             data-id="username-input"
             type="text"
             placeholder="Username"
             class="register-form__input" />
          </div>
      
          <div class="register-form__group">
            <input 
             data-id="email-input"
             type="email"
             placeholder="Email"
             class="register-form__input" />
          </div>
      
          <div class="register-form__group">
            <input 
             data-id="password-input"
             type="password"
             placeholder="Password"
             class="register-form__input" />
          </div>
      
          <button 
          class="register-btn" 
          type="button"
          data-id="register"
          >Register</button>
        </form>
    `
  }
  onClick(e) {
    if (e.target.dataset.id === 'register') {
      const email = this.$root.find('[data-id=email-input]').value()
      const password = this.$root.find('[data-id=password-input]').value()
      const username = this.$root.find('[data-id=username-input]').value()
      auth.createUser(email, password, {username})
          .then(data => console.log(data))
          .catch(data => console.log(data))
    }
  }
}
