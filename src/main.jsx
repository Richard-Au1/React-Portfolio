// importing all the imports
import App from './app';
import { ReactDOM } from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AboutMe from './pages/aboutMe';
import Resume from './pages/resume';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';

// creating a webrowser
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        // errorElement: <NoFound/> will add on a later date.
        children: [
            {
                index: true,
                element: <AboutMe />,
            }, {
                path: 'resume',
                element: <Resume />,
            }, {
                path: 'portfolio',
                element: <Portfolio />,
            }, {
                path: 'contact',
                element: <Contact />,
            },
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);