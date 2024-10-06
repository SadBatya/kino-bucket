import { FilmCard, Loader } from "../../components";
import style from "./FilmListPage.module.scss";
import { useGetFilmListQuery } from "../../store/kinopoiskApi";
interface Film {
  title: string;
  year: number;
  kinopoiskId: number;
  nameOriginal: string;
  nameRu: string;
  ratingKinopoisk: number;
  posterUrl: string;
}

export const FilmListPage = () => {
  const { data, isLoading } = useGetFilmListQuery();

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
