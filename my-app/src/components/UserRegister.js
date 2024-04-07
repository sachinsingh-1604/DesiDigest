import React, { useState } from 'react';
import './UserRegister.css'; // Import CSS for styling

function UserRegister() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [location, setLocation] = useState('');
    // Add additional state variables for other fields

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Here you can handle the registration logic
        console.log('Submitted:', { name, email, password, mobileNumber, location });
        // Example: You might send the registration data to the backend for processing
    };

    return (
        <div className="user-register-page">
            <div className="register-container">
                <h2 className="register-title">Register as a User</h2>
                <form onSubmit={handleSubmit} className="register-form">
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input
                            type="text"
                            id="name"
                            className="form-input"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email Address:</label>
                        <input
                            type="email"
                            id="email"
                            className="form-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Password:</label>
                        <input
                            type="password"
                            id="password"
                            className="form-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobileNumber" className="form-label">Mobile Number:</label>
                        <input
                            type="text"
                            id="mobileNumber"
                            className="form-input"
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="location" className="form-label">Location:</label>
                        <input
                            type="text"
                            id="location"
                            className="form-input"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            required
                        />
                    </div>
                    {/* Add additional form fields here */}
                    <button type="submit" className="register-button">Register</button>
                </form>
            </div>
        </div>
    );
}

export default UserRegister;
