import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './src/pages/home/homepage'
import AppLayout from './src/layouts/AppLayout'
import FoodPage from './src/pages/store/foodpage'
import LoginPage from './src/pages/auth/login'
import RegisterPage from './src/pages/auth/register'
import ReelPage from './src/pages/reels/reel'
import StoreLayout from './src/dashboard/storeDashboard/layout/storeLayput'
import StoreHome from './src/dashboard/storeDashboard/pages/homepage'

const Router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/explore",
        element: <FoodPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <RegisterPage />,
      },
      {
        path: "/reel",
        element: <ReelPage />,
      },


    ]

  },
  {
    path: '/',
    element: <StoreLayout />,
    children: [
      {
        path: '/store/dashboard',
        element: <StoreHome />
      },
      {
        path: '/orders',
        element: <div>Store Orders Page</div>

      },
      {
        path: '/products',
        element: <div>Store Products Page</div>
      },
      {
        path: '/settings',
        element: <div>Store Settings Page</div>
      },
      {
        path: '/analytics',
        element: <div>Store Analytics Page</div>
      },
      {
        path: '/customers',
        element: <div>Store Customers Page</div>
      },
      {
        path: '/promotions',
        element: <div>Store Promotions Page</div>
      },
      {
        path: '/reels',
        element: <div>Store Reels Page</div>
      }

    ]
  }

])

function App() {
  return <RouterProvider router={Router} />
}

export default App
