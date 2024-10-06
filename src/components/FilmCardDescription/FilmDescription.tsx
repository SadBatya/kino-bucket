import type { IFilmDescriptionProps } from "./features/filmDescriptionTypes";
import style from "./FilmDescription.module.scss";
import { useAppDispatch } from "../../store/hooks";
import { addFilm } from "../../store/favouriteFilmsSlice";
import { useState } from "react";
import { useAppSelector } from "../../store/hooks";
export const FilmDescription = ({
  name,
  poster,
  ratingKinopoisk,
  ratingImdb,
  year,
  description,
  country,
  genre,
  kinopoisk_id,
}: IFilmDescriptionProps) => {
  const dispatch = useAppDispatch();
  const [btnText, setBtnText] = useState("Добавить в избранное");
  const userStatus = useAppSelector((state) => state.user.isUserLogin);

  const putInFavourite = () => {
    if (userStatus) {
      dispatch(
        addFilm({
          name,
          poster,
          ratingKinopoisk,
          ratingImdb,
          year,
          description,
          country,
          genre,
          kinopoisk_id,
        })
      );

      setBtnText("Добавлено:D");
    }else{
      alert('Требуется регистрация пользователя')
    }
  };

  return (
    <div className={style.card} id={`${kinopoisk_id}`}>
      <div className={style.card__img}>
        <img src={poster} alt="" />
      </div>
      <div className={style.card__about}>
        <h1 className={style.card__title}> {name}</h1>
        <div className={style.card__info}>
          <p className={style.card__year}>Год: {year}</p>
          <p className={style.card__rating_kp}>KP {ratingKinopoisk}</p>
          <p className={style.card__rating_imdb}> IMdb {ratingImdb}</p>
          <p className={style.card__country}>Страна: {country}</p>
          <p className={style.card__genre}>Жанр: {genre}</p>
        </div>
        <p className={style.card__description}>
          {description ? description : "Описания фильма нет :c"}
        </p>
        <button className={style.card__btn} onClick={() => putInFavourite()}>
          {btnText}
        </button>
      </div>
    </div>
  );
};
