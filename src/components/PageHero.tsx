import { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router'

interface PageHeroProps {
  title: string
  title2?: string
  name2?: string
}

const PageHero: FunctionComponent<PageHeroProps> = ({ title, title2, name2 }) => {
  return (
    <Wrapper>
      <div className='section-center'>
        <h3>
          <Link to='/'>Home</Link> <Link to={`/${title}`}>/ {title}</Link>
          {title2 && (
           
            <span>{name2 && '/'} {name2} </span>  
          
          )}
        </h3>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-primary-10);
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;

  color: var(--clr-primary-1);
  a {
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
`

export default PageHero
