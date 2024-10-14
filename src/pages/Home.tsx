import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Post {
  id: number;
  title: string;
  excerpt: string;
}

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Fetch posts from API
    // Example: fetchPosts().then(setPosts);
    // For now, we'll use dummy data
    setPosts([
      { id: 1, title: 'First Post', excerpt: 'This is the first post...' },
      { id: 2, title: 'Second Post', excerpt: 'This is the second post...' },
    ]);
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Latest Posts</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <Link
              to={`/post/${post.id}`}
              className="text-blue-500 hover:underline"
            >
              Read more
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;