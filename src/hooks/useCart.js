import { useContext } from "react";
import { ProductsContext } from "../context/ProductsProvider";

function useCart() {
  const context = useContext(ProductsContext);

  return context;
}

export default useCart;
