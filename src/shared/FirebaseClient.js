import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'IzaSyD-H38Ixs7f4-2H3civVJpIwzgRfKIXgxo',
  authDomain: 'sieng-28daa.firebaseapp.com',
  databaseURL: 'https://sieng-28daa.firebaseio.com',
  projectId: 'sieng-28daa',
  storageBucket: 'sieng-28daa.appspot.com',
  messagingSenderId: '171904918162',
  appId: '1:171904918162:web:4cea6f6cd5a965cadc7c4b'
}

firebase.initializeApp(firebaseConfig)
const db = firebase.database()

export class FirebaseClient {
  get(reference = '/') {
    return db.ref(reference).once('value')
  }
  post(value, reference = '/') {
    return db.ref(reference).set(value);
  }
  update(updates, reference) {
    return db.ref(reference).update(updates)
  }
  delete(reference) {
    if (reference) {
      return db.ref(reference).remove()
    }
  }
}
