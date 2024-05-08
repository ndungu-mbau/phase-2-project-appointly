// export const Login = () => {
//   return (
//     <div>
//       <h1>Login</h1>
//     </div>
//   );
// };

import React, {useState} from 'react';

export const Login = () => {
  // variables for username/ email and password 
  const [username, setUsername] = useState ('');
  const [password, setPassword] = useState ('');

  // function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault ();

    // add logic to handle form submission
    console.log ('Username:', username);
    console.log ('Password:', password);
  };

}
