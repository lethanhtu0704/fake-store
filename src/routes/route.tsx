import { createBrowserRouter } from 'react-router'
import RootComponent from '../components/RootComponent'
import HomePage from '../pages/HomePage'
import { Navigate } from 'react-router'

export const router = createBrowserRouter([{ path: '/', element: <RootComponent />, children: [
  { index: true, element: <Navigate to="/home" /> },
  { path: 'home', element: <HomePage />}
] }])
