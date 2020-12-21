import React from 'react';

function Post({ id, post }) {
  return (
    <div>
      <ul>
        <li>{post}</li>
      </ul>
    </div>
  );
}

export default Post;
