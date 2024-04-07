import React, { useState, useEffect } from 'react';
import './ScrollableFeed.css'; // Import CSS for styling

function ScrollableFeed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Fetch posts data from an API
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setPosts(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="instagram-feed">
            {posts.map(post => (
                <div key={post.id} className="post">
                    <div className="post-header">
                        <img src={`https://via.placeholder.com/50?text=${post.id}`} alt="User Avatar" className="user-avatar" />
                        <span className="username">User {post.userId}</span>
                        <span className="timestamp">{new Date().toLocaleString()}</span>
                    </div>
                    <div className="post-details">
                        <div className="caption">{post.title}</div>
                        <div className="post-body">{post.body}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ScrollableFeed;
