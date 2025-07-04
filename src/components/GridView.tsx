import { FunctionComponent } from "react";
import styled from "styled-components";
import Product from "./Product";
import {ProductModel } from "../types/product";

interface ProductProps {
  products: ProductModel[];
}

const GridView : FunctionComponent< ProductProps> = ({ products }) => {
  return (
    <Wrapper>
      <div className="products-container">
        {products.map((product) => {
          return <Product key={product.id} {...product}></Product>;
        })}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  img {
    height: 175px;
  }

  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default GridView;
