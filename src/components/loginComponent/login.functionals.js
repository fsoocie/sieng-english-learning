export function setDisabled(...args) {
  args.forEach(node => node.attr('disabled', true))
}

export function removeDisabled(...args) {
  args.forEach(node => node.removeAttr('disabled'))
}

export function removeAlertNode() {
  const authAlert = document.querySelector('.auth-alert')
  if (authAlert) {
    authAlert.parentNode.removeChild(authAlert)
  }
}
