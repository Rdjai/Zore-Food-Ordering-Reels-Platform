import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './src/pages/home/homepage'
import AppLayout from './src/layouts/AppLayout'
import FoodPage from './src/pages/store/foodpage'
import LoginPage from './src/pages/auth/login'
import RegisterPage from './src/pages/auth/register'

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

    ]
  },
])

function App() {
  return <RouterProvider router={Router} />
}

export default App
