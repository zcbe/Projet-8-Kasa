import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";

import Footer from "../layout/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import Main from "../layout/Main.jsx";
import HomePage from "../pages/HomePage.jsx";
import ApartmentPage from "../pages/ApartmentPage.jsx";
import AboutPage from "../pages/AboutPage.jsx";
import ErrorPageNotFound from "../pages/ErrorPageNotFound.jsx";

// Définition d'un composant qui représente le layout commun du header et du footer
const HeaderFooterLayout = () => {
  return (
    <>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

// Création de la configuration des routes de l'application
export const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout />, // Le layout de base pour toutes les routes
    errorElement: <ErrorPageNotFound />, // Le composant à afficher en cas d'erreur 404
    children: [
      // Les routes enfant
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/flat",
        element: <ApartmentPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
]);
