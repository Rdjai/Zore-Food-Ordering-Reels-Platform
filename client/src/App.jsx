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
import StoreOrders from './src/dashboard/storeDashboard/pages/orders'
import AddNewItems from './src/dashboard/storeDashboard/pages/additems'
import ReelUploadPage from './src/dashboard/storeDashboard/pages/reel.upload'
import StoreProductPage from './src/dashboard/storeDashboard/pages/product.store.dashboard'
import StoreTranscationPage from './src/dashboard/storeDashboard/pages/store.dashboard.payment'

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
        path: '/store/dashboard/orders',
        element: <StoreOrders />

      },
      {
        path: '/store/dashboard/addItems',
        element: <AddNewItems />

      },
      {
        path: '/store/dashboard/reelupload',
        element: <ReelUploadPage />
      },
      {
        path: '/store/dashboard/products',
        element: <StoreProductPage />
      },
      {
        path: '/store/dashboard/transaction',
        element: <StoreTranscationPage />
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
