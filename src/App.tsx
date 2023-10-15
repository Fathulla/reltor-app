import React from "react";
import { SettingsPage } from "./pages/SettingsPage/SettingsPage.tsx";
import { MainPage } from "./pages/MainPage/MainPage.tsx";
import { LoginPage } from "./pages/LoginPage/LoginPage.tsx";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { store } from "./store/store.ts";
import { Provider } from "react-redux";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/main",
      element: <MainPage />,
    },
    {
      path: "/settings",
      element: <SettingsPage />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
