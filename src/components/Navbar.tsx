import styled from "styled-components";
import logo2 from "../assets/logo2.PNG";
import { FaBars } from "react-icons/fa";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { NavLink } from "react-router";

// import { useProductsContext } from "../context/main_context";
// import { useUserContext } from "../context/user_context";

const Nav = () => {
  
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <NavLink to="home">
            <img src={logo2} alt="a logo" />
          </NavLink>
          <button className="nav-toggle" >
            <FaBars></FaBars>
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            return (
              <li key={link.id}>
                <NavLink to={`${link.url}`}>{link.text}</NavLink>
              </li>
            );
          })}
          {true && (
            <li>
              <NavLink to="/checkout">Checkout</NavLink>
            </li>
          )}
        </ul>
        <CartButtons></CartButtons>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      height: 100px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  /* Mobile first responsive design */
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1.3rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
        &.active {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;

export default Nav;
