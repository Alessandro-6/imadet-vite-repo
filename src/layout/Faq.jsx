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
            question="Posso alugar com dinheiro"
            num={3}
            active={active}
            setActive={setActive}
          >
            Não, IMADET não aluga com dinheiro.
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
          <Accordion
            question="Quem pode se tornar fornecedor"
            num={5}
            active={active}
            setActive={setActive}
          >
            Qualquer um pode se tornar um fornecedor da IMADET, acreditamos que
            até nossos clientes podem se tornar parceiros da IMADET, Se você
            possui um equipamento funcional e busca uma oportunidade de renda
            extra sem sair de casa, convidamos você a crescer conosco.
          </Accordion>

          <Accordion
            question="Quero alugar como faço"
            num={6}
            active={active}
            setActive={setActive}
          >
            Para alugar qualquer ferramenta, máquina ou equipamento, siga os
            seguintes passos: 1. Subscreva a página.{"\n"} 2. Acesse a aba
            'Alugar'. 3. Adicione ao carrinho o equipamento desejado. 4.
            Prossiga para o pagamento do equipamento. Após o pagamento, o
            equipamento será entregue em um prazo de 1 a 3 horas úteis. Se não
            receber o equipamento neste período, por favor, entre em contato
            conosco.
          </Accordion>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Faq;
