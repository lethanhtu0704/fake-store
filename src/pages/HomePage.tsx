import { FunctionComponent } from 'react'
import Hero from '../components/Hero'
import Contact from '../components/Contact'

const HomePage: FunctionComponent = () => {
  return (
    <main>
      <Hero></Hero>
      <Contact />
    </main>
  )
}

export default HomePage
