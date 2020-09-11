export function isDeleteWord(event) {
  return event.target.dataset.id === 'delete-word'
}

export function isAddWord(event) {
  return event.target.dataset.id === 'add-word'
}
