const { initializeApp, cert, getApps } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const serviceAccount = require("./serviceAccountKey.json");

if (getApps().length === 0) { 
    initializeApp({
      credential: cert(serviceAccount),
    });
  }
const db = getFirestore();

export default db;

