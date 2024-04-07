import React, { useState, useEffect } from 'react';
import './FollowerPanel.css'; // Import CSS for styling

function FollowerPanel() {
    const [followers, setFollowers] = useState([]);

    useEffect(() => {
        const fetchFollowers = async () => {
            try {
                const response = await fetch('/api/followers');
                if (!response.ok) {
                    throw new Error('Failed to fetch followers');
                }
                const data = await response.json();
                setFollowers(data);
            } catch (error) {
                console.error('Error fetching followers:', error);
            }
        };

        fetchFollowers();
    }, []);

    return (
        <div className="follower-panel">
            <h2 className="follower-title">Followers</h2>
            <ul className="follower-list">
                {followers.map(follower => (
                    <li key={follower.id} className="follower-item">{follower.username}</li>
                ))}
            </ul>
        </div>
    );
}

export default FollowerPanel;
