import React from 'react'
import ReactDOM from 'react-dom/client'
import { SettingsPage } from './pages/SettingsPage/SettingsPage.tsx'
import { MainPage } from './pages/MainPage/MainPage.tsx'
import { LoginPage } from './pages/LoginPage/LoginPage.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage/>,
  },
  {
    path: '/main',
    element: <MainPage/>,
  },
  {
    path: '/settings',
    element: <SettingsPage/>,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
