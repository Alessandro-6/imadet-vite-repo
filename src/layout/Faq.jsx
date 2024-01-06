/* eslint-disable react/prop-types */
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState } from "react";

function Faq() {
  return (
    <>
      <Header />
      <main className="faq">
        <h2 className="heading-2 mb-lg">Perguntas frequentes</h2>
        <div className="accordions">
          <Accordion question="Quem somos nós">
            Somos a Imadet uma loja virtual especializada no divulgação de
            materiais de construção civil facilitando o aluguer dos mesmos.
          </Accordion>
          <Accordion question="O que fazemos">
            {" "}
            Nós divulgamos máquinas, ferramentas e equipamentos de construção
            para posteriormente serem alugados a toda e qualquer pessoa que
            queira desfrutar dos nossos serviços sem gastar muito.
          </Accordion>
          <Accordion question="Como sugiu a ideia de negócio">
            A ideia surgiu de uma necessidade de mercado apercebida, imaginamos
            que alguma vez almejou fazer uma pequea reforma na sua casa por
            conta própria porém não tinha o material necessário para tal ou
            achou que seria um disperdício comprar um mateial que usaria apenas
            uma vez, a nossa empresa surgiu com esse objectivo, facilitar a
            comunicação fornecedor-cliente e ajudá-lo a economizar.
          </Accordion>
          <Accordion question="Como desenvolveremos nosso serviço">
            Usaremos a tecnologia a nosso favor para desenvolver um website que
            facilitará o contacto entre fornecedor e cliente, seremos
            responsaveis pelo markting atingindo assim o consumidor final e pelo
            controle dos preços a serem praticados na página.
          </Accordion>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Faq;

function Accordion({ children, question }) {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div className="accordion" onClick={() => setShowAnswer(!showAnswer)}>
      <div className="accordion__question">
        <span>{question}?</span>{" "}
        {showAnswer ? (
          <IoIosArrowUp className="accordion__icon" />
        ) : (
          <IoIosArrowDown className="accordion__icon" />
        )}
      </div>
      {showAnswer && <p className="accordion__answer">{children}</p>}
    </div>
  );
}
