import React, { useState } from 'react';

const Forum = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'User 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et est erat.',
      comments: [
        { id: 1, author: 'User 2', content: 'Great post!' },
      ],
    },
    {
      id: 2,
      author: 'User 3',
      content: 'Morbi facilisis ultricies urna malesuada faucibus. Proin pharetra, sapien ac elementum volutpat, nunc ligula rhoncus ante, quis congue dui mauris vel enim',
      comments: [
        { id: 1, author: 'User 4', content: 'Interesting topic!' },
        { id: 2, author: 'User 5', content: 'Great post!' },
      ],
    },
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
    <div className="container mx-auto px-4 pt-8 bg-primary font-poppins">
      <h1 className="text-4xl font-bold text-center mb-4 text-gradient">Our Forum</h1>
      <p className='text-gray-300 px-4 pb-4'>Through this forum, we welcome all of your constructive feedback and suggestions. We deeply appreciate all your support and help. All our efforts are made possible only because of your support. So, together lets begin building this amazing online community. </p>
      <div className="grid gap-6 sm:grid-cols-2">
        {posts.map((post) => (
          <div key={post.id} className="bg-gradient-to-bl from-slate-100 to-emerald-100 rounded-lg shadow-md shadow-gray-300">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{post.author}</h2>
              <p className="mb-4">{post.content}</p>
              <div className="mb-4">
                {post.comments.map((comment) => (
                  <div key={comment.id} className="mb-2">
                    <span className="font-semibold">{comment.author}: </span>
                    <span>{comment.content}</span>
                  </div>
                ))}
              </div>
              <div className="flex text-[16px]">
                <input
                  type="text"
                  placeholder="Your name"
                  className="border border-gray-300 rounded-l bg-slate-100 px-2 focus:outline-none  focus:ring-2 focus:ring-blue-300 w-full"
                />
                <input
                  type="text"
                  placeholder="Your comment"
                  className="border border-gray-300 bg-slate-100 rounded-r px-2 focus:outline-none  focus:ring-2 focus:ring-blue-300 w-full"
                />
                <button
                  onClick={() => addComment(post.id, 'UserX', 'New comment')}
                  className="bg-blue-500 text-white px-4 py-2 ml-2 rounded-lg focus:outline-none hover:ring-2 hover:ring-blue-500 hover:bg-blue-700"
                >
                  Post Comment
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forum;