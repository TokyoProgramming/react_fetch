import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [posts, setPost] = useState([]);

  const fetchData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const data = await res.json();
    console.log(data);
    setData(data);
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
        <button> Get post</button>
        {/* <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
        <ul>
          {data.map((user) => (
            <li key={user.id}>{user.id}</li>
          ))}
        </ul>
        <button></button> */}
      </div>
    </div>
  );
}

export default App;
