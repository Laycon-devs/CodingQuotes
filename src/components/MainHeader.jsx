import { MdPostAdd, MdMessage } from "react-icons/md";

import style from "./MainHeader.module.css";

function MainHeader({ openModalHandler }) {
  return (
    <header className={style.header}>
      <h1 className={style.logo}>
        <MdMessage />
        Coding Quotes
      </h1>
      <p>
        <button className={style.button} onClick={openModalHandler}>
          <MdPostAdd size={18} />
          New Post
        </button>
      </p>
    </header>
  );
}

export default MainHeader;
