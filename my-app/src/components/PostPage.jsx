import React, { useState, useContext } from 'react';
// import { AuthContext } from './AuthContext'; // Import AuthContext for user authentication
import './PostPage.css'; // Import CSS for styling

function PostPage() {
    // const { user } = useContext(AuthContext); // Get user information from AuthContext
    const user = null;
    const [postContent, setPostContent] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!user) {
            setError('Please log in to DesiDigest.'); // Display error if user is not logged in
            return;
        }

        try {
            const response = await fetch('/api/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${user.token}` // Send user token for authentication
                },
                body: JSON.stringify({ content: postContent, userId: user.id }) // Send post content and user id to backend
            });

            if (!response.ok) {
                throw new Error('Failed to post.');
            }

            // Reset form after successful post submission
            setPostContent('');
            setError('');
            console.log('Post submitted successfully.');
        } catch (error) {
            console.error('Error posting:', error);
            setError('Failed to post. Please try again later.');
        }
    };

    return (
        <div className="post-page">
            <h2 className="post-title">Create a Post</h2>
            <form onSubmit={handleSubmit} className="post-form">
                {error && <div className="error-message">{error}</div>}
                <textarea
                    className="post-input"
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                    placeholder="Write your post here..."
                    required
                ></textarea>
                <button type="submit" className="post-button">Post</button>
            </form>
        </div>
    );
}

export default PostPage;
