import style from "./NewPosts.module.css";
import { useState } from "react";

function NewPosts({ closeModalHandler, submitPostHandler }) {

  const [enterName, setEnterName] = useState("");
  const [enterBody, setEnterBody] = useState("");

  const changeBodyHandler = (e) => {
    setEnterBody(e.target.value);
  };
  const changeNamesHandler = (e) => {
    setEnterName(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const postData = {
      names: enterName,
      quotes: enterBody
    };
    submitPostHandler(postData);
    closeModalHandler();
  }

  return (
    <div>
      <form className={style.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={changeBodyHandler} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" required onChange={changeNamesHandler} />
        </p>
        <p className={style.actions}>
          <button type="button" onClick={closeModalHandler}>
            Cancel
          </button>
          <button>Submit</button>
        </p>
      </form>
    </div>
  );
}

export default NewPosts;
