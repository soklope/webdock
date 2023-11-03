import{ useState, useEffect } from 'react';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.org/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>Category: {post.category}</p>
            <p>Published At: {post.publishedAt}</p>
            <p>Updated At: {post.updatedAt}</p>
            <p>User ID: {post.userId}</p>
            <img src={post.image} alt={post.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;



