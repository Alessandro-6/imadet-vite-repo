/* eslint-disable react/prop-types */
import { useState } from "react";
import Modal from "./Modal";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdWatchLater } from "react-icons/md";

export default function Newsletter() {
  const [isOpen, setIsOpen] = useState("");
  const [inputValue, setInputValue] = useState("");
  const valid = inputValue.includes("@gmail.com");

  return (
    <>
      <section className="section-newsletter" id="newsletter">
        <h2 className="heading-2 mb-md">Entre em contacto</h2>
        <form
          className="newsletter"
          onSubmit={(e) => {
            e.preventDefault();
            if (!inputValue) return;
            setIsOpen(true);
          }}
        >
          <InputGroup
            label="Nome"
            onSetValue={setInputValue}
            id="name"
            type="text"
            inputValue={inputValue}
            valid={valid}
            autoComplete="given-name"
            placeholder="exemplo"
          />

          <InputGroup
            label="E-mail"
            onSetValue={setInputValue}
            id="email"
            type="email"
            inputValue={inputValue}
            valid={valid}
            autoComplete="email"
            placeholder="exemplo123@gmail.com"
          />
          <InputGroup
            label="Assunto"
            onSetValue={setInputValue}
            id="subject"
            type="text"
            inputValue={inputValue}
            valid={valid}
            autoComplete="off"
            placeholder="opcional"
          />

          <div className="newsletter__input-group">
            <label className="newsletter__label" htmlFor="message">
              Mensagem
            </label>
            <textarea
              id="message"
              autoComplete="off"
              className="newsletter__input"
              placeholder="eu gostaria de perguntar sobre"
            ></textarea>
          </div>

          <button className="btn" type="submit">
            Subscrever
          </button>
        </form>
        <aside className="side-content">
          <SideContent
            title="Endereço"
            element={<FaLocationDot className="side-content__group--icon" />}
            number={1}
          >
            lorem ipsum dolor sit amet
          </SideContent>
          <SideContent
            title="Telefone"
            element={<FaPhoneAlt className="side-content__group--icon" />}
            number={2}
          >
            lorem ipsum dolor sit amet
          </SideContent>
          <SideContent
            title="Aberto"
            element={<MdWatchLater className="side-content__group--icon" />}
            number={3}
          >
            lorem ipsum dolor sit amet
          </SideContent>
        </aside>
      </section>
      {isOpen && (
        <Modal setIsOpen={setIsOpen}>
          <h2>Você subscreveu-se com sucesso!</h2>
        </Modal>
      )}
    </>
  );
}

function InputGroup({
  label,
  onSetValue,
  autoComplete,
  inputValue,
  valid,
  type,
  id,
  placeholder,
}) {
  return (
    <div className="newsletter__input-group">
      <label className="newsletter__label" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        className={`newsletter__input ${inputValue && !valid ? "error" : ""}`}
        type={type}
        name={id}
        autoComplete={autoComplete}
        placeholder={placeholder}
        onChange={(e) => onSetValue(e.target.value)}
      />
    </div>
  );
}

function SideContent({ element, title, number, children }) {
  return (
    <div className={`side-content__group side-content__group--${number}`}>
      {element}
      <div className="side-content__group--content">
        <h3 className="heading-3">{title}</h3>
        <p className="paragraph">{children}</p>
      </div>
    </div>
  );
}
