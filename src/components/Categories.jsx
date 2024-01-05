function Categories() {
  return (
    <section className="section-categories">
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
