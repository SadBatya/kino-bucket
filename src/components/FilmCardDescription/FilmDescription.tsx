import type { IFilmDescriptionProps } from "./features/filmDescriptionTypes";
import style from "./FilmDescription.module.scss";
import image from './x1000.webp'

export const FilmDescription = ({
  id,
  name,
  poster,
  ratingKinopoisk,
  ratingImdb,
  year,
  description,
  country,
  genre,
}: IFilmDescriptionProps) => {
  return (
    <div className={style.card}>
      <div className={style.card__img}>
        <img src={image} alt="" />
      </div>
      <div className={style.card__about}>
        <h1 className={style.card__title}>Матрица {name}</h1>
        <div className={style.card__info}>
          <p className={style.card__year}>
           ГОД: 1996 {year}
          </p>
          <p className={style.card__rating_kp}>
            Rating KP {ratingKinopoisk}
          </p>
          <p className={style.card__rating_imdb}>
            Rating IMdb {ratingImdb}
          </p>
          <p className={style.card__country}>
            country {country}
          </p>
          <p className={style.card__genre}>
            genre {genre}
          </p>
        </div>
        <p className={style.card__description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aut, soluta iusto ad ratione assumenda ullam ducimus accusantium quisquam praesentium. {description}
        </p>
      </div>
    </div>
  );
};
