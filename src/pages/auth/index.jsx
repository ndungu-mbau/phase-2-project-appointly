// import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
// import { useAuthState } from 'react-firebase-hooks/auth';

// const auth = getAuth(firebaseApp);

// const login = () => {
//   signInWithEmailAndPassword(auth, 'test@test.com', 'password');
//   const [
//     signInWithEmailAndPassword,
//     user,
//     loading,
//     error,
//   ] = useSignInWithEmailAndPassword(auth);
// };
// const logout = () => {
//   signOut(auth);
// };

// const CurrentUser = () => {
//   const [user, loading, error] = useAuthState(auth);

//   if (loading) {
//     return (
//       <div>
//         <p>Initialising User...</p>
//       </div>
//     );
//   }
//   if (error) {
//     return (
//       <div>
//         <p>Error: {error}</p>
//       </div>
//     );
//   }
//   if (user) {
//     return (
//       <div>
//         <p>Current User: {user.user.email}</p>
//         <button onClick={logout}>Log out</button>
//       </div>
//     );
//   }
//   return <button onClick={() => signInWithEmailAndPassword(email, password)}>Log in</button>;
// };

import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { app } from '../../firebase';

const auth = getAuth(app);

const login = () => {
  signInWithEmailAndPassword(auth, 'test@test.com', 'password')
    .then((userCredential) => {
      // You can do something after successful login if needed
    })
    .catch((error) => {
      // Handle login errors
    );
};

const logout = () => {
  signOut(auth)
    .then(() => {
      // You can do something after successful logout if needed
    })
    .catch((error) => {
      // Handle logout errors
    });
};

export const Auth = () => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return (
      <div>
        <p>Initialising User...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (user) {
    return (

      <div>
        <p>Current User: {user.email}</p>
        <button onClick={logout}>Log out</button>
      </div>
    );
  }
  return <button onClick={login}>Log in</button>;
};
