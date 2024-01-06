/* eslint-disable react/prop-types */

export default function ContentBox({ title, num, children, element }) {
  return (
    <div className="about mb-lg">
      <div className="about__content">
        <h1 className="heading-1 mb-md">
          {title} {element || ""}
        </h1>
        <p className="paragraph">{children}</p>
      </div>
      <img
        className={`about__img about__img--${num}`}
        src={`images/image-${num}.jpg`}
        alt={`img ${num}`}
      />
    </div>
  );
}
