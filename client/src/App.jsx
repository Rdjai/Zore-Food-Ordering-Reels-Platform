import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from './src/redux/features/auth/authslice';
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
import StorePaymentPage from './src/dashboard/storeDashboard/pages/store.payout'
import Adminlayout from './src/dashboard/adminDashboard/layout/adminlayout'
import AdminOverview from './src/dashboard/adminDashboard/adminpages/adminoverview'
import AdminAnalytics from './src/dashboard/adminDashboard/adminpages/adminanalytics'
import AdminRevenueReport from './src/dashboard/adminDashboard/adminpages/AdminRevenueReport'
import AdminStorePage from './src/dashboard/adminDashboard/adminpages/AdminStorePage'
import AdminStoreRequests from './src/dashboard/adminDashboard/adminpages/AdminStoreRequests'
import AdminOrdersPage from './src/dashboard/adminDashboard/adminpages/AdminOrdersPage'
import AdminProductsPage from './src/dashboard/adminDashboard/adminpages/AdminProductsPage'
import AdminOffersPage from './src/dashboard/adminDashboard/adminpages/AdminOffersPage'
import AdminPayoutsPage from './src/dashboard/adminDashboard/adminpages/AdminPayoutsPage'
import AdminTransactionsPage from './src/dashboard/adminDashboard/adminpages/AdminTransactionsPage'
import AllRidersPage from './src/dashboard/adminDashboard/adminpages/riderpages/AllRidersPage'
import RiderRequestsPage from './src/dashboard/adminDashboard/adminpages/riderpages/RiderRequestsPage'
import RiderAssignmentsPage from './src/dashboard/adminDashboard/adminpages/riderpages/Deliveries'
import RiderLiveTrackingPage from './src/dashboard/adminDashboard/adminpages/riderpages/RiderLiveTrackingPage'
import RiderVehiclesPage from './src/dashboard/adminDashboard/adminpages/riderpages/RiderVehiclesPage'
import RiderShiftSchedulesPage from './src/dashboard/adminDashboard/adminpages/riderpages/RiderShiftSchedulesPage'
import RiderPerformanceReportsPage from './src/dashboard/adminDashboard/adminpages/riderpages/RiderPerformanceReportsPage'
import RiderSuspendPage from './src/dashboard/adminDashboard/adminpages/riderpages/RiderSuspendPage'
import RiderManagementPage from './src/dashboard/adminDashboard/adminpages/riderpages/RiderManagementPage'
import UserManagementPage from './src/dashboard/adminDashboard/pages/UserManagementPage'
import ContentManagement from './src/dashboard/adminDashboard/pages/ContentManagement'

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
        path: '/store/dashboard/payout',
        element: <StorePaymentPage />
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
  },
  {
    path: "/",
    element: <Adminlayout />,
    children: [
      {
        path: "/admin",
        element: <AdminOverview />
      },
      {
        path: "/admin/dashboard/analytics",
        element: <AdminAnalytics />
      },
      {
        path: "/admin/dashboard/revenue",
        element: <AdminRevenueReport />
      },
      {
        path: "/admin/dashboard/stores",
        element: <AdminStorePage />
      },
      {
        path: "/admin/dashboard/store-requests",
        element: <AdminStoreRequests />
      },
      {
        path: "/admin/dashboard/orders",
        element: <AdminOrdersPage />
      },




      {
        path: "/admin/dashboard/products",
        element: <AdminProductsPage />
      },

      {
        path: "/admin/dashboard/offers",
        element: <AdminOffersPage />
      },

      {
        path: "/admin/dashboard/payouts",
        element: <AdminPayoutsPage />
      },

      {
        path: "/admin/dashboard/transactions",
        element: <AdminTransactionsPage />
      },
      {
        path: "/admin/dashboard/riders",
        element: <AllRidersPage />
      },
      {
        path: "/admin/dashboard/rider-requests",
        element: <RiderRequestsPage />
      },
      {
        path: "/admin/dashboard/rider-assignments",
        element: <RiderAssignmentsPage />
      },
      {
        path: "/admin/dashboard/rider-tracking",
        element: <RiderLiveTrackingPage />
      },
      {
        path: "/admin/dashboard/rider-payouts",
        element: <h1>working on it</h1>
      },
      {
        path: "/admin/dashboard/rider-vehicles",
        element: <RiderVehiclesPage />
      },
      {
        path: "/admin/dashboard/rider-schedules",
        element: <RiderShiftSchedulesPage />
      },
      {
        path: "/admin/dashboard/rider-performance",
        element: <RiderPerformanceReportsPage />
      },
      {
        path: "/admin/dashboard/rider-suspensions",
        element: <RiderSuspendPage />
      },
      {
        path: "/admin/dashboard/rider-overview",
        element: <RiderManagementPage />
      },
      {
        path: "/admin/dashboard/user-overview",
        element: <UserManagementPage />
      },
      {
        path: "/admin/dashboard/content-management",
        element: <ContentManagement />
      },



    ]
  }

])

function App() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  console.log("app level token", useSelector((state) => state.auth));
  useEffect(() => {

  })
  return <RouterProvider router={Router} />
}

export default App
