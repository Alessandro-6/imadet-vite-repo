/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

const ProductsContext = createContext();
function ProductsProvider({ children }) {
  const [openCartList, setOpenCartList] = useState(false);
  const [cartList, setCartList] = useState(
    JSON.parse(localStorage.getItem("cart-list"))
  );

  const subtotal = cartList?.reduce(
    (acc, curCart) => acc + parseInt(curCart.price),
    0
  );
  function handleAddCartItem(cartItem) {
    setCartList((cartList) => [...cartList, cartItem]);
  }

  function handleRemoveCartItem(selectedCartItem) {
    setCartList(
      cartList.filter((cartItem) => cartItem.name !== selectedCartItem)
    );
  }

  useEffect(
    function () {
      function handleChangeCartList() {
        localStorage.setItem("cart-list", JSON.stringify(cartList));
      }

      handleChangeCartList();
    },
    [cartList]
  );

  return (
    <ProductsContext.Provider
      value={{
        openCartList,
        setOpenCartList,
        cartList,
        setCartList,
        onAddCartItem: handleAddCartItem,
        onRemoveCartItem: handleRemoveCartItem,
        subtotal,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export { ProductsProvider, ProductsContext };
