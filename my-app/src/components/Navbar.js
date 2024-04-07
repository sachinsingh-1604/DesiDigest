// components/NavBar.js
import React from 'react';
import './Navbar.css'; // Import the CSS file for styling
import LoginPage from './LoginPage';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar">
            <div className="container">
                <div className='home'><Link to='/'><h2>DesiDigest</h2></Link></div>
                <div className="search-box">
                    <input type="text" placeholder="Search..." />
                    <button type="submit">Search</button>
                </div>
                <div className="location">
                    <Link to="#">Location</Link>
                </div>
                <div className="user-actions">
                    <Link to="/login">Login</Link>
                </div>

            </div>
        </nav>
    );
}

export default NavBar;
