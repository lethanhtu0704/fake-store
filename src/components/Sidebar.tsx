import logo from "../assets/logo.svg";
import { Link } from "react-router";
import { links } from "../utils/constants";
import styled from "styled-components";
import CartButtons from "./CartButtons";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { toggleSideBar } from "../store/StylingSlice";
import { CgClose } from "react-icons/cg";

const Sidebar = () => {
  const { isSideBarOpen } = useSelector((state: RootState) => state.styling)
  const dispatch = useDispatch<AppDispatch>();
  return (
    <SidebarContainer>
      <aside className={isSideBarOpen ? "sidebar show-sidebar" : "sidebar"}>
        <div className="sidebar-header">
          <img src={logo} className="logo" />
          <button
            className="close-btn"
            type="button"
            onClick={()=>{dispatch(toggleSideBar())}}
          >
            <CgClose />
          </button>
        </div>
        <ul className="links">
          {links.map((link) => {
            return (
              <li onClick={() => dispatch(toggleSideBar())}  key={link.id}>
              
                <Link to={link.url} >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                {link.icon}  {link.text}
                </div>
                </Link>
              </li>
            );
          })}
          {/* {myUser && (
            <li>
              <Link to="/checkout" onClick={sideBarCloseHandler}>
                checkout
              </Link>
            </li>
          )} */}
        </ul>
        <CartButtons></CartButtons>
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    transition: var(--transition);
    cursor: pointer;
    color: var(--clr-red-dark);
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: var(--clr-red-light);
  }
  .logo {
    justify-self: center;
    height: 65px;
  }
  .links {
    margin-bottom: 2rem;
     justify-self: center;
     width:100%;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 2rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--clr-grey-3);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }

  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: var(--clr-grey-10);
    color: var(--clr-grey-2);
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;
