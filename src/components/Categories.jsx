function Categories() {
  return (
    <section className="section-categories">
      <h2 className="heading-2 mb-lg">Categorias</h2>
      <div className="categories">
        <div className="categories__card">
          <img
            src="./images/image-8.jpg"
            alt="equipments"
            className="categories__card--img"
          />
          <h2 className="categories__card--description mt-sm">Equipamentos</h2>
        </div>
        <div className="categories__card">
          <img
            src="./images/image-9.jpg"
            alt="machines"
            className="categories__card--img"
          />
          <h2 className="categories__card--description mt-sm">Máquinas</h2>
        </div>
      </div>
    </section>
  );
}

export default Categories;
