import styled from "styled-components";
import { Link } from "react-router";
import heroBcg from "../assets/hero-bcg.jpeg";
import heroBcg2 from "../assets/hero-bcg-2.jpeg";
import { Fragment } from "react/jsx-runtime";
import { services } from "../utils/constants";

const Hero = () => {
  return (
    <Fragment>

    <Wrapper className="section-center">
      <article className="content">
        <h1>
          Design Your <br></br>
          Comfort zone
        </h1>
        <p>
          G - Interior is specializing in elegant modern interior design and
          construction. Leading in mixing and matching interior design, we
          create unique living spaces for our customers.
        </p>
        <Link to="/products" className="btn hero-btn">
          Shop Now
        </Link>
      </article>
      <article className="img-container">
        <img src={heroBcg} className="main-img" />
        <img src={heroBcg2} className="accent-img" />
      </article>
    </Wrapper>
    <Service>
      <div className="section-center">
        <article className="header">
          <h3>
            Custom furniture <br />
            build for you
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
            asperiores recusandae minima explicabo perspiciatis ea, soluta omnis
            itaque adipisci architecto!
          </p>
        </article>
        <div className="services-center">
          {services.map((item) => {
            return (
              <article className="service" key={item.id}>
                <span className="icon">{item.icon}</span>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </Service>

    </Fragment>

  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: "";
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`;

const Service = styled.section`
  h3,
  h4 {
    color: var(--clr-primary-1);
  }
  padding: 5rem 0;

  background: var(--clr-primary-10);

  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--clr-primary-3);
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: var(--clr-primary-7);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    p {
      color: var(--clr-primary-2);
    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-primary-10);
    color: var(--clr-primary-1);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`;


export default Hero;
