import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './src/pages/home/homepage'
import AppLayout from './src/layouts/AppLayout'
import FoodPage from './src/pages/store/foodpage'

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

    ]
  },
])

function App() {
  return <RouterProvider router={Router} />
}

export default App
