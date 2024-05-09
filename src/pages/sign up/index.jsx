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

}
