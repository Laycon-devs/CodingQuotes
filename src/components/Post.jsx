import style from './Post.module.css';
function Post({names, quotes}) {

  return (
    <div className={style.post}>
      <p className={style.names}>{names}</p>
      <p className={style.descrp}>{quotes}</p>
    </div>
  );
}

export default Post
