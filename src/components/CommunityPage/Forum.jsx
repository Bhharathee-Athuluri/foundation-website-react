import React, { useState } from 'react';

const Forum = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'User1',
      content: 'This is the first post!',
      comments: [
        { id: 1, author: 'User2', content: 'Great post!' },
        // More comments for the first post...
      ],
    },
    {
      id: 2,
      author: 'User3',
      content: 'Second post here!',
      comments: [
        { id: 1, author: 'User4', content: 'Interesting topic!' },
        // More comments for the second post...
      ],
    },
    // More posts...
  ]);

  const addComment = (postId, author, content) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [
            ...post.comments,
            { id: post.comments.length + 1, author, content },
          ],
        };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-4xl font-bold mb-6 text-white">Our Forum</h2>
      {posts.map((post) => (
        <div key={post.id} className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="text-lg font-semibold mb-2">{post.author}</div>
          <div className="mb-4">{post.content}</div>
          <div className="mb-4">
            {post.comments.map((comment) => (
              <div key={comment.id} className="mb-2">
                <span className="font-semibold">{comment.author}: </span>
                <span>{comment.content}</span>
              </div>
            ))}
          </div>
          <div className="flex">
            <input
              type="text"
              placeholder="Your name"
              className="border border-gray-300 rounded-l px-2 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Your comment"
              className="border border-gray-300 rounded-r px-2 focus:outline-none flex-1"
            />
            <button
              onClick={() => addComment(post.id, 'UserX', 'New comment')}
              className="bg-blue-500 text-white px-4 py-2 ml-2 rounded focus:outline-none"
            >
              Add Comment
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Forum;