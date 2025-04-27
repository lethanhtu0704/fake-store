import GridView from "./GridView";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import Loading from "./Loading";
import ListView from "./ListView";

const ProductList = () => {

  const { filtered__products,view__type} = useSelector(
    (state: RootState) => state.products
  );

  const {isLoading} = useSelector(
    (state: RootState) => state.styling
  );

  if(isLoading){
    return <Loading />
  }

  if (filtered__products.length < 1) {
    return (
      <h5 style={{ textTransform: "none" }}>
        Sorry, there is no product match your condition!
      </h5>
    );
  }
  

  return (
    <>
      { view__type && <GridView products={filtered__products}></GridView>}
      {!view__type && <ListView products={filtered__products}></ListView>}
    </>
  );
};



export default ProductList;
