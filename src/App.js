import React, { useEffect, useState } from 'react';
import Post from './components/Post';
import User from './components/User';

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPost] = useState([]);

  const fetchData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const data = await res.json();
    console.log(data);
    setUsers(data);
  };

  const asyncFetchData = async () => {
    const resFetch = await fetch('https://jsonplaceholder.typicode.com/posts');
    const dataFetch = await resFetch.json();
    console.log(dataFetch);
    setPost(dataFetch);
  };

  useEffect(() => {
    asyncFetchData();
    fetchData();

    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h1>hello react</h1>

        {posts.map((post) => (
          <Post key={post.id} id={post.id} post={post.title} />
        ))}
        {users.map((user) => (
          <User key={user.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
