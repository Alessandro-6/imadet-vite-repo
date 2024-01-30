import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
function Categories() {
  return (
    <section className="section-categories" id="section-categories">
      <h2 className="heading-2 mb-lg">Alugar</h2>
      <div className="categories">
        <CategoriesCard
          title="Equipamentos"
          image="images/image-8.jpg"
          to="/equipments"
        />
        <CategoriesCard
          title="Máquinas"
          image="images/image-9.jpg"
          to="/machines"
        />
      </div>
    </section>
  );
}

export default Categories;

function CategoriesCard({ title, image, to }) {
  const navigate = useNavigate();
  return (
    <div className="categories__card" onClick={() => navigate(to)}>
      <picture>
        <source
          className="categories__card--img"
          media="(max-width:37.5em )"
          srcSet={`${image.split(".").join("-mobile.")}`}
        />
        <img
          className="categories__card--img"
          srcSet={`${image}`}
          alt={title}
        />
      </picture>
      <h2 className="categories__card--description mt-sm">{title}</h2>
    </div>
  );
}
