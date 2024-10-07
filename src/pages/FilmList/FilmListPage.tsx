import { FilmCard, Loader } from "../../components";
import style from "./FilmListPage.module.scss";
import { useGetFilmListQuery } from "../../store/kinopoiskApi";
import { useState } from "react";
import arrow from "../../assets/icons/arrow.svg";

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
  const [pageNumber, setPageNumber] = useState(1);
  const { data, isLoading } = useGetFilmListQuery(pageNumber);

  if (isLoading) return <Loader />;

  const incrementPageNumber = () => {
    setPageNumber(pageNumber + 1);
  };

  const decrementPageNumber = () => {
    setPageNumber(Math.max(pageNumber - 1, 1));
  };

  return (
    <div className={style.film__list}>
      <div className={style.film__list_inner}>
        {data &&
          data.items.map((film: Film) => (
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

      <div className={style.pagination}>
        <button
          className={style.pagination__btn_left}
          onClick={decrementPageNumber}
        >
          <img src={arrow} alt="" />
        </button>
        <p>{pageNumber}</p>
        <button
          className={style.pagination__btn_right}
          onClick={incrementPageNumber}
        >
          <img src={arrow} alt="" />
        </button>
      </div>
    </div>
  );
};
