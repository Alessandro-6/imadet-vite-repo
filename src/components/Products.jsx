/* eslint-disable react/prop-types */
import Cards from "./Cards";

const tools = [
  {
    name: "Betoneira ",
    content: "Por dia:",
    image: "images/betoneira.jpg",
    price: "20.000kz",
    id: "image 1",
  },
  {
    name: "Compactador de solo ",
    content: "Por dia:",
    image: "images/compactador-de-solo.jpg",
    price: "4.000kz",
    id: "image 2",
  },
  {
    name: "Rebarbadora",
    content: "Por dia:",
    image: "images/rebarbadora.jpg",
    price: "1.000kz",
    id: "image 3",
  },
  {
    name: "Britadeira",
    content: "Por dia:",
    image: "images/britadeira.jpg",
    price: "120.000kz",
    id: "image 4",
  },
  {
    name: "Motosserra",
    content: "Por dia:",
    image: "images/motosserra.jpg",
    price: "2.000kz",
    id: "image 5",
  },

  {
    name: "Furadeira",
    content: "Por dia:",
    image: "images/furadeira.jpg",
    price: "1.500kz",
    id: "image 6",
  },
  {
    name: "Motobomba",
    content: "Por dia",
    image: "images/motobomba.jpg",
    price: "5.499kz",
    id: "image 7",
  },
  {
    name: "Andaime",
    content: "Por dia:",
    image: "images/andaime.jpg",
    price: "1.000kz",
    id: "image 8",
  },
];

export default function Products() {
  return (
    <section className="section-products">
      <header className="products-header mb-xl">
        <h2 className="heading-2 mb-sm">Nossos Produtos</h2>
        <p className="p-h2">A solução para os problemas da sua obra</p>
      </header>
      <Cards tools={tools} />
    </section>
  );
}
