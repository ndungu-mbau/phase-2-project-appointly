import React,{useState, useEffect} from 'react';
import{ firestore } from './firebase';


const ViewAppointments = ({ user }) => {
    const [appointments, setAppointments] = useState([]);
  
    useEffect(() => {
      const unsubscribe = firestore.collection('appointments')
        .where('createdBy', '==', user.uid)
        .onSnapshot((snapshot) => {
          const appointmentsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setAppointments(appointmentsData);
        });
  
      return () => unsubscribe();
    }, [user.uid]);
    return (
        <div className="max-w-lg mx-auto mt-8">
          <h2 className="text-2xl font-semibold mb-4">My Appointments</h2>
          <ul>
            {appointments.map(appointment => (
              <li key={appointment.id} className="border-b py-4">
                <p className="text-lg font-semibold">Title: {appointment.title}</p>
                <p className="text-gray-700 mt-2">Description: {appointment.description}</p>
                <p className="text-gray-700 mt-2">Date: {appointment.date}</p>
                <p className="text-gray-700 mt-2">Time: {appointment.time}</p>
                <p className="text-gray-700 mt-2">User: {appointment.user}</p>
                <p className="text-gray-700 mt-2">Person: {appointment.person}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    };
    
    export default ViewAppointments;