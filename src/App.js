import './App.css';
import Main from './Layouts/Main';
import Shop from './Components/Shop/Shop'
import Orders from './Components/Orders/Orders'
import About from './Components/About/About'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { productsAndCart } from './Loaders/productsAndCart';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp'
import Shipping from './Components/Shipping/Shipping';
import PrivateRoute from './PrivateRouter/PrivateRoute';


function App() {
  const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: 
[    {
      path: '/',
      element: <Shop></Shop>
    },

    {
      path: '/shipping',
      element: <PrivateRoute><Shipping></Shipping></PrivateRoute>
    },

    {
      path: '/orders',
      loader: productsAndCart,
      element: <Orders></Orders>
    },

    {
      path: '/about',
      element: <About></About>
    },

    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/signup',
      element: <SignUp></SignUp>
    }
  ]
  }
  ])
  return (
    <div>
      < RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
