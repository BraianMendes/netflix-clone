import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  //   apiKey: '',
  //   authDomain: '',
  //   databaseURL: '',
  //   projectId: '',
  //   storageBucket: '',
  //   messagingSenderId: '',
  //   appId: '',

  apiKey: 'AIzaSyDlHDPY99fJElmeGWa0oH5CXd7V4Y1dAX0',
  authDomain: 'netflix-react-clone-4a2c8.firebaseapp.com',
  projectId: 'netflix-react-clone-4a2c8',
  storageBucket: 'netflix-react-clone-4a2c8.appspot.com',
  messagingSenderId: '48884444068',
  appId: '1:48884444068:web:9fbdffe7b7120d3145af31',
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
