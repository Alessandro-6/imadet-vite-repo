/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import Cards from "./Cards";

function CategoryProducts({ tools, heading }) {
  const navigate = useNavigate();
  return (
    <section className="section-category-products">
      <h2 className="heading-2 mb-xl">{heading}</h2>
      <Cards tools={tools} />
      <button className="btn btn-lg mt-lg" onClick={() => navigate(-1)}>
        Voltar
      </button>
    </section>
  );
}

export default CategoryProducts;
