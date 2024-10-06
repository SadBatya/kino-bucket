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
} from "./pages";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Suspense } from "react";
import { Loader } from "./components";

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
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  </React.StrictMode>
);
