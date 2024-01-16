/* eslint-disable react/prop-types */
import { IoIosArrowUp } from "react-icons/io";

export default function Accordion({
  children,
  question,
  num,
  active,
  setActive,
}) {
  return (
    <div
      className="accordion"
      onClick={() => setActive((prevNum) => (prevNum === num ? 0 : num))}
    >
      <div className="accordion__question">
        <span>{question}?</span>{" "}
        <IoIosArrowUp
          className={`accordion__icon ${
            active === num ? "accordion__icon--hidden" : ""
          }`}
        />
      </div>
      <p className={`accordion__answer ${active === num ? "" : "hidden"}`}>
        {children}
      </p>
    </div>
  );
}
