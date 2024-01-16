/* eslint-disable react/prop-types */
import Footer from "../components/Footer";
import Header from "../components/Header";
import Accordion from "../components/Accordion";
import { useState } from "react";

function Faq() {
  const [active, setActive] = useState(0);
  return (
    <>
      <Header />
      <main className="faq">
        <h2 className="heading-2 mb-lg">Perguntas frequentes</h2>
        <div className="accordions">
          <Accordion
            question="Quem somos nós"
            num={1}
            active={active}
            setActive={setActive}
          >
            Somos a Imadet uma loja virtual especializada no divulgação de
            materiais de construção civil facilitando o aluguer dos mesmos.
          </Accordion>
          <Accordion
            question="O que fazemos"
            num={2}
            active={active}
            setActive={setActive}
          >
            {" "}
            Nós divulgamos máquinas, ferramentas e equipamentos de construção
            para posteriormente serem alugados a toda e qualquer pessoa que
            queira desfrutar dos nossos serviços sem gastar muito.
          </Accordion>
          <Accordion
            question="Como surgiu a ideia de negócio"
            num={3}
            active={active}
            setActive={setActive}
          >
            A ideia surgiu de uma necessidade de mercado apercebida, imaginamos
            que alguma vez almejou fazer uma pequea reforma na sua casa por
            conta própria porém não tinha o material necessário para tal ou
            achou que seria um disperdício comprar um mateial que usaria apenas
            uma vez, a nossa empresa surgiu com esse objectivo, facilitar a
            comunicação fornecedor-cliente e ajudá-lo a economizar. Trata-se de
            uma ideia vencedora por ser um diferencial no mercado de trabalho,
            há muitas empresas que alugam equipamentos de construção civil mas
            nem todas disponibilizam materiais de baixo, médio e alto custo. A
            nossa loja online permite que não só que os fornecedores lucrem mas
            quem tenha um equipamento, máquina ou ferramenta a sua disposição
            fazendo uma renda extra. Torna também possivel que potenciais
            clientes economizem e evitem custos desnecessários.
          </Accordion>
          <Accordion
            question="Como desenvolveremos nosso serviço"
            num={4}
            active={active}
            setActive={setActive}
          >
            Usaremos a tecnologia a nosso favor para desenvolver um website que
            facilitará o contacto entre fornecedor e cliente, seremos
            responsaveis pelo marketing atingindo assim o consumidor final e
            pelo controle dos preços a serem praticados na página.
          </Accordion>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Faq;
