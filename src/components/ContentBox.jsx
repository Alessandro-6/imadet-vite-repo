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

      <picture>
        <source
          media="(max-width:37.5em)"
          srcSet={`images/image-${num}-mobile.jpg`}
        />
        <img
          className={`about__img about__img--${num}`}
          src={`images/image-${num}.jpg`}
          alt={`img ${num}`}
        />
      </picture>
    </div>
  );
}
