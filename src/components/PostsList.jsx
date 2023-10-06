import { useState } from "react";
import Modal from "./Modal";
import NewPosts from "./NewPosts";
import Post from "./Post";
import style from "./PostsList.module.css";

function PostsList({ modalVisible, closeModalHandler }) {
  const [posts, setPosts] = useState([]);

  const submitPostHandler = (postData) => {
    setPosts((currentPosts) => [postData, ...currentPosts]);
  };

  return (
    <>
      {modalVisible && (
        <Modal closeModalHandler={closeModalHandler}>
          <NewPosts
            closeModalHandler={closeModalHandler}
            submitPostHandler={submitPostHandler}
          />
        </Modal>
      )}
      {posts.length > 0 && (
        <ul className={style.posts}>
          {posts.map((post) => (
            <Post key={post.names} names={post.names} quotes={post.quotes} />
          ))}
        </ul>
      )}{posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no Quotes 🤷‍♀️</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
