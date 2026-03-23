import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './Layout/Layout';
import Home from './Home';
import Apps from './components/Pages/Apps/Apps';
import AppsDetails from './components/Pages/AppsDetails/AppsDetails';
import InstalledApps from './components/Pages/InstalledApps/InstalledApps';
import ErrorPage from './components/Shared/ErrorPage/ErrorPage';

const loadApps = async () => {
  const res = await fetch('/dummyData.json')
  const data = await res.json()
  return data
}

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: loadApps,
        Component: Home
      },
      {
        path: "/apps",
        loader: loadApps,
        Component: Apps
      },
      {
        path: "/appsdetails/:id",
        loader: loadApps,
        Component: AppsDetails
      },
      {
        path: "/installation",
        loader: loadApps,
        Component: InstalledApps
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
