/* eslint-disable react/prop-types */
import useCart from "../hooks/useCart";
import { FaShare } from "react-icons/fa";

function Card({ name, content, id, image, price }) {
  const { onAddCartItem, cartList } = useCart();

  return (
    <div className="card">
      <div className="card-top">
        <button
          className="btn btn-cart mb-sm"
          onClick={() => {
            if (cartList?.some((cart) => cart.name === name)) return;
            onAddCartItem({ name, price, image });
          }}
        >
          Adicionar ao carrinho
        </button>
        <div className="icon-group">
          <a href="#section-products" className="icon-group__link">
            <FaShare className="icon-group__link--share" />
            <span>partilhar</span>
          </a>
        </div>
      </div>
      <div className="card-bottom">
        <picture>
          <source
            className="card-bottom__img"
            media="(max-width:37.5em )"
            srcSet={`${image.split(".").join("-mobile.")}`}
          />
          <img srcSet={image} alt={id} className="card-bottom__img" />
        </picture>
        <div className="card-bottom__body">
          <h2 className="card-bottom__header">{name}</h2>
          <div className="card-bottom__content">
            <span className="products-description">{content}</span>
          </div>
          <h3 className="products-price">{price}</h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
