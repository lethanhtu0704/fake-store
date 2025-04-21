import { Fragment, FunctionComponent } from 'react'
import Nav from './Navbar'
import { Outlet } from 'react-router'
import Footer from './Footer'

const RootComponent: FunctionComponent = () => {
  return (
    <Fragment>
      <Nav />
      <Outlet />
      <Footer />
    </Fragment>
  )
}

export default RootComponent
