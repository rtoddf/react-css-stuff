import React from 'react';
import { JsonPlaceholder } from '../../../Apis/JsonPlaceholder';

function PlaceHolder() {
  const data = JsonPlaceholder();

  const posts = data.map((post, index) => {
    return <li key={index}>{post.title}</li>;
  });

  return (
    <>
      <h3>Posts</h3>
      <ul>{posts}</ul>
    </>
  );
}

export default PlaceHolder;
