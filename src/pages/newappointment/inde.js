import { useState } from "react"

function newappointments () {
    const [formData, setFormData] = useState ({
        title: '',
        description:'',
        date:'',
        time:'',
        user:'',
        person:'',
        
    });

    const handleChange = (e) => {
        const {name, value } = e.target;
        setFormData ({...formData, [name]: value});

    };

    const handleSubmit = (e) => {
        e.preventDefault ();
        // handle form submission 
        console.log (formData);
        // submisson logic
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl mb-4">New Appointment</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                Title:
              </label>
              <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />


    )

    
}