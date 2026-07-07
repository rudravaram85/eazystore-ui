import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Login from './components/Login.jsx';
import Cart from './components/Cart.jsx';
import Errorpage from './components/Errorpage.jsx';
import { productsLoader } from './components/Home.jsx';

const routeDefinitions = createRoutesFromElements(
  <Route path="/" element={<App />} errorElement={<Errorpage />}>
    <Route index element={<Home />} loader={productsLoader} />
    <Route path="/home" element={<Home />} loader={productsLoader} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/Cart" element={<Cart />} />
    <Route path="/login" element={<Login />} />
  </Route>,
);

const appRouter = createBrowserRouter(routeDefinitions);

//   {
//     path: '/',
//     element: <App />,
//     errorElement: <Errorpage />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       {
//         path: '/home',
//         element: <Home />,
//       },
//       {
//         path: '/about',
//         element: <About />,
//       },
//       {
//         path: '/contact',
//         element: <Contact />,
//       },
//       {
//         path: '/login',
//         element: <Login />,
//       },
//       {
//         path: '/cart',
//         element: <Cart />,
//       },
//     ],
//   },
// ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
);
