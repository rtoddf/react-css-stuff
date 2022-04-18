import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetPlaceHolderData() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('http://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        console.log('res: ', res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log('err: ', err);
      });
  }, []);

  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}

export default GetPlaceHolderData;
