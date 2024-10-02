import { useLocation } from "react-router-dom";
import { FilmDescription } from "../../components/FilmCardDescription/FilmDescription";
import { useGetFilmDescriptionQuery } from "../../store/kinopoiskApi";
import { Loader } from "../../components";
export const FilmDescriptionPage = () => {
  let location = useLocation();

  let url = `${location.pathname}`;

  console.log(url);
  const { data, isLoading } = useGetFilmDescriptionQuery(url);

  console.log(data);

  if (isLoading) return <Loader />;


  return (
    <div>
      <FilmDescription
        name={data.nameRu}
        year={data.year}
        ratingKinopoisk={data.ratingKinopoisk}
        ratingImdb={data.ratingImdb}
        country={data.countries[0].country}
        genre={data.genres[0].genre}
        description={data?.shortDescription}
        poster={data.posterUrl}
      />
    </div>
  );
};
