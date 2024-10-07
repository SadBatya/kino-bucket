import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import {
  AuthorizationPage,
  FavouritesPage,
  FilmListPage,
  LoginPage,
  FilmDescriptionPage,
  ErrorPage,
  ResultSearchFilm,
} from "./pages";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Suspense } from "react";
import { Loader } from "./components";
import { ErrorBoundary } from "react-error-boundary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <FilmListPage />,
      },
      {
        path: "/favourites",
        element: <FavouritesPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/authorization",
        element: <AuthorizationPage />,
      },
      {
        path: "/films/:id",
        element: <FilmDescriptionPage />,
      },
      {
        path: "/search-result",
        element: <ResultSearchFilm />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<Loader />}>
        <ErrorBoundary fallback={<ErrorPage />}>
          <RouterProvider router={router} />
        </ErrorBoundary>
      </Suspense>
    </Provider>
  </React.StrictMode>
);
