import { FunctionComponent } from "react";
import styled from "styled-components";
import PageHero from "../components/PageHero";
import { Outlet } from "react-router";
import { useParams } from "react-router";
 
const ProductRoot: FunctionComponent<{}> = () => {

  let params = useParams()

  return (
    <main>
      <PageHero name2={params.id ? params.id : ""} title2="test"  title="products"></PageHero>
      <Wrapper className="page">
      <Outlet />
      </Wrapper>
    </main>
  );
}

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default ProductRoot;