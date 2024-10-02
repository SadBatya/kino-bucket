import { IFilmCard } from "./features/filmCardTypes";
import style from "./FilmCard.module.scss";
import { Link } from "react-router-dom";

export const FilmCard = ({
  name,
  year,
  rating,
  poster,
  kinopoisk_id,
}: IFilmCard) => {
  return (
    <div className={style.card} id={`${kinopoisk_id}`}>
      <Link to={`/films/${kinopoisk_id}`}>
        <div className={style.card__img}>
          <img src={poster} alt="poster film" />
        </div>
        <div className={style.card__film_inner}>
          <div className={style.card__name}>{name}</div>
          <div className={style.card__film_info}>
            <span className={style.card__year}>{year}</span>
            <div className={style.card__rating}>{rating}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};
