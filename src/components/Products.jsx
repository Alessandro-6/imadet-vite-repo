/* eslint-disable react/prop-types */
import { FaShare } from "react-icons/fa";
import useCart from "../hooks/useCart";

const tools = [
  {
    name: "Betoneira ",
    content: "Lorem ipsum dolor sit",
    image: "images/betoneira.jpg",
    price: "4539kz",
    id: "image 1",
    added: false,
  },
  {
    name: "Compactador de solo ",
    content: "Lorem ipsum dolor sit",
    image: "images/compactador-de-solo.jpg",
    price: "6749kz",
    id: "image 2",
    added: false,
  },
  {
    name: "Rebarbadora ",
    content: "Lorem ipsum dolor sit",
    image: "images/rebarbadora.jpg",
    price: "8979kz",
    id: "image 3",
    added: false,
  },
  {
    name: "Britadeira",
    content: "Lorem ipsum dolor sit",
    image: "images/britadeira.jpg",
    price: "5499kz",
    id: "image 4",
    added: false,
  },
  {
    name: "Motosserra",
    content: "Lorem ipsum dolor sit",
    image: "images/motosserra.jpg",
    price: "5499kz",
    id: "image 5",
    added: false,
  },

  {
    name: "Furadeira",
    content: "Lorem ipsum dolor sit",
    image: "images/furadeira.jpg",
    price: "5499kz",
    id: "image 6",
    added: false,
  },
  {
    name: "Motobomba",
    content: "Lorem ipsum dolor sit",
    image: "images/motobomba.jpg",
    price: "5499kz",
    id: "image 7",
    added: false,
  },
  {
    name: "Andaime",
    content: "Lorem ipsum dolor sit",
    image: "images/andaime.jpg",
    price: "5499kz",
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
            if (cartList.some((cart) => cart.name === name)) return;
            onAddCartItem({ name, price, image });
          }}
        >
          Adicionar ao carrinho
        </button>
        <div className="icon-group">
          <a href="true" className="icon-group__link">
            <FaShare className="icon-group__link--share" />
            <span>partilhar</span>
          </a>
        </div>
      </div>
      <div className="card-bottom">
        <img src={image} alt={id} className="card-bottom__img" />
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
