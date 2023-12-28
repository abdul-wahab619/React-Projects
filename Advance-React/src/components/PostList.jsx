import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import { useState } from "react";
import { useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addInitalPosts } = useContext(PostListData);
  const [fetching, setFetching] = useState(false);

  const controller = new AbortController();
  const signal = controller.signal;

  useEffect(() => {
    setFetching(true);
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitalPosts(data.posts);
        setFetching(false);
      });
    return () => {
      console.log("Cleaning up UseEffect.");
      controller.abort();
    };
  }, []);
  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
