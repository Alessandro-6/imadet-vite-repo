/* eslint-disable react/prop-types */
import Card from "./Card";

function Cards({ tools }) {
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

export default Cards;
