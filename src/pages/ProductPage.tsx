import ProductList from "../components/ProductList";
import Filters from "../components/Filters";
import Sort from "../components/Sort";
import { store } from "../store/store";
import { getProducts } from "../store/ProductSlice";

const ProductsPage = () => {
  return (
    
      <div className="section-center products">
          <Filters></Filters>
          <div>
            <Sort></Sort>
            <ProductList></ProductList>
          </div>
        </div>
     
  );
};

export async function loader(){
  try {
     store.dispatch(getProducts())
  } catch (error) {
    console.error("Error fetching product list:", error);
    throw error;
  }
}


export default ProductsPage;
