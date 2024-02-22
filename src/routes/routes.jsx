
import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Footer from '../layout/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Main from '../layout/Main.jsx';
import App from '../App.jsx';


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

export const router = createBrowserRouter([
    {
        element: <HeaderFooterLayout />,
        errorElement: <h1>404 not found</h1>,
        children: [
            {
                path: '/',
                element: <App/>, // Remplacez ce composant par le composant de votre page d'accueil
            },
            {
                path: '/flat',
                element: <div>nos appartement </div>
            },
            {
                path: '/about',
                element: <div >A propos</div>
            }
        ],
    }
]);
