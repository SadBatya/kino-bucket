import { FilmCard } from "../../components";
import style from "./FavouritePage.module.scss";
import { useAppSelector } from "../../store/hooks";
import emptyIcon from "../../assets/gifs/empty.webp";

export const FavouritesPage = () => {
  const films = useAppSelector((state) => state.favouriteFilms.films);

  return (
    <div className={style.film__list}>
      {films.length ? (
        films.map((film) => (
          <FilmCard
            kinopoisk_id={film.kinopoisk_id}
            key={film.ratingKinopoisk}
            name={film.name}
            year={film.year}
            rating={film.ratingKinopoisk}
            poster={film.poster}
          />
        ))
      ) : (
        <div className={style.film__empty_title}>
          <h1>Список избранных пуст :c</h1>
          <img src={emptyIcon} alt="" />
        </div>
      )}
    </div>
  );
};
