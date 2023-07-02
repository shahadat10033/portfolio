import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Components/Main/Main";
// import Banner from "./Components/Banner/Banner";
// import About from "./Components/About/About";
// import Skill from "./Components/Skills/Skill";
// import Projects from "./Components/Projects/Projects";
// import Contact from "./Components/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  // {
  //   path: "/home",
  //   element: <Banner></Banner>,
  // },
  // {
  //   path: "/about",
  //   element: <About></About>,
  // },
  // {
  //   path: "/skills",
  //   element: <Skill></Skill>,
  // },
  // {
  //   path: "/projects",
  //   element: <Projects></Projects>,
  // },
  // {
  //   path: "/contact",
  //   element: <Contact></Contact>,
  // },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
