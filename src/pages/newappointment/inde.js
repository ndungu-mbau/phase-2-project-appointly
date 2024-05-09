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

    
}