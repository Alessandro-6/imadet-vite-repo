import CategoryProducts from "./CategoryProducts";
import Footer from "./Footer";
import Header from "./Header";

const tools = [
  {
    name: "Compressor de ar",
    content: "Por dia:",
    image: "images/compressor-ar.jpg",
    price: "3.499kz",
    id: "image 1",
  },
  {
    name: "Britadeira",
    content: "Por dia:",
    image: "images/britadeira.jpg",
    price: "120.000kz",
    id: "image 2",
  },
  {
    name: "Motobomba",
    content: "Por dia",
    image: "images/motobomba.jpg",
    price: "5.499kz",
    id: "image 3",
  },
  {
    name: "Placa vibratória",
    content: "Por dia",
    image: "images/placa-vibratoria.jpg",
    price: "5.499kz",
    id: "image 4",
  },
  {
    name: "Retro escavadeira",
    content: "Por dia",
    image: "images/retroescavadeira.jpg",
    price: "130.000kz",
    id: "image 5",
  },
  {
    name: "Cilíndro compactador",
    content: "Por dia",
    image: "images/cilindro-compactador.jpg",
    price: "150.000kz",
    id: "image 5",
  },
];

function Machines() {
  return (
    <>
      <Header />
      <CategoryProducts tools={tools} heading="Máquinas" />
      <Footer />
    </>
  );
}

export default Machines;
