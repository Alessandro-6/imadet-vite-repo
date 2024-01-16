/* eslint-disable react/prop-types */
function Categories() {
  return (
    <section className="section-categories">
      <h2 className="heading-2 mb-lg">Categorias</h2>
      <div className="categories">
        <CategoriesCard title="Equipamentos" image="./images/image-8.jpg" />
        <CategoriesCard title="Máquinas" image="./images/image-9.jpg" />
      </div>
    </section>
  );
}

export default Categories;

function CategoriesCard({ title, image }) {
  return (
    <div className="categories__card">
      <img src={image} alt="equipments" className="categories__card--img" />
      <h2 className="categories__card--description mt-sm">{title}</h2>
    </div>
  );
}
