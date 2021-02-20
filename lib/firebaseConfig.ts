import firebase from "firebase"

const config = {
  apiKey: "AIzaSyAiY4QiRLH8OHVGDTjwi-AZzJpPdfLXL0o",
  authDomain: "team-react-17.firebaseapp.com",
  projectId: "team-react-17",
  storageBucket: "team-react-17.appspot.com",
  messagingSenderId: "860744539138",
  appId: "1:860744539138:web:5938c33b65d26ac66f5b1b",
}

var fire

if (!firebase.apps.length) {
  fire = firebase.initializeApp(config)
} else {
  fire = firebase.app()
}

export default fire
