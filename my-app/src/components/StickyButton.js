import React from 'react';
import './StickyButton.css'; // Import CSS for styling
import { FaPlus } from 'react-icons/fa'; // Import the Post icon

function StickyButton() {
    return (
        <div className="sticky-button-container">
            <button className="sticky-button">
                <FaPlus /> {/* Post icon */}
            </button>
        </div>
    );
}

export default StickyButton;
