
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, firebaseApp } from './firebase';

const Auth = () => {
  const [user] = useAuthState(auth);

  const signInWithGoogle = () => {
    const provider = new firebaseApp.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <div>
      {user ? (
        <button onClick={() => auth.signOut()}>Sign out</button>
      ) : (
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      )}
    </div>
  );
};
