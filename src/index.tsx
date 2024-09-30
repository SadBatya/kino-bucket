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
  FilmDescriptionPage
} from "./pages";
import { Provider } from "react-redux";
import { store } from "./store/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Error Page</div>,
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
        path: '/film-description',
        element: <FilmDescriptionPage />
      }
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
