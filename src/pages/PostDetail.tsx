import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
}

interface Comment {
  id: number;
  content: string;
  author: string;
  createdAt: string;
}

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    // Fetch post and comments from API
    // Example: fetchPost(id).then(setPost);
    // Example: fetchComments(id).then(setComments);
    // For now, we'll use dummy data
    setPost({
      id: 1,
      title: 'Sample Post',
      content: 'This is a sample post content...',
      author: 'John Doe',
      createdAt: '2023-04-15',
    });
    setComments([
      {
        id: 1,
        content: 'Great post!',
        author: 'Jane Smith',
        createdAt: '2023-04-16',
      },
      {
        id: 2,
        content: 'Thanks for sharing.',
        author: 'Bob Johnson',
        createdAt: '2023-04-17',
      },
    ]);
  }, [id]);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle comment submission logic here
    console.log('New comment', newComment);
    setNewComment('');
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-4">
        By {post.author} on {post.createdAt}
      </p>
      <div className="prose mb-8">{post.content}</div>

      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      <div className="space-y-4 mb-8">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-white p-4 rounded-md shadow">
            <p className="mb-2">{comment.content}</p>
            <p className="text-sm text-gray-600">
              By {comment.author} on {comment.createdAt}
            </p>
          </div>
        ))}
      </div>

      <form onSubmit={handleCommentSubmit} className="space-y-4">
        <div>
          <label htmlFor="comment" className="block mb-1">
            Add a comment
          </label>
          <textarea
            id="comment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md h-24"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit Comment
        </button>
      </form>
    </div>
  );
};

export default PostDetail;