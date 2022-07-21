import { useState, useEffect } from 'react';
import axios from 'axios';

export function JsonPlaceholder() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      axios
        .get('http://jsonplaceholder.typicode.com/posts')
        .then((res) => {
          // console.log('res: ', res);
          setPosts(res.data);
        })
        .catch((err) => {
          console.log('err: ', err);
        });
    }, []);

  return posts;
}
