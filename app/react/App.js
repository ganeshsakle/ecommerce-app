import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter, Outlet} from 'react-router-dom';
import Header from './components/Header';
import Products from './components/Products';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Login from './components/Login';

const App = () => {
    return(
        <React.Fragment>
          <Header/>
          <Products/>
          <Footer/>
        </React.Fragment>
    );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '',
        element: ''
      }
    ]
  },
  {
    path: '/signup',
    element: <Signup/>
  },
  {
    path: '/login',
    element: <Login/>
  }
]);

const root = document.getElementById("root");
createRoot(root).render(<RouterProvider router={router}/>);