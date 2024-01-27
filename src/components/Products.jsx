/* eslint-disable react/prop-types */
import { FaShare } from "react-icons/fa";
import useCart from "../hooks/useCart";

const tools = [
  {
    name: "Betoneira ",
    content: "Por dia:",
    image: "images/betoneira.jpg",
    price: "20.000kz",
    id: "image 1",
    added: false,
  },
  {
    name: "Compactador de solo ",
    content: "Por dia:",
    image: "images/compactador-de-solo.jpg",
    price: "4.000kz",
    id: "image 2",
    added: false,
  },
  {
    name: "Rebarbadora",
    content: "Por dia:",
    image: "images/rebarbadora.jpg",
    price: "1.000kz",
    id: "image 3",
    added: false,
  },
  {
    name: "Britadeira",
    content: "Por dia:",
    image: "images/britadeira.jpg",
    price: "120.000kz",
    id: "image 4",
    added: false,
  },
  {
    name: "Motosserra",
    content: "Por dia:",
    image: "images/motosserra.jpg",
    price: "2.000kz",
    id: "image 5",
    added: false,
  },

  {
    name: "Furadeira",
    content: "Por dia:",
    image: "images/furadeira.jpg",
    price: "1.500kz",
    id: "image 6",
    added: false,
  },
  {
    name: "Motobomba",
    content: "Por dia",
    image: "images/motobomba.jpg",
    price: "5.499kz",
    id: "image 7",
    added: false,
  },
  {
    name: "Andaime",
    content: "Por dia:",
    image: "images/andaime.jpg",
    price: "1.000kz",
    id: "image 8",
    added: false,
  },
];

export default function Products() {
  return (
    <section className="section-products">
      <header className="products-header mb-xl">
        <h2 className="heading-2 mb-sm">Nossos Produtos</h2>
        <p className="p-h2">A solução para os problemas da sua obra</p>
      </header>
      <Cards />
    </section>
  );
}

function Cards() {
  return (
    <div className="cards">
      {tools.map((tool, i) => (
        <Card
          name={tool.name}
          content={tool.content}
          image={tool.image}
          id={tool.image}
          price={tool.price}
          key={tool.id}
          index={i}
        />
      ))}
    </div>
  );
}

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
