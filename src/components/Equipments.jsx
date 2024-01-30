import Header from "./Header";
import Footer from "./Footer";
import CategoryProducts from "./CategoryProducts";

const tools = [
  {
    name: "Betoneira ",
    content: "Por dia:",
    image: "images/betoneira.jpg",
    price: "20.000kz",
    id: "image 1",
  },
  {
    name: "Rebarbadora",
    content: "Por dia:",
    image: "images/rebarbadora.jpg",
    price: "1.000kz",
    id: "image 2",
  },
  {
    name: "Furadeira",
    content: "Por dia:",
    image: "images/furadeira.jpg",
    price: "1.500kz",
    id: "image 3",
  },

  {
    name: "Escada",
    content: "Por dia:",
    image: "images/escada.jpg",
    price: "2.750kz",
    id: "image 5",
  },
  {
    name: "Serra circular",
    content: "Por dia:",
    image: "images/serra-circular.jpg",
    price: "2.249kz",
    id: "image 6",
  },
  {
    name: "Serrote",
    content: "Por dia:",
    image: "images/serrote.jpg",
    price: "1.750kz",
    id: "image 7",
  },
  {
    name: "Lixadeira",
    content: "Por dia:",
    image: "images/lixadeira.jpg",
    price: "1.300kz",
    id: "image 8",
  },
  {
    name: "Motosserra",
    content: "Por dia:",
    image: "images/motosserra.jpg",
    price: "2.000kz",
    id: "image 9",
  },
];

function Equipments() {
  return (
    <>
      <Header />
      <CategoryProducts tools={tools} heading="Equipamentos" />
      <Footer />
    </>
  );
}

export default Equipments;
