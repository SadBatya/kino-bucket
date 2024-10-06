import { FilmCard, Loader } from "../../components";
import style from "./ResultSearchFilm.module.scss";
import { useSearchFilmByNameQuery } from "../../store/kinopoiskApi";
import { useAppSelector } from "../../store/hooks";

interface Film {
  title: string;
  year: number;
  kinopoiskId: number;
  nameOriginal: string;
  nameRu: string;
  ratingKinopoisk: number;
  posterUrl: string;
}

export const ResultSearchFilm = () => {
  const name = useAppSelector(
    (state) => state.filmNameSearchResult.resultDataSearch
  );
  const { data, isLoading } = useSearchFilmByNameQuery(name);

  if (isLoading) return <Loader />;

  return (
    <div className={style.film__list}>
      {data?.items.map((film: Film) => (
        <FilmCard
          kinopoisk_id={film.kinopoiskId}
          key={film.kinopoiskId}
          name={film.nameRu}
          year={film.year}
          rating={film.ratingKinopoisk}
          poster={film.posterUrl}
        />
      ))}
    </div>
  );
};
