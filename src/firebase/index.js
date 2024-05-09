// Import SDKs for Firebase Products to be used
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { app } from "./init";

// Initialize auth
const auth = getAuth(app);

//Initialize firestore
const firestore = getFirestore(app);

export { auth, firestore, app };
