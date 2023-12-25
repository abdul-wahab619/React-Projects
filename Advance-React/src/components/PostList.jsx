import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import { useState } from "react";

const PostList = () => {
  const { postList, addInitalPosts } = useContext(PostListData);
  const [fetchData, setFetchData] = useState(false);
  if (!fetchData) {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitalPosts(data.posts);
      });
    setFetchData(true);
  }
  const handleGetPostsClick = () => {};
  return (
    <>
      {postList.length === 0 && <WelcomeMessage />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
