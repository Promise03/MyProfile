import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import OutletPage from './component/OutletPage';
// import Skill from './component/skill';
import Project from './page/project';
// import Testimonial from './component/testimonial';
// import Footer from './component/footer';
import Home from './page/Home';
import Portfolio from './component/Portfolio';
import Skill from './page/skill';
import Service from './page/service';
// import AOS from 'aos';
// import React, { useEffect } from 'react';
// import { useState } from 'react';

  //   useEffect(() => {
  //   AOS.init({duration: 1000})
  //   AOS.refresh()
  // }),

//  const [dark, setDark] = useState(false);
//  const Mode = () => {
//   setDark(!dark)
//  };
const router = createBrowserRouter([
  {
    path: '/', // This is the root path
    element: <OutletPage />, // OutletPage will render the matched child route
    children: [
      {
        index: true, // This makes '/Home' the default child route for '/'
        element: <Home />,
      },
      {
        path: 'Home', // Relative path to parent '/'
        element: <Home />,
      },
      {
        path: 'About', // Relative path
        element: <About />,
      },
      {
        path: 'Project', // Relative path
        element: <Project />,
      },
      {
        path: 'Portfolio', // Relative path
        element: <Portfolio />,
      },
       {
        path: 'Blog', // Relative path
        element: <Blog />,
      },
       {
        path: 'Skill', // Relative path
        element: <Service />,
      },
      
      // Add other routes here as needed
    ],
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

