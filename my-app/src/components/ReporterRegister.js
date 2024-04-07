import React, { useState } from 'react';
import './ReporterRegister.css'; // Import CSS for styling

function ReporterRegister() {
    const [name, setName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [email, setEmail] = useState('');
    const [aadharNumber, setAadharNumber] = useState('');
    const [age, setAge] = useState('');
    const [password, setPassword] = useState('');
    // Add additional state variables for other fields

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Here you can handle the registration logic
        console.log('Submitted:', { name, mobileNumber, email, aadharNumber, age, password });
        // Example: You might send the registration data to the backend for processing
    };

    return (
        <div className="reporter-register-page">
            <div className="register-container">
                <h2 className="register-title">Register as a Reporter</h2>
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
                        <label htmlFor="aadharNumber" className="form-label">Aadhar Number:</label>
                        <input
                            type="text"
                            id="aadharNumber"
                            className="form-input"
                            value={aadharNumber}
                            onChange={(e) => setAadharNumber(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="age" className="form-label">Age:</label>
                        <input
                            type="text"
                            id="age"
                            className="form-input"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
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
                    {/* Add additional form fields here */}
                    <button type="submit" className="register-button">Register</button>
                </form>
            </div>
        </div>
    );
}

export default ReporterRegister;
