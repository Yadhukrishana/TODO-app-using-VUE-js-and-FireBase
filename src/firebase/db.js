
import firebase from "firebase/app";
import "firebase/firestore";

// Get a Firestore instance

// for the security reasions im not revealing  the confidential information publicaly , so please cooperate
var firebaseConfig = {
  apiKey: '<your-api-key>',
  authDomain: '<your-auth-domain>',
  databaseURL: '<your-database-url>',
  projectId: '<your-cloud-firestore-project>',
  storageBucket: '<your-storage-bucket>',
  messagingSenderId: '<your-sender-id>',
  appId: '<your-app-id>',
  measurementId: '<your-measurement-id>'
};

export const db = firebase.initializeApp(firebaseConfig).firestore();

// Export types that exists in Firestore
const { Timestamp, GeoPoint } = firebase.firestore;
export { Timestamp, GeoPoint };

// developed  by YADHU KRISHNAN K P
