/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import useCart from "../hooks/useCart";

function CartList() {
  const { cartList } = useCart();
  return (
    <ul className="cart__list">
      {cartList?.length === 0 ? (
        <h3 className="heading-3">Comece a adicionar 🛒</h3>
      ) : (
        cartList?.map((cart, i) => (
          <CartItem
            name={cart.name}
            price={cart.price}
            image={cart.image}
            key={i}
          />
        ))
      )}
    </ul>
  );
}

export default CartList;

function CartItem({ name, price, image }) {
  const { onRemoveCartItem } = useCart();

  return (
    <li className="cart__item">
      <img src={image} className="cart__img" alt={name} />
      <div className="cart__body">
        <h4>{name}</h4>
        <p className="price">{price}</p>
      </div>
      <button
        className="close-btn ml-auto mr-sm"
        onClick={() => {
          onRemoveCartItem(name);
        }}
      >
        &times;
      </button>
    </li>
  );
}
