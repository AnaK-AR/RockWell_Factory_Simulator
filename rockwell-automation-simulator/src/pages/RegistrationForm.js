import React, { useState } from 'react';

function RegistrationForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [location, setLocation] = useState('');
    const [industry, setIndustry] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password, location, industry })
            });
            const data = await response.json();
            if (response.ok) {
                console.log('Registration successful', data);
                // Handle successful registration, like redirecting to a login page or clearing the form
            } else {
                throw new Error(data.message || 'Failed to register');
            }
        } catch (error) {
            console.error('Registration failed:', error);
            // Handle the error in the UI
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" required/>
            <input type="text" value={industry} onChange={(e) => setIndustry(e.target.value)} placeholder="Industry" required/>
            <button type="submit">Create Account</button>
        </form>
    );
}

export default RegistrationForm;