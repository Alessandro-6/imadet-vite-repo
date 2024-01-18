/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

export default function Newsletter() {
  const navigate = useNavigate();

  return (
    <section className="section-newsletter" id="newsletter">
      <h2 className="heading-2 mb-md products-header">Seja fornecedor</h2>
      <div className="step">
        Para se tornar fornecedor da IMADET, siga os passos abaixo:
      </div>
      <div className="step">
        {" "}
        1-
        <span className="inline-btn" onClick={() => navigate("/login")}>
          {" "}
          Subscreva
        </span>{" "}
        a página oficial da IMADET.
      </div>
      <div className="step">
        {" "}
        2-Preencha o formulário de parceria, indicando até dois equipamentos que
        pretende subscrever. Informe a marca, modelo, potência e qualidade de
        cada equipamento. (BAIXAR FORMULÁRIO){" "}
      </div>
      <div className="step">
        3-Envie o formulário preenchido juntamente com vídeos demonstrativos dos
        equipamentos em funcionamento para o nosso email (consultar em
        contactos).
      </div>
      <div className="step">
        {" "}
        4-Aguarde o período de revisão do formulário. Esses passos garantirão
        uma avaliação eficaz e ágil do seu pedido de parceria com a IMADET.
      </div>
    </section>
  );
}
