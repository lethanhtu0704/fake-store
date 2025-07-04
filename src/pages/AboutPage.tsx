import { FunctionComponent } from 'react'
import aboutImg from "../assets/hero-bcg.jpeg";
import styled from 'styled-components';
import PageHero from '../components/PageHero';
const AboutPage: FunctionComponent = () => {
  return (
    <main>
      <PageHero  title="about"></PageHero>
      <Wrapper className="page section-center section">
        <img src={aboutImg} />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            cumque deserunt reprehenderit hic laboriosam, aperiam minima. Libero
            ipsum a, illo laboriosam sequi necessitatibus inventore ducimus
            quibusdam nemo optio rerum est. Magnam voluptas consequuntur
            asperiores, ex nisi repellendus inventore nulla est.
          </p>
        </article>
      </Wrapper>
    </main>
    )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;


export default AboutPage
