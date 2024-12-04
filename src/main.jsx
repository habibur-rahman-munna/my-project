import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import MainHome from "./Pages/Home/MainHome";
import BlogPage from "./Pages/Home/BlogPage.jsx";
import ServicePage from "./Pages/Home/ServicePage.jsx";
import Contact from "./Pages/Home/Contact.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainHome />,
      },
      {
        path:"blogpage",
        element:<BlogPage/>
      },
      {
        path:"/servicePage",
        element:<ServicePage/>
      },
      {
        path:"/contactpage",
        element:<Contact/>
      }
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
