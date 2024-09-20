import { useEffect, useState } from "react";
import axios from 'axios';
import { FilmCard } from "../../components";
import style from './FilmListPage.module.scss'
interface Film {
  id: string,
  title: string,
  year: number,
  kinopoiskId: number,
  nameOriginal: string,
  nameRu: string,
  ratingKinopoisk: number,
  posterUrl: string,
}

interface ApiResponse {
  items: Film[]
}

export const FilmListPage = () => {
  const [data, setData] = useState<Film[]>([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ApiResponse>('https://kinopoiskapiunofficial.tech/api/v2.2/films', {
          headers: {
            'X-API-KEY': 'e3185e7e-37be-42f9-a8ad-2a4678fc531d',
            "Content-Type": 'application/json'
          }
        });
        setData(response.data.items);
      } catch (error) {
        
      }
    };

    fetchData();
  }, []);
  console.log(data)

  return (
    <div className={style.film__list}>
      {data.map((film) => (
        <FilmCard 
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
