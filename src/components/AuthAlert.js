import {$} from '@core/Dom';

export function AuthAlert(text, duration) {
  const bgc = text === 'Входим в аккаунт...'
    ? '0 2px 18px rgb(35, 178, 109)'
    : '0 2px 18px #F44336'
  const style = `animation-duration: ${duration}ms; box-shadow: ${bgc}`
  return $.create('div', 'auth-alert').html(`
    <div style="${style}" class="auth-alert__content">
      <span class="auth-alert__text">${text}</span>
    </div>
  `)
}
