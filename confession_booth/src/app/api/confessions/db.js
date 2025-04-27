const { initializeApp, cert, getApps } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const serviceAccount = {
  project_id: process.env.FIREBASE_PROJECT_ID,
  client_id: process.env.FIREBASE_CLIENT_ID,
  privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  client_email: process.env.FIREBASE_CLIENT_EMAIL
}

if (getApps().length === 0) { 
    initializeApp({
      credential: cert(serviceAccount),
    });
  }
const db = getFirestore();

export default db;

