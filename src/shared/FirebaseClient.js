import * as firebase from 'firebase';
import {ActiveRoute} from '@core/ActiveRoute';
import {router} from '@/index';

const firebaseConfig = {
  apiKey: 'AIzaSyD-H38Ixs7f4-2H3civVJpIwzgRfKIXgxo',
  authDomain: 'sieng-28daa.firebaseapp.com',
  databaseURL: 'https://sieng-28daa.firebaseio.com',
  projectId: 'sieng-28daa',
  storageBucket: 'sieng-28daa.appspot.com',
  messagingSenderId: '171904918162',
  appId: '1:171904918162:web:4cea6f6cd5a965cadc7c4b'
}

firebase.initializeApp(firebaseConfig)
const db = firebase.database()
const auth = firebase.auth()

auth.onAuthStateChanged(function(user) {
  if (user) {
    userId(user.uid)
    router.initProcessor().then(() => {
      ActiveRoute.navigate('')
      ActiveRoute.navigate('dashboard')
    })
  } else {
    userId(null)
    ActiveRoute.navigate('')
    ActiveRoute.navigate('login')
  }
});

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

export default {
  async createUser(email, password, options) {
    try {
      return await auth.createUserWithEmailAndPassword(email, password)
    } catch (err) {
      return err
    }
  },
  async signIn(email, password) {
    try {
      return await auth.signInWithEmailAndPassword(email, password)
    } catch (err) {
      return err
    }
  },
  async signOut() {
    try {
      return await auth.signOut()
    } catch (err) {
      console.warn(err)
    }
  },
  async getUid() {
    const user = await auth.currentUser
    return user? user.uid: null
  }
}

let currentUserId = null
export function userId(id) {
  if (id || id === null) {
    currentUserId = id
  }
  return currentUserId
}
