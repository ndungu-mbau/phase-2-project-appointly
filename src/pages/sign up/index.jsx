import { confirmPasswordReset } from 'firebase/auth';
import React,  { useState} from 'react';

function signup () {
    const [formData, setFormData] = useState ( {
        username:'',
        email:'',
        password:'',
        confirmPassword:'',

    });

}
