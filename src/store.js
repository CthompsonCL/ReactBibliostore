import { createStore,combineReducers, compose } from 'redux';
import { reactReduxFirebase ,firebaseReducer} from 'react-redux-firebase';
import {reduxFirestore,firestoreReducer} from 'redux-firestore';
import firebase from 'firebase/app';
import 'firebase/firestore';    

//Configurar Firestore
const firebaseConfig = {
    apiKey: "AIzaSyAxazU193I5PBONTfjDc8JeHlPLpGIyMuM",
    authDomain: "bibliostore-5b823.firebaseapp.com",
    databaseURL: "https://bibliostore-5b823.firebaseio.com",
    projectId: "bibliostore-5b823",
    storageBucket: "bibliostore-5b823.appspot.com",
    messagingSenderId: "19614039410",
    appId: "1:19614039410:web:dfdcbd67d1b71b3a"
}

//iniciar Firebase
firebase.initializeApp(firebaseConfig);

//configuracion react-redux
const rrfConfig = {
    userProfile : 'users',
    useFireStoreForProfile : true
}

//crear en enhancer con compose de redux y firestore
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
    reduxFirestore(firebase) // <- needed if using firestore
  )(createStore);

//Crear reduce 
const rootReducer = combineReducers({
    firebase : firebaseReducer,
    firestore: firestoreReducer
})

//state inicial 
const initialState = {};

//create store
const store = createStoreWithFirebase(rootReducer,initialState,compose(
reactReduxFirebase(firebase)
,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;