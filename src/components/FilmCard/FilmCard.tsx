import { IFilmCard } from "./features/filmCardTypes";
import style from "./FilmCard.module.scss";

export const FilmCard = ({ name, year, rating, poster }: IFilmCard) => {
  return (
    <div className={style.card}>
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
    </div>
  );
};
