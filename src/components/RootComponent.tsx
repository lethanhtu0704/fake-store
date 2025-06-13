import { Fragment, FunctionComponent } from 'react'
import Nav from './Navbar'
import { Outlet } from 'react-router'
import Footer from './Footer'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import Sidebar from './Sidebar'
import { LoaderFunctionArgs } from 'react-router'
import { logout, setCredentials } from '../store/AuthSlice'

const RootComponent: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <Nav />
        <Sidebar />
        <Outlet />
        <Footer />
      </Fragment>
    </Provider>
  )
}

export async function loader({}: LoaderFunctionArgs) {
    const token = localStorage.getItem('accessToken');
    const expiration = localStorage.getItem('tokenExpiration');

     if (token && expiration) {
 const tokenExpiry = parseInt(expiration, 10);
      // If token is still valid
      if (new Date().getTime() < tokenExpiry) {
         store.dispatch(setCredentials({ token }));
      } else {
        // If token is expired, clear the info out.
         store.dispatch(logout());
      }
     }
}

export default RootComponent
