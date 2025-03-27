import React from "react";
import "./styles/global.css";
import "./styles/index.css";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import { HomePage } from "./pages/HomePage/HomePage";

import { NotFoundPage } from "./pages//NotFoundPage/NotFoundPage";
import { ComparisonResultPage } from "./pages/ComparisonResultPage/ComparisonResultPage";
import CompanyDetail from "./pages/CompanyDetailPage/CompanyDetail";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />, // 에러 페이지 설정
    children: [
      { index: true, element: <HomePage /> }, // 기본 페이지
      { path: "/comparisonResult", element: <ComparisonResultPage /> },
      { path: "/companyDetail", element: <CompanyDetail /> },
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
