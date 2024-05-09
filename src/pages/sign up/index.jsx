import { confirmPasswordReset } from 'firebase/auth';
import React,  { useState} from 'react';

function signup () {
    const [formData, setFormData] = useState ( {
        username:'',
        email:'',
        password:'',
        confirmPassword:'',

    });

    const handleChange = (e) => {
        const {name, value } = e.target;
        setFormData ({...formData, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // handle form submision 
        console.log (formData);
        // submission logic
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username:
            </label>
            <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        

    )

}
