import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { AuthorizationPage, FavouritesPage, FilmListPage, LoginPage } from "./pages";

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
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/authorization',
        element: <AuthorizationPage />
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
