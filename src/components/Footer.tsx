import { FunctionComponent } from "react";
import { Link } from "react-router";
import styled from "styled-components";
const Footer: FunctionComponent = () => {
  return (
    <Wrapper>
      <h5>
        © {new Date().getFullYear()}
        <span>
          <Link to="/"> Redux Store</Link>.    All rights reserved
        </span>
      
      </h5>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  height: 5rem;
   
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-black);
  text-align: center;
  span {
    a {
      text-decoration: none;
      color: var(--clr-primary-5);
    }
  }
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`;

export default Footer;
