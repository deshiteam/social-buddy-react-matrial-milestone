import React from 'react';
import { useParams } from 'react-router-dom';
import Post from '../Post/Post';

const PostDetails = () => {
    const {postId, title, body} = useParams()
    
   
        
    
    return (
        <div>
            <h1>{postId} Details Comming Soon</h1>
            <h2>{title}</h2>
            <p>{body}</p>
            
        </div>
    );
};

export default PostDetails;