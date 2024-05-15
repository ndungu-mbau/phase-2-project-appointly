import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollection } from "react-firebase-hooks/firestore";
import { auth } from "../../firebase";

export const MyAppointments = () => {
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    console.log({ id: user.uid, loading, error });
  }, [user, loading, error]);
  return (
    <div>
      <h1>My Appointments</h1>
    </div>
  );
};
