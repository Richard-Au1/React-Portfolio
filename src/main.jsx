// importing all the imports
import App from './app';
import { ReactDOM } from 'react-dom/client';

import {createBrowserRouter, RouterProvider } from 'react-router-dom';

import aboutMe from './pages/aboutMe';
import resume from './pages/resume';
import portfolio from './pages/portfolio';
import contact from './pages/contact';

// creating a webrowser
const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        // errorElement: <NoFound/> will add in as a later page.
        children: [
            {
                index: true,
                element: <aboutMe/>,
            },{
                path: 'resume',
                element: <Resume/>,
            },{
                path: 'portfolio',
                element: <Portfolio/>,
            },{
                path: 'contact',
                element: <Contact/>,
            },
        ]
    }
]);