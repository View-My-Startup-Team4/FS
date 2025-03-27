import React from "react";
import './styles/global.css'
import './styles/index.css'
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home  from "./pages/HomePage/Home";
import { NotFoundPage } from "./pages/NotFoundPage/NotFound";
import Compare from "./pages/ComparePage/Compare";
import Status from "./pages/StatusPage/Status";
import Investment from "./pages/InvestmentPage/Investment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />, // 에러 페이지 설정
    children: [
      { index: true, element: <Home/> }, // 기본 페이지
      { path : '/compare', element : <Compare />},
      { path : '/status', element : <Status />},
      { path : '/investment', element : <Investment />},
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
