import { Fragment, FunctionComponent } from 'react'
import Nav from './Navbar'
import { Outlet } from 'react-router'
import Footer from './Footer'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import Sidebar from './Sidebar'

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

export default RootComponent
