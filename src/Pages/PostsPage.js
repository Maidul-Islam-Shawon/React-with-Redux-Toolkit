import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../Components/Post";
import { fetchPosts, postsSelector } from "../Slices/PostSlice";

const PostsPage = () => {
  const dispatch = useDispatch();
  const { posts, loading, hasErrors } = useSelector(postsSelector);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  console.log(posts);

  const renderPosts = () => {
    if (loading) return <p>Loading posts...</p>;
    if (hasErrors) return <p>Unable to display posts.</p>;

    return posts.map((post) => <Post key={post.id} post={post} excerpt />);
  };
  return (
    <section>
      <h1>Posts</h1>
      {renderPosts()}
    </section>
  );
};

export default PostsPage;
