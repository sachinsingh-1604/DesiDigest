import React, { useState } from 'react';
import './LoginPage.css'; // Import CSS for styling
import { Link } from 'react-router-dom';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                throw new Error('Failed to login');
            }

            // Handle successful login, redirect user, etc.
            console.log('Login successful');
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h2 className="login-title">Login to DesiDigest</h2>
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <label htmlFor="username" className="form-label">Username:</label>
                        <input
                            type="text"
                            id="username"
                            className="form-input"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
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
                    <button type="submit" className="login-button">Login</button>
                    <div className="register-links">
                        <Link to="/ReporterRegister">Register as a Reporter</Link>
                        <Link to="/UserRegister">Register as a User</Link>
                        {/* <a href="/reporter-register">Register as a Reporter</a>
                        <a href="./UserRegister.js">Register as a User</a> */}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
