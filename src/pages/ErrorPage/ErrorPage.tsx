import style from "./ErrorPage.module.scss";
import { Link } from "react-router-dom";
import cat from "../../assets/gifs/cat.webp";

export const ErrorPage = () => {
  return (
    <div className={style.error}>
      <div>
        <h1 className={style.error__text}>Упс! Что-то пошло не так :c</h1>
        <h2>Уже работаем над этим :)</h2>
      </div>
      <img className={style.error__gif} src={cat} alt="cat" />
      <Link className={style.error__btn} to="/">
        Вернуться на главную
      </Link>
    </div>
  );
};
