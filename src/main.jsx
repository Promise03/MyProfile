import React from 'react'; // React is needed for JSX
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'; // Your global CSS

// Import your components and pages
// Assuming OutletPage is a component that renders an <Outlet /> for nested routes
import OutletPage from './component/OutletPage';
import Home from './page/Home';
import Project from './page/project';
import Testimonial from './component/testimonial';
import Portfolio from './component/Portfolio';
import About from './component/About';
import Blog from './page/Blog';
import Service from './page/service';

// Define your routes
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
        path: 'Service', // Relative path
        element: <Service />,
      },
      
      // Add other routes here as needed
    ],
  },
  // You can add other top-level routes here if they don't use OutletPage as a layout
]);

// Render your application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


