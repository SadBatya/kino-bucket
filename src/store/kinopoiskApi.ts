import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

interface Film {
  id: string;
  title: string;
  year: number;
  kinopoiskId: number;
  nameOriginal: string;
  nameRu: string;
  ratingKinopoisk: number;
  posterUrl: string;
}

interface ApiResponse {
  items: Film[];
}

export const kinopoiskApi = createApi({
  reducerPath: "kinopoiskApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://kinopoiskapiunofficial.tech/api/v2.2/",
    prepareHeaders: (headers) => {
      headers.set("X-API-KEY", "e3185e7e-37be-42f9-a8ad-2a4678fc531d");
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getFilmList: builder.query<ApiResponse, void>({
      query: () => "/films",
    }),
    getFilmDescription: builder.query({
      query: (path = "") => `${path}`,
    }),
    searchFilmByName: builder.query({
      query: (name = "") => `/films?keyword=${name}`,
    }),
  }),
});

export const { useGetFilmListQuery, useSearchFilmByNameQuery, useGetFilmDescriptionQuery } = kinopoiskApi;
