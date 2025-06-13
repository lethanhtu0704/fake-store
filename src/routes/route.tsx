import { createBrowserRouter } from 'react-router'
import RootComponent,{ loader as authLoader } from '../components/RootComponent'
import HomePage from '../pages/HomePage'
import { Navigate } from 'react-router'
import AboutPage from '../pages/AboutPage'
import ProductsPage, { loader as productListLoader } from '../pages/ProductPage'
import SingleProductPage, { loader as productDetailLoader } from '../pages/SingleProductPage'
import ProductRoot from '../components/ProductRoot'
import CartPage from '../pages/CartPage'
import LoginPage from '../pages/LoginPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootComponent />,
    loader: authLoader,
    children: [
      { index: true, element: <Navigate to='/home' /> },
      { path: 'home', element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'cart', element: <CartPage /> },
      { path: 'login', element: <LoginPage /> },
      {
        path: 'products',
        element: <ProductRoot />,
        loader: productListLoader,
        children: [
          { index: true, element: <ProductsPage /> },
          { path: ':id', element: <SingleProductPage />, loader: productDetailLoader }
        ],
      }
    ]
  }
])
