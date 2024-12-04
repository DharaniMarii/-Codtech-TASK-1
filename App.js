import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { fetchPosts } from './services/api';

const socket = io('http://localhost:5000');

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then((res) => setPosts(res.data));

    socket.on('receive_post', (newPost) => {
      setPosts((prev) => [newPost, ...prev]);
    });
  }, []);

  return (
    <div>
      <h1>Social Media App</h1>
      {posts.map((post) => (
        <div key={post._id}>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
